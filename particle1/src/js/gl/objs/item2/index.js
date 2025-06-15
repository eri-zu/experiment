import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Item2 {
  constructor(texture, group, camera) {
    this.texture = texture;
    this.group = group;
    this.camera = camera;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.rayCaster = new THREE.Raycaster();

    this.setParam();
    this.createMouseTexture();
    this.createMouseTrackPlane();
    this.createImgPlane();
  }

  setParam() {
    this.pixelRatio = window.devicePixelRatio;
    this.baseW = gb.w > 768 ? 1280 : 768;
    const scale = 0.7;

    this.PARAM = {
      w: ((485 * scale) / this.baseW) * gb.w,
      h: ((640 * scale) / this.baseW) * gb.w,
      sw: (120 / this.baseW) * gb.w,
      canvasW: ((485 * 0.3) / this.baseW) * gb.w,
      canvasH: ((640 * 0.3) / this.baseW) * gb.w,
      glowW: (50 / this.baseW) * gb.w,
      glowH: (50 / this.baseW) * gb.w,
      pointSize: (2 / this.baseW) * gb.w * this.pixelRatio,
    };

    this.mouse = new THREE.Vector2(9999, 9999);
    this.prevMouse = new THREE.Vector2(9999, 9999);
    this.mouseDist = 0;
  }

  createMouseTexture() {
    this.mouseCanvas = document.createElement("canvas");
    // document.body.append(this.mouseCanvas); // デバッグ用

    this.mouseCanvas.width = this.PARAM.canvasW;
    this.mouseCanvas.height = this.PARAM.canvasH;

    this.mouseCanvas.style.width = `${this.PARAM.canvasW}px`;
    this.mouseCanvas.style.height = `${this.PARAM.canvasH}px`;
    this.mouseCanvas.style.zIndex = 10;
    this.mouseCanvas.style.position = "fixed";
    this.mouseCanvas.style.top = 0;
    this.mouseCanvas.style.left = 0;

    this.ctx = this.mouseCanvas.getContext("2d");
    this.glow = new Image();
    this.glow.src = "./assets/img/glow.png";

    this.canvasTexture = new THREE.CanvasTexture(this.mouseCanvas);
  }

  createMouseTrackPlane() {
    // PointsにrayCaster効かないので、planeを別途作成
    // Points用planeと重ねる（大きさ合わせる）
    this.mousePlane = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sw
    );

    const m = new THREE.MeshBasicMaterial({
      color: "red", // デバッグ用
    });

    this.mouseTrackMesh = new THREE.Mesh(this.mousePlane, m);
    this.mouseTrackMesh.position.x = gb.w > 768 ? gb.w * 0.5 * 0.5 : 0;
    this.mouseTrackMesh.position.y = gb.w > 768 ? 0 : -gb.h * 0.5 * 0.5;
    this.mouseTrackMesh.visible = false;
    this.group.add(this.mouseTrackMesh);
  }

  createImgPlane() {
    this.particlePlane = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sw
    );

    // パフォーマンス
    this.particlePlane.setIndex(null);
    this.particlePlane.deleteAttribute("normal");

    const num = this.particlePlane.attributes.position.count;
    const randomArray = [];
    const randomAngle = [];

    for (let i = 0; i < num; i++) {
      randomArray.push(Math.random());
      randomAngle.push(Math.random() * Math.PI);
    }

    this.particlePlane.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(new Float32Array(randomArray), 1)
    );
    this.particlePlane.setAttribute(
      "aRandomAngle",
      new THREE.BufferAttribute(new Float32Array(randomAngle), 1)
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        // uTime: { value: 0 },
        uTexture: { value: this.texture },
        uMouseTexture: { value: this.canvasTexture },
        uPointSize: { value: this.PARAM.pointSize },
      },
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Points(this.particlePlane, m);
    this.mesh.position.x = gb.w > 768 ? gb.w * 0.5 * 0.5 : 0;
    this.mesh.position.y = gb.w > 768 ? 0 : -gb.h * 0.5 * 0.5;
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    // マウス座標を変換
    const x = (mouseX / gb.w) * 2.0 - 1.0;
    const y = (mouseY / gb.h) * 2.0 - 1.0;
    const v = new THREE.Vector2(x, -y);

    // レイキャスターに正規化済マウス座標とカメラをセット
    this.rayCaster.setFromCamera(v, this.camera);

    // uv取得
    const intersects = this.rayCaster.intersectObject(this.mouseTrackMesh);

    if (intersects.length > 0) {
      const uv = intersects[0].uv;
      this.mouse.x = uv.x * this.PARAM.canvasW;
      this.mouse.y = (1.0 - uv.y) * this.PARAM.canvasH; // 座標反転
    }
  }

  onUpdate(timeDelta, time) {
    // this.mesh.material.uniforms.uTime.value = time;

    if (this.ctx) {
      // fade out（軌跡)
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 0.02; // fade（※軌跡の長さコントロール）
      this.ctx.fillRect(0, 0, this.PARAM.canvasW, this.PARAM.canvasH);

      // mouseの動く量
      // 動いてない時は軌跡を消す
      this.mouseDist = this.prevMouse.distanceTo(this.mouse);
      this.prevMouse.x = this.mouse.x;
      this.prevMouse.y = this.mouse.y;
      const alpha = Math.min(this.mouseDist * 0.1, 1.0); // 1超えないように

      // draw
      this.ctx.globalCompositeOperation = "lighten";
      // this.ctx.globalAlpha = 1;
      this.ctx.globalAlpha = alpha;
      this.ctx.drawImage(
        this.glow,
        this.mouse.x - this.PARAM.glowW * 0.5,
        this.mouse.y - this.PARAM.glowH * 0.5,
        this.PARAM.glowW,
        this.PARAM.glowH
      );

      // texture 更新
      this.canvasTexture.needsUpdate = true;
    }
  }

  onResize(w, h, camera) {
    this.camera = camera;
    this.setParam();

    // particle plane
    this.particlePlane.dispose();
    this.particlePlane = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sw
    );
    this.particlePlane.setIndex(null);
    this.particlePlane.deleteAttribute("normal");

    const num = this.particlePlane.attributes.position.count;
    const randomArray = [];
    const randomAngle = [];

    for (let i = 0; i < num; i++) {
      randomArray.push(Math.random());
      randomAngle.push(Math.random() * Math.PI);
    }

    this.particlePlane.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(new Float32Array(randomArray), 1)
    );
    this.particlePlane.setAttribute(
      "aRandomAngle",
      new THREE.BufferAttribute(new Float32Array(randomAngle), 1)
    );

    this.mesh.geometry = this.particlePlane;
    this.mouseCanvas.width = this.PARAM.canvasW;
    this.mouseCanvas.height = this.PARAM.canvasH;
    this.canvasTexture = new THREE.CanvasTexture(this.mouseCanvas);
    this.mesh.material.uniforms.uMouseTexture.value = this.canvasTexture;
    this.mesh.material.uniforms.uPointSize.value = this.PARAM.pointSize;

    // mouse plane
    this.mousePlane.dispose();
    this.mousePlane = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sw
    );
    this.mouseTrackMesh.geometry = this.mousePlane;

    this.mesh.position.x = gb.w > 768 ? gb.w * 0.5 * 0.5 : 0;
    this.mesh.position.y = gb.w > 768 ? 0 : -gb.h * 0.5 * 0.5;
    this.mouseTrackMesh.position.x = gb.w > 768 ? gb.w * 0.5 * 0.5 : 0;
    this.mouseTrackMesh.position.y = gb.w > 768 ? 0 : -gb.h * 0.5 * 0.5;
  }

  setEvents() {}
}
