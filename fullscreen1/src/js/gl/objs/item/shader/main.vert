// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
// uniform float uTime;
uniform float uScale;
uniform vec2 uPlanePos;
uniform float uProgress;

// custom varying
varying vec2 vUv;

void main() {
  vec3 pos = position;

  // delay
  // 左、上から先にアニメーション
  float activation = uv.x + (1.0 - uv.y);
  activation *= 0.5; // 範囲を0 - 1
  float latestStart = 0.5; // アニメーション最も遅いタイミング
  float startAt = activation * latestStart; // アニメーション開始位置
  float progress = smoothstep(startAt, startAt + 0.4, uProgress);

  // フルスクリーンサイズにする
  pos *= (1.0 + uScale * progress);

  // 画面中心に移動(ローカル座標で移動させてた分を戻す)
  pos.x -= uPlanePos.x * progress; 
  pos.y -= uPlanePos.y * progress;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
  
  vUv = uv;
}