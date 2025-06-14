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
    this.item = new Item(this.textures, group);
  }

  onUpdate(timeDelta, time) {
    this.item.onUpdate(timeDelta, time);
  }

  onResize(w, h) {
    this.item.onResize(w, h);
  }
}
