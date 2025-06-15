import { Item } from "./item";
import * as THREE from "three";

export class Obj {
  constructor(baseTexture, bgTexture, scene) {
    this.baseTexture = baseTexture;
    this.bgTexture = bgTexture;
    this.scene = scene;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);
    this.item = new Item(this.baseTexture, this.bgTexture, group);
  }

  onUpdate(timeDelta, time) {
    this.item.onUpdate(timeDelta, time);
  }

  onResize(w, h) {
    this.item.onResize(w, h);
  }
}
