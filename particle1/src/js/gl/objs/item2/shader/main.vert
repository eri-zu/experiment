// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
// uniform float uTime;
uniform sampler2D uTexture;
uniform sampler2D uMouseTexture;
uniform float uPointSize;

// custom attribute
attribute float aRandom;
attribute float aRandomAngle;

// custom varying
varying vec2 vUv;

float basePower = 100.0;

void main() {
  vec3 pos = position;

  // mouse interaction
  float mouseTexIntensity = texture2D(uMouseTexture, uv).r;
  mouseTexIntensity = smoothstep(
    0.1, // 完全に元の位置に戻るようにする
    0.5, // 動きが一瞬止まってから元に戻るようにする
    mouseTexIntensity
  );

  vec3 direction = normalize(
    vec3(
      cos(aRandomAngle) * 0.2, 
      sin(aRandomAngle) * 0.2, 
      0.0
    ));
  vec3 offset = direction * basePower * mouseTexIntensity * aRandom;

  pos += offset;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;
  gl_Position = projectPosition;

  // size
  gl_PointSize = uPointSize;
  
  vUv = uv;
}