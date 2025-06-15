import { Model } from "./model";
import { Line } from "./line";
import { Bottom } from "./bottom";
import * as THREE from "three";

export class Objs {
  constructor(gltf, scene, camera) {
    this.gltf = gltf;
    this.scene = scene;
    this.camera = camera;

    this.setup();
  }

  setup() {
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.items = [];

    const model = new Model(this.gltf, this.group, this.camera);
    const line = new Line(this.group, this.camera);
    const bottom = new Bottom(this.group, this.camera);

    this.items.push(model, line, bottom);

    this.group.position.y = gb.w > 768 ? -0.3 : -0.1;
  }

  onMouseMove(mouseX, mouseY) {
    // this.item.onMouseMove(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.items.forEach((el) => {
      el.onUpdate(timeDelta, time);
    });
  }

  onResize(w, h) {
    this.items.forEach((el) => {
      el.onResize(w, h);
    });

    this.group.position.y = gb.w > 768 ? -0.3 : -0.1;
  }
}
