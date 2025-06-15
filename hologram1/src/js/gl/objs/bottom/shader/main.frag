precision mediump float;
uniform mat4 modelMatrix;

varying vec2 vUv;

uniform float uTime;
uniform vec3 uColor;

// Based on Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
// 0 - 1
float random1D(float x) {
  return fract(sin(x * 12.9898) * 43758.5453);
}

const float PI = 3.1415;

void main() {
  vec2 uv = vUv * 2.0 - 1.0; // -1 - 1
  float r = length(uv);
  float theta = atan(uv.y, uv.x); // 極座標変換

  // ねじり具合
  float swirl = theta + r * 5.0; // ねじる
  swirl += uTime * 0.2;

  // stripe frequency
  float stripes = sin(swirl * 6.0) * 0.5 + 0.5; // 0 - 1

  // トーラスマスク
  float ring = smoothstep(0.5, 1.0, r);
  float outer = smoothstep(1.0, 0.8, r);
  float pattern = stripes * ring * outer;
  
  pattern *= 0.7; // 減衰

  gl_FragColor = vec4(uColor * pattern, 1.0);
}