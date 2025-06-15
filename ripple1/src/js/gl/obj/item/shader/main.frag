precision mediump float;

uniform sampler2D uDisp;
uniform sampler2D uTexture;
uniform float uProgress;
uniform float uTime;
uniform vec4 uResolution;

varying vec2 vUv;

float PI = 3.14;
float strength = 0.2;

void main() {
  vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  
  vec4 disp = texture2D(uDisp, vUv);
  
  // 色(0-1)に応じてランダムな角度
  float theta = disp.r * PI * 2.0; 
  // ランダムな方向
  vec2 dir = vec2(sin(theta), cos(theta)); 

  // 元のuvをランダムな方向にオフセット
  vec2 offsetUv = newUv + dir * disp.r * strength;

  vec4 color = texture2D(uTexture, offsetUv);

  gl_FragColor = color;
  // gl_FragColor = disp; (デバック)
}