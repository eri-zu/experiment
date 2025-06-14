import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";

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
    this.setParam();
    this.createMesh();
    this.setAspect();
    this.setPos();
  }

  setParam() {
    const baseH = 800;
    const h = window.innerHeight;
    const scaleFactor = window.innerWidth > 768 ? 1 : 0.8;

    this.scrollAmount = 0;
    this.v = 0;

    this.PARAM = {
      w: ((1280 * scaleFactor) / baseH) * 0.21 * h,
      h: ((1920 * scaleFactor) / baseH) * 0.21 * h,
      sw: 30,
      sh: 30,
      margin: ((90 * scaleFactor) / baseH) * h,
      speed: 150,
    };
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uDeltaScrollY: { value: 0.0 },
        uResolution: { value: new THREE.Vector4() },
      },
    });

    this.mesh = new THREE.Mesh(this.g, m);
    this.group.add(this.mesh);
  }

  setAspect() {
    const w = this.PARAM.w;
    const h = this.PARAM.h;
    this.canvasAspect = w / h;
    this.imageAspect = this.texture.image.width / this.texture.image.height;

    let asp = new THREE.Vector2(1.0);

    if (this.imageAspect > this.canvasAspect) {
      asp = new THREE.Vector2(this.canvasAspect / this.imageAspect, 1.0);
    } else {
      asp = new THREE.Vector2(1.0, this.imageAspect / this.canvasAspect);
    }

    this.mesh.material.uniforms.uResolution.value.set(w, h, asp.x, asp.y);
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

  onUpdate(timeDelta, time, scrollY) {
    // time
    this.mesh.material.uniforms.uTime.value = time;

    // scrollY
    this.v += (scrollY - this.v) * 0.12;
    this.scrollAmount -= this.v;
    this.mesh.material.uniforms.uDeltaScrollY.value = this.v;

    // pos
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

    this.setAspect();
  }

  setEvents() {}
}
