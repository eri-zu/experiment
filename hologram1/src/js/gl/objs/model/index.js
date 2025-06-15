import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

export class Model {
  constructor(gltf, group, camera) {
    this.gltf = gltf;
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
      scale: (1.0 / this.baseW) * gb.w * scaleFactor,
    };
  }

  createMesh() {
    this.m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uCameraPosition: { value: this.camera.position },
        uColor: { value: new THREE.Color("rgb(13, 229, 229)") },
      },
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // gltf
    const bike = this.gltf.scene;
    bike.traverse((child) => {
      // material
      if (child.isMesh) {
        child.material = this.m;

        // random attribute
        const count = child.geometry.attributes.position.count;
        const aRandom = [];

        for (let i = 0; i < count; i++) {
          aRandom[i] = Math.random();
        }

        child.geometry.setAttribute(
          "aRandom",
          new THREE.BufferAttribute(new Float32Array(aRandom), 1)
        );
      }
    });

    this.group.add(bike);
    this.mesh = bike;

    this.mesh.scale.set(this.PARAM.scale, this.PARAM.scale, this.PARAM.scale);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.m.uniforms.uTime.value = time;

    this.mesh.rotation.y += timeDelta * 0.1;
  }

  onResize(w, h) {
    this.setParam();

    this.mesh.scale.set(this.PARAM.scale, this.PARAM.scale, this.PARAM.scale);
  }

  setEvents() {}
}
