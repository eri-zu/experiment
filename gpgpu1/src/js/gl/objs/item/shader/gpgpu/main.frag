precision mediump float;

uniform sampler2D uBaseTexture;
uniform vec2 uResolution;
uniform float uTime;
uniform float uSpeed; 
uniform float uAmplitude; 
uniform float uNoiseSize; 

const float dieSpeed = 0.99;

#include ../../includes/simplexNoise4d.glsl // -1 - 1

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
	vec4 basePos = texture2D(uBaseTexture, uv);
	vec4 updatePos = texture2D(uParticles, uv);

	vec3 position = updatePos.xyz;
	float life = updatePos.w;

	if (life < 0.1) {
		position = basePos.xyz;
		life = basePos.w;
	}

	vec3 flowfield = vec3(
		snoise(vec4(position.xyz * uNoiseSize + 0.0, uTime * uSpeed)), 
		snoise(vec4(position.xyz * uNoiseSize + 1.0, uTime * uSpeed)), 
		snoise(vec4(position.xyz * uNoiseSize + 2.0, uTime * uSpeed))
	);
	flowfield = normalize(flowfield);

	position += flowfield * uAmplitude;

  life *= 0.99;
	gl_FragColor = vec4(position, life);
}
