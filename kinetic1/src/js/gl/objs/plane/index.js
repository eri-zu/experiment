import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Plane {
  constructor(texture, group) {
    this.texture = texture;
    this.group = group;

    this.texture.minFilter = THREE.NearestFilter; // 境目対策

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
    this.setAspect();
  }

  setParam() {
    this.baseW = window.innerWidth > 768 ? 1280 : 375;

    this.PARAM = {
      w: window.innerWidth,
      h: window.innerHeight,
      s: 100,
      timespeed: 0.08,
    };
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(this.PARAM.w, this.PARAM.h, this.PARAM.s);

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        uAspect: { value: new THREE.Vector2(1.0, 1.0) },
      },
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.g, m);

    this.group.add(this.mesh);
  }

  setAspect() {
    const w = gb.w;
    const h = gb.h;

    let asp = w / h;
    let aspVector = new THREE.Vector2(1.0);

    if (asp > 1.0) {
      aspVector = new THREE.Vector2(w / h, 1.0);
    } else {
      aspVector = new THREE.Vector2(1.0, h / w);
    }

    this.mesh.material.uniforms.uAspect.value = aspVector;
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value = time * this.PARAM.timespeed;
    // this.mesh.rotation.z = time * 0.3;
  }

  onResize(w, h) {
    this.setParam();
    this.setAspect();

    this.g.dispose();
    this.g = new THREE.PlaneGeometry(this.PARAM.w, this.PARAM.h, this.PARAM.s);
    this.mesh.geometry = this.g;
  }

  setEvents() {}
}
