import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import { Pane } from "tweakpane";

export class Item {
  constructor(texture, group) {
    this.texture = texture;
    this.group = group;

    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
    // this.addGUI();
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

  addGUI() {
    this.pane = new Pane();

    this.pane.addBinding(this.mesh.material.uniforms.isBaseScaneLine, "value", {
      label: "isBaseScaneLine",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isScaneLineDown, "value", {
      label: "isScaneLineDown",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isGrainNoise, "value", {
      label: "isGrainNoise",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isWaveWarp, "value", {
      label: "isWaveWarp",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isDeformLine, "value", {
      label: "isDeformLine",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isDeformLine2, "value", {
      label: "isDeformLine2",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isColorShift, "value", {
      label: "isColorShift",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isGhost, "value", {
      label: "isGhost",
    });
    this.pane.addBinding(this.mesh.material.uniforms.isBlockNoise, "value", {
      label: "isBlockNoise",
    });
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
        uTexture: { value: this.texture },
        uProgress: { value: 0 },
        uScale: { value: 1.0 },
        isBaseScaneLine: { value: true },
        isScaneLineDown: { value: true },
        isGrainNoise: { value: true },
        isWaveWarp: { value: true },
        isDeformLine: { value: true },
        isDeformLine2: { value: true },
        isColorShift: { value: true },
        isGhost: { value: true },
        isBlockNoise: { value: true },
        isWave: { value: true },
      },
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.g, this.m);
    this.group.add(this.mesh);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
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
  }

  setEvents() {}
}
