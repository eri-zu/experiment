import * as THREE from "three";

export class Camera {
  constructor(wrapW, wrapH) {
    this.wrapW = wrapW;
    this.wrapH = wrapH;

    this.CAMERA_PARAM = {
      fovy: 70,
      aspect: this.wrapW / this.wrapH,
      near: 0.001,
      far: 1000,
      x: 0,
      y: 0,
      z: 2,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };

    this.setup();
  }

  setup() {
    this.instance = new THREE.PerspectiveCamera(
      this.CAMERA_PARAM.fovy,
      this.CAMERA_PARAM.aspect,
      this.CAMERA_PARAM.near,
      this.CAMERA_PARAM.far
    );
    this.setPosition(this.wrapH);
    this.instance.lookAt(this.CAMERA_PARAM.lookAt);
  }

  setPosition(h) {
    const fovRad = (this.CAMERA_PARAM.fovy / 2) * (Math.PI / 180);

    this.instance.position.x = this.CAMERA_PARAM.x;
    this.instance.position.y = this.CAMERA_PARAM.y;
    // this.instance.position.z = this.CAMERA_PARAM.z;
    this.instance.position.z = h / 2 / Math.tan(fovRad);
  }

  onResize(w, h) {
    this.setPosition(h);
    this.instance.aspect = w / h;
    this.instance.updateProjectionMatrix();
  }
}
