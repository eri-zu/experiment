import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Item1 {
  constructor(textures, group, camera) {
    this.textures = textures;
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
  }

  setParam() {
    this.baseW = gb.w > 768 ? 1280 : 768;
    const scale = gb.w > 768 ? 0.7 : 0.8;

    this.PARAM = {
      w: ((640 * scale) / this.baseW) * gb.w,
      h: ((400 * scale) / this.baseW) * gb.w,
      sw: (100 / this.baseW) * gb.w,
      canvasW: ((640 * 1.0) / this.baseW) * gb.w,
      canvasH: ((400 * 1.0) / this.baseW) * gb.w,
      glowW: (100 / this.baseW) * gb.w,
      glowH: (100 / this.baseW) * gb.w,
      pointSize: (5 / this.baseW) * gb.w,
      renderSize: (scale / this.baseW) * gb.w,
      basePower: 100 * scale,
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
    this.glow.src = "/assets/img/glow.png";

    this.canvasTexture = new THREE.CanvasTexture(this.mouseCanvas);
  }

  createMouseTrackPlane() {
    this.baseW = 1280;
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
    this.mouseTrackMesh.position.x =
      gb.w > 768 ? -gb.w * 0.5 * 0.5 + this.PARAM.w * 0.2 * 0.5 : 0;
    this.mouseTrackMesh.position.y = gb.w > 768 ? 0 : this.PARAM.h * 0.6;

    this.mouseTrackMesh.visible = false;
    this.group.add(this.mouseTrackMesh);
  }

  getImageData(image) {
    const canvas = document.createElement("canvas");
    canvas.style.zIndex = 9;

    const ctx = canvas.getContext("2d");
    const w = 640;
    const h = 400;
    canvas.width = w;
    canvas.height = h;

    // 1pxのrgb情報
    ctx.drawImage(image, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;

    const positionArray = [];
    const colorArray = [];
    const randomArray = [];
    const randomAngleArray = [];
    const uvArray = [];
    const size = this.PARAM.renderSize; // 表示サイズ
    const interval = 1; // 間引き間隔

    for (let y = 0; y < h; y += interval) {
      for (let x = 0; x < w; x += interval) {
        const index = (y * w + x) * 4; // 0, 4, 8...

        // position
        // webGLの座標に変更（画面中心を（0, 0））
        const _x = (x - w / 2) * size;
        const _y = -(y - h / 2) * size;
        positionArray.push(_x, _y, 0);

        // color
        const r = data[index] / 255;
        const g = data[index + 1] / 255;
        const b = data[index + 2] / 255;
        const a = data[index + 3] / 255;
        colorArray.push(r, g, b, a);

        // random number
        randomArray.push(Math.random());

        // random angle
        randomAngleArray.push(Math.random() * Math.PI);

        // uv
        const u = x / w;
        const v = 1.0 - y / h; // 上下反転
        uvArray.push(u, v);
      }
    }

    this.createImgPlane(
      positionArray,
      colorArray,
      randomArray,
      randomAngleArray,
      uvArray
    );
  }

  createImgPlane(
    positionArray,
    colorArray,
    randomArray,
    randomAngleArray,
    uvArray
  ) {
    // カスタムジオメトリ
    this.particleGeometry = new THREE.BufferGeometry();

    // attribute
    this.particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positionArray), 3.0)
    );
    this.particleGeometry.setAttribute(
      "aColor",
      new THREE.BufferAttribute(new Float32Array(colorArray), 4.0)
    );
    this.particleGeometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(new Float32Array(randomArray), 1.0)
    );
    this.particleGeometry.setAttribute(
      "aRandomAngle",
      new THREE.BufferAttribute(new Float32Array(randomAngleArray), 1.0)
    );
    this.particleGeometry.setAttribute(
      "uv",
      new THREE.BufferAttribute(new Float32Array(uvArray), 2.0)
    );

    const material = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        // uTime: { value: 0 },
        uProgress: { value: 0 },
        uMouseTexture: { value: this.canvasTexture },
        uPointSize: { value: this.PARAM.pointSize },
        uBasePower: { value: this.PARAM.basePower },
      },
      transparent: true, // shaderのalphaを反映
    });

    this.mesh = new THREE.Points(this.particleGeometry, material);
    this.mesh.position.x =
      gb.w > 768 ? -gb.w * 0.5 * 0.5 + this.PARAM.w * 0.2 * 0.5 : 0;
    this.mesh.position.y = gb.w > 768 ? 0 : this.PARAM.h * 0.6;
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    // マウス座標を変換 ワールド座標
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
    // if (this.mesh) this.mesh.material.uniforms.uTime.value = time;

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

      // textures 更新
      this.canvasTexture.needsUpdate = true;
    }
  }

  onResize(w, h, camera) {
    this.camera = camera;
    this.setParam();

    // mouse plane
    this.mousePlane.dispose();
    this.mousePlane = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sw
    );
    this.mouseTrackMesh.geometry = this.mousePlane;

    const _w = 640;
    const _h = 400;
    const interval = 1;
    const positionArray = [];
    const size = this.PARAM.renderSize; // 表示サイズ

    for (let y = 0; y < _h; y += interval) {
      for (let x = 0; x < _w; x += interval) {
        // position
        // webGLの座標に変更（画面中心を（0, 0））
        const _x = (x - _w / 2) * size;
        const _y = -(y - _h / 2) * size;
        positionArray.push(_x, _y, 0);
      }
    }

    this.particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positionArray), 3.0)
    );

    this.mouseCanvas.width = this.PARAM.canvasW;
    this.mouseCanvas.height = this.PARAM.canvasH;
    this.canvasTexture = new THREE.CanvasTexture(this.mouseCanvas);
    this.mesh.material.uniforms.uMouseTexture.value = this.canvasTexture;
    this.mesh.material.uniforms.uPointSize.value = this.PARAM.pointSize;

    this.mouseTrackMesh.position.x =
      gb.w > 768 ? -gb.w * 0.5 * 0.5 + this.PARAM.w * 0.2 * 0.5 : 0;
    this.mouseTrackMesh.position.y = gb.w > 768 ? 0 : this.PARAM.h * 0.6;

    this.mesh.position.x =
      gb.w > 768 ? -gb.w * 0.5 * 0.5 + this.PARAM.w * 0.2 * 0.5 : 0;
    this.mesh.position.y = gb.w > 768 ? 0 : this.PARAM.h * 0.6;
  }

  setEvents() {
    const image = new Image();

    image.addEventListener("load", () => {
      this.getImageData(image);
    });

    image.src = "/assets/img/1.jpg";
  }
}
