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
      clearColor: 0x000000,
      w: this.wrapW,
      h: this.wrapH,
    };

    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });

    this.instance.setPixelRatio(window.devicePixelRatio);
    this.instance.setClearColor(RENDERER_PARAM.clearColor, 1);
    this.instance.setSize(RENDERER_PARAM.w, RENDERER_PARAM.h);
  }

  onResize(w, h) {
    this.instance.setSize(w, h);
  }
}
