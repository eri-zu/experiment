import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import gpgpuShader from "./shader/gpgpu/main.frag";
import { Pane } from "tweakpane";
import * as THREE from "three";
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";
import { random } from "../../../util/math";

export class Item {
  constructor(group, renderer) {
    this.group = group;
    this.renderer = renderer;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.init();
    this.createParticle();
    // this.addGUI();
  }

  setParam() {
    this.num = 300000; // パーティクルの数
    this.sizeW = Math.ceil(Math.sqrt(this.num)); // 正方形に収める、1辺の長さ（パーティクルがおさまるサイズのFBO）
    this.sizeH = this.sizeW;
  }

  addGUI() {
    this.pane = new Pane();

    this.pane.addBinding(
      this.gpgpu.positionVariable.material.uniforms.uAmplitude,
      "value",
      {
        label: "uAmplitude",
        min: 0,
        max: 5,
      }
    );
    this.pane.addBinding(
      this.gpgpu.positionVariable.material.uniforms.uSpeed,
      "value",
      {
        label: "uSpeed",
        min: 0,
        max: 8,
      }
    );
    this.pane.addBinding(
      this.gpgpu.positionVariable.material.uniforms.uNoiseSize,
      "value",
      {
        label: "uNoiseSize",
        min: 0,
        max: 8,
      }
    );
  }

  /**
   * 1. GPU Compute
   */
  init() {
    // ①instance作成
    this.gpgpu = {};

    this.gpgpu.computation = new GPUComputationRenderer(
      this.sizeW, // 幅
      this.sizeH, // 高さ
      this.renderer // renderer
    );

    // ②位置情報保存用textureを用意
    this.baseTexture = this.gpgpu.computation.createTexture();
    const dataArray = this.baseTexture.image.data;

    // ③初期位置セット
    // 球体に配置
    for (let i = 0; i < dataArray.length; i++) {
      const i4 = i * 4;

      // 方位角
      const r = Math.random() * 2 - 1; // -1 〜 1
      const theta = r * Math.PI; // -π〜π

      // 仰角
      const p = Math.random() * 2 - 1; // -1 〜 1
      const phi = Math.asin(p); // -π/2 〜 π/2（均等分布）

      const radius = random(0.5, 1.0);
      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi) * Math.sin(theta);
      const z = radius * Math.sin(phi);
      const w = Math.random() * 0.5 + 0.5; // 0.5 - 1

      dataArray[i4] = x;
      dataArray[i4 + 1] = y;
      dataArray[i4 + 2] = z;
      dataArray[i4 + 3] = w; // life
    }

    // ③shaderプログラムアタッチ
    // 2枚のRenderTargetが作成され、ピンポンバッファが可能になる
    this.gpgpu.positionVariable = this.gpgpu.computation.addVariable(
      "uParticles", // 更新情報が書き込まれたtextureの名前
      gpgpuShader, // 更新用shader
      this.baseTexture // 初期状態のtexture
    );

    // ④shaderプログラムアタッチ（依存関係を設定）
    // 変数の計算にどの変数を参照するか(この場合、自身を参照する)
    this.gpgpu.computation.setVariableDependencies(
      this.gpgpu.positionVariable,
      [this.gpgpu.positionVariable]
    );

    // ⑤uniformを設定
    const m = this.gpgpu.positionVariable.material;
    m.uniforms.uTime = { value: 0 };
    m.uniforms.uBaseTexture = { value: this.baseTexture.clone() };
    m.uniforms.uResolution = {
      value: new THREE.Vector2(this.sizeW, this.sizeH),
    };
    m.uniforms.uSpeed = { value: 0.3 };
    m.uniforms.uAmplitude = { value: 0.03 };
    m.uniforms.uNoiseSize = { value: 0.8 };

    // ⑥初期化
    this.gpgpu.computation.init();
  }

  /**
   * 2. 描画するparticlesを作成
   */
  createParticle() {
    // geometry
    const g = new THREE.BufferGeometry();
    g.setDrawRange(0, this.num); // positionの代わり

    // custom attribute（uv)作成
    const particlesUv = new Float32Array(this.num * 2);

    for (let y = 0; y < this.sizeH; y++) {
      for (let x = 0; x < this.sizeW; x++) {
        const i = y * this.sizeH + x;
        const i2 = i * 2;

        // 0.5：1pxの真ん中にする
        const uvX = (x + 0.5) / this.sizeW;
        const uvY = (y + 0.5) / this.sizeH;

        particlesUv[i2] = uvX;
        particlesUv[i2 + 1] = uvY;
      }
    }

    g.setAttribute("aUv", new THREE.BufferAttribute(particlesUv, 2));

    // material
    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTexture: { value: null },
        uResolution: { value: new THREE.Vector2(this.sizeW, this.sizeH) },
        uColor1: { value: new THREE.Color("#fff") },
        uColor2: { value: new THREE.Color("rgb(58, 74, 160)") },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Points(g, m);
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    // time
    this.gpgpu.positionVariable.material.uniforms.uTime.value = time;

    // texture更新
    // ピンポンバッファにつき、複数のFBOを使ってるので
    // RenderTarget.textureを毎フレーム送る必要ある
    this.mesh.material.uniforms.uTexture.value =
      this.gpgpu.computation.getCurrentRenderTarget(
        this.gpgpu.positionVariable
      ).texture;

    // GPGPUの実行
    this.gpgpu.computation.compute();
  }

  onResize(w, h) {
    // this.setParam();
  }

  setEvents() {}
}
