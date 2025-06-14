import { Item } from "./item";
import { Text } from "./text";
import * as THREE from "three";
import VirtualScroll from "virtual-scroll";
import gsap from "gsap";

const TEXT_LEN = 3;
const ITEM_LEN = 10;

export class Objs {
  constructor(textures, scene) {
    this.textures = textures;
    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.readyScroller();
    this.setParam();
    this.setObjs();
  }

  readyScroller() {
    this.scroller = new VirtualScroll({
      mouseMultiplier: 0.4,
      touchMultiplier: 4,
    });
  }

  setParam() {
    this.tl = gsap.timeline();
    this.scrollY = 0;
  }

  setObjs() {
    // text
    const textGroup = new THREE.Group();
    this.scene.add(textGroup);
    this.textArray = [];

    for (let i = 0; i < TEXT_LEN; i++) {
      const item = new Text(this.textures[10], textGroup, i, TEXT_LEN);
      this.textArray.push(item);
    }

    // item
    const itemGroup = new THREE.Group();
    this.scene.add(itemGroup);
    this.itemArray = [];

    for (let i = 0; i < ITEM_LEN; i++) {
      const item = new Item(this.textures[i], itemGroup, i, ITEM_LEN);
      this.itemArray.push(item);
    }
  }

  onUpdate(timeDelta, time) {
    this.textArray.forEach((el) => {
      el.onUpdate(timeDelta, time, this.scrollY);
    });

    this.itemArray.forEach((el) => {
      el.onUpdate(timeDelta, time, this.scrollY);
    });
  }

  onResize(w, h) {
    this.textArray.forEach((el) => {
      el.onResize(w, h);
    });

    this.itemArray.forEach((el) => {
      el.onResize(w, h);
    });
  }

  setEvents() {
    let timer = null;

    this.scroller.on((event) => {
      this.scrollY = event.deltaY;

      clearTimeout(timer);

      timer = setTimeout(() => {
        if (this.tl) this.tl.kill();

        this.tl = gsap.timeline();

        this.tl
          //
          .to(this, {
            scrollY: 0.0,
            v: 0.0,
            duration: 0.5,
            ease: "expo.out",
            onComplete: () => {
              // console.log(this.scrollY);
            },
          });
      }, 100);
    });
  }
}
