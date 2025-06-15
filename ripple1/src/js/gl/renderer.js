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

    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.instance.setClearColor(RENDERER_PARAM.clearColor, 0);
    this.instance.setSize(RENDERER_PARAM.w, RENDERER_PARAM.h);
    this.instance.colorSpace = THREE.SRGBColorSpace; // sRGBで出力補正
  }

  onResize(w, h) {
    this.instance.setSize(w, h);
  }
}
