// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// custom uniform
uniform sampler2D uTexture;

// custom attribute
attribute vec2 aUv;

// custom varying
varying float vLife;

void main() {
  vec2 uv = aUv;
  vec4 pos = texture2D(uTexture, uv);

  vec4 modelPosition = modelMatrix * vec4(pos.xyz, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  vLife = pos.w;
  gl_PointSize = 1.0;
  gl_Position = projectPosition;
}