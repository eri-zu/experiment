import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import gsap from "gsap";

export class Bottom {
  constructor(group, camera) {
    this.group = group;
    this.camera = camera;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
  }

  setParam() {
    this.baseW = gb.w > 1280 ? gb.w : gb.w > 768 ? 1280 : 375;
    const scaleFactor = gb.w > 768 ? 1 : 0.6;

    this.PARAM = {
      w: (4 / this.baseW) * gb.w * scaleFactor,
      h: (4 / this.baseW) * gb.w * scaleFactor,
      s: 50,
      x: Math.PI * 0.5,
      y: -(0.8 / this.baseW) * gb.w * scaleFactor,
    };
  }

  createMesh() {
    const g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.s,
      this.PARAM.s
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("rgb(13, 229, 229)") },
      },
      depthWrite: false,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Mesh(g, m);
    this.mesh.rotation.x = this.PARAM.x;
    this.mesh.position.y = this.PARAM.y;

    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value = time;
  }

  onResize(w, h) {
    this.setParam();

    this.mesh.geometry.dispose();
    const g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.s,
      this.PARAM.s
    );
    this.mesh.geometry = g;
    this.mesh.position.y = this.PARAM.y;
  }

  setEvents() {}
}
