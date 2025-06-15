import { Torus } from "./torus";
import { Plane } from "./plane";

import * as THREE from "three";

export class Objs {
  constructor(texture, scene) {
    this.texture = texture;
    this.scene = scene;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);

    const torus = new Torus(this.texture, group);
    const plane = new Plane(this.texture, group);

    this.items = [];
    this.items.push(torus, plane);
  }

  onMouseMove(mouseX, mouseY) {
    this.items.forEach((el) => {
      el.onMouseMove(mouseX, mouseY);
    });
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
  }
}
