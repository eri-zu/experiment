import { Item } from "./item";
import * as THREE from "three";

export class Objs {
  constructor(textures, scene) {
    this.textures = textures;
    this.scene = scene;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);

    this.itemArray = [];

    const length = 10;

    for (let i = 0; i < length; i++) {
      const item = new Item(this.textures[i], group, i, length);
      this.itemArray.push(item);
    }
  }

  onUpdate(timeDelta, time) {
    this.itemArray.forEach((el) => {
      el.onUpdate(timeDelta, time);
    });
  }

  onResize(w, h) {
    this.itemArray.forEach((el) => {
      el.onResize(w, h);
    });
  }
}
