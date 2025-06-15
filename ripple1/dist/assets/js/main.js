(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="177",ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,_c=1,ff=2,Uu=1,df=2,Ft=3,nn=0,Ge=1,yt=2,$t=0,ii=1,La=2,vc=3,Cc=4,pf=5,mn=100,gf=101,mf=102,Bf=103,wf=104,_f=200,vf=201,Cf=202,Ef=203,Da=204,Ha=205,xf=206,Uf=207,Sf=208,Mf=209,Ff=210,yf=211,Tf=212,bf=213,Qf=214,Pa=0,Na=1,Oa=2,oi=3,Ga=4,Va=5,Ka=6,ka=7,Su=0,If=1,Rf=2,An=0,Lf=1,Df=2,Hf=3,Pf=4,Nf=5,Of=6,Gf=7,Mu=300,ci=301,li=302,za=303,Wa=304,Cs=306,Xa=1e3,_n=1001,Ya=1002,ht=1003,Vf=1004,rr=1005,$e=1006,Hs=1007,vn=1008,Rt=1009,Fu=1010,yu=1011,Vi=1012,Xo=1013,Un=1014,Tt=1015,qi=1016,Yo=1017,Jo=1018,Ki=1020,Tu=35902,bu=1021,Qu=1022,At=1023,ki=1026,zi=1027,Iu=1028,Zo=1029,Ru=1030,qo=1031,jo=1033,jr=33776,$r=33777,As=33778,es=33779,Ja=35840,Za=35841,qa=35842,ja=35843,$a=36196,Ao=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,co=37815,lo=37816,uo=37817,ho=37818,fo=37819,po=37820,go=37821,ts=36492,mo=36494,Bo=36495,Lu=36283,wo=36284,_o=36285,vo=36286,Kf=3200,kf=3201,zf=0,Wf=1,Jt="",Xe="srgb",ui="srgb-linear",os="linear",Ae="srgb",Tn=7680,Ec=519,Xf=512,Yf=513,Jf=514,Du=515,Zf=516,qf=517,jf=518,$f=519,xc=35044,Uc="300 es",bt=2e3,cs=2001;class Fn{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){const t=this._listeners;return t===void 0?!1:t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){const t=this._listeners;if(t===void 0)return;const i=t[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){const e=this._listeners;if(e===void 0)return;const t=e[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,A);A.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Li=Math.PI/180,Wi=180/Math.PI;function di(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[A&255]+Fe[A>>8&255]+"-"+Fe[A>>16&15|64]+Fe[A>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[t&255]+Fe[t>>8&255]+Fe[t>>16&255]+Fe[t>>24&255]).toLowerCase()}function NA(n,A,e){return Math.max(A,Math.min(e,n))}function $o(n,A){return(n%A+A)%A}function Ad(n,A,e,t,i){return t+(n-A)*(i-t)/(e-A)}function ed(n,A,e){return n!==A?(e-n)/(A-n):0}function Di(n,A,e){return(1-e)*n+e*A}function td(n,A,e,t){return Di(n,A,1-Math.exp(-e*t))}function nd(n,A=1){return A-Math.abs($o(n,A*2)-A)}function id(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*(3-2*n))}function rd(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*n*(n*(n*6-15)+10))}function sd(n,A){return n+Math.floor(Math.random()*(A-n+1))}function ad(n,A){return n+Math.random()*(A-n)}function od(n){return n*(.5-Math.random())}function cd(n){n!==void 0&&(Sc=n);let A=Sc+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function ld(n){return n*Li}function ud(n){return n*Wi}function hd(n){return(n&n-1)===0&&n!==0}function fd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pd(n,A,e,t,i){const r=Math.cos,s=Math.sin,a=r(e/2),o=s(e/2),c=r((A+t)/2),l=s((A+t)/2),u=r((A-t)/2),h=s((A-t)/2),d=r((t-A)/2),g=s((t-A)/2);switch(i){case"XYX":n.set(a*l,o*u,o*h,a*c);break;case"YZY":n.set(o*h,a*l,o*u,a*c);break;case"ZXZ":n.set(o*u,o*h,a*l,a*c);break;case"XZX":n.set(a*l,o*g,o*d,a*c);break;case"YXY":n.set(o*d,a*l,o*g,a*c);break;case"ZYZ":n.set(o*g,o*d,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Li,RAD2DEG:Wi,generateUUID:di,clamp:NA,euclideanModulo:$o,mapLinear:Ad,inverseLerp:ed,lerp:Di,damp:td,pingpong:nd,smoothstep:id,smootherstep:rd,randInt:sd,randFloat:ad,randFloatSpread:od,seededRandom:cd,degToRad:ld,radToDeg:ud,isPowerOfTwo:hd,ceilPowerOfTwo:fd,floorPowerOfTwo:dd,setQuaternionFromProperEuler:pd,normalize:Le,denormalize:Zn};class DA{constructor(A=0,e=0){DA.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=NA(this.x,A.x,e.x),this.y=NA(this.y,A.y,e.y),this}clampScalar(A,e){return this.x=NA(this.x,A,e),this.y=NA(this.y,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(NA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(NA(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sn{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],c=t[i+1],l=t[i+2],u=t[i+3];const h=r[s+0],d=r[s+1],g=r[s+2],m=r[s+3];if(a===0){A[e+0]=o,A[e+1]=c,A[e+2]=l,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=d,A[e+2]=g,A[e+3]=m;return}if(u!==m||o!==h||c!==d||l!==g){let p=1-a;const f=o*h+c*d+l*g+u*m,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const y=Math.sqrt(x),U=Math.atan2(y,f*E);p=Math.sin(p*U)/y,a=Math.sin(a*U)/y}const C=a*E;if(o=o*p+h*C,c=c*p+d*C,l=l*p+g*C,u=u*p+m*C,p===1-a){const y=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=y,c*=y,l*=y,u*=y}}A[e]=o,A[e+1]=c,A[e+2]=l,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){const a=t[i],o=t[i+1],c=t[i+2],l=t[i+3],u=r[s],h=r[s+1],d=r[s+2],g=r[s+3];return A[e]=a*g+l*u+o*d-c*h,A[e+1]=o*g+l*h+c*u-a*d,A[e+2]=c*g+l*d+a*h-o*u,A[e+3]=l*g-a*u-o*h-c*d,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e=!0){const t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,c=a(t/2),l=a(i/2),u=a(r/2),h=o(t/2),d=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*l*u+c*d*g,this._y=c*d*u-h*l*g,this._z=c*l*g+h*d*u,this._w=c*l*u-h*d*g;break;case"YXZ":this._x=h*l*u+c*d*g,this._y=c*d*u-h*l*g,this._z=c*l*g-h*d*u,this._w=c*l*u+h*d*g;break;case"ZXY":this._x=h*l*u-c*d*g,this._y=c*d*u+h*l*g,this._z=c*l*g+h*d*u,this._w=c*l*u-h*d*g;break;case"ZYX":this._x=h*l*u-c*d*g,this._y=c*d*u+h*l*g,this._z=c*l*g-h*d*u,this._w=c*l*u+h*d*g;break;case"YZX":this._x=h*l*u+c*d*g,this._y=c*d*u+h*l*g,this._z=c*l*g-h*d*u,this._w=c*l*u-h*d*g;break;case"XZY":this._x=h*l*u-c*d*g,this._y=c*d*u-h*l*g,this._z=c*l*g+h*d*u,this._w=c*l*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10],h=t+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-o)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(t>a&&t>u){const d=2*Math.sqrt(1+t-a-u);this._w=(l-o)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-t-u);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(o+l)/d}else{const d=2*Math.sqrt(1+u-t-a);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(o+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(NA(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,c=e._z,l=e._w;return this._x=t*l+s*a+i*c-r*o,this._y=i*l+s*o+r*a-t*c,this._z=r*l+s*c+t*o-i*a,this._w=s*l-t*a-i*o-r*c,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*s+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(o),l=Math.atan2(c,a),u=Math.sin((1-e)*l)/c,h=Math.sin(e*l)/c;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t);return this.set(i*Math.sin(A),i*Math.cos(A),r*Math.sin(e),r*Math.cos(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(A=0,e=0,t=0){D.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(Mc.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(Mc.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,c=2*(s*i-a*t),l=2*(a*e-r*i),u=2*(r*t-s*e);return this.x=e+o*c+s*u-a*l,this.y=t+o*l+a*c-r*u,this.z=i+o*u+r*l-s*c,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=NA(this.x,A.x,e.x),this.y=NA(this.y,A.y,e.y),this.z=NA(this.z,A.z,e.z),this}clampScalar(A,e){return this.x=NA(this.x,A,e),this.y=NA(this.y,A,e),this.z=NA(this.z,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(NA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return Ps.copy(this).projectOnVector(A),this.sub(Ps)}reflect(A){return this.sub(Ps.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(NA(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,e=Math.random()*2-1,t=Math.sqrt(1-e*e);return this.x=t*Math.cos(A),this.y=e,this.z=t*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new D,Mc=new Sn;class LA{constructor(A,e,t,i,r,s,a,o,c){LA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,c)}set(A,e,t,i,r,s,a,o,c){const l=this.elements;return l[0]=A,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=o,l[6]=t,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],c=t[1],l=t[4],u=t[7],h=t[2],d=t[5],g=t[8],m=i[0],p=i[3],f=i[6],E=i[1],x=i[4],C=i[7],y=i[2],U=i[5],M=i[8];return r[0]=s*m+a*E+o*y,r[3]=s*p+a*x+o*U,r[6]=s*f+a*C+o*M,r[1]=c*m+l*E+u*y,r[4]=c*p+l*x+u*U,r[7]=c*f+l*C+u*M,r[2]=h*m+d*E+g*y,r[5]=h*p+d*x+g*U,r[8]=h*f+d*C+g*M,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],l=A[8];return e*s*l-e*a*c-t*r*l+t*a*o+i*r*c-i*s*o}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],l=A[8],u=l*s-a*c,h=a*o-l*r,d=c*r-s*o,g=e*u+t*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return A[0]=u*m,A[1]=(i*c-l*t)*m,A[2]=(a*t-i*s)*m,A[3]=h*m,A[4]=(l*e-i*o)*m,A[5]=(i*r-a*e)*m,A[6]=d*m,A[7]=(t*o-c*e)*m,A[8]=(s*e-t*r)*m,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(t*o,t*c,-t*(o*s+c*a)+s+A,-i*c,i*o,-i*(-c*s+o*a)+a+e,0,0,1),this}scale(A,e){return this.premultiply(Ns.makeScale(A,e)),this}rotate(A){return this.premultiply(Ns.makeRotation(-A)),this}translate(A,e){return this.premultiply(Ns.makeTranslation(A,e)),this}makeTranslation(A,e){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new LA;function Hu(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function Xi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){const n=Xi("canvas");return n.style.display="block",n}const Fc={};function ri(n){n in Fc||(Fc[n]=!0,console.warn(n))}function Bd(n,A,e){return new Promise(function(t,i){function r(){switch(n.clientWaitSync(A,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:t()}}setTimeout(r,e)})}function wd(n){const A=n.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function _d(n){const A=n.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const yc=new LA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new LA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){const n={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ae&&(i.r=Qt(i.r),i.g=Qt(i.g),i.b=Qt(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ae&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jt?os:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},A=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],t=[.3127,.329];return n.define({[ui]:{primaries:A,whitePoint:t,transfer:os,toXYZ:yc,fromXYZ:Tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:A,whitePoint:t,transfer:Ae,toXYZ:yc,fromXYZ:Tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}const zA=vd();function Qt(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bn;class Cd{static getDataURL(A,e="image/png"){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let t;if(A instanceof HTMLCanvasElement)t=A;else{bn===void 0&&(bn=Xi("canvas")),bn.width=A.width,bn.height=A.height;const i=bn.getContext("2d");A instanceof ImageData?i.putImageData(A,0,0):i.drawImage(A,0,0,A.width,A.height),t=bn}return t.toDataURL(e)}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=Xi("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Qt(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(Qt(e[t]/255)*255):e[t]=Qt(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Ed=0;class Ac{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=di(),this.data=A,this.dataReady=!0,this.version=0}getSize(A){const e=this.data;return e instanceof HTMLVideoElement?A.set(e.videoWidth,e.videoHeight):e!==null?A.set(e.width,e.height,e.depth||0):A.set(0,0,0),A}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Os(i[s].image)):r.push(Os(i[s]))}else r=Os(i);t.url=r}return e||(A.images[this.uuid]=t),t}}function Os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;const Gs=new D;class Qe extends Fn{constructor(A=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,t=_n,i=_n,r=$e,s=vn,a=At,o=Rt,c=Qe.DEFAULT_ANISOTROPY,l=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=di(),this.name="",this.source=new Ac(A),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new DA(0,0),this.repeat=new DA(1,1),this.center=new DA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new LA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(A&&A.depth&&A.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(A,e){this.updateRanges.push({start:A,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.renderTarget=A.renderTarget,this.isRenderTargetTexture=A.isRenderTargetTexture,this.isArrayTexture=A.isArrayTexture,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}setValues(A){for(const e in A){const t=A[e];if(t===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&t&&i.isVector2&&t.isVector2||i&&t&&i.isVector3&&t.isVector3||i&&t&&i.isMatrix3&&t.isMatrix3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Mu)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Xa:A.x=A.x-Math.floor(A.x);break;case _n:A.x=A.x<0?0:1;break;case Ya:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Xa:A.y=A.y-Math.floor(A.y);break;case _n:A.y=A.y<0?0:1;break;case Ya:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Mu;Qe.DEFAULT_ANISOTROPY=1;class he{constructor(A=0,e=0,t=0,i=1){he.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const o=A.elements,c=o[0],l=o[4],u=o[8],h=o[1],d=o[5],g=o[9],m=o[2],p=o[6],f=o[10];if(Math.abs(l-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,C=(d+1)/2,y=(f+1)/2,U=(l+h)/4,M=(u+m)/4,Q=(g+p)/4;return x>C&&x>y?x<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(x),i=U/t,r=M/t):C>y?C<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(C),t=U/i,r=Q/i):y<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),t=M/r,i=Q/r),this.set(t,i,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(h-l)*(h-l));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-m)/E,this.z=(h-l)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=NA(this.x,A.x,e.x),this.y=NA(this.y,A.y,e.y),this.z=NA(this.z,A.z,e.z),this.w=NA(this.w,A.w,e.w),this}clampScalar(A,e){return this.x=NA(this.x,A,e),this.y=NA(this.y,A,e),this.z=NA(this.z,A,e),this.w=NA(this.w,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(NA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends Fn{constructor(A=1,e=1,t={}){super(),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},t),this.isRenderTarget=!0,this.width=A,this.height=e,this.depth=t.depth,this.scissor=new he(0,0,A,e),this.scissorTest=!1,this.viewport=new he(0,0,A,e);const i={width:A,height:e,depth:t.depth},r=new Qe(i);this.textures=[];const s=t.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(t),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=t.depthTexture,this.samples=t.samples,this.multiview=t.multiview}_setTextureOptions(A={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};A.mapping!==void 0&&(e.mapping=A.mapping),A.wrapS!==void 0&&(e.wrapS=A.wrapS),A.wrapT!==void 0&&(e.wrapT=A.wrapT),A.wrapR!==void 0&&(e.wrapR=A.wrapR),A.magFilter!==void 0&&(e.magFilter=A.magFilter),A.minFilter!==void 0&&(e.minFilter=A.minFilter),A.format!==void 0&&(e.format=A.format),A.type!==void 0&&(e.type=A.type),A.anisotropy!==void 0&&(e.anisotropy=A.anisotropy),A.colorSpace!==void 0&&(e.colorSpace=A.colorSpace),A.flipY!==void 0&&(e.flipY=A.flipY),A.generateMipmaps!==void 0&&(e.generateMipmaps=A.generateMipmaps),A.internalFormat!==void 0&&(e.internalFormat=A.internalFormat);for(let t=0;t<this.textures.length;t++)this.textures[t].setValues(e)}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}set depthTexture(A){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),A!==null&&(A.renderTarget=this),this._depthTexture=A}get depthTexture(){return this._depthTexture}setSize(A,e,t=1){if(this.width!==A||this.height!==e||this.depth!==t){this.width=A,this.height=e,this.depth=t;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=A,this.textures[i].image.height=e,this.textures[i].image.depth=t,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let e=0,t=A.textures.length;e<t;e++){this.textures[e]=A.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},A.textures[e].image);this.textures[e].source=new Ac(i)}return this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Ud{constructor(A=1,e=1,t={}){super(A,e,t),this.isWebGLRenderTarget=!0}}class Pu extends Qe{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends Qe{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(A=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e+=3)this.expandByPoint(rt.fromArray(A,e));return this}setFromBufferAttribute(A){this.makeEmpty();for(let e=0,t=A.count;e<t;e++)this.expandByPoint(rt.fromBufferAttribute(A,e));return this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=rt.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0){const r=t.getAttribute("position");if(e===!0&&r!==void 0&&A.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)A.isMesh===!0?A.getVertexPosition(s,rt):rt.fromBufferAttribute(r,s),rt.applyMatrix4(A.matrixWorld),this.expandByPoint(rt);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),sr.copy(A.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)),sr.applyMatrix4(A.matrixWorld),this.union(sr)}const i=A.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,rt),rt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Bi),ar.subVectors(this.max,Bi),Qn.subVectors(A.a,Bi),In.subVectors(A.b,Bi),Rn.subVectors(A.c,Bi),Nt.subVectors(In,Qn),Ot.subVectors(Rn,In),cn.subVectors(Qn,Rn);let e=[0,-Nt.z,Nt.y,0,-Ot.z,Ot.y,0,-cn.z,cn.y,Nt.z,0,-Nt.x,Ot.z,0,-Ot.x,cn.z,0,-cn.x,-Nt.y,Nt.x,0,-Ot.y,Ot.x,0,-cn.y,cn.x,0];return!Vs(e,Qn,In,Rn,ar)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Qn,In,Rn,ar))?!1:(or.crossVectors(Nt,Ot),e=[or.x,or.y,or.z],Vs(e,Qn,In,Rn,ar))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,rt).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(rt).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(vt),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(A){return this.min.fromArray(A.min),this.max.fromArray(A.max),this}}const vt=[new D,new D,new D,new D,new D,new D,new D,new D],rt=new D,sr=new ji,Qn=new D,In=new D,Rn=new D,Nt=new D,Ot=new D,cn=new D,Bi=new D,ar=new D,or=new D,ln=new D;function Vs(n,A,e,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){ln.fromArray(n,r);const a=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),o=A.dot(ln),c=e.dot(ln),l=t.dot(ln);if(Math.max(-Math.max(o,c,l),Math.min(o,c,l))>a)return!1}return!0}const Md=new ji,wi=new D,Ks=new D;class Es{constructor(A=new D,e=-1){this.isSphere=!0,this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):Md.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;wi.subVectors(A,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(wi,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Ks.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(wi.copy(A.center).add(Ks)),this.expandByPoint(wi.copy(A.center).sub(Ks))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(A){return this.radius=A.radius,this.center.fromArray(A.center),this}}const Ct=new D,ks=new D,cr=new D,Gt=new D,zs=new D,lr=new D,Ws=new D;class ec{constructor(A=new D,e=new D(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Ct)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=Ct.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(Ct.copy(this.origin).addScaledVector(this.direction,e),Ct.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){ks.copy(A).add(e).multiplyScalar(.5),cr.copy(e).sub(A).normalize(),Gt.copy(this.origin).sub(ks);const r=A.distanceTo(e)*.5,s=-this.direction.dot(cr),a=Gt.dot(this.direction),o=-Gt.dot(cr),c=Gt.lengthSq(),l=Math.abs(1-s*s);let u,h,d,g;if(l>0)if(u=s*o-a,h=s*a-o,g=r*l,u>=0)if(h>=-g)if(h<=g){const m=1/l;u*=m,h*=m,d=u*(u+s*h+2*a)+h*(s*u+h+2*o)+c}else h=r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+c;else h=-r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+c;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),d=-u*u+h*(h+2*o)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),d=h*(h+2*o)+c):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),d=-u*u+h*(h+2*o)+c);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+c;return t&&t.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ks).addScaledVector(cr,h),d}intersectSphere(A,e){Ct.subVectors(A.center,this.origin);const t=Ct.dot(this.direction),i=Ct.dot(Ct)-t*t,r=A.radius*A.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return A.radius<0?!1:this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(t=(A.min.x-h.x)*c,i=(A.max.x-h.x)*c):(t=(A.max.x-h.x)*c,i=(A.min.x-h.x)*c),l>=0?(r=(A.min.y-h.y)*l,s=(A.max.y-h.y)*l):(r=(A.max.y-h.y)*l,s=(A.min.y-h.y)*l),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(A.min.z-h.z)*u,o=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,o=(A.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,Ct)!==null}intersectTriangle(A,e,t,i,r){zs.subVectors(e,A),lr.subVectors(t,A),Ws.crossVectors(zs,lr);let s=this.direction.dot(Ws),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gt.subVectors(this.origin,A);const o=a*this.direction.dot(lr.crossVectors(Gt,lr));if(o<0)return null;const c=a*this.direction.dot(zs.cross(Gt));if(c<0||o+c>s)return null;const l=-a*Gt.dot(Ws);return l<0?null:this.at(l/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(A,e,t,i,r,s,a,o,c,l,u,h,d,g,m,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,c,l,u,h,d,g,m,p)}set(A,e,t,i,r,s,a,o,c,l,u,h,d,g,m,p){const f=this.elements;return f[0]=A,f[4]=e,f[8]=t,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=c,f[6]=l,f[10]=u,f[14]=h,f[3]=d,f[7]=g,f[11]=m,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){const e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,t=A.elements,i=1/Ln.setFromMatrixColumn(A,0).length(),r=1/Ln.setFromMatrixColumn(A,1).length(),s=1/Ln.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){const h=s*l,d=s*u,g=a*l,m=a*u;e[0]=o*l,e[4]=-o*u,e[8]=c,e[1]=d+g*c,e[5]=h-m*c,e[9]=-a*o,e[2]=m-h*c,e[6]=g+d*c,e[10]=s*o}else if(A.order==="YXZ"){const h=o*l,d=o*u,g=c*l,m=c*u;e[0]=h+m*a,e[4]=g*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*l,e[9]=-a,e[2]=d*a-g,e[6]=m+h*a,e[10]=s*o}else if(A.order==="ZXY"){const h=o*l,d=o*u,g=c*l,m=c*u;e[0]=h-m*a,e[4]=-s*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=s*l,e[9]=m-h*a,e[2]=-s*c,e[6]=a,e[10]=s*o}else if(A.order==="ZYX"){const h=s*l,d=s*u,g=a*l,m=a*u;e[0]=o*l,e[4]=g*c-d,e[8]=h*c+m,e[1]=o*u,e[5]=m*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*o,e[10]=s*o}else if(A.order==="YZX"){const h=s*o,d=s*c,g=a*o,m=a*c;e[0]=o*l,e[4]=m-h*u,e[8]=g*u+d,e[1]=u,e[5]=s*l,e[9]=-a*l,e[2]=-c*l,e[6]=d*u+g,e[10]=h-m*u}else if(A.order==="XZY"){const h=s*o,d=s*c,g=a*o,m=a*c;e[0]=o*l,e[4]=-u,e[8]=c*l,e[1]=h*u+m,e[5]=s*l,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*l,e[10]=m*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Fd,A,yd)}lookAt(A,e,t){const i=this.elements;return ke.subVectors(A,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Vt.crossVectors(t,ke),Vt.lengthSq()===0&&(Math.abs(t.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Vt.crossVectors(t,ke)),Vt.normalize(),ur.crossVectors(ke,Vt),i[0]=Vt.x,i[4]=ur.x,i[8]=ke.x,i[1]=Vt.y,i[5]=ur.y,i[9]=ke.y,i[2]=Vt.z,i[6]=ur.z,i[10]=ke.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],c=t[12],l=t[1],u=t[5],h=t[9],d=t[13],g=t[2],m=t[6],p=t[10],f=t[14],E=t[3],x=t[7],C=t[11],y=t[15],U=i[0],M=i[4],Q=i[8],v=i[12],_=i[1],T=i[5],G=i[9],L=i[13],k=i[2],Y=i[6],V=i[10],X=i[14],O=i[3],tA=i[7],aA=i[11],gA=i[15];return r[0]=s*U+a*_+o*k+c*O,r[4]=s*M+a*T+o*Y+c*tA,r[8]=s*Q+a*G+o*V+c*aA,r[12]=s*v+a*L+o*X+c*gA,r[1]=l*U+u*_+h*k+d*O,r[5]=l*M+u*T+h*Y+d*tA,r[9]=l*Q+u*G+h*V+d*aA,r[13]=l*v+u*L+h*X+d*gA,r[2]=g*U+m*_+p*k+f*O,r[6]=g*M+m*T+p*Y+f*tA,r[10]=g*Q+m*G+p*V+f*aA,r[14]=g*v+m*L+p*X+f*gA,r[3]=E*U+x*_+C*k+y*O,r[7]=E*M+x*T+C*Y+y*tA,r[11]=E*Q+x*G+C*V+y*aA,r[15]=E*v+x*L+C*X+y*gA,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],c=A[13],l=A[2],u=A[6],h=A[10],d=A[14],g=A[3],m=A[7],p=A[11],f=A[15];return g*(+r*o*u-i*c*u-r*a*h+t*c*h+i*a*d-t*o*d)+m*(+e*o*d-e*c*h+r*s*h-i*s*d+i*c*l-r*o*l)+p*(+e*c*u-e*a*d-r*s*u+t*s*d+r*a*l-t*c*l)+f*(-i*a*l-e*o*u+e*a*h+i*s*u-t*s*h+t*o*l)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],l=A[8],u=A[9],h=A[10],d=A[11],g=A[12],m=A[13],p=A[14],f=A[15],E=u*p*c-m*h*c+m*o*d-a*p*d-u*o*f+a*h*f,x=g*h*c-l*p*c-g*o*d+s*p*d+l*o*f-s*h*f,C=l*m*c-g*u*c+g*a*d-s*m*d-l*a*f+s*u*f,y=g*u*o-l*m*o-g*a*h+s*m*h+l*a*p-s*u*p,U=e*E+t*x+i*C+r*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/U;return A[0]=E*M,A[1]=(m*h*r-u*p*r-m*i*d+t*p*d+u*i*f-t*h*f)*M,A[2]=(a*p*r-m*o*r+m*i*c-t*p*c-a*i*f+t*o*f)*M,A[3]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*M,A[4]=x*M,A[5]=(l*p*r-g*h*r+g*i*d-e*p*d-l*i*f+e*h*f)*M,A[6]=(g*o*r-s*p*r-g*i*c+e*p*c+s*i*f-e*o*f)*M,A[7]=(s*h*r-l*o*r+l*i*c-e*h*c-s*i*d+e*o*d)*M,A[8]=C*M,A[9]=(g*u*r-l*m*r-g*t*d+e*m*d+l*t*f-e*u*f)*M,A[10]=(s*m*r-g*a*r+g*t*c-e*m*c-s*t*f+e*a*f)*M,A[11]=(l*a*r-s*u*r-l*t*c+e*u*c+s*t*d-e*a*d)*M,A[12]=y*M,A[13]=(l*m*i-g*u*i+g*t*h-e*m*h-l*t*p+e*u*p)*M,A[14]=(g*a*i-s*m*i-g*t*o+e*m*o+s*t*p-e*a*p)*M,A[15]=(s*u*i-l*a*i+l*t*o-e*u*o-s*t*h+e*a*h)*M,this}scale(A){const e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,c=r*s,l=r*a;return this.set(c*s+t,c*a-i*o,c*o+i*a,0,c*a+i*o,l*a+t,l*o-i*s,0,c*o-i*a,l*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,c=r+r,l=s+s,u=a+a,h=r*c,d=r*l,g=r*u,m=s*l,p=s*u,f=a*u,E=o*c,x=o*l,C=o*u,y=t.x,U=t.y,M=t.z;return i[0]=(1-(m+f))*y,i[1]=(d+C)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(d-C)*U,i[5]=(1-(h+f))*U,i[6]=(p+E)*U,i[7]=0,i[8]=(g+x)*M,i[9]=(p-E)*M,i[10]=(1-(h+m))*M,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){const i=this.elements;let r=Ln.set(i[0],i[1],i[2]).length();const s=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],st.copy(this);const c=1/r,l=1/s,u=1/a;return st.elements[0]*=c,st.elements[1]*=c,st.elements[2]*=c,st.elements[4]*=l,st.elements[5]*=l,st.elements[6]*=l,st.elements[8]*=u,st.elements[9]*=u,st.elements[10]*=u,e.setFromRotationMatrix(st),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s,a=bt){const o=this.elements,c=2*r/(e-A),l=2*r/(t-i),u=(e+A)/(e-A),h=(t+i)/(t-i);let d,g;if(a===bt)d=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===cs)d=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,e,t,i,r,s,a=bt){const o=this.elements,c=1/(e-A),l=1/(t-i),u=1/(s-r),h=(e+A)*c,d=(t+i)*l;let g,m;if(a===bt)g=(s+r)*u,m=-2*u;else if(a===cs)g=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}}const Ln=new D,st=new pe,Fd=new D(0,0,0),yd=new D(1,1,1),Vt=new D,ur=new D,ke=new D,bc=new pe,Qc=new Sn;class Lt{constructor(A=0,e=0,t=0,i=Lt.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){const i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],c=i[5],l=i[9],u=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(NA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-NA(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(NA(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-NA(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(NA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-NA(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return bc.makeRotationFromQuaternion(A),this.setFromRotationMatrix(bc,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lt.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Td=0;const Ic=new D,Dn=new Sn,Et=new pe,hr=new D,_i=new D,bd=new D,Qd=new Sn,Rc=new D(1,0,0),Lc=new D(0,1,0),Dc=new D(0,0,1),Hc={type:"added"},Id={type:"removed"},Hn={type:"childadded",child:null},Xs={type:"childremoved",child:null};class Ve extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const A=new D,e=new Lt,t=new Sn,i=new D(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new LA}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return Dn.setFromAxisAngle(A,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(A,e){return Dn.setFromAxisAngle(A,e),this.quaternion.premultiply(Dn),this}rotateX(A){return this.rotateOnAxis(Rc,A)}rotateY(A){return this.rotateOnAxis(Lc,A)}rotateZ(A){return this.rotateOnAxis(Dc,A)}translateOnAxis(A,e){return Ic.copy(A).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(Rc,A)}translateY(A){return this.translateOnAxis(Lc,A)}translateZ(A){return this.translateOnAxis(Dc,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Et.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?hr.copy(A):hr.set(A,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Et.lookAt(_i,hr,this.up):Et.lookAt(hr,_i,this.up),this.quaternion.setFromRotationMatrix(Et),i&&(Et.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(Et),this.quaternion.premultiply(Dn.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Hc),Hn.child=A,this.dispatchEvent(Hn),Hn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(Id),Xs.child=A,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Et.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Et.multiply(A.parent.matrixWorld)),A.applyMatrix4(Et),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Hc),Hn.child=A,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(A,e);if(s!==void 0)return s}}getObjectsByProperty(A,e,t=[]){this[A]===e&&t.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(A,e,t);return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,A,bd),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Qd,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(A)}updateWorldMatrix(A,e){const t=this.parent;if(A===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(A){const e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(A),i.indirectTexture=this._indirectTexture.toJSON(A),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){const u=o[c];r(A.shapes,u)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(A.materials,this.material[o]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(A.animations,o))}}if(e){const a=s(A.geometries),o=s(A.materials),c=s(A.textures),l=s(A.images),u=s(A.shapes),h=s(A.skeletons),d=s(A.animations),g=s(A.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){const i=A.children[t];this.add(i.clone())}return this}}Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const at=new D,xt=new D,Ys=new D,Ut=new D,Pn=new D,Nn=new D,Pc=new D,Js=new D,Zs=new D,qs=new D,js=new he,$s=new he,Aa=new he;class lt{constructor(A=new D,e=new D,t=new D){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),at.subVectors(A,e),i.cross(at);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){at.subVectors(i,e),xt.subVectors(t,e),Ys.subVectors(A,e);const s=at.dot(at),a=at.dot(xt),o=at.dot(Ys),c=xt.dot(xt),l=xt.dot(Ys),u=s*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,d=(c*o-a*l)*h,g=(s*l-a*o)*h;return r.set(1-d-g,g,d)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,Ut)===null?!1:Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getInterpolation(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,Ut)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ut.x),o.addScaledVector(s,Ut.y),o.addScaledVector(a,Ut.z),o)}static getInterpolatedAttribute(A,e,t,i,r,s){return js.setScalar(0),$s.setScalar(0),Aa.setScalar(0),js.fromBufferAttribute(A,e),$s.fromBufferAttribute(A,t),Aa.fromBufferAttribute(A,i),s.setScalar(0),s.addScaledVector(js,r.x),s.addScaledVector($s,r.y),s.addScaledVector(Aa,r.z),s}static isFrontFacing(A,e,t,i){return at.subVectors(t,e),xt.subVectors(A,e),at.cross(xt).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return at.subVectors(this.c,this.b),xt.subVectors(this.a,this.b),at.cross(xt).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return lt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return lt.getBarycoord(A,this.a,this.b,this.c,e)}getInterpolation(A,e,t,i,r){return lt.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return lt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return lt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const t=this.a,i=this.b,r=this.c;let s,a;Pn.subVectors(i,t),Nn.subVectors(r,t),Js.subVectors(A,t);const o=Pn.dot(Js),c=Nn.dot(Js);if(o<=0&&c<=0)return e.copy(t);Zs.subVectors(A,i);const l=Pn.dot(Zs),u=Nn.dot(Zs);if(l>=0&&u<=l)return e.copy(i);const h=o*u-l*c;if(h<=0&&o>=0&&l<=0)return s=o/(o-l),e.copy(t).addScaledVector(Pn,s);qs.subVectors(A,r);const d=Pn.dot(qs),g=Nn.dot(qs);if(g>=0&&d<=g)return e.copy(r);const m=d*c-o*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(t).addScaledVector(Nn,a);const p=l*g-d*u;if(p<=0&&u-l>=0&&d-g>=0)return Pc.subVectors(r,i),a=(u-l)/(u-l+(d-g)),e.copy(i).addScaledVector(Pc,a);const f=1/(p+m+h);return s=m*f,a=h*f,e.copy(t).addScaledVector(Pn,s).addScaledVector(Nn,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ea(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}class qA{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,e,t)}set(A,e,t){if(e===void 0&&t===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,e,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=Xe){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,zA.colorSpaceToWorking(this,e),this}setRGB(A,e,t,i=zA.workingColorSpace){return this.r=A,this.g=e,this.b=t,zA.colorSpaceToWorking(this,i),this}setHSL(A,e,t,i=zA.workingColorSpace){if(A=$o(A,1),e=NA(e,0,1),t=NA(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=ea(s,r,A+1/3),this.g=ea(s,r,A),this.b=ea(s,r,A-1/3)}return zA.colorSpaceToWorking(this,i),this}setStyle(A,e=Xe){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=Xe){const t=Ou[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Qt(A.r),this.g=Qt(A.g),this.b=Qt(A.b),this}copyLinearToSRGB(A){return this.r=si(A.r),this.g=si(A.g),this.b=si(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Xe){return zA.workingToColorSpace(ye.copy(this),A),Math.round(NA(ye.r*255,0,255))*65536+Math.round(NA(ye.g*255,0,255))*256+Math.round(NA(ye.b*255,0,255))}getHexString(A=Xe){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=zA.workingColorSpace){zA.workingToColorSpace(ye.copy(this),e);const t=ye.r,i=ye.g,r=ye.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return A.h=o,A.s=c,A.l=l,A}getRGB(A,e=zA.workingColorSpace){return zA.workingToColorSpace(ye.copy(this),e),A.r=ye.r,A.g=ye.g,A.b=ye.b,A}getStyle(A=Xe){zA.workingToColorSpace(ye.copy(this),A);const e=ye.r,t=ye.g,i=ye.b;return A!==Xe?`color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(A,e,t){return this.getHSL(Kt),this.setHSL(Kt.h+A,Kt.s+e,Kt.l+t)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(Kt),A.getHSL(fr);const t=Di(Kt.h,fr.h,e),i=Di(Kt.s,fr.s,e),r=Di(Kt.l,fr.l,e);return this.setHSL(t,i,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const e=this.r,t=this.g,i=this.b,r=A.elements;return this.r=r[0]*e+r[3]*t+r[6]*i,this.g=r[1]*e+r[4]*t+r[7]*i,this.b=r[2]*e+r[5]*t+r[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new qA;qA.NAMES=Ou;let Rd=0;class $i extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ii,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ha,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qA(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(t.blending=this.blending),this.side!==nn&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==Da&&(t.blendSrc=this.blendSrc),this.blendDst!==Ha&&(t.blendDst=this.blendDst),this.blendEquation!==mn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class tc extends $i{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const ge=new D,dr=new DA;let Ld=0;class mt{constructor(A,e,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=xc,this.updateRanges=[],this.gpuType=Tt,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,e){this.updateRanges.push({start:A,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(A),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(A),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(A),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(A),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(A),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(A,e=0){return this.array.set(A,e),this}getComponent(A,e){let t=this.array[A*this.itemSize+e];return this.normalized&&(t=Zn(t,this.array)),t}setComponent(A,e,t){return this.normalized&&(t=Le(t,this.array)),this.array[A*this.itemSize+e]=t,this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(A,e){return this.normalized&&(e=Le(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(A,e){return this.normalized&&(e=Le(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(A,e){return this.normalized&&(e=Le(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(A,e){return this.normalized&&(e=Le(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=Le(e,this.array),t=Le(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=Le(e,this.array),t=Le(t,this.array),i=Le(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=Le(e,this.array),t=Le(t,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==xc&&(A.usage=this.usage),A}}class Gu extends mt{constructor(A,e,t){super(new Uint16Array(A),e,t)}}class Vu extends mt{constructor(A,e,t){super(new Uint32Array(A),e,t)}}class ft extends mt{constructor(A,e,t){super(new Float32Array(A),e,t)}}let Dd=0;const Ze=new pe,ta=new Ve,On=new D,ze=new ji,vi=new ji,Ee=new D;class Pt extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Hu(A)?Vu:Gu)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new LA().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Ze.makeRotationFromQuaternion(A),this.applyMatrix4(Ze),this}rotateX(A){return Ze.makeRotationX(A),this.applyMatrix4(Ze),this}rotateY(A){return Ze.makeRotationY(A),this.applyMatrix4(Ze),this}rotateZ(A){return Ze.makeRotationZ(A),this.applyMatrix4(Ze),this}translate(A,e,t){return Ze.makeTranslation(A,e,t),this.applyMatrix4(Ze),this}scale(A,e,t){return Ze.makeScale(A,e,t),this.applyMatrix4(Ze),this}lookAt(A){return ta.lookAt(A),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(A){const e=this.getAttribute("position");if(e===void 0){const t=[];for(let i=0,r=A.length;i<r;i++){const s=A[i];t.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ft(t,3))}else{const t=Math.min(A.length,e.count);for(let i=0;i<t;i++){const r=A[i];e.setXYZ(i,r.x,r.y,r.z||0)}A.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(A){const t=this.boundingSphere.center;if(ze.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(ze.min,vi.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,vi.max),ze.expandByPoint(Ee)):(ze.expandByPoint(vi.min),ze.expandByPoint(vi.max))}ze.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)Ee.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(Ee));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Ee.fromBufferAttribute(a,c),o&&(On.fromBufferAttribute(A,c),Ee.add(On)),i=Math.max(i,t.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*t.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let Q=0;Q<t.count;Q++)a[Q]=new D,o[Q]=new D;const c=new D,l=new D,u=new D,h=new DA,d=new DA,g=new DA,m=new D,p=new D;function f(Q,v,_){c.fromBufferAttribute(t,Q),l.fromBufferAttribute(t,v),u.fromBufferAttribute(t,_),h.fromBufferAttribute(r,Q),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),l.sub(c),u.sub(c),d.sub(h),g.sub(h);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(m.copy(l).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(T),p.copy(u).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(T),a[Q].add(m),a[v].add(m),a[_].add(m),o[Q].add(p),o[v].add(p),o[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:A.count}]);for(let Q=0,v=E.length;Q<v;++Q){const _=E[Q],T=_.start,G=_.count;for(let L=T,k=T+G;L<k;L+=3)f(A.getX(L+0),A.getX(L+1),A.getX(L+2))}const x=new D,C=new D,y=new D,U=new D;function M(Q){y.fromBufferAttribute(i,Q),U.copy(y);const v=a[Q];x.copy(v),x.sub(y.multiplyScalar(y.dot(v))).normalize(),C.crossVectors(U,v);const T=C.dot(o[Q])<0?-1:1;s.setXYZW(Q,x.x,x.y,x.z,T)}for(let Q=0,v=E.length;Q<v;++Q){const _=E[Q],T=_.start,G=_.count;for(let L=T,k=T+G;L<k;L+=3)M(A.getX(L+0)),M(A.getX(L+1)),M(A.getX(L+2))}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new mt(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const i=new D,r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D;if(A)for(let h=0,d=A.count;h<d;h+=3){const g=A.getX(h+0),m=A.getX(h+1),p=A.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,p),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.fromBufferAttribute(t,p),a.add(l),o.add(l),c.add(l),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(m,o.x,o.y,o.z),t.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)Ee.fromBufferAttribute(A,e),Ee.normalize(),A.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function A(a,o){const c=a.array,l=a.itemSize,u=a.normalized,h=new c.constructor(o.length*l);let d=0,g=0;for(let m=0,p=o.length;m<p;m++){a.isInterleavedBufferAttribute?d=o[m]*a.data.stride+a.offset:d=o[m]*l;for(let f=0;f<l;f++)h[g++]=c[d++]}return new mt(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pt,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],c=A(o,t);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const o=[],c=r[a];for(let l=0,u=c.length;l<u;l++){const h=c[l],d=A(h,t);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const A={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(A[c]=o[c]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const c=t[o];A.data.attributes[o]=c.toJSON(A.data)}const i={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];l.push(d.toJSON(A.data))}l.length>0&&(i[o]=l,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere=a.toJSON()),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone());const i=A.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=A.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new pe,un=new ec,pr=new Es,Oc=new D,gr=new D,mr=new D,Br=new D,na=new D,wr=new D,Gc=new D,_r=new D;class ut extends Ve{constructor(A=new Pt,e=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],u=r[o];l!==0&&(na.fromBufferAttribute(u,A),s?wr.addScaledVector(na,l):wr.addScaledVector(na.sub(e),l))}e.add(wr)}return e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere),pr.applyMatrix4(r),un.copy(A.ray).recast(A.near),!(pr.containsPoint(un.origin)===!1&&(un.intersectSphere(pr,Oc)===null||un.origin.distanceToSquared(Oc)>(A.far-A.near)**2))&&(Nc.copy(r).invert(),un.copy(A.ray).applyMatrix4(Nc),!(t.boundingBox!==null&&un.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,e,un)))}_computeIntersections(A,e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const p=h[g],f=s[p.materialIndex],E=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let C=E,y=x;C<y;C+=3){const U=a.getX(C),M=a.getX(C+1),Q=a.getX(C+2);i=vr(this,f,A,t,c,l,u,U,M,Q),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let p=g,f=m;p<f;p+=3){const E=a.getX(p),x=a.getX(p+1),C=a.getX(p+2);i=vr(this,s,A,t,c,l,u,E,x,C),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const p=h[g],f=s[p.materialIndex],E=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let C=E,y=x;C<y;C+=3){const U=C,M=C+1,Q=C+2;i=vr(this,f,A,t,c,l,u,U,M,Q),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let p=g,f=m;p<f;p+=3){const E=p,x=p+1,C=p+2;i=vr(this,s,A,t,c,l,u,E,x,C),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Hd(n,A,e,t,i,r,s,a){let o;if(A.side===Ge?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,A.side===nn,a),o===null)return null;_r.copy(a),_r.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:n}}function vr(n,A,e,t,i,r,s,a,o,c){n.getVertexPosition(a,gr),n.getVertexPosition(o,mr),n.getVertexPosition(c,Br);const l=Hd(n,A,e,t,gr,mr,Br,Gc);if(l){const u=new D;lt.getBarycoord(Gc,gr,mr,Br,u),i&&(l.uv=lt.getInterpolatedAttribute(i,a,o,c,u,new DA)),r&&(l.uv1=lt.getInterpolatedAttribute(r,a,o,c,u,new DA)),s&&(l.normal=lt.getInterpolatedAttribute(s,a,o,c,u,new D),l.normal.dot(t.direction)>0&&l.normal.multiplyScalar(-1));const h={a,b:o,c,normal:new D,materialIndex:0};lt.getNormal(gr,mr,Br,h.normal),l.face=h,l.barycoord=u}return l}class Ar extends Pt{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],c=[],l=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,t,e,A,s,r,0),g("z","y","x",1,-1,t,e,-A,s,r,1),g("x","z","y",1,1,A,t,e,i,s,2),g("x","z","y",1,-1,A,t,-e,i,s,3),g("x","y","z",1,-1,A,e,t,i,r,4),g("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2));function g(m,p,f,E,x,C,y,U,M,Q,v){const _=C/M,T=y/Q,G=C/2,L=y/2,k=U/2,Y=M+1,V=Q+1;let X=0,O=0;const tA=new D;for(let aA=0;aA<V;aA++){const gA=aA*T-L;for(let QA=0;QA<Y;QA++){const OA=QA*_-G;tA[m]=OA*E,tA[p]=gA*x,tA[f]=k,c.push(tA.x,tA.y,tA.z),tA[m]=0,tA[p]=0,tA[f]=U>0?1:-1,l.push(tA.x,tA.y,tA.z),u.push(QA/M),u.push(1-aA/Q),X+=1}}for(let aA=0;aA<Q;aA++)for(let gA=0;gA<M;gA++){const QA=h+gA+Y*aA,OA=h+gA+Y*(aA+1),z=h+(gA+1)+Y*(aA+1),eA=h+(gA+1)+Y*aA;o.push(QA,OA,eA),o.push(OA,z,eA),O+=6}a.addGroup(d,O,v),d+=O,h+=X}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ar(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function hi(n){const A={};for(const e in n){A[e]={};for(const t in n[e]){const i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[e][t]=null):A[e][t]=i.clone():Array.isArray(i)?A[e][t]=i.slice():A[e][t]=i}}return A}function De(n){const A={};for(let e=0;e<n.length;e++){const t=hi(n[e]);for(const i in t)A[i]=t[i]}return A}function Pd(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function Ku(n){const A=n.getRenderTarget();return A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zA.workingColorSpace}const Nd={clone:hi,merge:De};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends $i{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=hi(A.uniforms),this.uniformsGroups=Pd(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}let ku=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=bt}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const kt=new D,Vc=new DA,Kc=new DA;class ct extends ku{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,e,t){kt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kt.x,kt.y).multiplyScalar(-A/kt.z),kt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kt.x,kt.y).multiplyScalar(-A/kt.z)}getViewSize(A,e){return this.getViewBounds(A,Vc,Kc),e.subVectors(Kc,Vc)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(Li*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*t/c,i*=s.width/o,t*=s.height/c}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gn=-90,Vn=1;class Vd extends Ve{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ct(Gn,Vn,A,e);i.layers=this.layers,this.add(i);const r=new ct(Gn,Vn,A,e);r.layers=this.layers,this.add(r);const s=new ct(Gn,Vn,A,e);s.layers=this.layers,this.add(s);const a=new ct(Gn,Vn,A,e);a.layers=this.layers,this.add(a);const o=new ct(Gn,Vn,A,e);o.layers=this.layers,this.add(o);const c=new ct(Gn,Vn,A,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const A=this.coordinateSystem,e=this.children.concat(),[t,i,r,s,a,o]=e;for(const c of e)this.remove(c);if(A===bt)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===cs)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const c of e)this.add(c),c.updateMatrixWorld()}update(A,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,u=A.getRenderTarget(),h=A.getActiveCubeFace(),d=A.getActiveMipmapLevel(),g=A.xr.enabled;A.xr.enabled=!1;const m=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0,i),A.render(e,r),A.setRenderTarget(t,1,i),A.render(e,s),A.setRenderTarget(t,2,i),A.render(e,a),A.setRenderTarget(t,3,i),A.render(e,o),A.setRenderTarget(t,4,i),A.render(e,c),t.texture.generateMipmaps=m,A.setRenderTarget(t,5,i),A.render(e,l),A.setRenderTarget(u,h,d),A.xr.enabled=g,t.texture.needsPMREMUpdate=!0}}class zu extends Qe{constructor(A=[],e=ci,t,i,r,s,a,o,c,l){super(A,e,t,i,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Kd extends rn{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];this.texture=new zu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ar(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:hi(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ge,blending:$t});r.uniforms.tEquirect.value=e;const s=new ut(i,r),a=e.minFilter;return e.minFilter===vn&&(e.minFilter=$e),new Vd(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e=!0,t=!0,i=!0){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}}class Ai extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kd={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(c&&A.hand){s=!0;for(const m of A.hand.values()){const p=e.getJointPose(m,t),f=this._getHandJoint(c,m);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new Ai;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}}class kc extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lt,this.environmentIntensity=1,this.environmentRotation=new Lt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ra=new D,zd=new D,Wd=new LA;class Xt{constructor(A=new D(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=ra.subVectors(t,e).cross(zd.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e){const t=A.delta(ra),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(A.start).addScaledVector(t,r)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||Wd.getNormalMatrix(A),i=this.coplanarPoint(ra).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hn=new Es,Cr=new D;class Wu{constructor(A=new Xt,e=new Xt,t=new Xt,i=new Xt,r=new Xt,s=new Xt){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,e=bt){const t=this.planes,i=A.elements,r=i[0],s=i[1],a=i[2],o=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],g=i[9],m=i[10],p=i[11],f=i[12],E=i[13],x=i[14],C=i[15];if(t[0].setComponents(o-r,h-c,p-d,C-f).normalize(),t[1].setComponents(o+r,h+c,p+d,C+f).normalize(),t[2].setComponents(o+s,h+l,p+g,C+E).normalize(),t[3].setComponents(o-s,h-l,p-g,C-E).normalize(),t[4].setComponents(o-a,h-u,p-m,C-x).normalize(),e===bt)t[5].setComponents(o+a,h+u,p+m,C+x).normalize();else if(e===cs)t[5].setComponents(a,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),hn.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const e=A.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hn.copy(e.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(hn)}intersectsSprite(A){return hn.center.set(0,0,0),hn.radius=.7071067811865476,hn.applyMatrix4(A.matrixWorld),this.intersectsSphere(hn)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(Cr.x=i.normal.x>0?A.max.x:A.min.x,Cr.y=i.normal.y>0?A.max.y:A.min.y,Cr.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xu extends $i{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const ls=new D,us=new D,zc=new pe,Ci=new ec,Er=new Es,sa=new D,Wc=new D;class Xd extends Ve{constructor(A=new Pt,e=new Xu){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const e=A.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)ls.fromBufferAttribute(e,i-1),us.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=ls.distanceTo(us);A.setAttribute("lineDistance",new ft(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,e){const t=this.geometry,i=this.matrixWorld,r=A.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,A.ray.intersectsSphere(Er)===!1)return;zc.copy(i).invert(),Ci.copy(A.ray).applyMatrix4(zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=this.isLineSegments?2:1,l=t.index,h=t.attributes.position;if(l!==null){const d=Math.max(0,s.start),g=Math.min(l.count,s.start+s.count);for(let m=d,p=g-1;m<p;m+=c){const f=l.getX(m),E=l.getX(m+1),x=xr(this,A,Ci,o,f,E,m);x&&e.push(x)}if(this.isLineLoop){const m=l.getX(g-1),p=l.getX(d),f=xr(this,A,Ci,o,m,p,g-1);f&&e.push(f)}}else{const d=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let m=d,p=g-1;m<p;m+=c){const f=xr(this,A,Ci,o,m,m+1,m);f&&e.push(f)}if(this.isLineLoop){const m=xr(this,A,Ci,o,g-1,d,g-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xr(n,A,e,t,i,r,s){const a=n.geometry.attributes.position;if(ls.fromBufferAttribute(a,i),us.fromBufferAttribute(a,r),e.distanceSqToSegment(ls,us,sa,Wc)>t)return;sa.applyMatrix4(n.matrixWorld);const c=A.ray.origin.distanceTo(sa);if(!(c<A.near||c>A.far))return{distance:c,point:Wc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Xc=new D,Yc=new D;class Yd extends Xd{constructor(A,e){super(A,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const e=A.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)Xc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+Xc.distanceTo(Yc);A.setAttribute("lineDistance",new ft(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jd extends Qe{constructor(A,e,t,i,r,s,a,o,c){super(A,e,t,i,r,s,a,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yu extends Qe{constructor(A,e,t=Un,i,r,s,a=ht,o=ht,c,l=ki,u=1){if(l!==ki&&l!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:A,height:e,depth:u};super(h,i,r,s,a,o,l,t,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.source=new Ac(Object.assign({},A.image)),this.compareFunction=A.compareFunction,this}toJSON(A){const e=super.toJSON(A);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mn extends Pt{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};const r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),c=a+1,l=o+1,u=A/a,h=e/o,d=[],g=[],m=[],p=[];for(let f=0;f<l;f++){const E=f*h-s;for(let x=0;x<c;x++){const C=x*u-r;g.push(C,-E,0),m.push(0,0,1),p.push(x/a),p.push(1-f/o)}}for(let f=0;f<o;f++)for(let E=0;E<a;E++){const x=E+c*f,C=E+c*(f+1),y=E+1+c*(f+1),U=E+1+c*f;d.push(x,C,U),d.push(C,y,U)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(p,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Mn(A.width,A.height,A.widthSegments,A.heightSegments)}}class Zd extends Dt{constructor(A){super(A),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qd extends $i{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class jd extends $i{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Jc={enabled:!1,files:{},add:function(n,A){this.enabled!==!1&&(this.files[n]=A)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class $d{constructor(A,e,t){const i=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=A,this.onProgress=e,this.onError=t,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null}}}const Ap=new $d;class nc{constructor(A){this.manager=A!==void 0?A:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,e){const t=this;return new Promise(function(i,r){t.load(A,i,e,r)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}nc.DEFAULT_MATERIAL_NAME="__DEFAULT";class ep extends nc{constructor(A){super(A)}load(A,e,t,i){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const r=this,s=Jc.get(A);if(s!==void 0)return r.manager.itemStart(A),setTimeout(function(){e&&e(s),r.manager.itemEnd(A)},0),s;const a=Xi("img");function o(){l(),Jc.add(A,this),e&&e(this),r.manager.itemEnd(A)}function c(u){l(),i&&i(u),r.manager.itemError(A),r.manager.itemEnd(A)}function l(){a.removeEventListener("load",o,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",c,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(A),a.src=A,a}}class tp extends nc{constructor(A){super(A)}load(A,e,t,i){const r=new Qe,s=new ep(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(A,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}}class Ju extends ku{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,s=t+A,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class np extends ct{constructor(A=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=A}}class ip{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zc();A=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=A}return A}}function Zc(){return performance.now()}class qc{constructor(A=1,e=0,t=0){this.radius=A,this.phi=e,this.theta=t}set(A,e,t){return this.radius=A,this.phi=e,this.theta=t,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=NA(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,e,t){return this.radius=Math.sqrt(A*A+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(NA(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rp extends Yd{constructor(A=1){const e=[0,0,0,A,0,0,0,0,0,0,A,0,0,0,0,0,0,A],t=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Pt;i.setAttribute("position",new ft(e,3)),i.setAttribute("color",new ft(t,3));const r=new Xu({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(A,e,t){const i=new qA,r=this.geometry.attributes.color.array;return i.set(A),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(t),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sp extends Fn{constructor(A,e=null){super(),this.object=A,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(A){if(A===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=A}disconnect(){}dispose(){}update(){}}function jc(n,A,e,t){const i=ap(t);switch(e){case bu:return n*A;case Iu:return n*A/i.components*i.byteLength;case Zo:return n*A/i.components*i.byteLength;case Ru:return n*A*2/i.components*i.byteLength;case qo:return n*A*2/i.components*i.byteLength;case Qu:return n*A*3/i.components*i.byteLength;case At:return n*A*4/i.components*i.byteLength;case jo:return n*A*4/i.components*i.byteLength;case jr:case $r:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case As:case es:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case Za:case ja:return Math.max(n,16)*Math.max(A,8)/4;case Ja:case qa:return Math.max(n,8)*Math.max(A,8)/2;case $a:case Ao:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*8;case eo:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((A+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((A+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((A+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((A+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((A+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((A+4)/5)*16;case oo:return Math.floor((n+7)/8)*Math.floor((A+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((A+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((A+4)/5)*16;case uo:return Math.floor((n+9)/10)*Math.floor((A+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((A+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((A+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((A+9)/10)*16;case go:return Math.floor((n+11)/12)*Math.floor((A+11)/12)*16;case ts:case mo:case Bo:return Math.ceil(n/4)*Math.ceil(A/4)*16;case Lu:case wo:return Math.ceil(n/4)*Math.ceil(A/4)*8;case _o:case vo:return Math.ceil(n/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(n){switch(n){case Rt:case Fu:return{byteLength:1,components:1};case Vi:case yu:case qi:return{byteLength:2,components:1};case Yo:case Jo:return{byteLength:2,components:4};case Un:case Xo:case Tt:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zu(){let n=null,A=!1,e=null,t=null;function i(r,s){e(r,s),t=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(t=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function op(n){const A=new WeakMap;function e(a,o){const c=a.array,l=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,c,l),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function t(a,o,c){const l=o.array,u=o.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,l);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){const g=u[h],m=u[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++h,u[h]=m)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){const m=u[d];n.bufferSubData(c,m.start*l.BYTES_PER_ELEMENT,l,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),A.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=A.get(a);o&&(n.deleteBuffer(o.buffer),A.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=A.get(a);(!l||l.version<a.version)&&A.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=A.get(a);if(c===void 0)A.set(a,e(a,o));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");t(c.buffer,a,o),c.version=a.version}}return{get:i,remove:r,update:s}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:gp,batching_pars_vertex:mp,batching_vertex:Bp,begin_vertex:wp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:Cp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:xp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Mp,color_fragment:Fp,color_pars_fragment:yp,color_pars_vertex:Tp,color_vertex:bp,common:Qp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Pp,colorspace_fragment:Np,colorspace_pars_fragment:Op,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Kp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:eg,envmap_vertex:zp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Ag,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:gg,map_particle_fragment:mg,map_particle_pars_fragment:Bg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:_g,morphinstance_vertex:vg,morphcolor_vertex:Cg,morphnormal_vertex:Eg,morphtarget_pars_vertex:xg,morphtarget_vertex:Ug,normal_fragment_begin:Sg,normal_fragment_maps:Mg,normal_pars_fragment:Fg,normal_pars_vertex:yg,normal_vertex:Tg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Lg,opaque_fragment:Dg,packing:Hg,premultiplied_alpha_fragment:Pg,project_vertex:Ng,dithering_fragment:Og,dithering_pars_fragment:Gg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:zg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:Yg,skinning_pars_vertex:Jg,skinning_vertex:Zg,skinnormal_vertex:qg,specularmap_fragment:jg,specularmap_pars_fragment:$g,tonemapping_fragment:Am,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:rm,uv_vertex:sm,worldpos_vertex:am,background_vert:om,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:um,cube_vert:hm,cube_frag:fm,depth_vert:dm,depth_frag:pm,distanceRGBA_vert:gm,distanceRGBA_frag:mm,equirect_vert:Bm,equirect_frag:wm,linedashed_vert:_m,linedashed_frag:vm,meshbasic_vert:Cm,meshbasic_frag:Em,meshlambert_vert:xm,meshlambert_frag:Um,meshmatcap_vert:Sm,meshmatcap_frag:Mm,meshnormal_vert:Fm,meshnormal_frag:ym,meshphong_vert:Tm,meshphong_frag:bm,meshphysical_vert:Qm,meshphysical_frag:Im,meshtoon_vert:Rm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Hm,shadow_vert:Pm,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Gm},rA={common:{diffuse:{value:new qA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new LA},alphaMap:{value:null},alphaMapTransform:{value:new LA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new LA}},envmap:{envMap:{value:null},envMapRotation:{value:new LA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new LA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new LA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new LA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new LA},normalScale:{value:new DA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new LA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new LA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new LA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new LA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new LA},alphaTest:{value:0},uvTransform:{value:new LA}},sprite:{diffuse:{value:new qA(16777215)},opacity:{value:1},center:{value:new DA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new LA},alphaMap:{value:null},alphaMapTransform:{value:new LA},alphaTest:{value:0}}},gt={basic:{uniforms:De([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.fog]),vertexShader:PA.meshbasic_vert,fragmentShader:PA.meshbasic_frag},lambert:{uniforms:De([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,rA.lights,{emissive:{value:new qA(0)}}]),vertexShader:PA.meshlambert_vert,fragmentShader:PA.meshlambert_frag},phong:{uniforms:De([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,rA.lights,{emissive:{value:new qA(0)},specular:{value:new qA(1118481)},shininess:{value:30}}]),vertexShader:PA.meshphong_vert,fragmentShader:PA.meshphong_frag},standard:{uniforms:De([rA.common,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.roughnessmap,rA.metalnessmap,rA.fog,rA.lights,{emissive:{value:new qA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:PA.meshphysical_vert,fragmentShader:PA.meshphysical_frag},toon:{uniforms:De([rA.common,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.gradientmap,rA.fog,rA.lights,{emissive:{value:new qA(0)}}]),vertexShader:PA.meshtoon_vert,fragmentShader:PA.meshtoon_frag},matcap:{uniforms:De([rA.common,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,{matcap:{value:null}}]),vertexShader:PA.meshmatcap_vert,fragmentShader:PA.meshmatcap_frag},points:{uniforms:De([rA.points,rA.fog]),vertexShader:PA.points_vert,fragmentShader:PA.points_frag},dashed:{uniforms:De([rA.common,rA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:PA.linedashed_vert,fragmentShader:PA.linedashed_frag},depth:{uniforms:De([rA.common,rA.displacementmap]),vertexShader:PA.depth_vert,fragmentShader:PA.depth_frag},normal:{uniforms:De([rA.common,rA.bumpmap,rA.normalmap,rA.displacementmap,{opacity:{value:1}}]),vertexShader:PA.meshnormal_vert,fragmentShader:PA.meshnormal_frag},sprite:{uniforms:De([rA.sprite,rA.fog]),vertexShader:PA.sprite_vert,fragmentShader:PA.sprite_frag},background:{uniforms:{uvTransform:{value:new LA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:PA.background_vert,fragmentShader:PA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new LA}},vertexShader:PA.backgroundCube_vert,fragmentShader:PA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:PA.cube_vert,fragmentShader:PA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:PA.equirect_vert,fragmentShader:PA.equirect_frag},distanceRGBA:{uniforms:De([rA.common,rA.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:PA.distanceRGBA_vert,fragmentShader:PA.distanceRGBA_frag},shadow:{uniforms:De([rA.lights,rA.fog,{color:{value:new qA(0)},opacity:{value:1}}]),vertexShader:PA.shadow_vert,fragmentShader:PA.shadow_frag}};gt.physical={uniforms:De([gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new LA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new LA},clearcoatNormalScale:{value:new DA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new LA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new LA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new LA},sheen:{value:0},sheenColor:{value:new qA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new LA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new LA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new LA},transmissionSamplerSize:{value:new DA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new LA},attenuationDistance:{value:0},attenuationColor:{value:new qA(0)},specularColor:{value:new qA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new LA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new LA},anisotropyVector:{value:new DA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new LA}}]),vertexShader:PA.meshphysical_vert,fragmentShader:PA.meshphysical_frag};const Ur={r:0,b:0,g:0},fn=new Lt,Vm=new pe;function Km(n,A,e,t,i,r,s){const a=new qA(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function g(x){let C=x.isScene===!0?x.background:null;return C&&C.isTexture&&(C=(x.backgroundBlurriness>0?e:A).get(C)),C}function m(x){let C=!1;const y=g(x);y===null?f(a,o):y&&y.isColor&&(f(y,1),C=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,C){const y=g(C);y&&(y.isCubeTexture||y.mapping===Cs)?(l===void 0&&(l=new ut(new Ar(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:hi(gt.backgroundCube.uniforms),vertexShader:gt.backgroundCube.vertexShader,fragmentShader:gt.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,M,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),fn.copy(C.backgroundRotation),fn.x*=-1,fn.y*=-1,fn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fn.y*=-1,fn.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(fn)),l.material.toneMapped=zA.getTransfer(y.colorSpace)!==Ae,(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new Mn(2,2),new Dt({name:"BackgroundMaterial",uniforms:hi(gt.background.uniforms),vertexShader:gt.background.vertexShader,fragmentShader:gt.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=zA.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,C){x.getRGB(Ur,Ku(n)),t.buffers.color.setClear(Ur.r,Ur.g,Ur.b,C,s)}function E(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,C=1){a.set(x),o=C,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,f(a,o)},render:m,addToRenderList:p,dispose:E}}function km(n,A){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),t={},i=h(null);let r=i,s=!1;function a(_,T,G,L,k){let Y=!1;const V=u(L,G,T);r!==V&&(r=V,c(r.object)),Y=d(_,L,G,k),Y&&g(_,L,G,k),k!==null&&A.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,C(_,T,G,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,A.get(k).buffer))}function o(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function l(_){return n.deleteVertexArray(_)}function u(_,T,G){const L=G.wireframe===!0;let k=t[_.id];k===void 0&&(k={},t[_.id]=k);let Y=k[T.id];Y===void 0&&(Y={},k[T.id]=Y);let V=Y[L];return V===void 0&&(V=h(o()),Y[L]=V),V}function h(_){const T=[],G=[],L=[];for(let k=0;k<e;k++)T[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,T,G,L){const k=r.attributes,Y=T.attributes;let V=0;const X=G.getAttributes();for(const O in X)if(X[O].location>=0){const aA=k[O];let gA=Y[O];if(gA===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(gA=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(gA=_.instanceColor)),aA===void 0||aA.attribute!==gA||gA&&aA.data!==gA.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function g(_,T,G,L){const k={},Y=T.attributes;let V=0;const X=G.getAttributes();for(const O in X)if(X[O].location>=0){let aA=Y[O];aA===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(aA=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(aA=_.instanceColor));const gA={};gA.attribute=aA,aA&&aA.data&&(gA.data=aA.data),k[O]=gA,V++}r.attributes=k,r.attributesNum=V,r.index=L}function m(){const _=r.newAttributes;for(let T=0,G=_.length;T<G;T++)_[T]=0}function p(_){f(_,0)}function f(_,T){const G=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;G[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),k[_]!==T&&(n.vertexAttribDivisor(_,T),k[_]=T)}function E(){const _=r.newAttributes,T=r.enabledAttributes;for(let G=0,L=T.length;G<L;G++)T[G]!==_[G]&&(n.disableVertexAttribArray(G),T[G]=0)}function x(_,T,G,L,k,Y,V){V===!0?n.vertexAttribIPointer(_,T,G,k,Y):n.vertexAttribPointer(_,T,G,L,k,Y)}function C(_,T,G,L){m();const k=L.attributes,Y=G.getAttributes(),V=T.defaultAttributeValues;for(const X in Y){const O=Y[X];if(O.location>=0){let tA=k[X];if(tA===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(tA=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(tA=_.instanceColor)),tA!==void 0){const aA=tA.normalized,gA=tA.itemSize,QA=A.get(tA);if(QA===void 0)continue;const OA=QA.buffer,z=QA.type,eA=QA.bytesPerElement,pA=z===n.INT||z===n.UNSIGNED_INT||tA.gpuType===Xo;if(tA.isInterleavedBufferAttribute){const nA=tA.data,EA=nA.stride,WA=tA.offset;if(nA.isInstancedInterleavedBuffer){for(let yA=0;yA<O.locationSize;yA++)f(O.location+yA,nA.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nA.meshPerAttribute*nA.count)}else for(let yA=0;yA<O.locationSize;yA++)p(O.location+yA);n.bindBuffer(n.ARRAY_BUFFER,OA);for(let yA=0;yA<O.locationSize;yA++)x(O.location+yA,gA/O.locationSize,z,aA,EA*eA,(WA+gA/O.locationSize*yA)*eA,pA)}else{if(tA.isInstancedBufferAttribute){for(let nA=0;nA<O.locationSize;nA++)f(O.location+nA,tA.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tA.meshPerAttribute*tA.count)}else for(let nA=0;nA<O.locationSize;nA++)p(O.location+nA);n.bindBuffer(n.ARRAY_BUFFER,OA);for(let nA=0;nA<O.locationSize;nA++)x(O.location+nA,gA/O.locationSize,z,aA,gA*eA,gA/O.locationSize*nA*eA,pA)}}else if(V!==void 0){const aA=V[X];if(aA!==void 0)switch(aA.length){case 2:n.vertexAttrib2fv(O.location,aA);break;case 3:n.vertexAttrib3fv(O.location,aA);break;case 4:n.vertexAttrib4fv(O.location,aA);break;default:n.vertexAttrib1fv(O.location,aA)}}}}E()}function y(){Q();for(const _ in t){const T=t[_];for(const G in T){const L=T[G];for(const k in L)l(L[k].object),delete L[k];delete T[G]}delete t[_]}}function U(_){if(t[_.id]===void 0)return;const T=t[_.id];for(const G in T){const L=T[G];for(const k in L)l(L[k].object),delete L[k];delete T[G]}delete t[_.id]}function M(_){for(const T in t){const G=t[T];if(G[_.id]===void 0)continue;const L=G[_.id];for(const k in L)l(L[k].object),delete L[k];delete G[_.id]}}function Q(){v(),s=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:Q,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:U,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:p,disableUnusedAttributes:E}}function zm(n,A,e){let t;function i(c){t=c}function r(c,l){n.drawArrays(t,c,l),e.update(l,t,1)}function s(c,l,u){u!==0&&(n.drawArraysInstanced(t,c,l,u),e.update(l,t,u))}function a(c,l,u){if(u===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t,c,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,t,1)}function o(c,l,u,h){if(u===0)return;const d=A.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],l[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(t,c,0,l,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=l[m]*h[m];e.update(g,t,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function Wm(n,A,e,t){let i;function r(){if(i!==void 0)return i;if(A.has("EXT_texture_filter_anisotropic")===!0){const M=A.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){return!(M!==At&&t.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const Q=M===qi&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(M!==Rt&&t.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Tt&&!Q)}function o(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=o(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:y,maxSamples:U}}function Xm(n){const A=this;let e=null,t=0,i=!1,r=!1;const s=new Xt,a=new LA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||t!==0||i;return i=h,t=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=l(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!i||g===null||g.length===0||r&&!p)r?l(null):c();else{const E=r?0:t,x=E*4;let C=f.clippingState||null;o.value=C,C=l(g,h,x,d);for(let y=0;y!==x;++y)C[y]=e[y];f.clippingState=C,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function l(u,h,d,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=o.value,g!==!0||p===null){const f=d+m*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,C=d;x!==m;++x,C+=4)s.copy(u[x]).applyMatrix4(E,a),s.normal.toArray(p,C),p[C+3]=s.constant}o.value=p,o.needsUpdate=!0}return A.numPlanes=m,A.numIntersection=0,p}}function Ym(n){let A=new WeakMap;function e(s,a){return a===za?s.mapping=ci:a===Wa&&(s.mapping=li),s}function t(s){if(s&&s.isTexture){const a=s.mapping;if(a===za||a===Wa)if(A.has(s)){const o=A.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const c=new Kd(o.height);return c.fromEquirectangularTexture(n,s),A.set(s,c),s.addEventListener("dispose",i),e(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:t,dispose:r}}const ei=4,$c=[.125,.215,.35,.446,.526,.582],Bn=20,aa=new Ju,Al=new qA;let oa=null,ca=0,la=0,ua=!1;const gn=(1+Math.sqrt(5))/2,Kn=1/gn,el=[new D(-gn,Kn,0),new D(gn,Kn,0),new D(-Kn,0,gn),new D(Kn,0,gn),new D(0,gn,-Kn),new D(0,gn,Kn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Jm=new D;class tl{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100,r={}){const{size:s=256,position:a=Jm}=r;oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(A,t,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(oa,ca,la),this._renderer.xr.enabled=ua,A.scissorTest=!1,Sr(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===ci||A.mapping===li?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:qi,format:At,colorSpace:ui,depthBuffer:!1},i=nl(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(A,e,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(r)),this._blurMaterial=qm(r,A,e)}return i}_compileMaterial(A){const e=new ut(this._lodPlanes[0],A);this._renderer.compile(e,aa)}_sceneToCubeUV(A,e,t,i,r){const o=new ct(90,1,e,t),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Al),u.toneMapping=An,u.autoClear=!1;const g=new tc({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new ut(new Ar,g);let p=!1;const f=A.background;f?f.isColor&&(g.color.copy(f),A.background=null,p=!0):(g.color.copy(Al),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+l[E],r.y,r.z)):x===1?(o.up.set(0,0,c[E]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+l[E],r.z)):(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+l[E]));const C=this._cubeSize;Sr(i,x*C,E>2?C:0,C,C),u.setRenderTarget(i),p&&u.render(m,o),u.render(A,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,A.background=f}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===ci||A.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;Sr(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,aa)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=el[(i-r-1)%el.length];this._blur(A,r-1,r,s,a)}e.autoClear=t}_blur(A,e,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new ut(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bn-1),m=r/g,p=isFinite(r)?1+Math.floor(l*m):Bn;p>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const f=[];let E=0;for(let M=0;M<Bn;++M){const Q=M/m,v=Math.exp(-Q*Q/2);f.push(v),M===0?E+=v:M<p&&(E+=2*v)}for(let M=0;M<f.length;M++)f[M]=f[M]/E;h.envMap.value=A.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-t;const C=this._sizeLods[i],y=3*C*(i>x-ei?i-x+ei:0),U=4*(this._cubeSize-C);Sr(e,y,U,3*C,2*C),o.setRenderTarget(e),o.render(u,aa)}}function Zm(n){const A=[],e=[],t=[];let i=n;const r=n-ei+1+$c.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-ei?o=$c[s-n+ei-1]:s===0&&(o=0),t.push(o);const c=1/(a-2),l=-c,u=1+c,h=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,g=6,m=3,p=2,f=1,E=new Float32Array(m*g*d),x=new Float32Array(p*g*d),C=new Float32Array(f*g*d);for(let U=0;U<d;U++){const M=U%3*2/3-1,Q=U>2?0:-1,v=[M,Q,0,M+2/3,Q,0,M+2/3,Q+1,0,M,Q,0,M+2/3,Q+1,0,M,Q+1,0];E.set(v,m*g*U),x.set(h,p*g*U);const _=[U,U,U,U,U,U];C.set(_,f*g*U)}const y=new Pt;y.setAttribute("position",new mt(E,m)),y.setAttribute("uv",new mt(x,p)),y.setAttribute("faceIndex",new mt(C,f)),A.push(y),i>ei&&i--}return{lodPlanes:A,sizeLods:e,sigmas:t}}function nl(n,A,e){const t=new rn(n,A,e);return t.texture.mapping=Cs,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Sr(n,A,e,t,i){n.viewport.set(A,e,t,i),n.scissor.set(A,e,t,i)}function qm(n,A,e){const t=new Float32Array(Bn),i=new D(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function il(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function rl(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jm(n){let A=new WeakMap,e=null;function t(a){if(a&&a.isTexture){const o=a.mapping,c=o===za||o===Wa,l=o===ci||o===li;if(c||l){let u=A.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new tl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,A.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||l&&d&&i(d)?(e===null&&(e=new tl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,A.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let o=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&o++;return o===c}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=A.get(o);c!==void 0&&(A.delete(o),c.dispose())}function s(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function $m(n){const A={};function e(t){if(A[t]!==void 0)return A[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return A[t]=i,i}return{has:function(t){return e(t)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(t){const i=e(t);return i===null&&ri("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function AB(n,A,e,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&A.remove(h.index);for(const g in h.attributes)A.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const d=r.get(h);d&&(A.remove(d),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(u){const h=u.attributes;for(const d in h)A.update(h[d],n.ARRAY_BUFFER)}function c(u){const h=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const E=d.array;m=d.version;for(let x=0,C=E.length;x<C;x+=3){const y=E[x+0],U=E[x+1],M=E[x+2];h.push(y,U,U,M,M,y)}}else if(g!==void 0){const E=g.array;m=g.version;for(let x=0,C=E.length/3-1;x<C;x+=3){const y=x+0,U=x+1,M=x+2;h.push(y,U,U,M,M,y)}}else return;const p=new(Hu(h)?Vu:Gu)(h,1);p.version=m;const f=r.get(u);f&&A.remove(f),r.set(u,p)}function l(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:l}}function eB(n,A,e){let t;function i(h){t=h}let r,s;function a(h){r=h.type,s=h.bytesPerElement}function o(h,d){n.drawElements(t,d,r,h*s),e.update(d,t,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(t,d,r,h*s,g),e.update(d,t,g))}function l(h,d,g){if(g===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t,d,0,r,h,0,g);let p=0;for(let f=0;f<g;f++)p+=d[f];e.update(p,t,1)}function u(h,d,g,m){if(g===0)return;const p=A.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/s,d[f],m[f]);else{p.multiDrawElementsInstancedWEBGL(t,d,0,r,h,0,m,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*m[E];e.update(f,t,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function tB(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:t}}function nB(n,A,e){const t=new WeakMap,i=new he;function r(s,a,o){const c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let h=t.get(a);if(h===void 0||h.count!==u){let _=function(){Q.dispose(),t.delete(a),a.removeEventListener("dispose",_)};var d=_;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let C=0;g===!0&&(C=1),m===!0&&(C=2),p===!0&&(C=3);let y=a.attributes.position.count*C,U=1;y>A.maxTextureSize&&(U=Math.ceil(y/A.maxTextureSize),y=A.maxTextureSize);const M=new Float32Array(y*U*4*u),Q=new Pu(M,y,U,u);Q.type=Tt,Q.needsUpdate=!0;const v=C*4;for(let T=0;T<u;T++){const G=f[T],L=E[T],k=x[T],Y=y*U*4*T;for(let V=0;V<G.count;V++){const X=V*v;g===!0&&(i.fromBufferAttribute(G,V),M[Y+X+0]=i.x,M[Y+X+1]=i.y,M[Y+X+2]=i.z,M[Y+X+3]=0),m===!0&&(i.fromBufferAttribute(L,V),M[Y+X+4]=i.x,M[Y+X+5]=i.y,M[Y+X+6]=i.z,M[Y+X+7]=0),p===!0&&(i.fromBufferAttribute(k,V),M[Y+X+8]=i.x,M[Y+X+9]=i.y,M[Y+X+10]=i.z,M[Y+X+11]=k.itemSize===4?i.w:1)}}h={count:u,texture:Q,size:new DA(y,U)},t.set(a,h),a.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const m=a.morphTargetsRelative?1:1-g;o.getUniforms().setValue(n,"morphTargetBaseInfluence",m),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function iB(n,A,e,t){let i=new WeakMap;function r(o){const c=t.render.frame,l=o.geometry,u=A.get(o,l);if(i.get(u)!==c&&(A.update(u),i.set(u,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==c&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,c))),o.isSkinnedMesh){const h=o.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function s(){i=new WeakMap}function a(o){const c=o.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:s}}const qu=new Qe,sl=new Yu(1,1),ju=new Pu,$u=new Sd,Ah=new zu,al=[],ol=[],cl=new Float32Array(16),ll=new Float32Array(9),ul=new Float32Array(4);function pi(n,A,e){const t=n[0];if(t<=0||t>0)return n;const i=A*e;let r=al[i];if(r===void 0&&(r=new Float32Array(i),al[i]=r),A!==0){t.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=e,n[s].toArray(r,a)}return r}function ve(n,A){if(n.length!==A.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==A[e])return!1;return!0}function Ce(n,A){for(let e=0,t=A.length;e<t;e++)n[e]=A[e]}function xs(n,A){let e=ol[A];e===void 0&&(e=new Int32Array(A),ol[A]=e);for(let t=0;t!==A;++t)e[t]=n.allocateTextureUnit();return e}function rB(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function sB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ve(e,A))return;n.uniform2fv(this.addr,A),Ce(e,A)}}function aB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(ve(e,A))return;n.uniform3fv(this.addr,A),Ce(e,A)}}function oB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ve(e,A))return;n.uniform4fv(this.addr,A),Ce(e,A)}}function cB(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ve(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),Ce(e,A)}else{if(ve(e,t))return;ul.set(t),n.uniformMatrix2fv(this.addr,!1,ul),Ce(e,t)}}function lB(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ve(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),Ce(e,A)}else{if(ve(e,t))return;ll.set(t),n.uniformMatrix3fv(this.addr,!1,ll),Ce(e,t)}}function uB(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ve(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),Ce(e,A)}else{if(ve(e,t))return;cl.set(t),n.uniformMatrix4fv(this.addr,!1,cl),Ce(e,t)}}function hB(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function fB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ve(e,A))return;n.uniform2iv(this.addr,A),Ce(e,A)}}function dB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ve(e,A))return;n.uniform3iv(this.addr,A),Ce(e,A)}}function pB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ve(e,A))return;n.uniform4iv(this.addr,A),Ce(e,A)}}function gB(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function mB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ve(e,A))return;n.uniform2uiv(this.addr,A),Ce(e,A)}}function BB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ve(e,A))return;n.uniform3uiv(this.addr,A),Ce(e,A)}}function wB(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ve(e,A))return;n.uniform4uiv(this.addr,A),Ce(e,A)}}function _B(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(sl.compareFunction=Du,r=sl):r=qu,e.setTexture2D(A||r,i)}function vB(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(A||$u,i)}function CB(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(A||Ah,i)}function EB(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(A||ju,i)}function xB(n){switch(n){case 5126:return rB;case 35664:return sB;case 35665:return aB;case 35666:return oB;case 35674:return cB;case 35675:return lB;case 35676:return uB;case 5124:case 35670:return hB;case 35667:case 35671:return fB;case 35668:case 35672:return dB;case 35669:case 35673:return pB;case 5125:return gB;case 36294:return mB;case 36295:return BB;case 36296:return wB;case 35678:case 36198:case 36298:case 36306:case 35682:return _B;case 35679:case 36299:case 36307:return vB;case 35680:case 36300:case 36308:case 36293:return CB;case 36289:case 36303:case 36311:case 36292:return EB}}function UB(n,A){n.uniform1fv(this.addr,A)}function SB(n,A){const e=pi(A,this.size,2);n.uniform2fv(this.addr,e)}function MB(n,A){const e=pi(A,this.size,3);n.uniform3fv(this.addr,e)}function FB(n,A){const e=pi(A,this.size,4);n.uniform4fv(this.addr,e)}function yB(n,A){const e=pi(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TB(n,A){const e=pi(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bB(n,A){const e=pi(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function QB(n,A){n.uniform1iv(this.addr,A)}function IB(n,A){n.uniform2iv(this.addr,A)}function RB(n,A){n.uniform3iv(this.addr,A)}function LB(n,A){n.uniform4iv(this.addr,A)}function DB(n,A){n.uniform1uiv(this.addr,A)}function HB(n,A){n.uniform2uiv(this.addr,A)}function PB(n,A){n.uniform3uiv(this.addr,A)}function NB(n,A){n.uniform4uiv(this.addr,A)}function OB(n,A,e){const t=this.cache,i=A.length,r=xs(e,i);ve(t,r)||(n.uniform1iv(this.addr,r),Ce(t,r));for(let s=0;s!==i;++s)e.setTexture2D(A[s]||qu,r[s])}function GB(n,A,e){const t=this.cache,i=A.length,r=xs(e,i);ve(t,r)||(n.uniform1iv(this.addr,r),Ce(t,r));for(let s=0;s!==i;++s)e.setTexture3D(A[s]||$u,r[s])}function VB(n,A,e){const t=this.cache,i=A.length,r=xs(e,i);ve(t,r)||(n.uniform1iv(this.addr,r),Ce(t,r));for(let s=0;s!==i;++s)e.setTextureCube(A[s]||Ah,r[s])}function KB(n,A,e){const t=this.cache,i=A.length,r=xs(e,i);ve(t,r)||(n.uniform1iv(this.addr,r),Ce(t,r));for(let s=0;s!==i;++s)e.setTexture2DArray(A[s]||ju,r[s])}function kB(n){switch(n){case 5126:return UB;case 35664:return SB;case 35665:return MB;case 35666:return FB;case 35674:return yB;case 35675:return TB;case 35676:return bB;case 5124:case 35670:return QB;case 35667:case 35671:return IB;case 35668:case 35672:return RB;case 35669:case 35673:return LB;case 5125:return DB;case 36294:return HB;case 36295:return PB;case 36296:return NB;case 35678:case 36198:case 36298:case 36306:case 35682:return OB;case 35679:case 36299:case 36307:return GB;case 35680:case 36300:case 36308:case 36293:return VB;case 36289:case 36303:case 36311:case 36292:return KB}}class zB{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.type=e.type,this.setValue=xB(e.type)}}class WB{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kB(e.type)}}class XB{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(A,e[a.id],t)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function hl(n,A){n.seq.push(A),n.map[A.id]=A}function YB(n,A,e){const t=n.name,i=t.length;for(ha.lastIndex=0;;){const r=ha.exec(t),s=ha.lastIndex;let a=r[1];const o=r[2]==="]",c=r[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===i){hl(e,c===void 0?new zB(a,n,A):new WB(a,n,A));break}else{let u=e.map[a];u===void 0&&(u=new XB(a),hl(e,u)),e=u}}}class ns{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);YB(r,s,this)}}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const s=A[i];s.id in e&&t.push(s)}return t}}function fl(n,A,e){const t=n.createShader(A);return n.shaderSource(t,e),n.compileShader(t),t}const JB=37297;let ZB=0;function qB(n,A){const e=n.split(`
`),t=[],i=Math.max(A-6,0),r=Math.min(A+6,e.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===A?">":" "} ${a}: ${e[s]}`)}return t.join(`
`)}const dl=new LA;function jB(n){zA._getMatrix(dl,zA.workingColorSpace,n);const A=`mat3( ${dl.elements.map(e=>e.toFixed(4))} )`;switch(zA.getTransfer(n)){case os:return[A,"LinearTransferOETF"];case Ae:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[A,"LinearTransferOETF"]}}function pl(n,A,e){const t=n.getShaderParameter(A,n.COMPILE_STATUS),i=n.getShaderInfoLog(A).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+qB(n.getShaderSource(A),s)}else return i}function $B(n,A){const e=jB(A);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function A0(n,A){let e;switch(A){case Lf:e="Linear";break;case Df:e="Reinhard";break;case Hf:e="Cineon";break;case Pf:e="ACESFilmic";break;case Of:e="AgX";break;case Gf:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new D;function e0(){zA.getLuminanceCoefficients(Mr);const n=Mr.x.toFixed(4),A=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${A}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mi).join(`
`)}function n0(n){const A=[];for(const e in n){const t=n[e];t!==!1&&A.push("#define "+e+" "+t)}return A.join(`
`)}function i0(n,A){const e={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){const r=n.getActiveAttrib(A,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(A,s),locationSize:a}}return e}function Mi(n){return n!==""}function gl(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ml(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(r0,a0)}const s0=new Map;function a0(n,A){let e=PA[A];if(e===void 0){const t=s0.get(A);if(t!==void 0)e=PA[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,t);else throw new Error("Can not resolve #include <"+A+">")}return Co(e)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(n){return n.replace(o0,c0)}function c0(n,A,e,t){let i="";for(let r=parseInt(A);r<parseInt(e);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wl(n){let A=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function l0(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uu?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===df?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ft&&(A="SHADOWMAP_TYPE_VSM"),A}function u0(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ci:case li:A="ENVMAP_TYPE_CUBE";break;case Cs:A="ENVMAP_TYPE_CUBE_UV";break}return A}function h0(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case li:A="ENVMAP_MODE_REFRACTION";break}return A}function f0(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Su:A="ENVMAP_BLENDING_MULTIPLY";break;case If:A="ENVMAP_BLENDING_MIX";break;case Rf:A="ENVMAP_BLENDING_ADD";break}return A}function d0(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function p0(n,A,e,t){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=l0(e),c=u0(e),l=h0(e),u=f0(e),h=d0(e),d=t0(e),g=n0(r),m=i.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mi).join(`
`),f.length>0&&(f+=`
`)):(p=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),f=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?PA.tonemapping_pars_fragment:"",e.toneMapping!==An?A0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",PA.colorspace_pars_fragment,$B("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mi).join(`
`)),s=Co(s),s=gl(s,e),s=ml(s,e),a=Co(a),a=gl(a,e),a=ml(a,e),s=Bl(s),a=Bl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+p+s,C=E+f+a,y=fl(i,i.VERTEX_SHADER,x),U=fl(i,i.FRAGMENT_SHADER,C);i.attachShader(m,y),i.attachShader(m,U),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(T){if(n.debug.checkShaderErrors){const G=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(U).trim();let Y=!0,V=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,y,U);else{const X=pl(i,y,"vertex"),O=pl(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+X+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||k==="")&&(V=!1);V&&(T.diagnostics={runnable:Y,programLog:G,vertexShader:{log:L,prefix:p},fragmentShader:{log:k,prefix:f}})}i.deleteShader(y),i.deleteShader(U),Q=new ns(i,m),v=i0(i,m)}let Q;this.getUniforms=function(){return Q===void 0&&M(this),Q};let v;this.getAttributes=function(){return v===void 0&&M(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(m,JB)),_},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZB++,this.cacheKey=A,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=U,this}let g0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new B0(A),e.set(A,t)),t}}class B0{constructor(A){this.id=g0++,this.code=A,this.usedTimes=0}}function w0(n,A,e,t,i,r,s){const a=new Nu,o=new m0,c=new Set,l=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,_,T,G,L){const k=G.fog,Y=L.geometry,V=v.isMeshStandardMaterial?G.environment:null,X=(v.isMeshStandardMaterial?e:A).get(v.envMap||V),O=X&&X.mapping===Cs?X.image.height:null,tA=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const aA=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gA=aA!==void 0?aA.length:0;let QA=0;Y.morphAttributes.position!==void 0&&(QA=1),Y.morphAttributes.normal!==void 0&&(QA=2),Y.morphAttributes.color!==void 0&&(QA=3);let OA,z,eA,pA;if(tA){const jA=gt[tA];OA=jA.vertexShader,z=jA.fragmentShader}else OA=v.vertexShader,z=v.fragmentShader,o.update(v),eA=o.getVertexShaderID(v),pA=o.getFragmentShaderID(v);const nA=n.getRenderTarget(),EA=n.state.buffers.depth.getReversed(),WA=L.isInstancedMesh===!0,yA=L.isBatchedMesh===!0,oe=!!v.map,ce=!!v.matcap,XA=!!X,F=!!v.aoMap,Ie=!!v.lightMap,YA=!!v.bumpMap,ne=!!v.normalMap,_A=!!v.displacementMap,KA=!!v.emissiveMap,UA=!!v.metalnessMap,HA=!!v.roughnessMap,Be=v.anisotropy>0,S=v.clearcoat>0,B=v.dispersion>0,H=v.iridescence>0,W=v.sheen>0,Z=v.transmission>0,K=Be&&!!v.anisotropyMap,vA=S&&!!v.clearcoatMap,sA=S&&!!v.clearcoatNormalMap,wA=S&&!!v.clearcoatRoughnessMap,CA=H&&!!v.iridescenceMap,q=H&&!!v.iridescenceThicknessMap,hA=W&&!!v.sheenColorMap,FA=W&&!!v.sheenRoughnessMap,MA=!!v.specularMap,iA=!!v.specularColorMap,IA=!!v.specularIntensityMap,b=Z&&!!v.transmissionMap,oA=Z&&!!v.thicknessMap,j=!!v.gradientMap,dA=!!v.alphaMap,$=v.alphaTest>0,J=!!v.alphaHash,mA=!!v.extensions;let RA=An;v.toneMapped&&(nA===null||nA.isXRRenderTarget===!0)&&(RA=n.toneMapping);const re={shaderID:tA,shaderType:v.type,shaderName:v.name,vertexShader:OA,fragmentShader:z,defines:v.defines,customVertexShaderID:eA,customFragmentShaderID:pA,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:yA,batchingColor:yA&&L._colorsTexture!==null,instancing:WA,instancingColor:WA&&L.instanceColor!==null,instancingMorph:WA&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nA===null?n.outputColorSpace:nA.isXRRenderTarget===!0?nA.texture.colorSpace:ui,alphaToCoverage:!!v.alphaToCoverage,map:oe,matcap:ce,envMap:XA,envMapMode:XA&&X.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:Ie,bumpMap:YA,normalMap:ne,displacementMap:h&&_A,emissiveMap:KA,normalMapObjectSpace:ne&&v.normalMapType===Wf,normalMapTangentSpace:ne&&v.normalMapType===zf,metalnessMap:UA,roughnessMap:HA,anisotropy:Be,anisotropyMap:K,clearcoat:S,clearcoatMap:vA,clearcoatNormalMap:sA,clearcoatRoughnessMap:wA,dispersion:B,iridescence:H,iridescenceMap:CA,iridescenceThicknessMap:q,sheen:W,sheenColorMap:hA,sheenRoughnessMap:FA,specularMap:MA,specularColorMap:iA,specularIntensityMap:IA,transmission:Z,transmissionMap:b,thicknessMap:oA,gradientMap:j,opaque:v.transparent===!1&&v.blending===ii&&v.alphaToCoverage===!1,alphaMap:dA,alphaTest:$,alphaHash:J,combine:v.combine,mapUv:oe&&m(v.map.channel),aoMapUv:F&&m(v.aoMap.channel),lightMapUv:Ie&&m(v.lightMap.channel),bumpMapUv:YA&&m(v.bumpMap.channel),normalMapUv:ne&&m(v.normalMap.channel),displacementMapUv:_A&&m(v.displacementMap.channel),emissiveMapUv:KA&&m(v.emissiveMap.channel),metalnessMapUv:UA&&m(v.metalnessMap.channel),roughnessMapUv:HA&&m(v.roughnessMap.channel),anisotropyMapUv:K&&m(v.anisotropyMap.channel),clearcoatMapUv:vA&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:sA&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wA&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:CA&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:hA&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:FA&&m(v.sheenRoughnessMap.channel),specularMapUv:MA&&m(v.specularMap.channel),specularColorMapUv:iA&&m(v.specularColorMap.channel),specularIntensityMapUv:IA&&m(v.specularIntensityMap.channel),transmissionMapUv:b&&m(v.transmissionMap.channel),thicknessMapUv:oA&&m(v.thicknessMap.channel),alphaMapUv:dA&&m(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ne||Be),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Y.attributes.uv&&(oe||dA),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:EA,skinning:L.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gA,morphTextureStride:QA,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:RA,decodeVideoTexture:oe&&v.map.isVideoTexture===!0&&zA.getTransfer(v.map.colorSpace)===Ae,decodeVideoTextureEmissive:KA&&v.emissiveMap.isVideoTexture===!0&&zA.getTransfer(v.emissiveMap.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yt,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mA&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mA&&v.extensions.multiDraw===!0||yA)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function f(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)_.push(T),_.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(E(_,v),x(_,v),_.push(n.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function E(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function x(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function C(v){const _=g[v.type];let T;if(_){const G=gt[_];T=Nd.clone(G.uniforms)}else T=v.uniforms;return T}function y(v,_){let T;for(let G=0,L=l.length;G<L;G++){const k=l[G];if(k.cacheKey===_){T=k,++T.usedTimes;break}}return T===void 0&&(T=new p0(n,_,v,r),l.push(T)),T}function U(v){if(--v.usedTimes===0){const _=l.indexOf(v);l[_]=l[l.length-1],l.pop(),v.destroy()}}function M(v){o.remove(v)}function Q(){o.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:y,releaseProgram:U,releaseShaderCache:M,programs:l,dispose:Q}}function _0(){let n=new WeakMap;function A(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{has:A,get:e,remove:t,update:i,dispose:r}}function v0(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function _l(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function vl(){const n=[];let A=0;const e=[],t=[],i=[];function r(){A=0,e.length=0,t.length=0,i.length=0}function s(u,h,d,g,m,p){let f=n[A];return f===void 0?(f={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},n[A]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=p),A++,f}function a(u,h,d,g,m,p){const f=s(u,h,d,g,m,p);d.transmission>0?t.push(f):d.transparent===!0?i.push(f):e.push(f)}function o(u,h,d,g,m,p){const f=s(u,h,d,g,m,p);d.transmission>0?t.unshift(f):d.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,h){e.length>1&&e.sort(u||v0),t.length>1&&t.sort(h||_l),i.length>1&&i.sort(h||_l)}function l(){for(let u=A,h=n.length;u<h;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:l,sort:c}}function C0(){let n=new WeakMap;function A(t,i){const r=n.get(t);let s;return r===void 0?(s=new vl,n.set(t,[s])):i>=r.length?(s=new vl,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:A,dispose:e}}function E0(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new D,color:new qA};break;case"SpotLight":e={position:new D,direction:new D,color:new qA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qA,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qA,groundColor:new qA};break;case"RectAreaLight":e={color:new qA,position:new D,halfWidth:new D,halfHeight:new D};break}return n[A.id]=e,e}}}function x0(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let U0=0;function S0(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function M0(n){const A=new E0,e=x0(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)t.probe.push(new D);const i=new D,r=new pe,s=new pe;function a(c){let l=0,u=0,h=0;for(let v=0;v<9;v++)t.probe[v].set(0,0,0);let d=0,g=0,m=0,p=0,f=0,E=0,x=0,C=0,y=0,U=0,M=0;c.sort(S0);for(let v=0,_=c.length;v<_;v++){const T=c[v],G=T.color,L=T.intensity,k=T.distance,Y=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)l+=G.r*L,u+=G.g*L,h+=G.b*L;else if(T.isLightProbe){for(let V=0;V<9;V++)t.probe[V].addScaledVector(T.sh.coefficients[V],L);M++}else if(T.isDirectionalLight){const V=A.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,t.directionalShadow[d]=O,t.directionalShadowMap[d]=Y,t.directionalShadowMatrix[d]=T.shadow.matrix,E++}t.directional[d]=V,d++}else if(T.isSpotLight){const V=A.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(G).multiplyScalar(L),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,t.spot[m]=V;const X=T.shadow;if(T.map&&(t.spotLightMap[y]=T.map,y++,X.updateMatrices(T),T.castShadow&&U++),t.spotLightMatrix[m]=X.matrix,T.castShadow){const O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,t.spotShadow[m]=O,t.spotShadowMap[m]=Y,C++}m++}else if(T.isRectAreaLight){const V=A.get(T);V.color.copy(G).multiplyScalar(L),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),t.rectArea[p]=V,p++}else if(T.isPointLight){const V=A.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const X=T.shadow,O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,t.pointShadow[g]=O,t.pointShadowMap[g]=Y,t.pointShadowMatrix[g]=T.shadow.matrix,x++}t.point[g]=V,g++}else if(T.isHemisphereLight){const V=A.get(T);V.skyColor.copy(T.color).multiplyScalar(L),V.groundColor.copy(T.groundColor).multiplyScalar(L),t.hemi[f]=V,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=rA.LTC_FLOAT_1,t.rectAreaLTC2=rA.LTC_FLOAT_2):(t.rectAreaLTC1=rA.LTC_HALF_1,t.rectAreaLTC2=rA.LTC_HALF_2)),t.ambient[0]=l,t.ambient[1]=u,t.ambient[2]=h;const Q=t.hash;(Q.directionalLength!==d||Q.pointLength!==g||Q.spotLength!==m||Q.rectAreaLength!==p||Q.hemiLength!==f||Q.numDirectionalShadows!==E||Q.numPointShadows!==x||Q.numSpotShadows!==C||Q.numSpotMaps!==y||Q.numLightProbes!==M)&&(t.directional.length=d,t.spot.length=m,t.rectArea.length=p,t.point.length=g,t.hemi.length=f,t.directionalShadow.length=E,t.directionalShadowMap.length=E,t.pointShadow.length=x,t.pointShadowMap.length=x,t.spotShadow.length=C,t.spotShadowMap.length=C,t.directionalShadowMatrix.length=E,t.pointShadowMatrix.length=x,t.spotLightMatrix.length=C+y-U,t.spotLightMap.length=y,t.numSpotLightShadowsWithMaps=U,t.numLightProbes=M,Q.directionalLength=d,Q.pointLength=g,Q.spotLength=m,Q.rectAreaLength=p,Q.hemiLength=f,Q.numDirectionalShadows=E,Q.numPointShadows=x,Q.numSpotShadows=C,Q.numSpotMaps=y,Q.numLightProbes=M,t.version=U0++)}function o(c,l){let u=0,h=0,d=0,g=0,m=0;const p=l.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const x=c[f];if(x.isDirectionalLight){const C=t.directional[u];C.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),u++}else if(x.isSpotLight){const C=t.spot[d];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const C=t.rectArea[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const C=t.point[h];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const C=t.hemi[m];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:a,setupView:o,state:t}}function Cl(n){const A=new M0(n),e=[],t=[];function i(l){c.camera=l,e.length=0,t.length=0}function r(l){e.push(l)}function s(l){t.push(l)}function a(){A.setup(e)}function o(l){A.setupView(e,l)}const c={lightsArray:e,shadowsArray:t,camera:null,lights:A,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function F0(n){let A=new WeakMap;function e(i,r=0){const s=A.get(i);let a;return s===void 0?(a=new Cl(n),A.set(i,[a])):r>=s.length?(a=new Cl(n),s.push(a)):a=s[r],a}function t(){A=new WeakMap}return{get:e,dispose:t}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function b0(n,A,e){let t=new Wu;const i=new DA,r=new DA,s=new he,a=new qd({depthPacking:kf}),o=new jd,c={},l=e.maxTextureSize,u={[nn]:Ge,[Ge]:nn,[yt]:yt},h=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new DA},radius:{value:4}},vertexShader:y0,fragmentShader:T0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ut(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let f=this.type;this.render=function(U,M,Q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const v=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending($t),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=f!==Ft&&this.type===Ft,k=f===Ft&&this.type!==Ft;for(let Y=0,V=U.length;Y<V;Y++){const X=U[Y],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const tA=O.getFrameExtents();if(i.multiply(tA),r.copy(O.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/tA.x),i.x=r.x*tA.x,O.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/tA.y),i.y=r.y*tA.y,O.mapSize.y=r.y)),O.map===null||L===!0||k===!0){const gA=this.type!==Ft?{minFilter:ht,magFilter:ht}:{};O.map!==null&&O.map.dispose(),O.map=new rn(i.x,i.y,gA),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const aA=O.getViewportCount();for(let gA=0;gA<aA;gA++){const QA=O.getViewport(gA);s.set(r.x*QA.x,r.y*QA.y,r.x*QA.z,r.y*QA.w),G.viewport(s),O.updateMatrices(X,gA),t=O.getFrustum(),C(M,Q,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===Ft&&E(O,Q),O.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(v,_,T)};function E(U,M){const Q=A.update(m);h.defines.VSM_SAMPLES!==U.blurSamples&&(h.defines.VSM_SAMPLES=U.blurSamples,d.defines.VSM_SAMPLES=U.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new rn(i.x,i.y)),h.uniforms.shadow_pass.value=U.map.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(M,null,Q,h,m,null),d.uniforms.shadow_pass.value=U.mapPass.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(M,null,Q,d,m,null)}function x(U,M,Q,v){let _=null;const T=Q.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(T!==void 0)_=T;else if(_=Q.isPointLight===!0?o:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const G=_.uuid,L=M.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let Y=k[L];Y===void 0&&(Y=_.clone(),k[L]=Y,M.addEventListener("dispose",y)),_=Y}if(_.visible=M.visible,_.wireframe=M.wireframe,v===Ft?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:u[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,Q.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=n.properties.get(_);G.light=Q}return _}function C(U,M,Q,v,_){if(U.visible===!1)return;if(U.layers.test(M.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&_===Ft)&&(!U.frustumCulled||t.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld);const L=A.update(U),k=U.material;if(Array.isArray(k)){const Y=L.groups;for(let V=0,X=Y.length;V<X;V++){const O=Y[V],tA=k[O.materialIndex];if(tA&&tA.visible){const aA=x(U,tA,v,_);U.onBeforeShadow(n,U,M,Q,L,aA,O),n.renderBufferDirect(Q,null,L,aA,U,O),U.onAfterShadow(n,U,M,Q,L,aA,O)}}}else if(k.visible){const Y=x(U,k,v,_);U.onBeforeShadow(n,U,M,Q,L,Y,null),n.renderBufferDirect(Q,null,L,Y,U,null),U.onAfterShadow(n,U,M,Q,L,Y,null)}}const G=U.children;for(let L=0,k=G.length;L<k;L++)C(G[L],M,Q,v,_)}function y(U){U.target.removeEventListener("dispose",y);for(const Q in c){const v=c[Q],_=U.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const Q0={[Pa]:Na,[Oa]:Ka,[Ga]:ka,[oi]:Va,[Na]:Pa,[Ka]:Oa,[ka]:Ga,[Va]:oi};function I0(n,A){function e(){let b=!1;const oA=new he;let j=null;const dA=new he(0,0,0,0);return{setMask:function($){j!==$&&!b&&(n.colorMask($,$,$,$),j=$)},setLocked:function($){b=$},setClear:function($,J,mA,RA,re){re===!0&&($*=RA,J*=RA,mA*=RA),oA.set($,J,mA,RA),dA.equals(oA)===!1&&(n.clearColor($,J,mA,RA),dA.copy(oA))},reset:function(){b=!1,j=null,dA.set(-1,0,0,0)}}}function t(){let b=!1,oA=!1,j=null,dA=null,$=null;return{setReversed:function(J){if(oA!==J){const mA=A.get("EXT_clip_control");J?mA.clipControlEXT(mA.LOWER_LEFT_EXT,mA.ZERO_TO_ONE_EXT):mA.clipControlEXT(mA.LOWER_LEFT_EXT,mA.NEGATIVE_ONE_TO_ONE_EXT),oA=J;const RA=$;$=null,this.setClear(RA)}},getReversed:function(){return oA},setTest:function(J){J?nA(n.DEPTH_TEST):EA(n.DEPTH_TEST)},setMask:function(J){j!==J&&!b&&(n.depthMask(J),j=J)},setFunc:function(J){if(oA&&(J=Q0[J]),dA!==J){switch(J){case Pa:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case oi:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dA=J}},setLocked:function(J){b=J},setClear:function(J){$!==J&&(oA&&(J=1-J),n.clearDepth(J),$=J)},reset:function(){b=!1,j=null,dA=null,$=null,oA=!1}}}function i(){let b=!1,oA=null,j=null,dA=null,$=null,J=null,mA=null,RA=null,re=null;return{setTest:function(jA){b||(jA?nA(n.STENCIL_TEST):EA(n.STENCIL_TEST))},setMask:function(jA){oA!==jA&&!b&&(n.stencilMask(jA),oA=jA)},setFunc:function(jA,nt,_t){(j!==jA||dA!==nt||$!==_t)&&(n.stencilFunc(jA,nt,_t),j=jA,dA=nt,$=_t)},setOp:function(jA,nt,_t){(J!==jA||mA!==nt||RA!==_t)&&(n.stencilOp(jA,nt,_t),J=jA,mA=nt,RA=_t)},setLocked:function(jA){b=jA},setClear:function(jA){re!==jA&&(n.clearStencil(jA),re=jA)},reset:function(){b=!1,oA=null,j=null,dA=null,$=null,J=null,mA=null,RA=null,re=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],g=null,m=!1,p=null,f=null,E=null,x=null,C=null,y=null,U=null,M=new qA(0,0,0),Q=0,v=!1,_=null,T=null,G=null,L=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=X>=2);let tA=null,aA={};const gA=n.getParameter(n.SCISSOR_BOX),QA=n.getParameter(n.VIEWPORT),OA=new he().fromArray(gA),z=new he().fromArray(QA);function eA(b,oA,j,dA){const $=new Uint8Array(4),J=n.createTexture();n.bindTexture(b,J),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mA=0;mA<j;mA++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(oA,0,n.RGBA,1,1,dA,0,n.RGBA,n.UNSIGNED_BYTE,$):n.texImage2D(oA+mA,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$);return J}const pA={};pA[n.TEXTURE_2D]=eA(n.TEXTURE_2D,n.TEXTURE_2D,1),pA[n.TEXTURE_CUBE_MAP]=eA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pA[n.TEXTURE_2D_ARRAY]=eA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pA[n.TEXTURE_3D]=eA(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),nA(n.DEPTH_TEST),s.setFunc(oi),YA(!1),ne(_c),nA(n.CULL_FACE),F($t);function nA(b){l[b]!==!0&&(n.enable(b),l[b]=!0)}function EA(b){l[b]!==!1&&(n.disable(b),l[b]=!1)}function WA(b,oA){return u[b]!==oA?(n.bindFramebuffer(b,oA),u[b]=oA,b===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oA),b===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oA),!0):!1}function yA(b,oA){let j=d,dA=!1;if(b){j=h.get(oA),j===void 0&&(j=[],h.set(oA,j));const $=b.textures;if(j.length!==$.length||j[0]!==n.COLOR_ATTACHMENT0){for(let J=0,mA=$.length;J<mA;J++)j[J]=n.COLOR_ATTACHMENT0+J;j.length=$.length,dA=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,dA=!0);dA&&n.drawBuffers(j)}function oe(b){return g!==b?(n.useProgram(b),g=b,!0):!1}const ce={[mn]:n.FUNC_ADD,[gf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};ce[Bf]=n.MIN,ce[wf]=n.MAX;const XA={[_f]:n.ZERO,[vf]:n.ONE,[Cf]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA,[yf]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[bf]:n.CONSTANT_ALPHA,[Qf]:n.ONE_MINUS_CONSTANT_ALPHA};function F(b,oA,j,dA,$,J,mA,RA,re,jA){if(b===$t){m===!0&&(EA(n.BLEND),m=!1);return}if(m===!1&&(nA(n.BLEND),m=!0),b!==pf){if(b!==p||jA!==v){if((f!==mn||C!==mn)&&(n.blendEquation(n.FUNC_ADD),f=mn,C=mn),jA)switch(b){case ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}E=null,x=null,y=null,U=null,M.set(0,0,0),Q=0,p=b,v=jA}return}$=$||oA,J=J||j,mA=mA||dA,(oA!==f||$!==C)&&(n.blendEquationSeparate(ce[oA],ce[$]),f=oA,C=$),(j!==E||dA!==x||J!==y||mA!==U)&&(n.blendFuncSeparate(XA[j],XA[dA],XA[J],XA[mA]),E=j,x=dA,y=J,U=mA),(RA.equals(M)===!1||re!==Q)&&(n.blendColor(RA.r,RA.g,RA.b,re),M.copy(RA),Q=re),p=b,v=!1}function Ie(b,oA){b.side===yt?EA(n.CULL_FACE):nA(n.CULL_FACE);let j=b.side===Ge;oA&&(j=!j),YA(j),b.blending===ii&&b.transparent===!1?F($t):F(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);const dA=b.stencilWrite;a.setTest(dA),dA&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),KA(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?nA(n.SAMPLE_ALPHA_TO_COVERAGE):EA(n.SAMPLE_ALPHA_TO_COVERAGE)}function YA(b){_!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),_=b)}function ne(b){b!==hf?(nA(n.CULL_FACE),b!==T&&(b===_c?n.cullFace(n.BACK):b===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):EA(n.CULL_FACE),T=b}function _A(b){b!==G&&(V&&n.lineWidth(b),G=b)}function KA(b,oA,j){b?(nA(n.POLYGON_OFFSET_FILL),(L!==oA||k!==j)&&(n.polygonOffset(oA,j),L=oA,k=j)):EA(n.POLYGON_OFFSET_FILL)}function UA(b){b?nA(n.SCISSOR_TEST):EA(n.SCISSOR_TEST)}function HA(b){b===void 0&&(b=n.TEXTURE0+Y-1),tA!==b&&(n.activeTexture(b),tA=b)}function Be(b,oA,j){j===void 0&&(tA===null?j=n.TEXTURE0+Y-1:j=tA);let dA=aA[j];dA===void 0&&(dA={type:void 0,texture:void 0},aA[j]=dA),(dA.type!==b||dA.texture!==oA)&&(tA!==j&&(n.activeTexture(j),tA=j),n.bindTexture(b,oA||pA[b]),dA.type=b,dA.texture=oA)}function S(){const b=aA[tA];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function B(){try{n.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function W(){try{n.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{n.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function vA(){try{n.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function sA(){try{n.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function wA(){try{n.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function CA(){try{n.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function q(){try{n.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function hA(b){OA.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),OA.copy(b))}function FA(b){z.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),z.copy(b))}function MA(b,oA){let j=c.get(oA);j===void 0&&(j=new WeakMap,c.set(oA,j));let dA=j.get(b);dA===void 0&&(dA=n.getUniformBlockIndex(oA,b.name),j.set(b,dA))}function iA(b,oA){const dA=c.get(oA).get(b);o.get(oA)!==dA&&(n.uniformBlockBinding(oA,dA,b.__bindingPointIndex),o.set(oA,dA))}function IA(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},tA=null,aA={},u={},h=new WeakMap,d=[],g=null,m=!1,p=null,f=null,E=null,x=null,C=null,y=null,U=null,M=new qA(0,0,0),Q=0,v=!1,_=null,T=null,G=null,L=null,k=null,OA.set(0,0,n.canvas.width,n.canvas.height),z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:nA,disable:EA,bindFramebuffer:WA,drawBuffers:yA,useProgram:oe,setBlending:F,setMaterial:Ie,setFlipSided:YA,setCullFace:ne,setLineWidth:_A,setPolygonOffset:KA,setScissorTest:UA,activeTexture:HA,bindTexture:Be,unbindTexture:S,compressedTexImage2D:B,compressedTexImage3D:H,texImage2D:CA,texImage3D:q,updateUBOMapping:MA,uniformBlockBinding:iA,texStorage2D:sA,texStorage3D:wA,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:vA,scissor:hA,viewport:FA,reset:IA}}function R0(n,A,e,t,i,r,s){const a=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new DA,l=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,B){return d?new OffscreenCanvas(S,B):Xi("canvas")}function m(S,B,H){let W=1;const Z=Be(S);if((Z.width>H||Z.height>H)&&(W=H/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(W*Z.width),vA=Math.floor(W*Z.height);u===void 0&&(u=g(K,vA));const sA=B?g(K,vA):u;return sA.width=K,sA.height=vA,sA.getContext("2d").drawImage(S,0,0,K,vA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+vA+")."),sA}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function p(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(S,B,H,W,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=B;if(B===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),B===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),B===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),B===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),B===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),B===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),B===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.RGBA){const vA=Z?os:zA.getTransfer(W);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=vA===Ae?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&A.get("EXT_color_buffer_float"),K}function C(S,B){let H;return S?B===null||B===Un||B===Ki?H=n.DEPTH24_STENCIL8:B===Tt?H=n.DEPTH32F_STENCIL8:B===Vi&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Un||B===Ki?H=n.DEPTH_COMPONENT24:B===Tt?H=n.DEPTH_COMPONENT32F:B===Vi&&(H=n.DEPTH_COMPONENT16),H}function y(S,B){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ht&&S.minFilter!==$e?Math.log2(Math.max(B.width,B.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?B.mipmaps.length:1}function U(S){const B=S.target;B.removeEventListener("dispose",U),Q(B),B.isVideoTexture&&l.delete(B)}function M(S){const B=S.target;B.removeEventListener("dispose",M),_(B)}function Q(S){const B=t.get(S);if(B.__webglInit===void 0)return;const H=S.source,W=h.get(H);if(W){const Z=W[B.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(S),Object.keys(W).length===0&&h.delete(H)}t.remove(S)}function v(S){const B=t.get(S);n.deleteTexture(B.__webglTexture);const H=S.source,W=h.get(H);delete W[B.__cacheKey],s.memory.textures--}function _(S){const B=t.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),t.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(B.__webglFramebuffer[W]))for(let Z=0;Z<B.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(B.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(B.__webglFramebuffer[W]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[W])}else{if(Array.isArray(B.__webglFramebuffer))for(let W=0;W<B.__webglFramebuffer.length;W++)n.deleteFramebuffer(B.__webglFramebuffer[W]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let W=0;W<B.__webglColorRenderbuffer.length;W++)B.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[W]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const H=S.textures;for(let W=0,Z=H.length;W<Z;W++){const K=t.get(H[W]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),s.memory.textures--),t.remove(H[W])}t.remove(S)}let T=0;function G(){T=0}function L(){const S=T;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),T+=1,S}function k(S){const B=[];return B.push(S.wrapS),B.push(S.wrapT),B.push(S.wrapR||0),B.push(S.magFilter),B.push(S.minFilter),B.push(S.anisotropy),B.push(S.internalFormat),B.push(S.format),B.push(S.type),B.push(S.generateMipmaps),B.push(S.premultiplyAlpha),B.push(S.flipY),B.push(S.unpackAlignment),B.push(S.colorSpace),B.join()}function Y(S,B){const H=t.get(S);if(S.isVideoTexture&&UA(S),S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){const W=S.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pA(H,S,B);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+B)}function V(S,B){const H=t.get(S);if(S.version>0&&H.__version!==S.version){pA(H,S,B);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+B)}function X(S,B){const H=t.get(S);if(S.version>0&&H.__version!==S.version){pA(H,S,B);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+B)}function O(S,B){const H=t.get(S);if(S.version>0&&H.__version!==S.version){nA(H,S,B);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+B)}const tA={[Xa]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},aA={[ht]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[Hs]:n.LINEAR_MIPMAP_NEAREST,[vn]:n.LINEAR_MIPMAP_LINEAR},gA={[Xf]:n.NEVER,[$f]:n.ALWAYS,[Yf]:n.LESS,[Du]:n.LEQUAL,[Jf]:n.EQUAL,[jf]:n.GEQUAL,[Zf]:n.GREATER,[qf]:n.NOTEQUAL};function QA(S,B){if(B.type===Tt&&A.has("OES_texture_float_linear")===!1&&(B.magFilter===$e||B.magFilter===Hs||B.magFilter===rr||B.magFilter===vn||B.minFilter===$e||B.minFilter===Hs||B.minFilter===rr||B.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,tA[B.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,tA[B.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,tA[B.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,aA[B.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,aA[B.minFilter]),B.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,gA[B.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===ht||B.minFilter!==rr&&B.minFilter!==vn||B.type===Tt&&A.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||t.get(B).__currentAnisotropy){const H=A.get("EXT_texture_filter_anisotropic");n.texParameterf(S,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),t.get(B).__currentAnisotropy=B.anisotropy}}}function OA(S,B){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,B.addEventListener("dispose",U));const W=B.source;let Z=h.get(W);Z===void 0&&(Z={},h.set(W,Z));const K=k(B);if(K!==S.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,H=!0),Z[K].usedTimes++;const vA=Z[S.__cacheKey];vA!==void 0&&(Z[S.__cacheKey].usedTimes--,vA.usedTimes===0&&v(B)),S.__cacheKey=K,S.__webglTexture=Z[K].texture}return H}function z(S,B,H){return Math.floor(Math.floor(S/H)/B)}function eA(S,B,H,W){const K=S.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,B.width,B.height,H,W,B.data);else{K.sort((q,hA)=>q.start-hA.start);let vA=0;for(let q=1;q<K.length;q++){const hA=K[vA],FA=K[q],MA=hA.start+hA.count,iA=z(FA.start,B.width,4),IA=z(hA.start,B.width,4);FA.start<=MA+1&&iA===IA&&z(FA.start+FA.count-1,B.width,4)===iA?hA.count=Math.max(hA.count,FA.start+FA.count-hA.start):(++vA,K[vA]=FA)}K.length=vA+1;const sA=n.getParameter(n.UNPACK_ROW_LENGTH),wA=n.getParameter(n.UNPACK_SKIP_PIXELS),CA=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,B.width);for(let q=0,hA=K.length;q<hA;q++){const FA=K[q],MA=Math.floor(FA.start/4),iA=Math.ceil(FA.count/4),IA=MA%B.width,b=Math.floor(MA/B.width),oA=iA,j=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,IA),n.pixelStorei(n.UNPACK_SKIP_ROWS,b),e.texSubImage2D(n.TEXTURE_2D,0,IA,b,oA,j,H,W,B.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,sA),n.pixelStorei(n.UNPACK_SKIP_PIXELS,wA),n.pixelStorei(n.UNPACK_SKIP_ROWS,CA)}}function pA(S,B,H){let W=n.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),B.isData3DTexture&&(W=n.TEXTURE_3D);const Z=OA(S,B),K=B.source;e.bindTexture(W,S.__webglTexture,n.TEXTURE0+H);const vA=t.get(K);if(K.version!==vA.__version||Z===!0){e.activeTexture(n.TEXTURE0+H);const sA=zA.getPrimaries(zA.workingColorSpace),wA=B.colorSpace===Jt?null:zA.getPrimaries(B.colorSpace),CA=B.colorSpace===Jt||sA===wA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,CA);let q=m(B.image,!1,i.maxTextureSize);q=HA(B,q);const hA=r.convert(B.format,B.colorSpace),FA=r.convert(B.type);let MA=x(B.internalFormat,hA,FA,B.colorSpace,B.isVideoTexture);QA(W,B);let iA;const IA=B.mipmaps,b=B.isVideoTexture!==!0,oA=vA.__version===void 0||Z===!0,j=K.dataReady,dA=y(B,q);if(B.isDepthTexture)MA=C(B.format===zi,B.type),oA&&(b?e.texStorage2D(n.TEXTURE_2D,1,MA,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,MA,q.width,q.height,0,hA,FA,null));else if(B.isDataTexture)if(IA.length>0){b&&oA&&e.texStorage2D(n.TEXTURE_2D,dA,MA,IA[0].width,IA[0].height);for(let $=0,J=IA.length;$<J;$++)iA=IA[$],b?j&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,iA.width,iA.height,hA,FA,iA.data):e.texImage2D(n.TEXTURE_2D,$,MA,iA.width,iA.height,0,hA,FA,iA.data);B.generateMipmaps=!1}else b?(oA&&e.texStorage2D(n.TEXTURE_2D,dA,MA,q.width,q.height),j&&eA(B,q,hA,FA)):e.texImage2D(n.TEXTURE_2D,0,MA,q.width,q.height,0,hA,FA,q.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){b&&oA&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dA,MA,IA[0].width,IA[0].height,q.depth);for(let $=0,J=IA.length;$<J;$++)if(iA=IA[$],B.format!==At)if(hA!==null)if(b){if(j)if(B.layerUpdates.size>0){const mA=jc(iA.width,iA.height,B.format,B.type);for(const RA of B.layerUpdates){const re=iA.data.subarray(RA*mA/iA.data.BYTES_PER_ELEMENT,(RA+1)*mA/iA.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,RA,iA.width,iA.height,1,hA,re)}B.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,iA.width,iA.height,q.depth,hA,iA.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,MA,iA.width,iA.height,q.depth,0,iA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?j&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,iA.width,iA.height,q.depth,hA,FA,iA.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,MA,iA.width,iA.height,q.depth,0,hA,FA,iA.data)}else{b&&oA&&e.texStorage2D(n.TEXTURE_2D,dA,MA,IA[0].width,IA[0].height);for(let $=0,J=IA.length;$<J;$++)iA=IA[$],B.format!==At?hA!==null?b?j&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,iA.width,iA.height,hA,iA.data):e.compressedTexImage2D(n.TEXTURE_2D,$,MA,iA.width,iA.height,0,iA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?j&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,iA.width,iA.height,hA,FA,iA.data):e.texImage2D(n.TEXTURE_2D,$,MA,iA.width,iA.height,0,hA,FA,iA.data)}else if(B.isDataArrayTexture)if(b){if(oA&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dA,MA,q.width,q.height,q.depth),j)if(B.layerUpdates.size>0){const $=jc(q.width,q.height,B.format,B.type);for(const J of B.layerUpdates){const mA=q.data.subarray(J*$/q.data.BYTES_PER_ELEMENT,(J+1)*$/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,q.width,q.height,1,hA,FA,mA)}B.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,hA,FA,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,MA,q.width,q.height,q.depth,0,hA,FA,q.data);else if(B.isData3DTexture)b?(oA&&e.texStorage3D(n.TEXTURE_3D,dA,MA,q.width,q.height,q.depth),j&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,hA,FA,q.data)):e.texImage3D(n.TEXTURE_3D,0,MA,q.width,q.height,q.depth,0,hA,FA,q.data);else if(B.isFramebufferTexture){if(oA)if(b)e.texStorage2D(n.TEXTURE_2D,dA,MA,q.width,q.height);else{let $=q.width,J=q.height;for(let mA=0;mA<dA;mA++)e.texImage2D(n.TEXTURE_2D,mA,MA,$,J,0,hA,FA,null),$>>=1,J>>=1}}else if(IA.length>0){if(b&&oA){const $=Be(IA[0]);e.texStorage2D(n.TEXTURE_2D,dA,MA,$.width,$.height)}for(let $=0,J=IA.length;$<J;$++)iA=IA[$],b?j&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,hA,FA,iA):e.texImage2D(n.TEXTURE_2D,$,MA,hA,FA,iA);B.generateMipmaps=!1}else if(b){if(oA){const $=Be(q);e.texStorage2D(n.TEXTURE_2D,dA,MA,$.width,$.height)}j&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,hA,FA,q)}else e.texImage2D(n.TEXTURE_2D,0,MA,hA,FA,q);p(B)&&f(W),vA.__version=K.version,B.onUpdate&&B.onUpdate(B)}S.__version=B.version}function nA(S,B,H){if(B.image.length!==6)return;const W=OA(S,B),Z=B.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+H);const K=t.get(Z);if(Z.version!==K.__version||W===!0){e.activeTexture(n.TEXTURE0+H);const vA=zA.getPrimaries(zA.workingColorSpace),sA=B.colorSpace===Jt?null:zA.getPrimaries(B.colorSpace),wA=B.colorSpace===Jt||vA===sA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wA);const CA=B.isCompressedTexture||B.image[0].isCompressedTexture,q=B.image[0]&&B.image[0].isDataTexture,hA=[];for(let J=0;J<6;J++)!CA&&!q?hA[J]=m(B.image[J],!0,i.maxCubemapSize):hA[J]=q?B.image[J].image:B.image[J],hA[J]=HA(B,hA[J]);const FA=hA[0],MA=r.convert(B.format,B.colorSpace),iA=r.convert(B.type),IA=x(B.internalFormat,MA,iA,B.colorSpace),b=B.isVideoTexture!==!0,oA=K.__version===void 0||W===!0,j=Z.dataReady;let dA=y(B,FA);QA(n.TEXTURE_CUBE_MAP,B);let $;if(CA){b&&oA&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dA,IA,FA.width,FA.height);for(let J=0;J<6;J++){$=hA[J].mipmaps;for(let mA=0;mA<$.length;mA++){const RA=$[mA];B.format!==At?MA!==null?b?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA,0,0,RA.width,RA.height,MA,RA.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA,IA,RA.width,RA.height,0,RA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA,0,0,RA.width,RA.height,MA,iA,RA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA,IA,RA.width,RA.height,0,MA,iA,RA.data)}}}else{if($=B.mipmaps,b&&oA){$.length>0&&dA++;const J=Be(hA[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dA,IA,J.width,J.height)}for(let J=0;J<6;J++)if(q){b?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,hA[J].width,hA[J].height,MA,iA,hA[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,IA,hA[J].width,hA[J].height,0,MA,iA,hA[J].data);for(let mA=0;mA<$.length;mA++){const re=$[mA].image[J].image;b?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA+1,0,0,re.width,re.height,MA,iA,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA+1,IA,re.width,re.height,0,MA,iA,re.data)}}else{b?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,MA,iA,hA[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,IA,MA,iA,hA[J]);for(let mA=0;mA<$.length;mA++){const RA=$[mA];b?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA+1,0,0,MA,iA,RA.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mA+1,IA,MA,iA,RA.image[J])}}}p(B)&&f(n.TEXTURE_CUBE_MAP),K.__version=Z.version,B.onUpdate&&B.onUpdate(B)}S.__version=B.version}function EA(S,B,H,W,Z,K){const vA=r.convert(H.format,H.colorSpace),sA=r.convert(H.type),wA=x(H.internalFormat,vA,sA,H.colorSpace),CA=t.get(B),q=t.get(H);if(q.__renderTarget=B,!CA.__hasExternalTextures){const hA=Math.max(1,B.width>>K),FA=Math.max(1,B.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,K,wA,hA,FA,B.depth,0,vA,sA,null):e.texImage2D(Z,K,wA,hA,FA,0,vA,sA,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),KA(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,q.__webglTexture,0,_A(B)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,q.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function WA(S,B,H){if(n.bindRenderbuffer(n.RENDERBUFFER,S),B.depthBuffer){const W=B.depthTexture,Z=W&&W.isDepthTexture?W.type:null,K=C(B.stencilBuffer,Z),vA=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,sA=_A(B);KA(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,sA,K,B.width,B.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,sA,K,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,K,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vA,n.RENDERBUFFER,S)}else{const W=B.textures;for(let Z=0;Z<W.length;Z++){const K=W[Z],vA=r.convert(K.format,K.colorSpace),sA=r.convert(K.type),wA=x(K.internalFormat,vA,sA,K.colorSpace),CA=_A(B);H&&KA(B)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,CA,wA,B.width,B.height):KA(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,CA,wA,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,wA,B.width,B.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yA(S,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=t.get(B.depthTexture);W.__renderTarget=B,(!W.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),Y(B.depthTexture,0);const Z=W.__webglTexture,K=_A(B);if(B.depthTexture.format===ki)KA(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(B.depthTexture.format===zi)KA(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function oe(S){const B=t.get(S),H=S.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==S.depthTexture){const W=S.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),W){const Z=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),B.__depthDisposeCallback=Z}B.__boundDepthTexture=W}if(S.depthTexture&&!B.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const W=S.texture.mipmaps;W&&W.length>0?yA(B.__webglFramebuffer[0],S):yA(B.__webglFramebuffer,S)}else if(H){B.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer[W]),B.__webglDepthbuffer[W]===void 0)B.__webglDepthbuffer[W]=n.createRenderbuffer(),WA(B.__webglDepthbuffer[W],S,!1);else{const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=B.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}}else{const W=S.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=n.createRenderbuffer(),WA(B.__webglDepthbuffer,S,!1);else{const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=B.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(S,B,H){const W=t.get(S);B!==void 0&&EA(W.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&oe(S)}function XA(S){const B=S.texture,H=t.get(S),W=t.get(B);S.addEventListener("dispose",M);const Z=S.textures,K=S.isWebGLCubeRenderTarget===!0,vA=Z.length>1;if(vA||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=B.version,s.memory.textures++),K){H.__webglFramebuffer=[];for(let sA=0;sA<6;sA++)if(B.mipmaps&&B.mipmaps.length>0){H.__webglFramebuffer[sA]=[];for(let wA=0;wA<B.mipmaps.length;wA++)H.__webglFramebuffer[sA][wA]=n.createFramebuffer()}else H.__webglFramebuffer[sA]=n.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){H.__webglFramebuffer=[];for(let sA=0;sA<B.mipmaps.length;sA++)H.__webglFramebuffer[sA]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(vA)for(let sA=0,wA=Z.length;sA<wA;sA++){const CA=t.get(Z[sA]);CA.__webglTexture===void 0&&(CA.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&KA(S)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let sA=0;sA<Z.length;sA++){const wA=Z[sA];H.__webglColorRenderbuffer[sA]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[sA]);const CA=r.convert(wA.format,wA.colorSpace),q=r.convert(wA.type),hA=x(wA.internalFormat,CA,q,wA.colorSpace,S.isXRRenderTarget===!0),FA=_A(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,FA,hA,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+sA,n.RENDERBUFFER,H.__webglColorRenderbuffer[sA])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),WA(H.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),QA(n.TEXTURE_CUBE_MAP,B);for(let sA=0;sA<6;sA++)if(B.mipmaps&&B.mipmaps.length>0)for(let wA=0;wA<B.mipmaps.length;wA++)EA(H.__webglFramebuffer[sA][wA],S,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+sA,wA);else EA(H.__webglFramebuffer[sA],S,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+sA,0);p(B)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vA){for(let sA=0,wA=Z.length;sA<wA;sA++){const CA=Z[sA],q=t.get(CA);e.bindTexture(n.TEXTURE_2D,q.__webglTexture),QA(n.TEXTURE_2D,CA),EA(H.__webglFramebuffer,S,CA,n.COLOR_ATTACHMENT0+sA,n.TEXTURE_2D,0),p(CA)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let sA=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(sA=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(sA,W.__webglTexture),QA(sA,B),B.mipmaps&&B.mipmaps.length>0)for(let wA=0;wA<B.mipmaps.length;wA++)EA(H.__webglFramebuffer[wA],S,B,n.COLOR_ATTACHMENT0,sA,wA);else EA(H.__webglFramebuffer,S,B,n.COLOR_ATTACHMENT0,sA,0);p(B)&&f(sA),e.unbindTexture()}S.depthBuffer&&oe(S)}function F(S){const B=S.textures;for(let H=0,W=B.length;H<W;H++){const Z=B[H];if(p(Z)){const K=E(S),vA=t.get(Z).__webglTexture;e.bindTexture(K,vA),f(K),e.unbindTexture()}}}const Ie=[],YA=[];function ne(S){if(S.samples>0){if(KA(S)===!1){const B=S.textures,H=S.width,W=S.height;let Z=n.COLOR_BUFFER_BIT;const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vA=t.get(S),sA=B.length>1;if(sA)for(let CA=0;CA<B.length;CA++)e.bindFramebuffer(n.FRAMEBUFFER,vA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+CA,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+CA,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vA.__webglMultisampledFramebuffer);const wA=S.texture.mipmaps;wA&&wA.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vA.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vA.__webglFramebuffer);for(let CA=0;CA<B.length;CA++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),sA){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vA.__webglColorRenderbuffer[CA]);const q=t.get(B[CA]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,Z,n.NEAREST),o===!0&&(Ie.length=0,YA.length=0,Ie.push(n.COLOR_ATTACHMENT0+CA),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ie.push(K),YA.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,YA)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),sA)for(let CA=0;CA<B.length;CA++){e.bindFramebuffer(n.FRAMEBUFFER,vA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+CA,n.RENDERBUFFER,vA.__webglColorRenderbuffer[CA]);const q=t.get(B[CA]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+CA,n.TEXTURE_2D,q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vA.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&o){const B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[B])}}}function _A(S){return Math.min(i.maxSamples,S.samples)}function KA(S){const B=t.get(S);return S.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function UA(S){const B=s.render.frame;l.get(S)!==B&&(l.set(S,B),S.update())}function HA(S,B){const H=S.colorSpace,W=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||H!==ui&&H!==Jt&&(zA.getTransfer(H)===Ae?(W!==At||Z!==Rt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),B}function Be(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=ce,this.setupRenderTarget=XA,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=EA,this.useMultisampledRTT=KA}function L0(n,A){function e(t,i=Jt){let r;const s=zA.getTransfer(i);if(t===Rt)return n.UNSIGNED_BYTE;if(t===Yo)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Fu)return n.BYTE;if(t===yu)return n.SHORT;if(t===Vi)return n.UNSIGNED_SHORT;if(t===Xo)return n.INT;if(t===Un)return n.UNSIGNED_INT;if(t===Tt)return n.FLOAT;if(t===qi)return n.HALF_FLOAT;if(t===bu)return n.ALPHA;if(t===Qu)return n.RGB;if(t===At)return n.RGBA;if(t===ki)return n.DEPTH_COMPONENT;if(t===zi)return n.DEPTH_STENCIL;if(t===Iu)return n.RED;if(t===Zo)return n.RED_INTEGER;if(t===Ru)return n.RG;if(t===qo)return n.RG_INTEGER;if(t===jo)return n.RGBA_INTEGER;if(t===jr||t===$r||t===As||t===es)if(s===Ae)if(r=A.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(t===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=A.get("WEBGL_compressed_texture_s3tc"),r!==null){if(t===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(t===Ja||t===Za||t===qa||t===ja)if(r=A.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(t===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(t===$a||t===Ao||t===eo)if(r=A.get("WEBGL_compressed_texture_etc"),r!==null){if(t===$a||t===Ao)return s===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===eo)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(t===to||t===no||t===io||t===ro||t===so||t===ao||t===oo||t===co||t===lo||t===uo||t===ho||t===fo||t===po||t===go)if(r=A.get("WEBGL_compressed_texture_astc"),r!==null){if(t===to)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===no)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===io)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ro)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===so)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ao)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===oo)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===co)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===lo)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===uo)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ho)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===fo)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===po)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===go)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(t===ts||t===mo||t===Bo)if(r=A.get("EXT_texture_compression_bptc"),r!==null){if(t===ts)return s===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(t===Lu||t===wo||t===_o||t===vo)if(r=A.get("EXT_texture_compression_rgtc"),r!==null){if(t===ts)return r.COMPRESSED_RED_RGTC1_EXT;if(t===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return t===Ki?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}return{convert:e}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,e,t){if(this.texture===null){const i=new Qe,r=A.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(A){if(this.texture!==null&&this.mesh===null){const e=A.cameras[0].viewport,t=new Dt({vertexShader:D0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Mn(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends Fn{constructor(A,e){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,u=null,h=null,d=null,g=null;const m=new P0,p=e.getContextAttributes();let f=null,E=null;const x=[],C=[],y=new DA;let U=null;const M=new ct;M.viewport=new he;const Q=new ct;Q.viewport=new he;const v=[M,Q],_=new np;let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let eA=x[z];return eA===void 0&&(eA=new ia,x[z]=eA),eA.getTargetRaySpace()},this.getControllerGrip=function(z){let eA=x[z];return eA===void 0&&(eA=new ia,x[z]=eA),eA.getGripSpace()},this.getHand=function(z){let eA=x[z];return eA===void 0&&(eA=new ia,x[z]=eA),eA.getHandSpace()};function L(z){const eA=C.indexOf(z.inputSource);if(eA===-1)return;const pA=x[eA];pA!==void 0&&(pA.update(z.inputSource,z.frame,c||s),pA.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let z=0;z<x.length;z++){const eA=C[z];eA!==null&&(C[z]=null,x[z].disconnect(eA))}T=null,G=null,m.reset(),A.setRenderTarget(f),d=null,h=null,u=null,i=null,E=null,OA.stop(),t.isPresenting=!1,A.setPixelRatio(U),A.setSize(y.width,y.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=A.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),U=A.getPixelRatio(),A.getSize(y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pA=null,nA=null,EA=null;p.depth&&(EA=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pA=p.stencil?zi:ki,nA=p.stencil?Ki:Un);const WA={colorFormat:e.RGBA8,depthFormat:EA,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(WA),i.updateRenderState({layers:[h]}),A.setPixelRatio(1),A.setSize(h.textureWidth,h.textureHeight,!1),E=new rn(h.textureWidth,h.textureHeight,{format:At,type:Rt,depthTexture:new Yu(h.textureWidth,h.textureHeight,nA,void 0,void 0,void 0,void 0,void 0,void 0,pA),stencilBuffer:p.stencil,colorSpace:A.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pA={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,pA),i.updateRenderState({baseLayer:d}),A.setPixelRatio(1),A.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new rn(d.framebufferWidth,d.framebufferHeight,{format:At,type:Rt,colorSpace:A.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await i.requestReferenceSpace(a),OA.setContext(i),OA.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(z){for(let eA=0;eA<z.removed.length;eA++){const pA=z.removed[eA],nA=C.indexOf(pA);nA>=0&&(C[nA]=null,x[nA].disconnect(pA))}for(let eA=0;eA<z.added.length;eA++){const pA=z.added[eA];let nA=C.indexOf(pA);if(nA===-1){for(let WA=0;WA<x.length;WA++)if(WA>=C.length){C.push(pA),nA=WA;break}else if(C[WA]===null){C[WA]=pA,nA=WA;break}if(nA===-1)break}const EA=x[nA];EA&&EA.connect(pA)}}const V=new D,X=new D;function O(z,eA,pA){V.setFromMatrixPosition(eA.matrixWorld),X.setFromMatrixPosition(pA.matrixWorld);const nA=V.distanceTo(X),EA=eA.projectionMatrix.elements,WA=pA.projectionMatrix.elements,yA=EA[14]/(EA[10]-1),oe=EA[14]/(EA[10]+1),ce=(EA[9]+1)/EA[5],XA=(EA[9]-1)/EA[5],F=(EA[8]-1)/EA[0],Ie=(WA[8]+1)/WA[0],YA=yA*F,ne=yA*Ie,_A=nA/(-F+Ie),KA=_A*-F;if(eA.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(KA),z.translateZ(_A),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),EA[10]===-1)z.projectionMatrix.copy(eA.projectionMatrix),z.projectionMatrixInverse.copy(eA.projectionMatrixInverse);else{const UA=yA+_A,HA=oe+_A,Be=YA-KA,S=ne+(nA-KA),B=ce*oe/HA*UA,H=XA*oe/HA*UA;z.projectionMatrix.makePerspective(Be,S,B,H,UA,HA),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function tA(z,eA){eA===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(eA.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let eA=z.near,pA=z.far;m.texture!==null&&(m.depthNear>0&&(eA=m.depthNear),m.depthFar>0&&(pA=m.depthFar)),_.near=Q.near=M.near=eA,_.far=Q.far=M.far=pA,(T!==_.near||G!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,G=_.far),M.layers.mask=z.layers.mask|2,Q.layers.mask=z.layers.mask|4,_.layers.mask=M.layers.mask|Q.layers.mask;const nA=z.parent,EA=_.cameras;tA(_,nA);for(let WA=0;WA<EA.length;WA++)tA(EA[WA],nA);EA.length===2?O(_,M,Q):_.projectionMatrix.copy(M.projectionMatrix),aA(z,_,nA)};function aA(z,eA,pA){pA===null?z.matrix.copy(eA.matrixWorld):(z.matrix.copy(pA.matrixWorld),z.matrix.invert(),z.matrix.multiply(eA.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(eA.projectionMatrix),z.projectionMatrixInverse.copy(eA.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Wi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return o},this.setFoveation=function(z){o=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(_)};let gA=null;function QA(z,eA){if(l=eA.getViewerPose(c||s),g=eA,l!==null){const pA=l.views;d!==null&&(A.setRenderTargetFramebuffer(E,d.framebuffer),A.setRenderTarget(E));let nA=!1;pA.length!==_.cameras.length&&(_.cameras.length=0,nA=!0);for(let yA=0;yA<pA.length;yA++){const oe=pA[yA];let ce=null;if(d!==null)ce=d.getViewport(oe);else{const F=u.getViewSubImage(h,oe);ce=F.viewport,yA===0&&(A.setRenderTargetTextures(E,F.colorTexture,F.depthStencilTexture),A.setRenderTarget(E))}let XA=v[yA];XA===void 0&&(XA=new ct,XA.layers.enable(yA),XA.viewport=new he,v[yA]=XA),XA.matrix.fromArray(oe.transform.matrix),XA.matrix.decompose(XA.position,XA.quaternion,XA.scale),XA.projectionMatrix.fromArray(oe.projectionMatrix),XA.projectionMatrixInverse.copy(XA.projectionMatrix).invert(),XA.viewport.set(ce.x,ce.y,ce.width,ce.height),yA===0&&(_.matrix.copy(XA.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),nA===!0&&_.cameras.push(XA)}const EA=i.enabledFeatures;if(EA&&EA.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const yA=u.getDepthInformation(pA[0]);yA&&yA.isValid&&yA.texture&&m.init(A,yA,i.renderState)}}for(let pA=0;pA<x.length;pA++){const nA=C[pA],EA=x[pA];nA!==null&&EA!==void 0&&EA.update(nA,eA,c||s)}gA&&gA(z,eA),eA.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:eA}),g=null}const OA=new Zu;OA.setAnimationLoop(QA),this.setAnimationLoop=function(z){gA=z},this.dispose=function(){}}}const dn=new Lt,O0=new pe;function G0(n,A){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function t(p,f){f.color.getRGB(p.fogColor.value,Ku(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,x,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),l(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,C)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),m(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,E,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ge&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ge&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=A.get(f),x=E.envMap,C=E.envMapRotation;x&&(p.envMap.value=x,dn.copy(C),dn.x*=-1,dn.y*=-1,dn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),p.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(dn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){const E=A.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function V0(n,A,e,t){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,x){const C=x.program;t.uniformBlockBinding(E,C)}function c(E,x){let C=i[E.id];C===void 0&&(g(E),C=l(E),i[E.id]=C,E.addEventListener("dispose",p));const y=x.program;t.updateUBOMapping(E,y);const U=A.render.frame;r[E.id]!==U&&(h(E),r[E.id]=U)}function l(E){const x=u();E.__bindingPointIndex=x;const C=n.createBuffer(),y=E.__size,U=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,y,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,C),C}function u(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=i[E.id],C=E.uniforms,y=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let U=0,M=C.length;U<M;U++){const Q=Array.isArray(C[U])?C[U]:[C[U]];for(let v=0,_=Q.length;v<_;v++){const T=Q[v];if(d(T,U,v,y)===!0){const G=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let Y=0;Y<L.length;Y++){const V=L[Y],X=m(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,G+k,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,C,y){const U=E.value,M=x+"_"+C;if(y[M]===void 0)return typeof U=="number"||typeof U=="boolean"?y[M]=U:y[M]=U.clone(),!0;{const Q=y[M];if(typeof U=="number"||typeof U=="boolean"){if(Q!==U)return y[M]=U,!0}else if(Q.equals(U)===!1)return Q.copy(U),!0}return!1}function g(E){const x=E.uniforms;let C=0;const y=16;for(let M=0,Q=x.length;M<Q;M++){const v=Array.isArray(x[M])?x[M]:[x[M]];for(let _=0,T=v.length;_<T;_++){const G=v[_],L=Array.isArray(G.value)?G.value:[G.value];for(let k=0,Y=L.length;k<Y;k++){const V=L[k],X=m(V),O=C%y,tA=O%X.boundary,aA=O+tA;C+=tA,aA!==0&&y-aA<X.storage&&(C+=y-aA),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=X.storage}}}const U=C%y;return U>0&&(C+=y-U),E.__size=C,E.__cache={},this}function m(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const C=s.indexOf(x.__bindingPointIndex);s.splice(C,1),n.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const E in i)n.deleteBuffer(i[E]);s=[],i={},r={}}return{bind:o,update:c,dispose:f}}class K0{constructor(A={}){const{canvas:e=md(),context:t=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=A;this.isWebGLRenderer=!0;let d;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=t.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),m=new Int32Array(4);let p=null,f=null;const E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let y=!1;this._outputColorSpace=Xe;let U=0,M=0,Q=null,v=-1,_=null;const T=new he,G=new he;let L=null;const k=new qA(0);let Y=0,V=e.width,X=e.height,O=1,tA=null,aA=null;const gA=new he(0,0,V,X),QA=new he(0,0,V,X);let OA=!1;const z=new Wu;let eA=!1,pA=!1;const nA=new pe,EA=new pe,WA=new D,yA=new he,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function XA(){return Q===null?O:1}let F=t;function Ie(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",dA,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",J,!1),F===null){const I="webgl2";if(F=Ie(I,w),F===null)throw Ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let YA,ne,_A,KA,UA,HA,Be,S,B,H,W,Z,K,vA,sA,wA,CA,q,hA,FA,MA,iA,IA,b;function oA(){YA=new $m(F),YA.init(),iA=new L0(F,YA),ne=new Wm(F,YA,A,iA),_A=new I0(F,YA),ne.reverseDepthBuffer&&h&&_A.buffers.depth.setReversed(!0),KA=new tB(F),UA=new _0,HA=new R0(F,YA,_A,UA,ne,iA,KA),Be=new Ym(C),S=new jm(C),B=new op(F),IA=new km(F,B),H=new AB(F,B,KA,IA),W=new iB(F,H,B,KA),hA=new nB(F,ne,HA),wA=new Xm(UA),Z=new w0(C,Be,S,YA,ne,IA,wA),K=new G0(C,UA),vA=new C0,sA=new F0(YA),q=new Km(C,Be,S,_A,W,d,o),CA=new b0(C,W,ne),b=new V0(F,KA,ne,_A),FA=new zm(F,YA,KA),MA=new eB(F,YA,KA),KA.programs=Z.programs,C.capabilities=ne,C.extensions=YA,C.properties=UA,C.renderLists=vA,C.shadowMap=CA,C.state=_A,C.info=KA}oA();const j=new N0(C,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=YA.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=YA.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(V,X,!1))},this.getSize=function(w){return w.set(V,X)},this.setSize=function(w,I,P=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,X=I,e.width=Math.floor(w*O),e.height=Math.floor(I*O),P===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(V*O,X*O).floor()},this.setDrawingBufferSize=function(w,I,P){V=w,X=I,O=P,e.width=Math.floor(w*P),e.height=Math.floor(I*P),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(gA)},this.setViewport=function(w,I,P,N){w.isVector4?gA.set(w.x,w.y,w.z,w.w):gA.set(w,I,P,N),_A.viewport(T.copy(gA).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(QA)},this.setScissor=function(w,I,P,N){w.isVector4?QA.set(w.x,w.y,w.z,w.w):QA.set(w,I,P,N),_A.scissor(G.copy(QA).multiplyScalar(O).round())},this.getScissorTest=function(){return OA},this.setScissorTest=function(w){_A.setScissorTest(OA=w)},this.setOpaqueSort=function(w){tA=w},this.setTransparentSort=function(w){aA=w},this.getClearColor=function(w){return w.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(w=!0,I=!0,P=!0){let N=0;if(w){let R=!1;if(Q!==null){const AA=Q.texture.format;R=AA===jo||AA===qo||AA===Zo}if(R){const AA=Q.texture.type,cA=AA===Rt||AA===Un||AA===Vi||AA===Ki||AA===Yo||AA===Jo,BA=q.getClearColor(),fA=q.getClearAlpha(),TA=BA.r,bA=BA.g,xA=BA.b;cA?(g[0]=TA,g[1]=bA,g[2]=xA,g[3]=fA,F.clearBufferuiv(F.COLOR,0,g)):(m[0]=TA,m[1]=bA,m[2]=xA,m[3]=fA,F.clearBufferiv(F.COLOR,0,m))}else N|=F.COLOR_BUFFER_BIT}I&&(N|=F.DEPTH_BUFFER_BIT),P&&(N|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dA,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",J,!1),q.dispose(),vA.dispose(),sA.dispose(),UA.dispose(),Be.dispose(),S.dispose(),W.dispose(),IA.dispose(),b.dispose(),Z.dispose(),j.dispose(),j.removeEventListener("sessionstart",fc),j.removeEventListener("sessionend",dc),an.stop()};function dA(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=KA.autoReset,I=CA.enabled,P=CA.autoUpdate,N=CA.needsUpdate,R=CA.type;oA(),KA.autoReset=w,CA.enabled=I,CA.autoUpdate=P,CA.needsUpdate=N,CA.type=R}function J(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mA(w){const I=w.target;I.removeEventListener("dispose",mA),RA(I)}function RA(w){re(w),UA.remove(w)}function re(w){const I=UA.get(w).programs;I!==void 0&&(I.forEach(function(P){Z.releaseProgram(P)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,P,N,R,AA){I===null&&(I=oe);const cA=R.isMesh&&R.matrixWorld.determinant()<0,BA=sf(w,I,P,N,R);_A.setMaterial(N,cA);let fA=P.index,TA=1;if(N.wireframe===!0){if(fA=H.getWireframeAttribute(P),fA===void 0)return;TA=2}const bA=P.drawRange,xA=P.attributes.position;let VA=bA.start*TA,$A=(bA.start+bA.count)*TA;AA!==null&&(VA=Math.max(VA,AA.start*TA),$A=Math.min($A,(AA.start+AA.count)*TA)),fA!==null?(VA=Math.max(VA,0),$A=Math.min($A,fA.count)):xA!=null&&(VA=Math.max(VA,0),$A=Math.min($A,xA.count));const le=$A-VA;if(le<0||le===1/0)return;IA.setup(R,N,BA,P,fA);let ue,kA=FA;if(fA!==null&&(ue=B.get(fA),kA=MA,kA.setIndex(ue)),R.isMesh)N.wireframe===!0?(_A.setLineWidth(N.wireframeLinewidth*XA()),kA.setMode(F.LINES)):kA.setMode(F.TRIANGLES);else if(R.isLine){let SA=N.linewidth;SA===void 0&&(SA=1),_A.setLineWidth(SA*XA()),R.isLineSegments?kA.setMode(F.LINES):R.isLineLoop?kA.setMode(F.LINE_LOOP):kA.setMode(F.LINE_STRIP)}else R.isPoints?kA.setMode(F.POINTS):R.isSprite&&kA.setMode(F.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kA.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(YA.get("WEBGL_multi_draw"))kA.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const SA=R._multiDrawStarts,Ue=R._multiDrawCounts,JA=R._multiDrawCount,it=fA?B.get(fA).bytesPerElement:1,yn=UA.get(N).currentProgram.getUniforms();for(let Ke=0;Ke<JA;Ke++)yn.setValue(F,"_gl_DrawID",Ke),kA.render(SA[Ke]/it,Ue[Ke])}else if(R.isInstancedMesh)kA.renderInstances(VA,le,R.count);else if(P.isInstancedBufferGeometry){const SA=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,Ue=Math.min(P.instanceCount,SA);kA.renderInstances(VA,le,Ue)}else kA.render(VA,le)};function jA(w,I,P){w.transparent===!0&&w.side===yt&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,ir(w,I,P),w.side=nn,w.needsUpdate=!0,ir(w,I,P),w.side=yt):ir(w,I,P)}this.compile=function(w,I,P=null){P===null&&(P=w),f=sA.get(P),f.init(I),x.push(f),P.traverseVisible(function(R){R.isLight&&R.layers.test(I.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),w!==P&&w.traverseVisible(function(R){R.isLight&&R.layers.test(I.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights();const N=new Set;return w.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const AA=R.material;if(AA)if(Array.isArray(AA))for(let cA=0;cA<AA.length;cA++){const BA=AA[cA];jA(BA,P,R),N.add(BA)}else jA(AA,P,R),N.add(AA)}),f=x.pop(),N},this.compileAsync=function(w,I,P=null){const N=this.compile(w,I,P);return new Promise(R=>{function AA(){if(N.forEach(function(cA){UA.get(cA).currentProgram.isReady()&&N.delete(cA)}),N.size===0){R(w);return}setTimeout(AA,10)}YA.get("KHR_parallel_shader_compile")!==null?AA():setTimeout(AA,10)})};let nt=null;function _t(w){nt&&nt(w)}function fc(){an.stop()}function dc(){an.start()}const an=new Zu;an.setAnimationLoop(_t),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){nt=w,j.setAnimationLoop(w),w===null?an.stop():an.start()},j.addEventListener("sessionstart",fc),j.addEventListener("sessionend",dc),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,I,Q),f=sA.get(w,x.length),f.init(I),x.push(f),EA.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),z.setFromProjectionMatrix(EA),pA=this.localClippingEnabled,eA=wA.init(this.clippingPlanes,pA),p=vA.get(w,E.length),p.init(),E.push(p),j.enabled===!0&&j.isPresenting===!0){const AA=C.xr.getDepthSensingMesh();AA!==null&&Ls(AA,I,-1/0,C.sortObjects)}Ls(w,I,0,C.sortObjects),p.finish(),C.sortObjects===!0&&p.sort(tA,aA),ce=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ce&&q.addToRenderList(p,w),this.info.render.frame++,eA===!0&&wA.beginShadows();const P=f.state.shadowsArray;CA.render(P,w,I),eA===!0&&wA.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=p.opaque,R=p.transmissive;if(f.setupLights(),I.isArrayCamera){const AA=I.cameras;if(R.length>0)for(let cA=0,BA=AA.length;cA<BA;cA++){const fA=AA[cA];gc(N,R,w,fA)}ce&&q.render(w);for(let cA=0,BA=AA.length;cA<BA;cA++){const fA=AA[cA];pc(p,w,fA,fA.viewport)}}else R.length>0&&gc(N,R,w,I),ce&&q.render(w),pc(p,w,I);Q!==null&&M===0&&(HA.updateMultisampleRenderTarget(Q),HA.updateRenderTargetMipmap(Q)),w.isScene===!0&&w.onAfterRender(C,w,I),IA.resetDefaultState(),v=-1,_=null,x.pop(),x.length>0?(f=x[x.length-1],eA===!0&&wA.setGlobalState(C.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Ls(w,I,P,N){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)P=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){N&&yA.setFromMatrixPosition(w.matrixWorld).applyMatrix4(EA);const cA=W.update(w),BA=w.material;BA.visible&&p.push(w,cA,BA,P,yA.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const cA=W.update(w),BA=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yA.copy(w.boundingSphere.center)):(cA.boundingSphere===null&&cA.computeBoundingSphere(),yA.copy(cA.boundingSphere.center)),yA.applyMatrix4(w.matrixWorld).applyMatrix4(EA)),Array.isArray(BA)){const fA=cA.groups;for(let TA=0,bA=fA.length;TA<bA;TA++){const xA=fA[TA],VA=BA[xA.materialIndex];VA&&VA.visible&&p.push(w,cA,VA,P,yA.z,xA)}}else BA.visible&&p.push(w,cA,BA,P,yA.z,null)}}const AA=w.children;for(let cA=0,BA=AA.length;cA<BA;cA++)Ls(AA[cA],I,P,N)}function pc(w,I,P,N){const R=w.opaque,AA=w.transmissive,cA=w.transparent;f.setupLightsView(P),eA===!0&&wA.setGlobalState(C.clippingPlanes,P),N&&_A.viewport(T.copy(N)),R.length>0&&nr(R,I,P),AA.length>0&&nr(AA,I,P),cA.length>0&&nr(cA,I,P),_A.buffers.depth.setTest(!0),_A.buffers.depth.setMask(!0),_A.buffers.color.setMask(!0),_A.setPolygonOffset(!1)}function gc(w,I,P,N){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[N.id]===void 0&&(f.state.transmissionRenderTarget[N.id]=new rn(1,1,{generateMipmaps:!0,type:YA.has("EXT_color_buffer_half_float")||YA.has("EXT_color_buffer_float")?qi:Rt,minFilter:vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zA.workingColorSpace}));const AA=f.state.transmissionRenderTarget[N.id],cA=N.viewport||T;AA.setSize(cA.z*C.transmissionResolutionScale,cA.w*C.transmissionResolutionScale);const BA=C.getRenderTarget();C.setRenderTarget(AA),C.getClearColor(k),Y=C.getClearAlpha(),Y<1&&C.setClearColor(16777215,.5),C.clear(),ce&&q.render(P);const fA=C.toneMapping;C.toneMapping=An;const TA=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),f.setupLightsView(N),eA===!0&&wA.setGlobalState(C.clippingPlanes,N),nr(w,P,N),HA.updateMultisampleRenderTarget(AA),HA.updateRenderTargetMipmap(AA),YA.has("WEBGL_multisampled_render_to_texture")===!1){let bA=!1;for(let xA=0,VA=I.length;xA<VA;xA++){const $A=I[xA],le=$A.object,ue=$A.geometry,kA=$A.material,SA=$A.group;if(kA.side===yt&&le.layers.test(N.layers)){const Ue=kA.side;kA.side=Ge,kA.needsUpdate=!0,mc(le,P,N,ue,kA,SA),kA.side=Ue,kA.needsUpdate=!0,bA=!0}}bA===!0&&(HA.updateMultisampleRenderTarget(AA),HA.updateRenderTargetMipmap(AA))}C.setRenderTarget(BA),C.setClearColor(k,Y),TA!==void 0&&(N.viewport=TA),C.toneMapping=fA}function nr(w,I,P){const N=I.isScene===!0?I.overrideMaterial:null;for(let R=0,AA=w.length;R<AA;R++){const cA=w[R],BA=cA.object,fA=cA.geometry,TA=cA.group;let bA=cA.material;bA.allowOverride===!0&&N!==null&&(bA=N),BA.layers.test(P.layers)&&mc(BA,I,P,fA,bA,TA)}}function mc(w,I,P,N,R,AA){w.onBeforeRender(C,I,P,N,R,AA),w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),R.onBeforeRender(C,I,P,N,w,AA),R.transparent===!0&&R.side===yt&&R.forceSinglePass===!1?(R.side=Ge,R.needsUpdate=!0,C.renderBufferDirect(P,I,N,R,w,AA),R.side=nn,R.needsUpdate=!0,C.renderBufferDirect(P,I,N,R,w,AA),R.side=yt):C.renderBufferDirect(P,I,N,R,w,AA),w.onAfterRender(C,I,P,N,R,AA)}function ir(w,I,P){I.isScene!==!0&&(I=oe);const N=UA.get(w),R=f.state.lights,AA=f.state.shadowsArray,cA=R.state.version,BA=Z.getParameters(w,R.state,AA,I,P),fA=Z.getProgramCacheKey(BA);let TA=N.programs;N.environment=w.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(w.isMeshStandardMaterial?S:Be).get(w.envMap||N.environment),N.envMapRotation=N.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,TA===void 0&&(w.addEventListener("dispose",mA),TA=new Map,N.programs=TA);let bA=TA.get(fA);if(bA!==void 0){if(N.currentProgram===bA&&N.lightsStateVersion===cA)return wc(w,BA),bA}else BA.uniforms=Z.getUniforms(w),w.onBeforeCompile(BA,C),bA=Z.acquireProgram(BA,fA),TA.set(fA,bA),N.uniforms=BA.uniforms;const xA=N.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(xA.clippingPlanes=wA.uniform),wc(w,BA),N.needsLights=of(w),N.lightsStateVersion=cA,N.needsLights&&(xA.ambientLightColor.value=R.state.ambient,xA.lightProbe.value=R.state.probe,xA.directionalLights.value=R.state.directional,xA.directionalLightShadows.value=R.state.directionalShadow,xA.spotLights.value=R.state.spot,xA.spotLightShadows.value=R.state.spotShadow,xA.rectAreaLights.value=R.state.rectArea,xA.ltc_1.value=R.state.rectAreaLTC1,xA.ltc_2.value=R.state.rectAreaLTC2,xA.pointLights.value=R.state.point,xA.pointLightShadows.value=R.state.pointShadow,xA.hemisphereLights.value=R.state.hemi,xA.directionalShadowMap.value=R.state.directionalShadowMap,xA.directionalShadowMatrix.value=R.state.directionalShadowMatrix,xA.spotShadowMap.value=R.state.spotShadowMap,xA.spotLightMatrix.value=R.state.spotLightMatrix,xA.spotLightMap.value=R.state.spotLightMap,xA.pointShadowMap.value=R.state.pointShadowMap,xA.pointShadowMatrix.value=R.state.pointShadowMatrix),N.currentProgram=bA,N.uniformsList=null,bA}function Bc(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=ns.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function wc(w,I){const P=UA.get(w);P.outputColorSpace=I.outputColorSpace,P.batching=I.batching,P.batchingColor=I.batchingColor,P.instancing=I.instancing,P.instancingColor=I.instancingColor,P.instancingMorph=I.instancingMorph,P.skinning=I.skinning,P.morphTargets=I.morphTargets,P.morphNormals=I.morphNormals,P.morphColors=I.morphColors,P.morphTargetsCount=I.morphTargetsCount,P.numClippingPlanes=I.numClippingPlanes,P.numIntersection=I.numClipIntersection,P.vertexAlphas=I.vertexAlphas,P.vertexTangents=I.vertexTangents,P.toneMapping=I.toneMapping}function sf(w,I,P,N,R){I.isScene!==!0&&(I=oe),HA.resetTextureUnits();const AA=I.fog,cA=N.isMeshStandardMaterial?I.environment:null,BA=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ui,fA=(N.isMeshStandardMaterial?S:Be).get(N.envMap||cA),TA=N.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,bA=!!P.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),xA=!!P.morphAttributes.position,VA=!!P.morphAttributes.normal,$A=!!P.morphAttributes.color;let le=An;N.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(le=C.toneMapping);const ue=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,kA=ue!==void 0?ue.length:0,SA=UA.get(N),Ue=f.state.lights;if(eA===!0&&(pA===!0||w!==_)){const Re=w===_&&N.id===v;wA.setState(N,w,Re)}let JA=!1;N.version===SA.__version?(SA.needsLights&&SA.lightsStateVersion!==Ue.state.version||SA.outputColorSpace!==BA||R.isBatchedMesh&&SA.batching===!1||!R.isBatchedMesh&&SA.batching===!0||R.isBatchedMesh&&SA.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&SA.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&SA.instancing===!1||!R.isInstancedMesh&&SA.instancing===!0||R.isSkinnedMesh&&SA.skinning===!1||!R.isSkinnedMesh&&SA.skinning===!0||R.isInstancedMesh&&SA.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&SA.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&SA.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&SA.instancingMorph===!1&&R.morphTexture!==null||SA.envMap!==fA||N.fog===!0&&SA.fog!==AA||SA.numClippingPlanes!==void 0&&(SA.numClippingPlanes!==wA.numPlanes||SA.numIntersection!==wA.numIntersection)||SA.vertexAlphas!==TA||SA.vertexTangents!==bA||SA.morphTargets!==xA||SA.morphNormals!==VA||SA.morphColors!==$A||SA.toneMapping!==le||SA.morphTargetsCount!==kA)&&(JA=!0):(JA=!0,SA.__version=N.version);let it=SA.currentProgram;JA===!0&&(it=ir(N,I,R));let yn=!1,Ke=!1,mi=!1;const se=it.getUniforms(),Ye=SA.uniforms;if(_A.useProgram(it.program)&&(yn=!0,Ke=!0,mi=!0),N.id!==v&&(v=N.id,Ke=!0),yn||_!==w){_A.buffers.depth.getReversed()?(nA.copy(w.projectionMatrix),wd(nA),_d(nA),se.setValue(F,"projectionMatrix",nA)):se.setValue(F,"projectionMatrix",w.projectionMatrix),se.setValue(F,"viewMatrix",w.matrixWorldInverse);const Pe=se.map.cameraPosition;Pe!==void 0&&Pe.setValue(F,WA.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&se.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Ke=!0,mi=!0)}if(R.isSkinnedMesh){se.setOptional(F,R,"bindMatrix"),se.setOptional(F,R,"bindMatrixInverse");const Re=R.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),se.setValue(F,"boneTexture",Re.boneTexture,HA))}R.isBatchedMesh&&(se.setOptional(F,R,"batchingTexture"),se.setValue(F,"batchingTexture",R._matricesTexture,HA),se.setOptional(F,R,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",R._indirectTexture,HA),se.setOptional(F,R,"batchingColorTexture"),R._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",R._colorsTexture,HA));const Je=P.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&hA.update(R,P,it),(Ke||SA.receiveShadow!==R.receiveShadow)&&(SA.receiveShadow=R.receiveShadow,se.setValue(F,"receiveShadow",R.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ye.envMap.value=fA,Ye.flipEnvMap.value=fA.isCubeTexture&&fA.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&I.environment!==null&&(Ye.envMapIntensity.value=I.environmentIntensity),Ke&&(se.setValue(F,"toneMappingExposure",C.toneMappingExposure),SA.needsLights&&af(Ye,mi),AA&&N.fog===!0&&K.refreshFogUniforms(Ye,AA),K.refreshMaterialUniforms(Ye,N,O,X,f.state.transmissionRenderTarget[w.id]),ns.upload(F,Bc(SA),Ye,HA)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ns.upload(F,Bc(SA),Ye,HA),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&se.setValue(F,"center",R.center),se.setValue(F,"modelViewMatrix",R.modelViewMatrix),se.setValue(F,"normalMatrix",R.normalMatrix),se.setValue(F,"modelMatrix",R.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Re=N.uniformsGroups;for(let Pe=0,Ds=Re.length;Pe<Ds;Pe++){const on=Re[Pe];b.update(on,it),b.bind(on,it)}}return it}function af(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function of(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,I,P){const N=UA.get(w);N.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),UA.get(w.texture).__webglTexture=I,UA.get(w.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:P,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,I){const P=UA.get(w);P.__webglFramebuffer=I,P.__useDefaultFramebuffer=I===void 0};const cf=F.createFramebuffer();this.setRenderTarget=function(w,I=0,P=0){Q=w,U=I,M=P;let N=!0,R=null,AA=!1,cA=!1;if(w){const fA=UA.get(w);if(fA.__useDefaultFramebuffer!==void 0)_A.bindFramebuffer(F.FRAMEBUFFER,null),N=!1;else if(fA.__webglFramebuffer===void 0)HA.setupRenderTarget(w);else if(fA.__hasExternalTextures)HA.rebindTextures(w,UA.get(w.texture).__webglTexture,UA.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const xA=w.depthTexture;if(fA.__boundDepthTexture!==xA){if(xA!==null&&UA.has(xA)&&(w.width!==xA.image.width||w.height!==xA.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");HA.setupDepthRenderbuffer(w)}}const TA=w.texture;(TA.isData3DTexture||TA.isDataArrayTexture||TA.isCompressedArrayTexture)&&(cA=!0);const bA=UA.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(bA[I])?R=bA[I][P]:R=bA[I],AA=!0):w.samples>0&&HA.useMultisampledRTT(w)===!1?R=UA.get(w).__webglMultisampledFramebuffer:Array.isArray(bA)?R=bA[P]:R=bA,T.copy(w.viewport),G.copy(w.scissor),L=w.scissorTest}else T.copy(gA).multiplyScalar(O).floor(),G.copy(QA).multiplyScalar(O).floor(),L=OA;if(P!==0&&(R=cf),_A.bindFramebuffer(F.FRAMEBUFFER,R)&&N&&_A.drawBuffers(w,R),_A.viewport(T),_A.scissor(G),_A.setScissorTest(L),AA){const fA=UA.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,fA.__webglTexture,P)}else if(cA){const fA=UA.get(w.texture),TA=I;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,fA.__webglTexture,P,TA)}else if(w!==null&&P!==0){const fA=UA.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fA.__webglTexture,P)}v=-1},this.readRenderTargetPixels=function(w,I,P,N,R,AA,cA,BA=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fA=UA.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&cA!==void 0&&(fA=fA[cA]),fA){_A.bindFramebuffer(F.FRAMEBUFFER,fA);try{const TA=w.textures[BA],bA=TA.format,xA=TA.type;if(!ne.textureFormatReadable(bA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(xA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-N&&P>=0&&P<=w.height-R&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+BA),F.readPixels(I,P,N,R,iA.convert(bA),iA.convert(xA),AA))}finally{const TA=Q!==null?UA.get(Q).__webglFramebuffer:null;_A.bindFramebuffer(F.FRAMEBUFFER,TA)}}},this.readRenderTargetPixelsAsync=async function(w,I,P,N,R,AA,cA,BA=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fA=UA.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&cA!==void 0&&(fA=fA[cA]),fA)if(I>=0&&I<=w.width-N&&P>=0&&P<=w.height-R){_A.bindFramebuffer(F.FRAMEBUFFER,fA);const TA=w.textures[BA],bA=TA.format,xA=TA.type;if(!ne.textureFormatReadable(bA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(xA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const VA=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,VA),F.bufferData(F.PIXEL_PACK_BUFFER,AA.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+BA),F.readPixels(I,P,N,R,iA.convert(bA),iA.convert(xA),0);const $A=Q!==null?UA.get(Q).__webglFramebuffer:null;_A.bindFramebuffer(F.FRAMEBUFFER,$A);const le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bd(F,le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,VA),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,AA),F.deleteBuffer(VA),F.deleteSync(le),AA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,I=null,P=0){const N=Math.pow(2,-P),R=Math.floor(w.image.width*N),AA=Math.floor(w.image.height*N),cA=I!==null?I.x:0,BA=I!==null?I.y:0;HA.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,P,0,0,cA,BA,R,AA),_A.unbindTexture()};const lf=F.createFramebuffer(),uf=F.createFramebuffer();this.copyTextureToTexture=function(w,I,P=null,N=null,R=0,AA=null){AA===null&&(R!==0?(ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),AA=R,R=0):AA=0);let cA,BA,fA,TA,bA,xA,VA,$A,le;const ue=w.isCompressedTexture?w.mipmaps[AA]:w.image;if(P!==null)cA=P.max.x-P.min.x,BA=P.max.y-P.min.y,fA=P.isBox3?P.max.z-P.min.z:1,TA=P.min.x,bA=P.min.y,xA=P.isBox3?P.min.z:0;else{const Je=Math.pow(2,-R);cA=Math.floor(ue.width*Je),BA=Math.floor(ue.height*Je),w.isDataArrayTexture?fA=ue.depth:w.isData3DTexture?fA=Math.floor(ue.depth*Je):fA=1,TA=0,bA=0,xA=0}N!==null?(VA=N.x,$A=N.y,le=N.z):(VA=0,$A=0,le=0);const kA=iA.convert(I.format),SA=iA.convert(I.type);let Ue;I.isData3DTexture?(HA.setTexture3D(I,0),Ue=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(HA.setTexture2DArray(I,0),Ue=F.TEXTURE_2D_ARRAY):(HA.setTexture2D(I,0),Ue=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const JA=F.getParameter(F.UNPACK_ROW_LENGTH),it=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ke=F.getParameter(F.UNPACK_SKIP_ROWS),mi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,TA),F.pixelStorei(F.UNPACK_SKIP_ROWS,bA),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xA);const se=w.isDataArrayTexture||w.isData3DTexture,Ye=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const Je=UA.get(w),Re=UA.get(I),Pe=UA.get(Je.__renderTarget),Ds=UA.get(Re.__renderTarget);_A.bindFramebuffer(F.READ_FRAMEBUFFER,Pe.__webglFramebuffer),_A.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let on=0;on<fA;on++)se&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,UA.get(w).__webglTexture,R,xA+on),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,UA.get(I).__webglTexture,AA,le+on)),F.blitFramebuffer(TA,bA,cA,BA,VA,$A,cA,BA,F.DEPTH_BUFFER_BIT,F.NEAREST);_A.bindFramebuffer(F.READ_FRAMEBUFFER,null),_A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(R!==0||w.isRenderTargetTexture||UA.has(w)){const Je=UA.get(w),Re=UA.get(I);_A.bindFramebuffer(F.READ_FRAMEBUFFER,lf),_A.bindFramebuffer(F.DRAW_FRAMEBUFFER,uf);for(let Pe=0;Pe<fA;Pe++)se?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,R,xA+Pe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,R),Ye?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,AA,le+Pe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,AA),R!==0?F.blitFramebuffer(TA,bA,cA,BA,VA,$A,cA,BA,F.COLOR_BUFFER_BIT,F.NEAREST):Ye?F.copyTexSubImage3D(Ue,AA,VA,$A,le+Pe,TA,bA,cA,BA):F.copyTexSubImage2D(Ue,AA,VA,$A,TA,bA,cA,BA);_A.bindFramebuffer(F.READ_FRAMEBUFFER,null),_A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ye?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ue,AA,VA,$A,le,cA,BA,fA,kA,SA,ue.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Ue,AA,VA,$A,le,cA,BA,fA,kA,ue.data):F.texSubImage3D(Ue,AA,VA,$A,le,cA,BA,fA,kA,SA,ue):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,AA,VA,$A,cA,BA,kA,SA,ue.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,AA,VA,$A,ue.width,ue.height,kA,ue.data):F.texSubImage2D(F.TEXTURE_2D,AA,VA,$A,cA,BA,kA,SA,ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,JA),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mi),AA===0&&I.generateMipmaps&&F.generateMipmap(Ue),_A.unbindTexture()},this.copyTextureToTexture3D=function(w,I,P=null,N=null,R=0){return ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,P,N,R)},this.initRenderTarget=function(w){UA.get(w).__webglFramebuffer===void 0&&HA.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?HA.setTextureCube(w,0):w.isData3DTexture?HA.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?HA.setTexture2DArray(w,0):HA.setTexture2D(w,0),_A.unbindTexture()},this.resetState=function(){U=0,M=0,Q=null,_A.reset(),IA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const e=this.getContext();e.drawingBufferColorSpace=zA._getDrawingBufferColorSpace(A),e.unpackColorSpace=zA._getUnpackColorSpace()}}let k0=class{constructor(A,e,t){this.canvas=A,this.wrapW=e,this.wrapH=t,this.setup()}setup(){const A={clearColor:0,w:this.wrapW,h:this.wrapH};this.instance=new K0({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.instance.setClearColor(A.clearColor,0),this.instance.setSize(A.w,A.h),this.instance.colorSpace=Xe}onResize(A,e){this.instance.setSize(A,e)}};class El{constructor(A,e){this.wrapW=A,this.wrapH=e,this.instance,this.CAMERA_PARAM={left:-this.wrapW/2,right:this.wrapW/2,top:this.wrapH/2,bottom:-this.wrapH/2,near:.001,far:1e4,x:0,y:0,z:2,lookAt:new D(0,0,0)},this.setup()}setup(){this.instance=new Ju(this.CAMERA_PARAM.left,this.CAMERA_PARAM.right,this.CAMERA_PARAM.top,this.CAMERA_PARAM.bottom,this.CAMERA_PARAM.near,this.CAMERA_PARAM.far),this.setPosition(),this.instance.lookAt(this.CAMERA_PARAM.lookAt)}onResize(A,e){this.wrapW=A,this.wrapH=e,this.CAMERA_PARAM={left:-this.wrapW/2,right:this.wrapW/2,top:this.wrapH/2,bottom:-this.wrapH/2},this.instance.left=this.CAMERA_PARAM.left,this.instance.right=this.CAMERA_PARAM.right,this.instance.top=this.CAMERA_PARAM.top,this.instance.bottom=this.CAMERA_PARAM.bottom,this.instance.updateProjectionMatrix()}setPosition(){this.instance.position.set(this.CAMERA_PARAM.x,this.CAMERA_PARAM.y,this.CAMERA_PARAM.z)}}let z0=class{constructor(A,e){this.dispTexture=A,this.group=e,this.setup(),this.setEvents()}setup(){this.setParam(),this.createMesh()}setParam(){this.PARAM={w:64,h:64,sw:1,sh:1},this.progress=0,this.mouse={x:0,y:0},this.prevMouse={x:0,y:0},this.currentWave=0}createMesh(){this.g=new Mn(this.PARAM.w,this.PARAM.h,this.PARAM.sw,this.PARAM.sh),this.meshes=[],this.num=100;for(let A=0;A<this.num;A++){const e=new tc({map:this.dispTexture,transparent:!0,blending:La,depthTest:!1,depthWrite:!1}),t=new ut(this.g,e);t.visible=!1,t.rotation.z=Math.PI*Math.random(),this.group.add(t),this.meshes.push(t)}}onMouseMove(A,e){this.mouse.x=A-window.innerWidth*.5,this.mouse.y=-(e-window.innerHeight*.5)}setNewWave(A,e,t){let i=this.meshes[t];i.visible=!0,i.position.x=A,i.position.y=e,i.scale.x=i.scale.y=.2,i.material.opacity=.5}trackMousePos(){Math.abs(this.mouse.x-this.prevMouse.x)<4||Math.abs(this.mouse.y-this.prevMouse.y)<4||(this.setNewWave(this.mouse.x,this.mouse.y,this.currentWave),this.currentWave=(this.currentWave+1)%this.num),this.prevMouse.x=this.mouse.x,this.prevMouse.y=this.mouse.y}onUpdate(A,e){this.trackMousePos(),this.meshes.forEach(t=>{t.visible&&(t.rotation.z+=.01,t.material.opacity*=.96,t.scale.x=.982*t.scale.x+.108,t.scale.y=.982*t.scale.y+.108,t.material.opacity<.002&&(t.visible=!1))})}onResize(A,e){}setEvents(){window.addEventListener("touchmove",A=>{const e=A.touches[0],t=e.clientX,i=e.clientY;this.onMouseMove(t,i)})}};class W0{constructor(A,e){this.dispTexture=A,this.scene=e,this.setup()}setup(){const A=new Ai;this.scene.add(A),this.item=new z0(this.dispTexture,A)}onMouseMove(A,e){this.item.onMouseMove(A,e)}onUpdate(A,e){this.item.onUpdate(A,e)}onResize(A,e){this.item.onResize(A,e)}}var X0=`uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform float uTime;

varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
  
  vUv = uv;
}`,Y0=`precision mediump float;

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
  
  
  float theta = disp.r * PI * 2.0; 
  
  vec2 dir = vec2(sin(theta), cos(theta)); 

  
  vec2 offsetUv = newUv + dir * disp.r * strength;

  vec4 color = texture2D(uTexture, offsetUv);

  gl_FragColor = color;
  
}`;class J0{constructor(A,e,t){this.baseTexture=A,this.bgTexture=e,this.group=t,this.setup(),this.setEvents()}setup(){this.setParam(),this.createMesh(),this.setAspect()}setParam(){this.baseW=1280,this.PARAM={w:window.innerWidth,h:window.innerHeight,sw:100,sh:100}}createMesh(){this.g=new Mn(this.PARAM.w,this.PARAM.h,this.PARAM.sw,this.PARAM.sh),this.m=new Zd({vertexShader:X0,fragmentShader:Y0,uniforms:{uTime:{value:0},uDisp:{value:this.baseTexture},uTexture:{value:this.bgTexture},uProgress:{value:0},uResolution:{value:new he}}}),this.mesh=new ut(this.g,this.m),this.group.add(this.mesh)}setAspect(){const A=this.PARAM.w,e=this.PARAM.h;this.canvasAspect=A/e,this.imageAspect=this.bgTexture.image.width/this.bgTexture.image.height;let t=new DA(1);this.imageAspect>this.canvasAspect?t=new DA(this.canvasAspect/this.imageAspect,1):t=new DA(1,this.imageAspect/this.canvasAspect),this.mesh.material.uniforms.uResolution.value.set(A,e,t.x,t.y)}onUpdate(A,e){this.mesh.material.uniforms.uTime.value+=A*.1}onResize(A,e){this.setParam(),this.g.dispose(),this.g=new Mn(this.PARAM.w,this.PARAM.h,this.PARAM.sw,this.PARAM.sh),this.mesh.geometry=this.g,this.setAspect()}setEvents(){}}class Z0{constructor(A,e,t){this.baseTexture=A,this.bgTexture=e,this.scene=t,this.setup()}setup(){const A=new Ai;this.scene.add(A),this.item=new J0(this.baseTexture,this.bgTexture,A)}onUpdate(A,e){this.item.onUpdate(A,e)}onResize(A,e){this.item.onResize(A,e)}}const xl={type:"change"},rc={type:"start"},eh={type:"end"},Fr=new ec,Ul=new Xt,q0=Math.cos(70*gd.DEG2RAD),we=new D,Ne=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fa=1e-6;class j0 extends sp{constructor(A,e=null){super(A,e),this.state=ee.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Sn,this._lastTargetPosition=new D,this._quat=new Sn().setFromUnitVectors(A.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new D,this._rotateStart=new DA,this._rotateEnd=new DA,this._rotateDelta=new DA,this._panStart=new DA,this._panEnd=new DA,this._panDelta=new DA,this._dollyStart=new DA,this._dollyEnd=new DA,this._dollyDelta=new DA,this._dollyDirection=new D,this._mouse=new DA,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Aw.bind(this),this._onPointerDown=$0.bind(this),this._onPointerUp=ew.bind(this),this._onContextMenu=ow.bind(this),this._onMouseWheel=iw.bind(this),this._onKeyDown=rw.bind(this),this._onTouchStart=sw.bind(this),this._onTouchMove=aw.bind(this),this._onMouseDown=tw.bind(this),this._onMouseMove=nw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=lw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(A){super.connect(A),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(A){A.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=A}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xl),this.update(),this.state=ee.NONE}update(A=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(A)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let t=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(t)&&isFinite(i)&&(t<-Math.PI?t+=Ne:t>Math.PI&&(t-=Ne),i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),t<=i?this._spherical.theta=Math.max(t,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(t+i)/2?Math.max(t,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=we.length();s=this._clampDistance(a*this._scale);const o=a-s;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),r=!!o}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=o!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Fr.origin.copy(this.object.position),Fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fr.direction))<q0?this.object.lookAt(this.target):(Ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fr.intersectPlane(Ul,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fa||this._lastTargetPosition.distanceToSquared(this.target)>fa?(this.dispatchEvent(xl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(A){return A!==null?Ne/60*this.autoRotateSpeed*A:Ne/60/60*this.autoRotateSpeed}_getZoomScale(A){const e=Math.abs(A*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(A){this._sphericalDelta.theta-=A}_rotateUp(A){this._sphericalDelta.phi-=A}_panLeft(A,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-A),this._panOffset.add(we)}_panUp(A,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(A),this._panOffset.add(we)}_pan(A,e){const t=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;we.copy(i).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*A*r/t.clientHeight,this.object.matrix),this._panUp(2*e*r/t.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(A*(this.object.right-this.object.left)/this.object.zoom/t.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/t.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(A,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const t=this.domElement.getBoundingClientRect(),i=A-t.left,r=e-t.top,s=t.width,a=t.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(A){return Math.max(this.minDistance,Math.min(this.maxDistance,A))}_handleMouseDownRotate(A){this._rotateStart.set(A.clientX,A.clientY)}_handleMouseDownDolly(A){this._updateZoomParameters(A.clientX,A.clientX),this._dollyStart.set(A.clientX,A.clientY)}_handleMouseDownPan(A){this._panStart.set(A.clientX,A.clientY)}_handleMouseMoveRotate(A){this._rotateEnd.set(A.clientX,A.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(A){this._dollyEnd.set(A.clientX,A.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(A){this._panEnd.set(A.clientX,A.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(A){this._updateZoomParameters(A.clientX,A.clientY),A.deltaY<0?this._dollyIn(this._getZoomScale(A.deltaY)):A.deltaY>0&&this._dollyOut(this._getZoomScale(A.deltaY)),this.update()}_handleKeyDown(A){let e=!1;switch(A.code){case this.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(A.preventDefault(),this.update())}_handleTouchStartRotate(A){if(this._pointers.length===1)this._rotateStart.set(A.pageX,A.pageY);else{const e=this._getSecondPointerPosition(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this._rotateStart.set(t,i)}}_handleTouchStartPan(A){if(this._pointers.length===1)this._panStart.set(A.pageX,A.pageY);else{const e=this._getSecondPointerPosition(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this._panStart.set(t,i)}}_handleTouchStartDolly(A){const e=this._getSecondPointerPosition(A),t=A.pageX-e.x,i=A.pageY-e.y,r=Math.sqrt(t*t+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enablePan&&this._handleTouchStartPan(A)}_handleTouchStartDollyRotate(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enableRotate&&this._handleTouchStartRotate(A)}_handleTouchMoveRotate(A){if(this._pointers.length==1)this._rotateEnd.set(A.pageX,A.pageY);else{const t=this._getSecondPointerPosition(A),i=.5*(A.pageX+t.x),r=.5*(A.pageY+t.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(A){if(this._pointers.length===1)this._panEnd.set(A.pageX,A.pageY);else{const e=this._getSecondPointerPosition(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this._panEnd.set(t,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(A){const e=this._getSecondPointerPosition(A),t=A.pageX-e.x,i=A.pageY-e.y,r=Math.sqrt(t*t+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(A.pageX+e.x)*.5,a=(A.pageY+e.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enablePan&&this._handleTouchMovePan(A)}_handleTouchMoveDollyRotate(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enableRotate&&this._handleTouchMoveRotate(A)}_addPointer(A){this._pointers.push(A.pointerId)}_removePointer(A){delete this._pointerPositions[A.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==A.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(A){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==A.pointerId)return!0;return!1}_trackPointer(A){let e=this._pointerPositions[A.pointerId];e===void 0&&(e=new DA,this._pointerPositions[A.pointerId]=e),e.set(A.pageX,A.pageY)}_getSecondPointerPosition(A){const e=A.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(A){const e=A.deltaMode,t={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(e){case 1:t.deltaY*=16;break;case 2:t.deltaY*=100;break}return A.ctrlKey&&!this._controlActive&&(t.deltaY*=10),t}}function $0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Aw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ew(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eh),this.state=ee.NONE;break;case 1:const A=this._pointers[0],e=this._pointerPositions[A];this._onTouchStart({pointerId:A,pageX:e.x,pageY:e.y});break}}function tw(n){let A;switch(n.button){case 0:A=this.mouseButtons.LEFT;break;case 1:A=this.mouseButtons.MIDDLE;break;case 2:A=this.mouseButtons.RIGHT;break;default:A=-1}switch(A){case ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ee.DOLLY;break;case ni.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}break;case ni.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(rc)}function nw(n){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iw(n){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(n.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(eh))}function rw(n){this.enabled!==!1&&this._handleKeyDown(n)}function sw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ee.TOUCH_ROTATE;break;case $n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case $n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ee.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(rc)}function aw(n){switch(this._trackPointer(n),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ee.NONE}}function ow(n){this.enabled!==!1&&n.preventDefault()}function cw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Eo=function(n,A){return Eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},Eo(n,A)};function dt(n,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");Eo(n,A);function e(){this.constructor=n}n.prototype=A===null?Object.create(A):(e.prototype=A.prototype,new e)}var xo=function(){return xo=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},xo.apply(this,arguments)};function He(n,A,e,t){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(l){try{c(t.next(l))}catch(u){s(u)}}function o(l){try{c(t.throw(l))}catch(u){s(u)}}function c(l){l.done?r(l.value):i(l.value).then(a,o)}c((t=t.apply(n,A||[])).next())})}function Te(n,A){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(l){return o([c,l])}}function o(c){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,i=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){e.label=c[1];break}if(c[0]===6&&e.label<r[1]){e.label=r[1],r=c;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(c);break}r[2]&&e.ops.pop(),e.trys.pop();continue}c=A.call(n,e)}catch(l){c=[6,l],i=0}finally{t=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function yr(n,A,e){if(e||arguments.length===2)for(var t=0,i=A.length,r;t<i;t++)(r||!(t in A))&&(r||(r=Array.prototype.slice.call(A,0,t)),r[t]=A[t]);return n.concat(r||A)}var Ht=function(){function n(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i}return n.prototype.add=function(A,e,t,i){return new n(this.left+A,this.top+e,this.width+t,this.height+i)},n.fromClientRect=function(A,e){return new n(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},n.fromDOMRectList=function(A,e){var t=Array.from(e).find(function(i){return i.width!==0});return t?new n(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),Us=function(n,A){return Ht.fromClientRect(n,A.getBoundingClientRect())},uw=function(n){var A=n.body,e=n.documentElement;if(!A||!e)throw new Error("Unable to get document size");var t=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),i=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new Ht(0,0,t,i)},Ss=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},de=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},Sl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Tr=0;Tr<Sl.length;Tr++)hw[Sl.charCodeAt(Tr)]=Tr;var Ml="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var br=0;br<Ml.length;br++)Fi[Ml.charCodeAt(br)]=br;var fw=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),l=Array.isArray(c)?c:new Uint8Array(c);for(t=0;t<e;t+=4)r=Fi[n.charCodeAt(t)],s=Fi[n.charCodeAt(t+1)],a=Fi[n.charCodeAt(t+2)],o=Fi[n.charCodeAt(t+3)],l[i++]=r<<2|s>>4,l[i++]=(s&15)<<4|a>>2,l[i++]=(a&3)<<6|o&63;return c},dw=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},pw=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},En=5,sc=6+5,da=2,gw=sc-En,th=65536>>En,mw=1<<En,pa=mw-1,Bw=1024>>En,ww=th+Bw,_w=ww,vw=32,Cw=_w+vw,Ew=65536>>sc,xw=1<<gw,Uw=xw-1,Fl=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},Sw=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},Mw=function(n,A){var e=fw(n),t=Array.isArray(e)?pw(e):new Uint32Array(e),i=Array.isArray(e)?dw(e):new Uint16Array(e),r=24,s=Fl(i,r/2,t[4]/2),a=t[5]===2?Fl(i,(r+t[4])/2):Sw(t,Math.ceil((r+t[4])/4));return new Fw(t[0],t[1],t[2],t[3],s,a)},Fw=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>En],e=(e<<da)+(A&pa),this.data[e];if(A<=65535)return e=this.index[th+(A-55296>>En)],e=(e<<da)+(A&pa),this.data[e];if(A<this.highStart)return e=Cw-Ew+(A>>sc),e=this.index[e],e+=A>>En&Uw,e=this.index[e],e=(e<<da)+(A&pa),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),yl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Qr=0;Qr<yl.length;Qr++)yw[yl.charCodeAt(Qr)]=Qr;var Tw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Tl=50,bw=1,nh=2,ih=3,Qw=4,Iw=5,bl=7,rh=8,Ql=9,Zt=10,Uo=11,Il=12,So=13,Rw=14,yi=15,Mo=16,Ir=17,Ei=18,Lw=19,Rl=20,Fo=21,xi=22,ga=23,kn=24,We=25,Ti=26,bi=27,zn=28,Dw=29,wn=30,Hw=31,Rr=32,Lr=33,yo=34,To=35,bo=36,Yi=37,Qo=38,is=39,rs=40,ma=41,sh=42,Pw=43,Nw=[9001,65288],ah="!",GA="×",Dr="÷",Io=Mw(Tw),St=[wn,bo],Ro=[bw,nh,ih,Iw],oh=[Zt,rh],Ll=[bi,Ti],Ow=Ro.concat(oh),Dl=[Qo,is,rs,yo,To],Gw=[yi,So],Vw=function(n,A){A===void 0&&(A="strict");var e=[],t=[],i=[];return n.forEach(function(r,s){var a=Io.get(r);if(a>Tl?(i.push(!0),a-=Tl):i.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),e.push(Mo);if(a===Qw||a===Uo){if(s===0)return t.push(s),e.push(wn);var o=e[s-1];return Ow.indexOf(o)===-1?(t.push(t[s-1]),e.push(o)):(t.push(s),e.push(wn))}if(t.push(s),a===Hw)return e.push(A==="strict"?Fo:Yi);if(a===sh||a===Dw)return e.push(wn);if(a===Pw)return r>=131072&&r<=196605||r>=196608&&r<=262141?e.push(Yi):e.push(wn);e.push(a)}),[t,e,i]},Ba=function(n,A,e,t){var i=t[e];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=e;r<=t.length;){r++;var s=t[r];if(s===A)return!0;if(s!==Zt)break}if(i===Zt)for(var r=e;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=e;o<=t.length;){o++;var s=t[o];if(s===A)return!0;if(s!==Zt)break}if(a!==Zt)break}return!1},Hl=function(n,A){for(var e=n;e>=0;){var t=A[e];if(t===Zt)e--;else return t}return 0},Kw=function(n,A,e,t,i){if(e[t]===0)return GA;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return GA;var s=r-1,a=r+1,o=A[r],c=s>=0?A[s]:0,l=A[a];if(o===nh&&l===ih)return GA;if(Ro.indexOf(o)!==-1)return ah;if(Ro.indexOf(l)!==-1||oh.indexOf(l)!==-1)return GA;if(Hl(r,A)===rh)return Dr;if(Io.get(n[r])===Uo||(o===Rr||o===Lr)&&Io.get(n[a])===Uo||o===bl||l===bl||o===Ql||[Zt,So,yi].indexOf(o)===-1&&l===Ql||[Ir,Ei,Lw,kn,zn].indexOf(l)!==-1||Hl(r,A)===xi||Ba(ga,xi,r,A)||Ba([Ir,Ei],Fo,r,A)||Ba(Il,Il,r,A))return GA;if(o===Zt)return Dr;if(o===ga||l===ga)return GA;if(l===Mo||o===Mo)return Dr;if([So,yi,Fo].indexOf(l)!==-1||o===Rw||c===bo&&Gw.indexOf(o)!==-1||o===zn&&l===bo||l===Rl||St.indexOf(l)!==-1&&o===We||St.indexOf(o)!==-1&&l===We||o===bi&&[Yi,Rr,Lr].indexOf(l)!==-1||[Yi,Rr,Lr].indexOf(o)!==-1&&l===Ti||St.indexOf(o)!==-1&&Ll.indexOf(l)!==-1||Ll.indexOf(o)!==-1&&St.indexOf(l)!==-1||[bi,Ti].indexOf(o)!==-1&&(l===We||[xi,yi].indexOf(l)!==-1&&A[a+1]===We)||[xi,yi].indexOf(o)!==-1&&l===We||o===We&&[We,zn,kn].indexOf(l)!==-1)return GA;if([We,zn,kn,Ir,Ei].indexOf(l)!==-1)for(var u=r;u>=0;){var h=A[u];if(h===We)return GA;if([zn,kn].indexOf(h)!==-1)u--;else break}if([bi,Ti].indexOf(l)!==-1)for(var u=[Ir,Ei].indexOf(o)!==-1?s:r;u>=0;){var h=A[u];if(h===We)return GA;if([zn,kn].indexOf(h)!==-1)u--;else break}if(Qo===o&&[Qo,is,yo,To].indexOf(l)!==-1||[is,yo].indexOf(o)!==-1&&[is,rs].indexOf(l)!==-1||[rs,To].indexOf(o)!==-1&&l===rs||Dl.indexOf(o)!==-1&&[Rl,Ti].indexOf(l)!==-1||Dl.indexOf(l)!==-1&&o===bi||St.indexOf(o)!==-1&&St.indexOf(l)!==-1||o===kn&&St.indexOf(l)!==-1||St.concat(We).indexOf(o)!==-1&&l===xi&&Nw.indexOf(n[a])===-1||St.concat(We).indexOf(l)!==-1&&o===Ei)return GA;if(o===ma&&l===ma){for(var d=e[r],g=1;d>0&&(d--,A[d]===ma);)g++;if(g%2!==0)return GA}return o===Rr&&l===Lr?GA:Dr},kw=function(n,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=Vw(n,A.lineBreak),t=e[0],i=e[1],r=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(i=i.map(function(a){return[We,wn,sh].indexOf(a)!==-1?Yi:a}));var s=A.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},zw=function(){function n(A,e,t,i){this.codePoints=A,this.required=e===ah,this.start=t,this.end=i}return n.prototype.slice=function(){return de.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),Ww=function(n,A){var e=Ss(n),t=kw(e,A),i=t[0],r=t[1],s=t[2],a=e.length,o=0,c=0;return{next:function(){if(c>=a)return{done:!0,value:null};for(var l=GA;c<a&&(l=Kw(e,r,i,++c,s))===GA;);if(l!==GA||c===a){var u=new zw(e,l,o,c);return o=c,{value:u,done:!1}}return{done:!0,value:null}}}},Xw=1<<0,Yw=1<<1,er=1<<2,Pl=1<<3,hs=10,Nl=47,Hi=92,Jw=9,Zw=32,Hr=34,Ui=61,qw=35,jw=36,$w=37,Pr=39,Nr=40,Si=41,A_=95,Oe=45,e_=33,t_=60,n_=62,i_=64,r_=91,s_=93,a_=61,o_=123,Or=63,c_=125,Ol=124,l_=126,u_=128,Gl=65533,wa=42,Cn=43,h_=44,f_=58,d_=59,Ji=46,p_=0,g_=8,m_=11,B_=14,w_=31,__=127,pt=-1,ch=48,lh=97,uh=101,v_=102,C_=117,E_=122,hh=65,fh=69,dh=70,x_=85,U_=90,be=function(n){return n>=ch&&n<=57},S_=function(n){return n>=55296&&n<=57343},Wn=function(n){return be(n)||n>=hh&&n<=dh||n>=lh&&n<=v_},M_=function(n){return n>=lh&&n<=E_},F_=function(n){return n>=hh&&n<=U_},y_=function(n){return M_(n)||F_(n)},T_=function(n){return n>=u_},Gr=function(n){return n===hs||n===Jw||n===Zw},fs=function(n){return y_(n)||T_(n)||n===A_},Vl=function(n){return fs(n)||be(n)||n===Oe},b_=function(n){return n>=p_&&n<=g_||n===m_||n>=B_&&n<=w_||n===__},Yt=function(n,A){return n!==Hi?!1:A!==hs},Vr=function(n,A,e){return n===Oe?fs(A)||Yt(A,e):fs(n)?!0:!!(n===Hi&&Yt(n,A))},_a=function(n,A,e){return n===Cn||n===Oe?be(A)?!0:A===Ji&&be(e):be(n===Ji?A:n)},Q_=function(n){var A=0,e=1;(n[A]===Cn||n[A]===Oe)&&(n[A]===Oe&&(e=-1),A++);for(var t=[];be(n[A]);)t.push(n[A++]);var i=t.length?parseInt(de.apply(void 0,t),10):0;n[A]===Ji&&A++;for(var r=[];be(n[A]);)r.push(n[A++]);var s=r.length,a=s?parseInt(de.apply(void 0,r),10):0;(n[A]===fh||n[A]===uh)&&A++;var o=1;(n[A]===Cn||n[A]===Oe)&&(n[A]===Oe&&(o=-1),A++);for(var c=[];be(n[A]);)c.push(n[A++]);var l=c.length?parseInt(de.apply(void 0,c),10):0;return e*(i+a*Math.pow(10,-s))*Math.pow(10,o*l)},I_={type:2},R_={type:3},L_={type:4},D_={type:13},H_={type:8},P_={type:21},N_={type:9},O_={type:10},G_={type:11},V_={type:12},K_={type:14},Kr={type:23},k_={type:1},z_={type:25},W_={type:24},X_={type:26},Y_={type:27},J_={type:28},Z_={type:29},q_={type:31},Lo={type:32},ph=function(){function n(){this._value=[]}return n.prototype.write=function(A){this._value=this._value.concat(Ss(A))},n.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==Lo;)A.push(e),e=this.consumeToken();return A},n.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case Hr:return this.consumeStringToken(Hr);case qw:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Vl(e)||Yt(t,i)){var r=Vr(e,t,i)?Yw:Xw,s=this.consumeName();return{type:5,value:s,flags:r}}break;case jw:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),D_;break;case Pr:return this.consumeStringToken(Pr);case Nr:return I_;case Si:return R_;case wa:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),K_;break;case Cn:if(_a(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case h_:return L_;case Oe:var a=A,o=this.peekCodePoint(0),c=this.peekCodePoint(1);if(_a(a,o,c))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(Vr(a,o,c))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(o===Oe&&c===n_)return this.consumeCodePoint(),this.consumeCodePoint(),W_;break;case Ji:if(_a(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Nl:if(this.peekCodePoint(0)===wa)for(this.consumeCodePoint();;){var l=this.consumeCodePoint();if(l===wa&&(l=this.consumeCodePoint(),l===Nl))return this.consumeToken();if(l===pt)return this.consumeToken()}break;case f_:return X_;case d_:return Y_;case t_:if(this.peekCodePoint(0)===e_&&this.peekCodePoint(1)===Oe&&this.peekCodePoint(2)===Oe)return this.consumeCodePoint(),this.consumeCodePoint(),z_;break;case i_:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),d=this.peekCodePoint(2);if(Vr(u,h,d)){var s=this.consumeName();return{type:7,value:s}}break;case r_:return J_;case Hi:if(Yt(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case s_:return Z_;case a_:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),H_;break;case o_:return G_;case c_:return V_;case C_:case x_:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===Cn&&(Wn(m)||m===Or)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case Ol:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),N_;if(this.peekCodePoint(0)===Ol)return this.consumeCodePoint(),P_;break;case l_:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),O_;break;case pt:return Lo}return Gr(A)?(this.consumeWhiteSpace(),q_):be(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):fs(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:de(A)}},n.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},n.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},n.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},n.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();Wn(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===Or&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(de.apply(void 0,A.map(function(o){return o===Or?ch:o})),16),r=parseInt(de.apply(void 0,A.map(function(o){return o===Or?dh:o})),16);return{type:30,start:i,end:r}}var s=parseInt(de.apply(void 0,A),16);if(this.peekCodePoint(0)===Oe&&Wn(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var a=[];Wn(e)&&a.length<6;)a.push(e),e=this.consumeCodePoint();var r=parseInt(de.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===Nr?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Nr?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},n.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===pt)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===Pr||e===Hr){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===pt||this.peekCodePoint(0)===Si)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),Kr)}for(;;){var i=this.consumeCodePoint();if(i===pt||i===Si)return{type:22,value:de.apply(void 0,A)};if(Gr(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===pt||this.peekCodePoint(0)===Si?(this.consumeCodePoint(),{type:22,value:de.apply(void 0,A)}):(this.consumeBadUrlRemnants(),Kr);if(i===Hr||i===Pr||i===Nr||b_(i))return this.consumeBadUrlRemnants(),Kr;if(i===Hi)if(Yt(i,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Kr;else A.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;Gr(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===Si||A===pt)return;Yt(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(A){for(var e=5e4,t="";A>0;){var i=Math.min(e,A);t+=de.apply(void 0,this._value.splice(0,i)),A-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(A){var e="",t=0;do{var i=this._value[t];if(i===pt||i===void 0||i===A)return e+=this.consumeStringSlice(t),{type:0,value:e};if(i===hs)return this._value.splice(0,t),k_;if(i===Hi){var r=this._value[t+1];r!==pt&&r!==void 0&&(r===hs?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):Yt(i,r)&&(e+=this.consumeStringSlice(t),e+=de(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var A=[],e=er,t=this.peekCodePoint(0);for((t===Cn||t===Oe)&&A.push(this.consumeCodePoint());be(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===Ji&&be(i))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Pl;be(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===fh||t===uh)&&((i===Cn||i===Oe)&&be(r)||be(i)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Pl;be(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[Q_(A),e]},n.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(Vr(i,r,s)){var a=this.consumeName();return{type:15,number:e,flags:t,unit:a}}return i===$w?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(Wn(A)){for(var e=de(A);Wn(this.peekCodePoint(0))&&e.length<6;)e+=de(this.consumeCodePoint());Gr(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return t===0||S_(t)||t>1114111?Gl:t}return A===pt?Gl:A},n.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(Vl(e))A+=de(e);else if(Yt(e,this.peekCodePoint(0)))A+=de(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}},n}(),gh=function(){function n(A){this._tokens=A}return n.create=function(A){var e=new ph;return e.write(A),new n(e.read())},n.parseValue=function(A){return n.create(A).parseComponentValue()},n.parseValues=function(A){return n.create(A).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}},n.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},n.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===32||$_(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?Lo:A},n.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},n}(),tr=function(n){return n.type===15},gi=function(n){return n.type===17},te=function(n){return n.type===20},j_=function(n){return n.type===0},Do=function(n,A){return te(n)&&n.value===A},mh=function(n){return n.type!==31},fi=function(n){return n.type!==31&&n.type!==4},Bt=function(n){var A=[],e=[];return n.forEach(function(t){if(t.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}t.type!==31&&e.push(t)}),e.length&&A.push(e),A},$_=function(n,A){return A===11&&n.type===12||A===28&&n.type===29?!0:A===2&&n.type===3},sn=function(n){return n.type===17||n.type===15},me=function(n){return n.type===16||sn(n)},Bh=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},Me={type:17,number:0,flags:er},ac={type:16,number:50,flags:er},qt={type:16,number:100,flags:er},Qi=function(n,A,e){var t=n[0],i=n[1];return[ie(t,A),ie(typeof i<"u"?i:t,e)]},ie=function(n,A){if(n.type===16)return n.number/100*A;if(tr(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},wh="deg",_h="grad",vh="rad",Ch="turn",Ms={name:"angle",parse:function(n,A){if(A.type===15)switch(A.unit){case wh:return Math.PI*A.number/180;case _h:return Math.PI/200*A.number;case vh:return A.number;case Ch:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},Eh=function(n){return n.type===15&&(n.unit===wh||n.unit===_h||n.unit===vh||n.unit===Ch)},xh=function(n){var A=n.filter(te).map(function(e){return e.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Me,Me];case"to top":case"bottom":return et(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Me,qt];case"to right":case"left":return et(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[qt,qt];case"to bottom":case"top":return et(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[qt,Me];case"to left":case"right":return et(270)}return 0},et=function(n){return Math.PI*n/180},en={name:"color",parse:function(n,A){if(A.type===18){var e=Av[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(n,A.values)}if(A.type===5){if(A.value.length===3){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3);return jt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(A.value.length===4){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3),s=A.value.substring(3,4);return jt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(A.value.length===6){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6);return jt(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(A.value.length===8){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6),s=A.value.substring(6,8);return jt(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(A.type===20){var a=It[A.value.toUpperCase()];if(typeof a<"u")return a}return It.TRANSPARENT}},tn=function(n){return(255&n)===0},xe=function(n){var A=255&n,e=255&n>>8,t=255&n>>16,i=255&n>>24;return A<255?"rgba("+i+","+t+","+e+","+A/255+")":"rgb("+i+","+t+","+e+")"},jt=function(n,A,e,t){return(n<<24|A<<16|e<<8|Math.round(t*255)<<0)>>>0},Kl=function(n,A){if(n.type===17)return n.number;if(n.type===16){var e=A===3?1:255;return A===3?n.number/100*e:Math.round(n.number/100*e)}return 0},kl=function(n,A){var e=A.filter(fi);if(e.length===3){var t=e.map(Kl),i=t[0],r=t[1],s=t[2];return jt(i,r,s,1)}if(e.length===4){var a=e.map(Kl),i=a[0],r=a[1],s=a[2],o=a[3];return jt(i,r,s,o)}return 0};function va(n,A,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-n)*e*6+n:e<1/2?A:e<2/3?(A-n)*6*(2/3-e)+n:n}var zl=function(n,A){var e=A.filter(fi),t=e[0],i=e[1],r=e[2],s=e[3],a=(t.type===17?et(t.number):Ms.parse(n,t))/(Math.PI*2),o=me(i)?i.number/100:0,c=me(r)?r.number/100:0,l=typeof s<"u"&&me(s)?ie(s,1):1;if(o===0)return jt(c*255,c*255,c*255,1);var u=c<=.5?c*(o+1):c+o-c*o,h=c*2-u,d=va(h,u,a+1/3),g=va(h,u,a),m=va(h,u,a-1/3);return jt(d*255,g*255,m*255,l)},Av={hsl:zl,hsla:zl,rgb:kl,rgba:kl},Pi=function(n,A){return en.parse(n,gh.create(A).parseComponentValue())},It={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},ev={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(te(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},tv={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Fs=function(n,A){var e=en.parse(n,A[0]),t=A[1];return t&&me(t)?{color:e,stop:t}:{color:e,stop:null}},Wl=function(n,A){var e=n[0],t=n[n.length-1];e.stop===null&&(e.stop=Me),t.stop===null&&(t.stop=qt);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=ie(a,A);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var c=null,s=0;s<i.length;s++){var l=i[s];if(l===null)c===null&&(c=s);else if(c!==null){for(var u=s-c,h=i[c-1],d=(l-h)/(u+1),g=1;g<=u;g++)i[c+g-1]=d*g;c=null}}return n.map(function(m,p){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[p]/A),0)}})},nv=function(n,A,e){var t=A/2,i=e/2,r=ie(n[0],A)-t,s=i-ie(n[1],e);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},iv=function(n,A,e){var t=typeof n=="number"?n:nv(n,A,e),i=Math.abs(A*Math.sin(t))+Math.abs(e*Math.cos(t)),r=A/2,s=e/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,c=Math.cos(t-Math.PI/2)*a;return[i,r-c,r+c,s-o,s+o]},ot=function(n,A){return Math.sqrt(n*n+A*A)},Xl=function(n,A,e,t,i){var r=[[0,0],[0,A],[n,0],[n,A]];return r.reduce(function(s,a){var o=a[0],c=a[1],l=ot(e-o,t-c);return(i?l<s.optimumDistance:l>s.optimumDistance)?{optimumCorner:a,optimumDistance:l}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},rv=function(n,A,e,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.min(Math.abs(A),Math.abs(A-t)),s=Math.min(Math.abs(e),Math.abs(e-i)));break;case 2:if(n.shape===0)r=s=Math.min(ot(A,e),ot(A,e-i),ot(A-t,e),ot(A-t,e-i));else if(n.shape===1){var a=Math.min(Math.abs(e),Math.abs(e-i))/Math.min(Math.abs(A),Math.abs(A-t)),o=Xl(t,i,A,e,!0),c=o[0],l=o[1];r=ot(c-A,(l-e)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.max(Math.abs(A),Math.abs(A-t)),s=Math.max(Math.abs(e),Math.abs(e-i)));break;case 3:if(n.shape===0)r=s=Math.max(ot(A,e),ot(A,e-i),ot(A-t,e),ot(A-t,e-i));else if(n.shape===1){var a=Math.max(Math.abs(e),Math.abs(e-i))/Math.max(Math.abs(A),Math.abs(A-t)),u=Xl(t,i,A,e,!1),c=u[0],l=u[1];r=ot(c-A,(l-e)/a),s=a*r}break}return Array.isArray(n.size)&&(r=ie(n.size[0],t),s=n.size.length===2?ie(n.size[1],i):r),[r,s]},sv=function(n,A){var e=et(180),t=[];return Bt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){e=xh(i);return}else if(Eh(s)){e=Ms.parse(n,s);return}}var a=Fs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},kr=function(n,A){var e=et(180),t=[];return Bt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){e=xh(i);return}else if(Eh(s)){e=(Ms.parse(n,s)+et(270))%et(360);return}}var a=Fs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},av=function(n,A){var e=et(180),t=[],i=1,r=0,s=3,a=[];return Bt(A).forEach(function(o,c){var l=o[0];if(c===0){if(te(l)&&l.value==="linear"){i=1;return}else if(te(l)&&l.value==="radial"){i=2;return}}if(l.type===18){if(l.name==="from"){var u=en.parse(n,l.values[0]);t.push({stop:Me,color:u})}else if(l.name==="to"){var u=en.parse(n,l.values[0]);t.push({stop:qt,color:u})}else if(l.name==="color-stop"){var h=l.values.filter(fi);if(h.length===2){var u=en.parse(n,h[1]),d=h[0];gi(d)&&t.push({stop:{type:16,number:d.number*100,flags:d.flags},color:u})}}}}),i===1?{angle:(e+et(180))%et(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},Uh="closest-side",Sh="farthest-side",Mh="closest-corner",Fh="farthest-corner",yh="circle",Th="ellipse",bh="cover",Qh="contain",ov=function(n,A){var e=0,t=3,i=[],r=[];return Bt(A).forEach(function(s,a){var o=!0;if(a===0){var c=!1;o=s.reduce(function(u,h){if(c)if(te(h))switch(h.value){case"center":return r.push(ac),u;case"top":case"left":return r.push(Me),u;case"right":case"bottom":return r.push(qt),u}else(me(h)||sn(h))&&r.push(h);else if(te(h))switch(h.value){case yh:return e=0,!1;case Th:return e=1,!1;case"at":return c=!0,!1;case Uh:return t=0,!1;case bh:case Sh:return t=1,!1;case Qh:case Mh:return t=2,!1;case Fh:return t=3,!1}else if(sn(h)||me(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var l=Fs(n,s);i.push(l)}}),{size:t,shape:e,stops:i,position:r,type:2}},zr=function(n,A){var e=0,t=3,i=[],r=[];return Bt(A).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(l,u){if(te(u))switch(u.value){case"center":return r.push(ac),!1;case"top":case"left":return r.push(Me),!1;case"right":case"bottom":return r.push(qt),!1}else if(me(u)||sn(u))return r.push(u),!1;return l},o):a===1&&(o=s.reduce(function(l,u){if(te(u))switch(u.value){case yh:return e=0,!1;case Th:return e=1,!1;case Qh:case Uh:return t=0,!1;case Sh:return t=1,!1;case Mh:return t=2,!1;case bh:case Fh:return t=3,!1}else if(sn(u)||me(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return l},o)),o){var c=Fs(n,s);i.push(c)}}),{size:t,shape:e,stops:i,position:r,type:2}},cv=function(n){return n.type===1},lv=function(n){return n.type===2},oc={name:"image",parse:function(n,A){if(A.type===22){var e={url:A.value,type:0};return n.cache.addImage(A.value),e}if(A.type===18){var t=Ih[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(n,A.values)}throw new Error("Unsupported image type "+A.type)}};function uv(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!Ih[n.name])}var Ih={"linear-gradient":sv,"-moz-linear-gradient":kr,"-ms-linear-gradient":kr,"-o-linear-gradient":kr,"-webkit-linear-gradient":kr,"radial-gradient":ov,"-moz-radial-gradient":zr,"-ms-radial-gradient":zr,"-o-radial-gradient":zr,"-webkit-radial-gradient":zr,"-webkit-gradient":av},hv={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(function(t){return fi(t)&&uv(t)}).map(function(t){return oc.parse(n,t)})}},fv={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(te(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},dv={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,A){return Bt(A).map(function(e){return e.filter(me)}).map(Bh)}},pv={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,A){return Bt(A).map(function(e){return e.filter(te).map(function(t){return t.value}).join(" ")}).map(gv)}},gv=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},ai;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(ai||(ai={}));var mv={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,A){return Bt(A).map(function(e){return e.filter(Bv)})}},Bv=function(n){return te(n)||me(n)},ys=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},wv=ys("top"),_v=ys("right"),vv=ys("bottom"),Cv=ys("left"),Ts=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return Bh(e.filter(me))}}},Ev=Ts("top-left"),xv=Ts("top-right"),Uv=Ts("bottom-right"),Sv=Ts("bottom-left"),bs=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Mv=bs("top"),Fv=bs("right"),yv=bs("bottom"),Tv=bs("left"),Qs=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return tr(e)?e.number:0}}},bv=Qs("top"),Qv=Qs("right"),Iv=Qs("bottom"),Rv=Qs("left"),Lv={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Dv={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},Hv={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,A){return A.filter(te).reduce(function(e,t){return e|Pv(t.value)},0)}},Pv=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Nv={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Ov={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},ds;(function(n){n.NORMAL="normal",n.STRICT="strict"})(ds||(ds={}));var Gv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"strict":return ds.STRICT;case"normal":default:return ds.NORMAL}}},Vv={name:"line-height",initialValue:"normal",prefix:!1,type:4},Yl=function(n,A){return te(n)&&n.value==="normal"?1.2*A:n.type===17?A*n.number:me(n)?ie(n,A):A},Kv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,A){return A.type===20&&A.value==="none"?null:oc.parse(n,A)}},kv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},Ho={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Is=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},zv=Is("top"),Wv=Is("right"),Xv=Is("bottom"),Yv=Is("left"),Jv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,A){return A.filter(te).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Zv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},Rs=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},qv=Rs("top"),jv=Rs("right"),$v=Rs("bottom"),AC=Rs("left"),eC={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},tC={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},nC={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&Do(A[0],"none")?[]:Bt(A).map(function(e){for(var t={color:It.TRANSPARENT,offsetX:Me,offsetY:Me,blur:Me},i=0,r=0;r<e.length;r++){var s=e[r];sn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=en.parse(n,s)}return t})}},iC={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},rC={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var e=oC[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}return null}},sC=function(n){var A=n.filter(function(e){return e.type===17}).map(function(e){return e.number});return A.length===6?A:null},aC=function(n){var A=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),e=A[0],t=A[1];A[2],A[3];var i=A[4],r=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],a=A[13];return A[14],A[15],A.length===16?[e,t,i,r,s,a]:null},oC={matrix:sC,matrix3d:aC},Jl={type:16,number:50,flags:er},cC=[Jl,Jl],lC={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,A){var e=A.filter(me);return e.length!==2?cC:[e[0],e[1]]}},uC={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Ni;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(Ni||(Ni={}));var hC={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-all":return Ni.BREAK_ALL;case"keep-all":return Ni.KEEP_ALL;case"normal":default:return Ni.NORMAL}}},fC={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,A){if(A.type===20)return{auto:!0,order:0};if(gi(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Rh={name:"time",parse:function(n,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},dC={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,A){return gi(A)?A.number:1}},pC={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},gC={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,A){return A.filter(te).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},mC={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,A){var e=[],t=[];return A.forEach(function(i){switch(i.type){case 20:case 0:e.push(i.value);break;case 17:e.push(i.number.toString());break;case 4:t.push(e.join(" ")),e.length=0;break}}),e.length&&t.push(e.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},BC={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},wC={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,A){if(gi(A))return A.number;if(te(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},_C={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.filter(te).map(function(e){return e.value})}},vC={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},_e=function(n,A){return(n&A)!==0},CC={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A}},EC={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;for(var t=[],i=A.filter(mh),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&gi(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},xC={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return[];for(var e=[],t=A.filter(mh),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(te(r)&&r.value!=="none"){var a=s&&gi(s)?s.number:0;e.push({counter:r.value,reset:a})}}return e}},UC={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,A){return A.filter(tr).map(function(e){return Rh.parse(n,e)})}},SC={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;var t=[],i=A.filter(j_);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},Zl=function(n,A,e){if(!n)return"";var t=n[Math.min(A,n.length-1)];return t?e?t.open:t.close:""},MC={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&Do(A[0],"none")?[]:Bt(A).map(function(e){for(var t={color:255,offsetX:Me,offsetY:Me,blur:Me,spread:Me,inset:!1},i=0,r=0;r<e.length;r++){var s=e[r];Do(s,"inset")?t.inset=!0:sn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=en.parse(n,s)}return t})}},FC={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,A){var e=[0,1,2],t=[];return A.filter(te).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),e.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},yC={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},TC={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,A){return tr(A)?A.number:0}},bC=function(){function n(A,e){var t,i;this.animationDuration=uA(A,UC,e.animationDuration),this.backgroundClip=uA(A,ev,e.backgroundClip),this.backgroundColor=uA(A,tv,e.backgroundColor),this.backgroundImage=uA(A,hv,e.backgroundImage),this.backgroundOrigin=uA(A,fv,e.backgroundOrigin),this.backgroundPosition=uA(A,dv,e.backgroundPosition),this.backgroundRepeat=uA(A,pv,e.backgroundRepeat),this.backgroundSize=uA(A,mv,e.backgroundSize),this.borderTopColor=uA(A,wv,e.borderTopColor),this.borderRightColor=uA(A,_v,e.borderRightColor),this.borderBottomColor=uA(A,vv,e.borderBottomColor),this.borderLeftColor=uA(A,Cv,e.borderLeftColor),this.borderTopLeftRadius=uA(A,Ev,e.borderTopLeftRadius),this.borderTopRightRadius=uA(A,xv,e.borderTopRightRadius),this.borderBottomRightRadius=uA(A,Uv,e.borderBottomRightRadius),this.borderBottomLeftRadius=uA(A,Sv,e.borderBottomLeftRadius),this.borderTopStyle=uA(A,Mv,e.borderTopStyle),this.borderRightStyle=uA(A,Fv,e.borderRightStyle),this.borderBottomStyle=uA(A,yv,e.borderBottomStyle),this.borderLeftStyle=uA(A,Tv,e.borderLeftStyle),this.borderTopWidth=uA(A,bv,e.borderTopWidth),this.borderRightWidth=uA(A,Qv,e.borderRightWidth),this.borderBottomWidth=uA(A,Iv,e.borderBottomWidth),this.borderLeftWidth=uA(A,Rv,e.borderLeftWidth),this.boxShadow=uA(A,MC,e.boxShadow),this.color=uA(A,Lv,e.color),this.direction=uA(A,Dv,e.direction),this.display=uA(A,Hv,e.display),this.float=uA(A,Nv,e.cssFloat),this.fontFamily=uA(A,mC,e.fontFamily),this.fontSize=uA(A,BC,e.fontSize),this.fontStyle=uA(A,vC,e.fontStyle),this.fontVariant=uA(A,_C,e.fontVariant),this.fontWeight=uA(A,wC,e.fontWeight),this.letterSpacing=uA(A,Ov,e.letterSpacing),this.lineBreak=uA(A,Gv,e.lineBreak),this.lineHeight=uA(A,Vv,e.lineHeight),this.listStyleImage=uA(A,Kv,e.listStyleImage),this.listStylePosition=uA(A,kv,e.listStylePosition),this.listStyleType=uA(A,Ho,e.listStyleType),this.marginTop=uA(A,zv,e.marginTop),this.marginRight=uA(A,Wv,e.marginRight),this.marginBottom=uA(A,Xv,e.marginBottom),this.marginLeft=uA(A,Yv,e.marginLeft),this.opacity=uA(A,dC,e.opacity);var r=uA(A,Jv,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=uA(A,Zv,e.overflowWrap),this.paddingTop=uA(A,qv,e.paddingTop),this.paddingRight=uA(A,jv,e.paddingRight),this.paddingBottom=uA(A,$v,e.paddingBottom),this.paddingLeft=uA(A,AC,e.paddingLeft),this.paintOrder=uA(A,FC,e.paintOrder),this.position=uA(A,tC,e.position),this.textAlign=uA(A,eC,e.textAlign),this.textDecorationColor=uA(A,pC,(t=e.textDecorationColor)!==null&&t!==void 0?t:e.color),this.textDecorationLine=uA(A,gC,(i=e.textDecorationLine)!==null&&i!==void 0?i:e.textDecoration),this.textShadow=uA(A,nC,e.textShadow),this.textTransform=uA(A,iC,e.textTransform),this.transform=uA(A,rC,e.transform),this.transformOrigin=uA(A,lC,e.transformOrigin),this.visibility=uA(A,uC,e.visibility),this.webkitTextStrokeColor=uA(A,yC,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=uA(A,TC,e.webkitTextStrokeWidth),this.wordBreak=uA(A,hC,e.wordBreak),this.zIndex=uA(A,fC,e.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return tn(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return _e(this.display,4)||_e(this.display,33554432)||_e(this.display,268435456)||_e(this.display,536870912)||_e(this.display,67108864)||_e(this.display,134217728)},n}(),QC=function(){function n(A,e){this.content=uA(A,CC,e.content),this.quotes=uA(A,SC,e.quotes)}return n}(),ql=function(){function n(A,e){this.counterIncrement=uA(A,EC,e.counterIncrement),this.counterReset=uA(A,xC,e.counterReset)}return n}(),uA=function(n,A,e){var t=new ph,i=e!==null&&typeof e<"u"?e.toString():A.initialValue;t.write(i);var r=new gh(t.read());switch(A.type){case 2:var s=r.parseComponentValue();return A.parse(n,te(s)?s.value:A.initialValue);case 0:return A.parse(n,r.parseComponentValue());case 1:return A.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(A.format){case"angle":return Ms.parse(n,r.parseComponentValue());case"color":return en.parse(n,r.parseComponentValue());case"image":return oc.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return sn(a)?a:Me;case"length-percentage":var o=r.parseComponentValue();return me(o)?o:Me;case"time":return Rh.parse(n,r.parseComponentValue())}break}},IC="data-html2canvas-debug",RC=function(n){var A=n.getAttribute(IC);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Po=function(n,A){var e=RC(n);return e===1||A===e},wt=function(){function n(A,e){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Po(e,3))debugger;this.styles=new bC(A,window.getComputedStyle(e,null)),Go(e)&&(this.styles.animationDuration.some(function(t){return t>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=Us(this.context,e),Po(e,4)&&(this.flags|=16)}return n}(),LC="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ii=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Wr=0;Wr<jl.length;Wr++)Ii[jl.charCodeAt(Wr)]=Wr;var DC=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),l=Array.isArray(c)?c:new Uint8Array(c);for(t=0;t<e;t+=4)r=Ii[n.charCodeAt(t)],s=Ii[n.charCodeAt(t+1)],a=Ii[n.charCodeAt(t+2)],o=Ii[n.charCodeAt(t+3)],l[i++]=r<<2|s>>4,l[i++]=(s&15)<<4|a>>2,l[i++]=(a&3)<<6|o&63;return c},HC=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},PC=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},xn=5,cc=6+5,Ca=2,NC=cc-xn,Lh=65536>>xn,OC=1<<xn,Ea=OC-1,GC=1024>>xn,VC=Lh+GC,KC=VC,kC=32,zC=KC+kC,WC=65536>>cc,XC=1<<NC,YC=XC-1,$l=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},JC=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},ZC=function(n,A){var e=DC(n),t=Array.isArray(e)?PC(e):new Uint32Array(e),i=Array.isArray(e)?HC(e):new Uint16Array(e),r=24,s=$l(i,r/2,t[4]/2),a=t[5]===2?$l(i,(r+t[4])/2):JC(t,Math.ceil((r+t[4])/4));return new qC(t[0],t[1],t[2],t[3],s,a)},qC=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>xn],e=(e<<Ca)+(A&Ea),this.data[e];if(A<=65535)return e=this.index[Lh+(A-55296>>xn)],e=(e<<Ca)+(A&Ea),this.data[e];if(A<this.highStart)return e=zC-WC+(A>>cc),e=this.index[e],e+=A>>xn&YC,e=this.index[e],e=(e<<Ca)+(A&Ea),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),Au="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",jC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xr=0;Xr<Au.length;Xr++)jC[Au.charCodeAt(Xr)]=Xr;var $C=1,xa=2,Ua=3,eu=4,tu=5,AE=7,nu=8,Sa=9,Ma=10,iu=11,ru=12,su=13,au=14,Fa=15,eE=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},tE=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},nE=ZC(LC),qe="×",ya="÷",iE=function(n){return nE.get(n)},rE=function(n,A,e){var t=e-2,i=A[t],r=A[e-1],s=A[e];if(r===xa&&s===Ua)return qe;if(r===xa||r===Ua||r===eu||s===xa||s===Ua||s===eu)return ya;if(r===nu&&[nu,Sa,iu,ru].indexOf(s)!==-1||(r===iu||r===Sa)&&(s===Sa||s===Ma)||(r===ru||r===Ma)&&s===Ma||s===su||s===tu||s===AE||r===$C)return qe;if(r===su&&s===au){for(;i===tu;)i=A[--t];if(i===au)return qe}if(r===Fa&&s===Fa){for(var a=0;i===Fa;)a++,i=A[--t];if(a%2===0)return qe}return ya},sE=function(n){var A=eE(n),e=A.length,t=0,i=0,r=A.map(iE);return{next:function(){if(t>=e)return{done:!0,value:null};for(var s=qe;t<e&&(s=rE(A,r,++t))===qe;);if(s!==qe||t===e){var a=tE.apply(null,A.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},aE=function(n){for(var A=sE(n),e=[],t;!(t=A.next()).done;)t.value&&e.push(t.value.slice());return e},oE=function(n){var A=123;if(n.createRange){var e=n.createRange();if(e.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=A+"px",t.style.display="block",n.body.appendChild(t),e.selectNode(t);var i=e.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===A)return!0}}return!1},cE=function(n){var A=n.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",n.body.appendChild(A);var e=n.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=A.firstChild,i=Ss(t.data).map(function(o){return de(o)}),r=0,s={},a=i.every(function(o,c){e.setStart(t,r),e.setEnd(t,r+o.length);var l=e.getBoundingClientRect();r+=o.length;var u=l.x>s.x||l.y>s.y;return s=l,c===0?!0:u});return n.body.removeChild(A),a},lE=function(){return typeof new Image().crossOrigin<"u"},uE=function(){return typeof new XMLHttpRequest().responseType=="string"},hE=function(n){var A=new Image,e=n.createElement("canvas"),t=e.getContext("2d");if(!t)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},ou=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},fE=function(n){var A=n.createElement("canvas"),e=100;A.width=e,A.height=e;var t=A.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,e,e);var i=new Image,r=A.toDataURL();i.src=r;var s=No(e,e,0,0,i);return t.fillStyle="red",t.fillRect(0,0,e,e),cu(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,e,e).data;t.fillStyle="red",t.fillRect(0,0,e,e);var c=n.createElement("div");return c.style.backgroundImage="url("+r+")",c.style.height=e+"px",ou(o)?cu(No(e,e,0,0,c)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),ou(t.getImageData(0,0,e,e).data)}).catch(function(){return!1})},No=function(n,A,e,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",A.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",e.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},cu=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},Se={get SUPPORT_RANGE_BOUNDS(){var n=oE(document);return Object.defineProperty(Se,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=Se.SUPPORT_RANGE_BOUNDS&&cE(document);return Object.defineProperty(Se,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=hE(document);return Object.defineProperty(Se,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?fE(document):Promise.resolve(!1);return Object.defineProperty(Se,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=lE();return Object.defineProperty(Se,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=uE();return Object.defineProperty(Se,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Se,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Se,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},Oi=function(){function n(A,e){this.text=A,this.bounds=e}return n}(),dE=function(n,A,e,t){var i=mE(A,e),r=[],s=0;return i.forEach(function(a){if(e.textDecorationLine.length||a.trim().length>0)if(Se.SUPPORT_RANGE_BOUNDS){var o=lu(t,s,a.length).getClientRects();if(o.length>1){var c=lc(a),l=0;c.forEach(function(h){r.push(new Oi(h,Ht.fromDOMRectList(n,lu(t,l+s,h.length).getClientRects()))),l+=h.length})}else r.push(new Oi(a,Ht.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new Oi(a,pE(n,t))),t=u}else Se.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},pE=function(n,A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var i=A.parentNode;if(i){i.replaceChild(t,A);var r=Us(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return Ht.EMPTY},lu=function(n,A,e){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,A),i.setEnd(n,A+e),i},lc=function(n){if(Se.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(n)).map(function(e){return e.segment})}return aE(n)},gE=function(n,A){if(Se.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return wE(n,A)},mE=function(n,A){return A.letterSpacing!==0?lc(n):gE(n,A)},BE=[32,160,4961,65792,65793,4153,4241],wE=function(n,A){for(var e=Ww(n,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=Ss(s),o="";a.forEach(function(c){BE.indexOf(c)===-1?o+=de(c):(o.length&&t.push(o),t.push(de(c)),o="")}),o.length&&t.push(o)}};!(i=e.next()).done;)r();return t},_E=function(){function n(A,e,t){this.text=vE(e.data,t.textTransform),this.textBounds=dE(A,this.text,t,e)}return n}(),vE=function(n,A){switch(A){case 1:return n.toLowerCase();case 3:return n.replace(CE,EE);case 2:return n.toUpperCase();default:return n}},CE=/(^|\s|:|-|\(|\))([a-z])/g,EE=function(n,A,e){return n.length>0?A+e.toUpperCase():n},Dh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return A}(wt),Hh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return A}(wt),Ph=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=new XMLSerializer,s=Us(e,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return A}(wt),Nh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(wt),Oo=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return A}(wt),xE=[{type:15,flags:0,unit:"px",number:3}],UE=[{type:16,flags:0,number:50}],SE=function(n){return n.width>n.height?new Ht(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new Ht(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},ME=function(n){var A=n.type===FE?new Array(n.value.length+1).join("•"):n.value;return A.length===0?n.placeholder||"":A},ps="checkbox",gs="radio",FE="password",uu=707406591,uc=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=ME(t),(i.type===ps||i.type===gs)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=SE(i.bounds)),i.type){case ps:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=xE;break;case gs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=UE;break}return i}return A}(wt),Oh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return A}(wt),Gh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(wt),Vh=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=kh(e,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?Pi(e,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):It.TRANSPARENT,s=t.contentWindow.document.body?Pi(e,getComputedStyle(t.contentWindow.document.body).backgroundColor):It.TRANSPARENT;i.backgroundColor=tn(r)?tn(s)?i.styles.backgroundColor:s:r}}catch{}return i}return A}(wt),yE=["OL","UL","MENU"],ss=function(n,A,e,t){for(var i=A.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,zh(i)&&i.data.trim().length>0)e.textNodes.push(new _E(n,i,e.styles));else if(ti(i))if(Jh(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return ss(n,a,e,t)});else{var s=Kh(n,i);s.styles.isVisible()&&(TE(i,s,t)?s.flags|=4:bE(s.styles)&&(s.flags|=2),yE.indexOf(i.tagName)!==-1&&(s.flags|=8),e.elements.push(s),i.slot,i.shadowRoot?ss(n,i.shadowRoot,s,t):!ms(i)&&!Wh(i)&&!Bs(i)&&ss(n,i,s,t))}},Kh=function(n,A){return Vo(A)?new Dh(n,A):Xh(A)?new Hh(n,A):Wh(A)?new Ph(n,A):QE(A)?new Nh(n,A):IE(A)?new Oo(n,A):RE(A)?new uc(n,A):Bs(A)?new Oh(n,A):ms(A)?new Gh(n,A):Yh(A)?new Vh(n,A):new wt(n,A)},kh=function(n,A){var e=Kh(n,A);return e.flags|=4,ss(n,A,e,e),e},TE=function(n,A,e){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||hc(n)&&e.styles.isTransparent()},bE=function(n){return n.isPositioned()||n.isFloating()},zh=function(n){return n.nodeType===Node.TEXT_NODE},ti=function(n){return n.nodeType===Node.ELEMENT_NODE},Go=function(n){return ti(n)&&typeof n.style<"u"&&!as(n)},as=function(n){return typeof n.className=="object"},QE=function(n){return n.tagName==="LI"},IE=function(n){return n.tagName==="OL"},RE=function(n){return n.tagName==="INPUT"},LE=function(n){return n.tagName==="HTML"},Wh=function(n){return n.tagName==="svg"},hc=function(n){return n.tagName==="BODY"},Xh=function(n){return n.tagName==="CANVAS"},hu=function(n){return n.tagName==="VIDEO"},Vo=function(n){return n.tagName==="IMG"},Yh=function(n){return n.tagName==="IFRAME"},fu=function(n){return n.tagName==="STYLE"},DE=function(n){return n.tagName==="SCRIPT"},ms=function(n){return n.tagName==="TEXTAREA"},Bs=function(n){return n.tagName==="SELECT"},Jh=function(n){return n.tagName==="SLOT"},du=function(n){return n.tagName.indexOf("-")>0},HE=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},n.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},n.prototype.pop=function(A){var e=this;A.forEach(function(t){return e.counters[t].pop()})},n.prototype.parse=function(A){var e=this,t=A.counterIncrement,i=A.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=e.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=e.counters[a.counter];s.push(a.counter),o||(o=e.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),pu={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},gu={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},PE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},NE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Xn=function(n,A,e,t,i,r){return n<A||n>e?Zi(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},Zh=function(n,A,e,t){var i="";do e||n--,i=t(n)+i,n/=A;while(n*A>=A);return i},fe=function(n,A,e,t,i){var r=e-A+1;return(n<0?"-":"")+(Zh(Math.abs(n),r,t,function(s){return de(Math.floor(s%r)+A)})+i)},pn=function(n,A,e){e===void 0&&(e=". ");var t=A.length;return Zh(Math.abs(n),t,!1,function(i){return A[Math.floor(i%t)]})+e},qn=1<<0,zt=1<<1,Wt=1<<2,Ri=1<<3,Mt=function(n,A,e,t,i,r){if(n<-9999||n>9999)return Zi(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return A[0]+a;for(var o=0;s>0&&o<=4;o++){var c=s%10;c===0&&_e(r,qn)&&a!==""?a=A[c]+a:c>1||c===1&&o===0||c===1&&o===1&&_e(r,zt)||c===1&&o===1&&_e(r,Wt)&&n>100||c===1&&o>1&&_e(r,Ri)?a=A[c]+(o>0?e[o-1]:"")+a:c===1&&o>0&&(a=e[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},mu="十百千萬",Bu="拾佰仟萬",wu="マイナス",Ta="마이너스",Zi=function(n,A,e){var t=e?". ":"",i=e?"、":"",r=e?", ":"",s=e?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=fe(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return pn(n,"〇一二三四五六七八九",i);case 6:return Xn(n,1,3999,pu,3,t).toLowerCase();case 7:return Xn(n,1,3999,pu,3,t);case 8:return fe(n,945,969,!1,t);case 9:return fe(n,97,122,!1,t);case 10:return fe(n,65,90,!1,t);case 11:return fe(n,1632,1641,!0,t);case 12:case 49:return Xn(n,1,9999,gu,3,t);case 35:return Xn(n,1,9999,gu,3,t).toLowerCase();case 13:return fe(n,2534,2543,!0,t);case 14:case 30:return fe(n,6112,6121,!0,t);case 15:return pn(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return pn(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return Mt(n,"零一二三四五六七八九",mu,"負",i,zt|Wt|Ri);case 47:return Mt(n,"零壹貳參肆伍陸柒捌玖",Bu,"負",i,qn|zt|Wt|Ri);case 42:return Mt(n,"零一二三四五六七八九",mu,"负",i,zt|Wt|Ri);case 41:return Mt(n,"零壹贰叁肆伍陆柒捌玖",Bu,"负",i,qn|zt|Wt|Ri);case 26:return Mt(n,"〇一二三四五六七八九","十百千万",wu,i,0);case 25:return Mt(n,"零壱弐参四伍六七八九","拾百千万",wu,i,qn|zt|Wt);case 31:return Mt(n,"영일이삼사오육칠팔구","십백천만",Ta,r,qn|zt|Wt);case 33:return Mt(n,"零一二三四五六七八九","十百千萬",Ta,r,0);case 32:return Mt(n,"零壹貳參四五六七八九","拾百千",Ta,r,qn|zt|Wt);case 18:return fe(n,2406,2415,!0,t);case 20:return Xn(n,1,19999,NE,3,t);case 21:return fe(n,2790,2799,!0,t);case 22:return fe(n,2662,2671,!0,t);case 22:return Xn(n,1,10999,PE,3,t);case 23:return pn(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return pn(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return fe(n,3302,3311,!0,t);case 28:return pn(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return pn(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return fe(n,3792,3801,!0,t);case 37:return fe(n,6160,6169,!0,t);case 38:return fe(n,4160,4169,!0,t);case 39:return fe(n,2918,2927,!0,t);case 40:return fe(n,1776,1785,!0,t);case 43:return fe(n,3046,3055,!0,t);case 44:return fe(n,3174,3183,!0,t);case 45:return fe(n,3664,3673,!0,t);case 46:return fe(n,3872,3881,!0,t);case 3:default:return fe(n,48,57,!0,t)}},qh="data-html2canvas-ignore",_u=function(){function n(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new HE,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(A,e){var t=this,i=OE(A,e);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=A.defaultView.pageXOffset,s=A.defaultView.pageYOffset,a=i.contentWindow,o=a.document,c=KE(i).then(function(){return He(t,void 0,void 0,function(){var l,u;return Te(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(XE),a&&(a.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==e.top||a.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-e.left,a.scrollY-e.top,0,0))),l=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,VE(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof l=="function"?[2,Promise.resolve().then(function(){return l(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(zE(document.doctype)+"<html></html>"),WE(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),c},n.prototype.createElementClone=function(A){if(Po(A,2))debugger;if(Xh(A))return this.createCanvasClone(A);if(hu(A))return this.createVideoClone(A);if(fu(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return Vo(e)&&(Vo(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),du(e)?this.createCustomElementClone(e):e},n.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return ba(A.style,e),e},n.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=A.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return A.cloneNode(!1)},n.prototype.createCanvasClone=function(A){var e;if(this.options.inlineImages&&A.ownerDocument){var t=A.ownerDocument.createElement("img");try{return t.src=A.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}var i=A.cloneNode(!1);try{i.width=A.width,i.height=A.height;var r=A.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{var a=(e=A.getContext("webgl2"))!==null&&e!==void 0?e:A.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A)}s.drawImage(A,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return i},n.prototype.createVideoClone=function(A){var e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;var t=e.getContext("2d");try{return t&&(t.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||t.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}var i=A.ownerDocument.createElement("canvas");return i.width=A.offsetWidth,i.height=A.offsetHeight,i},n.prototype.appendChildNode=function(A,e,t){(!ti(e)||!DE(e)&&!e.hasAttribute(qh)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!ti(e)||!fu(e))&&A.appendChild(this.cloneNode(e,t))},n.prototype.cloneChildNodes=function(A,e,t){for(var i=this,r=A.shadowRoot?A.shadowRoot.firstChild:A.firstChild;r;r=r.nextSibling)if(ti(r)&&Jh(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(e,a,t)})}else this.appendChildNode(e,r,t)},n.prototype.cloneNode=function(A,e){if(zh(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&ti(A)&&(Go(A)||as(A))){var i=this.createElementClone(A);i.style.transitionProperty="none";var r=t.getComputedStyle(A),s=t.getComputedStyle(A,":before"),a=t.getComputedStyle(A,":after");this.referenceElement===A&&Go(i)&&(this.clonedReferenceElement=i),hc(i)&&ZE(i);var o=this.counters.parse(new ql(this.context,r)),c=this.resolvePseudoContent(A,i,s,Gi.BEFORE);du(A)&&(e=!0),hu(A)||this.cloneChildNodes(A,i,e),c&&i.insertBefore(c,i.firstChild);var l=this.resolvePseudoContent(A,i,a,Gi.AFTER);return l&&i.appendChild(l),this.counters.pop(o),(r&&(this.options.copyStyles||as(A))&&!Yh(A)||e)&&ba(r,i),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([i,A.scrollLeft,A.scrollTop]),(ms(A)||Bs(A))&&(ms(i)||Bs(i))&&(i.value=A.value),i}return A.cloneNode(!1)},n.prototype.resolvePseudoContent=function(A,e,t,i){var r=this;if(t){var s=t.content,a=e.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new ql(this.context,t));var o=new QC(this.context,t),c=a.createElement("html2canvaspseudoelement");ba(t,c),o.content.forEach(function(u){if(u.type===0)c.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",c.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var d=u.values.filter(te);d.length&&c.appendChild(a.createTextNode(A.getAttribute(d[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(fi),m=g[0],p=g[1];if(m&&te(m)){var f=r.counters.getCounterValue(m.value),E=p&&te(p)?Ho.parse(r.context,p.value):3;c.appendChild(a.createTextNode(Zi(f,E,!1)))}}else if(u.name==="counters"){var x=u.values.filter(fi),m=x[0],C=x[1],p=x[2];if(m&&te(m)){var y=r.counters.getCounterValues(m.value),U=p&&te(p)?Ho.parse(r.context,p.value):3,M=C&&C.type===0?C.value:"",Q=y.map(function(T){return Zi(T,U,!1)}).join(M);c.appendChild(a.createTextNode(Q))}}}else if(u.type===20)switch(u.value){case"open-quote":c.appendChild(a.createTextNode(Zl(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":c.appendChild(a.createTextNode(Zl(o.quotes,--r.quoteDepth,!1)));break;default:c.appendChild(a.createTextNode(u.value))}}),c.className=Ko+" "+ko;var l=i===Gi.BEFORE?" "+Ko:" "+ko;return as(e)?e.className.baseValue+=l:e.className+=l,c}}},n.destroy=function(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1},n}(),Gi;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(Gi||(Gi={}));var OE=function(n,A){var e=n.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=A.width.toString(),e.height=A.height.toString(),e.scrolling="no",e.setAttribute(qh,"true"),n.body.appendChild(e),e},GE=function(n){return new Promise(function(A){if(n.complete){A();return}if(!n.src){A();return}n.onload=A,n.onerror=A})},VE=function(n){return Promise.all([].slice.call(n.images,0).map(GE))},KE=function(n){return new Promise(function(A,e){var t=n.contentWindow;if(!t)return e("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),A(n))},50)}})},kE=["all","d","content"],ba=function(n,A){for(var e=n.length-1;e>=0;e--){var t=n.item(e);kE.indexOf(t)===-1&&A.style.setProperty(t,n.getPropertyValue(t))}return A},zE=function(n){var A="";return n&&(A+="<!DOCTYPE ",n.name&&(A+=n.name),n.internalSubset&&(A+=n.internalSubset),n.publicId&&(A+='"'+n.publicId+'"'),n.systemId&&(A+='"'+n.systemId+'"'),A+=">"),A},WE=function(n,A,e){n&&n.defaultView&&(A!==n.defaultView.pageXOffset||e!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(A,e)},XE=function(n){var A=n[0],e=n[1],t=n[2];A.scrollLeft=e,A.scrollTop=t},YE=":before",JE=":after",Ko="___html2canvas___pseudoelement_before",ko="___html2canvas___pseudoelement_after",vu=`{
    content: "" !important;
    display: none !important;
}`,ZE=function(n){qE(n,"."+Ko+YE+vu+`
         .`+ko+JE+vu)},qE=function(n,A){var e=n.ownerDocument;if(e){var t=e.createElement("style");t.textContent=A,n.appendChild(t)}},jh=function(){function n(){}return n.getOrigin=function(A){var e=n._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},n.isSameOrigin=function(A){return n.getOrigin(A)===n._origin},n.setContext=function(A){n._link=A.document.createElement("a"),n._origin=n.getOrigin(A.location.href)},n._origin="about:blank",n}(),jE=function(){function n(A,e){this.context=A,this._options=e,this._cache={}}return n.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Ia(A)||tx(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},n.prototype.match=function(A){return this._cache[A]},n.prototype.loadImage=function(A){return He(this,void 0,void 0,function(){var e,t,i,r,s=this;return Te(this,function(a){switch(a.label){case 0:return e=jh.isSameOrigin(A),t=!Qa(A)&&this._options.useCORS===!0&&Se.SUPPORT_CORS_IMAGES&&!e,i=!Qa(A)&&!e&&!Ia(A)&&typeof this._options.proxy=="string"&&Se.SUPPORT_CORS_XHR&&!t,!e&&this._options.allowTaint===!1&&!Qa(A)&&!Ia(A)&&!i&&!t?[2]:(r=A,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+A.substring(0,256)),[4,new Promise(function(o,c){var l=new Image;l.onload=function(){return o(l)},l.onerror=c,(nx(r)||t)&&(l.crossOrigin="anonymous"),l.src=r,l.complete===!0&&setTimeout(function(){return o(l)},500),s._options.imageTimeout>0&&setTimeout(function(){return c("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(A){return typeof this._cache[A]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(A){var e=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=A.substring(0,256);return new Promise(function(r,s){var a=Se.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var c=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+c+"url="+encodeURIComponent(A)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),e._options.imageTimeout){var l=e._options.imageTimeout;o.timeout=l,o.ontimeout=function(){return s("Timed out ("+l+"ms) proxying "+i)}}o.send()})},n}(),$E=/^data:image\/svg\+xml/i,Ax=/^data:image\/.*;base64,/i,ex=/^data:image\/.*/i,tx=function(n){return Se.SUPPORT_SVG_DRAWING||!ix(n)},Qa=function(n){return ex.test(n)},nx=function(n){return Ax.test(n)},Ia=function(n){return n.substr(0,4)==="blob"},ix=function(n){return n.substr(-3).toLowerCase()==="svg"||$E.test(n)},lA=function(){function n(A,e){this.type=0,this.x=A,this.y=e}return n.prototype.add=function(A,e){return new n(this.x+A,this.y+e)},n}(),Yn=function(n,A,e){return new lA(n.x+(A.x-n.x)*e,n.y+(A.y-n.y)*e)},Yr=function(){function n(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i}return n.prototype.subdivide=function(A,e){var t=Yn(this.start,this.startControl,A),i=Yn(this.startControl,this.endControl,A),r=Yn(this.endControl,this.end,A),s=Yn(t,i,A),a=Yn(i,r,A),o=Yn(s,a,A);return e?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(A,e){return new n(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),je=function(n){return n.type===1},rx=function(){function n(A){var e=A.styles,t=A.bounds,i=Qi(e.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=Qi(e.borderTopRightRadius,t.width,t.height),o=a[0],c=a[1],l=Qi(e.borderBottomRightRadius,t.width,t.height),u=l[0],h=l[1],d=Qi(e.borderBottomLeftRadius,t.width,t.height),g=d[0],m=d[1],p=[];p.push((r+o)/t.width),p.push((g+u)/t.width),p.push((s+m)/t.height),p.push((c+h)/t.height);var f=Math.max.apply(Math,p);f>1&&(r/=f,s/=f,o/=f,c/=f,u/=f,h/=f,g/=f,m/=f);var E=t.width-o,x=t.height-h,C=t.width-u,y=t.height-m,U=e.borderTopWidth,M=e.borderRightWidth,Q=e.borderBottomWidth,v=e.borderLeftWidth,_=ie(e.paddingTop,A.bounds.width),T=ie(e.paddingRight,A.bounds.width),G=ie(e.paddingBottom,A.bounds.width),L=ie(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?ae(t.left+v/3,t.top+U/3,r-v/3,s-U/3,ZA.TOP_LEFT):new lA(t.left+v/3,t.top+U/3),this.topRightBorderDoubleOuterBox=r>0||s>0?ae(t.left+E,t.top+U/3,o-M/3,c-U/3,ZA.TOP_RIGHT):new lA(t.left+t.width-M/3,t.top+U/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?ae(t.left+C,t.top+x,u-M/3,h-Q/3,ZA.BOTTOM_RIGHT):new lA(t.left+t.width-M/3,t.top+t.height-Q/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?ae(t.left+v/3,t.top+y,g-v/3,m-Q/3,ZA.BOTTOM_LEFT):new lA(t.left+v/3,t.top+t.height-Q/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?ae(t.left+v*2/3,t.top+U*2/3,r-v*2/3,s-U*2/3,ZA.TOP_LEFT):new lA(t.left+v*2/3,t.top+U*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?ae(t.left+E,t.top+U*2/3,o-M*2/3,c-U*2/3,ZA.TOP_RIGHT):new lA(t.left+t.width-M*2/3,t.top+U*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?ae(t.left+C,t.top+x,u-M*2/3,h-Q*2/3,ZA.BOTTOM_RIGHT):new lA(t.left+t.width-M*2/3,t.top+t.height-Q*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?ae(t.left+v*2/3,t.top+y,g-v*2/3,m-Q*2/3,ZA.BOTTOM_LEFT):new lA(t.left+v*2/3,t.top+t.height-Q*2/3),this.topLeftBorderStroke=r>0||s>0?ae(t.left+v/2,t.top+U/2,r-v/2,s-U/2,ZA.TOP_LEFT):new lA(t.left+v/2,t.top+U/2),this.topRightBorderStroke=r>0||s>0?ae(t.left+E,t.top+U/2,o-M/2,c-U/2,ZA.TOP_RIGHT):new lA(t.left+t.width-M/2,t.top+U/2),this.bottomRightBorderStroke=u>0||h>0?ae(t.left+C,t.top+x,u-M/2,h-Q/2,ZA.BOTTOM_RIGHT):new lA(t.left+t.width-M/2,t.top+t.height-Q/2),this.bottomLeftBorderStroke=g>0||m>0?ae(t.left+v/2,t.top+y,g-v/2,m-Q/2,ZA.BOTTOM_LEFT):new lA(t.left+v/2,t.top+t.height-Q/2),this.topLeftBorderBox=r>0||s>0?ae(t.left,t.top,r,s,ZA.TOP_LEFT):new lA(t.left,t.top),this.topRightBorderBox=o>0||c>0?ae(t.left+E,t.top,o,c,ZA.TOP_RIGHT):new lA(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?ae(t.left+C,t.top+x,u,h,ZA.BOTTOM_RIGHT):new lA(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||m>0?ae(t.left,t.top+y,g,m,ZA.BOTTOM_LEFT):new lA(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?ae(t.left+v,t.top+U,Math.max(0,r-v),Math.max(0,s-U),ZA.TOP_LEFT):new lA(t.left+v,t.top+U),this.topRightPaddingBox=o>0||c>0?ae(t.left+Math.min(E,t.width-M),t.top+U,E>t.width+M?0:Math.max(0,o-M),Math.max(0,c-U),ZA.TOP_RIGHT):new lA(t.left+t.width-M,t.top+U),this.bottomRightPaddingBox=u>0||h>0?ae(t.left+Math.min(C,t.width-v),t.top+Math.min(x,t.height-Q),Math.max(0,u-M),Math.max(0,h-Q),ZA.BOTTOM_RIGHT):new lA(t.left+t.width-M,t.top+t.height-Q),this.bottomLeftPaddingBox=g>0||m>0?ae(t.left+v,t.top+Math.min(y,t.height-Q),Math.max(0,g-v),Math.max(0,m-Q),ZA.BOTTOM_LEFT):new lA(t.left+v,t.top+t.height-Q),this.topLeftContentBox=r>0||s>0?ae(t.left+v+L,t.top+U+_,Math.max(0,r-(v+L)),Math.max(0,s-(U+_)),ZA.TOP_LEFT):new lA(t.left+v+L,t.top+U+_),this.topRightContentBox=o>0||c>0?ae(t.left+Math.min(E,t.width+v+L),t.top+U+_,E>t.width+v+L?0:o-v+L,c-(U+_),ZA.TOP_RIGHT):new lA(t.left+t.width-(M+T),t.top+U+_),this.bottomRightContentBox=u>0||h>0?ae(t.left+Math.min(C,t.width-(v+L)),t.top+Math.min(x,t.height+U+_),Math.max(0,u-(M+T)),h-(Q+G),ZA.BOTTOM_RIGHT):new lA(t.left+t.width-(M+T),t.top+t.height-(Q+G)),this.bottomLeftContentBox=g>0||m>0?ae(t.left+v+L,t.top+y,Math.max(0,g-(v+L)),m-(Q+G),ZA.BOTTOM_LEFT):new lA(t.left+v+L,t.top+t.height-(Q+G))}return n}(),ZA;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(ZA||(ZA={}));var ae=function(n,A,e,t,i){var r=4*((Math.sqrt(2)-1)/3),s=e*r,a=t*r,o=n+e,c=A+t;switch(i){case ZA.TOP_LEFT:return new Yr(new lA(n,c),new lA(n,c-a),new lA(o-s,A),new lA(o,A));case ZA.TOP_RIGHT:return new Yr(new lA(n,A),new lA(n+s,A),new lA(o,c-a),new lA(o,c));case ZA.BOTTOM_RIGHT:return new Yr(new lA(o,A),new lA(o,A+a),new lA(n+s,c),new lA(n,c));case ZA.BOTTOM_LEFT:default:return new Yr(new lA(o,c),new lA(o-s,c),new lA(n,A+a),new lA(n,A))}},ws=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},sx=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},_s=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},ax=function(){function n(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6}return n}(),Jr=function(){function n(A,e){this.path=A,this.target=e,this.type=1}return n}(),ox=function(){function n(A){this.opacity=A,this.type=2,this.target=6}return n}(),cx=function(n){return n.type===0},$h=function(n){return n.type===1},lx=function(n){return n.type===2},Cu=function(n,A){return n.length===A.length?n.some(function(e,t){return e===A[t]}):!1},ux=function(n,A,e,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(A,e);case 1:return r.add(A+t,e);case 2:return r.add(A+t,e+i);case 3:return r.add(A,e+i)}return r})},Af=function(){function n(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),ef=function(){function n(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new rx(this.container),this.container.styles.opacity<1&&this.effects.push(new ox(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new ax(t,i,r))}if(this.container.styles.overflowX!==0){var s=ws(this.curves),a=_s(this.curves);Cu(s,a)?this.effects.push(new Jr(s,6)):(this.effects.push(new Jr(s,2)),this.effects.push(new Jr(a,4)))}}return n.prototype.getEffects=function(A){for(var e=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!$h(o)});if(e||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),e=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=ws(t.curves),a=_s(t.curves);Cu(s,a)||i.unshift(new Jr(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return _e(o.target,A)})},n}(),zo=function(n,A,e,t){n.container.elements.forEach(function(i){var r=_e(i.flags,4),s=_e(i.flags,2),a=new ef(i,n);_e(i.styles.display,2048)&&t.push(a);var o=_e(i.flags,8)?[]:t;if(r||s){var c=r||i.styles.isPositioned()?e:A,l=new Af(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;c.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),c.negativeZIndex.splice(h,0,l)}else if(u>0){var d=0;c.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(d=m+1,!1):d>0}),c.positiveZIndex.splice(d,0,l)}else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)}else i.styles.isFloating()?c.nonPositionedFloats.push(l):c.nonPositionedInlineLevel.push(l);zo(a,l,r?l:e,o)}else i.styles.isInlineLevel()?A.inlineLevel.push(a):A.nonInlineLevel.push(a),zo(a,A,e,o);_e(i.flags,8)&&tf(i,o)})},tf=function(n,A){for(var e=n instanceof Oo?n.start:1,t=n instanceof Oo?n.reversed:!1,i=0;i<A.length;i++){var r=A[i];r.container instanceof Nh&&typeof r.container.value=="number"&&r.container.value!==0&&(e=r.container.value),r.listValue=Zi(e,r.container.styles.listStyleType,!0),e+=t?-1:1}},hx=function(n){var A=new ef(n,null),e=new Af(A),t=[];return zo(A,e,e,t),tf(A.container,t),e},Eu=function(n,A){switch(A){case 0:return tt(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return tt(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return tt(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return tt(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},fx=function(n,A){switch(A){case 0:return tt(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return tt(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return tt(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return tt(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},dx=function(n,A){switch(A){case 0:return tt(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return tt(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return tt(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return tt(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},px=function(n,A){switch(A){case 0:return Zr(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return Zr(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return Zr(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return Zr(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},Zr=function(n,A){var e=[];return je(n)?e.push(n.subdivide(.5,!1)):e.push(n),je(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},tt=function(n,A,e,t){var i=[];return je(n)?i.push(n.subdivide(.5,!1)):i.push(n),je(e)?i.push(e.subdivide(.5,!0)):i.push(e),je(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),je(A)?i.push(A.subdivide(.5,!1).reverse()):i.push(A),i},nf=function(n){var A=n.bounds,e=n.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},vs=function(n){var A=n.styles,e=n.bounds,t=ie(A.paddingLeft,e.width),i=ie(A.paddingRight,e.width),r=ie(A.paddingTop,e.width),s=ie(A.paddingBottom,e.width);return e.add(t+A.borderLeftWidth,r+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+t+i),-(A.borderTopWidth+A.borderBottomWidth+r+s))},gx=function(n,A){return n===0?A.bounds:n===2?vs(A):nf(A)},mx=function(n,A){return n===0?A.bounds:n===2?vs(A):nf(A)},Ra=function(n,A,e){var t=gx(jn(n.styles.backgroundOrigin,A),n),i=mx(jn(n.styles.backgroundClip,A),n),r=Bx(jn(n.styles.backgroundSize,A),e,t),s=r[0],a=r[1],o=Qi(jn(n.styles.backgroundPosition,A),t.width-s,t.height-a),c=wx(jn(n.styles.backgroundRepeat,A),o,r,t,i),l=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[c,l,u,s,a]},Jn=function(n){return te(n)&&n.value===ai.AUTO},qr=function(n){return typeof n=="number"},Bx=function(n,A,e){var t=A[0],i=A[1],r=A[2],s=n[0],a=n[1];if(!s)return[0,0];if(me(s)&&a&&me(a))return[ie(s,e.width),ie(a,e.height)];var o=qr(r);if(te(s)&&(s.value===ai.CONTAIN||s.value===ai.COVER)){if(qr(r)){var c=e.width/e.height;return c<r!=(s.value===ai.COVER)?[e.width,e.width/r]:[e.height*r,e.height]}return[e.width,e.height]}var l=qr(t),u=qr(i),h=l||u;if(Jn(s)&&(!a||Jn(a))){if(l&&u)return[t,i];if(!o&&!h)return[e.width,e.height];if(h&&o){var d=l?t:i*r,g=u?i:t/r;return[d,g]}var m=l?t:e.width,p=u?i:e.height;return[m,p]}if(o){var f=0,E=0;return me(s)?f=ie(s,e.width):me(a)&&(E=ie(a,e.height)),Jn(s)?f=E*r:(!a||Jn(a))&&(E=f/r),[f,E]}var x=null,C=null;if(me(s)?x=ie(s,e.width):a&&me(a)&&(C=ie(a,e.height)),x!==null&&(!a||Jn(a))&&(C=l&&u?x/t*i:e.height),C!==null&&Jn(s)&&(x=l&&u?C/i*t:e.width),x!==null&&C!==null)return[x,C];throw new Error("Unable to calculate background-size for element")},jn=function(n,A){var e=n[A];return typeof e>"u"?n[0]:e},wx=function(n,A,e,t,i){var r=A[0],s=A[1],a=e[0],o=e[1];switch(n){case 2:return[new lA(Math.round(t.left),Math.round(t.top+s)),new lA(Math.round(t.left+t.width),Math.round(t.top+s)),new lA(Math.round(t.left+t.width),Math.round(o+t.top+s)),new lA(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new lA(Math.round(t.left+r),Math.round(t.top)),new lA(Math.round(t.left+r+a),Math.round(t.top)),new lA(Math.round(t.left+r+a),Math.round(t.height+t.top)),new lA(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new lA(Math.round(t.left+r),Math.round(t.top+s)),new lA(Math.round(t.left+r+a),Math.round(t.top+s)),new lA(Math.round(t.left+r+a),Math.round(t.top+s+o)),new lA(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new lA(Math.round(i.left),Math.round(i.top)),new lA(Math.round(i.left+i.width),Math.round(i.top)),new lA(Math.round(i.left+i.width),Math.round(i.height+i.top)),new lA(Math.round(i.left),Math.round(i.height+i.top))]}},_x="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",xu="Hidden Text",vx=function(){function n(A){this._data={},this._document=A}return n.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=_x,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(xu)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(xu)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(A,e){var t=A+" "+e;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},n}(),rf=function(){function n(A,e){this.context=A,this.options=e}return n}(),Cx=1e4,Ex=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new vx(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return A.prototype.applyEffects=function(e){for(var t=this;this._activeEffects.length;)this.popEffect();e.forEach(function(i){return t.applyEffect(i)})},A.prototype.applyEffect=function(e){this.ctx.save(),lx(e)&&(this.ctx.globalAlpha=e.opacity),cx(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),$h(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(e){return He(this,void 0,void 0,function(){var t;return Te(this,function(i){switch(i.label){case 0:return t=e.element.container.styles,t.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(e){return He(this,void 0,void 0,function(){return Te(this,function(t){switch(t.label){case 0:if(_e(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(e)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(e,t,i){var r=this;if(t===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+i);else{var s=lc(e.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,e.bounds.top+i),a+r.ctx.measureText(o).width},e.bounds.left)}},A.prototype.createFontStyle=function(e){var t=e.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=Fx(e.fontFamily).join(", "),r=tr(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,t,e.fontWeight,r,i].join(" "),i,r]},A.prototype.renderTextNode=function(e,t){return He(this,void 0,void 0,function(){var i,r,s,a,o,c,l,u,h=this;return Te(this,function(d){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),c=o.baseline,l=o.middle,u=t.paintOrder,e.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=xe(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,c);var p=t.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=xe(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,c)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=xe(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+c),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+l),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=xe(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+c)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(e,t,i){if(i&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var r=vs(e),s=_s(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,e.intrinsicWidth,e.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(e){return He(this,void 0,void 0,function(){var t,i,r,s,a,o,E,E,c,l,u,h,C,d,g,y,m,p,f,E,x,C,y;return Te(this,function(U){switch(U.label){case 0:this.applyEffects(e.getEffects(4)),t=e.container,i=e.curves,r=t.styles,s=0,a=t.textNodes,U.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:U.sent(),U.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof Dh))return[3,8];U.label=5;case 5:return U.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return E=U.sent(),this.renderReplacedElement(t,i,E),[3,8];case 7:return U.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof Hh&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof Ph))return[3,12];U.label=9;case 9:return U.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return E=U.sent(),this.renderReplacedElement(t,i,E),[3,12];case 11:return U.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof Vh&&t.tree?(c=new A(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,c.render(t.tree)]):[3,14];case 13:l=U.sent(),t.width&&t.height&&this.ctx.drawImage(l,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),U.label=14;case 14:if(t instanceof uc&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===ps?t.checked&&(this.ctx.save(),this.path([new lA(t.bounds.left+u*.39363,t.bounds.top+u*.79),new lA(t.bounds.left+u*.16,t.bounds.top+u*.5549),new lA(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new lA(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new lA(t.bounds.left+u*.72983,t.bounds.top+u*.23),new lA(t.bounds.left+u*.84,t.bounds.top+u*.34085),new lA(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=xe(uu),this.ctx.fill(),this.ctx.restore()):t.type===gs&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=xe(uu),this.ctx.fill(),this.ctx.restore())),xx(t)&&t.value.length){switch(h=this.createFontStyle(r),C=h[0],d=h[1],g=this.fontMetrics.getMetrics(C,d).baseline,this.ctx.font=C,this.ctx.fillStyle=xe(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Sx(t.styles.textAlign),y=vs(t),m=0,t.styles.textAlign){case 1:m+=y.width/2;break;case 2:m+=y.width;break}p=y.add(m,0,0,-y.height/2+1),this.ctx.save(),this.path([new lA(y.left,y.top),new lA(y.left+y.width,y.top),new lA(y.left+y.width,y.top+y.height),new lA(y.left,y.top+y.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Oi(t.value,p),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!_e(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(f=t.styles.listStyleImage,f.type!==0)return[3,18];E=void 0,x=f.url,U.label=15;case 15:return U.trys.push([15,17,,18]),[4,this.context.cache.match(x)];case 16:return E=U.sent(),this.ctx.drawImage(E,t.bounds.left-(E.width+10),t.bounds.top),[3,18];case 17:return U.sent(),this.context.logger.error("Error loading list-style-image "+x),[3,18];case 18:return[3,20];case 19:e.listValue&&t.styles.listStyleType!==-1&&(C=this.createFontStyle(r)[0],this.ctx.font=C,this.ctx.fillStyle=xe(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",y=new Ht(t.bounds.left,t.bounds.top+ie(t.styles.paddingTop,t.bounds.width),t.bounds.width,Yl(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Oi(e.listValue,y),r.letterSpacing,Yl(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),U.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(e){return He(this,void 0,void 0,function(){var t,i,f,r,s,f,a,o,f,c,l,f,u,h,f,d,g,f,m,p,f;return Te(this,function(E){switch(E.label){case 0:if(_e(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:E.sent(),t=0,i=e.negativeZIndex,E.label=2;case 2:return t<i.length?(f=i[t],[4,this.renderStack(f)]):[3,5];case 3:E.sent(),E.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:E.sent(),r=0,s=e.nonInlineLevel,E.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:E.sent(),E.label=9;case 9:return r++,[3,7];case 10:a=0,o=e.nonPositionedFloats,E.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:E.sent(),E.label=13;case 13:return a++,[3,11];case 14:c=0,l=e.nonPositionedInlineLevel,E.label=15;case 15:return c<l.length?(f=l[c],[4,this.renderStack(f)]):[3,18];case 16:E.sent(),E.label=17;case 17:return c++,[3,15];case 18:u=0,h=e.inlineLevel,E.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:E.sent(),E.label=21;case 21:return u++,[3,19];case 22:d=0,g=e.zeroOrAutoZIndexOrTransformedOrOpacity,E.label=23;case 23:return d<g.length?(f=g[d],[4,this.renderStack(f)]):[3,26];case 24:E.sent(),E.label=25;case 25:return d++,[3,23];case 26:m=0,p=e.positiveZIndex,E.label=27;case 27:return m<p.length?(f=p[m],[4,this.renderStack(f)]):[3,30];case 28:E.sent(),E.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},A.prototype.formatPath=function(e){var t=this;e.forEach(function(i,r){var s=je(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),je(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},A.prototype.renderRepeat=function(e,t,i,r){this.path(e),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},A.prototype.resizeImage=function(e,t,i){var r;if(e.width===t&&e.height===i)return e;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,i),a},A.prototype.renderBackgroundImage=function(e){return He(this,void 0,void 0,function(){var t,i,r,s,a,o;return Te(this,function(c){switch(c.label){case 0:t=e.styles.backgroundImage.length-1,i=function(l){var u,h,d,_,V,X,L,k,Q,g,_,V,X,L,k,m,p,f,E,x,C,y,U,M,Q,v,_,T,G,L,k,Y,V,X,O,tA,aA,gA,QA,OA,z,eA;return Te(this,function(pA){switch(pA.label){case 0:if(l.type!==0)return[3,5];u=void 0,h=l.url,pA.label=1;case 1:return pA.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=pA.sent(),[3,4];case 3:return pA.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(d=Ra(e,t,[u.width,u.height,u.width/u.height]),_=d[0],V=d[1],X=d[2],L=d[3],k=d[4],Q=r.ctx.createPattern(r.resizeImage(u,L,k),"repeat"),r.renderRepeat(_,Q,V,X)),[3,6];case 5:cv(l)?(g=Ra(e,t,[null,null,null]),_=g[0],V=g[1],X=g[2],L=g[3],k=g[4],m=iv(l.angle,L,k),p=m[0],f=m[1],E=m[2],x=m[3],C=m[4],y=document.createElement("canvas"),y.width=L,y.height=k,U=y.getContext("2d"),M=U.createLinearGradient(f,x,E,C),Wl(l.stops,p).forEach(function(nA){return M.addColorStop(nA.stop,xe(nA.color))}),U.fillStyle=M,U.fillRect(0,0,L,k),L>0&&k>0&&(Q=r.ctx.createPattern(y,"repeat"),r.renderRepeat(_,Q,V,X))):lv(l)&&(v=Ra(e,t,[null,null,null]),_=v[0],T=v[1],G=v[2],L=v[3],k=v[4],Y=l.position.length===0?[ac]:l.position,V=ie(Y[0],L),X=ie(Y[Y.length-1],k),O=rv(l,V,X,L,k),tA=O[0],aA=O[1],tA>0&&aA>0&&(gA=r.ctx.createRadialGradient(T+V,G+X,0,T+V,G+X,tA),Wl(l.stops,tA*2).forEach(function(nA){return gA.addColorStop(nA.stop,xe(nA.color))}),r.path(_),r.ctx.fillStyle=gA,tA!==aA?(QA=e.bounds.left+.5*e.bounds.width,OA=e.bounds.top+.5*e.bounds.height,z=aA/tA,eA=1/z,r.ctx.save(),r.ctx.translate(QA,OA),r.ctx.transform(1,0,0,z,0,0),r.ctx.translate(-QA,-OA),r.ctx.fillRect(T,eA*(G-OA)+OA,L,k*eA),r.ctx.restore()):r.ctx.fill())),pA.label=6;case 6:return t--,[2]}})},r=this,s=0,a=e.styles.backgroundImage.slice(0).reverse(),c.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:c.sent(),c.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(e,t,i){return He(this,void 0,void 0,function(){return Te(this,function(r){return this.path(Eu(i,t)),this.ctx.fillStyle=xe(e),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(e,t,i,r){return He(this,void 0,void 0,function(){var s,a;return Te(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(e,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=fx(r,i),this.path(s),this.ctx.fillStyle=xe(e),this.ctx.fill(),a=dx(r,i),this.path(a),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(e){return He(this,void 0,void 0,function(){var t,i,r,s,a,o,c,l,u=this;return Te(this,function(h){switch(h.label){case 0:return this.applyEffects(e.getEffects(2)),t=e.container.styles,i=!tn(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=Ux(jn(t.backgroundClip,0),e.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),tn(t.backgroundColor)||(this.ctx.fillStyle=xe(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(d){u.ctx.save();var g=ws(e.curves),m=d.inset?0:Cx,p=ux(g,-m+(d.inset?1:-1)*d.spread.number,(d.inset?1:-1)*d.spread.number,d.spread.number*(d.inset?-2:2),d.spread.number*(d.inset?-2:2));d.inset?(u.path(g),u.ctx.clip(),u.mask(p)):(u.mask(g),u.ctx.clip(),u.path(p)),u.ctx.shadowOffsetX=d.offsetX.number+m,u.ctx.shadowOffsetY=d.offsetY.number,u.ctx.shadowColor=xe(d.color),u.ctx.shadowBlur=d.blur.number,u.ctx.fillStyle=d.inset?xe(d.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,c=r,h.label=3;case 3:return o<c.length?(l=c[o],l.style!==0&&!tn(l.color)&&l.width>0?l.style!==2?[3,5]:[4,this.renderDashedDottedBorder(l.color,l.width,a,e.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return l.style!==3?[3,7]:[4,this.renderDashedDottedBorder(l.color,l.width,a,e.curves,3)];case 6:return h.sent(),[3,11];case 7:return l.style!==4?[3,9]:[4,this.renderDoubleBorder(l.color,l.width,a,e.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(l.color,a,e.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(e,t,i,r,s){return He(this,void 0,void 0,function(){var a,o,c,l,u,h,d,g,m,p,f,E,x,C,y,U,y,U;return Te(this,function(M){return this.ctx.save(),a=px(r,i),o=Eu(r,i),s===2&&(this.path(o),this.ctx.clip()),je(o[0])?(c=o[0].start.x,l=o[0].start.y):(c=o[0].x,l=o[0].y),je(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?d=Math.abs(c-u):d=Math.abs(l-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,m=t<3?t*2:t,s===3&&(g=t,m=t),p=!0,d<=g*2?p=!1:d<=g*2+m?(f=d/(2*g+m),g*=f,m*=f):(E=Math.floor((d+m)/(g+m)),x=(d-E*g)/(E-1),C=(d-(E+1)*g)/E,m=C<=0||Math.abs(m-x)<Math.abs(m-C)?x:C),p&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=xe(e),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(je(o[0])&&(y=o[3],U=o[0],this.ctx.beginPath(),this.formatPath([new lA(y.end.x,y.end.y),new lA(U.start.x,U.start.y)]),this.ctx.stroke()),je(o[1])&&(y=o[1],U=o[2],this.ctx.beginPath(),this.formatPath([new lA(y.end.x,y.end.y),new lA(U.start.x,U.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(e){return He(this,void 0,void 0,function(){var t;return Te(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=xe(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=hx(e),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},A}(rf),xx=function(n){return n instanceof Gh||n instanceof Oh?!0:n instanceof uc&&n.type!==gs&&n.type!==ps},Ux=function(n,A){switch(n){case 0:return ws(A);case 2:return sx(A);case 1:default:return _s(A)}},Sx=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},Mx=["-apple-system","system-ui"],Fx=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(A){return Mx.indexOf(A)===-1}):n},yx=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return A.prototype.render=function(e){return He(this,void 0,void 0,function(){var t,i;return Te(this,function(r){switch(r.label){case 0:return t=No(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,Tx(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=xe(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}(rf),Tx=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},bx=function(){function n(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,yr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,yr([this.id,this.getTime()+"ms"],A))},n.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,yr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,yr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.instances={},n}(),Qx=function(){function n(A,e){var t;this.windowBounds=e,this.instanceName="#"+n.instanceCount++,this.logger=new bx({id:this.instanceName,enabled:A.logging}),this.cache=(t=A.cache)!==null&&t!==void 0?t:new jE(this,A)}return n.instanceCount=1,n}(),Ix=function(n,A){return A===void 0&&(A={}),Rx(n,A)};typeof window<"u"&&jh.setContext(window);var Rx=function(n,A){return He(void 0,void 0,void 0,function(){var e,t,i,r,s,a,o,c,l,u,h,d,g,m,p,f,E,x,C,y,M,U,M,Q,v,_,T,G,L,k,Y,V,X,O,tA,aA,gA,QA,OA,z;return Te(this,function(eA){switch(eA.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=n.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(t=e.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(Q=A.allowTaint)!==null&&Q!==void 0?Q:!1,imageTimeout:(v=A.imageTimeout)!==null&&v!==void 0?v:15e3,proxy:A.proxy,useCORS:(_=A.useCORS)!==null&&_!==void 0?_:!1},r=xo({logging:(T=A.logging)!==null&&T!==void 0?T:!0,cache:A.cache},i),s={windowWidth:(G=A.windowWidth)!==null&&G!==void 0?G:t.innerWidth,windowHeight:(L=A.windowHeight)!==null&&L!==void 0?L:t.innerHeight,scrollX:(k=A.scrollX)!==null&&k!==void 0?k:t.pageXOffset,scrollY:(Y=A.scrollY)!==null&&Y!==void 0?Y:t.pageYOffset},a=new Ht(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new Qx(r,a),c=(V=A.foreignObjectRendering)!==null&&V!==void 0?V:!1,l={allowTaint:(X=A.allowTaint)!==null&&X!==void 0?X:!1,onclone:A.onclone,ignoreElements:A.ignoreElements,inlineImages:c,copyStyles:c},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new _u(o,n,l),h=u.clonedReferenceElement,h?[4,u.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return d=eA.sent(),g=hc(h)||LE(h)?uw(h.ownerDocument):Us(o,h),m=g.width,p=g.height,f=g.left,E=g.top,x=Lx(o,h,A.backgroundColor),C={canvas:A.canvas,backgroundColor:x,scale:(tA=(O=A.scale)!==null&&O!==void 0?O:t.devicePixelRatio)!==null&&tA!==void 0?tA:1,x:((aA=A.x)!==null&&aA!==void 0?aA:0)+f,y:((gA=A.y)!==null&&gA!==void 0?gA:0)+E,width:(QA=A.width)!==null&&QA!==void 0?QA:Math.ceil(m),height:(OA=A.height)!==null&&OA!==void 0?OA:Math.ceil(p)},c?(o.logger.debug("Document cloned, using foreign object rendering"),M=new yx(o,C),[4,M.render(h)]):[3,3];case 2:return y=eA.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+E+" with size "+m+"x"+p+" using computed rendering"),o.logger.debug("Starting DOM parsing"),U=kh(o,h),x===U.styles.backgroundColor&&(U.styles.backgroundColor=It.TRANSPARENT),o.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),M=new Ex(o,C),[4,M.render(U)];case 4:y=eA.sent(),eA.label=5;case 5:return(!((z=A.removeContainer)!==null&&z!==void 0)||z)&&(_u.destroy(d)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,y]}})})},Lx=function(n,A,e){var t=A.ownerDocument,i=t.documentElement?Pi(n,getComputedStyle(t.documentElement).backgroundColor):It.TRANSPARENT,r=t.body?Pi(n,getComputedStyle(t.body).backgroundColor):It.TRANSPARENT,s=typeof e=="string"?Pi(n,e):e===null?It.TRANSPARENT:4294967295;return A===t.documentElement?tn(i)?tn(r)?s:r:i:s};class Dx{constructor(A){this.wrap=A,this.wrapW=this.wrap.clientWidth,this.wrapH=this.wrap.clientHeight,this.setup(),this.setEvents()}setParam(){this.clock=new ip,this.prevTime=Date.now(),this.timeDelta=0,this.time=0,this.isLoaded=!1,this.isHelper=!1,this.isControl=!1}async setup(){this.setParam();const A=await this.loadCanvas(),e=new Jd(A);e.needsUpdate=!0;const t=await this.loadImage();this.isLoaded=!0,this.renderTarget=new rn(this.wrapW,this.wrapH,{minFilter:$e,magFilter:$e,format:At}),this.offscreenCamera=new El(this.wrapW,this.wrapH),this.offscreenScene=new kc,this.backObj=new W0(t,this.offscreenScene),this.renderer=new k0(this.canvas,this.wrapW,this.wrapH),this.wrap.appendChild(this.renderer.instance.domElement),this.camera=new El(this.wrapW,this.wrapH),this.scene=new kc,this.obj=new Z0(this.renderTarget.texture,e,this.scene),this.setUtility()}async loadImage(){const A=new tp;return new Promise(t=>{const i=A.load("./assets/img/disp.png",()=>{t(i)})})}async loadCanvas(){const A=document.getElementById("capture");return A.style.width=`${window.innerWidth}px`,A.style.height=`${window.innerHeight}px`,Ix(A,{scale:window.devicePixelRatio})}onMouseMove(A,e){this.isLoaded&&this.backObj.onMouseMove(A,e)}onUpdate(){if(this.isLoaded){const A=Date.now();this.timeDelta=(A-this.prevTime)/1e3,this.time+=this.timeDelta,this.controls&&this.controls.update(),this.backObj.onUpdate(this.timeDelta,this.time),this.renderer.instance.setRenderTarget(this.renderTarget),this.renderer.instance.render(this.offscreenScene,this.offscreenCamera.instance),this.renderer.instance.setRenderTarget(null),this.renderer.instance.render(this.scene,this.camera.instance),this.prevTime=A}}onResize(){const A=this.wrap.clientWidth,e=this.wrap.clientHeight;this.wrapW=A,this.wrapH=e,this.camera.onResize(A,e),this.offscreenCamera.onResize(A,e),this.backObj.onResize(A,e),this.obj.onResize(A,e),this.renderer.onResize(A,e),this.renderTarget.setSize(A,e)}setUtility(){this.isHelper&&(this.axesHelper=new rp(600),this.scene.add(this.axesHelper)),this.isControl&&(this.controls=new j0(this.camera.instance,this.canvas))}setEvents(){}}class Hx{constructor(){this.isUpdate=!0,this.isMouseMove=!0,this.isScroll=!1,this.setup(),this.setEvents()}setup(){this.gl=new Dx(document.querySelector(".canvaswrap"))}onUpdate(){if(!this.isUpdate)return;const A=window.scrollY;this.timer=requestAnimationFrame(this.onUpdate.bind(this)),this.gl.onUpdate(A)}onResize(){this.gl.onResize()}onMouseMove(A){this.isMouseMove&&this.gl.onMouseMove(A.pageX,A.pageY)}onScroll(){this.isScroll}load(){window.scrollTo(0,0)}setEvents(){this.onUpdate(),window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("pointermove",this.onMouseMove.bind(this)),window.addEventListener("scroll",this.onScroll.bind(this)),window.addEventListener("load",this.load.bind(this))}}window.gb===void 0&&(window.gb={}),new Hx;
