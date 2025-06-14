precision mediump float;

// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position; // ローカル座標
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
uniform float uTime;
uniform float uDeltaScrollY;

// custom varying
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0); // ワールド座標

  float freq = 0.005;
  float amp = uDeltaScrollY * 2.5; // スクロールの強さに依存

  modelPosition.x += cos(modelPosition.y * freq) * amp;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
}