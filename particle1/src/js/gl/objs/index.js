import { Item1 } from "./item1";
import { Item2 } from "./item2";
import * as THREE from "three";

export class Objs {
  constructor(texture, scene, camera) {
    this.texture = texture;
    this.scene = scene;
    this.camera = camera;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);

    this.itemArray = [];

    const item1 = new Item1(group, this.camera);
    const item2 = new Item2(this.texture, group, this.camera);
    this.itemArray.push(item1, item2);
    // this.itemArray.push(item1);
  }

  onMouseMove(mouseX, mouseY) {
    this.itemArray.forEach((el) => {
      el.onMouseMove(mouseX, mouseY);
    });
  }

  onUpdate(timeDelta, time) {
    this.itemArray.forEach((el) => {
      el.onUpdate(timeDelta, time);
    });
  }

  onResize(w, h, camera) {
    this.itemArray.forEach((el) => {
      el.onResize(w, h, camera);
    });
  }
}
