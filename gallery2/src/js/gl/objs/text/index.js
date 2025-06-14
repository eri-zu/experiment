import * as THREE from "three";

export class Text {
  constructor(texture, group, i, length) {
    this.texture = texture;
    this.group = group;
    this.index = i;
    this.length = length;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
    this.setPos();
  }

  setParam() {
    const baseH = 800;
    const h = window.innerHeight;
    const scaleFactor = window.innerWidth > 768 ? 1 : 0.8;

    this.scrollAmount = 0;
    this.v = 0;

    this.PARAM = {
      w: ((1336 * scaleFactor) / baseH) * 0.8 * h,
      h: ((141 * scaleFactor) / baseH) * 0.8 * h,
      sw: 100,
      sh: 100,
      margin: ((70 * scaleFactor) / baseH) * h,
      speed: 60,
    };
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    const m = new THREE.MeshBasicMaterial({
      transparent: true,
      map: this.texture,
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
    this.mesh.position.z = -1;
  }

  onUpdate(timeDelta, time, scrollY) {
    // scrollY
    this.v += (scrollY - this.v) * 0.12;
    this.scrollAmount -= this.v;

    // pos
    let x =
      (this.initX - time * this.PARAM.speed - this.scrollAmount * 0.2) %
      this.maxMove;
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
  }

  setEvents() {}
}
