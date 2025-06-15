import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import gsap from "gsap";
import { Pane } from "tweakpane";

export class Torus {
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
  }

  setParam() {
    this.baseW = gb.w > 768 ? 1280 : 375;
    const scaleFactor = gb.w > 768 ? 1 : 0.7;

    this.PARAM = {
      r: (150 / this.baseW) * gb.w * scaleFactor,
      t: (50 / this.baseW) * gb.w * scaleFactor,
      d: (100 / this.baseW) * gb.w * scaleFactor,
    };
    this.timespeed = { value: 0.7 };
  }

  createMesh() {
    this.g = new THREE.TorusGeometry(
      this.PARAM.r,
      this.PARAM.t,
      this.PARAM.d,
      this.PARAM.d
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      // transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        uRadius: { value: this.PARAM.t },
      },
      // side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.g, m);
    this.mesh.rotation.y = Math.PI * 0.1;
    this.mesh.position.z += 100;
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value = time * this.timespeed.value;
    this.mesh.rotation.z = time * 0.3;
  }

  onResize(w, h) {
    this.setParam();

    this.g.dispose();
    this.g = new THREE.TorusGeometry(
      this.PARAM.r,
      this.PARAM.t,
      this.PARAM.d,
      this.PARAM.d
    );
    this.mesh.geometry = this.g;
    this.mesh.material.uniforms.uRadius.value = this.PARAM.t;
  }

  setEvents() {}
}
