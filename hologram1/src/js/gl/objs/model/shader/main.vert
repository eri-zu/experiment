precision mediump float;

// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

attribute float aRandom;

// custom uniform
uniform float uTime;

// custom varying
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;


// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
// random function
// 0 - 1
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0); // ワールド座標

  // 頂点多すぎなので一部の頂点のみeffect
  if(aRandom > 0.8) {
    // sin：-1 〜 1
    // phase：波の開始ずらす
    // smoothstep：止まってる時間長く
    float phase = modelPosition.y;
    float glitchTime = uTime - phase;
    float glitch = sin(glitchTime) + sin(glitchTime * 3.24) + sin(glitchTime * 9.21); // -3 - 3 ランダム＋
    glitch /= 3.0; // -1 - 1
    glitch = smoothstep(0.2, 1.0, glitch); // 止まってる時間（0）長く
    glitch *= 0.1; // 弱く
    modelPosition.x += (random(modelPosition.xz + uTime) - 0.5) * glitch; // -0.5 - 0.5
    modelPosition.z += (random(modelPosition.zx + uTime) - 0.5) * glitch;
  }

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;

  // 法線をワールド座標に変換
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);

  vUv = uv;
  vPosition = modelPosition.xyz;
  vNormal = worldNormal;
}