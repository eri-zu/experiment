precision mediump float;

uniform sampler2D uTexture;
uniform float uProgress;
uniform float uTime;
uniform bool isBaseScaneLine;
uniform bool isScaneLineDown;
uniform bool isWaveWarp;
uniform bool isDeformLine;
uniform bool isGrainNoise;
uniform bool isColorShift;
uniform bool isGhost;
uniform bool isBlockNoise;
uniform bool isDeformLine2;
uniform bool isWave;

varying vec2 vUv;

// 0 - 1
float random1d(float y) {
  return fract(sin(y * 12.9898) * 43758.5453);
}

// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
// random2d function
// 0 - 1
float random2d(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

#include ../includes/simplex2dNoise.glsl // -1 - 1

void main() {
  vec4 texColorOriginal = texture2D(uTexture, vUv);
  vec3 texColor = texture2D(uTexture, vUv).rgb;

  // default
  float baseScaneLine = 1.0; 
  float scanLineUp = 1.0;
  float waveFormWarp = 0.0;
  float deformLine = 1.0;
  float deformLine2 = 1.0;
  float grainNoise = 1.0;
  float blockNoise = 0.0;
  float wave = 0.0;


  if(isWaveWarp) {
    vec2 newUv = vUv;

    float glitchTime = uTime * 20.0 + random1d(newUv.y);
    float glitch = sin(glitchTime) + sin(glitchTime * 3.24) + sin(glitchTime * 9.21); // -3 - 3
    glitch /= 3.0; // -1 - 1
    glitch = smoothstep(-0.5, 0.6, glitch); // 止める時間調整
    glitch *= 0.005; // 強さ
    waveFormWarp = (random1d(newUv.y + uTime) - 0.5) * glitch; // (-0.5 - 0.5) * glitch
  }

  if(isDeformLine) {
    vec2 newUv = vUv;
    newUv.y *= 4.0; // 4本
    newUv.y = floor(newUv.y + uTime * 1.5);

    deformLine = random1d(newUv.y) - 0.5; // -0.5 - 0.5
    deformLine *= 0.03; // 強さ
  }

  if(isDeformLine2) {
    vec2 newUv = vUv;
    newUv.y = step(0.01, fract(newUv.y + uTime * 3.0));

    deformLine2 = random1d(newUv.y) - 0.5; // -0.5 - 0.5
    deformLine2 *= 0.03; // 強さ
  }

  if(isBaseScaneLine) {
    vec2 newUv = vUv;
    newUv *= vec2(1.0, 300.0);
    newUv = fract(newUv + vec2(0.0, uTime));

    baseScaneLine = smoothstep(0.0, 0.5, newUv.y); // グラデ1端
    baseScaneLine *= smoothstep(1.0, 0.5, newUv.y); // グラデ2端
    baseScaneLine = 1.0 - baseScaneLine; // 反転
    float brightness = 0.9;
    baseScaneLine = mix(brightness, 1.0, baseScaneLine);
  }

  if(isScaneLineDown) {
    vec2 newUv = vUv;
    newUv.y *= 8.0; // 8本
    newUv.y = floor(newUv.y + 10.0 * uTime); // ブロック

    scanLineUp = random1d(newUv.y);
    float flicker = step(0.0, sin(uTime * 1500.0));
    float brightness = flicker == 1.0 ? 0.85 : 0.95;
    scanLineUp = mix(brightness, 1.0, scanLineUp);
  }

  if(isGrainNoise) {
    vec2 newUv = vUv;

    grainNoise = random2d(vUv + uTime); // 0 - 1
    float brightness = 0.8;
    grainNoise = mix(brightness, 1.0, grainNoise);
  }


  if(isBlockNoise) {
    vec2 newUv = vUv;
    float noise1 = snoise(floor(newUv * vec2(10.0, 12.0)) + uTime); // -1 - 1
    float noise2 = snoise(floor(newUv * vec2(6.0, 4.0)) + uTime); // -1 - 1
    float noise3 = snoise(floor(newUv * vec2(3.0, 8.0)) + uTime); // -1 - 1

    blockNoise = noise1 * noise2 * noise3; // -1 - 1
    blockNoise = step(0.3, blockNoise); // blockポイントを決める // 0 or 1
    float flickerTime = floor(uTime * 50.0);
    float flicker = random1d(flickerTime); // 0 - 1
    blockNoise = flicker > 0.5 ? blockNoise : 0.0;
    blockNoise *= 0.5;
  }

  if(isWave) {
    float flicker = sin(uTime * 20.0);
    float noise = snoise(vec2(vUv.y, uTime * 90.0));
    wave = flicker > 0.5 ? sin(noise * 20.0) * 0.03 : 0.0;
  }

  vec2 newUv = vUv + vec2(blockNoise) + vec2(waveFormWarp, 1.0) + vec2(deformLine, 0.0) + vec2(deformLine2, 0.0) + vec2(wave, 0.0);

  if(isColorShift) {
    float shift1 = 0.04 * 0.5;
    float shift2 = 0.01 * 0.5;
    float shift3 = 0.03 * 0.5;
    float r = texture2D(uTexture, newUv + vec2(shift1, 0.0)).r;
    float g = texture2D(uTexture, newUv + vec2(shift3, 0.0)).g;
    float b = texture2D(uTexture, newUv + vec2(shift2, 0.0)).b;

    texColor = vec3(r, g, b);
  } else {
    texColor = texture2D(uTexture, newUv).rgb;
  }

  if(isGhost) {
    vec2 newUv = vUv;
    float flickerTime = floor(uTime * 50.0);
    float flicker = random1d(flickerTime); // 0 - 1
    
    float offsetFlicker = flicker * 0.5 - 0.5; // -0.5 - 0.5
    vec2 offset = vec2(0.0, offsetFlicker * 0.8);
    vec3 ghostColor = texture2D(uTexture, vUv + offset).rgb;

    float mixFactor = flicker >  0.8 ? 0.2 : 0.0;
    texColor = mix(texColor, ghostColor, mixFactor);
  }

  gl_FragColor = vec4(texColor * baseScaneLine * scanLineUp * grainNoise, 1.0);
  // gl_FragColor = vec4(texColor, 1.0);
}