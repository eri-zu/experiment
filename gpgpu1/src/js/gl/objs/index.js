import { Item } from "./item";
import { Effect } from "./effect";
import * as THREE from "three";

export class Objs {
  constructor(scene, renderer, camera) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;

    this.setup();
  }

  setup() {
    const group = new THREE.Group();
    this.scene.add(group);
    this.item = new Item(group, this.renderer);
    this.effect = new Effect(this.renderer, this.scene, this.camera);
  }

  onMouseMove(mouseX, mouseY) {
    this.item.onMouseMove(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    this.item.onUpdate(timeDelta, time);
    this.effect.onUpdate();
  }

  onResize(w, h) {
    this.item.onResize(w, h);
    this.effect.onResize(w, h);
  }
}
