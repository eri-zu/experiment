import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import gsap from "gsap";

export class Item {
  constructor(textures, group) {
    this.textures = textures;
    this.group = group;

    this.items = document.querySelectorAll(".js-img");
    this.close = document.querySelector(".js-close");
    this.closeBars = this.close.querySelectorAll(".js-close_bar");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
  }

  setParam() {
    this.PARAM = {
      w:
        gb.w > 768
          ? (gb.h - 70 * 2 - 30 * 2) / 3
          : (gb.w - 20 * 2 - 20 * 2) / 3,
      h:
        gb.w > 768
          ? (gb.h - 70 * 2 - 30 * 2) / 3
          : (gb.w - 20 * 2 - 20 * 2) / 3,
      margin: gb.w > 768 ? 30 : 20,
      sw: 100,
      sh: 100,
    };

    this.current = null;
  }

  createMesh() {
    const g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTexture: { value: null },
        uScale: { value: 1.0 },
        uPlanePos: { value: new THREE.Vector2() },
        uProgress: { value: 0.0 },
        uResolution: { value: new THREE.Vector4() },
      },
    });

    this.mesh = new THREE.Mesh(g, m);
    this.group.add(this.mesh);
  }

  onUpdate(timeDelta, time) {}

  onResize(w, h) {
    this.setParam();

    this.mesh.geometry.dispose();
    const g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    this.mesh.geometry = g;

    this.onClickClose();
    this.mesh.material.uniforms.uTexture.value = null;
    this.mesh.material.needsUpdate = true;
  }

  setTexture(i) {
    const w = this.PARAM.w;
    const h = this.PARAM.h;
    this.canvasAspect = w / h;
    this.imageAspect =
      this.textures[i].image.width / this.textures[i].image.height;

    let asp = new THREE.Vector2(1.0);

    if (this.imageAspect > this.canvasAspect) {
      asp = new THREE.Vector2(this.canvasAspect / this.imageAspect, 1.0);
    } else {
      asp = new THREE.Vector2(1.0, this.imageAspect / this.canvasAspect);
    }

    this.mesh.material.uniforms.uResolution.value.set(w, h, asp.x, asp.y);

    this.mesh.material.uniforms.uTexture.value = this.textures[i];
    this.mesh.material.needsUpdate = true;
  }

  setMesh(target, i) {
    const img = target;
    const rect = img.getBoundingClientRect();

    const x = rect.left - gb.w * 0.5 + rect.width * 0.5;
    const y = -rect.top + gb.h * 0.5 - rect.height * 0.5;
    this.mesh.position.set(x, y, 0);
    this.mesh.material.uniforms.uPlanePos.value.x = x;
    this.mesh.material.uniforms.uPlanePos.value.y = y;

    this.mesh.material.uniforms.uScale.value = Math.max(
      gb.w / this.PARAM.w,
      gb.h / this.PARAM.h
    );
  }

  onClickImg(target, i) {
    this.current = i;

    this.setTexture(i);
    this.setMesh(target, i);

    const tl = gsap.timeline();

    tl
      //
      .set(this.closeBars, { transformOrigin: "0% 50%" })
      .to(
        this.mesh.material.uniforms.uProgress,
        {
          value: 1.0,
          duration: 2,
          ease: "expo.out",
        },
        0.1
      )
      .to(
        this.closeBars[0],
        {
          scaleX: 1.0,
          duration: 0.5,
          ease: "expo.out",
        },
        0.5
      )
      .to(
        this.closeBars[1],
        {
          scaleX: 1.0,
          duration: 0.5,
          ease: "expo.out",
        },
        0.6
      );
  }

  onClickClose() {
    const tl = gsap.timeline();

    tl
      //
      .set(this.closeBars, { transformOrigin: "100% 50%" })
      .to(this.closeBars, {
        scaleX: 0,
        duration: 0.5,
        ease: "expo.out",
      })
      .to(
        this.mesh.material.uniforms.uProgress,
        {
          value: 0.0,
          duration: 1.2,
          ease: "expo.out",
        },
        0
      );
  }

  setEvents() {
    this.items.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        this.onClickImg(e.currentTarget, i);
      });
    });

    this.close.addEventListener("click", () => {
      this.onClickClose();
    });
  }
}
