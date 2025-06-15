(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="177",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,Tl=1,Xh=2,su=1,jh=2,yn=3,Qn=0,ke=1,Tn=2,Rn=0,Wi=1,Ls=2,Cl=3,Al=4,qh=5,hi=100,Yh=101,Kh=102,$h=103,Zh=104,Jh=200,Qh=201,td=202,ed=203,Vo=204,zo=205,nd=206,id=207,rd=208,sd=209,od=210,ad=211,ld=212,cd=213,ud=214,Ho=0,Go=1,Wo=2,Ki=3,Xo=4,jo=5,qo=6,Yo=7,ou=0,hd=1,dd=2,Zn=0,pd=1,fd=2,md=3,_d=4,vd=5,gd=6,xd=7,au=300,$i=301,Zi=302,Ko=303,$o=304,Ws=306,Zo=1e3,Cn=1001,Jo=1002,Se=1003,bd=1004,$r=1005,pn=1006,to=1007,pi=1008,In=1009,lu=1010,cu=1011,Er=1012,Na=1013,mi=1014,un=1015,Dn=1016,Fa=1017,Oa=1018,Sr=1020,uu=35902,hu=1021,du=1022,We=1023,yr=1026,Tr=1027,pu=1028,Ba=1029,fu=1030,ka=1031,Va=1033,Es=33776,Ss=33777,ys=33778,Ts=33779,Qo=35840,ta=35841,ea=35842,na=35843,ia=36196,ra=37492,sa=37496,oa=37808,aa=37809,la=37810,ca=37811,ua=37812,ha=37813,da=37814,pa=37815,fa=37816,ma=37817,_a=37818,va=37819,ga=37820,xa=37821,Cs=36492,ba=36494,wa=36495,mu=36283,Ma=36284,Ea=36285,Sa=36286,wd=3200,Md=3201,Ed=0,Sd=1,Kn="",Je="srgb",Ji="srgb-linear",Us="linear",Qt="srgb",Si=7680,Pl=519,yd=512,Td=513,Cd=514,_u=515,Ad=516,Pd=517,Rd=518,Dd=519,Rl=35044,Dl="300 es",An=2e3,Is=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const wr=Math.PI/180,Cr=180/Math.PI;function nr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function Ot(n,t,e){return Math.max(t,Math.min(e,n))}function za(n,t){return(n%t+t)%t}function Ld(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Ud(n,t,e){return n!==t?(e-n)/(t-n):0}function Mr(n,t,e){return(1-e)*n+e*t}function Id(n,t,e,i){return Mr(n,t,1-Math.exp(-e*i))}function Nd(n,t=1){return t-Math.abs(za(n,t*2)-t)}function Fd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Od(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Bd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function kd(n,t){return n+Math.random()*(t-n)}function Vd(n){return n*(.5-Math.random())}function zd(n){n!==void 0&&(Ll=n);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(n){return n*wr}function Gd(n){return n*Cr}function Wd(n){return(n&n-1)===0&&n!==0}function Xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qd(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),p=o((t-i)/2),f=s((i-t)/2),v=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*d,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yd={DEG2RAD:wr,RAD2DEG:Cr,generateUUID:nr,clamp:Ot,euclideanModulo:za,mapLinear:Ld,inverseLerp:Ud,lerp:Mr,damp:Id,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:kd,randFloatSpread:Vd,seededRandom:zd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:qd,normalize:Re,denormalize:Vi};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],v=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=v,t[e+3]=x;return}if(d!==x||l!==p||c!==f||u!==v){let m=1-a;const h=l*p+c*f+u*v+d*x,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const I=Math.sqrt(S),R=Math.atan2(I,h*y);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const M=a*y;if(l=l*m+p*M,c=c*m+f*M,u=u*m+v*M,d=d*m+x*M,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],v=s[o+3];return t[e]=a*v+u*d+l*f-c*p,t[e+1]=l*v+u*p+c*d-a*f,t[e+2]=c*v+u*f+a*p-l*d,t[e+3]=u*v-a*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),p=l(i/2),f=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"YXZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"ZXY":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"ZYX":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"YZX":this._x=p*u*d+c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d-p*f*v;break;case"XZY":this._x=p*u*d-c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d+p*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new U,Ul=new _i;class Ut{constructor(t,e,i,r,s,o,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],f=i[5],v=i[8],x=r[0],m=r[3],h=r[6],y=r[1],S=r[4],M=r[7],I=r[2],R=r[5],A=r[8];return s[0]=o*x+a*y+l*I,s[3]=o*m+a*S+l*R,s[6]=o*h+a*M+l*A,s[1]=c*x+u*y+d*I,s[4]=c*m+u*S+d*R,s[7]=c*h+u*M+d*A,s[2]=p*x+f*y+v*I,s[5]=p*m+f*S+v*R,s[8]=p*h+f*M+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,p=a*l-u*s,f=c*s-o*l,v=e*d+i*p+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=p*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const no=new Ut;function vu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=Ns("canvas");return n.style.display="block",n}const Il={};function Xi(n){n in Il||(Il[n]=!0,console.warn(n))}function $d(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Zd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Nl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const n={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qt&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Us:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ji]:{primaries:t,whitePoint:i,transfer:Us,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:Qt,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}const Wt=Qd();function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class tp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yi===void 0&&(yi=Ns("canvas")),yi.width=t.width,yi.height=t.height;const r=yi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=yi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ln(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class Ha{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(io(r[o].image)):s.push(io(r[o]))}else s=io(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;const ro=new U;class Le extends bi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Cn,r=Cn,s=pn,o=pi,a=We,l=In,c=Le.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=nr(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=au;Le.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(f+1)/2,I=(h+1)/2,R=(u+p)/4,A=(d+x)/4,N=(v+m)/4;return S>M&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=N/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Le(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ha(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends ip{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gu extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Jr.subVectors(this.max,ur),Ti.subVectors(t.a,ur),Ci.subVectors(t.b,ur),Ai.subVectors(t.c,ur),kn.subVectors(Ci,Ti),Vn.subVectors(Ai,Ci),ii.subVectors(Ti,Ai);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ii.y,ii.x,0];return!so(e,Ti,Ci,Ai,Jr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Ti,Ci,Ai,Jr))?!1:(Qr.crossVectors(kn,Vn),e=[Qr.x,Qr.y,Qr.z],so(e,Ti,Ci,Ai,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],on=new U,Zr=new Ir,Ti=new U,Ci=new U,Ai=new U,kn=new U,Vn=new U,ii=new U,ur=new U,Jr=new U,Qr=new U,ri=new U;function so(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ri.fromArray(n,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sp=new Ir,hr=new U,oo=new U;class Nr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(oo)),this.expandByPoint(hr.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const bn=new U,ao=new U,ts=new U,zn=new U,lo=new U,es=new U,co=new U;class Xs{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ao.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ao);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ts),a=zn.dot(this.direction),l=-zn.dot(ts),c=zn.lengthSq(),u=Math.abs(1-o*o);let d,p,f,v;if(u>0)if(d=o*l-a,p=o*a-l,v=s*u,d>=0)if(p>=-v)if(p<=v){const x=1/u;d*=x,p*=x,f=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ao).addScaledVector(ts,p),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){lo.subVectors(e,t),es.subVectors(i,t),co.crossVectors(lo,es);let o=this.direction.dot(co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(es.crossVectors(zn,es));if(l<0)return null;const c=a*this.direction.dot(lo.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(co);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,c,u,d,p,f,v,x,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,d,p,f,v,x,m)}set(t,e,i,r,s,o,a,l,c,u,d,p,f,v,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Pi.setFromMatrixColumn(t,0).length(),s=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=o*u,f=o*d,v=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+v*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=v+f*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,f=l*d,v=c*u,x=c*d;e[0]=p+x*a,e[4]=v*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-v,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,f=l*d,v=c*u,x=c*d;e[0]=p-x*a,e[4]=-o*d,e[8]=v+f*a,e[1]=f+v*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,f=o*d,v=a*u,x=a*d;e[0]=l*u,e[4]=v*c-f,e[8]=p*c+x,e[1]=l*d,e[5]=x*c+p,e[9]=f*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,f=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=x-p*d,e[8]=v*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+v,e[10]=p-x*d}else if(t.order==="XZY"){const p=o*l,f=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+x,e[5]=o*u,e[9]=f*d-v,e[2]=v*d-f,e[6]=a*u,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,ap)}lookAt(t,e,i){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(i,He),Hn.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(i,He)),Hn.normalize(),ns.crossVectors(He,Hn),r[0]=Hn.x,r[4]=ns.x,r[8]=He.x,r[1]=Hn.y,r[5]=ns.y,r[9]=He.y,r[2]=Hn.z,r[6]=ns.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],f=i[13],v=i[2],x=i[6],m=i[10],h=i[14],y=i[3],S=i[7],M=i[11],I=i[15],R=r[0],A=r[4],N=r[8],w=r[12],b=r[1],P=r[5],G=r[9],k=r[13],Y=r[2],K=r[6],X=r[10],Z=r[14],V=r[3],at=r[7],ht=r[11],Mt=r[15];return s[0]=o*R+a*b+l*Y+c*V,s[4]=o*A+a*P+l*K+c*at,s[8]=o*N+a*G+l*X+c*ht,s[12]=o*w+a*k+l*Z+c*Mt,s[1]=u*R+d*b+p*Y+f*V,s[5]=u*A+d*P+p*K+f*at,s[9]=u*N+d*G+p*X+f*ht,s[13]=u*w+d*k+p*Z+f*Mt,s[2]=v*R+x*b+m*Y+h*V,s[6]=v*A+x*P+m*K+h*at,s[10]=v*N+x*G+m*X+h*ht,s[14]=v*w+x*k+m*Z+h*Mt,s[3]=y*R+S*b+M*Y+I*V,s[7]=y*A+S*P+M*K+I*at,s[11]=y*N+S*G+M*X+I*ht,s[15]=y*w+S*k+M*Z+I*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],f=t[14],v=t[3],x=t[7],m=t[11],h=t[15];return v*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*f-i*l*f)+x*(+e*l*f-e*c*p+s*o*p-r*o*f+r*c*u-s*l*u)+m*(+e*c*d-e*a*f-s*o*d+i*o*f+s*a*u-i*c*u)+h*(-r*a*u-e*l*d+e*a*p+r*o*d-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],f=t[11],v=t[12],x=t[13],m=t[14],h=t[15],y=d*m*c-x*p*c+x*l*f-a*m*f-d*l*h+a*p*h,S=v*p*c-u*m*c-v*l*f+o*m*f+u*l*h-o*p*h,M=u*x*c-v*d*c+v*a*f-o*x*f-u*a*h+o*d*h,I=v*d*l-u*x*l-v*a*p+o*x*p+u*a*m-o*d*m,R=e*y+i*S+r*M+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=y*A,t[1]=(x*p*s-d*m*s-x*r*f+i*m*f+d*r*h-i*p*h)*A,t[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*A,t[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*f-i*l*f)*A,t[4]=S*A,t[5]=(u*m*s-v*p*s+v*r*f-e*m*f-u*r*h+e*p*h)*A,t[6]=(v*l*s-o*m*s-v*r*c+e*m*c+o*r*h-e*l*h)*A,t[7]=(o*p*s-u*l*s+u*r*c-e*p*c-o*r*f+e*l*f)*A,t[8]=M*A,t[9]=(v*d*s-u*x*s-v*i*f+e*x*f+u*i*h-e*d*h)*A,t[10]=(o*x*s-v*a*s+v*i*c-e*x*c-o*i*h+e*a*h)*A,t[11]=(u*a*s-o*d*s-u*i*c+e*d*c+o*i*f-e*a*f)*A,t[12]=I*A,t[13]=(u*x*r-v*d*r+v*i*p-e*x*p-u*i*m+e*d*m)*A,t[14]=(v*a*r-o*x*r-v*i*l+e*x*l+o*i*m-e*a*m)*A,t[15]=(o*d*r-u*a*r+u*i*l-e*d*l-o*i*p+e*a*p)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,p=s*c,f=s*u,v=s*d,x=o*u,m=o*d,h=a*d,y=l*c,S=l*u,M=l*d,I=i.x,R=i.y,A=i.z;return r[0]=(1-(x+h))*I,r[1]=(f+M)*I,r[2]=(v-S)*I,r[3]=0,r[4]=(f-M)*R,r[5]=(1-(p+h))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(v+S)*A,r[9]=(m-y)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),a=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],an.copy(this);const c=1/s,u=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=An){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let f,v;if(a===An)f=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Is)f=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=An){const l=this.elements,c=1/(e-t),u=1/(i-r),d=1/(o-s),p=(e+t)*c,f=(i+r)*u;let v,x;if(a===An)v=(o+s)*d,x=-2*d;else if(a===Is)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Pi=new U,an=new pe,op=new U(0,0,0),ap=new U(1,1,1),Hn=new U,ns=new U,He=new U,Ol=new pe,Bl=new _i;class Nn{constructor(t=0,e=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lp=0;const kl=new U,Ri=new _i,wn=new pe,is=new U,dr=new U,cp=new U,up=new _i,Vl=new U(1,0,0),zl=new U(0,1,0),Hl=new U(0,0,1),Gl={type:"added"},hp={type:"removed"},Di={type:"childadded",child:null},uo={type:"childremoved",child:null};class Ue extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new U,e=new Nn,i=new _i,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ut}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?is.copy(t):is.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(dr,is,this.up):wn.lookAt(is,dr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(wn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),f=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new U,Mn=new U,ho=new U,En=new U,Li=new U,Ui=new U,Wl=new U,po=new U,fo=new U,mo=new U,_o=new fe,vo=new fe,go=new fe;class cn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),Mn.subVectors(i,e),ho.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Mn),l=ln.dot(ho),c=Mn.dot(Mn),u=Mn.dot(ho),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-a*u)*p,v=(o*u-a*l)*p;return s.set(1-f-v,v,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return _o.setScalar(0),vo.setScalar(0),go.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,i),go.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(_o,s.x),o.addScaledVector(vo,s.y),o.addScaledVector(go,s.z),o}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),Mn.subVectors(t,e),ln.cross(Mn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),ln.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Li.subVectors(r,i),Ui.subVectors(s,i),po.subVectors(t,i);const l=Li.dot(po),c=Ui.dot(po);if(l<=0&&c<=0)return e.copy(i);fo.subVectors(t,r);const u=Li.dot(fo),d=Ui.dot(fo);if(u>=0&&d<=u)return e.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Li,o);mo.subVectors(t,s);const f=Li.dot(mo),v=Ui.dot(mo);if(v>=0&&f<=v)return e.copy(s);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ui,a);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Wl.subVectors(s,r),a=(d-u)/(d-u+(f-v)),e.copy(r).addScaledVector(Wl,a);const h=1/(m+x+p);return o=x*h,a=p*h,e.copy(i).addScaledVector(Li,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function xo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Wt.workingColorSpace){if(t=za(t,1),e=Ot(e,0,1),i=Ot(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=xo(o,s,t+1/3),this.g=xo(o,s,t),this.b=xo(o,s,t-1/3)}return Wt.colorSpaceToWorking(this,r),this}setStyle(t,e=Je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=bu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Wt.workingToColorSpace(Te.copy(this),t),Math.round(Ot(Te.r*255,0,255))*65536+Math.round(Ot(Te.g*255,0,255))*256+Math.round(Ot(Te.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Te.copy(this),e);const i=Te.r,r=Te.g,s=Te.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Je){Wt.workingToColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,r=Te.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(rs);const i=Mr(Gn.h,rs.h,e),r=Mr(Gn.s,rs.s,e),s=Mr(Gn.l,rs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new kt;kt.NAMES=bu;let dp=0;class ir extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Wi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=zo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vo&&(i.blendSrc=this.blendSrc),this.blendDst!==zo&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ga extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,ss=new yt;let pp=0;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}}class wu extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mu extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xe extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fp=0;const $e=new pe,bo=new Ue,Ii=new U,Ge=new Ir,pr=new Ir,Me=new U;class nn extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?Mu:wu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,i){return $e.makeTranslation(t,e,i),this.applyMatrix4($e),this}scale(t,e,i){return $e.makeScale(t,e,i),this.applyMatrix4($e),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ge.min,pr.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,pr.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(pr.min),Ge.expandByPoint(pr.max))}Ge.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Me.add(Ii)),r=Math.max(r,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const c=new U,u=new U,d=new U,p=new yt,f=new yt,v=new yt,x=new U,m=new U;function h(N,w,b){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,w),v.fromBufferAttribute(s,b),u.sub(c),d.sub(c),f.sub(p),v.sub(p);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),a[N].add(x),a[w].add(x),a[b].add(x),l[N].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,w=y.length;N<w;++N){const b=y[N],P=b.start,G=b.count;for(let k=P,Y=P+G;k<Y;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new U,M=new U,I=new U,R=new U;function A(N){I.fromBufferAttribute(r,N),R.copy(I);const w=a[N];S.copy(w),S.sub(I.multiplyScalar(I.dot(w))).normalize(),M.crossVectors(R,w);const P=M.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,P)}for(let N=0,w=y.length;N<w;++N){const b=y[N],P=b.start,G=b.count;for(let k=P,Y=P+G;k<Y;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(t)for(let p=0,f=t.count;p<f;p+=3){const v=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let f=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let h=0;h<u;h++)p[v++]=c[f++]}return new hn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],f=t(p,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new pe,si=new Xs,os=new Nr,jl=new U,as=new U,ls=new U,cs=new U,wo=new U,us=new U,ql=new U,hs=new U;class fn extends Ue{constructor(t=new nn,e=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(wo.fromBufferAttribute(d,t),o?us.addScaledVector(wo,u):us.addScaledVector(wo.sub(e),u))}e.add(us)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(os.containsPoint(si.origin)===!1&&(si.intersectSphere(os,jl)===null||si.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Xl.copy(s).invert(),si.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=S;M<I;M+=3){const R=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);r=ds(this,h,t,i,c,u,d,R,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,h=x;m<h;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=ds(this,o,t,i,c,u,d,y,S,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=S;M<I;M+=3){const R=M,A=M+1,N=M+2;r=ds(this,h,t,i,c,u,d,R,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,h=x;m<h;m+=3){const y=m,S=m+1,M=m+2;r=ds(this,o,t,i,c,u,d,y,S,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function mp(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Qn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:n}}function ds(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,as),n.getVertexPosition(l,ls),n.getVertexPosition(c,cs);const u=mp(n,t,e,i,as,ls,cs,ql);if(u){const d=new U;cn.getBarycoord(ql,as,ls,cs,d),r&&(u.uv=cn.getInterpolatedAttribute(r,a,l,c,d,new yt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,l,c,d,new yt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new U,materialIndex:0};cn.getNormal(as,ls,cs,p.normal),u.face=p,u.barycoord=d}return u}class Fr extends nn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,f=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function v(x,m,h,y,S,M,I,R,A,N,w){const b=M/A,P=I/N,G=M/2,k=I/2,Y=R/2,K=A+1,X=N+1;let Z=0,V=0;const at=new U;for(let ht=0;ht<X;ht++){const Mt=ht*P-k;for(let Bt=0;Bt<K;Bt++){const ee=Bt*b-G;at[x]=ee*y,at[m]=Mt*S,at[h]=Y,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[h]=R>0?1:-1,u.push(at.x,at.y,at.z),d.push(Bt/A),d.push(1-ht/N),Z+=1}}for(let ht=0;ht<N;ht++)for(let Mt=0;Mt<A;Mt++){const Bt=p+Mt+K*ht,ee=p+Mt+K*(ht+1),W=p+(Mt+1)+K*(ht+1),et=p+(Mt+1)+K*ht;l.push(Bt,ee,et),l.push(ee,W,et),V+=6}a.addGroup(f,V,w),f+=V,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=Qi(n[e]);for(const r in i)t[r]=i[r]}return t}function _p(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Fs={clone:Qi,merge:De};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let Su=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Wn=new U,Yl=new yt,Kl=new yt;class Qe extends Su{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,Kl),e.subVectors(Kl,Yl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Fi=1;class xp extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const s=new Qe(Ni,Fi,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Ni,Fi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,p,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class yu extends Le{constructor(t=[],e=$i,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bp extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new yu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new Ce({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Rn});s.uniforms.tEquirect.value=e;const o=new fn(r,s),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=pn),new xp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class xr extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Mp extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ep extends Le{constructor(t=null,e=1,i=1,r,s,o,a,l,c=Se,u=Se,d,p){super(null,o,a,l,c,u,r,s,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eo=new U,Sp=new U,yp=new Ut;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Eo.subVectors(i,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Eo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yp.getNormalMatrix(t),r=this.coplanarPoint(Eo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Nr,ps=new U;class Tu{constructor(t=new Yn,e=new Yn,i=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],f=r[8],v=r[9],x=r[10],m=r[11],h=r[12],y=r[13],S=r[14],M=r[15];if(i[0].setComponents(l-s,p-c,m-f,M-h).normalize(),i[1].setComponents(l+s,p+c,m+f,M+h).normalize(),i[2].setComponents(l+o,p+u,m+v,M+y).normalize(),i[3].setComponents(l-o,p-u,m-v,M-y).normalize(),i[4].setComponents(l-a,p-d,m-x,M-S).normalize(),e===An)i[5].setComponents(l+a,p+d,m+x,M+S).normalize();else if(e===Is)i[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ps.x=r.normal.x>0?t.max.x:t.min.x,ps.y=r.normal.y>0?t.max.y:t.min.y,ps.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cu extends ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Os=new U,Bs=new U,$l=new pe,fr=new Xs,fs=new Nr,So=new U,Zl=new U;class Tp extends Ue{constructor(t=new nn,e=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Os.fromBufferAttribute(e,r-1),Bs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Os.distanceTo(Bs);t.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,t.ray.intersectsSphere(fs)===!1)return;$l.copy(r).invert(),fr.copy(t.ray).applyMatrix4($l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=f,m=v-1;x<m;x+=c){const h=u.getX(x),y=u.getX(x+1),S=ms(this,t,fr,l,h,y,x);S&&e.push(S)}if(this.isLineLoop){const x=u.getX(v-1),m=u.getX(f),h=ms(this,t,fr,l,x,m,v-1);h&&e.push(h)}}else{const f=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=f,m=v-1;x<m;x+=c){const h=ms(this,t,fr,l,x,x+1,x);h&&e.push(h)}if(this.isLineLoop){const x=ms(this,t,fr,l,v-1,f,v-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ms(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Os.fromBufferAttribute(a,r),Bs.fromBufferAttribute(a,s),e.distanceSqToSegment(Os,Bs,So,Zl)>i)return;So.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(So);if(!(c<t.near||c>t.far))return{distance:c,point:Zl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Jl=new U,Ql=new U;class Cp extends Tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Jl.fromBufferAttribute(e,r),Ql.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jl.distanceTo(Ql);t.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ap extends ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new pe,ya=new Xs,_s=new Nr,vs=new U;class Pp extends Ue{constructor(t=new nn,e=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(r),_s.radius+=s,t.ray.intersectsSphere(_s)===!1)return;tc.copy(r).invert(),ya.copy(t.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=p,x=f;v<x;v++){const m=c.getX(v);vs.fromBufferAttribute(d,m),ec(vs,m,l,r,t,e,this)}}else{const p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let v=p,x=f;v<x;v++)vs.fromBufferAttribute(d,v),ec(vs,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(n,t,e,i,r,s,o){const a=ya.distanceSqToPoint(n);if(a<e){const l=new U;ya.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Au extends Le{constructor(t,e,i=mi,r,s,o,a=Se,l=Se,c,u=yr,d=1){if(u!==yr&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ha(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class js extends nn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=t/a,p=e/l,f=[],v=[],x=[],m=[];for(let h=0;h<u;h++){const y=h*p-o;for(let S=0;S<c;S++){const M=S*d-s;v.push(M,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const S=y+c*h,M=y+c*(h+1),I=y+1+c*(h+1),R=y+1+c*h;f.push(S,M,R),f.push(M,I,R)}this.setIndex(f),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rp extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dp extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lp extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pu extends Su{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Up extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ru{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nc(){return performance.now()}class ic{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ot(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ip extends Cp{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new nn;r.setAttribute("position",new Xe(e,3)),r.setAttribute("color",new Xe(i,3));const s=new Cu({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new kt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Np extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rc(n,t,e,i){const r=Fp(i);switch(e){case hu:return n*t;case pu:return n*t/r.components*r.byteLength;case Ba:return n*t/r.components*r.byteLength;case fu:return n*t*2/r.components*r.byteLength;case ka:return n*t*2/r.components*r.byteLength;case du:return n*t*3/r.components*r.byteLength;case We:return n*t*4/r.components*r.byteLength;case Va:return n*t*4/r.components*r.byteLength;case Es:case Ss:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ts:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(n,16)*Math.max(t,8)/4;case Qo:case ea:return Math.max(n,8)*Math.max(t,8)/2;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cs:case ba:case wa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case mu:case Ma:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ea:case Sa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(n){switch(n){case In:case lu:return{byteLength:1,components:1};case Er:case cu:case Dn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case mi:case Na:case un:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Du(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Op(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<d.length;f++){const v=d[p],x=d[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,v=d.length;f<v;f++){const x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lf=`#define PI 3.141592653589793
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
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
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
#endif`,Of=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t_=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,n_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
}`,r_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,o_=`#define PHONG
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
}`,a_=`#define PHONG
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
}`,l_=`#define STANDARD
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
}`,c_=`#define STANDARD
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
}`,u_=`#define TOON
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
}`,h_=`#define TOON
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
}`,d_=`uniform float size;
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
}`,p_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,m_=`uniform vec3 color;
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
}`,__=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Bp,alphahash_pars_fragment:kp,alphamap_fragment:Vp,alphamap_pars_fragment:zp,alphatest_fragment:Hp,alphatest_pars_fragment:Gp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:jp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:$p,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:ef,clipping_planes_vertex:nf,color_fragment:rf,color_pars_fragment:sf,color_pars_vertex:of,color_vertex:af,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:uf,displacementmap_pars_vertex:hf,displacementmap_vertex:df,emissivemap_fragment:pf,emissivemap_pars_fragment:ff,colorspace_fragment:mf,colorspace_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:gf,envmap_pars_fragment:xf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Df,envmap_vertex:wf,fog_vertex:Mf,fog_pars_vertex:Ef,fog_fragment:Sf,fog_pars_fragment:yf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Pf,lights_pars_begin:Rf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Uf,lights_phong_fragment:If,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Vf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:jf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Zf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:rm,normal_pars_vertex:sm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:um,iridescence_pars_fragment:hm,opaque_fragment:dm,packing:pm,premultiplied_alpha_fragment:fm,project_vertex:mm,dithering_fragment:_m,dithering_pars_fragment:vm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:wm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Em,skinbase_vertex:Sm,skinning_pars_vertex:ym,skinning_vertex:Tm,skinnormal_vertex:Cm,specularmap_fragment:Am,specularmap_pars_fragment:Pm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Dm,transmission_fragment:Lm,transmission_pars_fragment:Um,uv_pars_fragment:Im,uv_pars_vertex:Nm,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:km,backgroundCube_vert:Vm,backgroundCube_frag:zm,cube_vert:Hm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:jm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Km,linedashed_vert:$m,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:t_,meshlambert_frag:e_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:r_,meshnormal_frag:s_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:l_,meshphysical_frag:c_,meshtoon_vert:u_,meshtoon_frag:h_,points_vert:d_,points_frag:p_,shadow_vert:f_,shadow_frag:m_,sprite_vert:__,sprite_frag:v_},it={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},dn={basic:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:De([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:De([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:De([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:De([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:De([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:De([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:De([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:De([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:De([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:De([it.lights,it.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};dn.physical={uniforms:De([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const gs={r:0,b:0,g:0},ai=new Nn,g_=new pe;function x_(n,t,e,i,r,s,o){const a=new kt(0);let l=s===!0?0:1,c,u,d=null,p=0,f=null;function v(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function x(S){let M=!1;const I=v(S);I===null?h(a,l):I&&I.isColor&&(h(I,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){const I=v(M);I&&(I.isCubeTexture||I.mapping===Ws)?(u===void 0&&(u=new fn(new Fr(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Qi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ai.copy(M.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(ai)),u.material.toneMapped=Wt.getTransfer(I.colorSpace)!==Qt,(d!==I||p!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,p=I.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new fn(new js(2,2),new Ce({name:"BackgroundMaterial",uniforms:Qi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(I.colorSpace)!==Qt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=I,p=I.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,M){S.getRGB(gs,Eu(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,M,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:x,addToRenderList:m,dispose:y}}function b_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(b,P,G,k,Y){let K=!1;const X=d(k,G,P);s!==X&&(s=X,c(s.object)),K=f(b,k,G,Y),K&&v(b,k,G,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(b,P,G,k),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,P,G){const k=G.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let X=K[k];return X===void 0&&(X=p(l()),K[k]=X),X}function p(b){const P=[],G=[],k=[];for(let Y=0;Y<e;Y++)P[Y]=0,G[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,P,G,k){const Y=s.attributes,K=P.attributes;let X=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){const ht=Y[V];let Mt=K[V];if(Mt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function v(b,P,G,k){const Y={},K=P.attributes;let X=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){let ht=K[V];ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),Y[V]=Mt,X++}s.attributes=Y,s.attributesNum=X,s.index=k}function x(){const b=s.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function m(b){h(b,0)}function h(b,P){const G=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;G[b]=1,k[b]===0&&(n.enableVertexAttribArray(b),k[b]=1),Y[b]!==P&&(n.vertexAttribDivisor(b,P),Y[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==b[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function S(b,P,G,k,Y,K,X){X===!0?n.vertexAttribIPointer(b,P,G,Y,K):n.vertexAttribPointer(b,P,G,k,Y,K)}function M(b,P,G,k){x();const Y=k.attributes,K=G.getAttributes(),X=P.defaultAttributeValues;for(const Z in K){const V=K[Z];if(V.location>=0){let at=Y[Z];if(at===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){const ht=at.normalized,Mt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const ee=Bt.buffer,W=Bt.type,et=Bt.bytesPerElement,xt=W===n.INT||W===n.UNSIGNED_INT||at.gpuType===Na;if(at.isInterleavedBufferAttribute){const lt=at.data,bt=lt.stride,jt=at.offset;if(lt.isInstancedInterleavedBuffer){for(let At=0;At<V.locationSize;At++)h(V.location+At,lt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let At=0;At<V.locationSize;At++)m(V.location+At);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let At=0;At<V.locationSize;At++)S(V.location+At,Mt/V.locationSize,W,ht,bt*et,(jt+Mt/V.locationSize*At)*et,xt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)h(V.location+lt,at.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let lt=0;lt<V.locationSize;lt++)S(V.location+lt,Mt/V.locationSize,W,ht,Mt*et,Mt/V.locationSize*lt*et,xt)}}else if(X!==void 0){const ht=X[Z];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(V.location,ht);break;case 3:n.vertexAttrib3fv(V.location,ht);break;case 4:n.vertexAttrib4fv(V.location,ht);break;default:n.vertexAttrib1fv(V.location,ht)}}}}y()}function I(){N();for(const b in i){const P=i[b];for(const G in P){const k=P[G];for(const Y in k)u(k[Y].object),delete k[Y];delete P[G]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const G in P){const k=P[G];for(const Y in k)u(k[Y].object),delete k[Y];delete P[G]}delete i[b.id]}function A(b){for(const P in i){const G=i[P];if(G[b.id]===void 0)continue;const k=G[b.id];for(const Y in k)u(k[Y].object),delete k[Y];delete G[b.id]}}function N(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function w_(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];e.update(f,i,1)}function l(c,u,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*p[x];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==We&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==un&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:I,maxSamples:R}}function E_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Yn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,f){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,S=y*4;let M=h.clippingState||null;l.value=M,M=u(v,p,S,f);for(let I=0;I!==S;++I)M[I]=e[I];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,p,f,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=f+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function S_(n){let t=new WeakMap;function e(o,a){return a===Ko?o.mapping=$i:a===$o&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===$o)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Hi=4,sc=[.125,.215,.35,.446,.526,.582],di=20,yo=new Pu,oc=new kt;let To=null,Co=0,Ao=0,Po=!1;const ui=(1+Math.sqrt(5))/2,Oi=1/ui,ac=[new U(-ui,Oi,0),new U(ui,Oi,0),new U(-Oi,0,ui),new U(Oi,0,ui),new U(0,ui,-Oi),new U(0,ui,Oi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],y_=new U;class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=y_}=s;To=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Co,Ao),this._renderer.xr.enabled=Po,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Dn,format:We,colorSpace:Ji,depthBuffer:!1},r=cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(s)),this._blurMaterial=C_(s,t,e)}return r}_compileMaterial(t){const e=new fn(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,i,r,s){const l=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(oc),d.toneMapping=Zn,d.autoClear=!1;const v=new Ga({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),x=new fn(new Fr,v);let m=!1;const h=t.background;h?h.isColor&&(v.color.copy(h),t.background=null,m=!0):(v.color.copy(oc),m=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const M=this._cubeSize;xs(r,S*M,y>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(x,l),d.render(t,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=p,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===$i||t.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ac[(r-s-1)%ac.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fn(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*di-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const h=[];let y=0;for(let A=0;A<di;++A){const N=A/x,w=Math.exp(-N*N/2);h.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-i;const M=this._sizeLods[r],I=3*M*(r>S-Hi?r-S+Hi:0),R=4*(this._cubeSize-M);xs(e,I,R,3*M,2*M),l.setRenderTarget(e),l.render(d,yo)}}function T_(n){const t=[],e=[],i=[];let r=n;const s=n-Hi+1+sc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Hi?l=sc[o-n+Hi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,x=3,m=2,h=1,y=new Float32Array(x*v*f),S=new Float32Array(m*v*f),M=new Float32Array(h*v*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,N=R>2?0:-1,w=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];y.set(w,x*v*R),S.set(p,m*v*R);const b=[R,R,R,R,R,R];M.set(b,h*v*R)}const I=new nn;I.setAttribute("position",new hn(y,x)),I.setAttribute("uv",new hn(S,m)),I.setAttribute("faceIndex",new hn(M,h)),t.push(I),r>Hi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cc(n,t,e){const i=new en(n,t,e);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function C_(n,t,e){const i=new Float32Array(di),r=new U(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function uc(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function hc(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function A_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ko||l===$o,u=l===$i||l===Zi;if(c||u){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new lc(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new lc(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function P_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function R_(n,t,e,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)t.update(p[f],n.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,v=d.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let S=0,M=y.length;S<M;S+=3){const I=y[S+0],R=y[S+1],A=y[S+2];p.push(I,R,R,A,A,I)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const I=S+0,R=S+1,A=S+2;p.push(I,R,R,A,A,I)}}else return;const m=new(vu(p)?Mu:wu)(p,1);m.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function D_(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,f){n.drawElements(i,f,s,p*o),e.update(f,i,1)}function c(p,f,v){v!==0&&(n.drawElementsInstanced(i,f,s,p*o,v),e.update(f,i,v))}function u(p,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,v);let m=0;for(let h=0;h<v;h++)m+=f[h];e.update(m,i,1)}function d(p,f,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/o,f[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,v);let h=0;for(let y=0;y<v;y++)h+=f[y]*x[y];e.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function L_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function U_(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let b=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*R*4*d),N=new gu(A,I,R,d);N.type=un,N.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const G=h[P],k=y[P],Y=S[P],K=I*R*4*P;for(let X=0;X<G.count;X++){const Z=X*w;v===!0&&(r.fromBufferAttribute(G,X),A[K+Z+0]=r.x,A[K+Z+1]=r.y,A[K+Z+2]=r.z,A[K+Z+3]=0),x===!0&&(r.fromBufferAttribute(k,X),A[K+Z+4]=r.x,A[K+Z+5]=r.y,A[K+Z+6]=r.z,A[K+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),A[K+Z+8]=r.x,A[K+Z+9]=r.y,A[K+Z+10]=r.z,A[K+Z+11]=Y.itemSize===4?r.w:1)}}p={count:d,texture:N,size:new yt(I,R)},i.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function I_(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Lu=new Le,dc=new Au(1,1),Uu=new gu,Iu=new rp,Nu=new yu,pc=[],fc=[],mc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=pc[r];if(s===void 0&&(s=new Float32Array(r),pc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qs(n,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function N_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function k_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;vc.set(i),n.uniformMatrix2fv(this.addr,!1,vc),we(e,i)}}function V_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;_c.set(i),n.uniformMatrix3fv(this.addr,!1,_c),we(e,i)}}function z_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;mc.set(i),n.uniformMatrix4fv(this.addr,!1,mc),we(e,i)}}function H_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function W_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function j_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function $_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dc.compareFunction=_u,s=dc):s=Lu,e.setTexture2D(t||s,r)}function Z_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Iu,r)}function J_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Nu,r)}function Q_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Uu,r)}function tv(n){switch(n){case 5126:return N_;case 35664:return F_;case 35665:return O_;case 35666:return B_;case 35674:return k_;case 35675:return V_;case 35676:return z_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return j_;case 36294:return q_;case 36295:return Y_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function ev(n,t){n.uniform1fv(this.addr,t)}function nv(n,t){const e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function iv(n,t){const e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function rv(n,t){const e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function sv(n,t){const e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ov(n,t){const e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function av(n,t){const e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lv(n,t){n.uniform1iv(this.addr,t)}function cv(n,t){n.uniform2iv(this.addr,t)}function uv(n,t){n.uniform3iv(this.addr,t)}function hv(n,t){n.uniform4iv(this.addr,t)}function dv(n,t){n.uniform1uiv(this.addr,t)}function pv(n,t){n.uniform2uiv(this.addr,t)}function fv(n,t){n.uniform3uiv(this.addr,t)}function mv(n,t){n.uniform4uiv(this.addr,t)}function _v(n,t,e){const i=this.cache,r=t.length,s=qs(e,r);be(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Lu,s[o])}function vv(n,t,e){const i=this.cache,r=t.length,s=qs(e,r);be(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Iu,s[o])}function gv(n,t,e){const i=this.cache,r=t.length,s=qs(e,r);be(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Nu,s[o])}function xv(n,t,e){const i=this.cache,r=t.length,s=qs(e,r);be(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Uu,s[o])}function bv(n){switch(n){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return hv;case 5125:return dv;case 36294:return pv;case 36295:return fv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return xv}}class wv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tv(e.type)}}class Mv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bv(e.type)}}class Ev{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function gc(n,t){n.seq.push(t),n.map[t.id]=t}function Sv(n,t,e){const i=n.name,r=i.length;for(Ro.lastIndex=0;;){const s=Ro.exec(i),o=Ro.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gc(e,c===void 0?new wv(a,n,t):new Mv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Ev(a),gc(e,d)),e=d}}}class As{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Sv(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function xc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yv=37297;let Tv=0;function Cv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const bc=new Ut;function Av(n){Wt._getMatrix(bc,Wt.workingColorSpace,n);const t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case Us:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Cv(n.getShaderSource(t),o)}else return r}function Pv(n,t){const e=Av(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(n,t){let e;switch(t){case pd:e="Linear";break;case fd:e="Reinhard";break;case md:e="Cineon";break;case _d:e="ACESFilmic";break;case gd:e="AgX";break;case xd:e="Neutral";break;case vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bs=new U;function Dv(){Wt.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Uv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Iv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function br(n){return n!==""}function Mc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(n){return n.replace(Nv,Ov)}const Fv=new Map;function Ov(n,t){let e=Nt[t];if(e===void 0){const i=Fv.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(n){return n.replace(Bv,kv)}function kv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yc(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function zv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $i:case Zi:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function Wv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Xv(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vv(e),c=zv(e),u=Hv(e),d=Gv(e),p=Wv(e),f=Lv(e),v=Uv(s),x=r.createProgram();let m,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(br).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(br).join(`
`),h.length>0&&(h+=`
`)):(m=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),h=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Pv("linearToOutputTexel",e.outputColorSpace),Dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Ta(o),o=Mc(o,e),o=Ec(o,e),a=Ta(a),a=Mc(a,e),a=Ec(a,e),o=Sc(o),a=Sc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+m+o,M=y+h+a,I=xc(r,r.VERTEX_SHADER,S),R=xc(r,r.FRAGMENT_SHADER,M);r.attachShader(x,I),r.attachShader(x,R),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(I).trim(),Y=r.getShaderInfoLog(R).trim();let K=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,R);else{const Z=wc(r,I,"vertex"),V=wc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Z+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Y==="")&&(X=!1);X&&(P.diagnostics={runnable:K,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(I),r.deleteShader(R),N=new As(r,x),w=Iv(r,x)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,yv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=R,this}let jv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yv(t),e.set(t,i)),i}}class Yv{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}}function Kv(n,t,e,i,r,s,o){const a=new xu,l=new qv,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,G,k){const Y=G.fog,K=k.geometry,X=w.isMeshStandardMaterial?G.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),V=Z&&Z.mapping===Ws?Z.image.height:null,at=v[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let ee,W,et,xt;if(at){const Zt=dn[at];ee=Zt.vertexShader,W=Zt.fragmentShader}else ee=w.vertexShader,W=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),xt=l.getFragmentShaderID(w);const lt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),jt=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,ae=!!w.map,le=!!w.matcap,qt=!!Z,T=!!w.aoMap,Ae=!!w.lightMap,Yt=!!w.bumpMap,ne=!!w.normalMap,_t=!!w.displacementMap,Ht=!!w.emissiveMap,Et=!!w.metalnessMap,It=!!w.roughnessMap,ve=w.anisotropy>0,E=w.clearcoat>0,_=w.dispersion>0,F=w.iridescence>0,H=w.sheen>0,q=w.transmission>0,z=ve&&!!w.anisotropyMap,vt=E&&!!w.clearcoatMap,rt=E&&!!w.clearcoatNormalMap,mt=E&&!!w.clearcoatRoughnessMap,gt=F&&!!w.iridescenceMap,$=F&&!!w.iridescenceThicknessMap,ct=H&&!!w.sheenColorMap,Ct=H&&!!w.sheenRoughnessMap,Tt=!!w.specularMap,nt=!!w.specularColorMap,Dt=!!w.specularIntensityMap,C=q&&!!w.transmissionMap,st=q&&!!w.thicknessMap,J=!!w.gradientMap,dt=!!w.alphaMap,Q=w.alphaTest>0,j=!!w.alphaHash,pt=!!w.extensions;let Lt=Zn;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const re={shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:W,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:jt,instancingColor:jt&&k.instanceColor!==null,instancingMorph:jt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ji,alphaToCoverage:!!w.alphaToCoverage,map:ae,matcap:le,envMap:qt,envMapMode:qt&&Z.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:Ae,bumpMap:Yt,normalMap:ne,displacementMap:p&&_t,emissiveMap:Ht,normalMapObjectSpace:ne&&w.normalMapType===Sd,normalMapTangentSpace:ne&&w.normalMapType===Ed,metalnessMap:Et,roughnessMap:It,anisotropy:ve,anisotropyMap:z,clearcoat:E,clearcoatMap:vt,clearcoatNormalMap:rt,clearcoatRoughnessMap:mt,dispersion:_,iridescence:F,iridescenceMap:gt,iridescenceThicknessMap:$,sheen:H,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:Tt,specularColorMap:nt,specularIntensityMap:Dt,transmission:q,transmissionMap:C,thicknessMap:st,gradientMap:J,opaque:w.transparent===!1&&w.blending===Wi&&w.alphaToCoverage===!1,alphaMap:dt,alphaTest:Q,alphaHash:j,combine:w.combine,mapUv:ae&&x(w.map.channel),aoMapUv:T&&x(w.aoMap.channel),lightMapUv:Ae&&x(w.lightMap.channel),bumpMapUv:Yt&&x(w.bumpMap.channel),normalMapUv:ne&&x(w.normalMap.channel),displacementMapUv:_t&&x(w.displacementMap.channel),emissiveMapUv:Ht&&x(w.emissiveMap.channel),metalnessMapUv:Et&&x(w.metalnessMap.channel),roughnessMapUv:It&&x(w.roughnessMap.channel),anisotropyMapUv:z&&x(w.anisotropyMap.channel),clearcoatMapUv:vt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(w.sheenRoughnessMap.channel),specularMapUv:Tt&&x(w.specularMap.channel),specularColorMapUv:nt&&x(w.specularColorMap.channel),specularIntensityMapUv:Dt&&x(w.specularIntensityMap.channel),transmissionMapUv:C&&x(w.transmissionMap.channel),thicknessMapUv:st&&x(w.thicknessMap.channel),alphaMapUv:dt&&x(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||ve),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(ae||dt),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ae&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Tn,flipSided:w.side===ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:pt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&w.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(b,w),S(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const b=v[w.type];let P;if(b){const G=dn[b];P=Fs.clone(G.uniforms)}else P=w.uniforms;return P}function I(w,b){let P;for(let G=0,k=u.length;G<k;G++){const Y=u[G];if(Y.cacheKey===b){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Xv(n,b,w,s),u.push(P)),P}function R(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:N}}function $v(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,p,f,v,x,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function a(d,p,f,v,x,m){const h=o(d,p,f,v,x,m);f.transmission>0?i.push(h):f.transparent===!0?r.push(h):e.push(h)}function l(d,p,f,v,x,m){const h=o(d,p,f,v,x,m);f.transmission>0?i.unshift(h):f.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||Zv),i.length>1&&i.sort(p||Tc),r.length>1&&r.sort(p||Tc)}function u(){for(let d=t,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Jv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cc,n.set(i,[o])):r>=s.length?(o=new Cc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function tg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let eg=0;function ng(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ig(n){const t=new Qv,e=tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new pe,o=new pe;function a(c){let u=0,d=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,v=0,x=0,m=0,h=0,y=0,S=0,M=0,I=0,R=0,A=0;c.sort(ng);for(let w=0,b=c.length;w<b;w++){const P=c[w],G=P.color,k=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*k,d+=G.g*k,p+=G.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],k);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(k),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const Z=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,Z.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[x]=Z.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,M++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(G).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=P.shadow.matrix,S++}i.point[v]=X,v++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[h]=X,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==f||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==y||N.numPointShadows!==S||N.numSpotShadows!==M||N.numSpotMaps!==I||N.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,N.directionalLength=f,N.pointLength=v,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=y,N.numPointShadows=S,N.numSpotShadows=M,N.numSpotMaps=I,N.numLightProbes=A,i.version=eg++)}function l(c,u){let d=0,p=0,f=0,v=0,x=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const S=c[h];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ac(n){const t=new ig(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rg(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ac(n),t.set(r,[a])):s>=o.length?(a=new Ac(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function ag(n,t,e){let i=new Tu;const r=new yt,s=new yt,o=new fe,a=new Dp({depthPacking:Md}),l=new Lp,c={},u=e.maxTextureSize,d={[Qn]:ke,[ke]:Qn,[Tn]:Tn},p=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:sg,fragmentShader:og}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const v=new nn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fn(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let h=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Rn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=h!==yn&&this.type===yn,Y=h===yn&&this.type!==yn;for(let K=0,X=R.length;K<X;K++){const Z=R[K],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const at=V.getFrameExtents();if(r.multiply(at),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||k===!0||Y===!0){const Mt=this.type!==yn?{minFilter:Se,magFilter:Se}:{};V.map!==null&&V.map.dispose(),V.map=new en(r.x,r.y,Mt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ht=V.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Bt=V.getViewport(Mt);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),G.viewport(o),V.updateMatrices(Z,Mt),i=V.getFrustum(),M(A,N,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&y(V,N),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,P)};function y(R,A){const N=t.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new en(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,N,p,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,N,f,x,null)}function S(R,A,N,w){let b=null;const P=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)b=P;else if(b=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const G=b.uuid,k=A.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let K=Y[k];K===void 0&&(K=b.clone(),Y[k]=K,A.addEventListener("dispose",I)),b=K}if(b.visible=A.visible,b.wireframe=A.wireframe,w===yn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=n.properties.get(b);G.light=N}return b}function M(R,A,N,w,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===yn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Y=R.material;if(Array.isArray(Y)){const K=k.groups;for(let X=0,Z=K.length;X<Z;X++){const V=K[X],at=Y[V.materialIndex];if(at&&at.visible){const ht=S(R,at,w,b);R.onBeforeShadow(n,R,A,N,k,ht,V),n.renderBufferDirect(N,null,k,ht,R,V),R.onAfterShadow(n,R,A,N,k,ht,V)}}}else if(Y.visible){const K=S(R,Y,w,b);R.onBeforeShadow(n,R,A,N,k,K,null),n.renderBufferDirect(N,null,k,K,R,null),R.onAfterShadow(n,R,A,N,k,K,null)}}const G=R.children;for(let k=0,Y=G.length;k<Y;k++)M(G[k],A,N,w,b)}function I(R){R.target.removeEventListener("dispose",I);for(const N in c){const w=c[N],b=R.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const lg={[Ho]:Go,[Wo]:qo,[Xo]:Yo,[Ki]:jo,[Go]:Ho,[qo]:Wo,[Yo]:Xo,[jo]:Ki};function cg(n,t){function e(){let C=!1;const st=new fe;let J=null;const dt=new fe(0,0,0,0);return{setMask:function(Q){J!==Q&&!C&&(n.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){C=Q},setClear:function(Q,j,pt,Lt,re){re===!0&&(Q*=Lt,j*=Lt,pt*=Lt),st.set(Q,j,pt,Lt),dt.equals(st)===!1&&(n.clearColor(Q,j,pt,Lt),dt.copy(st))},reset:function(){C=!1,J=null,dt.set(-1,0,0,0)}}}function i(){let C=!1,st=!1,J=null,dt=null,Q=null;return{setReversed:function(j){if(st!==j){const pt=t.get("EXT_clip_control");j?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),st=j;const Lt=Q;Q=null,this.setClear(Lt)}},getReversed:function(){return st},setTest:function(j){j?lt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(j){J!==j&&!C&&(n.depthMask(j),J=j)},setFunc:function(j){if(st&&(j=lg[j]),dt!==j){switch(j){case Ho:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=j}},setLocked:function(j){C=j},setClear:function(j){Q!==j&&(st&&(j=1-j),n.clearDepth(j),Q=j)},reset:function(){C=!1,J=null,dt=null,Q=null,st=!1}}}function r(){let C=!1,st=null,J=null,dt=null,Q=null,j=null,pt=null,Lt=null,re=null;return{setTest:function(Zt){C||(Zt?lt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!C&&(n.stencilMask(Zt),st=Zt)},setFunc:function(Zt,rn,gn){(J!==Zt||dt!==rn||Q!==gn)&&(n.stencilFunc(Zt,rn,gn),J=Zt,dt=rn,Q=gn)},setOp:function(Zt,rn,gn){(j!==Zt||pt!==rn||Lt!==gn)&&(n.stencilOp(Zt,rn,gn),j=Zt,pt=rn,Lt=gn)},setLocked:function(Zt){C=Zt},setClear:function(Zt){re!==Zt&&(n.clearStencil(Zt),re=Zt)},reset:function(){C=!1,st=null,J=null,dt=null,Q=null,j=null,pt=null,Lt=null,re=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,f=[],v=null,x=!1,m=null,h=null,y=null,S=null,M=null,I=null,R=null,A=new kt(0,0,0),N=0,w=!1,b=null,P=null,G=null,k=null,Y=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Z>=2);let at=null,ht={};const Mt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),ee=new fe().fromArray(Mt),W=new fe().fromArray(Bt);function et(C,st,J,dt){const Q=new Uint8Array(4),j=n.createTexture();n.bindTexture(C,j),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<J;pt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(st+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return j}const xt={};xt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),xt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Ki),Yt(!1),ne(Tl),lt(n.CULL_FACE),T(Rn);function lt(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function bt(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function jt(C,st){return d[C]!==st?(n.bindFramebuffer(C,st),d[C]=st,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function At(C,st){let J=f,dt=!1;if(C){J=p.get(st),J===void 0&&(J=[],p.set(st,J));const Q=C.textures;if(J.length!==Q.length||J[0]!==n.COLOR_ATTACHMENT0){for(let j=0,pt=Q.length;j<pt;j++)J[j]=n.COLOR_ATTACHMENT0+j;J.length=Q.length,dt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,dt=!0);dt&&n.drawBuffers(J)}function ae(C){return v!==C?(n.useProgram(C),v=C,!0):!1}const le={[hi]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};le[$h]=n.MIN,le[Zh]=n.MAX;const qt={[Jh]:n.ZERO,[Qh]:n.ONE,[td]:n.SRC_COLOR,[Vo]:n.SRC_ALPHA,[od]:n.SRC_ALPHA_SATURATE,[rd]:n.DST_COLOR,[nd]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[id]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[cd]:n.CONSTANT_ALPHA,[ud]:n.ONE_MINUS_CONSTANT_ALPHA};function T(C,st,J,dt,Q,j,pt,Lt,re,Zt){if(C===Rn){x===!0&&(bt(n.BLEND),x=!1);return}if(x===!1&&(lt(n.BLEND),x=!0),C!==qh){if(C!==m||Zt!==w){if((h!==hi||M!==hi)&&(n.blendEquation(n.FUNC_ADD),h=hi,M=hi),Zt)switch(C){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ls:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ls:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,S=null,I=null,R=null,A.set(0,0,0),N=0,m=C,w=Zt}return}Q=Q||st,j=j||J,pt=pt||dt,(st!==h||Q!==M)&&(n.blendEquationSeparate(le[st],le[Q]),h=st,M=Q),(J!==y||dt!==S||j!==I||pt!==R)&&(n.blendFuncSeparate(qt[J],qt[dt],qt[j],qt[pt]),y=J,S=dt,I=j,R=pt),(Lt.equals(A)===!1||re!==N)&&(n.blendColor(Lt.r,Lt.g,Lt.b,re),A.copy(Lt),N=re),m=C,w=!1}function Ae(C,st){C.side===Tn?bt(n.CULL_FACE):lt(n.CULL_FACE);let J=C.side===ke;st&&(J=!J),Yt(J),C.blending===Wi&&C.transparent===!1?T(Rn):T(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const dt=C.stencilWrite;a.setTest(dt),dt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ht(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function ne(C){C!==Wh?(lt(n.CULL_FACE),C!==P&&(C===Tl?n.cullFace(n.BACK):C===Xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),P=C}function _t(C){C!==G&&(X&&n.lineWidth(C),G=C)}function Ht(C,st,J){C?(lt(n.POLYGON_OFFSET_FILL),(k!==st||Y!==J)&&(n.polygonOffset(st,J),k=st,Y=J)):bt(n.POLYGON_OFFSET_FILL)}function Et(C){C?lt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function It(C){C===void 0&&(C=n.TEXTURE0+K-1),at!==C&&(n.activeTexture(C),at=C)}function ve(C,st,J){J===void 0&&(at===null?J=n.TEXTURE0+K-1:J=at);let dt=ht[J];dt===void 0&&(dt={type:void 0,texture:void 0},ht[J]=dt),(dt.type!==C||dt.texture!==st)&&(at!==J&&(n.activeTexture(J),at=J),n.bindTexture(C,st||xt[C]),dt.type=C,dt.texture=st)}function E(){const C=ht[at];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{n.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{n.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{n.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{n.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{n.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(C){ee.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ee.copy(C))}function Ct(C){W.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),W.copy(C))}function Tt(C,st){let J=c.get(st);J===void 0&&(J=new WeakMap,c.set(st,J));let dt=J.get(C);dt===void 0&&(dt=n.getUniformBlockIndex(st,C.name),J.set(C,dt))}function nt(C,st){const dt=c.get(st).get(C);l.get(st)!==dt&&(n.uniformBlockBinding(st,dt,C.__bindingPointIndex),l.set(st,dt))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,ht={},d={},p=new WeakMap,f=[],v=null,x=!1,m=null,h=null,y=null,S=null,M=null,I=null,R=null,A=new kt(0,0,0),N=0,w=!1,b=null,P=null,G=null,k=null,Y=null,ee.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:bt,bindFramebuffer:jt,drawBuffers:At,useProgram:ae,setBlending:T,setMaterial:Ae,setFlipSided:Yt,setCullFace:ne,setLineWidth:_t,setPolygonOffset:Ht,setScissorTest:Et,activeTexture:It,bindTexture:ve,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:gt,texImage3D:$,updateUBOMapping:Tt,uniformBlockBinding:nt,texStorage2D:rt,texStorage3D:mt,texSubImage2D:H,texSubImage3D:q,compressedTexSubImage2D:z,compressedTexSubImage3D:vt,scissor:ct,viewport:Ct,reset:Dt}}function ug(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return f?new OffscreenCanvas(E,_):Ns("canvas")}function x(E,_,F){let H=1;const q=ve(E);if((q.width>F||q.height>F)&&(H=F/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const z=Math.floor(H*q.width),vt=Math.floor(H*q.height);d===void 0&&(d=v(z,vt));const rt=_?v(z,vt):d;return rt.width=z,rt.height=vt,rt.getContext("2d").drawImage(E,0,0,z,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+z+"x"+vt+")."),rt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,_,F,H,q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=_;if(_===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),_===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),_===n.RGBA){const vt=q?Us:Wt.getTransfer(H);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=vt===Qt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function M(E,_){let F;return E?_===null||_===mi||_===Sr?F=n.DEPTH24_STENCIL8:_===un?F=n.DEPTH32F_STENCIL8:_===Er&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mi||_===Sr?F=n.DEPTH_COMPONENT24:_===un?F=n.DEPTH_COMPONENT32F:_===Er&&(F=n.DEPTH_COMPONENT16),F}function I(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Se&&E.minFilter!==pn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),b(_)}function N(E){const _=i.get(E);if(_.__webglInit===void 0)return;const F=E.source,H=p.get(F);if(H){const q=H[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&w(E),Object.keys(H).length===0&&p.delete(F)}i.remove(E)}function w(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const F=E.source,H=p.get(F);delete H[_.__cacheKey],o.memory.textures--}function b(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let q=0;q<_.__webglFramebuffer[H].length;q++)n.deleteFramebuffer(_.__webglFramebuffer[H][q]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let H=0,q=F.length;H<q;H++){const z=i.get(F[H]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(F[H])}i.remove(E)}let P=0;function G(){P=0}function k(){const E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function Y(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){const F=i.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,E,_);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){xt(F,E,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Z(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){xt(F,E,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function V(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){lt(F,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const at={[Zo]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},ht={[Se]:n.NEAREST,[bd]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[to]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Mt={[yd]:n.NEVER,[Dd]:n.ALWAYS,[Td]:n.LESS,[_u]:n.LEQUAL,[Cd]:n.EQUAL,[Rd]:n.GEQUAL,[Ad]:n.GREATER,[Pd]:n.NOTEQUAL};function Bt(E,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===pn||_.magFilter===to||_.magFilter===$r||_.magFilter===pi||_.minFilter===pn||_.minFilter===to||_.minFilter===$r||_.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,at[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,at[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,at[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ht[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Se||_.minFilter!==$r&&_.minFilter!==pi||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ee(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let q=p.get(H);q===void 0&&(q={},p.set(H,q));const z=Y(_);if(z!==E.__cacheKey){q[z]===void 0&&(q[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),q[z].usedTimes++;const vt=q[E.__cacheKey];vt!==void 0&&(q[E.__cacheKey].usedTimes--,vt.usedTimes===0&&w(_)),E.__cacheKey=z,E.__webglTexture=q[z].texture}return F}function W(E,_,F){return Math.floor(Math.floor(E/F)/_)}function et(E,_,F,H){const z=E.updateRanges;if(z.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,H,_.data);else{z.sort(($,ct)=>$.start-ct.start);let vt=0;for(let $=1;$<z.length;$++){const ct=z[vt],Ct=z[$],Tt=ct.start+ct.count,nt=W(Ct.start,_.width,4),Dt=W(ct.start,_.width,4);Ct.start<=Tt+1&&nt===Dt&&W(Ct.start+Ct.count-1,_.width,4)===nt?ct.count=Math.max(ct.count,Ct.start+Ct.count-ct.start):(++vt,z[vt]=Ct)}z.length=vt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),mt=n.getParameter(n.UNPACK_SKIP_PIXELS),gt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let $=0,ct=z.length;$<ct;$++){const Ct=z[$],Tt=Math.floor(Ct.start/4),nt=Math.ceil(Ct.count/4),Dt=Tt%_.width,C=Math.floor(Tt/_.width),st=nt,J=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,C),e.texSubImage2D(n.TEXTURE_2D,0,Dt,C,st,J,F,H,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,gt)}}function xt(E,_,F){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const q=ee(E,_),z=_.source;e.bindTexture(H,E.__webglTexture,n.TEXTURE0+F);const vt=i.get(z);if(z.version!==vt.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const rt=Wt.getPrimaries(Wt.workingColorSpace),mt=_.colorSpace===Kn?null:Wt.getPrimaries(_.colorSpace),gt=_.colorSpace===Kn||rt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let $=x(_.image,!1,r.maxTextureSize);$=It(_,$);const ct=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type);let Tt=S(_.internalFormat,ct,Ct,_.colorSpace,_.isVideoTexture);Bt(H,_);let nt;const Dt=_.mipmaps,C=_.isVideoTexture!==!0,st=vt.__version===void 0||q===!0,J=z.dataReady,dt=I(_,$);if(_.isDepthTexture)Tt=M(_.format===Tr,_.type),st&&(C?e.texStorage2D(n.TEXTURE_2D,1,Tt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,Tt,$.width,$.height,0,ct,Ct,null));else if(_.isDataTexture)if(Dt.length>0){C&&st&&e.texStorage2D(n.TEXTURE_2D,dt,Tt,Dt[0].width,Dt[0].height);for(let Q=0,j=Dt.length;Q<j;Q++)nt=Dt[Q],C?J&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,nt.width,nt.height,ct,Ct,nt.data):e.texImage2D(n.TEXTURE_2D,Q,Tt,nt.width,nt.height,0,ct,Ct,nt.data);_.generateMipmaps=!1}else C?(st&&e.texStorage2D(n.TEXTURE_2D,dt,Tt,$.width,$.height),J&&et(_,$,ct,Ct)):e.texImage2D(n.TEXTURE_2D,0,Tt,$.width,$.height,0,ct,Ct,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Tt,Dt[0].width,Dt[0].height,$.depth);for(let Q=0,j=Dt.length;Q<j;Q++)if(nt=Dt[Q],_.format!==We)if(ct!==null)if(C){if(J)if(_.layerUpdates.size>0){const pt=rc(nt.width,nt.height,_.format,_.type);for(const Lt of _.layerUpdates){const re=nt.data.subarray(Lt*pt/nt.data.BYTES_PER_ELEMENT,(Lt+1)*pt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Lt,nt.width,nt.height,1,ct,re)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,nt.width,nt.height,$.depth,ct,nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Tt,nt.width,nt.height,$.depth,0,nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?J&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,nt.width,nt.height,$.depth,ct,Ct,nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Tt,nt.width,nt.height,$.depth,0,ct,Ct,nt.data)}else{C&&st&&e.texStorage2D(n.TEXTURE_2D,dt,Tt,Dt[0].width,Dt[0].height);for(let Q=0,j=Dt.length;Q<j;Q++)nt=Dt[Q],_.format!==We?ct!==null?C?J&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,nt.width,nt.height,ct,nt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Tt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?J&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,nt.width,nt.height,ct,Ct,nt.data):e.texImage2D(n.TEXTURE_2D,Q,Tt,nt.width,nt.height,0,ct,Ct,nt.data)}else if(_.isDataArrayTexture)if(C){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Tt,$.width,$.height,$.depth),J)if(_.layerUpdates.size>0){const Q=rc($.width,$.height,_.format,_.type);for(const j of _.layerUpdates){const pt=$.data.subarray(j*Q/$.data.BYTES_PER_ELEMENT,(j+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,ct,Ct,pt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,Ct,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,$.width,$.height,$.depth,0,ct,Ct,$.data);else if(_.isData3DTexture)C?(st&&e.texStorage3D(n.TEXTURE_3D,dt,Tt,$.width,$.height,$.depth),J&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,Ct,$.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,$.width,$.height,$.depth,0,ct,Ct,$.data);else if(_.isFramebufferTexture){if(st)if(C)e.texStorage2D(n.TEXTURE_2D,dt,Tt,$.width,$.height);else{let Q=$.width,j=$.height;for(let pt=0;pt<dt;pt++)e.texImage2D(n.TEXTURE_2D,pt,Tt,Q,j,0,ct,Ct,null),Q>>=1,j>>=1}}else if(Dt.length>0){if(C&&st){const Q=ve(Dt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Tt,Q.width,Q.height)}for(let Q=0,j=Dt.length;Q<j;Q++)nt=Dt[Q],C?J&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct,Ct,nt):e.texImage2D(n.TEXTURE_2D,Q,Tt,ct,Ct,nt);_.generateMipmaps=!1}else if(C){if(st){const Q=ve($);e.texStorage2D(n.TEXTURE_2D,dt,Tt,Q.width,Q.height)}J&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,Ct,$)}else e.texImage2D(n.TEXTURE_2D,0,Tt,ct,Ct,$);m(_)&&h(H),vt.__version=z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function lt(E,_,F){if(_.image.length!==6)return;const H=ee(E,_),q=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const z=i.get(q);if(q.version!==z.__version||H===!0){e.activeTexture(n.TEXTURE0+F);const vt=Wt.getPrimaries(Wt.workingColorSpace),rt=_.colorSpace===Kn?null:Wt.getPrimaries(_.colorSpace),mt=_.colorSpace===Kn||vt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const gt=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let j=0;j<6;j++)!gt&&!$?ct[j]=x(_.image[j],!0,r.maxCubemapSize):ct[j]=$?_.image[j].image:_.image[j],ct[j]=It(_,ct[j]);const Ct=ct[0],Tt=s.convert(_.format,_.colorSpace),nt=s.convert(_.type),Dt=S(_.internalFormat,Tt,nt,_.colorSpace),C=_.isVideoTexture!==!0,st=z.__version===void 0||H===!0,J=q.dataReady;let dt=I(_,Ct);Bt(n.TEXTURE_CUBE_MAP,_);let Q;if(gt){C&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Dt,Ct.width,Ct.height);for(let j=0;j<6;j++){Q=ct[j].mipmaps;for(let pt=0;pt<Q.length;pt++){const Lt=Q[pt];_.format!==We?Tt!==null?C?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,Lt.width,Lt.height,Tt,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Dt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,Lt.width,Lt.height,Tt,nt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Dt,Lt.width,Lt.height,0,Tt,nt,Lt.data)}}}else{if(Q=_.mipmaps,C&&st){Q.length>0&&dt++;const j=ve(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Dt,j.width,j.height)}for(let j=0;j<6;j++)if($){C?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ct[j].width,ct[j].height,Tt,nt,ct[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,ct[j].width,ct[j].height,0,Tt,nt,ct[j].data);for(let pt=0;pt<Q.length;pt++){const re=Q[pt].image[j].image;C?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,re.width,re.height,Tt,nt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Dt,re.width,re.height,0,Tt,nt,re.data)}}else{C?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,nt,ct[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,Tt,nt,ct[j]);for(let pt=0;pt<Q.length;pt++){const Lt=Q[pt];C?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Tt,nt,Lt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Dt,Tt,nt,Lt.image[j])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),z.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function bt(E,_,F,H,q,z){const vt=s.convert(F.format,F.colorSpace),rt=s.convert(F.type),mt=S(F.internalFormat,vt,rt,F.colorSpace),gt=i.get(_),$=i.get(F);if($.__renderTarget=_,!gt.__hasExternalTextures){const ct=Math.max(1,_.width>>z),Ct=Math.max(1,_.height>>z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,z,mt,ct,Ct,_.depth,0,vt,rt,null):e.texImage2D(q,z,mt,ct,Ct,0,vt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,q,$.__webglTexture,0,_t(_)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,q,$.__webglTexture,z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const H=_.depthTexture,q=H&&H.isDepthTexture?H.type:null,z=M(_.stencilBuffer,q),vt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_t(_);Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,E)}else{const H=_.textures;for(let q=0;q<H.length;q++){const z=H[q],vt=s.convert(z.format,z.colorSpace),rt=s.convert(z.type),mt=S(z.internalFormat,vt,rt,z.colorSpace),gt=_t(_);F&&Ht(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,mt,_.width,_.height):Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const q=H.__webglTexture,z=_t(_);if(_.depthTexture.format===yr)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===Tr)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ae(E){const _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=H}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const H=E.texture.mipmaps;H&&H.length>0?At(_.__webglFramebuffer[0],E):At(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),jt(_.__webglDepthbuffer[H],E,!1);else{const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,z)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),jt(_.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,z)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(E,_,F){const H=i.get(E);_!==void 0&&bt(H.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ae(E)}function qt(E){const _=E.texture,F=i.get(E),H=i.get(_);E.addEventListener("dispose",A);const q=E.textures,z=E.isWebGLCubeRenderTarget===!0,vt=q.length>1;if(vt||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,o.memory.textures++),z){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let mt=0;mt<_.mipmaps.length;mt++)F.__webglFramebuffer[rt][mt]=n.createFramebuffer()}else F.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)F.__webglFramebuffer[rt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(vt)for(let rt=0,mt=q.length;rt<mt;rt++){const gt=i.get(q[rt]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Ht(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<q.length;rt++){const mt=q[rt];F.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const gt=s.convert(mt.format,mt.colorSpace),$=s.convert(mt.type),ct=S(mt.internalFormat,gt,$,mt.colorSpace,E.isXRRenderTarget===!0),Ct=_t(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,ct,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),jt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)bt(F.__webglFramebuffer[rt][mt],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else bt(F.__webglFramebuffer[rt],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,mt=q.length;rt<mt;rt++){const gt=q[rt],$=i.get(gt);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),Bt(n.TEXTURE_2D,gt),bt(F.__webglFramebuffer,E,gt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),m(gt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,H.__webglTexture),Bt(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)bt(F.__webglFramebuffer[mt],E,_,n.COLOR_ATTACHMENT0,rt,mt);else bt(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,rt,0);m(_)&&h(rt),e.unbindTexture()}E.depthBuffer&&ae(E)}function T(E){const _=E.textures;for(let F=0,H=_.length;F<H;F++){const q=_[F];if(m(q)){const z=y(E),vt=i.get(q).__webglTexture;e.bindTexture(z,vt),h(z),e.unbindTexture()}}}const Ae=[],Yt=[];function ne(E){if(E.samples>0){if(Ht(E)===!1){const _=E.textures,F=E.width,H=E.height;let q=n.COLOR_BUFFER_BIT;const z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(E),rt=_.length>1;if(rt)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const mt=E.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const $=i.get(_[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,F,H,0,0,F,H,q,n.NEAREST),l===!0&&(Ae.length=0,Yt.length=0,Ae.push(n.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ae.push(z),Yt.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const $=i.get(_[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,$,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function _t(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function It(E,_){const F=E.colorSpace,H=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Ji&&F!==Kn&&(Wt.getTransfer(F)===Qt?(H!==We||q!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ht}function hg(n,t){function e(i,r=Kn){let s;const o=Wt.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return n.BYTE;if(i===cu)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Na)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===hu)return n.ALPHA;if(i===du)return n.RGB;if(i===We)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===pu)return n.RED;if(i===Ba)return n.RED_INTEGER;if(i===fu)return n.RG;if(i===ka)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===Es||i===Ss||i===ys||i===Ts)if(o===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===ta||i===ea||i===na)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ia||i===ra||i===sa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ia||i===ra)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oa||i===aa||i===la||i===ca||i===ua||i===ha||i===da||i===pa||i===fa||i===ma||i===_a||i===va||i===ga||i===xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===aa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ha)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_a)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===va)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ga)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cs||i===ba||i===wa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Cs)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mu||i===Ma||i===Ea||i===Sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ce({vertexShader:dg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fn(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends bi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,v=null;const x=new fg,m=e.getContextAttributes();let h=null,y=null;const S=[],M=[],I=new yt;let R=null;const A=new Qe;A.viewport=new fe;const N=new Qe;N.viewport=new fe;const w=[A,N],b=new Up;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=S[W];return et===void 0&&(et=new Mo,S[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=S[W];return et===void 0&&(et=new Mo,S[W]=et),et.getGripSpace()},this.getHand=function(W){let et=S[W];return et===void 0&&(et=new Mo,S[W]=et),et.getHandSpace()};function k(W){const et=M.indexOf(W.inputSource);if(et===-1)return;const xt=S[et];xt!==void 0&&(xt.update(W.inputSource,W.frame,c||o),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let W=0;W<S.length;W++){const et=M[W];et!==null&&(M[W]=null,S[W].disconnect(et))}P=null,G=null,x.reset(),t.setRenderTarget(h),f=null,p=null,d=null,r=null,y=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,lt=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=m.stencil?Tr:yr,lt=m.stencil?Sr:mi);const jt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(jt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new en(p.textureWidth,p.textureHeight,{format:We,type:In,depthTexture:new Au(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new en(f.framebufferWidth,f.framebufferHeight,{format:We,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(W){for(let et=0;et<W.removed.length;et++){const xt=W.removed[et],lt=M.indexOf(xt);lt>=0&&(M[lt]=null,S[lt].disconnect(xt))}for(let et=0;et<W.added.length;et++){const xt=W.added[et];let lt=M.indexOf(xt);if(lt===-1){for(let jt=0;jt<S.length;jt++)if(jt>=M.length){M.push(xt),lt=jt;break}else if(M[jt]===null){M[jt]=xt,lt=jt;break}if(lt===-1)break}const bt=S[lt];bt&&bt.connect(xt)}}const X=new U,Z=new U;function V(W,et,xt){X.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const lt=X.distanceTo(Z),bt=et.projectionMatrix.elements,jt=xt.projectionMatrix.elements,At=bt[14]/(bt[10]-1),ae=bt[14]/(bt[10]+1),le=(bt[9]+1)/bt[5],qt=(bt[9]-1)/bt[5],T=(bt[8]-1)/bt[0],Ae=(jt[8]+1)/jt[0],Yt=At*T,ne=At*Ae,_t=lt/(-T+Ae),Ht=_t*-T;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ht),W.translateZ(_t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),bt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=At+_t,It=ae+_t,ve=Yt-Ht,E=ne+(lt-Ht),_=le*ae/It*Et,F=qt*ae/It*Et;W.projectionMatrix.makePerspective(ve,E,_,F,Et,It),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function at(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let et=W.near,xt=W.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),b.near=N.near=A.near=et,b.far=N.far=A.far=xt,(P!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,G=b.far),A.layers.mask=W.layers.mask|2,N.layers.mask=W.layers.mask|4,b.layers.mask=A.layers.mask|N.layers.mask;const lt=W.parent,bt=b.cameras;at(b,lt);for(let jt=0;jt<bt.length;jt++)at(bt[jt],lt);bt.length===2?V(b,A,N):b.projectionMatrix.copy(A.projectionMatrix),ht(W,b,lt)};function ht(W,et,xt){xt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Mt=null;function Bt(W,et){if(u=et.getViewerPose(c||o),v=et,u!==null){const xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;xt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let At=0;At<xt.length;At++){const ae=xt[At];let le=null;if(f!==null)le=f.getViewport(ae);else{const T=d.getViewSubImage(p,ae);le=T.viewport,At===0&&(t.setRenderTargetTextures(y,T.colorTexture,T.depthStencilTexture),t.setRenderTarget(y))}let qt=w[At];qt===void 0&&(qt=new Qe,qt.layers.enable(At),qt.viewport=new fe,w[At]=qt),qt.matrix.fromArray(ae.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ae.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(le.x,le.y,le.width,le.height),At===0&&(b.matrix.copy(qt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(qt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const At=d.getDepthInformation(xt[0]);At&&At.isValid&&At.texture&&x.init(t,At,r.renderState)}}for(let xt=0;xt<S.length;xt++){const lt=M[xt],bt=S[xt];lt!==null&&bt!==void 0&&bt.update(lt,et,c||o)}Mt&&Mt(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}const ee=new Du;ee.setAnimationLoop(Bt),this.setAnimationLoop=function(W){Mt=W},this.dispose=function(){}}}const li=new Nn,_g=new pe;function vg(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Eu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,S,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ke&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ke&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=t.get(h),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,li.copy(M),li.x*=-1,li.y*=-1,li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(li)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=S*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ke&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gg(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=r[y.id];M===void 0&&(v(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(y,I);const R=t.render.frame;s[y.id]!==R&&(p(y),s[y.id]=R)}function u(y){const S=d();y.__bindingPointIndex=S;const M=n.createBuffer(),I=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=r[y.id],M=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,A=M.length;R<A;R++){const N=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,b=N.length;w<b;w++){const P=N[w];if(f(P,R,w,I)===!0){const G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let K=0;K<k.length;K++){const X=k[K],Z=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,S,M,I){const R=y.value,A=S+"_"+M;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const N=I[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return I[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function v(y){const S=y.uniforms;let M=0;const I=16;for(let A=0,N=S.length;A<N;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,P=w.length;b<P;b++){const G=w[b],k=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,K=k.length;Y<K;Y++){const X=k[Y],Z=x(X),V=M%I,at=V%Z.boundary,ht=V+at;M+=at,ht!==0&&I-ht<Z.storage&&(M+=I-ht),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=Z.storage}}}const R=M%I;return R>0&&(M+=I-R),y.__size=M,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class xg{constructor(t={}){const{canvas:e=Kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=Je;let R=0,A=0,N=null,w=-1,b=null;const P=new fe,G=new fe;let k=null;const Y=new kt(0);let K=0,X=e.width,Z=e.height,V=1,at=null,ht=null;const Mt=new fe(0,0,X,Z),Bt=new fe(0,0,X,Z);let ee=!1;const W=new Tu;let et=!1,xt=!1;const lt=new pe,bt=new pe,jt=new U,At=new fe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function qt(){return N===null?V:1}let T=i;function Ae(g,D){return e.getContext(g,D)}try{const g={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ia}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",j,!1),T===null){const D="webgl2";if(T=Ae(D,g),T===null)throw Ae(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Yt,ne,_t,Ht,Et,It,ve,E,_,F,H,q,z,vt,rt,mt,gt,$,ct,Ct,Tt,nt,Dt,C;function st(){Yt=new P_(T),Yt.init(),nt=new hg(T,Yt),ne=new M_(T,Yt,t,nt),_t=new cg(T,Yt),ne.reverseDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),Ht=new L_(T),Et=new $v,It=new ug(T,Yt,_t,Et,ne,nt,Ht),ve=new S_(M),E=new A_(M),_=new Op(T),Dt=new b_(T,_),F=new R_(T,_,Ht,Dt),H=new I_(T,F,_,Ht),ct=new U_(T,ne,It),mt=new E_(Et),q=new Kv(M,ve,E,Yt,ne,Dt,mt),z=new vg(M,Et),vt=new Jv,rt=new rg(Yt),$=new x_(M,ve,E,_t,H,f,l),gt=new ag(M,H,ne),C=new gg(T,Ht,ne,_t),Ct=new w_(T,Yt,Ht),Tt=new D_(T,Yt,Ht),Ht.programs=q.programs,M.capabilities=ne,M.extensions=Yt,M.properties=Et,M.renderLists=vt,M.shadowMap=gt,M.state=_t,M.info=Ht}st();const J=new mg(M,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const g=Yt.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Yt.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(g){g!==void 0&&(V=g,this.setSize(X,Z,!1))},this.getSize=function(g){return g.set(X,Z)},this.setSize=function(g,D,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=g,Z=D,e.width=Math.floor(g*V),e.height=Math.floor(D*V),O===!0&&(e.style.width=g+"px",e.style.height=D+"px"),this.setViewport(0,0,g,D)},this.getDrawingBufferSize=function(g){return g.set(X*V,Z*V).floor()},this.setDrawingBufferSize=function(g,D,O){X=g,Z=D,V=O,e.width=Math.floor(g*O),e.height=Math.floor(D*O),this.setViewport(0,0,g,D)},this.getCurrentViewport=function(g){return g.copy(P)},this.getViewport=function(g){return g.copy(Mt)},this.setViewport=function(g,D,O,B){g.isVector4?Mt.set(g.x,g.y,g.z,g.w):Mt.set(g,D,O,B),_t.viewport(P.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(g){return g.copy(Bt)},this.setScissor=function(g,D,O,B){g.isVector4?Bt.set(g.x,g.y,g.z,g.w):Bt.set(g,D,O,B),_t.scissor(G.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(g){_t.setScissorTest(ee=g)},this.setOpaqueSort=function(g){at=g},this.setTransparentSort=function(g){ht=g},this.getClearColor=function(g){return g.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(g=!0,D=!0,O=!0){let B=0;if(g){let L=!1;if(N!==null){const tt=N.texture.format;L=tt===Va||tt===ka||tt===Ba}if(L){const tt=N.texture.type,ot=tt===In||tt===mi||tt===Er||tt===Sr||tt===Fa||tt===Oa,ft=$.getClearColor(),ut=$.getClearAlpha(),Pt=ft.r,Rt=ft.g,wt=ft.b;ot?(v[0]=Pt,v[1]=Rt,v[2]=wt,v[3]=ut,T.clearBufferuiv(T.COLOR,0,v)):(x[0]=Pt,x[1]=Rt,x[2]=wt,x[3]=ut,T.clearBufferiv(T.COLOR,0,x))}else B|=T.COLOR_BUFFER_BIT}D&&(B|=T.DEPTH_BUFFER_BIT),O&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",j,!1),$.dispose(),vt.dispose(),rt.dispose(),Et.dispose(),ve.dispose(),E.dispose(),H.dispose(),Dt.dispose(),C.dispose(),q.dispose(),J.dispose(),J.removeEventListener("sessionstart",xl),J.removeEventListener("sessionend",bl),ei.stop()};function dt(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const g=Ht.autoReset,D=gt.enabled,O=gt.autoUpdate,B=gt.needsUpdate,L=gt.type;st(),Ht.autoReset=g,gt.enabled=D,gt.autoUpdate=O,gt.needsUpdate=B,gt.type=L}function j(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function pt(g){const D=g.target;D.removeEventListener("dispose",pt),Lt(D)}function Lt(g){re(g),Et.remove(g)}function re(g){const D=Et.get(g).programs;D!==void 0&&(D.forEach(function(O){q.releaseProgram(O)}),g.isShaderMaterial&&q.releaseShaderCache(g))}this.renderBufferDirect=function(g,D,O,B,L,tt){D===null&&(D=ae);const ot=L.isMesh&&L.matrixWorld.determinant()<0,ft=Bh(g,D,O,B,L);_t.setMaterial(B,ot);let ut=O.index,Pt=1;if(B.wireframe===!0){if(ut=F.getWireframeAttribute(O),ut===void 0)return;Pt=2}const Rt=O.drawRange,wt=O.attributes.position;let Vt=Rt.start*Pt,Jt=(Rt.start+Rt.count)*Pt;tt!==null&&(Vt=Math.max(Vt,tt.start*Pt),Jt=Math.min(Jt,(tt.start+tt.count)*Pt)),ut!==null?(Vt=Math.max(Vt,0),Jt=Math.min(Jt,ut.count)):wt!=null&&(Vt=Math.max(Vt,0),Jt=Math.min(Jt,wt.count));const ce=Jt-Vt;if(ce<0||ce===1/0)return;Dt.setup(L,B,ft,O,ut);let he,Gt=Ct;if(ut!==null&&(he=_.get(ut),Gt=Tt,Gt.setIndex(he)),L.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*qt()),Gt.setMode(T.LINES)):Gt.setMode(T.TRIANGLES);else if(L.isLine){let St=B.linewidth;St===void 0&&(St=1),_t.setLineWidth(St*qt()),L.isLineSegments?Gt.setMode(T.LINES):L.isLineLoop?Gt.setMode(T.LINE_LOOP):Gt.setMode(T.LINE_STRIP)}else L.isPoints?Gt.setMode(T.POINTS):L.isSprite&&Gt.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const St=L._multiDrawStarts,Ee=L._multiDrawCounts,Kt=L._multiDrawCount,sn=ut?_.get(ut).bytesPerElement:1,Ei=Et.get(B).currentProgram.getUniforms();for(let ze=0;ze<Kt;ze++)Ei.setValue(T,"_gl_DrawID",ze),Gt.render(St[ze]/sn,Ee[ze])}else if(L.isInstancedMesh)Gt.renderInstances(Vt,ce,L.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ee=Math.min(O.instanceCount,St);Gt.renderInstances(Vt,ce,Ee)}else Gt.render(Vt,ce)};function Zt(g,D,O){g.transparent===!0&&g.side===Tn&&g.forceSinglePass===!1?(g.side=ke,g.needsUpdate=!0,Kr(g,D,O),g.side=Qn,g.needsUpdate=!0,Kr(g,D,O),g.side=Tn):Kr(g,D,O)}this.compile=function(g,D,O=null){O===null&&(O=g),h=rt.get(O),h.init(D),S.push(h),O.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),g!==O&&g.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const B=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const tt=L.material;if(tt)if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++){const ft=tt[ot];Zt(ft,O,L),B.add(ft)}else Zt(tt,O,L),B.add(tt)}),h=S.pop(),B},this.compileAsync=function(g,D,O=null){const B=this.compile(g,D,O);return new Promise(L=>{function tt(){if(B.forEach(function(ot){Et.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){L(g);return}setTimeout(tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let rn=null;function gn(g){rn&&rn(g)}function xl(){ei.stop()}function bl(){ei.start()}const ei=new Du;ei.setAnimationLoop(gn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(g){rn=g,J.setAnimationLoop(g),g===null?ei.stop():ei.start()},J.addEventListener("sessionstart",xl),J.addEventListener("sessionend",bl),this.render=function(g,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(D),D=J.getCamera()),g.isScene===!0&&g.onBeforeRender(M,g,D,N),h=rt.get(g,S.length),h.init(D),S.push(h),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,et=mt.init(this.clippingPlanes,xt),m=vt.get(g,y.length),m.init(),y.push(m),J.enabled===!0&&J.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&Js(tt,D,-1/0,M.sortObjects)}Js(g,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(at,ht),le=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,le&&$.addToRenderList(m,g),this.info.render.frame++,et===!0&&mt.beginShadows();const O=h.state.shadowsArray;gt.render(O,g,D),et===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,L=m.transmissive;if(h.setupLights(),D.isArrayCamera){const tt=D.cameras;if(L.length>0)for(let ot=0,ft=tt.length;ot<ft;ot++){const ut=tt[ot];Ml(B,L,g,ut)}le&&$.render(g);for(let ot=0,ft=tt.length;ot<ft;ot++){const ut=tt[ot];wl(m,g,ut,ut.viewport)}}else L.length>0&&Ml(B,L,g,D),le&&$.render(g),wl(m,g,D);N!==null&&A===0&&(It.updateMultisampleRenderTarget(N),It.updateRenderTargetMipmap(N)),g.isScene===!0&&g.onAfterRender(M,g,D),Dt.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],et===!0&&mt.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Js(g,D,O,B){if(g.visible===!1)return;if(g.layers.test(D.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(D);else if(g.isLight)h.pushLight(g),g.castShadow&&h.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||W.intersectsSprite(g)){B&&At.setFromMatrixPosition(g.matrixWorld).applyMatrix4(bt);const ot=H.update(g),ft=g.material;ft.visible&&m.push(g,ot,ft,O,At.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||W.intersectsObject(g))){const ot=H.update(g),ft=g.material;if(B&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),At.copy(g.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),At.copy(ot.boundingSphere.center)),At.applyMatrix4(g.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){const ut=ot.groups;for(let Pt=0,Rt=ut.length;Pt<Rt;Pt++){const wt=ut[Pt],Vt=ft[wt.materialIndex];Vt&&Vt.visible&&m.push(g,ot,Vt,O,At.z,wt)}}else ft.visible&&m.push(g,ot,ft,O,At.z,null)}}const tt=g.children;for(let ot=0,ft=tt.length;ot<ft;ot++)Js(tt[ot],D,O,B)}function wl(g,D,O,B){const L=g.opaque,tt=g.transmissive,ot=g.transparent;h.setupLightsView(O),et===!0&&mt.setGlobalState(M.clippingPlanes,O),B&&_t.viewport(P.copy(B)),L.length>0&&Yr(L,D,O),tt.length>0&&Yr(tt,D,O),ot.length>0&&Yr(ot,D,O),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ml(g,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new en(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Dn:In,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=h.state.transmissionRenderTarget[B.id],ot=B.viewport||P;tt.setSize(ot.z*M.transmissionResolutionScale,ot.w*M.transmissionResolutionScale);const ft=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(Y),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),le&&$.render(O);const ut=M.toneMapping;M.toneMapping=Zn;const Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),et===!0&&mt.setGlobalState(M.clippingPlanes,B),Yr(g,O,B),It.updateMultisampleRenderTarget(tt),It.updateRenderTargetMipmap(tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let wt=0,Vt=D.length;wt<Vt;wt++){const Jt=D[wt],ce=Jt.object,he=Jt.geometry,Gt=Jt.material,St=Jt.group;if(Gt.side===Tn&&ce.layers.test(B.layers)){const Ee=Gt.side;Gt.side=ke,Gt.needsUpdate=!0,El(ce,O,B,he,Gt,St),Gt.side=Ee,Gt.needsUpdate=!0,Rt=!0}}Rt===!0&&(It.updateMultisampleRenderTarget(tt),It.updateRenderTargetMipmap(tt))}M.setRenderTarget(ft),M.setClearColor(Y,K),Pt!==void 0&&(B.viewport=Pt),M.toneMapping=ut}function Yr(g,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,tt=g.length;L<tt;L++){const ot=g[L],ft=ot.object,ut=ot.geometry,Pt=ot.group;let Rt=ot.material;Rt.allowOverride===!0&&B!==null&&(Rt=B),ft.layers.test(O.layers)&&El(ft,D,O,ut,Rt,Pt)}}function El(g,D,O,B,L,tt){g.onBeforeRender(M,D,O,B,L,tt),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(M,D,O,B,g,tt),L.transparent===!0&&L.side===Tn&&L.forceSinglePass===!1?(L.side=ke,L.needsUpdate=!0,M.renderBufferDirect(O,D,B,L,g,tt),L.side=Qn,L.needsUpdate=!0,M.renderBufferDirect(O,D,B,L,g,tt),L.side=Tn):M.renderBufferDirect(O,D,B,L,g,tt),g.onAfterRender(M,D,O,B,L,tt)}function Kr(g,D,O){D.isScene!==!0&&(D=ae);const B=Et.get(g),L=h.state.lights,tt=h.state.shadowsArray,ot=L.state.version,ft=q.getParameters(g,L.state,tt,D,O),ut=q.getProgramCacheKey(ft);let Pt=B.programs;B.environment=g.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(g.isMeshStandardMaterial?E:ve).get(g.envMap||B.environment),B.envMapRotation=B.environment!==null&&g.envMap===null?D.environmentRotation:g.envMapRotation,Pt===void 0&&(g.addEventListener("dispose",pt),Pt=new Map,B.programs=Pt);let Rt=Pt.get(ut);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===ot)return yl(g,ft),Rt}else ft.uniforms=q.getUniforms(g),g.onBeforeCompile(ft,M),Rt=q.acquireProgram(ft,ut),Pt.set(ut,Rt),B.uniforms=ft.uniforms;const wt=B.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(wt.clippingPlanes=mt.uniform),yl(g,ft),B.needsLights=Vh(g),B.lightsStateVersion=ot,B.needsLights&&(wt.ambientLightColor.value=L.state.ambient,wt.lightProbe.value=L.state.probe,wt.directionalLights.value=L.state.directional,wt.directionalLightShadows.value=L.state.directionalShadow,wt.spotLights.value=L.state.spot,wt.spotLightShadows.value=L.state.spotShadow,wt.rectAreaLights.value=L.state.rectArea,wt.ltc_1.value=L.state.rectAreaLTC1,wt.ltc_2.value=L.state.rectAreaLTC2,wt.pointLights.value=L.state.point,wt.pointLightShadows.value=L.state.pointShadow,wt.hemisphereLights.value=L.state.hemi,wt.directionalShadowMap.value=L.state.directionalShadowMap,wt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,wt.spotShadowMap.value=L.state.spotShadowMap,wt.spotLightMatrix.value=L.state.spotLightMatrix,wt.spotLightMap.value=L.state.spotLightMap,wt.pointShadowMap.value=L.state.pointShadowMap,wt.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function Sl(g){if(g.uniformsList===null){const D=g.currentProgram.getUniforms();g.uniformsList=As.seqWithValue(D.seq,g.uniforms)}return g.uniformsList}function yl(g,D){const O=Et.get(g);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Bh(g,D,O,B,L){D.isScene!==!0&&(D=ae),It.resetTextureUnits();const tt=D.fog,ot=B.isMeshStandardMaterial?D.environment:null,ft=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ji,ut=(B.isMeshStandardMaterial?E:ve).get(B.envMap||ot),Pt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Rt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!O.morphAttributes.position,Vt=!!O.morphAttributes.normal,Jt=!!O.morphAttributes.color;let ce=Zn;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ce=M.toneMapping);const he=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Gt=he!==void 0?he.length:0,St=Et.get(B),Ee=h.state.lights;if(et===!0&&(xt===!0||g!==b)){const Pe=g===b&&B.id===w;mt.setState(B,g,Pe)}let Kt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ee.state.version||St.outputColorSpace!==ft||L.isBatchedMesh&&St.batching===!1||!L.isBatchedMesh&&St.batching===!0||L.isBatchedMesh&&St.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&St.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&St.instancing===!1||!L.isInstancedMesh&&St.instancing===!0||L.isSkinnedMesh&&St.skinning===!1||!L.isSkinnedMesh&&St.skinning===!0||L.isInstancedMesh&&St.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&St.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&St.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&St.instancingMorph===!1&&L.morphTexture!==null||St.envMap!==ut||B.fog===!0&&St.fog!==tt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==mt.numPlanes||St.numIntersection!==mt.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Rt||St.morphTargets!==wt||St.morphNormals!==Vt||St.morphColors!==Jt||St.toneMapping!==ce||St.morphTargetsCount!==Gt)&&(Kt=!0):(Kt=!0,St.__version=B.version);let sn=St.currentProgram;Kt===!0&&(sn=Kr(B,D,L));let Ei=!1,ze=!1,cr=!1;const se=sn.getUniforms(),Ye=St.uniforms;if(_t.useProgram(sn.program)&&(Ei=!0,ze=!0,cr=!0),B.id!==w&&(w=B.id,ze=!0),Ei||b!==g){_t.buffers.depth.getReversed()?(lt.copy(g.projectionMatrix),Zd(lt),Jd(lt),se.setValue(T,"projectionMatrix",lt)):se.setValue(T,"projectionMatrix",g.projectionMatrix),se.setValue(T,"viewMatrix",g.matrixWorldInverse);const Fe=se.map.cameraPosition;Fe!==void 0&&Fe.setValue(T,jt.setFromMatrixPosition(g.matrixWorld)),ne.logarithmicDepthBuffer&&se.setValue(T,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(T,"isOrthographic",g.isOrthographicCamera===!0),b!==g&&(b=g,ze=!0,cr=!0)}if(L.isSkinnedMesh){se.setOptional(T,L,"bindMatrix"),se.setOptional(T,L,"bindMatrixInverse");const Pe=L.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),se.setValue(T,"boneTexture",Pe.boneTexture,It))}L.isBatchedMesh&&(se.setOptional(T,L,"batchingTexture"),se.setValue(T,"batchingTexture",L._matricesTexture,It),se.setOptional(T,L,"batchingIdTexture"),se.setValue(T,"batchingIdTexture",L._indirectTexture,It),se.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&se.setValue(T,"batchingColorTexture",L._colorsTexture,It));const Ke=O.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&ct.update(L,O,sn),(ze||St.receiveShadow!==L.receiveShadow)&&(St.receiveShadow=L.receiveShadow,se.setValue(T,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ye.envMap.value=ut,Ye.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ye.envMapIntensity.value=D.environmentIntensity),ze&&(se.setValue(T,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&kh(Ye,cr),tt&&B.fog===!0&&z.refreshFogUniforms(Ye,tt),z.refreshMaterialUniforms(Ye,B,V,Z,h.state.transmissionRenderTarget[g.id]),As.upload(T,Sl(St),Ye,It)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(As.upload(T,Sl(St),Ye,It),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(T,"center",L.center),se.setValue(T,"modelViewMatrix",L.modelViewMatrix),se.setValue(T,"normalMatrix",L.normalMatrix),se.setValue(T,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pe=B.uniformsGroups;for(let Fe=0,Qs=Pe.length;Fe<Qs;Fe++){const ni=Pe[Fe];C.update(ni,sn),C.bind(ni,sn)}}return sn}function kh(g,D){g.ambientLightColor.needsUpdate=D,g.lightProbe.needsUpdate=D,g.directionalLights.needsUpdate=D,g.directionalLightShadows.needsUpdate=D,g.pointLights.needsUpdate=D,g.pointLightShadows.needsUpdate=D,g.spotLights.needsUpdate=D,g.spotLightShadows.needsUpdate=D,g.rectAreaLights.needsUpdate=D,g.hemisphereLights.needsUpdate=D}function Vh(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(g,D,O){const B=Et.get(g);B.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Et.get(g.texture).__webglTexture=D,Et.get(g.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,D){const O=Et.get(g);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const zh=T.createFramebuffer();this.setRenderTarget=function(g,D=0,O=0){N=g,R=D,A=O;let B=!0,L=null,tt=!1,ot=!1;if(g){const ut=Et.get(g);if(ut.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(ut.__webglFramebuffer===void 0)It.setupRenderTarget(g);else if(ut.__hasExternalTextures)It.rebindTextures(g,Et.get(g.texture).__webglTexture,Et.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const wt=g.depthTexture;if(ut.__boundDepthTexture!==wt){if(wt!==null&&Et.has(wt)&&(g.width!==wt.image.width||g.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(g)}}const Pt=g.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ot=!0);const Rt=Et.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?L=Rt[D][O]:L=Rt[D],tt=!0):g.samples>0&&It.useMultisampledRTT(g)===!1?L=Et.get(g).__webglMultisampledFramebuffer:Array.isArray(Rt)?L=Rt[O]:L=Rt,P.copy(g.viewport),G.copy(g.scissor),k=g.scissorTest}else P.copy(Mt).multiplyScalar(V).floor(),G.copy(Bt).multiplyScalar(V).floor(),k=ee;if(O!==0&&(L=zh),_t.bindFramebuffer(T.FRAMEBUFFER,L)&&B&&_t.drawBuffers(g,L),_t.viewport(P),_t.scissor(G),_t.setScissorTest(k),tt){const ut=Et.get(g.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,O)}else if(ot){const ut=Et.get(g.texture),Pt=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ut.__webglTexture,O,Pt)}else if(g!==null&&O!==0){const ut=Et.get(g.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ut.__webglTexture,O)}w=-1},this.readRenderTargetPixels=function(g,D,O,B,L,tt,ot,ft=0){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Et.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ot!==void 0&&(ut=ut[ot]),ut){_t.bindFramebuffer(T.FRAMEBUFFER,ut);try{const Pt=g.textures[ft],Rt=Pt.format,wt=Pt.type;if(!ne.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=g.width-B&&O>=0&&O<=g.height-L&&(g.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ft),T.readPixels(D,O,B,L,nt.convert(Rt),nt.convert(wt),tt))}finally{const Pt=N!==null?Et.get(N).__webglFramebuffer:null;_t.bindFramebuffer(T.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(g,D,O,B,L,tt,ot,ft=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Et.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ot!==void 0&&(ut=ut[ot]),ut)if(D>=0&&D<=g.width-B&&O>=0&&O<=g.height-L){_t.bindFramebuffer(T.FRAMEBUFFER,ut);const Pt=g.textures[ft],Rt=Pt.format,wt=Pt.type;if(!ne.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Vt),T.bufferData(T.PIXEL_PACK_BUFFER,tt.byteLength,T.STREAM_READ),g.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ft),T.readPixels(D,O,B,L,nt.convert(Rt),nt.convert(wt),0);const Jt=N!==null?Et.get(N).__webglFramebuffer:null;_t.bindFramebuffer(T.FRAMEBUFFER,Jt);const ce=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await $d(T,ce,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Vt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,tt),T.deleteBuffer(Vt),T.deleteSync(ce),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,D=null,O=0){const B=Math.pow(2,-O),L=Math.floor(g.image.width*B),tt=Math.floor(g.image.height*B),ot=D!==null?D.x:0,ft=D!==null?D.y:0;It.setTexture2D(g,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,ot,ft,L,tt),_t.unbindTexture()};const Hh=T.createFramebuffer(),Gh=T.createFramebuffer();this.copyTextureToTexture=function(g,D,O=null,B=null,L=0,tt=null){tt===null&&(L!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=L,L=0):tt=0);let ot,ft,ut,Pt,Rt,wt,Vt,Jt,ce;const he=g.isCompressedTexture?g.mipmaps[tt]:g.image;if(O!==null)ot=O.max.x-O.min.x,ft=O.max.y-O.min.y,ut=O.isBox3?O.max.z-O.min.z:1,Pt=O.min.x,Rt=O.min.y,wt=O.isBox3?O.min.z:0;else{const Ke=Math.pow(2,-L);ot=Math.floor(he.width*Ke),ft=Math.floor(he.height*Ke),g.isDataArrayTexture?ut=he.depth:g.isData3DTexture?ut=Math.floor(he.depth*Ke):ut=1,Pt=0,Rt=0,wt=0}B!==null?(Vt=B.x,Jt=B.y,ce=B.z):(Vt=0,Jt=0,ce=0);const Gt=nt.convert(D.format),St=nt.convert(D.type);let Ee;D.isData3DTexture?(It.setTexture3D(D,0),Ee=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(It.setTexture2DArray(D,0),Ee=T.TEXTURE_2D_ARRAY):(It.setTexture2D(D,0),Ee=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const Kt=T.getParameter(T.UNPACK_ROW_LENGTH),sn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ei=T.getParameter(T.UNPACK_SKIP_PIXELS),ze=T.getParameter(T.UNPACK_SKIP_ROWS),cr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,he.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,he.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Rt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt);const se=g.isDataArrayTexture||g.isData3DTexture,Ye=D.isDataArrayTexture||D.isData3DTexture;if(g.isDepthTexture){const Ke=Et.get(g),Pe=Et.get(D),Fe=Et.get(Ke.__renderTarget),Qs=Et.get(Pe.__renderTarget);_t.bindFramebuffer(T.READ_FRAMEBUFFER,Fe.__webglFramebuffer),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let ni=0;ni<ut;ni++)se&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Et.get(g).__webglTexture,L,wt+ni),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,tt,ce+ni)),T.blitFramebuffer(Pt,Rt,ot,ft,Vt,Jt,ot,ft,T.DEPTH_BUFFER_BIT,T.NEAREST);_t.bindFramebuffer(T.READ_FRAMEBUFFER,null),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||Et.has(g)){const Ke=Et.get(g),Pe=Et.get(D);_t.bindFramebuffer(T.READ_FRAMEBUFFER,Hh),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gh);for(let Fe=0;Fe<ut;Fe++)se?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ke.__webglTexture,L,wt+Fe):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ke.__webglTexture,L),Ye?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pe.__webglTexture,tt,ce+Fe):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pe.__webglTexture,tt),L!==0?T.blitFramebuffer(Pt,Rt,ot,ft,Vt,Jt,ot,ft,T.COLOR_BUFFER_BIT,T.NEAREST):Ye?T.copyTexSubImage3D(Ee,tt,Vt,Jt,ce+Fe,Pt,Rt,ot,ft):T.copyTexSubImage2D(Ee,tt,Vt,Jt,Pt,Rt,ot,ft);_t.bindFramebuffer(T.READ_FRAMEBUFFER,null),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ye?g.isDataTexture||g.isData3DTexture?T.texSubImage3D(Ee,tt,Vt,Jt,ce,ot,ft,ut,Gt,St,he.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(Ee,tt,Vt,Jt,ce,ot,ft,ut,Gt,he.data):T.texSubImage3D(Ee,tt,Vt,Jt,ce,ot,ft,ut,Gt,St,he):g.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,tt,Vt,Jt,ot,ft,Gt,St,he.data):g.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,tt,Vt,Jt,he.width,he.height,Gt,he.data):T.texSubImage2D(T.TEXTURE_2D,tt,Vt,Jt,ot,ft,Gt,St,he);T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,sn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ei),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,cr),tt===0&&D.generateMipmaps&&T.generateMipmap(Ee),_t.unbindTexture()},this.copyTextureToTexture3D=function(g,D,O=null,B=null,L=0){return Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,D,O,B,L)},this.initRenderTarget=function(g){Et.get(g).__webglFramebuffer===void 0&&It.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?It.setTextureCube(g,0):g.isData3DTexture?It.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?It.setTexture2DArray(g,0):It.setTexture2D(g,0),_t.unbindTexture()},this.resetState=function(){R=0,A=0,N=null,_t.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class bg{constructor(t,e,i){this.canvas=t,this.wrapW=e,this.wrapH=i,this.setup()}setup(){const t={clearColor:0,w:this.wrapW,h:this.wrapH};this.instance=new xg({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.setPixelRatio(window.devicePixelRatio),this.instance.setClearColor(t.clearColor,1),this.instance.setSize(t.w,t.h)}onResize(t,e){this.instance.setSize(t,e)}}class wg{constructor(t,e){this.wrapW=t,this.wrapH=e,this.CAMERA_PARAM={fovy:40,aspect:this.wrapW/this.wrapH,near:.1,far:1e3,x:4,y:4,z:4,lookAt:new U(0,0,0)},this.setup()}setup(){this.instance=new Qe(this.CAMERA_PARAM.fovy,this.CAMERA_PARAM.aspect,this.CAMERA_PARAM.near,this.CAMERA_PARAM.far),this.setPosition(this.wrapH),this.instance.lookAt(this.CAMERA_PARAM.lookAt)}setPosition(t){this.CAMERA_PARAM.fovy/2*(Math.PI/180),this.instance.position.x=this.CAMERA_PARAM.x,this.instance.position.y=this.CAMERA_PARAM.y,this.instance.position.z=this.CAMERA_PARAM.z}onResize(t,e){this.setPosition(e),this.instance.aspect=t/e,this.instance.updateProjectionMatrix()}}var Mg=`uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform sampler2D uTexture;

