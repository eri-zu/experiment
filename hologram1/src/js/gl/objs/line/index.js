import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Line {
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
    const scaleFactor = gb.w > 768 ? 1 : 0.7;

    this.PARAM = {
      topRadius: (1 / this.baseW) * gb.w * scaleFactor,
      bottomRadius: 0,
      h: (2 / this.baseW) * gb.w * scaleFactor,
      hs: 25,
      ws: 25,
      surface: true,
    };
  }

  createMesh() {
    const g = new THREE.CylinderGeometry(
      this.PARAM.topRadius,
      this.PARAM.bottomRadius,
      this.PARAM.h,
      this.PARAM.hs,
      this.PARAM.ws,
      this.PARAM.surface // 上下面有無
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
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value = time;
    this.mesh.rotation.y += timeDelta * 0.05;
  }

  onResize(w, h) {
    this.setParam();

    this.mesh.geometry.dispose();
    const g = new THREE.CylinderGeometry(
      this.PARAM.topRadius,
      this.PARAM.bottomRadius,
      this.PARAM.h,
      this.PARAM.hs,
      this.PARAM.ws,
      this.PARAM.surface
    );

    this.mesh.geometry = g;
  }

  setEvents() {}
}
