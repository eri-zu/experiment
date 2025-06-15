precision mediump float;
varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uAspect;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float PI = 3.14;

void main() {
  vec2 newUv = vUv * uAspect;

  // 回転
  newUv *= rotate2d(PI * 0.25);

  // repeat
  vec2 repeat = vec2(1.0, 6.0);
  vec2 tiledUv = newUv * repeat;

  // 方向
  float rowIndex = floor(tiledUv.y);
  float direction = mod(rowIndex, 2.0) == 0.0 ? 1.0 : -1.0;

  newUv = fract(newUv * repeat + vec2(uTime * direction, 0.0));

  vec4 color = texture2D(uTexture, newUv);
  
  gl_FragColor = color;
}