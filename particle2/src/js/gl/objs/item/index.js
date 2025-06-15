import vert from "./shader/main.vert";
import frag from "./shader/main.frag";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";
import { Slider } from "./slider";

export class Item {
  constructor(gltf, group) {
    this.gltf = gltf;

    this.len = this.gltf.length;
    this.group = group;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createNewPosition();
    this.createMesh();

    this.slider = new Slider(
      this.len,
      this.duration,
      this.PARAM.color1,
      this.PARAM.color2
    );
    this.autoSwitch();
  }

  setParam() {
    this.baseW = gb.w > 768 ? 1280 : 768;

    this.duration = 6000;
    this.interval = 2000;

    this.PARAM = {
      size: (50 / this.baseW) * gb.w,
      color1: {
        r: [173 / 255, 255 / 255, 230 / 255, 102 / 255],
        g: [216 / 255, 179 / 255, 230 / 255, 187 / 255],
        b: [255 / 255, 102 / 255, 230 / 255, 119 / 255],
      },
      color2: {
        r: [0 / 255, 180 / 255, 255 / 255, 240 / 255],
        g: [80 / 255, 80 / 255, 182 / 255, 200 / 255],
        b: [150 / 255, 20 / 255, 193 / 255, 130 / 255],
      },
    };
  }

  createNewPosition() {
    // const models = this.gltf.scene.children;

    this.particles = {};

    this.particles.num = 5000;
    this.particles.positions = [];

    this.gltf.forEach((gltf) => {
      const model = gltf.scene.children[0];
      // 頂点をサンプリング
      const sampler = new MeshSurfaceSampler(model).build();

      // 中心補正用
      model.geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      model.geometry.boundingBox.getCenter(center);

      const positionArray = [];

      for (let i = 0; i < this.particles.num; i++) {
        const newPos = new THREE.Vector3();
        const normal = new THREE.Vector3();

        // meshの表面からランダムな1点を取り出し、位置ベクトルと放線ベクトルが書き込まれる
        sampler.sample(newPos, normal);

        // 中心補正
        newPos.sub(center);

        const i3 = i * 3;
        positionArray[i3] = newPos.x;
        positionArray[i3 + 1] = newPos.y;
        positionArray[i3 + 2] = newPos.z;
      }

      this.particles.positions.push(positionArray);
    });
  }

  createMesh() {
    // random number
    const randomNumArray = [];
    const randomAngleArray = [];
    const directionArray = [];

    for (let i = 0; i < this.particles.num; i++) {
      const i3 = i * 4;
      randomNumArray[i3] = Math.random();
      randomNumArray[i3 + 1] = Math.random();
      randomNumArray[i3 + 2] = Math.random();
      randomNumArray[i3 + 3] = Math.random();

      randomAngleArray[i] = Math.random() * Math.PI * 2.0;
      directionArray[i] = Math.random() > 0.5 ? 1 : -1;
    }

    // custom geometry
    const g = new THREE.BufferGeometry();

    // attribute
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(this.particles.positions[0]),
        3
      )
    );
    g.setAttribute(
      "aTargetPosition",
      new THREE.BufferAttribute(
        new Float32Array(this.particles.positions[0]),
        3
      )
    );
    g.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(new Float32Array(randomNumArray), 4)
    );
    g.setAttribute(
      "aRandomAngle",
      new THREE.BufferAttribute(new Float32Array(randomAngleArray), 1)
    );
    g.setAttribute(
      "aDirection",
      new THREE.BufferAttribute(new Float32Array(directionArray), 1)
    );

    const m = new THREE.RawShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uColor1: {
          value: new THREE.Vector3(
            this.PARAM.color1.r[0],
            this.PARAM.color1.g[0],
            this.PARAM.color1.b[0]
          ),
        },
        uColor2: {
          value: new THREE.Vector3(
            this.PARAM.color2.r[0],
            this.PARAM.color2.g[0],
            this.PARAM.color2.b[0]
          ),
        },
        uSize: { value: this.PARAM.size },
      },
      blending: THREE.AdditiveBlending,
      depthWrite: false, // z-index
    });

    this.mesh = new THREE.Points(g, m);
    // this.mesh.position.y = -4.0;
    this.group.add(this.mesh);

    // ある程度の領域で描画されなくなるのを防ぐ
    this.mesh.frustumCulled = false;
  }

  autoSwitch() {
    this.timer = null;

    setTimeout(() => {
      // 初回
      this.slider.changeIndex(this.mesh, this.particles.positions);

      // 2回目以降
      this.timer = setInterval(() => {
        this.slider.changeIndex(this.mesh, this.particles.positions);
      }, this.duration + this.interval);
    }, 4000);
  }

  onMouseMove(mouseX, mouseY) {
    console.log(mouseX, mouseY);
  }

  onUpdate(timeDelta, time) {
    if (this.mesh) {
      this.mesh.material.uniforms.uTime.value = time;
      this.mesh.rotation.y = time * 0.2;
    }
  }

  onResize(w, h) {
    // this.setParam();
    // this.mesh.material.uniforms.uSize.value = this.PARAM.size;
  }

  setEvents() {}
}
