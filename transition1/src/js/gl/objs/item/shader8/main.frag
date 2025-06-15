precision mediump float;

varying vec2 vUv;

uniform sampler2D currentTexture;
uniform sampler2D nextTexture;
uniform sampler2D uDisp;
uniform float uProgress;

mat2 rotate(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float strength = 1.0;
const float PI = 3.14;
float angle1 = PI / 4.0; // 45deg
float angle2 = -(PI / 4.0) * 3.0; // -135deg

vec2 mirroredUv(vec2 uv) {
  vec2 repeatUv = mod(uv, 2.0);
  return mix(repeatUv, 2.0 - repeatUv, step(1.0 ,repeatUv));
}

void main() {
  // delay
  float activation = vUv.x + 1.0 - vUv.y; // ぐにゃの向き(左上から右下)
  activation *= 0.5; // 0-1に修正
  float lateStart = 0.5;
  float startAt = activation * lateStart;
  float progress = smoothstep(startAt, startAt + 0.5, uProgress); // 0 - 1

  // uv distortion 
  // uProgress：全体offset
  // progress：ピクセルごとoffset
  vec2 newUv1 = mirroredUv(vUv + vec2(1.0, -1.0) * progress);
  vec2 newUv2 = mirroredUv(vUv + vec2(1.0, -1.0) * (1.0 - progress));

  vec4 tex1 = texture2D(currentTexture, newUv1);
  vec4 tex2 = texture2D(nextTexture, newUv2);

  gl_FragColor = mix(tex1, tex2, progress);
  // gl_FragColor = tex2;
}