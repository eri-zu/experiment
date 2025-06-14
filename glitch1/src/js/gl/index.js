import { Renderer } from "./renderer";
import { Camera } from "./perspectiveCamera";
import { BackGround } from "./background";
import { Obj } from "./obj";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";
// import { Pane } from "tweakpane";

export class Gl {
  constructor(wrap) {
    this.wrap = wrap;
    this.wrapW = this.wrap.clientWidth;
    this.wrapH = this.wrap.clientHeight;

    this.setup();
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
    const texture = await this.load();
    this.isLoaded = true;

    this.canvas = this.wrap.querySelector("canvas");

    // オフスクリーン
    const pixelRatio = window.devicePixelRatio;
    this.renderTarget = new THREE.WebGLRenderTarget(
      this.wrapW * pixelRatio,
      this.wrapH * pixelRatio
    );
    this.offscreenCamera = new Camera(this.wrapW, this.wrapH);
    this.offscreenScene = new THREE.Scene();
    this.objs = new BackGround(texture, this.offscreenScene);

    // 通常シーン
    this.renderer = new Renderer(this.canvas, this.wrapW, this.wrapH);
    this.camera = new Camera(this.wrapW, this.wrapH);
    this.scene = new THREE.Scene();
    this.obj = new Obj(this.renderTarget.texture, this.scene);

    this.setUtility();
  }

  async load() {
    const loader = new THREE.TextureLoader();

    const p = new Promise((resolve) => {
      const texture = loader.load("./assets/img/1.jpg", () => {
        resolve(texture);
      });
    });

    return p;
  }

  onMouseMove(mouseX, mouseY) {
    this.objs.onMouseMove(mouseX, mouseY);
  }

  onUpdate() {
    if (this.isLoaded) {
      const now = Date.now();
      this.timeDelta = (now - this.prevTime) / 1000; //  フレームごとの経過時間
      // this.timeDelta = this.clock.getDelta(); // フレームごとの経過時間
      this.time += this.timeDelta; // 経過時間

      if (this.controls) this.controls.update();

      this.objs.onUpdate(this.timeDelta, this.time);
      this.obj.onUpdate(this.timeDelta, this.time);

      // オフスクリーン描画
      this.renderer.instance.setRenderTarget(this.renderTarget);
      this.renderer.instance.render(
        this.offscreenScene,
        this.offscreenCamera.instance
      );
      this.renderer.instance.setRenderTarget(null);

      // 画面に描画
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
    this.objs.onResize(w, h);
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
}
