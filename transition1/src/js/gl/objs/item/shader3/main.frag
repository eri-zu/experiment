precision mediump float;

varying vec2 vUv;

uniform sampler2D currentTexture;
uniform sampler2D nextTexture;
uniform sampler2D uDisp;
uniform float uProgress;

float strength = 0.3;

void main() {
  vec2 newUv = vUv;

  // delay
  // 中心からの距離をノイズで歪める
  float dist = distance(vec2(0.5), newUv);
  vec4 noise = texture2D(uDisp, newUv); // 0 - 1
  noise.r -= 0.5; // -0.5 〜 0.5
  dist += noise.r * strength; // ノイズを足して歪ませる（これがなかったら普通の円）

  float activation = dist;
  activation *= 0.5;
  float lateStart = 1.0;
  float startAt = activation * lateStart;
  float progress = smoothstep(startAt, startAt + 0.2, uProgress);

  vec4 tex1 = texture2D(currentTexture, newUv);
  vec4 tex2 = texture2D(nextTexture, newUv);

  gl_FragColor = mix(tex1, tex2, progress);
}