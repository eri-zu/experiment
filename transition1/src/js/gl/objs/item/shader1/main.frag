precision mediump float;

varying vec2 vUv;

uniform sampler2D currentTexture;
uniform sampler2D nextTexture;
uniform float uProgress;

void main() {
  vec2 newUv = vUv;
  
  // デバッグ用
  // vec4 textureColor1 = vec4(0.0, 0.0, 0.0, 1.0);
  // vec4 textureColor2 = vec4(1.0, 1.0, 1.0, 1.0);

  // 左から右
  // float activation = vUv.x;
  // float lateStart = 0.5;
  // float startAt = activation * lateStart;
  // float progress = smoothstep(startAt, 1.0, uProgress);

  // delay
  float activation = vUv.x + vUv.y; // 0 - 2
  activation *= 0.5; // 0-1に修正
  float lateStart = 0.8;
  float startAt = activation * lateStart;
  float progress = smoothstep(startAt, 1.0, uProgress);

  vec4 tex1 = texture2D(currentTexture, newUv);
  vec4 tex2 = texture2D(nextTexture, newUv);
  gl_FragColor = mix(tex1, tex2, progress);
}