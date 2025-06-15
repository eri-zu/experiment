import vert1 from "./shader1/main.vert";
import vert2 from "./shader2/main.vert";
import vert3 from "./shader3/main.vert";
import vert4 from "./shader4/main.vert";
import vert5 from "./shader5/main.vert";
import vert6 from "./shader6/main.vert";
import vert7 from "./shader7/main.vert";
import vert8 from "./shader8/main.vert";

import frag1 from "./shader1/main.frag";
import frag2 from "./shader2/main.frag";
import frag3 from "./shader3/main.frag";
import frag4 from "./shader4/main.frag";
import frag5 from "./shader5/main.frag";
import frag6 from "./shader6/main.frag";
import frag7 from "./shader7/main.frag";
import frag8 from "./shader8/main.frag";

import * as THREE from "three";
import { Slider } from "./slider";

export class Item {
  constructor(i, textures, item, group) {
    this.i = i;
    this.textures = textures;
    this.item = item;
    this.group = group;

    this.target = item.querySelector(".js-target");
    this.btns = item.querySelectorAll(".js-btn");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
    this.setPos();

    this.slider = new Slider(this.i);
  }

  setParam() {
    this.baseW = 1280;

    this.PARAM = {
      w: gb.w * 0.5 * 0.6,
      h: gb.w * 0.5 * 0.6,
      sw: 100,
      sh: 100,
    };
  }

  createMesh() {
    const vert =
      this.i == 0
        ? vert1
        : this.i == 1
        ? vert2
        : this.i == 2
        ? vert3
        : this.i == 3
        ? vert4
        : this.i == 4
        ? vert5
        : this.i == 5
        ? vert6
        : this.i == 6
        ? vert7
        : this.i == 7
        ? vert8
        : null;

    const frag =
      this.i == 0
        ? frag1
        : this.i == 1
        ? frag2
        : this.i == 2
        ? frag3
        : this.i == 3
        ? frag4
        : this.i == 4
        ? frag5
        : this.i == 5
        ? frag6
        : this.i == 6
        ? frag7
        : this.i == 7
        ? frag8
        : null;

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
        currentTexture: { value: this.textures[0] },
        nextTexture: { value: this.textures[1] },
        uDisp: { value: this.textures[3] },
        uProgress: { value: 0.0 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
    });

    this.mesh = new THREE.Mesh(this.g, m);
    this.group.add(this.mesh);
  }

  setPos() {
    const rect = this.target.getBoundingClientRect();

    const top = rect.top;
    const left = rect.left;
    const w = rect.width; // 500
    const h = rect.height; // 333

    const x = left - window.innerWidth * 0.5 + w * 0.5;
    const y = -top + window.innerHeight * 0.5 - h * 0.5;

    this.mesh.position.set(x, y - 5, 0);
  }

  onUpdate(timeDelta, time) {
    this.mesh.material.uniforms.uTime.value = time;

    this.setPos();
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
  }

  onClickBtn() {
    this.slider.changeIndex(this.mesh, this.textures);
  }

  setEvents() {
    this.btns.forEach((el) => {
      el.addEventListener("click", () => {
        this.onClickBtn();
      });
    });
  }
}
