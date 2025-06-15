import * as THREE from "three";

export class Item {
  constructor(dispTexture, group) {
    this.dispTexture = dispTexture;

    this.group = group;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParam();
    this.createMesh();
  }

  setParam() {
    // this.baseW = 1280;
    this.PARAM = {
      w: 64,
      h: 64,
      sw: 1,
      sh: 1,
    };
    this.progress = 0.0;

    this.mouse = { x: 0, y: 0 };
    this.prevMouse = { x: 0, y: 0 };
    this.currentWave = 0;
  }

  createMesh() {
    this.g = new THREE.PlaneGeometry(
      this.PARAM.w,
      this.PARAM.h,
      this.PARAM.sw,
      this.PARAM.sh
    );

    this.meshes = [];
    this.num = 100;

    for (let i = 0; i < this.num; i++) {
      const m = new THREE.MeshBasicMaterial({
        map: this.dispTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(this.g, m);
      mesh.visible = false;
      mesh.rotation.z = Math.PI * Math.random();

      this.group.add(mesh);
      this.meshes.push(mesh);
    }
  }

  onMouseMove(mouseX, mouseY) {
    // 画面の中心を(0, 0)に
    this.mouse.x = mouseX - window.innerWidth * 0.5;
    this.mouse.y = -(mouseY - window.innerHeight * 0.5);
  }

  setNewWave(x, y, index) {
    let mesh = this.meshes[index];

    mesh.visible = true;

    mesh.position.x = x;
    mesh.position.y = y;

    mesh.scale.x = mesh.scale.y = 0.2;
    mesh.material.opacity = 0.5;
  }

  trackMousePos() {
    if (
      Math.abs(this.mouse.x - this.prevMouse.x) < 4 ||
      Math.abs(this.mouse.y - this.prevMouse.y) < 4
    ) {
      // マウスほぼ動かさなかったとき
    } else {
      // マウスを動かしたとき
      this.setNewWave(this.mouse.x, this.mouse.y, this.currentWave);
      this.currentWave = (this.currentWave + 1) % this.num; // 表示するmesh決める
    }

    this.prevMouse.x = this.mouse.x;
    this.prevMouse.y = this.mouse.y;
  }

  onUpdate(timeDelta, time) {
    this.trackMousePos();

    this.meshes.forEach((el) => {
      if (el.visible) {
        // 回転
        el.rotation.z += 0.01;

        // fade（少しずつ消えていく）
        el.material.opacity *= 0.96;

        // scale（6に収束する）
        el.scale.x = 0.982 * el.scale.x + 0.108;
        el.scale.y = 0.982 * el.scale.y + 0.108;

        if (el.material.opacity < 0.002) el.visible = false;
      }
    });
  }

  onResize(w, h) {}

  setEvents() {
    window.addEventListener("touchmove", (e) => {
      const touch = e.touches[0]; // 最初の指の位置
      const x = touch.clientX;
      const y = touch.clientY;

      this.onMouseMove(x, y);
    });
  }
}
