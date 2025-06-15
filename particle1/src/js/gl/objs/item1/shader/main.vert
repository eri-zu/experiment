// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;

// custom uniform
// uniform float uTime;
uniform sampler2D uMouseTexture;
uniform float uPointSize;
uniform float uBasePower;

// custom attribute
attribute float aRandom;
attribute float aRandomAngle;
attribute vec4 aColor;

// custom varying
varying vec2 vUv;
varying vec4 vColor;



void main() {
  vec3 pos = position; 

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
  vec3 offset = direction * uBasePower * mouseTexIntensity * aRandom;

  pos += offset;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

  
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;
  gl_Position = projectPosition;

  // size
  gl_PointSize = uPointSize * 0.5;
  
  vUv = uv;
  vColor = aColor;
}