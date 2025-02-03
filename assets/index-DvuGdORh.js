(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="166",si={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=1,Bo=1,Oo=2,xn=3,Bn=0,Ge=1,yn=2,Un=0,Ai=1,ba=2,Ta=3,Ca=4,bl=5,$n=100,Tl=101,Cl=102,Rl=103,Pl=104,Ll=200,Il=201,Dl=202,Nl=203,ws=204,As=205,Ul=206,Fl=207,Bl=208,Ol=209,zl=210,Vl=211,Hl=212,kl=213,Gl=214,Wl=0,Xl=1,ql=2,Dr=3,Yl=4,$l=5,Kl=6,jl=7,zo=0,Zl=1,Jl=2,Fn=0,Ql=1,tc=2,ec=3,nc=4,ic=5,rc=6,sc=7,Vo=300,Ri=301,Pi=302,bs=303,Ts=304,Vr=306,Cs=1e3,jn=1001,Rs=1002,Je=1003,ac=1004,tr=1005,sn=1006,Yr=1007,Zn=1008,En=1009,Ho=1010,ko=1011,Xi=1012,aa=1013,Jn=1014,Mn=1015,$i=1016,oa=1017,la=1018,Li=1020,Go=35902,Wo=1021,Xo=1022,an=1023,qo=1024,Yo=1025,bi=1026,Ii=1027,$o=1028,ca=1029,Ko=1030,ha=1031,ua=1033,br=33776,Tr=33777,Cr=33778,Rr=33779,Ps=35840,Ls=35841,Is=35842,Ds=35843,Ns=36196,Us=37492,Fs=37496,Bs=37808,Os=37809,zs=37810,Vs=37811,Hs=37812,ks=37813,Gs=37814,Ws=37815,Xs=37816,qs=37817,Ys=37818,$s=37819,Ks=37820,js=37821,Pr=36492,Zs=36494,Js=36495,jo=36283,Qs=36284,ta=36285,ea=36286,oc=3200,lc=3201,Zo=0,cc=1,Dn="",rn="srgb",zn="srgb-linear",da="display-p3",Hr="display-p3-linear",Nr="linear",Me="srgb",Ur="rec709",Fr="p3",oi=7680,Ra=519,hc=512,uc=513,dc=514,Jo=515,fc=516,pc=517,mc=518,vc=519,Pa=35044,La="300 es",Sn=2e3,Br=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,na=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function $r(i,t,e){return(1-e)*i+e*t}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _c={DEG2RAD:Lr};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,s,r,a,o,c,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d)}set(t,e,n,s,r,a,o,c,d){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],p=n[5],v=n[8],g=s[0],m=s[3],f=s[6],_=s[1],x=s[4],y=s[7],R=s[2],L=s[5],I=s[8];return r[0]=a*g+o*_+c*R,r[3]=a*m+o*x+c*L,r[6]=a*f+o*y+c*I,r[1]=d*g+h*_+l*R,r[4]=d*m+h*x+l*L,r[7]=d*f+h*y+l*I,r[2]=u*g+p*_+v*R,r[5]=u*m+p*x+v*L,r[8]=u*f+p*y+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*a*h-e*o*d-n*r*h+n*o*c+s*r*d-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*a-o*d,u=o*c-h*r,p=d*r-a*c,v=e*l+n*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*d-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-d*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*a+d*o)+a+t,-s*d,s*c,-s*(-d*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new ce;function Qo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xc(){const i=qi("canvas");return i.style.display="block",i}const Ia={};function tl(i){i in Ia||(Ia[i]=!0,console.warn(i))}function yc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Da=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Na=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[zn]:{transfer:Nr,primaries:Ur,toReference:i=>i,fromReference:i=>i},[rn]:{transfer:Me,primaries:Ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Hr]:{transfer:Nr,primaries:Fr,toReference:i=>i.applyMatrix3(Na),fromReference:i=>i.applyMatrix3(Da)},[da]:{transfer:Me,primaries:Fr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Na),fromReference:i=>i.applyMatrix3(Da).convertLinearToSRGB()}},Mc=new Set([zn,Hr]),ve={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=er[t].toReference,s=er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return er[i].primaries},getTransfer:function(i){return i===Dn?Nr:er[i].transfer}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class Sc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=qi("canvas")),li.width=t.width,li.height=t.height;const n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ec=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class He extends ii{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=jn,s=jn,r=sn,a=Zn,o=an,c=En,d=He.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Ki(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Vo;He.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(d+1)/2,y=(p+1)/2,R=(f+1)/2,L=(h+u)/4,I=(l+g)/4,N=(v+m)/4;return x>y&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=L/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=L/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=N/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(u-h)/_,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new el(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nl extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bc extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],d=n[s+1],h=n[s+2],l=n[s+3];const u=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==p||h!==v){let m=1-o;const f=c*u+d*p+h*v+l*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),L=Math.atan2(R,f*_);m=Math.sin(m*L)/R,o=Math.sin(o*L)/R}const y=o*_;if(c=c*m+u*y,d=d*m+p*y,h=h*m+v*y,l=l*m+g*y,m===1-o){const R=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=R,d*=R,h*=R,l*=R}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],d=n[s+2],h=n[s+3],l=r[a],u=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*p-d*u,t[e+1]=c*v+h*u+d*l-o*p,t[e+2]=d*v+h*p+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(s/2),l=o(r/2),u=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"YXZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"ZXY":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"ZYX":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"YZX":this._x=u*h*l+d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l-u*p*v;break;case"XZY":this._x=u*h*l-d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-d)*p,this._z=(a-s)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+d)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-d)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-s)/p,this._x=(r+d)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+a*o+s*d-r*c,this._y=s*h+a*c+r*o-n*d,this._z=r*h+a*d+n*c-s*o,this._w=a*h-n*o-s*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=a*l+this._w*u,this._x=n*l+this._x*u,this._y=s*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,n=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,d=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*d+a*l-o*h,this.y=n+c*h+o*d-r*l,this.z=s+c*l+r*h-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new it,Ua=new ti;class ji{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ir.subVectors(this.max,Oi),ci.subVectors(t.a,Oi),hi.subVectors(t.b,Oi),ui.subVectors(t.c,Oi),bn.subVectors(hi,ci),Tn.subVectors(ui,hi),Hn.subVectors(ci,ui);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Hn.z,Hn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Hn.z,0,-Hn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Hn.y,Hn.x,0];return!Qr(e,ci,hi,ui,ir)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,ci,hi,ui,ir))?!1:(rr.crossVectors(bn,Tn),e=[rr.x,rr.y,rr.z],Qr(e,ci,hi,ui,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new it,new it,new it,new it,new it,new it,new it,new it],tn=new it,nr=new ji,ci=new it,hi=new it,ui=new it,bn=new it,Tn=new it,Hn=new it,Oi=new it,ir=new it,rr=new it,kn=new it;function Qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=t.dot(kn),d=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const Tc=new ji,zi=new it,ts=new it;class kr{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(ts)),this.expandByPoint(zi.copy(t.center).sub(ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new it,es=new it,sr=new it,Cn=new it,ns=new it,ar=new it,is=new it;class fa{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){es.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(es);const r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=Cn.dot(this.direction),c=-Cn.dot(sr),d=Cn.lengthSq(),h=Math.abs(1-a*a);let l,u,p,v;if(h>0)if(l=a*c-o,u=a*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,p=l*(l+a*u+2*o)+u*(a*l+u+2*c)+d}else u=r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-a*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+d):(l=Math.max(0,-(a*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d);else u=a>0?-r:r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(es).addScaledVector(sr,u),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,s=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,s=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){ns.subVectors(e,t),ar.subVectors(n,t),is.crossVectors(ns,ar);let a=this.direction.dot(is),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const c=o*this.direction.dot(ar.crossVectors(Cn,ar));if(c<0)return null;const d=o*this.direction.dot(ns.cross(Cn));if(d<0||c+d>a)return null;const h=-o*Cn.dot(is);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m)}set(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=d,f[6]=h,f[10]=l,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),d=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=p+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+p*d,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-p,e[8]=a*d,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=g+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-a*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*d,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-p,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=p*d-v,e[2]=-d,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+p,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-d*h,e[6]=p*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=a*c,p=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=a*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cc,t,Rc)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Rn.crossVectors(n,Ye),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Rn.crossVectors(n,Ye)),Rn.normalize(),or.crossVectors(Ye,Rn),s[0]=Rn.x,s[4]=or.x,s[8]=Ye.x,s[1]=Rn.y,s[5]=or.y,s[9]=Ye.y,s[2]=Rn.z,s[6]=or.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],x=n[7],y=n[11],R=n[15],L=s[0],I=s[4],N=s[8],w=s[12],M=s[1],b=s[5],O=s[9],F=s[13],Y=s[2],q=s[6],K=s[10],V=s[14],D=s[3],et=s[7],j=s[11],B=s[15];return r[0]=a*L+o*M+c*Y+d*D,r[4]=a*I+o*b+c*q+d*et,r[8]=a*N+o*O+c*K+d*j,r[12]=a*w+o*F+c*V+d*B,r[1]=h*L+l*M+u*Y+p*D,r[5]=h*I+l*b+u*q+p*et,r[9]=h*N+l*O+u*K+p*j,r[13]=h*w+l*F+u*V+p*B,r[2]=v*L+g*M+m*Y+f*D,r[6]=v*I+g*b+m*q+f*et,r[10]=v*N+g*O+m*K+f*j,r[14]=v*w+g*F+m*V+f*B,r[3]=_*L+x*M+y*Y+R*D,r[7]=_*I+x*b+y*q+R*et,r[11]=_*N+x*O+y*K+R*j,r[15]=_*w+x*F+y*V+R*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-s*d*l-r*o*u+n*d*u+s*o*p-n*c*p)+g*(+e*c*p-e*d*u+r*a*u-s*a*p+s*d*h-r*c*h)+m*(+e*d*l-e*o*p-r*a*l+n*a*p+r*o*h-n*d*h)+f*(-s*o*h-e*c*l+e*o*u+s*a*l-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=l*m*d-g*u*d+g*c*p-o*m*p-l*c*f+o*u*f,x=v*u*d-h*m*d-v*c*p+a*m*p+h*c*f-a*u*f,y=h*g*d-v*l*d+v*o*p-a*g*p-h*o*f+a*l*f,R=v*l*c-h*g*c-v*o*u+a*g*u+h*o*m-a*l*m,L=e*_+n*x+s*y+r*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=_*I,t[1]=(g*u*r-l*m*r-g*s*p+n*m*p+l*s*f-n*u*f)*I,t[2]=(o*m*r-g*c*r+g*s*d-n*m*d-o*s*f+n*c*f)*I,t[3]=(l*c*r-o*u*r-l*s*d+n*u*d+o*s*p-n*c*p)*I,t[4]=x*I,t[5]=(h*m*r-v*u*r+v*s*p-e*m*p-h*s*f+e*u*f)*I,t[6]=(v*c*r-a*m*r-v*s*d+e*m*d+a*s*f-e*c*f)*I,t[7]=(a*u*r-h*c*r+h*s*d-e*u*d-a*s*p+e*c*p)*I,t[8]=y*I,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*I,t[10]=(a*g*r-v*o*r+v*n*d-e*g*d-a*n*f+e*o*f)*I,t[11]=(h*o*r-a*l*r-h*n*d+e*l*d+a*n*p-e*o*p)*I,t[12]=R*I,t[13]=(h*g*s-v*l*s+v*n*u-e*g*u-h*n*m+e*l*m)*I,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*I,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*u+e*o*u)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*c,d*c+s*o,0,d*o+s*c,h*o+n,h*c-s*a,0,d*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,d=r+r,h=a+a,l=o+o,u=r*d,p=r*h,v=r*l,g=a*h,m=a*l,f=o*l,_=c*d,x=c*h,y=c*l,R=n.x,L=n.y,I=n.z;return s[0]=(1-(g+f))*R,s[1]=(p+y)*R,s[2]=(v-x)*R,s[3]=0,s[4]=(p-y)*L,s[5]=(1-(u+f))*L,s[6]=(m+_)*L,s[7]=0,s[8]=(v+x)*I,s[9]=(m-_)*I,s[10]=(1-(u+g))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const d=1/r,h=1/a,l=1/o;return en.elements[0]*=d,en.elements[1]*=d,en.elements[2]*=d,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=l,en.elements[9]*=l,en.elements[10]*=l,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Sn){const c=this.elements,d=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),u=(n+s)/(n-s);let p,v;if(o===Sn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Br)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn){const c=this.elements,d=1/(e-t),h=1/(n-s),l=1/(a-r),u=(e+t)*d,p=(n+s)*h;let v,g;if(o===Sn)v=(a+r)*l,g=-2*l;else if(o===Br)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new it,en=new be,Cc=new it(0,0,0),Rc=new it(1,1,1),Rn=new it,or=new it,Ye=new it,Fa=new be,Ba=new ti;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],d=s[5],h=s[9],l=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pc=0;const Oa=new it,fi=new ti,vn=new be,lr=new it,Vi=new it,Lc=new it,Ic=new ti,za=new it(1,0,0),Va=new it(0,1,0),Ha=new it(0,0,1),ka={type:"added"},Dc={type:"removed"},pi={type:"childadded",child:null},rs={type:"childremoved",child:null};class Ue extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new it,e=new dn,n=new ti,s=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(Va,t)}rotateZ(t){return this.rotateOnAxis(Ha,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(Va,t)}translateZ(t){return this.translateOnAxis(Ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Vi,lr,this.up):vn.lookAt(lr,Vi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(vn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ka),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dc),rs.child=t,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ka),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,Lc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Ic,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),d=a(t.textures),h=a(t.images),l=a(t.shapes),u=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new it(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new it,gn=new it,ss=new it,_n=new it,mi=new it,vi=new it,Ga=new it,as=new it,os=new it,ls=new it;class cn{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),gn.subVectors(n,e),ss.subVectors(t,e);const a=nn.dot(nn),o=nn.dot(gn),c=nn.dot(ss),d=gn.dot(gn),h=gn.dot(ss),l=a*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,p=(d*c-o*h)*u,v=(a*h-o*c)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),gn.subVectors(t,e),nn.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),nn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,n),vi.subVectors(r,n),as.subVectors(t,n);const c=mi.dot(as),d=vi.dot(as);if(c<=0&&d<=0)return e.copy(n);os.subVectors(t,s);const h=mi.dot(os),l=vi.dot(os);if(h>=0&&l<=h)return e.copy(s);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(mi,a);ls.subVectors(t,r);const p=mi.dot(ls),v=vi.dot(ls);if(v>=0&&p<=v)return e.copy(r);const g=p*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(vi,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return Ga.subVectors(r,s),o=(l-h)/(l-h+(p-v)),e.copy(s).addScaledVector(Ga,o);const f=1/(m+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(mi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function cs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=gc(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cs(a,r,t+1/3),this.g=cs(a,r,t),this.b=cs(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ve.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ve(Be.r*255,0,255))*65536+Math.round(Ve(Be.g*255,0,255))*256+Math.round(Ve(Be.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,d;const h=(o+a)/2;if(o===a)c=0,d=0;else{const l=a-o;switch(d=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=rn){ve.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(cr);const n=$r(Pn.h,cr.h,e),s=$r(Pn.s,cr.s,e),r=$r(Pn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new fe;fe.NAMES=rl;let Nc=0;class Ni extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=As,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ws&&(n.blendSrc=this.blendSrc),this.blendDst!==As&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class sl extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new it,hr=new re;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return tl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}}class al extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ol extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class We extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uc=0;const je=new be,hs=new Ue,gi=new it,$e=new ji,Hi=new ji,Ne=new it;class fn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qo(t)?ol:al)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return hs.lookAt(t),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new We(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors($e.min,Hi.min),$e.expandByPoint(Ne),Ne.addVectors($e.max,Hi.max),$e.expandByPoint(Ne)):($e.expandByPoint(Hi.min),$e.expandByPoint(Hi.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Ne.fromBufferAttribute(o,d),c&&(gi.fromBufferAttribute(t,d),Ne.add(gi)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new it,c[N]=new it;const d=new it,h=new it,l=new it,u=new re,p=new re,v=new re,g=new it,m=new it;function f(N,w,M){d.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),l.fromBufferAttribute(n,M),u.fromBufferAttribute(r,N),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,M),h.sub(d),l.sub(d),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-p.y).multiplyScalar(b),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),o[N].add(g),o[w].add(g),o[M].add(g),c[N].add(m),c[w].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let N=0,w=_.length;N<w;++N){const M=_[N],b=M.start,O=M.count;for(let F=b,Y=b+O;F<Y;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new it,y=new it,R=new it,L=new it;function I(N){R.fromBufferAttribute(s,N),L.copy(R);const w=o[N];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(L,w);const b=y.dot(c[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,b)}for(let N=0,w=_.length;N<w;++N){const M=_[N],b=M.start,O=M.count;for(let F=b,Y=b+O;F<Y;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new it,r=new it,a=new it,o=new it,c=new it,d=new it,h=new it,l=new it;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)u[v++]=d[p++]}return new hn(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const d=a[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const p=d[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,p=l.length;u<p;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,h=a.length;d<h;d++){const l=a[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new be,Gn=new fa,ur=new kr,Xa=new it,_i=new it,xi=new it,yi=new it,us=new it,dr=new it,fr=new re,pr=new re,mr=new re,qa=new it,Ya=new it,$a=new it,vr=new it,gr=new it;class Ke extends Ue{constructor(t=new fn,e=new sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&(us.fromBufferAttribute(l,t),a?dr.addScaledVector(us,h):dr.addScaledVector(us.sub(e),h))}e.add(dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(ur.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ur,Xa)===null||Gn.origin.distanceToSquared(Xa)>(t.far-t.near)**2))&&(Wa.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const L=o.getX(y),I=o.getX(y+1),N=o.getX(y+2);s=_r(this,f,t,n,d,h,l,L,I,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=_r(this,a,t,n,d,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const L=y,I=y+1,N=y+2;s=_r(this,f,t,n,d,h,l,L,I,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;s=_r(this,a,t,n,d,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fc(i,t,e,n,s,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Bn,o),c===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(gr);return d<e.near||d>e.far?null:{distance:d,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,a,o,c,d){i.getVertexPosition(o,_i),i.getVertexPosition(c,xi),i.getVertexPosition(d,yi);const h=Fc(i,t,e,n,_i,xi,yi,vr);if(h){s&&(fr.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,c),mr.fromBufferAttribute(s,d),h.uv=cn.getInterpolation(vr,_i,xi,yi,fr,pr,mr,new re)),r&&(fr.fromBufferAttribute(r,o),pr.fromBufferAttribute(r,c),mr.fromBufferAttribute(r,d),h.uv1=cn.getInterpolation(vr,_i,xi,yi,fr,pr,mr,new re)),a&&(qa.fromBufferAttribute(a,o),Ya.fromBufferAttribute(a,c),$a.fromBufferAttribute(a,d),h.normal=cn.getInterpolation(vr,_i,xi,yi,qa,Ya,$a,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:d,normal:new it,materialIndex:0};cn.getNormal(_i,xi,yi,l.normal),h.face=l}return h}class ri extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],l=[];let u=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(l,2));function v(g,m,f,_,x,y,R,L,I,N,w){const M=y/I,b=R/N,O=y/2,F=R/2,Y=L/2,q=I+1,K=N+1;let V=0,D=0;const et=new it;for(let j=0;j<K;j++){const B=j*b-F;for(let Z=0;Z<q;Z++){const k=Z*M-O;et[g]=k*_,et[m]=B*x,et[f]=Y,d.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[f]=L>0?1:-1,h.push(et.x,et.y,et.z),l.push(Z/I),l.push(1-j/N),V+=1}}for(let j=0;j<N;j++)for(let B=0;B<I;B++){const Z=u+B+q*j,k=u+B+q*(j+1),T=u+(B+1)+q*(j+1),C=u+(B+1)+q*j;c.push(Z,k,C),c.push(k,T,C),D+=6}o.addGroup(p,D,w),p+=D,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const s in n)t[s]=n[s]}return t}function Bc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Oc={clone:Di,merge:ze};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cl extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new it,Ka=new re,ja=new re;class Ze extends cl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Ka,ja),e.subVectors(ja,Ka)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/d,s*=a.width/c,n*=a.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class Hc extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Mi,Si,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Mi,Si,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Mi,Si,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Mi,Si,t,e);o.layers=this.layers,this.add(o);const c=new Ze(Mi,Si,t,e);c.layers=this.layers,this.add(c);const d=new Ze(Mi,Si,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const d of e)this.remove(d);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class pa extends He{constructor(t,e,n,s,r,a,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kc extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Un});r.uniforms.tEquirect.value=e;const a=new Ke(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=sn),new Hc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ds=new it,Gc=new it,Wc=new ce;class In{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ds.subVectors(n,e).cross(Gc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ds),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wc.getNormalMatrix(t),s=this.coplanarPoint(ds).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new kr,xr=new it;class ma{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],d=s[4],h=s[5],l=s[6],u=s[7],p=s[8],v=s[9],g=s[10],m=s[11],f=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,u-d,m-p,y-f).normalize(),n[1].setComponents(c+r,u+d,m+p,y+f).normalize(),n[2].setComponents(c+a,u+h,m+v,y+_).normalize(),n[3].setComponents(c-a,u-h,m-v,y-_).normalize(),n[4].setComponents(c-o,u-l,m-g,y-x).normalize(),e===Sn)n[5].setComponents(c+o,u+l,m+g,y+x).normalize();else if(e===Br)n[5].setComponents(o,l,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xc(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c._updateRange,u=c.updateRanges;if(i.bindBuffer(d,o),l.count===-1&&u.length===0&&i.bufferSubData(d,0,h),u.length!==0){for(let p=0,v=u.length;p<v;p++){const g=u[p];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}l.count!==-1&&(i.bufferSubData(d,l.offset*h.BYTES_PER_ELEMENT,h,l.offset,l.count),l.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:s,remove:r,update:a}}class Zi extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),d=o+1,h=c+1,l=t/o,u=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const _=f*u-a;for(let x=0;x<d;x++){const y=x*l-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const x=_+d*f,y=_+d*(f+1),R=_+1+d*(f+1),L=_+1+d*f;p.push(x,y,L),p.push(y,R,L)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(g,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.widthSegments,t.heightSegments)}}var qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yc=`#ifdef USE_ALPHAHASH
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
#endif`,$c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,th=`#ifdef USE_BATCHING
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
#endif`,eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sh=`#ifdef USE_IRIDESCENCE
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
#endif`,ah=`#ifdef USE_BUMPMAP
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gh=`vec3 transformedNormal = objectNormal;
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
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dh=`#ifdef USE_GRADIENTMAP
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
}`,Nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
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
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
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
#endif`,Wh=`struct PhysicalMaterial {
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
}`,Xh=`
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
#endif`,qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$h=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eu=`#if defined( USE_POINTS_UV )
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
#endif`,nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,su=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pu=`#ifdef USE_NORMALMAP
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
#endif`,mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pu=`float getShadowMask() {
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
}`,Lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#ifdef USE_TRANSMISSION
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qu=`uniform sampler2D t2D;
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$u=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
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
}`,Ju=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Qu=`#define DISTANCE
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
}`,td=`#define DISTANCE
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`uniform float scale;
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
}`,rd=`uniform vec3 diffuse;
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
}`,sd=`#include <common>
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#define LAMBERT
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
}`,ld=`#define LAMBERT
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
}`,cd=`#define MATCAP
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
}`,hd=`#define MATCAP
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
}`,ud=`#define NORMAL
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
}`,dd=`#define NORMAL
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
}`,fd=`#define PHONG
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
}`,pd=`#define PHONG
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
}`,md=`#define STANDARD
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
}`,vd=`#define STANDARD
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
}`,gd=`#define TOON
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
}`,_d=`#define TOON
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
}`,xd=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Md=`#include <common>
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
}`,Sd=`uniform vec3 color;
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
}`,Ed=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,wd=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:qc,alphahash_pars_fragment:Yc,alphamap_fragment:$c,alphamap_pars_fragment:Kc,alphatest_fragment:jc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:Qc,batching_pars_vertex:th,batching_vertex:eh,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:rh,iridescence_fragment:sh,bumpmap_pars_fragment:ah,clipping_planes_fragment:oh,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:hh,color_fragment:uh,color_pars_fragment:dh,color_pars_vertex:fh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:vh,defaultnormal_vertex:gh,displacementmap_pars_vertex:_h,displacementmap_vertex:xh,emissivemap_fragment:yh,emissivemap_pars_fragment:Mh,colorspace_fragment:Sh,colorspace_pars_fragment:Eh,envmap_fragment:wh,envmap_common_pars_fragment:Ah,envmap_pars_fragment:bh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Oh,envmap_vertex:Ch,fog_vertex:Rh,fog_pars_vertex:Ph,fog_fragment:Lh,fog_pars_fragment:Ih,gradientmap_pars_fragment:Dh,lightmap_pars_fragment:Nh,lights_lambert_fragment:Uh,lights_lambert_pars_fragment:Fh,lights_pars_begin:Bh,lights_toon_fragment:zh,lights_toon_pars_fragment:Vh,lights_phong_fragment:Hh,lights_phong_pars_fragment:kh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Wh,lights_fragment_begin:Xh,lights_fragment_maps:qh,lights_fragment_end:Yh,logdepthbuf_fragment:$h,logdepthbuf_pars_fragment:Kh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Zh,map_fragment:Jh,map_pars_fragment:Qh,map_particle_fragment:tu,map_particle_pars_fragment:eu,metalnessmap_fragment:nu,metalnessmap_pars_fragment:iu,morphinstance_vertex:ru,morphcolor_vertex:su,morphnormal_vertex:au,morphtarget_pars_vertex:ou,morphtarget_vertex:lu,normal_fragment_begin:cu,normal_fragment_maps:hu,normal_pars_fragment:uu,normal_pars_vertex:du,normal_vertex:fu,normalmap_pars_fragment:pu,clearcoat_normal_fragment_begin:mu,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:_u,opaque_fragment:xu,packing:yu,premultiplied_alpha_fragment:Mu,project_vertex:Su,dithering_fragment:Eu,dithering_pars_fragment:wu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:bu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Cu,shadowmap_vertex:Ru,shadowmask_pars_fragment:Pu,skinbase_vertex:Lu,skinning_pars_vertex:Iu,skinning_vertex:Du,skinnormal_vertex:Nu,specularmap_fragment:Uu,specularmap_pars_fragment:Fu,tonemapping_fragment:Bu,tonemapping_pars_fragment:Ou,transmission_fragment:zu,transmission_pars_fragment:Vu,uv_pars_fragment:Hu,uv_pars_vertex:ku,uv_vertex:Gu,worldpos_vertex:Wu,background_vert:Xu,background_frag:qu,backgroundCube_vert:Yu,backgroundCube_frag:$u,cube_vert:Ku,cube_frag:ju,depth_vert:Zu,depth_frag:Ju,distanceRGBA_vert:Qu,distanceRGBA_frag:td,equirect_vert:ed,equirect_frag:nd,linedashed_vert:id,linedashed_frag:rd,meshbasic_vert:sd,meshbasic_frag:ad,meshlambert_vert:od,meshlambert_frag:ld,meshmatcap_vert:cd,meshmatcap_frag:hd,meshnormal_vert:ud,meshnormal_frag:dd,meshphong_vert:fd,meshphong_frag:pd,meshphysical_vert:md,meshphysical_frag:vd,meshtoon_vert:gd,meshtoon_frag:_d,points_vert:xd,points_frag:yd,shadow_vert:Md,shadow_frag:Sd,sprite_vert:Ed,sprite_frag:wd},Ht={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},on={basic:{uniforms:ze([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:ze([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:ze([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:ze([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:ze([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:ze([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:ze([Ht.points,Ht.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:ze([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:ze([Ht.common,Ht.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:ze([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:ze([Ht.sprite,Ht.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:ze([Ht.common,Ht.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:ze([Ht.lights,Ht.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};on.physical={uniforms:ze([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const yr={r:0,b:0,g:0},Xn=new dn,Ad=new be;function bd(i,t,e,n,s,r,a){const o=new fe(0);let c=r===!0?0:1,d,h,l=null,u=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?f(o,c):y&&y.isColor&&(f(y,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Vr)?(h===void 0&&(h=new Ke(new ri(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Di(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(Xn)),h.material.toneMapped=ve.getTransfer(y.colorSpace)!==Me,(l!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new Ke(new Zi(2,2),new On({name:"BackgroundMaterial",uniforms:Di(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=ve.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||u!==y.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,l=y,u=y.version,p=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function f(_,x){_.getRGB(yr,ll(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(o,c)},render:g,addToRenderList:m}}function Td(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(M,b,O,F,Y){let q=!1;const K=l(F,O,b);r!==K&&(r=K,d(r.object)),q=p(M,F,O,Y),q&&v(M,F,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(M,b,O,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function d(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function l(M,b,O){const F=O.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let q=Y[b.id];q===void 0&&(q={},Y[b.id]=q);let K=q[F];return K===void 0&&(K=u(c()),q[F]=K),K}function u(M){const b=[],O=[],F=[];for(let Y=0;Y<e;Y++)b[Y]=0,O[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,b,O,F){const Y=r.attributes,q=b.attributes;let K=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){const j=Y[D];let B=q[D];if(B===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),j===void 0||j.attribute!==B||B&&j.data!==B.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function v(M,b,O,F){const Y={},q=b.attributes;let K=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){let j=q[D];j===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const B={};B.attribute=j,j&&j.data&&(B.data=j.data),Y[D]=B,K++}r.attributes=Y,r.attributesNum=K,r.index=F}function g(){const M=r.newAttributes;for(let b=0,O=M.length;b<O;b++)M[b]=0}function m(M){f(M,0)}function f(M,b){const O=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;O[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),Y[M]!==b&&(i.vertexAttribDivisor(M,b),Y[M]=b)}function _(){const M=r.newAttributes,b=r.enabledAttributes;for(let O=0,F=b.length;O<F;O++)b[O]!==M[O]&&(i.disableVertexAttribArray(O),b[O]=0)}function x(M,b,O,F,Y,q,K){K===!0?i.vertexAttribIPointer(M,b,O,Y,q):i.vertexAttribPointer(M,b,O,F,Y,q)}function y(M,b,O,F){g();const Y=F.attributes,q=O.getAttributes(),K=b.defaultAttributeValues;for(const V in q){const D=q[V];if(D.location>=0){let et=Y[V];if(et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const j=et.normalized,B=et.itemSize,Z=t.get(et);if(Z===void 0)continue;const k=Z.buffer,T=Z.type,C=Z.bytesPerElement,G=T===i.INT||T===i.UNSIGNED_INT||et.gpuType===aa;if(et.isInterleavedBufferAttribute){const J=et.data,nt=J.stride,X=et.offset;if(J.isInstancedInterleavedBuffer){for(let at=0;at<D.locationSize;at++)f(D.location+at,J.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<D.locationSize;at++)m(D.location+at);i.bindBuffer(i.ARRAY_BUFFER,k);for(let at=0;at<D.locationSize;at++)x(D.location+at,B/D.locationSize,T,j,nt*C,(X+B/D.locationSize*at)*C,G)}else{if(et.isInstancedBufferAttribute){for(let J=0;J<D.locationSize;J++)f(D.location+J,et.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let J=0;J<D.locationSize;J++)m(D.location+J);i.bindBuffer(i.ARRAY_BUFFER,k);for(let J=0;J<D.locationSize;J++)x(D.location+J,B/D.locationSize,T,j,B*C,B/D.locationSize*J*C,G)}}else if(K!==void 0){const j=K[V];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(D.location,j);break;case 3:i.vertexAttrib3fv(D.location,j);break;case 4:i.vertexAttrib4fv(D.location,j);break;default:i.vertexAttrib1fv(D.location,j)}}}}_()}function R(){N();for(const M in n){const b=n[M];for(const O in b){const F=b[O];for(const Y in F)h(F[Y].object),delete F[Y];delete b[O]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const O in b){const F=b[O];for(const Y in F)h(F[Y].object),delete F[Y];delete b[O]}delete n[M.id]}function I(M){for(const b in n){const O=n[b];if(O[M.id]===void 0)continue;const F=O[M.id];for(const Y in F)h(F[Y].object),delete F[Y];delete O[M.id]}}function N(){w(),a=!0,r!==s&&(r=s,d(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Cd(i,t,e){let n;function s(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function a(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let p=0;for(let v=0;v<l;v++)p+=h[v];e.update(p,n,1)}function c(d,h,l,u){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d.length;v++)a(d[v],h[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g];for(let g=0;g<u.length;g++)e.update(v,n,u[g])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==an&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const I=L===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==En&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Mn&&!I)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:R}}function Pd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const p=l.length!==0||u||n!==0||s;return s=u,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):d();else{const _=r?0:n,x=_*4;let y=f.clippingState||null;c.value=y,y=h(v,u,x,p);for(let R=0;R!==x;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(l[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ld(i){let t=new WeakMap;function e(a,o){return o===bs?a.mapping=Ri:o===Ts&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bs||o===Ts)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new kc(c.height);return d.fromEquirectangularTexture(i,a),t.set(a,d),a.addEventListener("dispose",s),e(d.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ul extends cl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,Za=[.125,.215,.35,.446,.526,.582],Kn=20,fs=new ul,Ja=new fe;let ps=null,ms=0,vs=0,gs=!1;const Yn=(1+Math.sqrt(5))/2,Ei=1/Yn,Qa=[new it(-Yn,Ei,0),new it(Yn,Ei,0),new it(-Ei,0,Yn),new it(Ei,0,Yn),new it(0,Yn,-Ei),new it(0,Yn,Ei),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)];class to{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ps,ms,vs),this._renderer.xr.enabled=gs,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$i,format:an,colorSpace:zn,depthBuffer:!1},s=eo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(r)),this._blurMaterial=Dd(r,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,fs)}_sceneToCubeUV(t,e,n,s){const o=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,u=h.toneMapping;h.getClearColor(Ja),h.toneMapping=Fn,h.autoClear=!1;const p=new sl({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),v=new Ke(new ri,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ja),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(d[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,d[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,d[f]));const x=this._cubeSize;Mr(s,_*x,f>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ri||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qa[(s-r-1)%Qa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ke(this._lodPlanes[s],d),u=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let _=0;for(let I=0;I<Kn;++I){const N=I/g,w=Math.exp(-N*N/2);f.push(w),I===0?_+=w:I<m&&(_+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-n;const y=this._sizeLods[s],R=3*y*(s>x-wi?s-x+wi:0),L=4*(this._cubeSize-y);Mr(e,R,L,3*y,2*y),c.setRenderTarget(e),c.render(l,fs)}}function Id(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+Za.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-wi?c=Za[a-i+wi-1]:a===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,N=L>2?0:-1,w=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];_.set(w,g*v*L),x.set(u,m*v*L);const M=[L,L,L,L,L,L];y.set(M,f*v*L)}const R=new fn;R.setAttribute("position",new hn(_,g)),R.setAttribute("uv",new hn(x,m)),R.setAttribute("faceIndex",new hn(y,f)),t.push(R),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eo(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dd(i,t,e){const n=new Float32Array(Kn),s=new it(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function no(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function io(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function Nd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===bs||c===Ts,h=c===Ri||c===Pi;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new to(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return d&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new to(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ud(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fd(i,t,e,n){const s={},r=new WeakMap;function a(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const g=u.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const v in u)t.update(u[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function d(l){const u=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const R=_[x+0],L=_[x+1],I=_[x+2];u.push(R,L,L,I,I,R)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const R=x+0,L=x+1,I=x+2;u.push(R,L,L,I,I,R)}}else return;const m=new(Qo(u)?ol:al)(u,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const u=r.get(l);if(u){const p=l.index;p!==null&&u.version<p.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Bd(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function d(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,u*a,v),e.update(p,n,v))}function h(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,n,1)}function l(u,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)d(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,v);let f=0;for(let _=0;_<v;_++)f+=p[_];for(let _=0;_<g.length;_++)e.update(f,n,g[_])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Od(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zd(i,t,e){const n=new WeakMap,s=new Le;function r(a,o,c){const d=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,L=1;R>t.maxTextureSize&&(L=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const I=new Float32Array(R*L*4*l),N=new nl(I,R,L,l);N.type=Mn,N.needsUpdate=!0;const w=y*4;for(let b=0;b<l;b++){const O=f[b],F=_[b],Y=x[b],q=R*L*4*b;for(let K=0;K<O.count;K++){const V=K*w;v===!0&&(s.fromBufferAttribute(O,K),I[q+V+0]=s.x,I[q+V+1]=s.y,I[q+V+2]=s.z,I[q+V+3]=0),g===!0&&(s.fromBufferAttribute(F,K),I[q+V+4]=s.x,I[q+V+5]=s.y,I[q+V+6]=s.z,I[q+V+7]=0),m===!0&&(s.fromBufferAttribute(Y,K),I[q+V+8]=s.x,I[q+V+9]=s.y,I[q+V+10]=s.z,I[q+V+11]=Y.itemSize===4?s.w:1)}}u={count:l,texture:N,size:new re(R,L)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vd(i,t,e,n){let s=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==d&&(t.update(l),s.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return l}function a(){s=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:a}}class dl extends He{constructor(t,e,n,s,r,a,o,c,d,h=bi){if(h!==bi&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=Jn),n===void 0&&h===Ii&&(n=Li),super(null,s,r,a,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fl=new He,ro=new dl(1,1),pl=new nl,ml=new bc,vl=new pa,so=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function Ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=so[s];if(r===void 0&&(r=new Float32Array(s),so[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gr(i,t){let e=ao[t];e===void 0&&(e=new Int32Array(t),ao[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;co.set(n),i.uniformMatrix2fv(this.addr,!1,co),De(e,n)}}function qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;lo.set(n),i.uniformMatrix3fv(this.addr,!1,lo),De(e,n)}}function Yd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;oo.set(n),i.uniformMatrix4fv(this.addr,!1,oo),De(e,n)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ro.compareFunction=Jo,r=ro):r=fl,e.setTexture2D(t||r,s)}function rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ml,s)}function sf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vl,s)}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pl,s)}function of(i){switch(i){case 5126:return Hd;case 35664:return kd;case 35665:return Gd;case 35666:return Wd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return $d;case 35667:case 35671:return Kd;case 35668:case 35672:return jd;case 35669:case 35673:return Zd;case 5125:return Jd;case 36294:return Qd;case 36295:return tf;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return nf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return af}}function lf(i,t){i.uniform1fv(this.addr,t)}function cf(i,t){const e=Ui(t,this.size,2);i.uniform2fv(this.addr,e)}function hf(i,t){const e=Ui(t,this.size,3);i.uniform3fv(this.addr,e)}function uf(i,t){const e=Ui(t,this.size,4);i.uniform4fv(this.addr,e)}function df(i,t){const e=Ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ff(i,t){const e=Ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pf(i,t){const e=Ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mf(i,t){i.uniform1iv(this.addr,t)}function vf(i,t){i.uniform2iv(this.addr,t)}function gf(i,t){i.uniform3iv(this.addr,t)}function _f(i,t){i.uniform4iv(this.addr,t)}function xf(i,t){i.uniform1uiv(this.addr,t)}function yf(i,t){i.uniform2uiv(this.addr,t)}function Mf(i,t){i.uniform3uiv(this.addr,t)}function Sf(i,t){i.uniform4uiv(this.addr,t)}function Ef(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fl,r[a])}function wf(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ml,r[a])}function Af(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vl,r[a])}function bf(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pl,r[a])}function Tf(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return hf;case 35666:return uf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return vf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return xf;case 36294:return yf;case 36295:return Mf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return bf}}class Cf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=of(e.type)}}class Rf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tf(e.type)}}class Pf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const _s=/(\w+)(\])?(\[|\.)?/g;function ho(i,t){i.seq.push(t),i.map[t.id]=t}function Lf(i,t,e){const n=i.name,s=n.length;for(_s.lastIndex=0;;){const r=_s.exec(n),a=_s.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&a+2===s){ho(e,d===void 0?new Cf(o,i,t):new Rf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Pf(o),ho(e,l)),e=l}}}class Ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function uo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const If=37297;let Df=0;function Nf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Uf(i){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i);let n;switch(t===e?n="":t===Fr&&e===Ur?n="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Fr&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case Hr:return[n,"LinearTransferOETF"];case rn:case da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nf(i.getShaderSource(t),a)}else return s}function Ff(i,t){const e=Uf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bf(i,t){let e;switch(t){case Ql:e="Linear";break;case tc:e="Reinhard";break;case ec:e="OptimizedCineon";break;case nc:e="ACESFilmic";break;case rc:e="AgX";break;case sc:e="Neutral";break;case ic:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gi(i){return i!==""}function po(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Hf,Gf)}const kf=new Map;function Gf(i,t){let e=le[t];if(e===void 0){const n=kf.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(i){return i.replace(Wf,Xf)}function Xf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function go(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $f(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Kf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zl:t="ENVMAP_BLENDING_MIX";break;case Jl:t="ENVMAP_BLENDING_ADD";break}return t}function jf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=qf(e),d=Yf(e),h=$f(e),l=Kf(e),u=jf(e),p=Of(e),v=zf(r),g=s.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gi).join(`
`),f.length>0&&(f+=`
`)):(m=[go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),f=[go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?le.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Ff("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=ia(a),a=po(a,e),a=mo(a,e),o=ia(o),o=po(o,e),o=mo(o,e),a=vo(a),o=vo(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+a,y=_+f+o,R=uo(s,s.VERTEX_SHADER,x),L=uo(s,s.FRAGMENT_SHADER,y);s.attachShader(g,R),s.attachShader(g,L),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(b){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(L).trim();let q=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,L);else{const V=fo(s,R,"vertex"),D=fo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+V+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||Y==="")&&(K=!1);K&&(b.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(R),s.deleteShader(L),N=new Ir(s,g),w=Vf(s,g)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,If)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Df++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=L,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tp(t),e.set(t,n)),n}}class tp{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function ep(i,t,e,n,s,r,a){const o=new il,c=new Qf,d=new Set,h=[],l=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return d.add(w),w===0?"uv":`uv${w}`}function m(w,M,b,O,F){const Y=O.fog,q=F.geometry,K=w.isMeshStandardMaterial?O.environment:null,V=(w.isMeshStandardMaterial?e:t).get(w.envMap||K),D=V&&V.mapping===Vr?V.image.height:null,et=v[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,B=j!==void 0?j.length:0;let Z=0;q.morphAttributes.position!==void 0&&(Z=1),q.morphAttributes.normal!==void 0&&(Z=2),q.morphAttributes.color!==void 0&&(Z=3);let k,T,C,G;if(et){const ae=on[et];k=ae.vertexShader,T=ae.fragmentShader}else k=w.vertexShader,T=w.fragmentShader,c.update(w),C=c.getVertexShaderID(w),G=c.getFragmentShaderID(w);const J=i.getRenderTarget(),nt=F.isInstancedMesh===!0,X=F.isBatchedMesh===!0,at=!!w.map,pt=!!w.matcap,U=!!V,Tt=!!w.aoMap,Mt=!!w.lightMap,ht=!!w.bumpMap,ot=!!w.normalMap,Kt=!!w.displacementMap,At=!!w.emissiveMap,kt=!!w.metalnessMap,P=!!w.roughnessMap,A=w.anisotropy>0,Q=w.clearcoat>0,dt=w.dispersion>0,vt=w.iridescence>0,ut=w.sheen>0,Ot=w.transmission>0,yt=A&&!!w.anisotropyMap,Lt=Q&&!!w.clearcoatMap,jt=Q&&!!w.clearcoatNormalMap,wt=Q&&!!w.clearcoatRoughnessMap,Vt=vt&&!!w.iridescenceMap,ee=vt&&!!w.iridescenceThicknessMap,Yt=ut&&!!w.sheenColorMap,zt=ut&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Qt=!!w.specularColorMap,de=!!w.specularIntensityMap,S=Ot&&!!w.transmissionMap,tt=Ot&&!!w.thicknessMap,rt=!!w.gradientMap,ct=!!w.alphaMap,_t=w.alphaTest>0,Xt=!!w.alphaHash,te=!!w.extensions;let me=Fn;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(me=i.toneMapping);const xe={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:k,fragmentShader:T,defines:w.defines,customVertexShaderID:C,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:X,batchingColor:X&&F._colorsTexture!==null,instancing:nt,instancingColor:nt&&F.instanceColor!==null,instancingMorph:nt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zn,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:pt,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:D,aoMap:Tt,lightMap:Mt,bumpMap:ht,normalMap:ot,displacementMap:u&&Kt,emissiveMap:At,normalMapObjectSpace:ot&&w.normalMapType===cc,normalMapTangentSpace:ot&&w.normalMapType===Zo,metalnessMap:kt,roughnessMap:P,anisotropy:A,anisotropyMap:yt,clearcoat:Q,clearcoatMap:Lt,clearcoatNormalMap:jt,clearcoatRoughnessMap:wt,dispersion:dt,iridescence:vt,iridescenceMap:Vt,iridescenceThicknessMap:ee,sheen:ut,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:Jt,specularColorMap:Qt,specularIntensityMap:de,transmission:Ot,transmissionMap:S,thicknessMap:tt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===Ai&&w.alphaToCoverage===!1,alphaMap:ct,alphaTest:_t,alphaHash:Xt,combine:w.combine,mapUv:at&&g(w.map.channel),aoMapUv:Tt&&g(w.aoMap.channel),lightMapUv:Mt&&g(w.lightMap.channel),bumpMapUv:ht&&g(w.bumpMap.channel),normalMapUv:ot&&g(w.normalMap.channel),displacementMapUv:Kt&&g(w.displacementMap.channel),emissiveMapUv:At&&g(w.emissiveMap.channel),metalnessMapUv:kt&&g(w.metalnessMap.channel),roughnessMapUv:P&&g(w.roughnessMap.channel),anisotropyMapUv:yt&&g(w.anisotropyMap.channel),clearcoatMapUv:Lt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&g(w.sheenRoughnessMap.channel),specularMapUv:Jt&&g(w.specularMap.channel),specularColorMapUv:Qt&&g(w.specularColorMap.channel),specularIntensityMapUv:de&&g(w.specularIntensityMap.channel),transmissionMapUv:S&&g(w.transmissionMap.channel),thicknessMapUv:tt&&g(w.thicknessMap.channel),alphaMapUv:ct&&g(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ot||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(at||ct),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&ve.getTransfer(w.map.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yn,flipSided:w.side===Ge,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=d.has(1),xe.vertexUv2s=d.has(2),xe.vertexUv3s=d.has(3),d.clear(),xe}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)M.push(b),M.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(_(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function y(w){const M=v[w.type];let b;if(M){const O=on[M];b=Oc.clone(O.uniforms)}else b=w.uniforms;return b}function R(w,M){let b;for(let O=0,F=h.length;O<F;O++){const Y=h[O];if(Y.cacheKey===M){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new Zf(i,M,w,r),h.push(b)),b}function L(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function I(w){c.remove(w)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:N}}function np(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _o(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,u,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:u,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,u,p,v,g,m){const f=a(l,u,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,u,p,v,g,m){const f=a(l,u,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function d(l,u){e.length>1&&e.sort(l||ip),n.length>1&&n.sort(u||_o),s.length>1&&s.sort(u||_o)}function h(){for(let l=t,u=i.length;l<u;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:d}}function rp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new xo,i.set(n,[a])):s>=r.length?(a=new xo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function sp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new fe};break;case"SpotLight":e={position:new it,direction:new it,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=e,e}}}function ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let op=0;function lp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cp(i){const t=new sp,e=ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new it);const s=new it,r=new be,a=new be;function o(d){let h=0,l=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,_=0,x=0,y=0,R=0,L=0,I=0;d.sort(lp);for(let w=0,M=d.length;w<M;w++){const b=d[w],O=b.color,F=b.intensity,Y=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=O.r*F,l+=O.g*F,u+=O.b*F;else if(b.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(b.sh.coefficients[K],F);I++}else if(b.isDirectionalLight){const K=t.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const V=b.shadow,D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=b.shadow.matrix,_++}n.directional[p]=K,p++}else if(b.isSpotLight){const K=t.get(b);K.position.setFromMatrixPosition(b.matrixWorld),K.color.copy(O).multiplyScalar(F),K.distance=Y,K.coneCos=Math.cos(b.angle),K.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),K.decay=b.decay,n.spot[g]=K;const V=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,V.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[g]=V.matrix,b.castShadow){const D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=q,y++}g++}else if(b.isRectAreaLight){const K=t.get(b);K.color.copy(O).multiplyScalar(F),K.halfWidth.set(b.width*.5,0,0),K.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=K,m++}else if(b.isPointLight){const K=t.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),K.distance=b.distance,K.decay=b.decay,b.castShadow){const V=b.shadow,D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,n.pointShadow[v]=D,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=b.shadow.matrix,x++}n.point[v]=K,v++}else if(b.isHemisphereLight){const K=t.get(b);K.skyColor.copy(b.color).multiplyScalar(F),K.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==_||N.numPointShadows!==x||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,N.directionalLength=p,N.pointLength=v,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=_,N.numPointShadows=x,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=I,n.version=op++)}function c(d,h){let l=0,u=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,_=d.length;f<_;f++){const x=d[f];if(x.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),l++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function yo(i){const t=new cp(i),e=[],n=[];function s(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function hp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new yo(i),t.set(s,[o])):r>=a.length?(o=new yo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class up extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dp extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
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
}`;function mp(i,t,e){let n=new ma;const s=new re,r=new re,a=new Le,o=new up({depthPacking:lc}),c=new dp,d={},h=e.maxTextureSize,l={[Bn]:Ge,[Ge]:Bn,[yn]:yn},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new fn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let f=this.type;this.render=function(L,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Un),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=f!==xn&&this.type===xn,Y=f===xn&&this.type!==xn;for(let q=0,K=L.length;q<K;q++){const V=L[q],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const et=D.getFrameExtents();if(s.multiply(et),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,D.mapSize.y=r.y)),D.map===null||F===!0||Y===!0){const B=this.type!==xn?{minFilter:Je,magFilter:Je}:{};D.map!==null&&D.map.dispose(),D.map=new Qn(s.x,s.y,B),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const j=D.getViewportCount();for(let B=0;B<j;B++){const Z=D.getViewport(B);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a),D.updateMatrices(V,B),n=D.getFrustum(),y(I,N,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===xn&&_(D,N),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,b)};function _(L,I){const N=t.update(g);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qn(s.x,s.y)),u.uniforms.shadow_pass.value=L.map.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(I,null,N,u,g,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(I,null,N,p,g,null)}function x(L,I,N,w){let M=null;const b=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)M=b;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=M.uuid,F=I.uuid;let Y=d[O];Y===void 0&&(Y={},d[O]=Y);let q=Y[F];q===void 0&&(q=M.clone(),Y[F]=q,I.addEventListener("dispose",R)),M=q}if(M.visible=I.visible,M.wireframe=I.wireframe,w===xn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:l[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function y(L,I,N,w,M){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===xn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const F=t.update(L),Y=L.material;if(Array.isArray(Y)){const q=F.groups;for(let K=0,V=q.length;K<V;K++){const D=q[K],et=Y[D.materialIndex];if(et&&et.visible){const j=x(L,et,w,M);L.onBeforeShadow(i,L,I,N,F,j,D),i.renderBufferDirect(N,null,F,j,L,D),L.onAfterShadow(i,L,I,N,F,j,D)}}}else if(Y.visible){const q=x(L,Y,w,M);L.onBeforeShadow(i,L,I,N,F,q,null),i.renderBufferDirect(N,null,F,q,L,null),L.onAfterShadow(i,L,I,N,F,q,null)}}const O=L.children;for(let F=0,Y=O.length;F<Y;F++)y(O[F],I,N,w,M)}function R(L){L.target.removeEventListener("dispose",R);for(const N in d){const w=d[N],M=L.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function vp(i){function t(){let S=!1;const tt=new Le;let rt=null;const ct=new Le(0,0,0,0);return{setMask:function(_t){rt!==_t&&!S&&(i.colorMask(_t,_t,_t,_t),rt=_t)},setLocked:function(_t){S=_t},setClear:function(_t,Xt,te,me,xe){xe===!0&&(_t*=me,Xt*=me,te*=me),tt.set(_t,Xt,te,me),ct.equals(tt)===!1&&(i.clearColor(_t,Xt,te,me),ct.copy(tt))},reset:function(){S=!1,rt=null,ct.set(-1,0,0,0)}}}function e(){let S=!1,tt=null,rt=null,ct=null;return{setTest:function(_t){_t?G(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!S&&(i.depthMask(_t),tt=_t)},setFunc:function(_t){if(rt!==_t){switch(_t){case Wl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case ql:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=_t}},setLocked:function(_t){S=_t},setClear:function(_t){ct!==_t&&(i.clearDepth(_t),ct=_t)},reset:function(){S=!1,tt=null,rt=null,ct=null}}}function n(){let S=!1,tt=null,rt=null,ct=null,_t=null,Xt=null,te=null,me=null,xe=null;return{setTest:function(ae){S||(ae?G(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(ae){tt!==ae&&!S&&(i.stencilMask(ae),tt=ae)},setFunc:function(ae,he,lt){(rt!==ae||ct!==he||_t!==lt)&&(i.stencilFunc(ae,he,lt),rt=ae,ct=he,_t=lt)},setOp:function(ae,he,lt){(Xt!==ae||te!==he||me!==lt)&&(i.stencilOp(ae,he,lt),Xt=ae,te=he,me=lt)},setLocked:function(ae){S=ae},setClear:function(ae){xe!==ae&&(i.clearStencil(ae),xe=ae)},reset:function(){S=!1,tt=null,rt=null,ct=null,_t=null,Xt=null,te=null,me=null,xe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let d={},h={},l=new WeakMap,u=[],p=null,v=!1,g=null,m=null,f=null,_=null,x=null,y=null,R=null,L=new fe(0,0,0),I=0,N=!1,w=null,M=null,b=null,O=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=K>=2);let D=null,et={};const j=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),Z=new Le().fromArray(j),k=new Le().fromArray(B);function T(S,tt,rt,ct){const _t=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(S,Xt),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<rt;te++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(tt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return Xt}const C={};C[i.TEXTURE_2D]=T(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=T(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=T(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=T(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),G(i.DEPTH_TEST),r.setFunc(Dr),ht(!1),ot(Al),G(i.CULL_FACE),Tt(Un);function G(S){d[S]!==!0&&(i.enable(S),d[S]=!0)}function J(S){d[S]!==!1&&(i.disable(S),d[S]=!1)}function nt(S,tt){return h[S]!==tt?(i.bindFramebuffer(S,tt),h[S]=tt,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=tt),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function X(S,tt){let rt=u,ct=!1;if(S){rt=l.get(tt),rt===void 0&&(rt=[],l.set(tt,rt));const _t=S.textures;if(rt.length!==_t.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,te=_t.length;Xt<te;Xt++)rt[Xt]=i.COLOR_ATTACHMENT0+Xt;rt.length=_t.length,ct=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(rt)}function at(S){return p!==S?(i.useProgram(S),p=S,!0):!1}const pt={[$n]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Cl]:i.FUNC_REVERSE_SUBTRACT};pt[Rl]=i.MIN,pt[Pl]=i.MAX;const U={[Ll]:i.ZERO,[Il]:i.ONE,[Dl]:i.SRC_COLOR,[ws]:i.SRC_ALPHA,[zl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[As]:i.ONE_MINUS_SRC_ALPHA,[Ol]:i.ONE_MINUS_DST_COLOR,[Fl]:i.ONE_MINUS_DST_ALPHA,[Vl]:i.CONSTANT_COLOR,[Hl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Gl]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(S,tt,rt,ct,_t,Xt,te,me,xe,ae){if(S===Un){v===!0&&(J(i.BLEND),v=!1);return}if(v===!1&&(G(i.BLEND),v=!0),S!==bl){if(S!==g||ae!==N){if((m!==$n||x!==$n)&&(i.blendEquation(i.FUNC_ADD),m=$n,x=$n),ae)switch(S){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}f=null,_=null,y=null,R=null,L.set(0,0,0),I=0,g=S,N=ae}return}_t=_t||tt,Xt=Xt||rt,te=te||ct,(tt!==m||_t!==x)&&(i.blendEquationSeparate(pt[tt],pt[_t]),m=tt,x=_t),(rt!==f||ct!==_||Xt!==y||te!==R)&&(i.blendFuncSeparate(U[rt],U[ct],U[Xt],U[te]),f=rt,_=ct,y=Xt,R=te),(me.equals(L)===!1||xe!==I)&&(i.blendColor(me.r,me.g,me.b,xe),L.copy(me),I=xe),g=S,N=!1}function Mt(S,tt){S.side===yn?J(i.CULL_FACE):G(i.CULL_FACE);let rt=S.side===Ge;tt&&(rt=!rt),ht(rt),S.blending===Ai&&S.transparent===!1?Tt(Un):Tt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),s.setMask(S.colorWrite);const ct=S.stencilWrite;a.setTest(ct),ct&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),At(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(S){w!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),w=S)}function ot(S){G(i.CULL_FACE),S!==M&&i.cullFace(i.BACK),M=S}function Kt(S){S!==b&&(q&&i.lineWidth(S),b=S)}function At(S,tt,rt){S?(G(i.POLYGON_OFFSET_FILL),(O!==tt||F!==rt)&&(i.polygonOffset(tt,rt),O=tt,F=rt)):J(i.POLYGON_OFFSET_FILL)}function kt(S){S?G(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function P(S){S===void 0&&(S=i.TEXTURE0+Y-1),D!==S&&(i.activeTexture(S),D=S)}function A(S,tt,rt){rt===void 0&&(D===null?rt=i.TEXTURE0+Y-1:rt=D);let ct=et[rt];ct===void 0&&(ct={type:void 0,texture:void 0},et[rt]=ct),(ct.type!==S||ct.texture!==tt)&&(D!==rt&&(i.activeTexture(rt),D=rt),i.bindTexture(S,tt||C[S]),ct.type=S,ct.texture=tt)}function Q(){const S=et[D];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Yt(S){Z.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Z.copy(S))}function zt(S){k.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),k.copy(S))}function Jt(S,tt){let rt=c.get(tt);rt===void 0&&(rt=new WeakMap,c.set(tt,rt));let ct=rt.get(S);ct===void 0&&(ct=i.getUniformBlockIndex(tt,S.name),rt.set(S,ct))}function Qt(S,tt){const ct=c.get(tt).get(S);o.get(tt)!==ct&&(i.uniformBlockBinding(tt,ct,S.__bindingPointIndex),o.set(tt,ct))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},D=null,et={},h={},l=new WeakMap,u=[],p=null,v=!1,g=null,m=null,f=null,_=null,x=null,y=null,R=null,L=new fe(0,0,0),I=0,N=!1,w=null,M=null,b=null,O=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:G,disable:J,bindFramebuffer:nt,drawBuffers:X,useProgram:at,setBlending:Tt,setMaterial:Mt,setFlipSided:ht,setCullFace:ot,setLineWidth:Kt,setPolygonOffset:At,setScissorTest:kt,activeTexture:P,bindTexture:A,unbindTexture:Q,compressedTexImage2D:dt,compressedTexImage3D:vt,texImage2D:Vt,texImage3D:ee,updateUBOMapping:Jt,uniformBlockBinding:Qt,texStorage2D:jt,texStorage3D:wt,texSubImage2D:ut,texSubImage3D:Ot,compressedTexSubImage2D:yt,compressedTexSubImage3D:Lt,scissor:Yt,viewport:zt,reset:de}}function Mo(i,t,e,n){const s=gp(n);switch(e){case Wo:return i*t;case qo:return i*t;case Yo:return i*t*2;case $o:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case Xo:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ls:case Ds:return Math.max(i,16)*Math.max(t,8)/4;case Ps:case Is:return Math.max(i,8)*Math.max(t,8)/2;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Os:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ks:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ks:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case js:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pr:case Zs:case Js:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jo:case Qs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gp(i){switch(i){case En:case Ho:return{byteLength:1,components:1};case Xi:case ko:case $i:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case Jn:case aa:case Mn:return{byteLength:4,components:1};case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _p(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new re,h=new WeakMap;let l;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,A){return p?new OffscreenCanvas(P,A):qi("canvas")}function g(P,A,Q){let dt=1;const vt=kt(P);if((vt.width>Q||vt.height>Q)&&(dt=Q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(dt*vt.width),Ot=Math.floor(dt*vt.height);l===void 0&&(l=v(ut,Ot));const yt=A?v(ut,Ot):l;return yt.width=ut,yt.height=Ot,yt.getContext("2d").drawImage(P,0,0,ut,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+Ot+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Je&&P.minFilter!==sn}function f(P){i.generateMipmap(P)}function _(P,A,Q,dt,vt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=A;if(A===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),A===i.RGBA){const Ot=vt?Nr:ve.getTransfer(dt);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=Ot===Me?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(P,A){let Q;return P?A===null||A===Jn||A===Li?Q=i.DEPTH24_STENCIL8:A===Mn?Q=i.DEPTH32F_STENCIL8:A===Xi&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jn||A===Li?Q=i.DEPTH_COMPONENT24:A===Mn?Q=i.DEPTH_COMPONENT32F:A===Xi&&(Q=i.DEPTH_COMPONENT16),Q}function y(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Je&&P.minFilter!==sn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function R(P){const A=P.target;A.removeEventListener("dispose",R),I(A),A.isVideoTexture&&h.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),w(A)}function I(P){const A=n.get(P);if(A.__webglInit===void 0)return;const Q=P.source,dt=u.get(Q);if(dt){const vt=dt[A.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&N(P),Object.keys(dt).length===0&&u.delete(Q)}n.remove(P)}function N(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const Q=P.source,dt=u.get(Q);delete dt[A.__cacheKey],a.memory.textures--}function w(P){const A=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let vt=0;vt<A.__webglFramebuffer[dt].length;vt++)i.deleteFramebuffer(A.__webglFramebuffer[dt][vt]);else i.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)i.deleteFramebuffer(A.__webglFramebuffer[dt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=P.textures;for(let dt=0,vt=Q.length;dt<vt;dt++){const ut=n.get(Q[dt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(Q[dt])}n.remove(P)}let M=0;function b(){M=0}function O(){const P=M;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),M+=1,P}function F(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Y(P,A){const Q=n.get(P);if(P.isVideoTexture&&Kt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const dt=P.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(Q,P,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function q(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){k(Q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function K(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){k(Q,P,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function V(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){T(Q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const D={[Cs]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Rs]:i.MIRRORED_REPEAT},et={[Je]:i.NEAREST,[ac]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},j={[hc]:i.NEVER,[vc]:i.ALWAYS,[uc]:i.LESS,[Jo]:i.LEQUAL,[dc]:i.EQUAL,[mc]:i.GEQUAL,[fc]:i.GREATER,[pc]:i.NOTEQUAL};function B(P,A){if(A.type===Mn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===sn||A.magFilter===Yr||A.magFilter===tr||A.magFilter===Zn||A.minFilter===sn||A.minFilter===Yr||A.minFilter===tr||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,D[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,D[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,D[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Je||A.minFilter!==tr&&A.minFilter!==Zn||A.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Z(P,A){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",R));const dt=A.source;let vt=u.get(dt);vt===void 0&&(vt={},u.set(dt,vt));const ut=F(A);if(ut!==P.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),vt[ut].usedTimes++;const Ot=vt[P.__cacheKey];Ot!==void 0&&(vt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&N(A)),P.__cacheKey=ut,P.__webglTexture=vt[ut].texture}return Q}function k(P,A,Q){let dt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=i.TEXTURE_3D);const vt=Z(P,A),ut=A.source;e.bindTexture(dt,P.__webglTexture,i.TEXTURE0+Q);const Ot=n.get(ut);if(ut.version!==Ot.__version||vt===!0){e.activeTexture(i.TEXTURE0+Q);const yt=ve.getPrimaries(ve.workingColorSpace),Lt=A.colorSpace===Dn?null:ve.getPrimaries(A.colorSpace),jt=A.colorSpace===Dn||yt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let wt=g(A.image,!1,s.maxTextureSize);wt=At(A,wt);const Vt=r.convert(A.format,A.colorSpace),ee=r.convert(A.type);let Yt=_(A.internalFormat,Vt,ee,A.colorSpace,A.isVideoTexture);B(dt,A);let zt;const Jt=A.mipmaps,Qt=A.isVideoTexture!==!0,de=Ot.__version===void 0||vt===!0,S=ut.dataReady,tt=y(A,wt);if(A.isDepthTexture)Yt=x(A.format===Ii,A.type),de&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Yt,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,wt.width,wt.height,0,Vt,ee,null));else if(A.isDataTexture)if(Jt.length>0){Qt&&de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,Jt[0].width,Jt[0].height);for(let rt=0,ct=Jt.length;rt<ct;rt++)zt=Jt[rt],Qt?S&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Vt,ee,zt.data):e.texImage2D(i.TEXTURE_2D,rt,Yt,zt.width,zt.height,0,Vt,ee,zt.data);A.generateMipmaps=!1}else Qt?(de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,wt.width,wt.height),S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,Vt,ee,wt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,wt.width,wt.height,0,Vt,ee,wt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Yt,Jt[0].width,Jt[0].height,wt.depth);for(let rt=0,ct=Jt.length;rt<ct;rt++)if(zt=Jt[rt],A.format!==an)if(Vt!==null)if(Qt){if(S)if(A.layerUpdates.size>0){const _t=Mo(zt.width,zt.height,A.format,A.type);for(const Xt of A.layerUpdates){const te=zt.data.subarray(Xt*_t/zt.data.BYTES_PER_ELEMENT,(Xt+1)*_t/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Xt,zt.width,zt.height,1,Vt,te,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,wt.depth,Vt,zt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Yt,zt.width,zt.height,wt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?S&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,wt.depth,Vt,ee,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Yt,zt.width,zt.height,wt.depth,0,Vt,ee,zt.data)}else{Qt&&de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,Jt[0].width,Jt[0].height);for(let rt=0,ct=Jt.length;rt<ct;rt++)zt=Jt[rt],A.format!==an?Vt!==null?Qt?S&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Vt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?S&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Vt,ee,zt.data):e.texImage2D(i.TEXTURE_2D,rt,Yt,zt.width,zt.height,0,Vt,ee,zt.data)}else if(A.isDataArrayTexture)if(Qt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Yt,wt.width,wt.height,wt.depth),S)if(A.layerUpdates.size>0){const rt=Mo(wt.width,wt.height,A.format,A.type);for(const ct of A.layerUpdates){const _t=wt.data.subarray(ct*rt/wt.data.BYTES_PER_ELEMENT,(ct+1)*rt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,wt.width,wt.height,1,Vt,ee,_t)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(A.isData3DTexture)Qt?(de&&e.texStorage3D(i.TEXTURE_3D,tt,Yt,wt.width,wt.height,wt.depth),S&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(A.isFramebufferTexture){if(de)if(Qt)e.texStorage2D(i.TEXTURE_2D,tt,Yt,wt.width,wt.height);else{let rt=wt.width,ct=wt.height;for(let _t=0;_t<tt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Yt,rt,ct,0,Vt,ee,null),rt>>=1,ct>>=1}}else if(Jt.length>0){if(Qt&&de){const rt=kt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,tt,Yt,rt.width,rt.height)}for(let rt=0,ct=Jt.length;rt<ct;rt++)zt=Jt[rt],Qt?S&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Vt,ee,zt):e.texImage2D(i.TEXTURE_2D,rt,Yt,Vt,ee,zt);A.generateMipmaps=!1}else if(Qt){if(de){const rt=kt(wt);e.texStorage2D(i.TEXTURE_2D,tt,Yt,rt.width,rt.height)}S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,ee,wt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Vt,ee,wt);m(A)&&f(dt),Ot.__version=ut.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function T(P,A,Q){if(A.image.length!==6)return;const dt=Z(P,A),vt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const ut=n.get(vt);if(vt.version!==ut.__version||dt===!0){e.activeTexture(i.TEXTURE0+Q);const Ot=ve.getPrimaries(ve.workingColorSpace),yt=A.colorSpace===Dn?null:ve.getPrimaries(A.colorSpace),Lt=A.colorSpace===Dn||Ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,wt=A.image[0]&&A.image[0].isDataTexture,Vt=[];for(let ct=0;ct<6;ct++)!jt&&!wt?Vt[ct]=g(A.image[ct],!0,s.maxCubemapSize):Vt[ct]=wt?A.image[ct].image:A.image[ct],Vt[ct]=At(A,Vt[ct]);const ee=Vt[0],Yt=r.convert(A.format,A.colorSpace),zt=r.convert(A.type),Jt=_(A.internalFormat,Yt,zt,A.colorSpace),Qt=A.isVideoTexture!==!0,de=ut.__version===void 0||dt===!0,S=vt.dataReady;let tt=y(A,ee);B(i.TEXTURE_CUBE_MAP,A);let rt;if(jt){Qt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Jt,ee.width,ee.height);for(let ct=0;ct<6;ct++){rt=Vt[ct].mipmaps;for(let _t=0;_t<rt.length;_t++){const Xt=rt[_t];A.format!==an?Yt!==null?Qt?S&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,0,0,Xt.width,Xt.height,Yt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,Jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,0,0,Xt.width,Xt.height,Yt,zt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,Jt,Xt.width,Xt.height,0,Yt,zt,Xt.data)}}}else{if(rt=A.mipmaps,Qt&&de){rt.length>0&&tt++;const ct=kt(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(wt){Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Vt[ct].width,Vt[ct].height,Yt,zt,Vt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Vt[ct].width,Vt[ct].height,0,Yt,zt,Vt[ct].data);for(let _t=0;_t<rt.length;_t++){const te=rt[_t].image[ct].image;Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,0,0,te.width,te.height,Yt,zt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,Jt,te.width,te.height,0,Yt,zt,te.data)}}else{Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,zt,Vt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Yt,zt,Vt[ct]);for(let _t=0;_t<rt.length;_t++){const Xt=rt[_t];Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,0,0,Yt,zt,Xt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,Jt,Yt,zt,Xt.image[ct])}}}m(A)&&f(i.TEXTURE_CUBE_MAP),ut.__version=vt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function C(P,A,Q,dt,vt,ut){const Ot=r.convert(Q.format,Q.colorSpace),yt=r.convert(Q.type),Lt=_(Q.internalFormat,Ot,yt,Q.colorSpace);if(!n.get(A).__hasExternalTextures){const wt=Math.max(1,A.width>>ut),Vt=Math.max(1,A.height>>ut);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,ut,Lt,wt,Vt,A.depth,0,Ot,yt,null):e.texImage2D(vt,ut,Lt,wt,Vt,0,Ot,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,vt,n.get(Q).__webglTexture,0,ht(A)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,vt,n.get(Q).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(P,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const dt=A.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ut=x(A.stencilBuffer,vt),Ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ht(A);ot(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ut,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,P)}else{const dt=A.textures;for(let vt=0;vt<dt.length;vt++){const ut=dt[vt],Ot=r.convert(ut.format,ut.colorSpace),yt=r.convert(ut.type),Lt=_(ut.internalFormat,Ot,yt,ut.colorSpace),jt=ht(A);Q&&ot(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Lt,A.width,A.height):ot(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const dt=n.get(A.depthTexture).__webglTexture,vt=ht(A);if(A.depthTexture.format===bi)ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(A.depthTexture.format===Ii)ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function nt(P){const A=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");J(A.__webglFramebuffer,P)}else if(Q){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]=i.createRenderbuffer(),G(A.__webglDepthbuffer[dt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),G(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(P,A,Q){const dt=n.get(P);A!==void 0&&C(dt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&nt(P)}function at(P){const A=P.texture,Q=n.get(P),dt=n.get(A);P.addEventListener("dispose",L);const vt=P.textures,ut=P.isWebGLCubeRenderTarget===!0,Ot=vt.length>1;if(Ot||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=A.version,a.memory.textures++),ut){Q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[yt]=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)Q.__webglFramebuffer[yt][Lt]=i.createFramebuffer()}else Q.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let yt=0;yt<A.mipmaps.length;yt++)Q.__webglFramebuffer[yt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let yt=0,Lt=vt.length;yt<Lt;yt++){const jt=n.get(vt[yt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ot(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let yt=0;yt<vt.length;yt++){const Lt=vt[yt];Q.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt]);const jt=r.convert(Lt.format,Lt.colorSpace),wt=r.convert(Lt.type),Vt=_(Lt.internalFormat,jt,wt,Lt.colorSpace,P.isXRRenderTarget===!0),ee=ht(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),B(i.TEXTURE_CUBE_MAP,A);for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)C(Q.__webglFramebuffer[yt][Lt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt);else C(Q.__webglFramebuffer[yt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let yt=0,Lt=vt.length;yt<Lt;yt++){const jt=vt[yt],wt=n.get(jt);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),B(i.TEXTURE_2D,jt),C(Q.__webglFramebuffer,P,jt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,dt.__webglTexture),B(yt,A),A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)C(Q.__webglFramebuffer[Lt],P,A,i.COLOR_ATTACHMENT0,yt,Lt);else C(Q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,yt,0);m(A)&&f(yt),e.unbindTexture()}P.depthBuffer&&nt(P)}function pt(P){const A=P.textures;for(let Q=0,dt=A.length;Q<dt;Q++){const vt=A[Q];if(m(vt)){const ut=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ot=n.get(vt).__webglTexture;e.bindTexture(ut,Ot),f(ut),e.unbindTexture()}}}const U=[],Tt=[];function Mt(P){if(P.samples>0){if(ot(P)===!1){const A=P.textures,Q=P.width,dt=P.height;let vt=i.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(P),yt=A.length>1;if(yt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const jt=n.get(A[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,vt,i.NEAREST),c===!0&&(U.length=0,Tt.length=0,U.push(i.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(U.push(ut),Tt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const jt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ht(P){return Math.min(s.maxSamples,P.samples)}function ot(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Kt(P){const A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function At(P,A){const Q=P.colorSpace,dt=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==zn&&Q!==Dn&&(ve.getTransfer(Q)===Me?(dt!==an||vt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=X,this.setupRenderTarget=at,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=C,this.useMultisampledRTT=ot}function xp(i,t){function e(n,s=Dn){let r;const a=ve.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ho)return i.BYTE;if(n===ko)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===Xo)return i.RGB;if(n===an)return i.RGBA;if(n===qo)return i.LUMINANCE;if(n===Yo)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===Ko)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Cr||n===Rr)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ps||n===Ls||n===Is||n===Ds)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ls)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Is)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ds)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ns||n===Us||n===Fs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ns||n===Us)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bs||n===Os||n===zs||n===Vs||n===Hs||n===ks||n===Gs||n===Ws||n===Xs||n===qs||n===Ys||n===$s||n===Ks||n===js)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Os)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ks)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ws)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qs)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ys)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$s)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ks)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===js)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===Zs||n===Js)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pr)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zs)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Js)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Qs||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yp extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wi extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),p=.02,v=.005;d.inputState.pinching&&u>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ep=`
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

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:Sp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ap extends ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,p=null,v=null;const g=new wp,m=e.getContextAttributes();let f=null,_=null;const x=[],y=[],R=new re;let L=null;const I=new Ze;I.layers.enable(1),I.viewport=new Le;const N=new Ze;N.layers.enable(2),N.viewport=new Le;const w=[I,N],M=new yp;M.layers.enable(1),M.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=x[T];return C===void 0&&(C=new xs,x[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=x[T];return C===void 0&&(C=new xs,x[T]=C),C.getGripSpace()},this.getHand=function(T){let C=x[T];return C===void 0&&(C=new xs,x[T]=C),C.getHandSpace()};function F(T){const C=y.indexOf(T.inputSource);if(C===-1)return;const G=x[C];G!==void 0&&(G.update(T.inputSource,T.frame,d||a),G.dispatchEvent({type:T.type,data:T.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",q);for(let T=0;T<x.length;T++){const C=y[T];C!==null&&(y[T]=null,x[T].disconnect(C))}b=null,O=null,g.reset(),t.setRenderTarget(f),p=null,u=null,l=null,s=null,_=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(T){d=T},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const C={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,C),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Qn(p.framebufferWidth,p.framebufferHeight,{format:an,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,G=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=m.stencil?Ii:bi,G=m.stencil?Li:Jn);const nt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};l=new XRWebGLBinding(s,e),u=l.createProjectionLayer(nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Qn(u.textureWidth,u.textureHeight,{format:an,type:En,depthTexture:new dl(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await s.requestReferenceSpace(o),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(T){for(let C=0;C<T.removed.length;C++){const G=T.removed[C],J=y.indexOf(G);J>=0&&(y[J]=null,x[J].disconnect(G))}for(let C=0;C<T.added.length;C++){const G=T.added[C];let J=y.indexOf(G);if(J===-1){for(let X=0;X<x.length;X++)if(X>=y.length){y.push(G),J=X;break}else if(y[X]===null){y[X]=G,J=X;break}if(J===-1)break}const nt=x[J];nt&&nt.connect(G)}}const K=new it,V=new it;function D(T,C,G){K.setFromMatrixPosition(C.matrixWorld),V.setFromMatrixPosition(G.matrixWorld);const J=K.distanceTo(V),nt=C.projectionMatrix.elements,X=G.projectionMatrix.elements,at=nt[14]/(nt[10]-1),pt=nt[14]/(nt[10]+1),U=(nt[9]+1)/nt[5],Tt=(nt[9]-1)/nt[5],Mt=(nt[8]-1)/nt[0],ht=(X[8]+1)/X[0],ot=at*Mt,Kt=at*ht,At=J/(-Mt+ht),kt=At*-Mt;C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(kt),T.translateZ(At),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const P=at+At,A=pt+At,Q=ot-kt,dt=Kt+(J-kt),vt=U*pt/A*P,ut=Tt*pt/A*P;T.projectionMatrix.makePerspective(Q,dt,vt,ut,P,A),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function et(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;g.texture!==null&&(T.near=g.depthNear,T.far=g.depthFar),M.near=N.near=I.near=T.near,M.far=N.far=I.far=T.far,(b!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,O=M.far,I.near=b,I.far=O,N.near=b,N.far=O,I.updateProjectionMatrix(),N.updateProjectionMatrix(),T.updateProjectionMatrix());const C=T.parent,G=M.cameras;et(M,C);for(let J=0;J<G.length;J++)et(G[J],C);G.length===2?D(M,I,N):M.projectionMatrix.copy(I.projectionMatrix),j(T,M,C)};function j(T,C,G){G===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(G.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=na*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(T){c=T,u!==null&&(u.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let B=null;function Z(T,C){if(h=C.getViewerPose(d||a),v=C,h!==null){const G=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let J=!1;G.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let X=0;X<G.length;X++){const at=G[X];let pt=null;if(p!==null)pt=p.getViewport(at);else{const Tt=l.getViewSubImage(u,at);pt=Tt.viewport,X===0&&(t.setRenderTargetTextures(_,Tt.colorTexture,u.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(_))}let U=w[X];U===void 0&&(U=new Ze,U.layers.enable(X),U.viewport=new Le,w[X]=U),U.matrix.fromArray(at.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(at.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(pt.x,pt.y,pt.width,pt.height),X===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(U)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const X=l.getDepthInformation(G[0]);X&&X.isValid&&X.texture&&g.init(t,X,s.renderState)}}for(let G=0;G<x.length;G++){const J=y[G],nt=x[G];J!==null&&nt!==void 0&&nt.update(J,C,d||a)}B&&B(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const k=new hl;k.setAnimationLoop(Z),this.setAnimationLoop=function(T){B=T},this.dispose=function(){}}}const qn=new dn,bp=new be;function Tp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ll(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,_,x):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,qn.copy(y),qn.x*=-1,qn.y*=-1,qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(qn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function d(_,x){let y=s[_.id];y===void 0&&(v(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const L=t.render.frame;r[_.id]!==L&&(u(_),r[_.id]=L)}function h(_){const x=l();_.__bindingPointIndex=x;const y=i.createBuffer(),R=_.__size,L=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function l(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=s[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,I=y.length;L<I;L++){const N=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,M=N.length;w<M;w++){const b=N[w];if(p(b,L,w,R)===!0){const O=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let q=0;q<F.length;q++){const K=F[q],V=g(K);typeof K=="number"||typeof K=="boolean"?(b.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,b.__data)):K.isMatrix3?(b.__data[0]=K.elements[0],b.__data[1]=K.elements[1],b.__data[2]=K.elements[2],b.__data[3]=0,b.__data[4]=K.elements[3],b.__data[5]=K.elements[4],b.__data[6]=K.elements[5],b.__data[7]=0,b.__data[8]=K.elements[6],b.__data[9]=K.elements[7],b.__data[10]=K.elements[8],b.__data[11]=0):(K.toArray(b.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y,R){const L=_.value,I=x+"_"+y;if(R[I]===void 0)return typeof L=="number"||typeof L=="boolean"?R[I]=L:R[I]=L.clone(),!0;{const N=R[I];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return R[I]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function v(_){const x=_.uniforms;let y=0;const R=16;for(let I=0,N=x.length;I<N;I++){const w=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,b=w.length;M<b;M++){const O=w[M],F=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,q=F.length;Y<q;Y++){const K=F[Y],V=g(K),D=y%R;D!==0&&R-D<V.boundary&&(y+=R-D),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=V.storage}}}const L=y%R;return L>0&&(y+=R-L),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:d,dispose:f}}class Rp{constructor(t={}){const{canvas:e=xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let y=!1,R=0,L=0,I=null,N=-1,w=null;const M=new Le,b=new Le;let O=null;const F=new fe(0);let Y=0,q=e.width,K=e.height,V=1,D=null,et=null;const j=new Le(0,0,q,K),B=new Le(0,0,q,K);let Z=!1;const k=new ma;let T=!1,C=!1;const G=new be,J=new it,nt=new Le,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function pt(){return I===null?V:1}let U=n;function Tt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){const H="webgl2";if(U=Tt(H,E),U===null)throw Tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,ht,ot,Kt,At,kt,P,A,Q,dt,vt,ut,Ot,yt,Lt,jt,wt,Vt,ee,Yt,zt,Jt,Qt,de;function S(){Mt=new Ud(U),Mt.init(),Jt=new xp(U,Mt),ht=new Rd(U,Mt,t,Jt),ot=new vp(U),Kt=new Od(U),At=new np,kt=new _p(U,Mt,ot,At,ht,Jt,Kt),P=new Ld(x),A=new Nd(x),Q=new Xc(U),Qt=new Td(U,Q),dt=new Fd(U,Q,Kt,Qt),vt=new Vd(U,dt,Q,Kt),ee=new zd(U,ht,kt),jt=new Pd(At),ut=new ep(x,P,A,Mt,ht,Qt,jt),Ot=new Tp(x,At),yt=new rp,Lt=new hp(Mt),Vt=new bd(x,P,A,ot,vt,u,c),wt=new mp(x,vt,ht),de=new Cp(U,Kt,ht,ot),Yt=new Cd(U,Mt,Kt),zt=new Bd(U,Mt,Kt),Kt.programs=ut.programs,x.capabilities=ht,x.extensions=Mt,x.properties=At,x.renderLists=yt,x.shadowMap=wt,x.state=ot,x.info=Kt}S();const tt=new Ap(x,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,K,!1))},this.getSize=function(E){return E.set(q,K)},this.setSize=function(E,H,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,K=H,e.width=Math.floor(E*V),e.height=Math.floor(H*V),$===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(q*V,K*V).floor()},this.setDrawingBufferSize=function(E,H,$){q=E,K=H,V=$,e.width=Math.floor(E*$),e.height=Math.floor(H*$),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,H,$,z){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,H,$,z),ot.viewport(M.copy(j).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,H,$,z){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,H,$,z),ot.scissor(b.copy(B).multiplyScalar(V).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ot.setScissorTest(Z=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,H=!0,$=!0){let z=0;if(E){let W=!1;if(I!==null){const mt=I.texture.format;W=mt===ua||mt===ha||mt===ca}if(W){const mt=I.texture.type,Ct=mt===En||mt===Jn||mt===Xi||mt===Li||mt===oa||mt===la,St=Vt.getClearColor(),bt=Vt.getClearAlpha(),Et=St.r,$t=St.g,qt=St.b;Ct?(p[0]=Et,p[1]=$t,p[2]=qt,p[3]=bt,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=Et,v[1]=$t,v[2]=qt,v[3]=bt,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}H&&(z|=U.DEPTH_BUFFER_BIT),$&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),Lt.dispose(),At.dispose(),P.dispose(),A.dispose(),vt.dispose(),Qt.dispose(),de.dispose(),ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",lt),tt.removeEventListener("sessionend",ft),gt.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Kt.autoReset,H=wt.enabled,$=wt.autoUpdate,z=wt.needsUpdate,W=wt.type;S(),Kt.autoReset=E,wt.enabled=H,wt.autoUpdate=$,wt.needsUpdate=z,wt.type=W}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const H=E.target;H.removeEventListener("dispose",Xt),te(H)}function te(E){me(E),At.remove(E)}function me(E){const H=At.get(E).programs;H!==void 0&&(H.forEach(function($){ut.releaseProgram($)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,$,z,W,mt){H===null&&(H=X);const Ct=W.isMesh&&W.matrixWorld.determinant()<0,St=Gt(E,H,$,z,W);ot.setMaterial(z,Ct);let bt=$.index,Et=1;if(z.wireframe===!0){if(bt=dt.getWireframeAttribute($),bt===void 0)return;Et=2}const $t=$.drawRange,qt=$.attributes.position;let ne=$t.start*Et,pe=($t.start+$t.count)*Et;mt!==null&&(ne=Math.max(ne,mt.start*Et),pe=Math.min(pe,(mt.start+mt.count)*Et)),bt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,bt.count)):qt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,qt.count));const ue=pe-ne;if(ue<0||ue===1/0)return;Qt.setup(W,z,St,$,bt);let se,oe=Yt;if(bt!==null&&(se=Q.get(bt),oe=zt,oe.setIndex(se)),W.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*pt()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(W.isLine){let Bt=z.linewidth;Bt===void 0&&(Bt=1),ot.setLineWidth(Bt*pt()),W.isLineSegments?oe.setMode(U.LINES):W.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else W.isPoints?oe.setMode(U.POINTS):W.isSprite&&oe.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)oe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Bt=W._multiDrawStarts,_e=W._multiDrawCounts,ie=W._multiDrawCount,ge=bt?Q.get(bt).bytesPerElement:1,Se=At.get(z).currentProgram.getUniforms();for(let ye=0;ye<ie;ye++)Se.setValue(U,"_gl_DrawID",ye),oe.render(Bt[ye]/ge,_e[ye])}else if(W.isInstancedMesh)oe.renderInstances(ne,ue,W.count);else if($.isInstancedBufferGeometry){const Bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_e=Math.min($.instanceCount,Bt);oe.renderInstances(ne,ue,_e)}else oe.render(ne,ue)};function xe(E,H,$){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,st(E,H,$),E.side=Bn,E.needsUpdate=!0,st(E,H,$),E.side=yn):st(E,H,$)}this.compile=function(E,H,$=null){$===null&&($=E),m=Lt.get($),m.init(H),_.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const z=new Set;return E.traverse(function(W){const mt=W.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){const St=mt[Ct];xe(St,$,W),z.add(St)}else xe(mt,$,W),z.add(mt)}),_.pop(),m=null,z},this.compileAsync=function(E,H,$=null){const z=this.compile(E,H,$);return new Promise(W=>{function mt(){if(z.forEach(function(Ct){At.get(Ct).currentProgram.isReady()&&z.delete(Ct)}),z.size===0){W(E);return}setTimeout(mt,10)}Mt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ae=null;function he(E){ae&&ae(E)}function lt(){gt.stop()}function ft(){gt.start()}const gt=new hl;gt.setAnimationLoop(he),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){ae=E,tt.setAnimationLoop(E),E===null?gt.stop():gt.start()},tt.addEventListener("sessionstart",lt),tt.addEventListener("sessionend",ft),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,I),m=Lt.get(E,_.length),m.init(H),_.push(m),G.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(G),C=this.localClippingEnabled,T=jt.init(this.clippingPlanes,C),g=yt.get(E,f.length),g.init(),f.push(g),tt.enabled===!0&&tt.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&xt(mt,H,-1/0,x.sortObjects)}xt(E,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,et),at=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,at&&Vt.addToRenderList(g,E),this.info.render.frame++,T===!0&&jt.beginShadows();const $=m.state.shadowsArray;wt.render($,E,H),T===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,W=g.transmissive;if(m.setupLights(),H.isArrayCamera){const mt=H.cameras;if(W.length>0)for(let Ct=0,St=mt.length;Ct<St;Ct++){const bt=mt[Ct];Nt(z,W,E,bt)}at&&Vt.render(E);for(let Ct=0,St=mt.length;Ct<St;Ct++){const bt=mt[Ct];Zt(g,E,bt,bt.viewport)}}else W.length>0&&Nt(z,W,E,H),at&&Vt.render(E),Zt(g,E,H);I!==null&&(kt.updateMultisampleRenderTarget(I),kt.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,H),Qt.resetDefaultState(),N=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],T===!0&&jt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function xt(E,H,$,z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){z&&nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Ct=vt.update(E),St=E.material;St.visible&&g.push(E,Ct,St,$,nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Ct=vt.update(E),St=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),nt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),nt.copy(Ct.boundingSphere.center)),nt.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(St)){const bt=Ct.groups;for(let Et=0,$t=bt.length;Et<$t;Et++){const qt=bt[Et],ne=St[qt.materialIndex];ne&&ne.visible&&g.push(E,Ct,ne,$,nt.z,qt)}}else St.visible&&g.push(E,Ct,St,$,nt.z,null)}}const mt=E.children;for(let Ct=0,St=mt.length;Ct<St;Ct++)xt(mt[Ct],H,$,z)}function Zt(E,H,$,z){const W=E.opaque,mt=E.transmissive,Ct=E.transparent;m.setupLightsView($),T===!0&&jt.setGlobalState(x.clippingPlanes,$),z&&ot.viewport(M.copy(z)),W.length>0&&Rt(W,H,$),mt.length>0&&Rt(mt,H,$),Ct.length>0&&Rt(Ct,H,$),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Nt(E,H,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Qn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?$i:En,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const mt=m.state.transmissionRenderTarget[z.id],Ct=z.viewport||M;mt.setSize(Ct.z,Ct.w);const St=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(F),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),at?Vt.render($):x.clear();const bt=x.toneMapping;x.toneMapping=Fn;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),T===!0&&jt.setGlobalState(x.clippingPlanes,z),Rt(E,$,z),kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let qt=0,ne=H.length;qt<ne;qt++){const pe=H[qt],ue=pe.object,se=pe.geometry,oe=pe.material,Bt=pe.group;if(oe.side===yn&&ue.layers.test(z.layers)){const _e=oe.side;oe.side=Ge,oe.needsUpdate=!0,Ut(ue,$,z,se,oe,Bt),oe.side=_e,oe.needsUpdate=!0,$t=!0}}$t===!0&&(kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt))}x.setRenderTarget(St),x.setClearColor(F,Y),Et!==void 0&&(z.viewport=Et),x.toneMapping=bt}function Rt(E,H,$){const z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,mt=E.length;W<mt;W++){const Ct=E[W],St=Ct.object,bt=Ct.geometry,Et=z===null?Ct.material:z,$t=Ct.group;St.layers.test($.layers)&&Ut(St,H,$,bt,Et,$t)}}function Ut(E,H,$,z,W,mt){E.onBeforeRender(x,H,$,z,W,mt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.transparent===!0&&W.side===yn&&W.forceSinglePass===!1?(W.side=Ge,W.needsUpdate=!0,x.renderBufferDirect($,H,z,W,E,mt),W.side=Bn,W.needsUpdate=!0,x.renderBufferDirect($,H,z,W,E,mt),W.side=yn):x.renderBufferDirect($,H,z,W,E,mt),E.onAfterRender(x,H,$,z,W,mt)}function st(E,H,$){H.isScene!==!0&&(H=X);const z=At.get(E),W=m.state.lights,mt=m.state.shadowsArray,Ct=W.state.version,St=ut.getParameters(E,W.state,mt,H,$),bt=ut.getProgramCacheKey(St);let Et=z.programs;z.environment=E.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(E.isMeshStandardMaterial?A:P).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Xt),Et=new Map,z.programs=Et);let $t=Et.get(bt);if($t!==void 0){if(z.currentProgram===$t&&z.lightsStateVersion===Ct)return Ft(E,St),$t}else St.uniforms=ut.getUniforms(E),E.onBeforeCompile(St,x),$t=ut.acquireProgram(St,bt),Et.set(bt,$t),z.uniforms=St.uniforms;const qt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qt.clippingPlanes=jt.uniform),Ft(E,St),z.needsLights=Pt(E),z.lightsStateVersion=Ct,z.needsLights&&(qt.ambientLightColor.value=W.state.ambient,qt.lightProbe.value=W.state.probe,qt.directionalLights.value=W.state.directional,qt.directionalLightShadows.value=W.state.directionalShadow,qt.spotLights.value=W.state.spot,qt.spotLightShadows.value=W.state.spotShadow,qt.rectAreaLights.value=W.state.rectArea,qt.ltc_1.value=W.state.rectAreaLTC1,qt.ltc_2.value=W.state.rectAreaLTC2,qt.pointLights.value=W.state.point,qt.pointLightShadows.value=W.state.pointShadow,qt.hemisphereLights.value=W.state.hemi,qt.directionalShadowMap.value=W.state.directionalShadowMap,qt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qt.spotShadowMap.value=W.state.spotShadowMap,qt.spotLightMatrix.value=W.state.spotLightMatrix,qt.spotLightMap.value=W.state.spotLightMap,qt.pointShadowMap.value=W.state.pointShadowMap,qt.pointShadowMatrix.value=W.state.pointShadowMatrix),z.currentProgram=$t,z.uniformsList=null,$t}function It(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Ir.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Ft(E,H){const $=At.get(E);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Gt(E,H,$,z,W){H.isScene!==!0&&(H=X),kt.resetTextureUnits();const mt=H.fog,Ct=z.isMeshStandardMaterial?H.environment:null,St=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zn,bt=(z.isMeshStandardMaterial?A:P).get(z.envMap||Ct),Et=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),qt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color;let ue=Fn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=x.toneMapping);const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=se!==void 0?se.length:0,Bt=At.get(z),_e=m.state.lights;if(T===!0&&(C===!0||E!==w)){const Te=E===w&&z.id===N;jt.setState(z,E,Te)}let ie=!1;z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==_e.state.version||Bt.outputColorSpace!==St||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==bt||z.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==jt.numPlanes||Bt.numIntersection!==jt.numIntersection)||Bt.vertexAlphas!==Et||Bt.vertexTangents!==$t||Bt.morphTargets!==qt||Bt.morphNormals!==ne||Bt.morphColors!==pe||Bt.toneMapping!==ue||Bt.morphTargetsCount!==oe)&&(ie=!0):(ie=!0,Bt.__version=z.version);let ge=Bt.currentProgram;ie===!0&&(ge=st(z,H,W));let Se=!1,ye=!1,qe=!1;const Wt=ge.getUniforms(),we=Bt.uniforms;if(ot.useProgram(ge.program)&&(Se=!0,ye=!0,qe=!0),z.id!==N&&(N=z.id,ye=!0),Se||w!==E){Wt.setValue(U,"projectionMatrix",E.projectionMatrix),Wt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Te=Wt.map.cameraPosition;Te!==void 0&&Te.setValue(U,J.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,ye=!0,qe=!0)}if(W.isSkinnedMesh){Wt.setOptional(U,W,"bindMatrix"),Wt.setOptional(U,W,"bindMatrixInverse");const Te=W.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Wt.setValue(U,"boneTexture",Te.boneTexture,kt))}W.isBatchedMesh&&(Wt.setOptional(U,W,"batchingTexture"),Wt.setValue(U,"batchingTexture",W._matricesTexture,kt),Wt.setOptional(U,W,"batchingIdTexture"),Wt.setValue(U,"batchingIdTexture",W._indirectTexture,kt),Wt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Wt.setValue(U,"batchingColorTexture",W._colorsTexture,kt));const Ae=$.morphAttributes;if((Ae.position!==void 0||Ae.normal!==void 0||Ae.color!==void 0)&&ee.update(W,$,ge),(ye||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,Wt.setValue(U,"receiveShadow",W.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(we.envMap.value=bt,we.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&H.environment!==null&&(we.envMapIntensity.value=H.environmentIntensity),ye&&(Wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Dt(we,qe),mt&&z.fog===!0&&Ot.refreshFogUniforms(we,mt),Ot.refreshMaterialUniforms(we,z,V,K,m.state.transmissionRenderTarget[E.id]),Ir.upload(U,It(Bt),we,kt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ir.upload(U,It(Bt),we,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Wt.setValue(U,"center",W.center),Wt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Wt.setValue(U,"normalMatrix",W.normalMatrix),Wt.setValue(U,"modelMatrix",W.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Te=z.uniformsGroups;for(let Qe=0,qr=Te.length;Qe<qr;Qe++){const Qi=Te[Qe];de.update(Qi,ge),de.bind(Qi,ge)}}return ge}function Dt(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Pt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,H,$){At.get(E.texture).__webglTexture=H,At.get(E.depthTexture).__webglTexture=$;const z=At.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=$===void 0,z.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const $=At.get(E);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,$=0){I=E,R=H,L=$;let z=!0,W=null,mt=!1,Ct=!1;if(E){const bt=At.get(E);bt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):bt.__webglFramebuffer===void 0?kt.setupRenderTarget(E):bt.__hasExternalTextures&&kt.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Ct=!0);const $t=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[H])?W=$t[H][$]:W=$t[H],mt=!0):E.samples>0&&kt.useMultisampledRTT(E)===!1?W=At.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?W=$t[$]:W=$t,M.copy(E.viewport),b.copy(E.scissor),O=E.scissorTest}else M.copy(j).multiplyScalar(V).floor(),b.copy(B).multiplyScalar(V).floor(),O=Z;if(ot.bindFramebuffer(U.FRAMEBUFFER,W)&&z&&ot.drawBuffers(E,W),ot.viewport(M),ot.scissor(b),ot.setScissorTest(O),mt){const bt=At.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,$)}else if(Ct){const bt=At.get(E.texture),Et=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,$||0,Et)}N=-1},this.readRenderTargetPixels=function(E,H,$,z,W,mt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(St=St[Ct]),St){ot.bindFramebuffer(U.FRAMEBUFFER,St);try{const bt=E.texture,Et=bt.format,$t=bt.type;if(!ht.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-z&&$>=0&&$<=E.height-W&&U.readPixels(H,$,z,W,Jt.convert(Et),Jt.convert($t),mt)}finally{const bt=I!==null?At.get(I).__webglFramebuffer:null;ot.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,H,$,z,W,mt,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(St=St[Ct]),St){ot.bindFramebuffer(U.FRAMEBUFFER,St);try{const bt=E.texture,Et=bt.format,$t=bt.type;if(!ht.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-z&&$>=0&&$<=E.height-W){const qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(H,$,z,W,Jt.convert(Et),Jt.convert($t),0),U.flush();const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await yc(U,ne,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt)}finally{U.deleteBuffer(qt),U.deleteSync(ne)}return mt}}finally{const bt=I!==null?At.get(I).__webglFramebuffer:null;ot.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(E,H=null,$=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-$),W=Math.floor(E.image.width*z),mt=Math.floor(E.image.height*z),Ct=H!==null?H.x:0,St=H!==null?H.y:0;kt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ct,St,W,mt),ot.unbindTexture()},this.copyTextureToTexture=function(E,H,$=null,z=null,W=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],H=arguments[2],W=arguments[3]||0,$=null);let mt,Ct,St,bt,Et,$t;$!==null?(mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,St=$.min.x,bt=$.min.y):(mt=E.image.width,Ct=E.image.height,St=0,bt=0),z!==null?(Et=z.x,$t=z.y):(Et=0,$t=0);const qt=Jt.convert(H.format),ne=Jt.convert(H.type);kt.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const pe=U.getParameter(U.UNPACK_ROW_LENGTH),ue=U.getParameter(U.UNPACK_IMAGE_HEIGHT),se=U.getParameter(U.UNPACK_SKIP_PIXELS),oe=U.getParameter(U.UNPACK_SKIP_ROWS),Bt=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=E.isCompressedTexture?E.mipmaps[W]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Et,$t,mt,Ct,qt,ne,_e.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Et,$t,_e.width,_e.height,qt,_e.data):U.texSubImage2D(U.TEXTURE_2D,W,Et,$t,mt,Ct,qt,ne,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),U.pixelStorei(U.UNPACK_SKIP_PIXELS,se),U.pixelStorei(U.UNPACK_SKIP_ROWS,oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt),W===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,H,$=null,z=null,W=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,z=arguments[1]||null,E=arguments[2],H=arguments[3],W=arguments[4]||0);let mt,Ct,St,bt,Et,$t,qt,ne,pe;const ue=E.isCompressedTexture?E.mipmaps[W]:E.image;$!==null?(mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,St=$.max.z-$.min.z,bt=$.min.x,Et=$.min.y,$t=$.min.z):(mt=ue.width,Ct=ue.height,St=ue.depth,bt=0,Et=0,$t=0),z!==null?(qt=z.x,ne=z.y,pe=z.z):(qt=0,ne=0,pe=0);const se=Jt.convert(H.format),oe=Jt.convert(H.type);let Bt;if(H.isData3DTexture)kt.setTexture3D(H,0),Bt=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)kt.setTexture2DArray(H,0),Bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ge=U.getParameter(U.UNPACK_SKIP_PIXELS),Se=U.getParameter(U.UNPACK_SKIP_ROWS),ye=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Bt,W,qt,ne,pe,mt,Ct,St,se,oe,ue.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,W,qt,ne,pe,mt,Ct,St,se,ue.data):U.texSubImage3D(Bt,W,qt,ne,pe,mt,Ct,St,se,oe,ue),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ye),W===0&&H.generateMipmaps&&U.generateMipmap(Bt),ot.unbindTexture()},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&kt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){R=0,L=0,I=null,ot.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===da?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===Hr?"display-p3":"srgb"}}class Pp extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new it,zr=new it,So=new be,ki=new fa,Sr=new kr,ys=new it,Eo=new it;class Lp extends Ue{constructor(t=new fn,e=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(zr);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;So.copy(s).invert(),ki.copy(t.ray).applyMatrix4(So);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=d){const f=h.getX(g),_=h.getX(g+1),x=Er(this,t,ki,c,f,_);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),f=Er(this,t,ki,c,g,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=d){const f=Er(this,t,ki,c,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=Er(this,t,ki,c,v-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Or.fromBufferAttribute(a,s),zr.fromBufferAttribute(a,r),e.distanceSqToSegment(Or,zr,ys,Eo)>n)return;ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ys);if(!(c<t.near||c>t.far))return{distance:c,point:Eo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const wo=new it,Ao=new it;class Ip extends Lp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wo.fromBufferAttribute(e,s),Ao.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wo.distanceTo(Ao);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ga extends fn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let d=0;const h=[],l=new it,u=new it,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const L=R/e;l.x=-t*Math.cos(s+L*r)*Math.sin(a+x*o),l.y=t*Math.cos(a+x*o),l.z=t*Math.sin(s+L*r)*Math.sin(a+x*o),v.push(l.x,l.y,l.z),u.copy(l).normalize(),g.push(u.x,u.y,u.z),m.push(L+y,1-x),_.push(d++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=h[f][_+1],y=h[f][_],R=h[f+1][_],L=h[f+1][_+1];(f!==0||a>0)&&p.push(x,y,L),(f!==n-1||c<Math.PI)&&p.push(y,R,L)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(g,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wr extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const bo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const p=d[l],v=d[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Np=new Dp;class Xr{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";class _l extends Xr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=qi("img");function c(){h(),bo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Up extends Xr{constructor(t){super(t)}load(t,e,n,s){const r=new pa;r.colorSpace=rn;const a=new _l(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(d){a.load(t[d],function(h){r.images[d]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let d=0;d<t.length;++d)c(d);return r}}class Fp extends Xr{constructor(t){super(t)}load(t,e,n,s){const r=new He,a=new _l(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class xl extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ms=new be,To=new it,Co=new it;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;To.setFromMatrixPosition(t.matrixWorld),e.position.copy(To),Co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Co),e.updateMatrixWorld(),Ms.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ms),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ms)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Op extends Bp{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vp extends xl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ro(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ro();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ro(){return(typeof performance>"u"?Date:performance).now()}class Po{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kp extends Ip{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new fn;s.setAttribute("position",new We(e,3)),s.setAttribute("color",new We(n,3));const r=new gl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new fe,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const Lo={type:"change"},Ss={type:"start"},Io={type:"end"},wr=new fa,Do=new In,Gp=Math.cos(70*_c.DEG2RAD);class Wp extends ii{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Lt),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lo),n.update(),r=s.NONE},this.update=function(){const S=new it,tt=new ti().setFromUnitVectors(t.up,new it(0,1,0)),rt=tt.clone().invert(),ct=new it,_t=new ti,Xt=new it,te=2*Math.PI;return function(xe=null){const ae=n.object.position;S.copy(ae).sub(n.target),S.applyQuaternion(tt),o.setFromVector3(S),n.autoRotate&&r===s.NONE&&O(M(xe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let he=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(he)&&isFinite(lt)&&(he<-Math.PI?he+=te:he>Math.PI&&(he-=te),lt<-Math.PI?lt+=te:lt>Math.PI&&(lt-=te),he<=lt?o.theta=Math.max(he,Math.min(lt,o.theta)):o.theta=o.theta>(he+lt)/2?Math.max(he,o.theta):Math.min(lt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ft=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)o.radius=j(o.radius);else{const gt=o.radius;o.radius=j(o.radius*d),ft=gt!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(rt),ae.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&L){let gt=null;if(n.object.isPerspectiveCamera){const xt=S.length();gt=j(xt*d);const Zt=xt-gt;n.object.position.addScaledVector(y,Zt),n.object.updateMatrixWorld(),ft=!!Zt}else if(n.object.isOrthographicCamera){const xt=new it(R.x,R.y,0);xt.unproject(n.object);const Zt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),ft=Zt!==n.object.zoom;const Nt=new it(R.x,R.y,0);Nt.unproject(n.object),n.object.position.sub(Nt).add(xt),n.object.updateMatrixWorld(),gt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(gt).add(n.object.position):(wr.origin.copy(n.object.position),wr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(wr.direction))<Gp?t.lookAt(n.target):(Do.setFromNormalAndCoplanarPoint(n.object.up,n.target),wr.intersectPlane(Do,n.target))))}else if(n.object.isOrthographicCamera){const gt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),gt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ft=!0)}return d=1,L=!1,ft||ct.distanceToSquared(n.object.position)>a||8*(1-_t.dot(n.object.quaternion))>a||Xt.distanceToSquared(n.target)>a?(n.dispatchEvent(Lo),ct.copy(n.object.position),_t.copy(n.object.quaternion),Xt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Vt),n.domElement.removeEventListener("pointerdown",kt),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",vt),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",Ot,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Lt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Po,c=new Po;let d=1;const h=new it,l=new re,u=new re,p=new re,v=new re,g=new re,m=new re,f=new re,_=new re,x=new re,y=new it,R=new re;let L=!1;const I=[],N={};let w=!1;function M(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function b(S){const tt=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*tt)}function O(S){c.theta-=S}function F(S){c.phi-=S}const Y=function(){const S=new it;return function(rt,ct){S.setFromMatrixColumn(ct,0),S.multiplyScalar(-rt),h.add(S)}}(),q=function(){const S=new it;return function(rt,ct){n.screenSpacePanning===!0?S.setFromMatrixColumn(ct,1):(S.setFromMatrixColumn(ct,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(rt),h.add(S)}}(),K=function(){const S=new it;return function(rt,ct){const _t=n.domElement;if(n.object.isPerspectiveCamera){const Xt=n.object.position;S.copy(Xt).sub(n.target);let te=S.length();te*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*rt*te/_t.clientHeight,n.object.matrix),q(2*ct*te/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(rt*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),q(ct*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(S,tt){if(!n.zoomToCursor)return;L=!0;const rt=n.domElement.getBoundingClientRect(),ct=S-rt.left,_t=tt-rt.top,Xt=rt.width,te=rt.height;R.x=ct/Xt*2-1,R.y=-(_t/te)*2+1,y.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function B(S){l.set(S.clientX,S.clientY)}function Z(S){et(S.clientX,S.clientX),f.set(S.clientX,S.clientY)}function k(S){v.set(S.clientX,S.clientY)}function T(S){u.set(S.clientX,S.clientY),p.subVectors(u,l).multiplyScalar(n.rotateSpeed);const tt=n.domElement;O(2*Math.PI*p.x/tt.clientHeight),F(2*Math.PI*p.y/tt.clientHeight),l.copy(u),n.update()}function C(S){_.set(S.clientX,S.clientY),x.subVectors(_,f),x.y>0?V(b(x.y)):x.y<0&&D(b(x.y)),f.copy(_),n.update()}function G(S){g.set(S.clientX,S.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g),n.update()}function J(S){et(S.clientX,S.clientY),S.deltaY<0?D(b(S.deltaY)):S.deltaY>0&&V(b(S.deltaY)),n.update()}function nt(S){let tt=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),tt=!0;break}tt&&(S.preventDefault(),n.update())}function X(S){if(I.length===1)l.set(S.pageX,S.pageY);else{const tt=Qt(S),rt=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);l.set(rt,ct)}}function at(S){if(I.length===1)v.set(S.pageX,S.pageY);else{const tt=Qt(S),rt=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);v.set(rt,ct)}}function pt(S){const tt=Qt(S),rt=S.pageX-tt.x,ct=S.pageY-tt.y,_t=Math.sqrt(rt*rt+ct*ct);f.set(0,_t)}function U(S){n.enableZoom&&pt(S),n.enablePan&&at(S)}function Tt(S){n.enableZoom&&pt(S),n.enableRotate&&X(S)}function Mt(S){if(I.length==1)u.set(S.pageX,S.pageY);else{const rt=Qt(S),ct=.5*(S.pageX+rt.x),_t=.5*(S.pageY+rt.y);u.set(ct,_t)}p.subVectors(u,l).multiplyScalar(n.rotateSpeed);const tt=n.domElement;O(2*Math.PI*p.x/tt.clientHeight),F(2*Math.PI*p.y/tt.clientHeight),l.copy(u)}function ht(S){if(I.length===1)g.set(S.pageX,S.pageY);else{const tt=Qt(S),rt=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);g.set(rt,ct)}m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g)}function ot(S){const tt=Qt(S),rt=S.pageX-tt.x,ct=S.pageY-tt.y,_t=Math.sqrt(rt*rt+ct*ct);_.set(0,_t),x.set(0,Math.pow(_.y/f.y,n.zoomSpeed)),V(x.y),f.copy(_);const Xt=(S.pageX+tt.x)*.5,te=(S.pageY+tt.y)*.5;et(Xt,te)}function Kt(S){n.enableZoom&&ot(S),n.enablePan&&ht(S)}function At(S){n.enableZoom&&ot(S),n.enableRotate&&Mt(S)}function kt(S){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",A)),!zt(S)&&(ee(S),S.pointerType==="touch"?jt(S):Q(S)))}function P(S){n.enabled!==!1&&(S.pointerType==="touch"?wt(S):dt(S))}function A(S){switch(Yt(S),I.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(Io),r=s.NONE;break;case 1:const tt=I[0],rt=N[tt];jt({pointerId:tt,pageX:rt.x,pageY:rt.y});break}}function Q(S){let tt;switch(S.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case si.DOLLY:if(n.enableZoom===!1)return;Z(S),r=s.DOLLY;break;case si.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;k(S),r=s.PAN}else{if(n.enableRotate===!1)return;B(S),r=s.ROTATE}break;case si.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;B(S),r=s.ROTATE}else{if(n.enablePan===!1)return;k(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ss)}function dt(S){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;T(S);break;case s.DOLLY:if(n.enableZoom===!1)return;C(S);break;case s.PAN:if(n.enablePan===!1)return;G(S);break}}function vt(S){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(S.preventDefault(),n.dispatchEvent(Ss),J(ut(S)),n.dispatchEvent(Io))}function ut(S){const tt=S.deltaMode,rt={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(tt){case 1:rt.deltaY*=16;break;case 2:rt.deltaY*=100;break}return S.ctrlKey&&!w&&(rt.deltaY*=10),rt}function Ot(S){S.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(S){S.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function Lt(S){n.enabled===!1||n.enablePan===!1||nt(S)}function jt(S){switch(Jt(S),I.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;X(S),r=s.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;at(S),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(S),r=s.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(S),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ss)}function wt(S){switch(Jt(S),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(S),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ht(S),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Kt(S),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(S),n.update();break;default:r=s.NONE}}function Vt(S){n.enabled!==!1&&S.preventDefault()}function ee(S){I.push(S.pointerId)}function Yt(S){delete N[S.pointerId];for(let tt=0;tt<I.length;tt++)if(I[tt]==S.pointerId){I.splice(tt,1);return}}function zt(S){for(let tt=0;tt<I.length;tt++)if(I[tt]==S.pointerId)return!0;return!1}function Jt(S){let tt=N[S.pointerId];tt===void 0&&(tt=new re,N[S.pointerId]=tt),tt.set(S.pageX,S.pageY)}function Qt(S){const tt=S.pointerId===I[0]?I[1]:I[0];return N[tt]}n.domElement.addEventListener("contextmenu",Vt),n.domElement.addEventListener("pointerdown",kt),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",vt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ot,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class un{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),un.nextNameID=un.nextNameID||0,this.$name.id=`lil-gui-name-${++un.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Xp extends un{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ra(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const qp={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ra,toHexString:ra},Yi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Yp={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Yi.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Yi.toHexString(s)}},$p={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Yi.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Yi.toHexString(s)}},Kp=[qp,Yi,Yp,$p];function jp(i){return Kp.find(t=>t.match(i))}class Zp extends un{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jp(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ra(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Es extends un{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jp extends un{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let a=!1,o,c,d,h,l;const u=5,p=_=>{o=_.clientX,c=d=_.clientY,a=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(a){const x=_.clientX-o,y=_.clientY-c;Math.abs(y)>u?(_.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>u&&g()}if(!a){const x=_.clientY-d;l-=x*this._step*this._arrowKeyMultiplier(_),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}d=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,_,x,y,R)=>(f-_)/(x-_)*(R-y)+y,e=f=>{const _=this.$slider.getBoundingClientRect();let x=t(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,c;const d=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,c=f.touches[0].clientY,a=!0):d(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},l=f=>{if(a){const _=f.touches[0].clientX-o,x=f.touches[0].clientY-c;Math.abs(_)>Math.abs(x)?d(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else f.preventDefault(),e(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qp extends un{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class tm extends un{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const em=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function nm(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let No=!1;class _a{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!No&&o&&(nm(em),No=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new Qp(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Jp(this,t,e,n,s,r);case"boolean":return new Xp(this,t,e);case"string":return new tm(this,t,e);case"function":return new Es(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Zp(this,t,e,n)}addFolder(t){const e=new _a({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Es||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Es)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function im(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ar(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yl={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(d,h){if(!s[d]){if(!n[d]){var l=typeof Ar=="function"&&Ar;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=s[d]={exports:{}};n[d][0].call(u.exports,function(p){var v=n[d][1][p];return a(v||p)},u,u.exports,e,n,s,r)}return s[d].exports}for(var o=typeof Ar=="function"&&Ar,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;a.prototype.setFromPoints=function(d,h,l,u){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(d[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<d.length;m++){var f=d[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),u&&(p.x-=u,p.y-=u,p.z-=u,v.x+=u,v.y+=u,v.z+=u),this},a.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return(u.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(u.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(u.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},a.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return h.x<=u.x&&l.x>=p.x&&h.y<=u.y&&l.y>=p.y&&h.z<=u.z&&l.z>=p.z},a.prototype.getCorners=function(d,h,l,u,p,v,g,m){var f=this.lowerBound,_=this.upperBound;d.copy(f),h.set(_.x,f.y,f.z),l.set(_.x,_.y,f.z),u.set(f.x,_.y,_.z),p.set(_.x,f.y,f.z),v.set(f.x,_.y,f.z),g.set(f.x,f.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(u,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var R=l[y];d.pointToLocal(R,R)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(u,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var R=l[y];d.pointToWorld(R,R)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var d=o;o=a,a=d}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===r.SLEEPING)&&(m.type&d||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,_):this.doBoundingSphereBroadphase(g,m,f,_)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,f,_){var x=h;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),R=x.norm2();R<y&&(f.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),_.push(m))};var l={keys:[]},u=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,_=u,x=p,y=g.length,R=0;R!==y;R++)_[R]=g[R],x[R]=m[R];g.length=0,m.length=0;for(var R=0;R!==y;R++){var L=_[R].id,I=x[R].id,N=L<I?L+","+I:I+","+L;f[N]=R,f.keys.push(N)}for(var R=0;R!==f.keys.length;R++){var N=f.keys.pop(),w=f[N];g.push(_[w]),m.push(x[w]),delete f[N]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,p,v){r.apply(this),this.nx=u||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new a;new a,c.prototype.collisionPairs=function(h,l,u){var p=h.numObjects(),v=h.bodies,J=this.aabbMax,G=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,_=m*f,x=f,y=1,R=J.x,L=J.y,I=J.z,N=G.x,w=G.y,M=G.z,b=g/(R-N),O=m/(L-w),F=f/(I-M),Y=(R-N)/g,q=(L-w)/m,K=(I-M)/f,V=Math.sqrt(Y*Y+q*q+K*K)*.5,D=o.types,et=D.SPHERE,j=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var B=this.bins,Z=this.binLengths,k=this.bins.length,T=0;T!==k;T++)Z[T]=0;var C=Math.ceil,G=Math.min,J=Math.max;function nt(wt,Vt,ee,Yt,zt,Jt,Qt){var de=(wt-N)*b|0,S=(Vt-w)*O|0,tt=(ee-M)*F|0,rt=C((Yt-N)*b),ct=C((zt-w)*O),_t=C((Jt-M)*F);de<0?de=0:de>=g&&(de=g-1),S<0?S=0:S>=m&&(S=m-1),tt<0?tt=0:tt>=f&&(tt=f-1),rt<0?rt=0:rt>=g&&(rt=g-1),ct<0?ct=0:ct>=m&&(ct=m-1),_t<0?_t=0:_t>=f&&(_t=f-1),de*=_,S*=x,tt*=y,rt*=_,ct*=x,_t*=y;for(var Xt=de;Xt<=rt;Xt+=_)for(var te=S;te<=ct;te+=x)for(var me=tt;me<=_t;me+=y){var xe=Xt+te+me;B[xe][Z[xe]++]=Qt}}for(var T=0;T!==p;T++){var X=v[T],at=X.shape;switch(at.type){case et:var pt=X.position.x,U=X.position.y,Tt=X.position.z,Mt=at.radius;nt(pt-Mt,U-Mt,Tt-Mt,pt+Mt,U+Mt,Tt+Mt,X);break;case j:at.worldNormalNeedsUpdate&&at.computeWorldNormal(X.quaternion);var ht=at.worldNormal,ot=N+Y*.5-X.position.x,Kt=w+q*.5-X.position.y,At=M+K*.5-X.position.z,kt=d;kt.set(ot,Kt,At);for(var P=0,A=0;P!==g;P++,A+=_,kt.y=Kt,kt.x+=Y)for(var Q=0,dt=0;Q!==m;Q++,dt+=x,kt.z=At,kt.y+=q)for(var vt=0,ut=0;vt!==f;vt++,ut+=y,kt.z+=K)if(kt.dot(ht)<V){var Ot=A+dt+ut;B[Ot][Z[Ot]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),nt(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var T=0;T!==k;T++){var yt=Z[T];if(yt>1)for(var Lt=B[T],P=0;P!==yt;P++)for(var X=Lt[P],Q=0;Q!==P;Q++){var jt=Lt[Q];this.needBroadphaseCollision(X,jt)&&this.intersectionTest(X,jt,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,p,v,g,m;for(p=0;p!==u;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new a,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var d=o;o=a,a=d}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(k,T){this.from=k?k.clone():new r,this.to=T?T.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,p=[];l.prototype.intersectWorld=function(k,T){return this.mode=T.mode||l.ANY,this.result=T.result||new c,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),p.length=0,k.broadphase.aabbQuery(k,u,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(k,T,C,G){G.vsub(T,j),C.vsub(T,v),k.vsub(T,g);var J=j.dot(j),nt=j.dot(v),X=j.dot(g),at=v.dot(v),pt=v.dot(g),U,Tt;return(U=at*X-nt*pt)>=0&&(Tt=J*pt-nt*X)>=0&&U+Tt<J*at-nt*nt}var f=new r,_=new a;l.prototype.intersectBody=function(k,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!k.collisionResponse)&&!(!(this.collisionFilterGroup&k.collisionFilterMask)||!(k.collisionFilterGroup&this.collisionFilterMask)))for(var G=f,J=_,nt=0,X=k.shapes.length;nt<X;nt++){var at=k.shapes[nt];if(!(C&&!at.collisionResponse)&&(k.quaternion.mult(k.shapeOrientations[nt],J),k.quaternion.vmult(k.shapeOffsets[nt],G),G.vadd(k.position,G),this.intersectShape(at,J,G,k),this.result._shouldStop))break}},l.prototype.intersectBodies=function(k,T){T&&(this.result=T,this._updateDirection());for(var C=0,G=k.length;!this.result._shouldStop&&C<G;C++)this.intersectBody(k[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(k,T,C,G){var J=this.from,nt=Z(J,this._direction,C);if(!(nt>k.boundingSphereRadius)){var X=this[k.type];X&&X.call(this,k,T,C,G)}},new r,new r;var x=new r,y=new r,R=new r,L=new r;new r,new c,l.prototype.intersectBox=function(k,T,C,G){return this.intersectConvex(k.convexPolyhedronRepresentation,T,C,G)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(k,T,C,G){var J=this.from,nt=this.to,X=this._direction,at=new r(0,0,1);T.vmult(at,at);var pt=new r;J.vsub(C,pt);var U=pt.dot(at);nt.vsub(C,pt);var Tt=pt.dot(at);if(!(U*Tt>0)&&!(J.distanceTo(nt)<U)){var Mt=at.dot(X);if(!(Math.abs(Mt)<this.precision)){var ht=new r,ot=new r,Kt=new r;J.vsub(C,ht);var At=-at.dot(ht)/Mt;X.scale(At,ot),J.vadd(ot,Kt),this.reportIntersection(at,Kt,k,G,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(k){var T=this.to,C=this.from;k.lowerBound.x=Math.min(T.x,C.x),k.lowerBound.y=Math.min(T.y,C.y),k.lowerBound.z=Math.min(T.z,C.z),k.upperBound.x=Math.max(T.x,C.x),k.upperBound.y=Math.max(T.y,C.y),k.upperBound.z=Math.max(T.z,C.z)};var I={faceList:[0]};l.prototype.intersectHeightfield=function(k,T,C,G){k.data,k.elementSize;var J=new r,nt=new l(this.from,this.to);o.pointToLocalFrame(C,T,nt.from,nt.from),o.pointToLocalFrame(C,T,nt.to,nt.to);var X=[],at=null,pt=null,U=null,Tt=null,Mt=k.getIndexOfPosition(nt.from.x,nt.from.y,X,!1);if(Mt&&(at=X[0],pt=X[1],U=X[0],Tt=X[1]),Mt=k.getIndexOfPosition(nt.to.x,nt.to.y,X,!1),Mt&&((at===null||X[0]<at)&&(at=X[0]),(U===null||X[0]>U)&&(U=X[0]),(pt===null||X[1]<pt)&&(pt=X[1]),(Tt===null||X[1]>Tt)&&(Tt=X[1])),at!==null){var ht=[];k.getRectMinMax(at,pt,U,Tt,ht),ht[0],ht[1];for(var ot=at;ot<=U;ot++)for(var Kt=pt;Kt<=Tt;Kt++){if(this.result._shouldStop||(k.getConvexTrianglePillar(ot,Kt,!1),o.pointToWorldFrame(C,T,k.pillarOffset,J),this.intersectConvex(k.pillarConvex,T,J,G,I),this.result._shouldStop))return;k.getConvexTrianglePillar(ot,Kt,!0),o.pointToWorldFrame(C,T,k.pillarOffset,J),this.intersectConvex(k.pillarConvex,T,J,G,I)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var N=new r,w=new r;l.prototype.intersectSphere=function(k,T,C,G){var J=this.from,nt=this.to,X=k.radius,at=Math.pow(nt.x-J.x,2)+Math.pow(nt.y-J.y,2)+Math.pow(nt.z-J.z,2),pt=2*((nt.x-J.x)*(J.x-C.x)+(nt.y-J.y)*(J.y-C.y)+(nt.z-J.z)*(J.z-C.z)),U=Math.pow(J.x-C.x,2)+Math.pow(J.y-C.y,2)+Math.pow(J.z-C.z,2)-Math.pow(X,2),Tt=Math.pow(pt,2)-4*at*U,Mt=N,ht=w;if(!(Tt<0))if(Tt===0)J.lerp(nt,Tt,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1);else{var ot=(-pt-Math.sqrt(Tt))/(2*at),Kt=(-pt+Math.sqrt(Tt))/(2*at);if(ot>=0&&ot<=1&&(J.lerp(nt,ot,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1)),this.result._shouldStop)return;Kt>=0&&Kt<=1&&(J.lerp(nt,Kt,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var M=new r;new r,new r;var b=new r;l.prototype.intersectConvex=function(T,C,G,J,nt){for(var X=M,at=b,pt=nt&&nt.faceList||null,U=T.faces,Tt=T.vertices,Mt=T.faceNormals,ht=this._direction,ot=this.from,Kt=this.to,At=ot.distanceTo(Kt),kt=pt?pt.length:U.length,P=this.result,A=0;!P._shouldStop&&A<kt;A++){var Q=pt?pt[A]:A,dt=U[Q],vt=Mt[Q],ut=C,Ot=G;at.copy(Tt[dt[0]]),ut.vmult(at,at),at.vadd(Ot,at),at.vsub(ot,at),ut.vmult(vt,X);var yt=ht.dot(X);if(!(Math.abs(yt)<this.precision)){var Lt=X.dot(at)/yt;if(!(Lt<0)){ht.mult(Lt,x),x.vadd(ot,x),y.copy(Tt[dt[0]]),ut.vmult(y,y),Ot.vadd(y,y);for(var jt=1;!P._shouldStop&&jt<dt.length-1;jt++){R.copy(Tt[dt[jt]]),L.copy(Tt[dt[jt+1]]),ut.vmult(R,R),ut.vmult(L,L),Ot.vadd(R,R),Ot.vadd(L,L);var wt=x.distanceTo(ot);!(m(x,y,R,L)||m(x,R,y,L))||wt>At||this.reportIntersection(X,x,T,J,Q)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var O=new r,F=new r,Y=new r,q=new r,K=new r,V=new r;new h;var D=[],et=new o;l.prototype.intersectTrimesh=function(T,C,G,J,nt){var X=O,at=D,pt=et,U=b,Tt=F,Mt=Y,ht=q,ot=V,Kt=K;nt&&nt.faceList;var At=T.indices;T.vertices,T.faceNormals;var kt=this.from,P=this.to,A=this._direction;pt.position.copy(G),pt.quaternion.copy(C),o.vectorToLocalFrame(G,C,A,Tt),o.pointToLocalFrame(G,C,kt,Mt),o.pointToLocalFrame(G,C,P,ht);var Q=Mt.distanceSquared(ht);T.tree.rayQuery(this,pt,at);for(var dt=0,vt=at.length;!this.result._shouldStop&&dt!==vt;dt++){var ut=at[dt];T.getNormal(ut,X),T.getVertex(At[ut*3],y),y.vsub(Mt,U);var Ot=Tt.dot(X),yt=X.dot(U)/Ot;if(!(yt<0)){Tt.scale(yt,x),x.vadd(Mt,x),T.getVertex(At[ut*3+1],R),T.getVertex(At[ut*3+2],L);var Lt=x.distanceSquared(Mt);!(m(x,R,y,L)||m(x,y,R,L))||Lt>Q||(o.vectorToWorldFrame(C,X,Kt),o.pointToWorldFrame(G,C,x,ot),this.reportIntersection(Kt,ot,T,J,ut))}}at.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(k,T,C,G,J){var nt=this.from,X=this.to,at=nt.distanceTo(T),pt=this.result;if(!(this.skipBackfaces&&k.dot(this._direction)>0))switch(pt.hitFaceIndex=typeof J<"u"?J:-1,this.mode){case l.ALL:this.hasHit=!0,pt.set(nt,X,k,T,C,G,at),pt.hasHit=!0,this.callback(pt);break;case l.CLOSEST:(at<pt.distance||!pt.hasHit)&&(this.hasHit=!0,pt.hasHit=!0,pt.set(nt,X,k,T,C,G,at));break;case l.ANY:this.hasHit=!0,pt.hasHit=!0,pt.set(nt,X,k,T,C,G,at),pt._shouldStop=!0;break}};var j=new r,B=new r;function Z(k,T,C){C.vsub(k,j);var G=j.dot(T);T.mult(G,B),B.vadd(k,B);var J=C.distanceTo(B);return J}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,d,h,l,u,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,p=c.boundingRadius,v=h+u,g=l-p;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],_=f.position.x;o+=_,c+=_*_;var x=f.position.y;d+=x,h+=x*x;var y=f.position.z;l+=y,u+=y*y}var R=c-o*o*g,L=h-d*d*g,I=u-l*l*g;R>L?R>I?this.axisIndex=0:this.axisIndex=2:L>I?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<u.length;p++){var v=u[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new a(h,l,u),f=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),u.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new a(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,p,f,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);x.normalize();var y=this.rotationalEquation1=new a(u,p,v),R=this.rotationalEquation2=new a(u,p,v),L=this.motorEquation=new o(u,p,g);L.enabled=!1,this.equations.push(y,R,L)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,_=l,x=this.axisA,y=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(x,f),p.quaternion.vmult(y,_),f.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,p),r.call(this,d,p,h,v,u);var m=this.rotationalEquation1=new a(d,h,l),f=this.rotationalEquation2=new a(d,h,l),_=this.rotationalEquation3=new a(d,h,l);this.equations.push(m,f,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,p){r.call(this,d,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new a(d,l),g=this.equationY=new a(d,l),m=this.equationZ=new a(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,p=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),y=this.computeGW(),R=this.computeGiMf(),L=-x*l-y*u-h*R;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,f,_){_=typeof _<"u"?_:1e6,r.call(this,m,f,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a,h=new a;o.prototype.computeB=function(m){var f=this.a,_=this.b,x=this.bi,y=this.bj,R=this.ri,L=this.rj,I=c,N=d,w=x.velocity,M=x.angularVelocity;x.force,x.torque;var b=y.velocity,O=y.angularVelocity;y.force,y.torque;var F=h,Y=this.jacobianElementA,q=this.jacobianElementB,K=this.ni;R.cross(K,I),L.cross(K,N),K.negate(Y.spatial),I.negate(Y.rotational),q.spatial.copy(K),q.rotational.copy(N),F.copy(y.position),F.vadd(L,F),F.vsub(x.position,F),F.vsub(R,F);var V=K.dot(F),D=this.restitution+1,et=D*b.dot(K)-D*w.dot(K)+O.dot(N)-M.dot(I),j=this.computeGiMf(),B=-V*f-et*_-m*j;return B};var l=new a,u=new a,p=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=u,_=p,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,f,_){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var _=m,x=g,y=f;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,f){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.velocity,y=_.velocity,R=f.angularVelocity||c,L=_.angularVelocity||c;return g.multiplyVectors(x,R)+m.multiplyVectors(y,L)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.vlambda,y=_.vlambda,R=f.wlambda||c,L=_.wlambda||c;return g.multiplyVectors(x,R)+m.multiplyVectors(y,L)};var d=new a,h=new a,l=new a,u=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.force,y=f.torque,R=_.force,L=_.torque,I=f.invMassSolve,N=_.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(L,u):u.set(0,0,0),x.mult(I,d),R.mult(N,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var p=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.invMassSolve,y=_.invMassSolve,R=f.invInertiaWorldSolve,L=_.invInertiaWorldSolve,I=x+y;return R&&(R.vmult(g.rotational,p),I+=p.dot(g.rotational)),L&&(L.vmult(m.rotational,p),I+=p.dot(m.rotational)),I};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),f.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,p=this.rj,v=c,g=d,m=this.t;u.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,_=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),R=-x*l-h*y;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),y=this.computeGW(),R=this.computeGiMf(),L=-x*l-y*u-h*R;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,a.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,p=this.jacobianElementB;u.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},a.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var d=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,p=0;p<3;p++)u+=o.elements[h+p*3]*this.elements[p+l*3];d.elements[h+l*3]=u}return d},a.prototype.scale=function(o,c){c=c||new a;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,p;for(u=0;u<3;u++)for(p=0;p<3;p++)l[u+h*p]=this.elements[u+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,_;do{if(u=g-v,l[u+h*u]===0){for(p=u+1;p<g;p++)if(l[u+h*p]!==0){m=f;do _=f-m,l[_+h*u]+=l[_+h*p];while(--m);break}}if(l[u+h*u]!==0)for(p=u+1;p<g;p++){var x=l[u+h*p]/l[u+h*u];m=f;do _=f-m,l[_+h*p]=_<=u?0:l[_+h*p]-l[_+h*u]*x;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=d,f;do{if(l=v-p,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do f=m-g,h[f+d*l]+=h[f+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var _=h[l+d*u]/h[l+d*l];g=m;do f=m-g,h[f+d*u]=f<=l?0:h[f+d*u]-h[f+d*l]*_;while(--g)}}while(--p);l=2;do{u=l-1;do{var _=h[l+d*u]/h[l+d*l];g=d;do f=d-g,h[f+d*u]=h[f+d*u]-h[f+d*l]*_;while(--g)}while(u--)}while(--l);l=2;do{var _=1/h[l+d*l];g=d;do f=d-g,h[f+d*l]=h[f+d*l]*_;while(--g)}while(l--);l=2;do{u=2;do{if(f=h[c+u+d*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,f)}while(u--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,p=d+d,v=h+h,g=c*u,m=c*p,f=c*v,_=d*p,x=d*v,y=h*v,R=l*u,L=l*p,I=l*v,N=this.elements;return N[3*0+0]=1-(_+y),N[3*0+1]=m-I,N[3*0+2]=f+L,N[3*1+0]=m+I,N[3*1+1]=1-(g+y),N[3*1+2]=x-R,N[3*2+0]=f-L,N[3*2+1]=x+R,N[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(u,p,v,g){this.x=u!==void 0?u:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(u,p,v,g){this.x=u,this.y=p,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(u,p){var v=Math.sin(p*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(p*.5)},a.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,p]};var o=new r,c=new r;a.prototype.setFromVectors=function(u,p){if(u.isAntiparallelTo(p)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(p.norm(),2))+u.dot(p),this.normalize()}};var d=new r,h=new r,l=new r;a.prototype.mult=function(u,p){p=p||new a;var v=this.w,g=d,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),p.w=v*u.w-g.dot(m),g.cross(m,f),p.x=v*m.x+u.w*g.x+f.x,p.y=v*m.y+u.w*g.y+f.y,p.z=v*m.z+u.w*g.z+f.z,p},a.prototype.inverse=function(u){var p=this.x,v=this.y,g=this.z,m=this.w;u=u||new a,this.conjugate(u);var f=1/(p*p+v*v+g*g+m*m);return u.x*=f,u.y*=f,u.z*=f,u.w*=f,u},a.prototype.conjugate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},a.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.vmult=function(u,p){p=p||new r;var v=u.x,g=u.y,m=u.z,f=this.x,_=this.y,x=this.z,y=this.w,R=y*v+_*m-x*g,L=y*g+x*v-f*m,I=y*m+f*g-_*v,N=-f*v-_*g-x*m;return p.x=R*y+N*-f+L*-x-I*-_,p.y=L*y+N*-_+I*-f-R*-x,p.z=I*y+N*-x+R*-_-L*-f,p},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},a.prototype.toEuler=function(u,p){p=p||"YZX";var v,g,m,f=this.x,_=this.y,x=this.z,y=this.w;switch(p){case"YZX":var R=f*_+x*y;if(R>.499&&(v=2*Math.atan2(f,y),g=Math.PI/2,m=0),R<-.499&&(v=-2*Math.atan2(f,y),g=-Math.PI/2,m=0),isNaN(v)){var L=f*f,I=_*_,N=x*x;v=Math.atan2(2*_*y-2*f*x,1-2*I-2*N),g=Math.asin(2*R),m=Math.atan2(2*f*y-2*_*x,1-2*L-2*N)}break;default:throw new Error("Euler order "+p+" not supported yet.")}u.y=v,u.z=g,u.x=m},a.prototype.setFromEuler=function(u,p,v,g){g=g||"XYZ";var m=Math.cos(u/2),f=Math.cos(p/2),_=Math.cos(v/2),x=Math.sin(u/2),y=Math.sin(p/2),R=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*_+m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_-x*y*R):g==="YXZ"?(this.x=x*f*_+m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_+x*y*R):g==="ZXY"?(this.x=x*f*_-m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_-x*y*R):g==="ZYX"?(this.x=x*f*_-m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_+x*y*R):g==="YZX"?(this.x=x*f*_+m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_-x*y*R):g==="XZY"&&(this.x=x*f*_-m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_+x*y*R),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new a,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new a;o.pointToLocalFrame=function(d,h,l,p){var p=p||new r;return l.vsub(d,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(d,p),p},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var u=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new a,l.x=m*v-f*p,l.y=f*u-g*v,l.z=g*p-m*u,l},a.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,p=Math.sqrt(h*h+l*l+u*u);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},a.prototype.unit=function(h){h=h||new a;var l=this.x,u=this.y,p=this.z,v=Math.sqrt(l*l+u*u+p*p);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p))},a.prototype.distanceSquared=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p)},a.prototype.mult=function(h,l){l=l||new a;var u=this.x,p=this.y,v=this.z;return l.x=h*u,l.y=h*p,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var p=o,v=1/u;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,u){var p=this.x,v=this.y,g=this.z;u.x=p+(h.x-p)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(b){b=b||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,b.position&&this.position.copy(b.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new a,this.force=new a;var O=typeof b.mass=="number"?b.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=O<=0?l.STATIC:l.DYNAMIC,typeof b.type==typeof l.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new a,b.shape&&this.addShape(b.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(b){if(this.allowSleep){var O=this.sleepState,F=this.velocity.norm2()+this.angularVelocity.norm2(),Y=Math.pow(this.sleepSpeedLimit,2);O===l.AWAKE&&F<Y?(this.sleepState=l.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(l.sleepyEvent)):O===l.SLEEPY&&F>Y?this.wakeUp():O===l.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(b,F){var F=F||new a;return b.vsub(this.position,F),this.quaternion.conjugate().vmult(F,F),F},l.prototype.vectorToLocalFrame=function(b,F){var F=F||new a;return this.quaternion.conjugate().vmult(b,F),F},l.prototype.pointToWorldFrame=function(b,F){var F=F||new a;return this.quaternion.vmult(b,F),F.vadd(this.position,F),F},l.prototype.vectorToWorldFrame=function(b,F){var F=F||new a;return this.quaternion.vmult(b,F),F};var u=new a,p=new c;l.prototype.addShape=function(b,O,F){var Y=new a,q=new c;return O&&Y.copy(O),F&&q.copy(F),this.shapes.push(b),this.shapeOffsets.push(Y),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var b=this.shapes,O=this.shapeOffsets,F=b.length,Y=0,q=0;q!==F;q++){var K=b[q];K.updateBoundingSphereRadius();var V=O[q].norm(),D=K.boundingSphereRadius;V+D>Y&&(Y=V+D)}this.boundingRadius=Y};var v=new d;l.prototype.computeAABB=function(){for(var b=this.shapes,O=this.shapeOffsets,F=this.shapeOrientations,Y=b.length,q=u,K=p,V=this.quaternion,D=this.aabb,et=v,j=0;j!==Y;j++){var B=b[j];F[j].mult(V,K),K.vmult(O[j],q),q.vadd(this.position,q),B.calculateWorldAABB(q,K,et.lowerBound,et.upperBound),j===0?D.copy(et):D.extend(et)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(b){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!b)){var F=g,Y=m;F.setRotationFromQuaternion(this.quaternion),F.transpose(Y),F.scale(O,F),F.mmult(Y,this.invInertiaWorld)}};var f=new a,_=new a;l.prototype.applyForce=function(b,O){if(this.type===l.DYNAMIC){var F=f;O.vsub(this.position,F);var Y=_;F.cross(b,Y),this.force.vadd(b,this.force),this.torque.vadd(Y,this.torque)}};var x=new a,y=new a;l.prototype.applyLocalForce=function(b,O){if(this.type===l.DYNAMIC){var F=x,Y=y;this.vectorToWorldFrame(b,F),this.pointToWorldFrame(O,Y),this.applyForce(F,Y)}};var R=new a,L=new a,I=new a;l.prototype.applyImpulse=function(b,O){if(this.type===l.DYNAMIC){var F=R;O.vsub(this.position,F);var Y=L;Y.copy(b),Y.mult(this.invMass,Y),this.velocity.vadd(Y,this.velocity);var q=I;F.cross(b,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var N=new a,w=new a;l.prototype.applyLocalImpulse=function(b,O){if(this.type===l.DYNAMIC){var F=N,Y=w;this.vectorToWorldFrame(b,F),this.pointToWorldFrame(O,Y),this.applyImpulse(F,Y)}};var M=new a;l.prototype.updateMassProperties=function(){var b=M;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,F=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,O),this.invInertia.set(O.x>0&&!F?1/O.x:0,O.y>0&&!F?1/O.y:0,O.z>0&&!F?1/O.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(b,O){var F=new a;return b.vsub(this.position,F),this.angularVelocity.cross(F,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(V){this.chassisBody=V.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof V.indexRightAxis<"u"?V.indexRightAxis:1,this.indexForwardAxis=typeof V.indexForwardAxis<"u"?V.indexForwardAxis:0,this.indexUpAxis=typeof V.indexUpAxis<"u"?V.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(V){V=V||{};var D=new c(V),et=this.wheelInfos.length;return this.wheelInfos.push(D),et},d.prototype.setSteeringValue=function(V,D){var et=this.wheelInfos[D];et.steering=V},new r,d.prototype.applyEngineForce=function(V,D){this.wheelInfos[D].engineForce=V},d.prototype.setBrake=function(V,D){this.wheelInfos[D].brake=V},d.prototype.addToWorld=function(V){this.constraints,V.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(V.dt)},V.addEventListener("preStep",this.preStepCallback),this.world=V},d.prototype.getVehicleAxisWorld=function(V,D){D.set(V===0?1:0,V===1?1:0,V===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},d.prototype.updateVehicle=function(V){for(var D=this.wheelInfos,et=D.length,j=this.chassisBody,B=0;B<et;B++)this.updateWheelTransform(B);this.currentVehicleSpeedKmHour=3.6*j.velocity.norm();var Z=new r;this.getVehicleAxisWorld(this.indexForwardAxis,Z),Z.dot(j.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var B=0;B<et;B++)this.castRay(D[B]);this.updateSuspension(V);for(var k=new r,T=new r,B=0;B<et;B++){var C=D[B],G=C.suspensionForce;G>C.maxSuspensionForce&&(G=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(G*V,k),C.raycastResult.hitPointWorld.vsub(j.position,T),j.applyImpulse(k,C.raycastResult.hitPointWorld)}this.updateFriction(V);var J=new r,nt=new r,X=new r;for(B=0;B<et;B++){var C=D[B];j.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,X);var at=1;switch(this.indexUpAxis){case 1:at=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var pt=nt.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(pt,J),nt.vsub(J,nt);var U=nt.dot(X);C.deltaRotation=at*U*V/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*V),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},d.prototype.updateSuspension=function(V){for(var D=this.chassisBody,et=D.mass,j=this.wheelInfos,B=j.length,Z=0;Z<B;Z++){var k=j[Z];if(k.isInContact){var T,C=k.suspensionRestLength,G=k.suspensionLength,J=C-G;T=k.suspensionStiffness*J*k.clippedInvContactDotSuspension;var nt=k.suspensionRelativeVelocity,X;nt<0?X=k.dampingCompression:X=k.dampingRelaxation,T-=X*nt,k.suspensionForce=T*et,k.suspensionForce<0&&(k.suspensionForce=0)}else k.suspensionForce=0}},d.prototype.removeFromWorld=function(V){this.constraints,V.remove(this.chassisBody),V.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;d.prototype.castRay=function(V){var D=p,et=v;this.updateWheelTransformWorld(V);var j=this.chassisBody,B=-1,Z=V.suspensionRestLength+V.radius;V.directionWorld.scale(Z,D);var k=V.chassisConnectionPointWorld;k.vadd(D,et);var T=V.raycastResult;T.reset();var C=j.collisionResponse;j.collisionResponse=!1,this.world.rayTest(k,et,T),j.collisionResponse=C;var G=T.body;if(V.raycastResult.groundObject=0,G){B=T.distance,V.raycastResult.hitNormalWorld=T.hitNormalWorld,V.isInContact=!0;var J=T.distance;V.suspensionLength=J-V.radius;var nt=V.suspensionRestLength-V.maxSuspensionTravel,X=V.suspensionRestLength+V.maxSuspensionTravel;V.suspensionLength<nt&&(V.suspensionLength=nt),V.suspensionLength>X&&(V.suspensionLength=X,V.raycastResult.reset());var at=V.raycastResult.hitNormalWorld.dot(V.directionWorld),pt=new r;j.getVelocityAtWorldPoint(V.raycastResult.hitPointWorld,pt);var U=V.raycastResult.hitNormalWorld.dot(pt);if(at>=-.1)V.suspensionRelativeVelocity=0,V.clippedInvContactDotSuspension=1/.1;else{var Tt=-1/at;V.suspensionRelativeVelocity=U*Tt,V.clippedInvContactDotSuspension=Tt}}else V.suspensionLength=V.suspensionRestLength+0*V.maxSuspensionTravel,V.suspensionRelativeVelocity=0,V.directionWorld.scale(-1,V.raycastResult.hitNormalWorld),V.clippedInvContactDotSuspension=1;return B},d.prototype.updateWheelTransformWorld=function(V){V.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(V.chassisConnectionPointLocal,V.chassisConnectionPointWorld),D.vectorToWorldFrame(V.directionLocal,V.directionWorld),D.vectorToWorldFrame(V.axleLocal,V.axleWorld)},d.prototype.updateWheelTransform=function(V){var D=h,et=l,j=u,B=this.wheelInfos[V];this.updateWheelTransformWorld(B),B.directionLocal.scale(-1,D),et.copy(B.axleLocal),D.cross(et,j),j.normalize(),et.normalize();var Z=B.steering,k=new a;k.setFromAxisAngle(D,Z);var T=new a;T.setFromAxisAngle(et,B.rotation);var C=B.worldTransform.quaternion;this.chassisBody.quaternion.mult(k,C),C.mult(T,C),C.normalize();var G=B.worldTransform.position;G.copy(B.directionWorld),G.scale(B.suspensionLength,G),G.vadd(B.chassisConnectionPointWorld,G)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(V){return this.wheelInfos[V].worldTransform};var m=new r,f=[],_=[],x=1;d.prototype.updateFriction=function(V){for(var D=m,et=this.wheelInfos,j=et.length,B=this.chassisBody,Z=_,k=f,T=0;T<j;T++){var C=et[T],G=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,Z[T]||(Z[T]=new r),k[T]||(k[T]=new r)}for(var T=0;T<j;T++){var C=et[T],G=C.raycastResult.body;if(G){var J=k[T],nt=this.getWheelTransformWorld(T);nt.vectorToWorldFrame(g[this.indexRightAxis],J);var X=C.raycastResult.hitNormalWorld,at=J.dot(X);X.scale(at,D),J.vsub(D,J),J.normalize(),X.cross(J,Z[T]),Z[T].normalize(),C.sideImpulse=K(B,C.raycastResult.hitPointWorld,G,C.raycastResult.hitPointWorld,J),C.sideImpulse*=x}}var pt=1,U=.5;this.sliding=!1;for(var T=0;T<j;T++){var C=et[T],G=C.raycastResult.body,Tt=0;if(C.slipInfo=1,G){var Mt=0,ht=C.brake?C.brake:Mt;Tt=I(B,G,C.raycastResult.hitPointWorld,Z[T],ht),Tt+=C.engineForce*V;var ot=ht/Tt;C.slipInfo*=ot}if(C.forwardImpulse=0,C.skidInfo=1,G){C.skidInfo=1;var Kt=C.suspensionForce*V*C.frictionSlip,At=Kt,kt=Kt*At;C.forwardImpulse=Tt;var P=C.forwardImpulse*U,A=C.sideImpulse*pt,Q=P*P+A*A;if(C.sliding=!1,Q>kt){this.sliding=!0,C.sliding=!0;var ot=Kt/Math.sqrt(Q);C.skidInfo*=ot}}}if(this.sliding)for(var T=0;T<j;T++){var C=et[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<j;T++){var C=et[T],dt=new r;if(dt.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var vt=new r;Z[T].scale(C.forwardImpulse,vt),B.applyImpulse(vt,dt)}if(C.sideImpulse!==0){var G=C.raycastResult.body,ut=new r;ut.copy(C.raycastResult.hitPointWorld);var Ot=new r;k[T].scale(C.sideImpulse,Ot),B.pointToLocalFrame(dt,dt),dt["xyz"[this.indexUpAxis]]*=C.rollInfluence,B.pointToWorldFrame(dt,dt),B.applyImpulse(Ot,dt),Ot.scale(-1,Ot),G.applyImpulse(Ot,ut)}}};var y=new r,R=new r,L=new r;function I(V,D,et,j,B){var Z=0,k=et,T=y,C=R,G=L;V.getVelocityAtWorldPoint(k,T),D.getVelocityAtWorldPoint(k,C),T.vsub(C,G);var J=j.dot(G),nt=O(V,et,j),X=O(D,et,j),at=1,pt=at/(nt+X);return Z=-J*pt,B<Z&&(Z=B),Z<-B&&(Z=-B),Z}var N=new r,w=new r,M=new r,b=new r;function O(V,D,et){var j=N,B=w,Z=M,k=b;return D.vsub(V.position,j),j.cross(et,B),V.invInertiaWorld.vmult(B,k),k.cross(j,Z),V.invMass+et.dot(Z)}var F=new r,Y=new r,q=new r;function K(V,D,et,j,B,X){var k=B.norm2();if(k>1.1)return 0;var T=F,C=Y,G=q;V.getVelocityAtWorldPoint(D,T),et.getVelocityAtWorldPoint(j,C),T.vsub(C,G);var J=B.dot(G),nt=1/(V.invMass+et.invMass),X=-.2*J*nt;return X}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var _=new d(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-f*x,f*_+m*x,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var R=this.particles[y];R.position.vsub(v.position,x),f!==R.id&&x.norm2()<_&&g.push(R)}};var c=new r,d=new r,h=new r,l=new r,u=new r,p=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var R=y.length,L=0,I=0;I!==R;I++){x.position.vsub(y[I].position,g);var N=g.norm(),w=this.w(N);L+=y[I].mass*w}this.densities[_]=L,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=d,b=h,O=l,F=u,Y=p,_=0;_!==v;_++){var q=this.particles[_];M.set(0,0,0),b.set(0,0,0);for(var K,V,y=this.neighbors[_],R=y.length,I=0;I!==R;I++){var D=y[I];q.position.vsub(D.position,F);var et=F.norm();K=-D.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+f)+this.pressures[I]/(this.densities[I]*this.densities[I]+f)),this.gradw(F,O),O.mult(K,O),M.vadd(O,M),D.velocity.vsub(q.velocity,Y),Y.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*D.mass,Y),V=this.nablaw(et),Y.mult(V,Y),b.vadd(Y,b)}b.mult(q.mass,b),M.mult(q.mass,M),q.force.vadd(b,q.force),q.force.vadd(M,q.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,p=new r,v=new r,g=new r,m=new r,f=new r;a.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,R=this.bodyA,L=this.bodyB,I=o,N=c,w=d,M=h,b=f,O=l,F=u,Y=p,q=v,K=g,V=m;this.getWorldAnchorA(O),this.getWorldAnchorB(F),O.vsub(R.position,Y),F.vsub(L.position,q),F.vsub(O,I);var D=I.norm();N.copy(I),N.normalize(),L.velocity.vsub(R.velocity,w),L.angularVelocity.cross(q,b),w.vadd(b,w),R.angularVelocity.cross(Y,b),w.vsub(b,w),N.mult(-_*(D-y)-x*w.dot(N),M),R.force.vsub(M,R.force),L.force.vadd(M,L.force),Y.cross(M,K),q.cross(M,V),R.torque.vsub(K,R.torque),L.torque.vadd(V,L.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,p=this.halfExtents.z,v=a,g=[new v(-l,-u,-p),new v(l,-u,-p),new v(l,u,-p),new v(-l,u,-p),new v(-l,-u,p),new v(l,-u,p),new v(l,u,p),new v(-l,u,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new a,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,p){var v=l;p.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==p.length;g++)u.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new a;new a,c.prototype.forEachWorldCorner=function(l,u,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),p(d.x,d.y,d.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,u,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];u.vmult(m,m),l.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<p.x&&(p.x=_),x<p.y&&(p.y=x),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(B,Z,k){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=B||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=Z||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=k?k.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new a;c.prototype.computeEdges=function(){var B=this.faces,Z=this.vertices;Z.length;var k=this.uniqueEdges;k.length=0;for(var T=d,C=0;C!==B.length;C++)for(var G=B[C],J=G.length,nt=0;nt!==J;nt++){var X=(nt+1)%J;Z[G[nt]].vsub(Z[G[X]],T),T.normalize();for(var at=!1,pt=0;pt!==k.length;pt++)if(k[pt].almostEquals(T)||k[pt].almostEquals(T)){at=!0;break}at||k.push(T.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var B=0;B<this.faces.length;B++){for(var Z=0;Z<this.faces[B].length;Z++)if(!this.vertices[this.faces[B][Z]])throw new Error("Vertex "+this.faces[B][Z]+" not found!");var k=this.faceNormals[B]||new a;this.getFaceNormal(B,k),k.negate(k),this.faceNormals[B]=k;var T=this.vertices[this.faces[B][0]];if(k.dot(T)<0){console.error(".faceNormals["+B+"] = Vec3("+k.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var Z=0;Z<this.faces[B].length;Z++)console.warn(".vertices["+this.faces[B][Z]+"] = Vec3("+this.vertices[this.faces[B][Z]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(B,Z,k,T){Z.vsub(B,l),k.vsub(Z,h),h.cross(l,T),T.isZero()||T.normalize()},c.prototype.getFaceNormal=function(B,Z){var k=this.faces[B],T=this.vertices[k[0]],C=this.vertices[k[1]],G=this.vertices[k[2]];return c.computeNormal(T,C,G,Z)};var u=new a;c.prototype.clipAgainstHull=function(B,Z,k,T,C,G,J,nt,X){for(var at=u,pt=-1,U=-Number.MAX_VALUE,Tt=0;Tt<k.faces.length;Tt++){at.copy(k.faceNormals[Tt]),C.vmult(at,at);var Mt=at.dot(G);Mt>U&&(U=Mt,pt=Tt)}for(var ht=[],ot=k.faces[pt],Kt=ot.length,At=0;At<Kt;At++){var kt=k.vertices[ot[At]],P=new a;P.copy(kt),C.vmult(P,P),T.vadd(P,P),ht.push(P)}pt>=0&&this.clipFaceAgainstHull(G,B,Z,ht,J,nt,X)};var p=new a,v=new a,g=new a,m=new a,f=new a,_=new a;c.prototype.findSeparatingAxis=function(B,Z,k,T,C,G,J,nt){var X=p,at=v,pt=g,U=m,Tt=f,Mt=_,ht=Number.MAX_VALUE,ot=this;if(ot.uniqueAxes)for(var At=0;At!==ot.uniqueAxes.length;At++){k.vmult(ot.uniqueAxes[At],X);var P=ot.testSepAxis(X,B,Z,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(X))}else for(var Kt=J?J.length:ot.faces.length,At=0;At<Kt;At++){var kt=J?J[At]:At;X.copy(ot.faceNormals[kt]),k.vmult(X,X);var P=ot.testSepAxis(X,B,Z,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(X))}if(B.uniqueAxes)for(var At=0;At!==B.uniqueAxes.length;At++){C.vmult(B.uniqueAxes[At],at);var P=ot.testSepAxis(at,B,Z,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(at))}else for(var A=nt?nt.length:B.faces.length,At=0;At<A;At++){var kt=nt?nt[At]:At;at.copy(B.faceNormals[kt]),C.vmult(at,at);var P=ot.testSepAxis(at,B,Z,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(at))}for(var Q=0;Q!==ot.uniqueEdges.length;Q++){k.vmult(ot.uniqueEdges[Q],U);for(var dt=0;dt!==B.uniqueEdges.length;dt++)if(C.vmult(B.uniqueEdges[dt],Tt),U.cross(Tt,Mt),!Mt.almostZero()){Mt.normalize();var vt=ot.testSepAxis(Mt,B,Z,k,T,C);if(vt===!1)return!1;vt<ht&&(ht=vt,G.copy(Mt))}}return T.vsub(Z,pt),pt.dot(G)>0&&G.negate(G),!0};var x=[],y=[];c.prototype.testSepAxis=function(B,Z,k,T,C,G){var J=this;c.project(J,B,k,T,x),c.project(Z,B,C,G,y);var nt=x[0],X=x[1],at=y[0],pt=y[1];if(nt<pt||at<X)return!1;var U=nt-pt,Tt=at-X,Mt=U<Tt?U:Tt;return Mt};var R=new a,L=new a;c.prototype.calculateLocalInertia=function(B,Z){this.computeLocalAABB(R,L);var k=L.x-R.x,T=L.y-R.y,C=L.z-R.z;Z.x=1/12*B*(2*T*2*T+2*C*2*C),Z.y=1/12*B*(2*k*2*k+2*C*2*C),Z.z=1/12*B*(2*T*2*T+2*k*2*k)},c.prototype.getPlaneConstantOfFace=function(B){var Z=this.faces[B],k=this.faceNormals[B],T=this.vertices[Z[0]],C=-k.dot(T);return C};var I=new a,N=new a,w=new a,M=new a,b=new a,O=new a,F=new a,Y=new a;c.prototype.clipFaceAgainstHull=function(B,Z,k,T,C,G,J){for(var nt=I,X=N,at=w,pt=M,U=b,Tt=O,Mt=F,ht=Y,ot=this,Kt=[],At=T,kt=Kt,P=-1,A=Number.MAX_VALUE,Q=0;Q<ot.faces.length;Q++){nt.copy(ot.faceNormals[Q]),k.vmult(nt,nt);var dt=nt.dot(B);dt<A&&(A=dt,P=Q)}if(!(P<0)){var vt=ot.faces[P];vt.connectedFaces=[];for(var ut=0;ut<ot.faces.length;ut++)for(var Ot=0;Ot<ot.faces[ut].length;Ot++)vt.indexOf(ot.faces[ut][Ot])!==-1&&ut!==P&&vt.connectedFaces.indexOf(ut)===-1&&vt.connectedFaces.push(ut);At.length;for(var yt=vt.length,Lt=0;Lt<yt;Lt++){var jt=ot.vertices[vt[Lt]],wt=ot.vertices[vt[(Lt+1)%yt]];jt.vsub(wt,X),at.copy(X),k.vmult(at,at),Z.vadd(at,at),pt.copy(this.faceNormals[P]),k.vmult(pt,pt),Z.vadd(pt,pt),at.cross(pt,U),U.negate(U),Tt.copy(jt),k.vmult(Tt,Tt),Z.vadd(Tt,Tt),-Tt.dot(U);var Yt;{var Vt=vt.connectedFaces[Lt];Mt.copy(this.faceNormals[Vt]);var ee=this.getPlaneConstantOfFace(Vt);ht.copy(Mt),k.vmult(ht,ht);var Yt=ee-ht.dot(Z)}for(this.clipFaceAgainstPlane(At,kt,ht,Yt);At.length;)At.shift();for(;kt.length;)At.push(kt.shift())}Mt.copy(this.faceNormals[P]);var ee=this.getPlaneConstantOfFace(P);ht.copy(Mt),k.vmult(ht,ht);for(var Yt=ee-ht.dot(Z),ut=0;ut<At.length;ut++){var zt=ht.dot(At[ut])+Yt;if(zt<=C&&(console.log("clamped: depth="+zt+" to minDist="+(C+"")),zt=C),zt<=G){var Jt=At[ut];if(zt<=0){var Qt={point:Jt,normal:ht,depth:zt};J.push(Qt)}}}}},c.prototype.clipFaceAgainstPlane=function(B,Z,k,T){var C,G,J=B.length;if(J<2)return Z;var nt=B[B.length-1],X=B[0];C=k.dot(nt)+T;for(var at=0;at<J;at++){if(X=B[at],G=k.dot(X)+T,C<0)if(G<0){var pt=new a;pt.copy(X),Z.push(pt)}else{var pt=new a;nt.lerp(X,C/(C-G),pt),Z.push(pt)}else if(G<0){var pt=new a;nt.lerp(X,C/(C-G),pt),Z.push(pt),Z.push(X)}nt=X,C=G}return Z},c.prototype.computeWorldVertices=function(B,Z){for(var k=this.vertices.length;this.worldVertices.length<k;)this.worldVertices.push(new a);for(var T=this.vertices,C=this.worldVertices,G=0;G!==k;G++)Z.vmult(T[G],C[G]),B.vadd(C[G],C[G]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(B,Z){var k=this.vertices.length,T=this.vertices;B.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Z.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<k;C++){var G=T[C];G.x<B.x?B.x=G.x:G.x>Z.x&&(Z.x=G.x),G.y<B.y?B.y=G.y:G.y>Z.y&&(Z.y=G.y),G.z<B.z?B.z=G.z:G.z>Z.z&&(Z.z=G.z)}},c.prototype.computeWorldFaceNormals=function(B){for(var Z=this.faceNormals.length;this.worldFaceNormals.length<Z;)this.worldFaceNormals.push(new a);for(var k=this.faceNormals,T=this.worldFaceNormals,C=0;C!==Z;C++)B.vmult(k[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var B=0,Z=this.vertices,k=0,T=Z.length;k!==T;k++){var C=Z[k].norm2();C>B&&(B=C)}this.boundingSphereRadius=Math.sqrt(B)};var q=new a;c.prototype.calculateWorldAABB=function(B,Z,k,T){for(var C=this.vertices.length,G=this.vertices,J,nt,X,at,pt,U,Tt=0;Tt<C;Tt++){q.copy(G[Tt]),Z.vmult(q,q),B.vadd(q,q);var Mt=q;Mt.x<J||J===void 0?J=Mt.x:(Mt.x>at||at===void 0)&&(at=Mt.x),Mt.y<nt||nt===void 0?nt=Mt.y:(Mt.y>pt||pt===void 0)&&(pt=Mt.y),Mt.z<X||X===void 0?X=Mt.z:(Mt.z>U||U===void 0)&&(U=Mt.z)}k.set(J,nt,X),T.set(at,pt,U)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(B){B=B||new a;for(var Z=this.vertices.length,k=this.vertices,T=0;T<Z;T++)B.vadd(k[T],B);return B.mult(1/Z,B),B},c.prototype.transformAllPoints=function(B,Z){var k=this.vertices.length,T=this.vertices;if(Z){for(var C=0;C<k;C++){var G=T[C];Z.vmult(G,G)}for(var C=0;C<this.faceNormals.length;C++){var G=this.faceNormals[C];Z.vmult(G,G)}}if(B)for(var C=0;C<k;C++){var G=T[C];G.vadd(B,G)}};var K=new a,V=new a,D=new a;c.prototype.pointIsInside=function(B){var Z=this.vertices.length,k=this.vertices,T=this.faces,C=this.faceNormals,G=null,J=this.faces.length,nt=K;this.getAveragePointLocal(nt);for(var X=0;X<J;X++){this.faces[X].length;var Z=C[X],at=k[T[X][0]],pt=V;B.vsub(at,pt);var U=Z.dot(pt),Tt=D;nt.vsub(at,Tt);var Mt=Z.dot(Tt);if(U<0&&Mt>0||U>0&&Mt<0)return!1}return G?1:-1},new a;var et=new a,j=new a;c.project=function(B,Z,k,T,C){var G=B.vertices.length,J=et,nt=0,X=0,at=j,pt=B.vertices;at.setZero(),o.vectorToLocalFrame(k,T,Z,J),o.pointToLocalFrame(k,T,at,at);var U=at.dot(J);X=nt=pt[0].dot(J);for(var Tt=1;Tt<G;Tt++){var Mt=pt[Tt].dot(J);Mt>nt&&(nt=Mt),Mt<X&&(X=Mt)}if(X-=U,nt-=U,X>nt){var ht=X;X=nt,nt=ht}C[0]=nt,C[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var p=u,v=[],g=[],m=[],f=[],_=[],x=Math.cos,y=Math.sin;v.push(new a(h*x(0),h*y(0),-l*.5)),f.push(0),v.push(new a(d*x(0),d*y(0),l*.5)),_.push(1);for(var R=0;R<p;R++){var L=2*Math.PI/p*(R+1),I=2*Math.PI/p*(R+.5);R<p-1?(v.push(new a(h*x(L),h*y(L),-l*.5)),f.push(2*R+2),v.push(new a(d*x(L),d*y(L),l*.5)),_.push(2*R+3),m.push([2*R+2,2*R+3,2*R+1,2*R])):m.push([0,1,2*R+1,2*R]),(p%2===1||R<p/2)&&g.push(new a(x(I),y(I),0))}m.push(_),g.push(new a(0,0,1));for(var N=[],R=0;R<f.length;R++)N.push(f[f.length-R-1]);m.push(N),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var p=this.data;p[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=u;f++)for(var _=l;_<=p;_++){var x=g[f][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return u[0]=m,u[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var p=[];this.getIndexOfPosition(h,l,p,u);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:p,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new a,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);f.length=5;for(var _=0;_<5;_++)f[_]||(f[_]=[]);var x=p.vertices,y=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,y),x[0].set(.25*m,.25*m,g[h+1][l+1]-y),x[1].set(-.75*m,.25*m,g[h][l+1]-y),x[2].set(.25*m,-.75*m,g[h+1][l]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,y),x[0].set(-.25*m,-.25*m,g[h][l]-y),x[1].set(.75*m,-.25*m,g[h+1][l]-y),x[2].set(-.25*m,.75*m,g[h][l+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,p,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,p){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new a,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),u.set(p,p,p),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new a;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(N,w){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(N),this.indices=new Int16Array(w),this.normals=new Float32Array(w.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var N=this.tree;N.reset(),N.aabb.copy(this.aabb);var w=this.scale;N.aabb.lowerBound.x*=1/w.x,N.aabb.lowerBound.y*=1/w.y,N.aabb.lowerBound.z*=1/w.z,N.aabb.upperBound.x*=1/w.x,N.aabb.upperBound.y*=1/w.y,N.aabb.upperBound.z*=1/w.z;for(var M=new c,b=new a,O=new a,F=new a,Y=[b,O,F],q=0;q<this.indices.length/3;q++){var K=q*3;this._getUnscaledVertex(this.indices[K],b),this._getUnscaledVertex(this.indices[K+1],O),this._getUnscaledVertex(this.indices[K+2],F),M.setFromPoints(Y),N.insert(M,q)}N.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(N,w){u.copy(N);var M=this.scale,b=M.x,O=M.y,F=M.z,Y=u.lowerBound,q=u.upperBound;return Y.x/=b,Y.y/=O,Y.z/=F,q.x/=b,q.y/=O,q.z/=F,this.tree.aabbQuery(u,w)},h.prototype.setScale=function(N){var w=this.scale.x===this.scale.y===this.scale.z,M=N.x===N.y===N.z;w&&M||this.updateNormals(),this.scale.copy(N),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var N=l,w=this.normals,M=0;M<this.indices.length/3;M++){var b=M*3,O=this.indices[b],F=this.indices[b+1],Y=this.indices[b+2];this.getVertex(O,f),this.getVertex(F,_),this.getVertex(Y,x),h.computeNormal(_,f,x,N),w[b]=N.x,w[b+1]=N.y,w[b+2]=N.z}},h.prototype.updateEdges=function(){for(var N={},w=function(K,V){var D=O<F?O+"_"+F:F+"_"+O;N[D]=!0},M=0;M<this.indices.length/3;M++){var b=M*3,O=this.indices[b],F=this.indices[b+1];this.indices[b+2],w(),w(),w()}var Y=Object.keys(N);this.edges=new Int16Array(Y.length*2);for(var M=0;M<Y.length;M++){var q=Y[M].split("_");this.edges[2*M]=parseInt(q[0],10),this.edges[2*M+1]=parseInt(q[1],10)}},h.prototype.getEdgeVertex=function(N,w,M){var b=this.edges[N*2+(w?1:0)];this.getVertex(b,M)};var p=new a,v=new a;h.prototype.getEdgeVector=function(N,w){var M=p,b=v;this.getEdgeVertex(N,0,M),this.getEdgeVertex(N,1,b),b.vsub(M,w)};var g=new a,m=new a;h.computeNormal=function(N,w,M,b){w.vsub(N,m),M.vsub(w,g),g.cross(m,b),b.isZero()||b.normalize()};var f=new a,_=new a,x=new a;h.prototype.getVertex=function(N,w){var M=this.scale;return this._getUnscaledVertex(N,w),w.x*=M.x,w.y*=M.y,w.z*=M.z,w},h.prototype._getUnscaledVertex=function(N,w){var M=N*3,b=this.vertices;return w.set(b[M],b[M+1],b[M+2])},h.prototype.getWorldVertex=function(N,w,M,b){return this.getVertex(N,b),o.pointToWorldFrame(w,M,b,b),b},h.prototype.getTriangleVertices=function(N,w,M,b){var O=N*3;this.getVertex(this.indices[O],w),this.getVertex(this.indices[O+1],M),this.getVertex(this.indices[O+2],b)},h.prototype.getNormal=function(N,w){var M=N*3;return w.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var y=new c;h.prototype.calculateLocalInertia=function(N,w){this.computeLocalAABB(y);var M=y.upperBound.x-y.lowerBound.x,b=y.upperBound.y-y.lowerBound.y,O=y.upperBound.z-y.lowerBound.z;return w.set(1/12*N*(2*b*2*b+2*O*2*O),1/12*N*(2*M*2*M+2*O*2*O),1/12*N*(2*b*2*b+2*M*2*M))};var R=new a;h.prototype.computeLocalAABB=function(N){var w=N.lowerBound,M=N.upperBound,b=this.vertices.length;this.vertices;var O=R;this.getVertex(0,O),w.copy(O),M.copy(O);for(var F=0;F!==b;F++)this.getVertex(F,O),O.x<w.x?w.x=O.x:O.x>M.x&&(M.x=O.x),O.y<w.y?w.y=O.y:O.y>M.y&&(M.y=O.y),O.z<w.z?w.z=O.z:O.z>M.z&&(M.z=O.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var N=0,w=this.vertices,M=new a,b=0,O=w.length/3;b!==O;b++){this.getVertex(b,M);var F=M.norm2();F>N&&(N=F)}this.boundingSphereRadius=Math.sqrt(N)},new a;var L=new o,I=new c;h.prototype.calculateWorldAABB=function(N,w,M,b){var O=L,F=I;O.position=N,O.quaternion=w,this.aabb.toWorldFrame(O,F),M.copy(F.lowerBound),b.copy(F.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(N,w,M,b,O){N=N||1,w=w||.5,M=M||8,b=b||6,O=O||Math.PI*2;for(var F=[],Y=[],q=0;q<=M;q++)for(var K=0;K<=b;K++){var V=K/b*O,D=q/M*Math.PI*2,et=(N+w*Math.cos(D))*Math.cos(V),j=(N+w*Math.cos(D))*Math.sin(V),B=w*Math.sin(D);F.push(et,j,B)}for(var q=1;q<=M;q++)for(var K=1;K<=b;K++){var Z=(b+1)*q+K-1,k=(b+1)*(q-1)+K-1,T=(b+1)*(q-1)+K,C=(b+1)*q+K;Y.push(Z,k,C),Y.push(k,T,C)}return new h(F,Y)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],d=[];a.prototype.solve=function(h,l){var u=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,_=f.length,x=h,y,R,L,I,N,w;if(m!==0)for(var M=0;M!==_;M++)f[M].updateSolveMassProperties();var b=c,O=d,F=o;b.length=m,O.length=m,F.length=m;for(var M=0;M!==m;M++){var Y=g[M];F[M]=0,O[M]=Y.computeB(x),b[M]=1/Y.computeC()}if(m!==0){for(var M=0;M!==_;M++){var q=f[M],K=q.vlambda,V=q.wlambda;K.set(0,0,0),V&&V.set(0,0,0)}for(u=0;u!==p;u++){I=0;for(var D=0;D!==m;D++){var Y=g[D];y=O[D],R=b[D],w=F[D],N=Y.computeGWlambda(),L=R*(y-N-Y.eps*w),w+L<Y.minForce?L=Y.minForce-w:w+L>Y.maxForce&&(L=Y.maxForce-w),F[D]+=L,I+=L>0?L:-L,Y.addToWlambda(L)}if(I*I<v)break}for(var M=0;M!==_;M++){var q=f[M],et=q.velocity,j=q.angularVelocity;et.vadd(q.vlambda,et),j&&j.vadd(q.wlambda,j)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=a.STATIC;function u(f){for(var _=f.length,x=0;x!==_;x++){var y=f[x];if(!y.visited&&!(y.body.type&l))return y}return!1}var p=[];function v(f,_,x,y){for(p.push(f),f.visited=!0,_(f,x,y);p.length;)for(var R=p.pop(),L;L=u(R.children);)L.visited=!0,_(L,x,y),p.push(L)}function g(f,_,x){_.push(f.body);for(var y=f.eqs.length,R=0;R!==y;R++){var L=f.eqs[R];x.indexOf(L)===-1&&x.push(L)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,_){for(var x=c,y=this.nodePool,R=_.bodies,L=this.equations,I=L.length,N=R.length,w=this.subsolver;y.length<N;)y.push(this.createNode());x.length=N;for(var M=0;M<N;M++)x[M]=y[M];for(var M=0;M!==N;M++){var b=x[M];b.body=R[M],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var O=0;O!==I;O++){var F=L[O],M=R.indexOf(F.bi),Y=R.indexOf(F.bj),q=x[M],K=x[Y];q.children.push(K),q.eqs.push(F),K.children.push(q),K.eqs.push(F)}var V,D=0,et=d;w.tolerance=this.tolerance,w.iterations=this.iterations;for(var j=h;V=u(x);){et.length=0,j.bodies.length=0,v(V,g,j.bodies,et);var B=et.length;et=et.sort(m);for(var M=0;M!==B;M++)w.addEquation(et[M]);w.solve(f,j),w.removeAllEquations(),D++}return D};function m(f,_){return _.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var d=c[a].indexOf(o);return d!==-1&&c[a].splice(d,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,u,p+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new a;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),p.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var _=f.aabb.lowerBound;_.x*=d.x,_.y*=d.y,_.z*=d.z,_.vadd(u,_),_.vadd(d,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(p,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,p){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),p=u.children.length-1;p>=0;p--)u.children[p].data.length||u.children.splice(p,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var d=o;o=a,a=d}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,ft,gt,xt,Zt,Nt){var Rt;this.contactPointPool.length?(Rt=this.contactPointPool.pop(),Rt.bi=lt,Rt.bj=ft):Rt=new u(lt,ft),Rt.enabled=lt.collisionResponse&&ft.collisionResponse&&gt.collisionResponse&&xt.collisionResponse;var Ut=this.currentContactMaterial;Rt.restitution=Ut.restitution,Rt.setSpookParams(Ut.contactEquationStiffness,Ut.contactEquationRelaxation,this.world.dt);var st=gt.material||lt.material,It=xt.material||ft.material;return st&&It&&st.restitution>=0&&It.restitution>=0&&(Rt.restitution=st.restitution*It.restitution),Rt.si=Zt||gt,Rt.sj=Nt||xt,Rt},v.prototype.createFrictionEquationsFromContact=function(lt,ft){var gt=lt.bi,xt=lt.bj,Zt=lt.si,Nt=lt.sj,Rt=this.world,Ut=this.currentContactMaterial,st=Ut.friction,It=Zt.material||gt.material,Ft=Nt.material||xt.material;if(It&&Ft&&It.friction>=0&&Ft.friction>=0&&(st=It.friction*Ft.friction),st>0){var Gt=st*Rt.gravity.length(),Dt=gt.invMass+xt.invMass;Dt>0&&(Dt=1/Dt);var Pt=this.frictionEquationPool,E=Pt.length?Pt.pop():new p(gt,xt,Gt*Dt),H=Pt.length?Pt.pop():new p(gt,xt,Gt*Dt);return E.bi=H.bi=gt,E.bj=H.bj=xt,E.minForce=H.minForce=-Gt*Dt,E.maxForce=H.maxForce=Gt*Dt,E.ri.copy(lt.ri),E.rj.copy(lt.rj),H.ri.copy(lt.ri),H.rj.copy(lt.rj),lt.ni.tangents(E.t,H.t),E.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Rt.dt),H.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Rt.dt),E.enabled=H.enabled=lt.enabled,ft.push(E,H),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(lt){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||lt===1)){var gt=this.frictionResult[this.frictionResult.length-2],xt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var Zt=ft.bi;ft.bj;for(var Nt=0;Nt!==lt;Nt++)ft=this.result[this.result.length-1-Nt],ft.bodyA!==Zt?(g.vadd(ft.ni,g),m.vadd(ft.ri,m),f.vadd(ft.rj,f)):(g.vsub(ft.ni,g),m.vadd(ft.rj,m),f.vadd(ft.ri,f));var Rt=1/lt;m.scale(Rt,gt.ri),f.scale(Rt,gt.rj),xt.ri.copy(gt.ri),xt.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,xt.t)}};var _=new c,x=new c,y=new h,R=new h;v.prototype.getContacts=function(lt,ft,gt,xt,Zt,Nt,Rt){this.contactPointPool=Zt,this.frictionEquationPool=Rt,this.result=xt,this.frictionResult=Nt;for(var Ut=y,st=R,It=_,Ft=x,Gt=0,Dt=lt.length;Gt!==Dt;Gt++){var Pt=lt[Gt],E=ft[Gt],H=null;Pt.material&&E.material&&(H=gt.getContactMaterial(Pt.material,E.material)||null);for(var $=0;$<Pt.shapes.length;$++){Pt.quaternion.mult(Pt.shapeOrientations[$],Ut),Pt.quaternion.vmult(Pt.shapeOffsets[$],It),It.vadd(Pt.position,It);for(var z=Pt.shapes[$],W=0;W<E.shapes.length;W++){E.quaternion.mult(E.shapeOrientations[W],st),E.quaternion.vmult(E.shapeOffsets[W],Ft),Ft.vadd(E.position,Ft);var mt=E.shapes[W];if(!(It.distanceTo(Ft)>z.boundingSphereRadius+mt.boundingSphereRadius)){var Ct=null;z.material&&mt.material&&(Ct=gt.getContactMaterial(z.material,mt.material)||null),this.currentContactMaterial=Ct||H||gt.defaultContactMaterial;var St=this[z.type|mt.type];St&&(z.type<mt.type?St.call(this,z,mt,It,Ft,Ut,st,Pt,E,z,mt):St.call(this,mt,z,Ft,It,st,Ut,E,Pt,z,mt))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,ft.convexPolyhedronRepresentation.material=ft.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=this.createContactEquation(Rt,Ut,lt,ft);xt.vsub(gt,st.ni),st.ni.normalize(),st.ri.copy(st.ni),st.rj.copy(st.ni),st.ri.mult(lt.radius,st.ri),st.rj.mult(-ft.radius,st.rj),st.ri.vadd(gt,st.ri),st.ri.vsub(Rt.position,st.ri),st.rj.vadd(xt,st.rj),st.rj.vsub(Ut.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)};var L=new c,I=new c,N=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=new c,It=L;It.set(0,0,1),Zt.vmult(It,It);for(var Ft=0;Ft<ft.vertices.length/3;Ft++){ft.getVertex(Ft,st);var Gt=new c;Gt.copy(st),d.pointToWorldFrame(xt,Nt,Gt,st);var Dt=I;st.vsub(gt,Dt);var Pt=It.dot(Dt);if(Pt<=0){var E=this.createContactEquation(Rt,Ut,lt,ft);E.ni.copy(It);var H=N;It.scale(Dt.dot(It),H),st.vsub(H,H),E.ri.copy(H),E.ri.vsub(Rt.position,E.ri),E.rj.copy(st),E.rj.vsub(Ut.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}}};var w=new c,M=new c;new c;var b=new c,O=new c,F=new c,Y=new c,q=new c,K=new c,V=new c,D=new c,et=new c,j=new c,B=new c,Z=new r,k=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=F,It=Y,Ft=q,Gt=K,Dt=V,Pt=D,E=Z,H=O,$=M,z=k;d.pointToLocalFrame(xt,Nt,gt,Dt);var W=lt.radius;E.lowerBound.set(Dt.x-W,Dt.y-W,Dt.z-W),E.upperBound.set(Dt.x+W,Dt.y+W,Dt.z+W),ft.getTrianglesInAABB(E,z);for(var mt=b,Ct=lt.radius*lt.radius,St=0;St<z.length;St++)for(var bt=0;bt<3;bt++)if(ft.getVertex(ft.indices[z[St]*3+bt],mt),mt.vsub(Dt,$),$.norm2()<=Ct){H.copy(mt),d.pointToWorldFrame(xt,Nt,H,mt),mt.vsub(gt,$);var Et=this.createContactEquation(Rt,Ut,lt,ft);Et.ni.copy($),Et.ni.normalize(),Et.ri.copy(Et.ni),Et.ri.scale(lt.radius,Et.ri),Et.ri.vadd(gt,Et.ri),Et.ri.vsub(Rt.position,Et.ri),Et.rj.copy(mt),Et.rj.vsub(Ut.position,Et.rj),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}for(var St=0;St<z.length;St++)for(var bt=0;bt<3;bt++){ft.getVertex(ft.indices[z[St]*3+bt],st),ft.getVertex(ft.indices[z[St]*3+(bt+1)%3],It),It.vsub(st,Ft),Dt.vsub(It,Pt);var $t=Pt.dot(Ft);Dt.vsub(st,Pt);var qt=Pt.dot(Ft);if(qt>0&&$t<0){Dt.vsub(st,Pt),Gt.copy(Ft),Gt.normalize(),qt=Pt.dot(Gt),Gt.scale(qt,Pt),Pt.vadd(st,Pt);var ne=Pt.distanceTo(Dt);if(ne<lt.radius){var Et=this.createContactEquation(Rt,Ut,lt,ft);Pt.vsub(Dt,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),d.pointToWorldFrame(xt,Nt,Pt,Pt),Pt.vsub(Ut.position,Et.rj),d.vectorToWorldFrame(Nt,Et.ni,Et.ni),d.vectorToWorldFrame(Nt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}}for(var pe=et,ue=j,se=B,oe=w,St=0,Bt=z.length;St!==Bt;St++){ft.getTriangleVertices(z[St],pe,ue,se),ft.getNormal(z[St],oe),Dt.vsub(pe,Pt);var ne=Pt.dot(oe);if(oe.scale(ne,Pt),Dt.vsub(Pt,Pt),ne=Pt.distanceTo(Dt),o.pointInTriangle(Pt,pe,ue,se)&&ne<lt.radius){var Et=this.createContactEquation(Rt,Ut,lt,ft);Pt.vsub(Dt,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),d.pointToWorldFrame(xt,Nt,Pt,Pt),Pt.vsub(Ut.position,Et.rj),d.vectorToWorldFrame(Nt,Et.ni,Et.ni),d.vectorToWorldFrame(Nt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}z.length=0};var T=new c,C=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=this.createContactEquation(Rt,Ut,lt,ft);if(st.ni.set(0,0,1),Nt.vmult(st.ni,st.ni),st.ni.negate(st.ni),st.ni.normalize(),st.ni.mult(lt.radius,st.ri),gt.vsub(xt,T),st.ni.mult(st.ni.dot(T),C),T.vsub(C,st.rj),-T.dot(st.ni)<=lt.radius){var It=st.ri,Ft=st.rj;It.vadd(gt,It),It.vsub(Rt.position,It),Ft.vadd(xt,Ft),Ft.vsub(Ut.position,Ft),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}};var G=new c,J=new c,nt=new c;function X(lt,ft,gt){for(var xt=null,Zt=lt.length,Nt=0;Nt!==Zt;Nt++){var Rt=lt[Nt],Ut=G;lt[(Nt+1)%Zt].vsub(Rt,Ut);var st=J;Ut.cross(ft,st);var It=nt;gt.vsub(Rt,It);var Ft=st.dot(It);if(xt===null||Ft>0&&xt===!0||Ft<=0&&xt===!1){xt===null&&(xt=Ft>0);continue}else return!1}return!0}var at=new c,pt=new c,U=new c,Tt=new c,Mt=[new c,new c,new c,new c,new c,new c],ht=new c,ot=new c,Kt=new c,At=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=this.v3pool,It=Mt;gt.vsub(xt,at),ft.getSideNormals(It,Nt);for(var Ft=lt.radius,Gt=!1,Dt=ot,Pt=Kt,E=At,H=null,$=0,z=0,W=0,mt=null,Ct=0,St=It.length;Ct!==St&&Gt===!1;Ct++){var bt=pt;bt.copy(It[Ct]);var Et=bt.norm();bt.normalize();var $t=at.dot(bt);if($t<Et+Ft&&$t>0){var qt=U,ne=Tt;qt.copy(It[(Ct+1)%3]),ne.copy(It[(Ct+2)%3]);var pe=qt.norm(),ue=ne.norm();qt.normalize(),ne.normalize();var se=at.dot(qt),oe=at.dot(ne);if(se<pe&&se>-pe&&oe<ue&&oe>-ue){var Ae=Math.abs($t-Et-Ft);(mt===null||Ae<mt)&&(mt=Ae,z=se,W=oe,H=Et,Dt.copy(bt),Pt.copy(qt),E.copy(ne),$++)}}}if($){Gt=!0;var Wt=this.createContactEquation(Rt,Ut,lt,ft);Dt.mult(-Ft,Wt.ri),Wt.ni.copy(Dt),Wt.ni.negate(Wt.ni),Dt.mult(H,Dt),Pt.mult(z,Pt),Dt.vadd(Pt,Dt),E.mult(W,E),Dt.vadd(E,Wt.rj),Wt.ri.vadd(gt,Wt.ri),Wt.ri.vsub(Rt.position,Wt.ri),Wt.rj.vadd(xt,Wt.rj),Wt.rj.vsub(Ut.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}for(var Bt=st.get(),_e=ht,ie=0;ie!==2&&!Gt;ie++)for(var ge=0;ge!==2&&!Gt;ge++)for(var Se=0;Se!==2&&!Gt;Se++)if(Bt.set(0,0,0),ie?Bt.vadd(It[0],Bt):Bt.vsub(It[0],Bt),ge?Bt.vadd(It[1],Bt):Bt.vsub(It[1],Bt),Se?Bt.vadd(It[2],Bt):Bt.vsub(It[2],Bt),xt.vadd(Bt,_e),_e.vsub(gt,_e),_e.norm2()<Ft*Ft){Gt=!0;var Wt=this.createContactEquation(Rt,Ut,lt,ft);Wt.ri.copy(_e),Wt.ri.normalize(),Wt.ni.copy(Wt.ri),Wt.ri.mult(Ft,Wt.ri),Wt.rj.copy(Bt),Wt.ri.vadd(gt,Wt.ri),Wt.ri.vsub(Rt.position,Wt.ri),Wt.rj.vadd(xt,Wt.rj),Wt.rj.vsub(Ut.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}st.release(Bt),Bt=null;for(var ye=st.get(),qe=st.get(),Wt=st.get(),we=st.get(),Ae=st.get(),Te=It.length,ie=0;ie!==Te&&!Gt;ie++)for(var ge=0;ge!==Te&&!Gt;ge++)if(ie%3!==ge%3){It[ge].cross(It[ie],ye),ye.normalize(),It[ie].vadd(It[ge],qe),Wt.copy(gt),Wt.vsub(qe,Wt),Wt.vsub(xt,Wt);var Qe=Wt.dot(ye);ye.mult(Qe,we);for(var Se=0;Se===ie%3||Se===ge%3;)Se++;Ae.copy(gt),Ae.vsub(we,Ae),Ae.vsub(qe,Ae),Ae.vsub(xt,Ae);var qr=Math.abs(Qe),Qi=Ae.norm();if(qr<It[Se].norm()&&Qi<Ft){Gt=!0;var Ee=this.createContactEquation(Rt,Ut,lt,ft);qe.vadd(we,Ee.rj),Ee.rj.copy(Ee.rj),Ae.negate(Ee.ni),Ee.ni.normalize(),Ee.ri.copy(Ee.rj),Ee.ri.vadd(xt,Ee.ri),Ee.ri.vsub(gt,Ee.ri),Ee.ri.normalize(),Ee.ri.mult(Ft,Ee.ri),Ee.ri.vadd(gt,Ee.ri),Ee.ri.vsub(Rt.position,Ee.ri),Ee.rj.vadd(xt,Ee.rj),Ee.rj.vsub(Ut.position,Ee.rj),this.result.push(Ee),this.createFrictionEquationsFromContact(Ee,this.frictionResult)}}st.release(ye,qe,Wt,we,Ae)};var kt=new c,P=new c,A=new c,Q=new c,dt=new c,vt=new c,ut=new c,Ot=new c,yt=new c,Lt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=this.v3pool;gt.vsub(xt,kt);for(var It=ft.faceNormals,Ft=ft.faces,Gt=ft.vertices,Dt=lt.radius,Pt=0;Pt!==Gt.length;Pt++){var E=Gt[Pt],H=dt;Nt.vmult(E,H),xt.vadd(H,H);var $=Q;if(H.vsub(gt,$),$.norm2()<Dt*Dt){W=!0;var z=this.createContactEquation(Rt,Ut,lt,ft);z.ri.copy($),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Dt,z.ri),H.vsub(xt,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var W=!1,Pt=0,mt=Ft.length;Pt!==mt&&W===!1;Pt++){var Ct=It[Pt],St=Ft[Pt],bt=vt;Nt.vmult(Ct,bt);var Et=ut;Nt.vmult(Gt[St[0]],Et),Et.vadd(xt,Et);var $t=Ot;bt.mult(-Dt,$t),gt.vadd($t,$t);var qt=yt;$t.vsub(Et,qt);var ne=qt.dot(bt),pe=Lt;if(gt.vsub(Et,pe),ne<0&&pe.dot(bt)>0){for(var ue=[],se=0,oe=St.length;se!==oe;se++){var Bt=st.get();Nt.vmult(Gt[St[se]],Bt),xt.vadd(Bt,Bt),ue.push(Bt)}if(X(ue,bt,gt)){W=!0;var z=this.createContactEquation(Rt,Ut,lt,ft);bt.mult(-Dt,z.ri),bt.negate(z.ni);var _e=st.get();bt.mult(-ne,_e);var ie=st.get();bt.mult(-Dt,ie),gt.vsub(xt,z.rj),z.rj.vadd(ie,z.rj),z.rj.vadd(_e,z.rj),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),st.release(_e),st.release(ie),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var se=0,ge=ue.length;se!==ge;se++)st.release(ue[se]);return}else for(var se=0;se!==St.length;se++){var Se=st.get(),ye=st.get();Nt.vmult(Gt[St[(se+1)%St.length]],Se),Nt.vmult(Gt[St[(se+2)%St.length]],ye),xt.vadd(Se,Se),xt.vadd(ye,ye);var qe=P;ye.vsub(Se,qe);var Wt=A;qe.unit(Wt);var we=st.get(),Ae=st.get();gt.vsub(Se,Ae);var Te=Ae.dot(Wt);Wt.mult(Te,we),we.vadd(Se,we);var Qe=st.get();if(we.vsub(gt,Qe),Te>0&&Te*Te<qe.norm2()&&Qe.norm2()<Dt*Dt){var z=this.createContactEquation(Rt,Ut,lt,ft);we.vsub(xt,z.rj),we.vsub(gt,z.ni),z.ni.normalize(),z.ni.mult(Dt,z.ri),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var se=0,ge=ue.length;se!==ge;se++)st.release(ue[se]);st.release(Se),st.release(ye),st.release(we),st.release(Qe),st.release(Ae);return}st.release(Se),st.release(ye),st.release(we),st.release(Qe),st.release(Ae)}for(var se=0,ge=ue.length;se!==ge;se++)st.release(ue[se])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(lt,ft.convexPolyhedronRepresentation,gt,xt,Zt,Nt,Rt,Ut)};var jt=new c,wt=new c,Vt=new c,ee=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=jt,It=wt;It.set(0,0,1),Zt.vmult(It,It);for(var Ft=0,Gt=Vt,Dt=0;Dt!==ft.vertices.length;Dt++){st.copy(ft.vertices[Dt]),Nt.vmult(st,st),xt.vadd(st,st),st.vsub(gt,Gt);var Pt=It.dot(Gt);if(Pt<=0){var E=this.createContactEquation(Rt,Ut,lt,ft),H=ee;It.mult(It.dot(Gt),H),st.vsub(H,H),H.vsub(gt,E.ri),E.ni.copy(It),st.vsub(xt,E.rj),E.ri.vadd(gt,E.ri),E.ri.vsub(Rt.position,E.ri),E.rj.vadd(xt,E.rj),E.rj.vsub(Ut.position,E.rj),this.result.push(E),Ft++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}}this.enableFrictionReduction&&Ft&&this.createFrictionFromAverage(Ft)};var Yt=new c,zt=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut,st,It,Ft,Gt){var Dt=Yt;if(!(gt.distanceTo(xt)>lt.boundingSphereRadius+ft.boundingSphereRadius)&&lt.findSeparatingAxis(ft,gt,Zt,xt,Nt,Dt,Ft,Gt)){var Pt=[],E=zt;lt.clipAgainstHull(gt,Zt,ft,xt,Nt,Dt,-100,100,Pt);for(var H=0,$=0;$!==Pt.length;$++){var z=this.createContactEquation(Rt,Ut,lt,ft,st,It),W=z.ri,mt=z.rj;Dt.negate(z.ni),Pt[$].normal.negate(E),E.mult(Pt[$].depth,E),Pt[$].point.vadd(E,W),mt.copy(Pt[$].point),W.vsub(gt,W),mt.vsub(xt,mt),W.vadd(gt,W),W.vsub(Rt.position,W),mt.vadd(xt,mt),mt.vsub(Ut.position,mt),this.result.push(z),H++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&H&&this.createFrictionFromAverage(H)}};var Jt=new c,Qt=new c,de=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=Jt;st.set(0,0,1),Rt.quaternion.vmult(st,st);var It=Qt;xt.vsub(Rt.position,It);var Ft=st.dot(It);if(Ft<=0){var Gt=this.createContactEquation(Ut,Rt,ft,lt);Gt.ni.copy(st),Gt.ni.negate(Gt.ni),Gt.ri.set(0,0,0);var Dt=de;st.mult(st.dot(xt),Dt),xt.vsub(Dt,Dt),Gt.rj.copy(Dt),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}};var S=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=S;st.set(0,0,1),xt.vsub(gt,st);var It=st.norm2();if(It<=lt.radius*lt.radius){var Ft=this.createContactEquation(Ut,Rt,ft,lt);st.normalize(),Ft.rj.copy(st),Ft.rj.mult(lt.radius,Ft.rj),Ft.ni.copy(st),Ft.ni.negate(Ft.ni),Ft.ri.set(0,0,0),this.result.push(Ft),this.createFrictionEquationsFromContact(Ft,this.frictionResult)}};var tt=new h,rt=new c;new c;var ct=new c,_t=new c,Xt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=-1,It=ct,Ft=Xt,Gt=null,Dt=rt;if(Dt.copy(xt),Dt.vsub(gt,Dt),Zt.conjugate(tt),tt.vmult(Dt,Dt),lt.pointIsInside(Dt)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(gt,Zt),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(Zt);for(var Pt=0,E=lt.faces.length;Pt!==E;Pt++){var H=[lt.worldVertices[lt.faces[Pt][0]]],$=lt.worldFaceNormals[Pt];xt.vsub(H[0],_t);var z=-$.dot(_t);(Gt===null||Math.abs(z)<Math.abs(Gt))&&(Gt=z,st=Pt,It.copy($))}if(st!==-1){var W=this.createContactEquation(Ut,Rt,ft,lt);It.mult(Gt,Ft),Ft.vadd(xt,Ft),Ft.vsub(gt,Ft),W.rj.copy(Ft),It.negate(W.ni),W.ri.set(0,0,0);var mt=W.ri,Ct=W.rj;mt.vadd(xt,mt),mt.vsub(Ut.position,mt),Ct.vadd(gt,Ct),Ct.vsub(Rt.position,Ct),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut)};var te=new c,me=new c,xe=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=ft.data,It=ft.elementSize,Ft=lt.boundingSphereRadius,Gt=me,Dt=xe,Pt=te;d.pointToLocalFrame(xt,Nt,gt,Pt);var E=Math.floor((Pt.x-Ft)/It)-1,H=Math.ceil((Pt.x+Ft)/It)+1,$=Math.floor((Pt.y-Ft)/It)-1,z=Math.ceil((Pt.y+Ft)/It)+1;if(!(H<0||z<0||E>st.length||$>st[0].length)){E<0&&(E=0),H<0&&(H=0),$<0&&($=0),z<0&&(z=0),E>=st.length&&(E=st.length-1),H>=st.length&&(H=st.length-1),z>=st[0].length&&(z=st[0].length-1),$>=st[0].length&&($=st[0].length-1);var W=[];ft.getRectMinMax(E,$,H,z,W);var mt=W[0],Ct=W[1];if(!(Pt.z-Ft>Ct||Pt.z+Ft<mt))for(var St=E;St<H;St++)for(var bt=$;bt<z;bt++)ft.getConvexTrianglePillar(St,bt,!1),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut,null,null,Dt,null),ft.getConvexTrianglePillar(St,bt,!0),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut,null,null,Dt,null)}};var ae=new c,he=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var st=ft.data,It=lt.radius,Ft=ft.elementSize,Gt=he,Dt=ae;d.pointToLocalFrame(xt,Nt,gt,Dt);var Pt=Math.floor((Dt.x-It)/Ft)-1,E=Math.ceil((Dt.x+It)/Ft)+1,H=Math.floor((Dt.y-It)/Ft)-1,$=Math.ceil((Dt.y+It)/Ft)+1;if(!(E<0||$<0||Pt>st.length||$>st[0].length)){Pt<0&&(Pt=0),E<0&&(E=0),H<0&&(H=0),$<0&&($=0),Pt>=st.length&&(Pt=st.length-1),E>=st.length&&(E=st.length-1),$>=st[0].length&&($=st[0].length-1),H>=st[0].length&&(H=st[0].length-1);var z=[];ft.getRectMinMax(Pt,H,E,$,z);var W=z[0],mt=z[1];if(!(Dt.z-It>mt||Dt.z+It<W))for(var Ct=this.result,St=Pt;St<E;St++)for(var bt=H;bt<$;bt++){var Et=Ct.length;ft.getConvexTrianglePillar(St,bt,!1),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut),ft.getConvexTrianglePillar(St,bt,!0),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut);var $t=Ct.length-Et;if($t>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=y;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new x,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new f;var R=new _;if(y.prototype.getContactMaterial=function(D,et){return this.contactMaterialTable.get(D.id,et.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(D){this.constraints.push(D)},y.prototype.removeConstraint=function(D){var et=this.constraints.indexOf(D);et!==-1&&this.constraints.splice(et,1)},y.prototype.rayTest=function(D,et,j){j instanceof m?this.raycastClosest(D,et,{skipBackfaces:!0},j):this.raycastAll(D,et,{skipBackfaces:!0},j)},y.prototype.raycastAll=function(D,et,j,B){return j.mode=_.ALL,j.from=D,j.to=et,j.callback=B,R.intersectWorld(this,j)},y.prototype.raycastAny=function(D,et,j,B){return j.mode=_.ANY,j.from=D,j.to=et,j.result=B,R.intersectWorld(this,j)},y.prototype.raycastClosest=function(D,et,j,B){return j.mode=_.CLOSEST,j.from=D,j.to=et,j.result=B,R.intersectWorld(this,j)},y.prototype.remove=function(D){D.world=null;var et=this.bodies.length-1,j=this.bodies,B=j.indexOf(D);if(B!==-1){j.splice(B,1);for(var Z=0;Z!==j.length;Z++)j[Z].index=Z;this.collisionMatrix.setNumObjects(et),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(D){this.materials.push(D)},y.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var L=Date.now();performance.timing&&performance.timing.navigationStart&&(L=performance.timing.navigationStart),performance.now=function(){return Date.now()-L}}var I=new a;y.prototype.step=function(D,et,j){if(j=j||10,et=et||0,et===0)this.internalStep(D),this.time+=D;else{var B=Math.floor((this.time+et)/D)-Math.floor(this.time/D);B=Math.min(B,j);for(var Z=performance.now(),k=0;k!==B&&(this.internalStep(D),!(performance.now()-Z>D*1e3));k++);this.time+=et;for(var T=this.time%D,C=T/D,G=I,J=this.bodies,nt=0;nt!==J.length;nt++){var X=J[nt];X.type!==v.STATIC&&X.sleepState!==v.SLEEPING?(X.position.vsub(X.previousPosition,G),G.scale(C,G),X.position.vadd(G,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var N={type:"postStep"},w={type:"preStep"},M={type:"collide",body:null,contact:null},b=[],O=[],F=[],Y=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var q=new o,K=new o,V=new a;y.prototype.internalStep=function(D){this.dt=D;var et=this.contacts,j=F,B=Y,Z=this.numObjects(),k=this.bodies,T=this.solver,C=this.gravity,G=this.doProfiling,J=this.profile,nt=v.DYNAMIC,X,at=this.constraints,pt=O;C.norm();var U=C.x,Tt=C.y,Mt=C.z,ht=0;for(G&&(X=performance.now()),ht=0;ht!==Z;ht++){var ot=k[ht];if(ot.type&nt){var Kt=ot.force,At=ot.mass;Kt.x+=At*U,Kt.y+=At*Tt,Kt.z+=At*Mt}}for(var ht=0,kt=this.subsystems.length;ht!==kt;ht++)this.subsystems[ht].update();G&&(X=performance.now()),j.length=0,B.length=0,this.broadphase.collisionPairs(this,j,B),G&&(J.broadphase=performance.now()-X);var Yt=at.length;for(ht=0;ht!==Yt;ht++){var P=at[ht];if(!P.collideConnected)for(var A=j.length-1;A>=0;A-=1)(P.bodyA===j[A]&&P.bodyB===B[A]||P.bodyB===j[A]&&P.bodyA===B[A])&&(j.splice(A,1),B.splice(A,1))}this.collisionMatrixTick(),G&&(X=performance.now());var Q=b,dt=et.length;for(ht=0;ht!==dt;ht++)Q.push(et[ht]);et.length=0;var vt=this.frictionEquations.length;for(ht=0;ht!==vt;ht++)pt.push(this.frictionEquations[ht]);this.frictionEquations.length=0,this.narrowphase.getContacts(j,B,this,et,Q,this.frictionEquations,pt),G&&(J.narrowphase=performance.now()-X),G&&(X=performance.now());for(var ht=0;ht<this.frictionEquations.length;ht++)T.addEquation(this.frictionEquations[ht]);for(var ut=et.length,Ot=0;Ot!==ut;Ot++){var P=et[Ot],ot=P.bi,yt=P.bj;P.si,P.sj;var Lt;if(ot.material&&yt.material?Lt=this.getContactMaterial(ot.material,yt.material)||this.defaultContactMaterial:Lt=this.defaultContactMaterial,Lt.friction,ot.material&&yt.material&&(ot.material.friction>=0&&yt.material.friction>=0&&ot.material.friction*yt.material.friction,ot.material.restitution>=0&&yt.material.restitution>=0&&(P.restitution=ot.material.restitution*yt.material.restitution)),T.addEquation(P),ot.allowSleep&&ot.type===v.DYNAMIC&&ot.sleepState===v.SLEEPING&&yt.sleepState===v.AWAKE&&yt.type!==v.STATIC){var jt=yt.velocity.norm2()+yt.angularVelocity.norm2(),wt=Math.pow(yt.sleepSpeedLimit,2);jt>=wt*2&&(ot._wakeUpAfterNarrowphase=!0)}if(yt.allowSleep&&yt.type===v.DYNAMIC&&yt.sleepState===v.SLEEPING&&ot.sleepState===v.AWAKE&&ot.type!==v.STATIC){var Vt=ot.velocity.norm2()+ot.angularVelocity.norm2(),ee=Math.pow(ot.sleepSpeedLimit,2);Vt>=ee*2&&(yt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ot,yt,!0),this.collisionMatrixPrevious.get(ot,yt)||(M.body=yt,M.contact=P,ot.dispatchEvent(M),M.body=ot,yt.dispatchEvent(M))}for(G&&(J.makeContactConstraints=performance.now()-X,X=performance.now()),ht=0;ht!==Z;ht++){var ot=k[ht];ot._wakeUpAfterNarrowphase&&(ot.wakeUp(),ot._wakeUpAfterNarrowphase=!1)}var Yt=at.length;for(ht=0;ht!==Yt;ht++){var P=at[ht];P.update();for(var A=0,zt=P.equations.length;A!==zt;A++){var Jt=P.equations[A];T.addEquation(Jt)}}T.solve(D,this),G&&(J.solve=performance.now()-X),T.removeAllEquations();var Qt=Math.pow;for(ht=0;ht!==Z;ht++){var ot=k[ht];if(ot.type&nt){var de=Qt(1-ot.linearDamping,D),S=ot.velocity;S.mult(de,S);var tt=ot.angularVelocity;if(tt){var rt=Qt(1-ot.angularDamping,D);tt.mult(rt,tt)}}}for(this.dispatchEvent(w),ht=0;ht!==Z;ht++){var ot=k[ht];ot.preStep&&ot.preStep.call(ot)}G&&(X=performance.now());var ct=q,_t=K,Xt=this.stepnumber,te=v.DYNAMIC|v.KINEMATIC,me=Xt%(this.quatNormalizeSkip+1)===0,xe=this.quatNormalizeFast,ae=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ht=0;ht!==Z;ht++){var he=k[ht],lt=he.force,ft=he.torque;if(he.type&te&&he.sleepState!==v.SLEEPING){var gt=he.velocity,xt=he.angularVelocity,Zt=he.position,Nt=he.quaternion,Rt=he.invMass,Ut=he.invInertiaWorld;gt.x+=lt.x*Rt*D,gt.y+=lt.y*Rt*D,gt.z+=lt.z*Rt*D,he.angularVelocity&&(Ut.vmult(ft,V),V.mult(D,V),V.vadd(xt,xt)),Zt.x+=gt.x*D,Zt.y+=gt.y*D,Zt.z+=gt.z*D,he.angularVelocity&&(ct.set(xt.x,xt.y,xt.z,0),ct.mult(Nt,_t),Nt.x+=ae*_t.x,Nt.y+=ae*_t.y,Nt.z+=ae*_t.z,Nt.w+=ae*_t.w,me&&(xe?Nt.normalizeFast():Nt.normalize())),he.aabb&&(he.aabbNeedsUpdate=!0),he.updateInertiaWorld&&he.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(J.integrate=performance.now()-X),this.time+=D,this.stepnumber+=1,this.dispatchEvent(N),ht=0;ht!==Z;ht++){var ot=k[ht],st=ot.postStep;st&&st.call(ot)}if(this.allowSleep)for(ht=0;ht!==Z;ht++)k[ht].sleepTick(this.time)},y.prototype.clearForces=function(){for(var D=this.bodies,et=D.length,j=0;j!==et;j++){var B=D[j];B.force,B.torque,B.force.set(0,0,0),B.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(yl);var rm=yl.exports;const Xe=im(rm);new _a;const Ml=document.querySelector("canvas.webgl"),wn=new Pp,sm=new kp(5);wn.add(sm);new Fp;const am=new Up,Sl=am.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),Vn=new Xe.World;Vn.gravity.set(0,-9.82,0);const Uo=new Xe.Material("default"),Fi=new Xe.ContactMaterial(Uo,Uo,{friction:1e3,restitution:0});Vn.addContactMaterial(Fi);Vn.defaultContactMaterial=Fi;const om=new Xe.Sphere(.25),Pe=new Xe.Body({mass:1,position:new Xe.Vec3(0,.25,0),shape:om,material:Fi});Vn.addBody(Pe);const lm=new Xe.Plane,Ji=new Xe.Body;Ji.material=Fi;Ji.mass=0;Ji.addShape(lm);Ji.quaternion.setFromAxisAngle(new Xe.Vec3(-1,0,0),Math.PI*.5);Vn.addBody(Ji);const Nn=new Ke(new ri(.4,.4,.4,32,32),new Wr({metalness:.3,roughness:.4,envMap:Sl,envMapIntensity:.5}));Nn.castShadow=!0;Nn.position.y=.4;wn.add(Nn);const xa=new Ke(new Zi(10,10),new Wr({color:"#777777",metalness:.3,roughness:.4,envMap:Sl,envMapIntensity:.5}));xa.receiveShadow=!0;xa.rotation.x=-Math.PI*.5;wn.add(xa);const cm=new Vp(16777215,2.1);wn.add(cm);const An=new zp(16777215,.6);An.castShadow=!0;An.shadow.mapSize.set(1024,1024);An.shadow.camera.far=15;An.shadow.camera.left=-7;An.shadow.camera.top=7;An.shadow.camera.right=7;An.shadow.camera.bottom=-7;An.position.set(5,5,5);wn.add(An);const ln={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{ln.width=window.innerWidth,ln.height=window.innerHeight,ei.aspect=ln.width/ln.height,ei.updateProjectionMatrix(),ni.setSize(ln.width,ln.height),ni.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Oe=new Wi;Oe.position.set(0,0,0);wn.add(Oe);const ei=new Ze(75,ln.width/ln.height,.1,100);ei.position.y=.5;ei.position.z=-1.5;Oe.add(ei);const hm=new Wp(ei,Ml);hm.enableDamping=!0;const ni=new Rp({canvas:Ml});ni.shadowMap.enabled=!0;ni.shadowMap.type=Oo;ni.setSize(ln.width,ln.height);ni.setPixelRatio(Math.min(window.devicePixelRatio,2));const ya=[],Ci=.8,um=new ga(1,20,20),dm=new Wr({metalness:.3,roughness:.4}),fm=(i,t)=>{const e=new Ke(um,dm);e.scale.set(i*Ci,i*Ci,i*Ci),e.castShadow=!0,e.position.copy(t),wn.add(e);const n=new Xe.Sphere(i),s=new Xe.Body({mass:0,shape:n,material:Fi});s.position.copy(t),Vn.addBody(s),ya.push({mesh:e,body:s})},pm=new ri(1,1,1),mm=new Wr({metalness:.3,roughness:.4}),El=(i,t,e,n)=>{const s=new Ke(pm,mm);s.scale.set(i*Ci,t*Ci,e*Ci),s.castShadow=!0,s.position.copy(n),wn.add(s);const r=new Xe.Box(new Xe.Vec3(i/2,t/2,e/2)),a=new Xe.Body({mass:0,shape:r,material:Fi});a.position.copy(n),Vn.addBody(a),ya.push({mesh:s,body:a})};fm(.5,{x:2,y:.5,z:2});El(1,1,1,{x:-2,y:.5,z:-2});El(.5,.5,.5,{x:3,y:.2,z:1});let Ma=!1,Sa=!1,Ea=!1,wa=!1,Aa=!1;window.addEventListener("keydown",i=>{(i.key==="w"||i.key==="ArrowUp")&&(Ma=!0),(i.key==="s"||i.key==="ArrowDown")&&(Sa=!0),(i.key==="a"||i.key==="ArrowLeft")&&(Ea=!0),(i.key==="d"||i.key==="ArrowRight")&&(wa=!0),i.key===" "&&(Aa=!0)});window.addEventListener("keyup",i=>{(i.key==="w"||i.key==="ArrowUp")&&(Ma=!1),(i.key==="s"||i.key==="ArrowDown")&&(Sa=!1),(i.key==="a"||i.key==="ArrowLeft")&&(Ea=!1),(i.key==="d"||i.key==="ArrowRight")&&(wa=!1),i.key===" "&&(Aa=!1)});let Re=0;const vm=new Hp;let Fo=0;const wl=()=>{const i=vm.getElapsedTime(),t=i-Fo;Fo=i;let e=.1;if(Ma){Nn.rotation.y=Re,Oe.rotation.y+=(Re-Oe.rotation.y)*10*t;let n=Math.sin(Re),s=Math.cos(Re);Pe.position.x+=n*e,Pe.position.z+=s*e,Oe.position.copy(Pe.position)}if(Ea){Re+=Math.PI/4/10,Nn.rotation.y=Re,Oe.rotation.y+=(Re-Oe.rotation.y)*5*t;let n=Math.sin(Re),s=Math.cos(Re);Pe.position.x+=n*e,Pe.position.z+=s*e,Oe.position.copy(Pe.position)}if(wa){Re-=Math.PI/4/10,Nn.rotation.y=Re,Oe.rotation.y+=(Re-Oe.rotation.y)*5*t;let n=Math.sin(Re),s=Math.cos(Re);Pe.position.x+=n*e,Pe.position.z+=s*e,Oe.position.copy(Pe.position)}if(Sa){Nn.rotation.y=Re,Oe.rotation.y+=(Re-Oe.rotation.y)*5*t;let n=Math.sin(Re),s=Math.cos(Re);Pe.position.x-=n*e,Pe.position.z-=s*e,Oe.position.copy(Pe.position),console.log(Re,n,s)}Aa&&(Pe.position.y+=.05,console.log(Pe.position.y)),Nn.position.copy(Pe.position),Oe.position.copy(Pe.position),Pe.velocity.x=0,Pe.velocity.z=0,Vn.step(1/60,t,3);for(const n of ya)n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion);ni.render(wn,ei),window.requestAnimationFrame(wl)};wl();
//# sourceMappingURL=index-DvuGdORh.js.map
