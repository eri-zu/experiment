precision mediump float;

uniform sampler2D uTexture;
uniform float uDeltaScrollY;
uniform vec4 uResolution;

varying vec2 vUv;

void main() {
  vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

  float shift1 = uDeltaScrollY * 0.001;
  float shift2 = uDeltaScrollY * 0.002;
  float r = texture2D(uTexture, newUv + vec2(shift1, 0.0)).r;
  float g = texture2D(uTexture, newUv).g;
  float b = texture2D(uTexture, newUv + vec2(shift2, 0.0)).b;

  gl_FragColor = vec4(r, g, b, 1.0);
}