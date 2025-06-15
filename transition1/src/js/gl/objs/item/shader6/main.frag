precision mediump float;

varying vec2 vUv;

uniform sampler2D currentTexture;
uniform sampler2D nextTexture;
uniform sampler2D uDisp;
uniform float uProgress;

void main() {
  vec2 newUv = vUv;

  // delay
  float activation = vUv.x;
  activation *= 0.5;
  float lateStart = 1.0;
  float startAt = activation * lateStart;
  float progress = smoothstep(startAt, 1.0, uProgress);

  // ノイズを取得
  vec4 disp = texture2D(uDisp, newUv);
  vec2 dispVec = vec2(disp.r, disp.g); // 0 - 1
  dispVec -= 0.5; // -0.5 - 0.5

  // uv distortion 
  vec2 uv1 = newUv + progress * dispVec;
  vec2 uv2 = newUv + (1.0 - progress) * dispVec;
  vec4 tex1 = texture2D(currentTexture, uv1);
  vec4 tex2 = texture2D(nextTexture, uv2);

  gl_FragColor = mix(tex1, tex2, progress);
}