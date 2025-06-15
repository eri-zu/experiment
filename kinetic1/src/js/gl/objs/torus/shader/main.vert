precision mediump float;

// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
uniform float uTime;

// custom varying
varying vec2 vUv;
varying vec3 vPos;

void main() {  
  vec3 pos = position;
  pos.z += sin((pos.y + pos.x) * 0.03 + uTime) * 40.0;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
  
  vUv = uv;
  vPos = position;
}