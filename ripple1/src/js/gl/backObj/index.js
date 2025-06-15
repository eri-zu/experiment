import { Item } from "./item";
import * as THREE from "three";

export class BackObj {
  constructor(dispTexture, scene) {
    this.dispTexture = dispTexture;
    this.scene = scene;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);
    this.item = new Item(this.dispTexture, group);
  }

  onMouseMove(mouseX, mouseY) {
    this.item.onMouseMove(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.item.onUpdate(timeDelta, time);
  }

  onResize(w, h) {
    this.item.onResize(w, h);
  }
}
