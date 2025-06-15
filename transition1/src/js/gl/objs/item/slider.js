import gsap from "gsap";

export class Slider {
  constructor(i) {
    this.i = i;

    this.setup();
  }

  setup() {
    this.current = 0;
    this.len = 3;
  }

  changeIndex(mesh, textures) {
    const current = this.current;
    mesh.material.uniforms.currentTexture.value = textures[current];
    mesh.material.uniforms.uProgress.value = 0;

    this.current++;

    if (this.current > this.len - 1) {
      this.current = 0;
    } else if (this.current < 0) {
      this.current = this.len - 1;
    }

    const next = this.current;
    mesh.material.uniforms.nextTexture.value = textures[next];

    this.render(mesh);
  }

  render(mesh) {
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    if (this.i == 0) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 2,
        ease: "power4.out",
      });
    }
    if (this.i == 1) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 3,
        ease: "power4.out",
      });
    }
    if (this.i == 2) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 4,
        ease: "power3.out",
      });
    }

    if (this.i == 3) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 3.5,
        ease: "power3.out",
      });
    }

    if (this.i == 4) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 1,
        ease: "power3.out",
      });
    }
    if (this.i == 5) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 3,
        ease: "power3.out",
      });
    }
    if (this.i == 6) {
      this.tl.to(mesh.material.uniforms.uProgress, {
        value: 1.0,
        duration: 3.5,
        ease: "power3.out",
      });
    }
    if (this.i == 7) {
      this.tl
        //
        .to(mesh.material.uniforms.uProgress, {
          value: 1.0,
          duration: 1,
          ease: "power2.out",
        });
    }
  }
}
