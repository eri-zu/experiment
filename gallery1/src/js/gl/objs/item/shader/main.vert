// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position; // ローカル座標
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
uniform float uTime;
uniform vec2 uResolution;
uniform float uCurvePower;

// custom varying
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0); // ワールド座標

  // absでそのままの方向でyが大きくなるように
  // 中心からの距離を正規化
  // 左右に行くほどエフェクト大きくする
  float normalizeDist = abs(modelPosition.x / (uResolution.x * 0.5));

  // 距離に応じてyを引き伸ばす
  // 1.0：オリジナルの大きさを最低値に
  // pow：エフェクト大きく
  modelPosition.y *= 1.0 + uCurvePower * pow(normalizeDist, 2.0); 

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
}