attribute vec2 aUv;

varying float vLife;

void main() {
  vec2 uv = aUv;
  vec4 pos = texture2D(uTexture, uv);

  vec4 modelPosition = modelMatrix * vec4(pos.xyz, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  vLife = pos.w;
  gl_PointSize = 1.0;
  gl_Position = projectPosition;
}`,Eg=`precision mediump float;

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
}`,Sg=`precision mediump float;

uniform sampler2D uBaseTexture;
uniform vec2 uResolution;
uniform float uTime;
uniform float uSpeed; 
uniform float uAmplitude; 
uniform float uNoiseSize; 

const float dieSpeed = 0.99;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float snoise(vec4 v){
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

} 

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
}`;/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function ie(n){return n==null}function Xa(n){return n!==null&&typeof n=="object"}function Ca(n){return n!==null&&typeof n=="object"}function yg(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function vi(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],o=t[r];return Ca(s)&&Ca(o)?Object.assign(Object.assign({},i),{[r]:vi(s,o)}):Object.assign(Object.assign({},i),{[r]:r in t?o:s})},{})}function ja(n){return Xa(n)?"target"in n:!1}const Tg={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class de{static alreadyDisposed(){return new de({type:"alreadydisposed"})}static notBindable(){return new de({type:"notbindable"})}static notCompatible(t,e){return new de({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new de({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new de({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Tg[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class ks{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!ks.isBindable(i))throw de.notBindable();if(!(t in i))throw de.propertyNotFound(t);i[t]=e}}class _e{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class Cg{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new _e,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class Ag{constructor(t){this.emitter=new _e,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class Pg{constructor(t){this.emitter=new _e,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function oe(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new Ag(n):new Cg(n,t)}function Rg(n){return[new Pg(n),(t,e)=>{n.setRawValue(t,e)}]}class Ft{constructor(t){this.emitter=new _e,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:oe(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Ft(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class Or{constructor(t){this.values=Ft.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class Dg{constructor(t){this.values=Ft.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return ie(i)||(r=Math.max(r,i)),ie(e)||(r=Math.min(r,e)),r}}class Lg{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class Ug{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Ig={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Ng{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=Ig[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Fg={"+":n=>n,"-":n=>-n,"~":n=>~n};class Og{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Fg[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function qa(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function Ar(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Bg(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Pr(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function kg(n,t){const e=Pr(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=Pr(n,t);return r===""?"":i+r}function Ya(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=kg(n,t);return i===""?"":e+i}function Fu(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=Bg(n,t);return t+=i.length,i===""?"":i+Pr(n,t)}function Vg(n,t){const e=Fu(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=Pr(n,t);return t+=r.length,e+i+r+Ya(n,t)}function zg(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Pr(n,t);return t+=i.length,i===""?"":e+i+Ya(n,t)}function Hg(n,t){const e=Fu(n,t);return t+=e.length,e===""?"":e+Ya(n,t)}const Gg=qa([Vg,zg,Hg]);function Wg(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Xg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=Wg(n,t);return i===""?"":e+i}function jg(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function qg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=jg(n,t);return i===""?"":e+i}function Yg(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Kg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Yg(n,t);return i===""?"":e+i}const $g=qa([Xg,qg,Kg]),Zg=qa([$g,Gg]);function Jg(n,t){const e=Zg(n,t);return t+=e.length,e===""?null:{evaluable:new Ug(e),cursor:t}}function Qg(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=Bu(n,t);if(!i)return null;t=i.cursor,t+=Ar(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function t0(n,t){var e;return(e=Jg(n,t))!==null&&e!==void 0?e:Qg(n,t)}function Ou(n,t){const e=t0(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=Ou(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new Og(i,r.evaluable)}):null}function e0(n,t,e){e+=Ar(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=Ar(t,e).length,{cursor:e,operator:i}):null}function n0(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const o=e0(t,e,i);if(!o)break;i=o.cursor;const a=n(e,i);if(!a)return null;i=a.cursor,s=new Ng(o.operator,s,a.evaluable)}return s?{cursor:i,evaluable:s}:null}}const i0=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>n0(n,t),Ou);function Bu(n,t){return t+=Ar(n,t).length,i0(n,t)}function r0(n){const t=Bu(n,0);return!t||t.cursor+Ar(n,t.cursor).length!==n.length?null:t.evaluable}function Fn(n){var t;const e=r0(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function ku(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Fn(n);if(!ie(t))return t}return 0}function s0(n){return String(n)}function Ve(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function $t(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function Pc(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function xe(n,t,e){return Math.min(Math.max(n,t),e)}function Vu(n,t){return(n%t+t)%t}function o0(n,t){return ie(n.step)?Math.max(Pc(t),2):Pc(n.step)}function zu(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function Hu(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Gu(n,t){return ie(n.step)?null:new Lg(n.step,t)}function Wu(n){return!ie(n.max)&&!ie(n.min)?new Or({max:n.max,min:n.min}):!ie(n.max)||!ie(n.min)?new Dg({max:n.max,min:n.min}):null}function Xu(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Ve(o0(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:zu(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:Hu(n,t)}}function ju(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Ka(n){return{constraint:n.constraint,textProps:Ft.fromObject(Xu(n.params,n.initialValue))}}class wi{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Ys{constructor(t){this.target=t}}class Br extends Ys{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class a0 extends Ys{constructor(t,e){super(t),this.expanded=e}}class l0 extends Ys{constructor(t,e){super(t),this.index=e}}class c0 extends Ys{constructor(t,e){super(t),this.native=e}}class Rr extends wi{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new _e,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new Br(this,e.binding.target.read(),t.options.last))}}class u0{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new _e}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function h0(n){if(!("binding"in n))return!1;const t=n.binding;return ja(t)&&"read"in t&&"write"in t}function d0(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const o=t[s],a=o(n[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return i}function p0(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function f0(n){return n===null?!1:typeof n=="object"}function Sn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Rc(n){return{custom:t=>Sn(t)(n),boolean:Sn(t=>typeof t=="boolean"?t:void 0)(n),number:Sn(t=>typeof t=="number"?t:void 0)(n),string:Sn(t=>typeof t=="string"?t:void 0)(n),function:Sn(t=>typeof t=="function"?t:void 0)(n),constant:t=>Sn(e=>e===t?t:void 0)(n),raw:Sn(t=>t)(n),object:t=>Sn(e=>{if(f0(e))return d0(e,t)})(n),array:t=>Sn(e=>{if(Array.isArray(e))return p0(e,t)})(n)}}const Aa={optional:Rc(!0),required:Rc(!1)};function ue(n,t){const e=t(Aa),i=Aa.required.object(e)(n);return i.succeeded?i.value:void 0}function je(n,t,e,i){if(t&&!t(n))return!1;const r=ue(n,e);return r?i(r):!1}function qe(n,t){var e;return vi((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function fi(n){return"value"in n}function qu(n){if(!Xa(n)||!("binding"in n))return!1;const t=n.binding;return ja(t)}const mn="http://www.w3.org/2000/svg";function Vs(n){n.offsetHeight}function m0(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function $a(n){return n.ontouchstart!==void 0}function _0(){return globalThis}function v0(){return _0().document}function g0(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const x0={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Ks(n,t){const e=n.createElementNS(mn,"svg");return e.innerHTML=x0[t],e}function Yu(n,t,e){n.insertBefore(t,n.children[e])}function Za(n){n.parentElement&&n.parentElement.removeChild(n)}function Ku(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function b0(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function $u(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Un(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function _n(n,t,e){Un(n.value(t),e)}const w0="tp";function zt(n){return(e,i)=>[w0,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const mr=zt("lbl");function M0(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class Zu{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(mr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(mr("l")),_n(e.props,"label",s=>{ie(s)?this.element.classList.add(mr(void 0,"nol")):(this.element.classList.remove(mr(void 0,"nol")),b0(i),i.appendChild(M0(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(mr("v")),this.element.appendChild(r),this.valueElement=r}}class Ju{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new Zu(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return je(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return qe(null,{label:this.props.get("label")})}}function E0(){return["veryfirst","first","last","verylast"]}const Dc=zt(""),Lc={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class $s{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{E0().forEach(i=>{e.classList.remove(Dc(void 0,Lc[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(Dc(void 0,Lc[i]))})}),this.viewProps.handleDispose(()=>{Za(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return je(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return qe(null,Object.assign({},this.viewProps.exportState()))}}class gi extends $s{constructor(t,e){if(e.value!==e.valueController.value)throw de.shouldNeverHappen();const i=e.valueController.viewProps,r=new Ju(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new Zu(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return je(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return qe(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function Uc(n){const t=Object.assign({},n);return delete t.value,t}class Qu extends gi{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return je(t,e=>super.importState(Uc(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return qe(()=>Uc(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function S0(n){return fi(n)&&qu(n.value)}class y0 extends Qu{importState(t){return je(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function T0(n){return fi(n)&&h0(n.value)}function th(n,t){for(;n.length<t;)n.push(void 0)}function C0(n){const t=[];return th(t,n),t}function A0(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function P0(n,t){const e=[...A0(n),t];return e.length>n.length?e.splice(0,e.length-n.length):th(e,n.length),e}class R0{constructor(t){this.emitter=new _e,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=oe(C0(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=P0(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function D0(n){if(!("binding"in n))return!1;const t=n.binding;return ja(t)&&"read"in t&&!("write"in t)}class L0 extends Qu{exportState(){return qe(()=>super.exportState(),{binding:{readonly:!0}})}}function U0(n){return fi(n)&&D0(n.value)}class I0 extends wi{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new c0(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function N0(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function sr(n,t){return e=>{N0(n,t,e)}}function Ja(n,t){Un(n,e=>{t.textContent=e??""})}const Do=zt("btn");class F0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Do()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Do("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Do("t")),Ja(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class O0{constructor(t,e){this.emitter=new _e,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new F0(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return je(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return qe(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Ic extends $s{constructor(t,e){const i=new O0(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new Ju(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return je(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return qe(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class eh{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const or=new eh("2.0.5");function Ne(n){return Object.assign({core:or},n)}const B0=Ne({id:"button",type:"blade",accept(n){const t=ue(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Ic(n.document,{blade:n.blade,buttonProps:Ft.fromObject({title:n.params.title}),labelProps:Ft.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ic?new I0(n.controller):null}});function k0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function V0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function z0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function H0(n){return Xa(n)?"refresh"in n&&typeof n.refresh=="function":!1}function G0(n,t){if(!ks.isBindable(n))throw de.notBindable();return new ks(n,t)}class W0{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new _e,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,G0(t,e),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(t){return V0(this,t)}addButton(t){return k0(this,t)}addTab(t){return z0(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{H0(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=qu(e.value)?e.value.binding:null;this.emitter_.emit("change",new Br(i,r?r.target.read():e.value.rawValue,t.options.last))}}class Qa extends wi{constructor(t,e){super(t),this.rackApi_=new W0(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class tl extends $s{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return je(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return qe(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Pa(n){return"rackController"in n}class X0{constructor(t){this.emitter=new _e,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw de.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function j0(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(fi(i)&&i.value===t)return i}return null}function q0(n){return Pa(n)?n.rackController.rack.bcSet_:null}class Y0{constructor(t){var e,i;this.emitter=new _e,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new X0(q0),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),fi(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Pa(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(fi(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Pa(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=j0(this.find(fi),t.sender);if(!e)throw de.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class el{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new Y0({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&Yu(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Za(t.bladeController.view.element)}}function ar(){return new Ft({positions:oe([],{equals:yg})})}class kr extends Ft{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Ft.createCore(e);return new kr(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!ie(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};_n(this,"expanded",i),_n(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function K0(n,t){let e=0;return m0(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Vs(t),e=t.clientHeight,n.set("temporaryExpanded",null),Vs(t)}),e}function Nc(n,t){t.style.height=n.styleHeight}function nl(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),ie(n.get("expandedHeight"))){const e=K0(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Vs(t)}),n.emitter.on("change",()=>{Nc(n,t)}),Nc(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class nh extends Qa{constructor(t,e){super(t,e),this.emitter_=new _e,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new a0(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const ih=zt("cnt");class $0{constructor(t,e){var i;this.className_=zt((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),ih()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),_n(this.foldable_,"completed",sr(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),_n(e.props,"title",c=>{ie(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=t.createElement("div");o.classList.add(this.className_("t")),Ja(e.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Ra extends tl{constructor(t,e){var i;const r=kr.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new $0(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new el({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,nl(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return je(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return qe(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Z0=Ne({id:"folder",type:"blade",accept(n){const t=ue(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Ra(n.document,{blade:n.blade,expanded:n.params.expanded,props:Ft.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ra?new nh(n.controller,n.pool):null}}),J0=zt("");function Fc(n,t){return sr(n,J0(void 0,t))}class Bn extends Ft{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Rg(oe(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new Bn(Ft.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Un(this.globalDisabled_,Fc(t,"disabled")),_n(this,"hidden",Fc(t,"hidden"))}bindDisabled(t){Un(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Un(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Oc=zt("tbp");class Q0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Oc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Oc("c")),this.element.appendChild(i),this.containerElement=i}}const _r=zt("tbi");class tx{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(_r()),e.viewProps.bindClassModifiers(this.element),_n(e.props,"selected",s=>{s?this.element.classList.add(_r(void 0,"sel")):this.element.classList.remove(_r(void 0,"sel"))});const i=t.createElement("button");i.classList.add(_r("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(_r("t")),Ja(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class ex{constructor(t,e){this.emitter=new _e,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new tx(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Da extends tl{constructor(t,e){const i=new Q0(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new el({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new ex(t,{props:e.itemProps,viewProps:Bn.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,_n(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return je(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return qe(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class nx extends Qa{constructor(t,e){super(t,e),this.emitter_=new _e,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Da(e,{blade:ar(),itemProps:Ft.fromObject({selected:!1,title:t.title}),props:Ft.fromObject({selected:!1}),viewProps:Bn.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new l0(this,t.rawValue))}}class ix extends Qa{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const Bc=-1;class rx{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=oe(!0),this.selectedIndex=oe(Bc),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Bc,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const vr=zt("tab");class sx{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(vr(),ih()),e.viewProps.bindClassModifiers(this.element),Un(e.empty,sr(this.element,vr(void 0,"nop")));const i=t.createElement("div");i.classList.add(vr("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(vr("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(vr("c")),this.element.appendChild(s),this.contentsElement=s}}class kc extends tl{constructor(t,e){const i=new rx,r=new sx(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new el({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;Yu(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Za(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const rh=Ne({id:"tab",type:"blade",accept(n){const t=ue(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new kc(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Da(n.document,{blade:ar(),itemProps:Ft.fromObject({selected:!1,title:e.title}),props:Ft.fromObject({selected:!1}),viewProps:Bn.create()});t.add(i)}),t},api(n){return n.controller instanceof kc?new nx(n.controller,n.pool):n.controller instanceof Da?new ix(n.controller,n.pool):null}});function ox(n,t){const e=n.accept(t.params);if(!e)return null;const i=ue(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:ar(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Bn.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class il extends Rr{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class ax{constructor(){this.disabled=!1,this.emitter=new _e}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class lx{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new _e,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Vr{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function zs(n,t){if(n instanceof t)return n;if(n instanceof Vr){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class zr{constructor(t){this.values=Ft.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function Hr(n){var t;const e=Aa;if(Array.isArray(n))return(t=ue({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function rl(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function sl(n){return ie(n)?null:new zr(rl(n))}const Lo=zt("lst");class cx{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Lo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Lo("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Lo("m")),r.appendChild(Ks(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,_n(this.props_,"options",s=>{Ku(this.selectElement),s.forEach(o=>{const a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ti{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new cx(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return je(t,null,e=>({options:e.required.custom(Hr)}),e=>(this.props.set("options",rl(e.options)),!0))}exportProps(){return qe(null,{options:this.props.get("options")})}}const Vc=zt("pop");class ux{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Vc()),e.viewProps.bindClassModifiers(this.element),Un(e.shows,sr(this.element,Vc(void 0,"v")))}}class sh{constructor(t,e){this.shows=oe(!1),this.viewProps=e.viewProps,this.view=new ux(t,{shows:this.shows,viewProps:this.viewProps})}}const zc=zt("txt");class hx{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(zc()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(zc("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Dr{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new hx(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);ie(r)||(this.value.rawValue=r),this.view.refresh()}}function dx(n){return String(n)}function oh(n){return n==="false"?!1:!!n}function Hc(n){return dx(n)}function px(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const fx=Ve(0);function Hs(n){return fx(n)+"%"}function ah(n){return String(n)}function La(n){return n}function lr({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}n.emitter.on("change",o=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),o.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Be(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Lr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function On(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function mx(n){return n==="ArrowUp"||n==="ArrowDown"}function lh(n){return mx(n)||n==="ArrowLeft"||n==="ArrowRight"}function Uo(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Mi{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new _e,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Uo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Uo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Uo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const Ze=zt("txt");class _x{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Ze(),Ze(void 0,"num")),e.arrayPosition&&this.element.classList.add(Ze(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Ze("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ze()),this.inputElement.classList.add(Ze("i"));const r=t.createElement("div");r.classList.add(Ze("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(mn,"svg");s.classList.add(Ze("g")),this.knobElement.appendChild(s);const o=t.createElementNS(mn,"path");o.classList.add(Ze("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=t.createElementNS(mn,"path");a.classList.add(Ze("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=t.createElement("div");l.classList.add(zt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Ze(void 0,"drg"));return}this.element.classList.add(Ze(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=xe(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class Gr{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=oe(null),this.view=new _x(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Mi(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let o=t;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);ie(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Be(this.props.get("keyScale"),Lr(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Be(this.props.get("keyScale"),Lr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Io=zt("sld");class vx{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Io()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Io("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Io("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=xe($t(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class gx{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new vx(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Mi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue($t(xe(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Be(this.props.get("keyScale"),On(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Be(this.props.get("keyScale"),On(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const No=zt("sldtxt");class xx{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(No());const i=t.createElement("div");i.classList.add(No("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(No("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Gs{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new gx(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new Gr(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new xx(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return je(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return qe(null,{max:t.get("max"),min:t.get("min")})}}function ch(n){return{sliderProps:new Ft({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Ft({formatter:oe(n.formatter),keyScale:n.keyScale,pointerScale:oe(n.pointerScale)})}}const bx={containerUnitSize:"cnt-usz"};function uh(n){return`--${bx[n]}`}function Ur(n){return ju(n)}function $n(n){if(Ca(n))return ue(n,Ur)}function Pn(n,t){if(!n)return;const e=[],i=Gu(n,t);i&&e.push(i);const r=Wu(n);return r&&e.push(r),new Vr(e)}function wx(n){return n?n.major===or.major:!1}function hh(n){if(n==="inline"||n==="popup")return n}function Wr(n,t){n.write(t)}const ws=zt("ckb");class Mx{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ws()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(ws("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(ws("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(ws("w")),this.labelElement.appendChild(s);const o=Ks(t,"check");s.appendChild(o),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Ex{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Mx(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function Sx(n){const t=[],e=sl(n.options);return e&&t.push(e),new Vr(t)}const yx=Ne({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ue(t,i=>({options:i.optional.custom(Hr),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>oh,constraint:n=>Sx(n.params),writer:n=>Wr},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&zs(i,zr);return r?new ti(t,{props:new Ft({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Ex(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof ti?new il(n.controller):null}}),ci=zt("col");class Tx{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ci()),e.foldable.bindExpandedClass(this.element,ci(void 0,"expanded")),_n(e.foldable,"completed",sr(this.element,ci(void 0,"cpl")));const i=t.createElement("div");i.classList.add(ci("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(ci("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(ci("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(ci("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function Cx(n,t,e){const i=xe(n/255,0,1),r=xe(t/255,0,1),s=xe(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c=0,u=0;const d=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),i===o?c=(r-s)/l:r===o?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,d*100]}function Ax(n,t,e){const i=(n%360+360)%360,r=xe(t/100,0,1),s=xe(e/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o/2;let c,u,d;return i>=0&&i<60?[c,u,d]=[o,a,0]:i>=60&&i<120?[c,u,d]=[a,o,0]:i>=120&&i<180?[c,u,d]=[0,o,a]:i>=180&&i<240?[c,u,d]=[0,a,o]:i>=240&&i<300?[c,u,d]=[a,0,o]:[c,u,d]=[o,0,a],[(c+l)*255,(u+l)*255,(d+l)*255]}function Px(n,t,e){const i=xe(n/255,0,1),r=xe(t/255,0,1),s=xe(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c;l===0?c=0:o===i?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=o===0?0:l/o,d=o;return[c,u*100,d*100]}function dh(n,t,e){const i=Vu(n,360),r=xe(t/100,0,1),s=xe(e/100,0,1),o=s*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o;let c,u,d;return i>=0&&i<60?[c,u,d]=[o,a,0]:i>=60&&i<120?[c,u,d]=[a,o,0]:i>=120&&i<180?[c,u,d]=[0,o,a]:i>=180&&i<240?[c,u,d]=[0,a,o]:i>=240&&i<300?[c,u,d]=[a,0,o]:[c,u,d]=[o,0,a],[(c+l)*255,(u+l)*255,(d+l)*255]}function Rx(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function Dx(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function vn(n){return[n[0],n[1],n[2]]}function Zs(n,t){return[n[0],n[1],n[2],t]}const Lx={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:Rx,rgb:Ax},hsv:{hsl:Dx,hsv:(n,t,e)=>[n,t,e],rgb:dh},rgb:{hsl:Cx,hsv:Px,rgb:(n,t,e)=>[n,t,e]}};function tr(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function Ux(n,t){return n===t?t:Vu(n,t)}function ph(n,t,e){var i;const r=tr(t,e);return[t==="rgb"?xe(n[0],0,r[0]):Ux(n[0],r[0]),xe(n[1],0,r[1]),xe(n[2],0,r[2]),xe((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function Gc(n,t,e,i){const r=tr(t,e),s=tr(t,i);return n.map((o,a)=>o/r[a]*s[a])}function fh(n,t,e){const i=Gc(n,t.mode,t.type,"int"),r=Lx[t.mode][e.mode](...i);return Gc(r,e.mode,"int",e.type)}class Xt{static black(){return new Xt([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=ph(t,e,this.type)}getComponents(t){return Zs(fh(vn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Xn=zt("colp");class Ix{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Xn()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Xn("hsv"));const r=t.createElement("div");r.classList.add(Xn("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(Xn("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const o=t.createElement("div");if(o.classList.add(Xn("rgb")),this.textsView_=e.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const a=t.createElement("div");a.classList.add(Xn("a"));const l=t.createElement("div");l.classList.add(Xn("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=t.createElement("div");c.classList.add(Xn("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function Nx(n){return n==="int"?"int":n==="float"?"float":void 0}function ol(n){return ue(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(Nx)}),expanded:t.optional.boolean,picker:t.optional.custom(hh),readonly:t.optional.constant(!1)}))}function xi(n){return n?.1:1}function mh(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class al{constructor(t,e){this.type="float",this.mode=e,this.comps_=ph(t,e,this.type)}getComponents(t){return Zs(fh(vn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Fx={int:(n,t)=>new Xt(n,t),float:(n,t)=>new al(n,t)};function ll(n,t,e){return Fx[e](n,t)}function Ox(n){return n.type==="float"}function Bx(n){return n.type==="int"}function kx(n){const t=n.getComponents(),e=tr(n.mode,"int");return new Xt([Math.round($t(t[0],0,1,0,e[0])),Math.round($t(t[1],0,1,0,e[1])),Math.round($t(t[2],0,1,0,e[2])),t[3]],n.mode)}function Vx(n){const t=n.getComponents(),e=tr(n.mode,"int");return new al([$t(t[0],0,e[0],0,1),$t(t[1],0,e[1],0,1),$t(t[2],0,e[2],0,1),t[3]],n.mode)}function Ie(n,t){if(n.type===t)return n;if(Bx(n)&&t==="float")return Vx(n);if(Ox(n)&&t==="int")return kx(n);throw de.shouldNeverHappen()}function zx(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function tn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Hx={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function _h(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return Hx[i](e)}function vh(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[tn(t[1],255),tn(t[2],255),tn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Gx(n){const t=vh(n);return t?new Xt(t,"rgb"):null}function gh(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[tn(t[1],255),tn(t[2],255),tn(t[3],255),tn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Wx(n){const t=gh(n);return t?new Xt(t,"rgb"):null}function xh(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[_h(t[1]),tn(t[2],100),tn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Xx(n){const t=xh(n);return t?new Xt(t,"hsl"):null}function bh(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[_h(t[1]),tn(t[2],100),tn(t[3],100),tn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function jx(n){const t=bh(n);return t?new Xt(t,"hsl"):null}function wh(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function qx(n){const t=wh(n);return t?new Xt(t,"rgb"):null}function Mh(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),$t(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),$t(parseInt(e[4],16),0,255,0,1)]:null}function Yx(n){const t=Mh(n);return t?new Xt(t,"rgb"):null}function Eh(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Wc(n){return t=>{const e=Eh(t);return e?ll(e,"rgb",n):null}}function Sh(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Xc(n){return t=>{const e=Sh(t);return e?ll(e,"rgb",n):null}}const Kx=[{parser:wh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Mh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:vh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:gh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:xh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:bh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Eh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function $x(n){return Kx.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Zx(n,t="int"){const e=$x(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Xr(n){const t=[qx,Yx,Gx,Wx,Xx,jx];n==="int"&&t.push(Wc("int"),Xc("int")),n==="float"&&t.push(Wc("float"),Xc("float"));const e=px(t);return i=>{const r=e(i);return r?Ie(r,n):null}}function Jx(n){const t=Xr("int");if(typeof n!="string")return Xt.black();const e=t(n);return e??Xt.black()}function yh(n){const t=xe(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function cl(n,t="#"){const e=vn(n.getComponents("rgb")).map(yh).join("");return`${t}${e}`}function ul(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(yh).join("");return`${t}${i}`}function Th(n){const t=Ve(0),e=Ie(n,"int");return`rgb(${vn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function Ps(n){const t=Ve(2),e=Ve(0);return`rgba(${Ie(n,"int").getComponents("rgb").map((s,o)=>(o===3?t:e)(s)).join(", ")})`}function Qx(n){const t=[Ve(0),Hs,Hs],e=Ie(n,"int");return`hsl(${vn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function tb(n){const t=[Ve(0),Hs,Hs,Ve(2)];return`hsla(${Ie(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function Ch(n,t){const e=Ve(t==="float"?2:0),i=["r","g","b"],r=Ie(n,t);return`{${vn(r.getComponents("rgb")).map((o,a)=>`${i[a]}: ${e(o)}`).join(", ")}}`}function eb(n){return t=>Ch(t,n)}function Ah(n,t){const e=Ve(2),i=Ve(t==="float"?2:0),r=["r","g","b","a"];return`{${Ie(n,t).getComponents("rgb").map((a,l)=>{const c=l===3?e:i;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function nb(n){return t=>Ah(t,n)}const ib=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:cl},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ul},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Th},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Qx},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:tb},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:eb(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:nb(t)}],[])];function Ph(n){return ib.reduce((t,e)=>t||(zx(e.format,n)?e.stringifier:null),null)}const gr=zt("apl");class rb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(gr()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(gr("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(gr("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(gr("m")),this.element.appendChild(s),this.markerElem_=s;const o=t.createElement("div");o.classList.add(gr("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Xt([e[0],e[1],e[2],0],"rgb"),r=new Xt([e[0],e[1],e[2],255],"rgb"),s=["to right",Ps(i),Ps(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=Ps(t);const o=$t(e[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class sb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new rb(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Xt([s,o,a,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Be(xi(!0),On(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Xt([r,s,o,a+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Be(xi(!0),On(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Bi=zt("coltxt");function ob(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class ab{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Bi()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Bi("m")),this.modeElem_=ob(t),this.modeElem_.classList.add(Bi("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(Bi("mm")),r.appendChild(Ks(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Bi("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),Un(e.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Ku(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(Bi("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function lb(n){return Ve(n==="float"?2:0)}function cb(n,t,e){const i=tr(n,t)[e];return new Or({min:0,max:i})}function ub(n,t,e){return new Gr(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",parser:t.parser,props:Ft.fromObject({formatter:lb(t.colorType),keyScale:xi(!1),pointerScale:t.colorType==="float"?.01:1}),value:oe(0,{constraint:cb(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function hb(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:Fn,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=ub(n,e,i);return lr({primary:t.value,secondary:r.value,forward(s){return Ie(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,o){const a=t.colorMode,c=Ie(s,t.colorType).getComponents(a);c[i]=o;const u=ll(Zs(vn(c),c[3]),a,t.colorType);return Ie(u,"int")}}),r})}function db(n,t){const e=new Dr(n,{parser:Xr("int"),props:Ft.fromObject({formatter:cl}),value:oe(Xt.black()),viewProps:t.viewProps});return lr({primary:t.value,secondary:e.value,forward:i=>new Xt(vn(i.getComponents()),i.mode),backward:(i,r)=>new Xt(Zs(vn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function pb(n){return n!=="hex"}class fb{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=oe(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new ab(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return pb(e)?hb(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):db(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Fo=zt("hpl");class mb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Fo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Fo("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Fo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Th(new Xt([e,100,100],"hsv"));const i=$t(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class _b{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new mb(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=$t(xe(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Xt([i,s,o,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Be(xi(!1),On(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Xt([r+e,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Be(xi(!1),On(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Oo=zt("svp"),jc=64;class vb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Oo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=jc,i.width=jc,i.classList.add(Oo("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Oo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=g0(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=t.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let d=0;d<r;d++){const p=$t(d,0,r,0,100),f=$t(u,0,s,100,0),v=dh(i[0],p,f),x=(u*r+d)*4;a[x]=v[0],a[x+1]=v[1],a[x+2]=v[2],a[x+3]=255}t.putImageData(o,0,0);const l=$t(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=$t(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class xb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new vb(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=$t(t.point.x,0,t.bounds.width,0,100),r=$t(t.point.y,0,t.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Xt([s,i,r,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){lh(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),o=xi(!1),a=Be(o,On(t)),l=Be(o,Lr(t));a===0&&l===0||this.value.setRawValue(new Xt([e,i+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=xi(!1),i=Be(e,On(t)),r=Be(e,Lr(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class bb{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new _b(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new xb(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new sb(t,{value:this.value,viewProps:this.viewProps}),text:new Gr(t,{parser:Fn,props:Ft.fromObject({pointerScale:.01,keyScale:.1,formatter:Ve(2)}),value:oe(0,{constraint:new Or({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&lr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Xt(s,i.mode)}}),this.textsC_=new fb(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new Ix(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Bo=zt("colsw");class wb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Bo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Bo("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Bo("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=ul(t)}onValueChange_(){this.update_()}}class Mb{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new wb(t,{value:this.value,viewProps:this.viewProps})}}class hl{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=kr.create(e.expanded),this.swatchC_=new Mb(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new Dr(t,{parser:e.parser,props:Ft.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Tx(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new sh(t,{viewProps:this.viewProps}):null;const r=new bb(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),lr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),nl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=$u(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!$a(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Eb(n){return vn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function Sb(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function yb(n){return new Xt([n>>16&255,n>>8&255,n&255],"rgb")}function Tb(n){return new Xt([n>>24&255,n>>16&255,n>>8&255,$t(n&255,0,255,0,1)],"rgb")}function Cb(n){return typeof n!="number"?Xt.black():yb(n)}function Ab(n){return typeof n!="number"?Xt.black():Tb(n)}function Rs(n,t){return typeof n!="object"||ie(n)?!1:t in n&&typeof n[t]=="number"}function Rh(n){return Rs(n,"r")&&Rs(n,"g")&&Rs(n,"b")}function Dh(n){return Rh(n)&&Rs(n,"a")}function Lh(n){return Rh(n)}function dl(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function qc(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function Pb(n){const t=Ph(n);return t?(e,i)=>{Wr(e,t(i))}:null}function Rb(n){const t=n?Sb:Eb;return(e,i)=>{Wr(e,t(i))}}function Db(n,t,e){const r=Ie(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function Lb(n,t,e){const r=Ie(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function Ub(n,t){return(e,i)=>{n?Db(e,i,t):Lb(e,i,t)}}function Ib(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function Nb(n){return n?t=>ul(t,"0x"):t=>cl(t,"0x")}function Fb(n){return"color"in n||n.view==="color"}const Ob=Ne({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!Fb(t))return null;const e=ol(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:Ib(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?Ab:Cb,equals:dl,writer:n=>Rb(n.params.supportsAlpha)},controller:n=>{var t,e;return new hl(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:Nb(n.params.supportsAlpha),parser:Xr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function Bb(n,t){if(!Lh(n))return Ie(Xt.black(),t);if(t==="int"){const e=qc(n);return new Xt(e,"rgb")}if(t==="float"){const e=qc(n);return new al(e,"rgb")}return Ie(Xt.black(),"int")}function kb(n){return Dh(n)}function Vb(n){return t=>{const e=Bb(t,n);return Ie(e,"int")}}function zb(n,t){return e=>n?Ah(e,t):Ch(e,t)}const Hb=Ne({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!Lh(n))return null;const i=ol(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=mh(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>Vb(n.params.colorType),equals:dl,writer:n=>Ub(kb(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Dh(n.initialValue);return new hl(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:zb(i,n.params.colorType),parser:Xr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),Gb=Ne({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Zx(n,mh(t));if(!e)return null;const i=Ph(e);if(!i)return null;const r=ol(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>Jx,equals:dl,writer:n=>{const t=Pb(n.params.format);if(!t)throw de.notBindable();return t}},controller:n=>{var t,e;return new hl(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:Xr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class pl{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&o!==void 0?o:i});return this.asm_.fromComponents(e)}}const Yc=zt("pndtxt");class Wb{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(Yc()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(Yc("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function Xb(n,t,e){return new Gr(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:oe(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class fl{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>Xb(t,e,r)),this.acs_.forEach((i,r)=>{lr({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,o)=>{const a=e.assembly.toComponents(s);return a[r]=o,e.assembly.fromComponents(a)}})}),this.view=new Wb(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class jb extends Rr{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function qb(n,t){const e=[],i=Gu(n,t);i&&e.push(i);const r=Wu(n);r&&e.push(r);const s=sl(n.options);return s&&e.push(s),new Vr(e)}const Yb=Ne({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=ue(t,i=>Object.assign(Object.assign({},ju(i)),{options:i.optional.custom(Hr),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ku,constraint:n=>qb(n.params,n.initialValue),writer:n=>Wr},controller:n=>{const t=n.value,e=n.constraint,i=e&&zs(e,zr);if(i)return new ti(n.document,{props:new Ft({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=Xu(n.params,t.rawValue),s=e&&zs(e,Or);return s?new Gs(n.document,Object.assign(Object.assign({},ch(Object.assign(Object.assign({},r),{keyScale:oe(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Fn,value:t,viewProps:n.viewProps})):new Gr(n.document,{parser:Fn,props:Ft.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Gs?new jb(n.controller):n.controller.valueController instanceof ti?new il(n.controller):null}});class Jn{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(ie(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Uh={toComponents:n=>n.getComponents(),fromComponents:n=>new Jn(...n)},ki=zt("p2d");class Kb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ki()),e.viewProps.bindClassModifiers(this.element),Un(e.expanded,sr(this.element,ki(void 0,"expanded")));const i=t.createElement("div");i.classList.add(ki("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(ki("b")),r.appendChild(Ks(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(ki("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(ki("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const jn=zt("p2dp");class $b{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(jn()),e.layout==="popup"&&this.element.classList.add(jn(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(jn("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(mn,"svg");r.classList.add(jn("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(mn,"line");s.classList.add(jn("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=t.createElementNS(mn,"line");o.classList.add(jn("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=t.createElementNS(mn,"line");a.classList.add(jn("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=t.createElement("div");l.classList.add(jn("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=$t(t,-i,+i,0,100),s=$t(e,-i,+i,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Kc(n,t,e){return[Be(t[0],On(n)),Be(t[1],Lr(n))*(e?1:-1)]}class Zb{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new $b(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Mi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=$t(t.point.x,0,t.bounds.width,-i,+i),s=$t(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Jn(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){lh(t.key)&&t.preventDefault();const[e,i]=Kc(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Jn(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=Kc(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Jb{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=kr.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new sh(t,{viewProps:this.viewProps}):null;const s=new Zb(t,{layout:e.pickerLayout,props:new Ft({invertsY:oe(e.invertsY),max:oe(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new fl(t,{assembly:Uh,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new Kb(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),lr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),nl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=$u(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!$a(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function Qb(n){return Jn.isObject(n)?new Jn(n.x,n.y):new Jn}function tw(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function ew(n,t){return new pl({assembly:Uh,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y)]})}function $c(n,t){var e,i;if(!ie(n.min)||!ie(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=zu(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function nw(n,t){var e,i;const r=$c(vi(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=$c(vi(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function iw(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const rw=Ne({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Jn.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Ur(i)),{expanded:i.optional.boolean,picker:i.optional.custom(hh),readonly:i.optional.constant(!1),x:i.optional.custom($n),y:i.optional.object(Object.assign(Object.assign({},Ur(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>Qb,constraint:n=>ew(n.params,n.initialValue),equals:Jn.equals,writer:()=>tw},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,o=[n.params.x,n.params.y];return new Jb(i,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return Ka({constraint:s.components[l],initialValue:a,params:vi(n.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:iw(n.params),max:nw(n.params,r.rawValue),parser:Fn,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class qi{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(ie(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ih={toComponents:n=>n.getComponents(),fromComponents:n=>new qi(...n)};function sw(n){return qi.isObject(n)?new qi(n.x,n.y,n.z):new qi}function ow(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function aw(n,t){return new pl({assembly:Ih,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y),Pn(Object.assign(Object.assign({},n),n.z),t.z)]})}const lw=Ne({id:"input-point3d",type:"input",accept:(n,t)=>{if(!qi.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Ur(i)),{readonly:i.optional.constant(!1),x:i.optional.custom($n),y:i.optional.custom($n),z:i.optional.custom($n)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>sw,constraint:n=>aw(n.params,n.initialValue),equals:qi.equals,writer:n=>ow},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new fl(n.document,{assembly:Ih,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Ka({constraint:e.components[s],initialValue:r,params:vi(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:Fn,value:t,viewProps:n.viewProps})}});class Yi{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(ie(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Nh={toComponents:n=>n.getComponents(),fromComponents:n=>new Yi(...n)};function cw(n){return Yi.isObject(n)?new Yi(n.x,n.y,n.z,n.w):new Yi}function uw(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function hw(n,t){return new pl({assembly:Nh,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y),Pn(Object.assign(Object.assign({},n),n.z),t.z),Pn(Object.assign(Object.assign({},n),n.w),t.w)]})}const dw=Ne({id:"input-point4d",type:"input",accept:(n,t)=>{if(!Yi.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Ur(i)),{readonly:i.optional.constant(!1),w:i.optional.custom($n),x:i.optional.custom($n),y:i.optional.custom($n),z:i.optional.custom($n)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>cw,constraint:n=>hw(n.params,n.initialValue),equals:Yi.equals,writer:n=>uw},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new fl(n.document,{assembly:Nh,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Ka({constraint:e.components[s],initialValue:r,params:vi(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:Fn,value:t,viewProps:n.viewProps})}});function pw(n){const t=[],e=sl(n.options);return e&&t.push(e),new Vr(t)}const fw=Ne({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=ue(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(Hr)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ah,constraint:n=>pw(n.params),writer:n=>Wr},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&zs(i,zr);return r?new ti(t,{props:new Ft({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Dr(t,{parser:s=>s,props:Ft.fromObject({formatter:La}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof ti?new il(n.controller):null}}),jr={monitor:{defaultInterval:200,defaultRows:3}},Zc=zt("mll");class mw{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Zc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(Zc("i")),i.style.height=`calc(var(${uh("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class ml{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new mw(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const Jc=zt("sgl");class _w{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Jc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Jc("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class _l{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new _w(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const vw=Ne({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ue(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>oh},controller:n=>{var t;return n.value.rawValue.length===1?new _l(n.document,{formatter:Hc,value:n.value,viewProps:n.viewProps}):new ml(n.document,{formatter:Hc,rows:(t=n.params.rows)!==null&&t!==void 0?t:jr.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class gw extends Rr{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const qn=zt("grl");class xw{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(qn()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(mn,"svg");i.classList.add(qn("g")),i.style.height=`calc(var(${uh("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(mn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(qn("t"),zt("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((d,p)=>{if(d===void 0)return;const f=$t(p,0,i,0,t),v=$t(d,r,s,e,0);o.push([f,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(qn("t","a"));return}const c=$t(this.cursor_.rawValue,0,i,0,t),u=$t(l,r,s,e,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(qn("t","a"))||(a.classList.add(qn("t","a"),qn("t","in")),Vs(a),a.classList.remove(qn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Fh{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=oe(-1),this.view=new xw(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!$a(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Mi(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return je(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return qe(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor($t(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor($t(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ua(n){return ie(n.format)?Ve(2):n.format}function bw(n){var t;return n.value.rawValue.length===1?new _l(n.document,{formatter:Ua(n.params),value:n.value,viewProps:n.viewProps}):new ml(n.document,{formatter:Ua(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:jr.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function ww(n){var t,e,i;return new Fh(n.document,{formatter:Ua(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:jr.monitor.defaultRows,props:Ft.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function Qc(n){return n.view==="graph"}const Mw=Ne({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=ue(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>Qc(n)?64:1,reader:n=>ku},controller:n=>Qc(n.params)?ww(n):bw(n),api:n=>n.controller.valueController instanceof Fh?new gw(n.controller):null}),Ew=Ne({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=ue(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ah},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new ml(n.document,{formatter:La,rows:(t=n.params.rows)!==null&&t!==void 0?t:jr.monitor.defaultRows,value:e,viewProps:n.viewProps}):new _l(n.document,{formatter:La,value:e,viewProps:n.viewProps})}});class Sw{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class yw{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function Tw(n,t){var e;const i=n.accept(t.target.read(),t.params);if(ie(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=ue(t.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),o=n.binding.reader(r),a=n.binding.constraint?n.binding.constraint(r):void 0,l=new yw({reader:o,target:t.target,writer:n.binding.writer(r)}),c=new u0(oe(o(i.initialValue),{constraint:a,equals:n.binding.equals}),l),u=n.controller({constraint:a,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:Bn.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new y0(t.document,{blade:ar(),props:Ft.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class Cw{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function Aw(n,t){return t===0?new ax:new lx(n,t??jr.monitor.defaultInterval)}function Pw(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(ie(s))return null;const o={target:t.target,initialValue:s.initialValue,params:s.params},a=ue(t.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),l=n.binding.reader(o),c=(i=(e=a==null?void 0:a.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new R0({binding:new Cw({reader:l,target:t.target}),bufferSize:c,ticker:Aw(t.document,a==null?void 0:a.interval)}),d=n.controller({document:t.document,params:s.params,value:u,viewProps:Bn.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return d.viewProps.bindDisabled(u.ticker),d.viewProps.handleDispose(()=>{u.ticker.dispose()}),new L0(t.document,{blade:ar(),props:Ft.fromObject({label:"label"in t.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:d})}class Rw{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!wx(e.core))throw de.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??Tw(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??Pw(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(ie(r))throw new de({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const o=this.createMonitor_(t,e,i);if(o)return o;throw new de({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??ox(s,{document:t,params:e}),null);if(!i)throw new de({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new Rr(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new Rr(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(T0(t))return this.createInputBindingApi_(t);if(U0(t))return this.createMonitorBindingApi_(t);throw de.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(S0(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw de.shouldNeverHappen();return this.apiCache_.add(t,e)}}const Dw=new Sw;function Lw(){const n=new Rw(Dw);return[rw,lw,dw,fw,Yb,Gb,Hb,Ob,yx,vw,Ew,Mw,B0,Z0,rh].forEach(t=>{n.register("core",t)}),n}class Uw extends wi{constructor(t){super(t),this.emitter_=new _e,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Br(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class Iw extends wi{}class Nw extends wi{constructor(t){super(t),this.emitter_=new _e,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Br(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class Fw extends wi{constructor(t){super(t),this.emitter_=new _e,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Br(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const Ow=function(){return{id:"list",type:"blade",core:or,accept(n){const t=ue(n,e=>({options:e.required.custom(Hr),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new zr(rl(n.params.options)),e=oe(n.params.value,{constraint:t}),i=new ti(n.document,{props:new Ft({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new gi(n.document,{blade:n.blade,props:Ft.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof gi)||!(n.controller.valueController instanceof ti)?null:new Uw(n.controller)}}}();class Bw extends nh{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class kw extends Ra{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const tu=zt("spr");class Vw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(tu()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(tu("r")),this.element.appendChild(i)}}class eu extends $s{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Vw(t,{viewProps:e.viewProps})}))}}const zw={id:"separator",type:"blade",core:or,accept(n){const t=ue(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new eu(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof eu?new Iw(n.controller):null}},Hw={id:"slider",type:"blade",core:or,accept(n){const t=ue(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new Or({max:n.params.max,min:n.params.min}),s=oe(i,{constraint:r}),o=new Gs(n.document,Object.assign(Object.assign({},ch({formatter:(e=n.params.format)!==null&&e!==void 0?e:s0,keyScale:oe(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Hu(n.params,i)})),{parser:Fn,value:s,viewProps:n.viewProps}));return new gi(n.document,{blade:n.blade,props:Ft.fromObject({label:n.params.label}),value:s,valueController:o})},api(n){return!(n.controller instanceof gi)||!(n.controller.valueController instanceof Gs)?null:new Nw(n.controller)}},Gw=function(){return{id:"text",type:"blade",core:or,accept(n){const t=ue(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=oe(n.params.value),i=new Dr(n.document,{parser:n.params.parse,props:Ft.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new gi(n.document,{blade:n.blade,props:Ft.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof gi)||!(n.controller.valueController instanceof Dr)?null:new Fw(n.controller)}}}();function Ww(n){const t=n.createElement("div");return t.classList.add(zt("dfw")()),n.body&&n.body.appendChild(t),t}function Xw(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class jw extends Bw{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:v0(),o=Lw(),a=new kw(s,{expanded:r.expanded,blade:ar(),props:Ft.fromObject({title:r.title}),viewProps:Bn.create()});super(a,o),this.pool_=o,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:Ww(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw de.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw de.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&Xw(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[Ow,zw,Hw,rh,Gw]})}}new eh("4.0.5");class qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qw=new Pu(-1,1,1,-1,0,1);class Yw extends nn{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}}const Kw=new Yw;class vl{constructor(t){this._mesh=new fn(Kw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $w{constructor(t,e,i){this.variables=[],this.currentTextureIndex=0;let r=un;const s={passThruTexture:{value:null}},o=c(d(),s),a=new vl(o);this.setDataType=function(p){return r=p,this},this.addVariable=function(p,f,v){const x=this.createShaderMaterial(f),m={name:p,initialValueTexture:v,material:x,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Se,magFilter:Se};return this.variables.push(m),m},this.setVariableDependencies=function(p,f){p.dependencies=f},this.init=function(){if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let p=0;p<this.variables.length;p++){const f=this.variables[p];f.renderTargets[0]=this.createRenderTarget(t,e,f.wrapS,f.wrapT,f.minFilter,f.magFilter),f.renderTargets[1]=this.createRenderTarget(t,e,f.wrapS,f.wrapT,f.minFilter,f.magFilter),this.renderTexture(f.initialValueTexture,f.renderTargets[0]),this.renderTexture(f.initialValueTexture,f.renderTargets[1]);const v=f.material,x=v.uniforms;if(f.dependencies!==null)for(let m=0;m<f.dependencies.length;m++){const h=f.dependencies[m];if(h.name!==f.name){let y=!1;for(let S=0;S<this.variables.length;S++)if(h.name===this.variables[S].name){y=!0;break}if(!y)return"Variable dependency not found. Variable="+f.name+", dependency="+h.name}x[h.name]={value:null},v.fragmentShader=`
uniform sampler2D `+h.name+`;
`+v.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const p=this.currentTextureIndex,f=this.currentTextureIndex===0?1:0;for(let v=0,x=this.variables.length;v<x;v++){const m=this.variables[v];if(m.dependencies!==null){const h=m.material.uniforms;for(let y=0,S=m.dependencies.length;y<S;y++){const M=m.dependencies[y];h[M.name].value=M.renderTargets[p].texture}}this.doRenderTarget(m.material,m.renderTargets[f])}this.currentTextureIndex=f},this.getCurrentRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const p=this.variables;for(let f=0;f<p.length;f++){const v=p[f];v.initialValueTexture&&v.initialValueTexture.dispose();const x=v.renderTargets;for(let m=0;m<x.length;m++)x[m].dispose()}};function l(p){p.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(p,f){f=f||{};const v=new Ce({name:"GPUComputationShader",uniforms:f,vertexShader:u(),fragmentShader:p});return l(v),v}this.createShaderMaterial=c,this.createRenderTarget=function(p,f,v,x,m,h){return p=p||t,f=f||e,v=v||Cn,x=x||Cn,m=m||Se,h=h||Se,new en(p,f,{wrapS:v,wrapT:x,minFilter:m,magFilter:h,format:We,type:r,depthBuffer:!1})},this.createTexture=function(){const p=new Float32Array(t*e*4),f=new Ep(p,t,e,We,un);return f.needsUpdate=!0,f},this.renderTexture=function(p,f){s.passThruTexture.value=p,this.doRenderTarget(o,f),s.passThruTexture.value=null},this.doRenderTarget=function(p,f){const v=i.getRenderTarget(),x=i.xr.enabled,m=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,a.material=p,i.setRenderTarget(f),a.render(i),a.material=o,i.xr.enabled=x,i.shadowMap.autoUpdate=m,i.setRenderTarget(v)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function d(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}function Zw(n,t){return Math.random()*(t-n)+n}class Jw{constructor(t,e){this.group=t,this.renderer=e,this.setup(),this.setEvents()}setup(){this.setParam(),this.init(),this.createParticle()}setParam(){this.num=3e5,this.sizeW=Math.ceil(Math.sqrt(this.num)),this.sizeH=this.sizeW}addGUI(){this.pane=new jw,this.pane.addBinding(this.gpgpu.positionVariable.material.uniforms.uAmplitude,"value",{label:"uAmplitude",min:0,max:5}),this.pane.addBinding(this.gpgpu.positionVariable.material.uniforms.uSpeed,"value",{label:"uSpeed",min:0,max:8}),this.pane.addBinding(this.gpgpu.positionVariable.material.uniforms.uNoiseSize,"value",{label:"uNoiseSize",min:0,max:8})}init(){this.gpgpu={},this.gpgpu.computation=new $w(this.sizeW,this.sizeH,this.renderer),this.baseTexture=this.gpgpu.computation.createTexture();const t=this.baseTexture.image.data;for(let i=0;i<t.length;i++){const r=i*4,o=(Math.random()*2-1)*Math.PI,a=Math.random()*2-1,l=Math.asin(a),c=Zw(.5,1),u=c*Math.cos(l)*Math.cos(o),d=c*Math.cos(l)*Math.sin(o),p=c*Math.sin(l),f=Math.random()*.5+.5;t[r]=u,t[r+1]=d,t[r+2]=p,t[r+3]=f}this.gpgpu.positionVariable=this.gpgpu.computation.addVariable("uParticles",Sg,this.baseTexture),this.gpgpu.computation.setVariableDependencies(this.gpgpu.positionVariable,[this.gpgpu.positionVariable]);const e=this.gpgpu.positionVariable.material;e.uniforms.uTime={value:0},e.uniforms.uBaseTexture={value:this.baseTexture.clone()},e.uniforms.uResolution={value:new yt(this.sizeW,this.sizeH)},e.uniforms.uSpeed={value:.3},e.uniforms.uAmplitude={value:.03},e.uniforms.uNoiseSize={value:.8},this.gpgpu.computation.init()}createParticle(){const t=new nn;t.setDrawRange(0,this.num);const e=new Float32Array(this.num*2);for(let r=0;r<this.sizeH;r++)for(let s=0;s<this.sizeW;s++){const a=(r*this.sizeH+s)*2,l=(s+.5)/this.sizeW,c=(r+.5)/this.sizeH;e[a]=l,e[a+1]=c}t.setAttribute("aUv",new hn(e,2));const i=new Rp({vertexShader:Mg,fragmentShader:Eg,uniforms:{uTexture:{value:null},uResolution:{value:new yt(this.sizeW,this.sizeH)},uColor1:{value:new kt("#fff")},uColor2:{value:new kt("rgb(58, 74, 160)")}},transparent:!0,depthWrite:!1,blending:Ls});this.mesh=new Pp(t,i),this.group.add(this.mesh)}onMouseMove(t,e){console.log(t,e)}onUpdate(t,e){this.gpgpu.positionVariable.material.uniforms.uTime.value=e,this.mesh.material.uniforms.uTexture.value=this.gpgpu.computation.getCurrentRenderTarget(this.gpgpu.positionVariable).texture,this.gpgpu.computation.compute()}onResize(t,e){}setEvents(){}}const Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qw extends qr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fs.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vl(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nu extends qr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class tM extends qr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class eM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qw(Ds),this.copyPass.material.blending=Rn,this.clock=new Ru}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(o instanceof nu?i=!0:o instanceof tM&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nM extends qr{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const iM={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class er extends qr{constructor(t,e=1,i,r){super(),this.strength=e,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(s,o,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new en(s,o,{type:Dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new en(s,o,{type:Dn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=iM;this.highPassUniforms=Fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fs.clone(Ds.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,blending:Ls,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new Ga,this._fsQuad=new vl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new yt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=er.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=er.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}er.BlurDirectionX=new yt(1,0);er.BlurDirectionY=new yt(0,1);class rM{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.init()}init(){this.composer=new eM(this.renderer);const t=new nM(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new er(new yt(gb.w,gb.h),.8,1,0),this.composer.addPass(this.bloomPass)}onUpdate(){this.composer.render()}onResize(){this.composer.setSize(gb.w,gb.h),this.composer.setPixelRatio(window.devicePixelRatio)}}class sM{constructor(t,e,i){this.scene=t,this.renderer=e,this.camera=i,this.setup()}setup(){const t=new xr;this.scene.add(t),this.item=new Jw(t,this.renderer),this.effect=new rM(this.renderer,this.scene,this.camera)}onMouseMove(t,e){this.item.onMouseMove(t,e)}onUpdate(t,e){this.item.onUpdate(t,e),this.effect.onUpdate()}onResize(t,e){this.item.onResize(t,e),this.effect.onResize(t,e)}}const iu={type:"change"},gl={type:"start"},Oh={type:"end"},Ms=new Xs,ru=new Yn,oM=Math.cos(70*Yd.DEG2RAD),ge=new U,Oe=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ko=1e-6;class aM extends Np{constructor(t,e=null){super(t,e),this.state=te.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new _i,this._lastTargetPosition=new U,this._quat=new _i().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ic,this._sphericalDelta=new ic,this._scale=1,this._panOffset=new U,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new U,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cM.bind(this),this._onPointerDown=lM.bind(this),this._onPointerUp=uM.bind(this),this._onContextMenu=vM.bind(this),this._onMouseWheel=pM.bind(this),this._onKeyDown=fM.bind(this),this._onTouchStart=mM.bind(this),this._onTouchMove=_M.bind(this),this._onMouseDown=hM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=gM.bind(this),this._interceptControlUp=xM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iu),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),r<-Math.PI?r+=Oe:r>Math.PI&&(r-=Oe),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ms.origin.copy(this.object.position),Ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ms.direction))<oM?this.object.lookAt(this.target):(ru.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ms.intersectPlane(ru,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ko||this._lastTargetPosition.distanceToSquared(this.target)>ko?(this.dispatchEvent(iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ge.copy(r).sub(this.target);let s=ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function uM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Oh),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function hM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=te.DOLLY;break;case Gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}break;case Gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(gl)}function dM(n){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pM(n){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(n.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Oh))}function fM(n){this.enabled!==!1&&this._handleKeyDown(n)}function mM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=te.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=te.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(gl)}function _M(n){switch(this._trackPointer(n),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=te.NONE}}function vM(n){this.enabled!==!1&&n.preventDefault()}function gM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bM{constructor(t){this.wrap=t,this.wrapW=this.wrap.clientWidth,this.wrapH=this.wrap.clientHeight,this.setup()}setParam(){this.clock=new Ru,this.prevTime=Date.now(),this.timeDelta=0,this.time=0,this.isLoaded=!0,this.isHelper=!1,this.isControl=!0}async setup(){this.setParam(),this.canvas=this.wrap.querySelector("canvas"),this.renderer=new bg(this.canvas,this.wrapW,this.wrapH),this.camera=new wg(this.wrapW,this.wrapH),this.scene=new Mp,this.objs=new sM(this.scene,this.renderer.instance,this.camera.instance),this.setUtility()}onMouseMove(t,e){this.objs.onMouseMove(t,e)}onUpdate(){if(this.isLoaded){const t=Date.now();this.timeDelta=(t-this.prevTime)/1e3,this.time+=this.timeDelta,this.controls&&this.controls.update(),this.objs.onUpdate(this.timeDelta,this.time),this.prevTime=t}}onResize(){const t=this.wrap.clientWidth,e=this.wrap.clientHeight;this.wrapW=t,this.wrapH=e,this.camera.onResize(t,e),this.objs.onResize(t,e),this.renderer.onResize(t,e)}setUtility(){this.isHelper&&(this.axesHelper=new Ip(600),this.scene.add(this.axesHelper)),this.isControl&&(this.controls=new aM(this.camera.instance,this.canvas))}}class wM{constructor(){this.isUpdate=!0,this.isMouseMove=!1,this.isScroll=!1,this.setup(),this.setEvents()}setup(){this.gl=new bM(document.querySelector(".canvaswrap")),gb.w=window.innerWidth,gb.h=window.innerHeight}onUpdate(){if(!this.isUpdate)return;const t=window.scrollY;this.timer=requestAnimationFrame(this.onUpdate.bind(this)),this.gl.onUpdate(t)}onResize(){this.gl.onResize(),gb.w=window.innerWidth,gb.h=window.innerHeight}onMouseMove(t){this.isMouseMove&&this.gl.onMouseMove(t.pageX,t.pageY)}onScroll(){this.isScroll}load(){window.scrollTo(0,0)}setEvents(){this.onUpdate(),window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("scroll",this.onScroll.bind(this)),window.addEventListener("load",this.load.bind(this))}}window.gb===void 0&&(window.gb={}),new wM;
