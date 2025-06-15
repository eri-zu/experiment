import { Renderer } from "./renderer";
import { Camera } from "./orthographicCamera";
import { BackObj } from "./backObj";
import { Obj } from "./obj";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";
import html2canvas from "html2canvas";

export class Gl {
  constructor(wrap) {
    this.wrap = wrap;
    this.wrapW = this.wrap.clientWidth;
    this.wrapH = this.wrap.clientHeight;

    this.setup();
    this.setEvents();
  }

  setParam() {
    this.clock = new THREE.Clock();
    this.prevTime = Date.now();
    this.timeDelta = 0;
    this.time = 0;

    this.isLoaded = false;
    this.isHelper = false;
    this.isControl = false;
  }

  async setup() {
    this.setParam();

    // html2 canvas
    const captureCanvas = await this.loadCanvas();
    const canvasTexture = new THREE.CanvasTexture(captureCanvas);
    canvasTexture.needsUpdate = true;

    // texture
    const texture = await this.loadImage();
    this.isLoaded = true;

    // オフスクリーン
    this.renderTarget = new THREE.WebGLRenderTarget(this.wrapW, this.wrapH, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    this.offscreenCamera = new Camera(this.wrapW, this.wrapH);
    this.offscreenScene = new THREE.Scene();
    this.backObj = new BackObj(texture, this.offscreenScene);

    // 通常シーン
    this.renderer = new Renderer(this.canvas, this.wrapW, this.wrapH);
    this.wrap.appendChild(this.renderer.instance.domElement);
    this.camera = new Camera(this.wrapW, this.wrapH);
    this.scene = new THREE.Scene();
    this.obj = new Obj(this.renderTarget.texture, canvasTexture, this.scene);

    this.setUtility();
  }

  async loadImage() {
    const loader = new THREE.TextureLoader();

    const p = new Promise((resolve) => {
      const texture = loader.load("./assets/img/disp.png", () => {
        resolve(texture);
      });
    });

    return p;
  }

  async loadCanvas() {
    const dom = document.getElementById("capture");
    dom.style.width = `${window.innerWidth}px`;
    dom.style.height = `${window.innerHeight}px`;

    return html2canvas(dom, { scale: window.devicePixelRatio });
  }

  onMouseMove(mouseX, mouseY) {
    if (this.isLoaded) {
      this.backObj.onMouseMove(mouseX, mouseY);
    }
  }

  onUpdate() {
    if (this.isLoaded) {
      const now = Date.now();
      this.timeDelta = (now - this.prevTime) / 1000; //  フレームごとの経過時間
      // this.timeDelta = this.clock.getDelta(); // フレームごとの経過時間
      this.time += this.timeDelta; // 経過時間

      if (this.controls) this.controls.update();

      this.backObj.onUpdate(this.timeDelta, this.time);
      // this.obj.onUpdate(this.timeDelta, this.time);

      // オフスクリーン描画
      // フレームバッファをバインド
      this.renderer.instance.setRenderTarget(this.renderTarget);
      // オフスクリーン用のシーンをレンダリングする
      this.renderer.instance.render(
        this.offscreenScene,
        this.offscreenCamera.instance
      );
      // フレームバッファのバインドを解除
      this.renderer.instance.setRenderTarget(null);
      // 通常シーンを画面に描画
      this.renderer.instance.render(this.scene, this.camera.instance);

      this.prevTime = now;
    }
  }

  onResize() {
    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;
    this.wrapW = w;
    this.wrapH = h;

    this.camera.onResize(w, h);
    this.offscreenCamera.onResize(w, h);

    this.backObj.onResize(w, h);
    this.obj.onResize(w, h);

    this.renderer.onResize(w, h);
    this.renderTarget.setSize(w, h);
  }

  setUtility() {
    // helper
    if (this.isHelper) {
      const axesBarLength = 600.0;
      this.axesHelper = new THREE.AxesHelper(axesBarLength);
      this.scene.add(this.axesHelper);
    }

    // orbit control
    if (this.isControl) {
      this.controls = new OrbitControls(this.camera.instance, this.canvas);
    }
  }

  setEvents() {}
}
