import { Renderer } from "./renderer";
import { Camera } from "./perspectiveCamera";
import { Objs } from "./objs";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

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
    const gltf = await this.load();

    this.isLoaded = true;

    this.canvas = this.wrap.querySelector("canvas");
    this.renderer = new Renderer(this.canvas, this.wrapW, this.wrapH);
    this.camera = new Camera(this.wrapW, this.wrapH);
    this.scene = new THREE.Scene();
    this.objs = new Objs(gltf, this.scene);

    this.setUtility();
  }

  async load() {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./assets/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const ps = [];

    for (let i = 0; i < 4; i++) {
      const p = new Promise((resolve) => {
        gltfLoader.load(`./assets/models/${i + 1}.glb`, (gltf) => {
          resolve(gltf);
        });
      });

      ps.push(p);
    }

    return Promise.all(ps);
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

      this.renderer.instance.render(this.scene, this.camera.instance);

      this.prevTime = now;
    }
  }

  onResize() {
    console.log("aa");

    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;
    this.wrapW = w;
    this.wrapH = h;

    this.camera.onResize(w, h);
    this.objs.onResize(w, h);
    this.renderer.onResize(w, h);
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
