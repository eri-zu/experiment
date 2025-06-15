precision mediump float;

varying float vLife;
uniform vec3 uColor1; 
uniform vec3 uColor2; 

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  if(dist > 0.5) {
    discard;
  }
  
  vec3 color = mix(uColor2, uColor1, vLife);
  gl_FragColor = vec4(color, vLife);
}