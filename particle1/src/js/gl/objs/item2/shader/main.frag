precision mediump float;

varying vec2 vUv;
uniform sampler2D uTexture;


void main() {
  vec4 texColor = texture2D(uTexture, vUv);

  gl_FragColor = texColor;
}