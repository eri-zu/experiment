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
  float lines = 60.0; // 筋の数
  float x = vUv.x * lines;
  float stripeId = floor(x); // 筋ごとのindex
  float brightness = random1D(stripeId); // 0 - 1
  float pattern = sin(x * PI) * 0.5 + 0.5; // 0 - 1
  pattern *= brightness;

  // 上ほど減衰
  float strength = (1.0 - vUv.y) + uTime + stripeId;
  float randomStrength = sin(strength) + sin(strength * 2.17) + sin(strength * 5.43); // -3 - 3
  randomStrength /= 3.0; // -1 - 1
  randomStrength = (randomStrength + 1.0) * 0.5; // 0 - 1
  pattern *= randomStrength * 0.6; // 全体減衰
  pattern *= smoothstep(1.0, 0.8, vUv.y); // 上のエッジぼかす
  pattern *= smoothstep(0.05, 0.1, vUv.y); // 下のエッジぼかす

  // 出力
  gl_FragColor = vec4(uColor.rgb * pattern, 1.0);

}