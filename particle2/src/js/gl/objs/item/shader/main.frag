precision mediump float;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTime;

varying vec2 vUv;
varying vec3 vColor;
varying float vColorFlag;


void main() {
  vec2 newUv = gl_PointCoord;

  float dist = length(newUv - vec2(0.5));
  float alpha = 0.05 / dist - 0.1; // 真ん中かなり明るく

  vec3 finalColor = vColorFlag < 0.8 ? uColor1 : uColor2;
    
  gl_FragColor = vec4(finalColor, alpha);
}