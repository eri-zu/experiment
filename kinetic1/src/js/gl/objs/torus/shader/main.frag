precision mediump float;
varying vec2 vUv;
varying vec3 vPos;

uniform sampler2D uTexture;
uniform float uRadius;
uniform float uTime;

void main() {
  vec2 newUv = vUv;

  newUv.x += sin(newUv.y) * 0.25;
  vec2 repeat = vec2(6.0, 12.0);
  newUv = fract(newUv * repeat + vec2(0.0, uTime));
  
  vec4 color = texture2D(uTexture, newUv);
  float shadow = smoothstep(0.0, 1.0, vPos.z / uRadius);

  gl_FragColor = color * shadow;
}