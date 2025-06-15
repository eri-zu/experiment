import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Item {
  constructor(baseTexture, bgTexture, group) {
    this.baseTexture = baseTexture;
    this.bgTexture = bgTexture;
    this.group = group;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
    this.setAspect();
  }

  setParam() {
    this.baseW = 1280;

    this.PARAM = {
      w: window.innerWidth,
      h: window.innerHeight,
      sw: 100,
      sh: 100,
    };
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    this.m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uDisp: { value: this.baseTexture },
        uTexture: { value: this.bgTexture },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector4() },
      },
    });

    this.mesh = new THREE.Mesh(this.g, this.m);
    this.group.add(this.mesh);
  }

  setAspect() {
    const w = this.PARAM.w;
    const h = this.PARAM.h;
    this.canvasAspect = w / h;
    this.imageAspect = this.bgTexture.image.width / this.bgTexture.image.height;

    let asp = new THREE.Vector2(1.0);

    if (this.imageAspect > this.canvasAspect) {
      asp = new THREE.Vector2(this.canvasAspect / this.imageAspect, 1.0);
    } else {
      asp = new THREE.Vector2(1.0, this.imageAspect / this.canvasAspect);
    }

    this.mesh.material.uniforms.uResolution.value.set(w, h, asp.x, asp.y);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value += timeDelta * 0.1;
  }

  onResize(w, h) {
    this.setParam();

    this.g.dispose();
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );
    this.mesh.geometry = this.g;

    this.setAspect();
  }

  setEvents() {}
}
