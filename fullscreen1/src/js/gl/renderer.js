import * as THREE from "three";

export class Renderer {
  constructor(canvas, wrapW, wrapH) {
    this.canvas = canvas;
    this.wrapW = wrapW;
    this.wrapH = wrapH;

    this.setup();
  }

  setup() {
    const RENDERER_PARAM = {
      clearColor: new THREE.Color("rgb(0, 0, 0)"),
      w: this.wrapW,
      h: this.wrapH,
    };

    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      alpha: true,
    });

    this.instance.setPixelRatio(window.devicePixelRatio);
    // this.instance.setClearColor(RENDERER_PARAM.clearColor, 0);
    this.instance.setSize(RENDERER_PARAM.w, RENDERER_PARAM.h);
  }

  onResize(w, h) {
    this.instance.setSize(w, h);
  }
}
