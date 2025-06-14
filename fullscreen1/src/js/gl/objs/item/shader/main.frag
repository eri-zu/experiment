precision mediump float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform vec4 uResolution;

void main() {
  vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  vec4 textureColor = texture2D(uTexture, newUv);

  gl_FragColor = textureColor;
}