import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import * as THREE from "three";

export class Effect {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.init();
  }

  init() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(gb.w, gb.h),
      0.8, // strength
      1.0, // radius（にじむ範囲）
      0.0 // threshold（発光し始める明るさの閾値）
    );

    this.composer.addPass(this.bloomPass);
  }

  onUpdate() {
    this.composer.render();
  }

  onResize() {
    this.composer.setSize(gb.w, gb.h);
    this.composer.setPixelRatio(window.devicePixelRatio);
  }
}
