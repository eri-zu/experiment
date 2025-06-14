import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import VirtualScroll from "virtual-scroll";

export class Item {
  constructor(texture, group, i, length) {
    this.texture = texture;
    this.group = group;
    this.index = i;
    this.length = length;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.readyScroller();
    this.setParam();
    this.createMesh();
    this.setPos();
  }

  readyScroller() {
    this.scroller = new VirtualScroll({ mouseMultiplier: 0.5 });
  }

  setParam() {
    this.delta = 0;
    this.scrollY = 0;
    this.scrollAmount = 0;
    this.baseW = 1280;
    const scaleFactor = window.innerWidth > 768 ? 1 : 2;

    this.PARAM = {
      w: ((400 * scaleFactor) / this.baseW) * 0.6 * window.innerWidth,
      h: ((225 * scaleFactor) / this.baseW) * 0.6 * window.innerWidth,
      sw: 100,
      sh: 100,
      margin: ((30 * scaleFactor) / this.baseW) * window.innerWidth,
      speed: (50 / this.baseW) * window.innerWidth,
    };
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    const scaleFactor = window.innerWidth > 768 ? 1 : 0.6;

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uCurvePower: { value: 1.6 * scaleFactor },
      },
    });

    this.mesh = new THREE.Mesh(this.g, m);
    this.group.add(this.mesh);
  }

  setPos() {
    const ww = window.innerWidth;
    const itemW = this.PARAM.w + this.PARAM.margin;

    this.maxMove = itemW * this.length;
    this.borderL = -1 * (ww * 0.5 + itemW);
    this.borderR = ww * 0.5 + itemW;
    this.initX = -this.maxMove * 0.5 + itemW * this.index;

    this.mesh.position.x = this.initX;
  }

  onUpdate(timeDelta, time) {
    // return;
    this.mesh.material.uniforms.uTime.value = time;

    let x =
      (this.initX - time * this.PARAM.speed - this.scrollAmount) % this.maxMove;

    if (x < this.borderL) {
      x += this.maxMove;
    } else if (x > this.borderR) {
      x -= this.maxMove;
    }

    this.mesh.position.x = x;
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
    this.setPos();

    this.mesh.material.uniforms.uResolution.value = new THREE.Vector2(
      window.innerWidth,
      window.innerHeight
    );
  }

  setEvents() {
    let timer = null;

    this.scroller.on((event) => {
      this.scrollY = event.deltaY;
      this.scrollAmount -= this.scrollY;

      clearTimeout(timer);

      timer = setTimeout(() => {
        this.scrollY = 0;
      }, 100);
    });
  }
}
