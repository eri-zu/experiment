precision mediump float;
uniform mat4 modelMatrix;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float uTime;
uniform vec3 uCameraPosition;
uniform vec3 uColor;

float fresnel(vec3 eyeVector, vec3 worldNormal) {
  // 内積 -1 - 1
  // 1.0：0 - 1
  // pow：効果強める
	return pow(1.0 + dot( eyeVector, worldNormal), 2.0);
}

void main() {
  // 法線
  // 裏面は法線が逆向いてしまうので手動で修正
  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing) normal *= -1.0; // 裏面の場合

  // 模様
  float pattern = mod((vPosition.y - uTime * 0.05) * 30.0, 1.0);
  pattern = pow(pattern, 3.0); // 模様はっきり

  // フレネル効果
  // 視線ベクトル：カメラから各頂点に向かうベクトル
  vec3 eyeVector = normalize(vPosition - uCameraPosition);
  float fresnel = fresnel(eyeVector, normal);
  float edgeFade = smoothstep(0.7, 0.0, fresnel); // 端を減衰

  float horographic = pattern * fresnel;
  horographic += fresnel * 1.25;
  horographic *= edgeFade;

  gl_FragColor = vec4(uColor, horographic);
}