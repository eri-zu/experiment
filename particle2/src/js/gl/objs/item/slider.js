import gsap from "gsap";
import * as THREE from "three";

export class Slider {
  constructor(len, duration, color1, color2) {
    this.len = len;
    this.duration = duration;
    this.color1 = color1;
    this.color2 = color2;

    this.setup();
  }

  setup() {
    this.current = 0;
  }

  changeIndex(mesh, particlesPositions) {
    const current = this.current;

    // current
    mesh.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(particlesPositions[current]),
        3
      )
    );
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.material.uniforms.uProgress.value = 0;

    this.current++;

    if (this.current > this.len - 1) {
      this.current = 0;
    } else if (this.current < 0) {
      this.current = this.len - 1;
    }

    // set next
    const next = this.current;
    mesh.geometry.setAttribute(
      "aTargetPosition",
      new THREE.BufferAttribute(new Float32Array(particlesPositions[next]), 3)
    );
    mesh.geometry.attributes.aTargetPosition.needsUpdate = true;

    // animation
    this.render(mesh, next);
  }

  render(mesh, next) {
    const d = this.duration / 1000;
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl
      //
      .to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: d,
      })
      // uColor1
      .to(
        mesh.material.uniforms.uColor1.value,
        {
          x: this.color1.r[next],
          duration: d,
        },
        0
      )
      .to(
        mesh.material.uniforms.uColor1.value,
        {
          y: this.color1.g[next],
          duration: d,
        },
        0
      )
      .to(
        mesh.material.uniforms.uColor1.value,
        {
          z: this.color1.b[next],
          duration: d,
        },
        0
      )
      // uColor2
      .to(
        mesh.material.uniforms.uColor2.value,
        {
          x: this.color2.r[next],
          duration: d,
        },
        0
      )
      .to(
        mesh.material.uniforms.uColor2.value,
        {
          y: this.color2.g[next],
          duration: d,
        },
        0
      )
      .to(
        mesh.material.uniforms.uColor2.value,
        {
          z: this.color2.b[next],
          duration: d,
        },
        0
      );
  }
}
