import * as THREE from "three";

export class Camera {
  constructor(wrapW, wrapH) {
    this.wrapW = wrapW;
    this.wrapH = wrapH;
    this.instance;

    this.CAMERA_PARAM = {
      left: -this.wrapW / 2, // 切り取る空間の左端までの距離
      right: this.wrapW / 2, // 切り取る空間の右端までの距離
      top: this.wrapH / 2, // 切り取る空間の上端までの距離
      bottom: -this.wrapH / 2, // 切り取る空間の下端までの距離
      near: 0.001,
      far: 10000,
      x: 0,
      y: 0,
      z: 2,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };

    this.setup();
  }

  setup() {
    this.instance = new THREE.OrthographicCamera(
      this.CAMERA_PARAM.left,
      this.CAMERA_PARAM.right,
      this.CAMERA_PARAM.top,
      this.CAMERA_PARAM.bottom,
      this.CAMERA_PARAM.near,
      this.CAMERA_PARAM.far
    );
    this.setPosition();
    this.instance.lookAt(this.CAMERA_PARAM.lookAt);
  }

  onResize(w, h) {
    this.wrapW = w;
    this.wrapH = h;

    this.CAMERA_PARAM = {
      left: -this.wrapW / 2,
      right: this.wrapW / 2,
      top: this.wrapH / 2,
      bottom: -this.wrapH / 2,
    };

    this.instance.left = this.CAMERA_PARAM.left;
    this.instance.right = this.CAMERA_PARAM.right;
    this.instance.top = this.CAMERA_PARAM.top;
    this.instance.bottom = this.CAMERA_PARAM.bottom;

    this.instance.updateProjectionMatrix();
  }

  setPosition() {
    this.instance.position.set(
      this.CAMERA_PARAM.x,
      this.CAMERA_PARAM.y,
      this.CAMERA_PARAM.z
    );
  }
}
