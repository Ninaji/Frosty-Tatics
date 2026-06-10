(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const Zd="modulepreload",jd=function(i,e){return new URL(i,e).href},hc={},fc=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){let r=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");a=r(t.map(d=>{if(d=jd(d,n),d in hc)return;hc[d]=!0;const u=d.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!n)for(let v=o.length-1;v>=0;v--){const m=o[v];if(m.href===d&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Zd,u||(g.as="script"),g.crossOrigin="",g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="170",Jd=0,pc=1,Kd=2,Hl=1,Vl=2,kn=3,oi=0,Qt=1,bn=2,si=0,na=1,Bs=2,mc=3,gc=4,Qd=5,yi=100,eu=101,tu=102,nu=103,iu=104,au=200,su=201,ru=202,ou=203,zr=204,Hr=205,cu=206,lu=207,du=208,uu=209,hu=210,fu=211,pu=212,mu=213,gu=214,Vr=0,Gr=1,Wr=2,oa=3,qr=4,$r=5,Xr=6,Yr=7,Gl=0,vu=1,_u=2,ri=0,xu=1,yu=2,Mu=3,Su=4,bu=5,Eu=6,wu=7,Wl=300,ca=301,la=302,Zr=303,jr=304,Ws=306,Jr=1e3,bi=1001,Kr=1002,wn=1003,Au=1004,Xa=1005,Rn=1006,Qs=1007,Ei=1008,Xn=1009,ql=1010,$l=1011,Fa=1012,Bo=1013,Ai=1014,Vn=1015,Ha=1016,ko=1017,zo=1018,da=1020,Xl=35902,Yl=1021,Zl=1022,En=1023,jl=1024,Jl=1025,ia=1026,ua=1027,Kl=1028,Ho=1029,Ql=1030,Vo=1031,Go=1033,Ts=33776,Cs=33777,Rs=33778,Ps=33779,Qr=35840,eo=35841,to=35842,no=35843,io=36196,ao=37492,so=37496,ro=37808,oo=37809,co=37810,lo=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,vo=37818,_o=37819,xo=37820,yo=37821,Ds=36492,Mo=36494,So=36495,ed=36283,bo=36284,Eo=36285,wo=36286,Tu=3200,Cu=3201,td=0,Ru=1,ii="",Kt="srgb",ma="srgb-linear",qs="linear",at="srgb",Li=7680,vc=519,Pu=512,Du=513,Lu=514,nd=515,Iu=516,Uu=517,Fu=518,Nu=519,Ao=35044,_c="300 es",Gn=2e3,ks=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,To=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function tr(i,e,t){return(1-t)*i+t*e}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,a,s,r,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],g=n[8],v=a[0],m=a[3],p=a[6],b=a[1],y=a[4],_=a[7],L=a[2],C=a[5],T=a[8];return s[0]=r*v+o*b+c*L,s[3]=r*m+o*y+c*C,s[6]=r*p+o*_+c*T,s[1]=l*v+d*b+u*L,s[4]=l*m+d*y+u*C,s[7]=l*p+d*_+u*T,s[2]=f*v+h*b+g*L,s[5]=f*m+h*y+g*C,s[8]=f*p+h*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+a*s*l-a*r*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*r-o*l,f=o*c-d*s,h=l*s-r*c,g=t*u+n*f+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(a*l-d*n)*v,e[2]=(o*n-a*r)*v,e[3]=f*v,e[4]=(d*t-a*c)*v,e[5]=(a*s-o*t)*v,e[6]=h*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new ze;function id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=zs("canvas");return i.style.display="block",i}const xc={};function Ra(i){i in xc||(xc[i]=!0,console.warn(i))}function ku(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function zu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(i.r=aa(i.r),i.g=aa(i.g),i.b=aa(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?qs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],Sc=[.3127,.329],bc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[ma]:{primaries:yc,whitePoint:Sc,transfer:qs,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:yc,whitePoint:Sc,transfer:at,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let Ii;class Vu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=zs("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=$n(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gu=0;class ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(ir(a[r].image)):s.push(ir(a[r]))}else s=ir(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class $t extends ga{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=bi,a=bi,s=Rn,r=Ei,o=En,c=Xn,l=$t.DEFAULT_ANISOTROPY,d=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=qn(),this.name="",this.source=new ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Wl;$t.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,a=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(h+1)/2,L=(p+1)/2,C=(d+f)/4,T=(u+v)/4,R=(g+m)/4;return y>_&&y>L?y<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(y),a=C/n,s=T/n):_>L?_<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),n=C/a,s=R/a):L<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(L),n=T/s,a=R/s),this.set(n,a,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-d)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends ga{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new $t(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends $t{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends $t{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],d=n[a+2],u=n[a+3];const f=s[r+0],h=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==h||d!==g){let m=1-o;const p=c*f+l*h+d*g+u*v,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),C=Math.atan2(L,p*b);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const _=o*b;if(c=c*m+f*_,l=l*m+h*_,d=d*m+g*_,u=u*m+v*_,m===1-o){const L=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=L,l*=L,d*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],u=s[r],f=s[r+1],h=s[r+2],g=s[r+3];return e[t]=o*g+d*u+c*h-l*f,e[t+1]=c*g+d*f+l*u-o*h,e[t+2]=l*g+d*h+o*f-c*u,e[t+3]=d*g-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),u=o(s/2),f=c(n/2),h=c(a/2),g=c(s/2);switch(r){case"XYZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"YZX":this._x=f*d*u+l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u-f*h*g;break;case"XZY":this._x=f*d*u-l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(r-a)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(s-l)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(r-a)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+a*l-s*c,this._y=a*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-a*o,this._w=r*d-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=a,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*r+t*this._w,this._x=h*n+t*this._x,this._y=h*a+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=a*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),d=2*(o*t-s*a),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*d,this.y=n+c*d+o*l-s*u,this.z=a+c*u+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new D,wc=new Va;class Ga{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,vn):vn.fromBufferAttribute(s,r),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Za.subVectors(this.max,Ma),Ui.subVectors(e.a,Ma),Fi.subVectors(e.b,Ma),Ni.subVectors(e.c,Ma),jn.subVectors(Fi,Ui),Jn.subVectors(Ni,Fi),ui.subVectors(Ui,Ni);let t=[0,-jn.z,jn.y,0,-Jn.z,Jn.y,0,-ui.z,ui.y,jn.z,0,-jn.x,Jn.z,0,-Jn.x,ui.z,0,-ui.x,-jn.y,jn.x,0,-Jn.y,Jn.x,0,-ui.y,ui.x,0];return!sr(t,Ui,Fi,Ni,Za)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,Ui,Fi,Ni,Za))?!1:(ja.crossVectors(jn,Jn),t=[ja.x,ja.y,ja.z],sr(t,Ui,Fi,Ni,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Ya=new Ga,Ui=new D,Fi=new D,Ni=new D,jn=new D,Jn=new D,ui=new D,Ma=new D,Za=new D,ja=new D,hi=new D;function sr(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){hi.fromArray(i,s);const o=a.x*Math.abs(hi.x)+a.y*Math.abs(hi.y)+a.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),d=n.dot(hi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Xu=new Ga,Sa=new D,rr=new D;class $s{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xu.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Sa,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(rr)),this.expandByPoint(Sa.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,or=new D,Ja=new D,Kn=new D,cr=new D,Ka=new D,lr=new D;class Wo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){or.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(or);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ja),o=Kn.dot(this.direction),c=-Kn.dot(Ja),l=Kn.lengthSq(),d=Math.abs(1-r*r);let u,f,h,g;if(d>0)if(u=r*c-o,f=r*o-c,g=s*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,h=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+o)),h=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),h=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),h=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(or).addScaledVector(Ja,f),h}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),a=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,a,s){cr.subVectors(t,e),Ka.subVectors(n,e),lr.crossVectors(cr,Ka);let r=this.direction.dot(lr),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Ka.crossVectors(Kn,Ka));if(c<0)return null;const l=o*this.direction.dot(cr.cross(Kn));if(l<0||c+l>r)return null;const d=-o*Kn.dot(lr);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,a,s,r,o,c,l,d,u,f,h,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,d,u,f,h,g,v,m)}set(e,t,n,a,s,r,o,c,l,d,u,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=a,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),r=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*d,h=r*u,g=o*d,v=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,g=l*d,v=l*u;t[0]=f+v*o,t[4]=g*o-h,t[8]=r*l,t[1]=r*u,t[5]=r*d,t[9]=-o,t[2]=h*o-g,t[6]=v+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,g=l*d,v=l*u;t[0]=f-v*o,t[4]=-r*u,t[8]=g+h*o,t[1]=h+g*o,t[5]=r*d,t[9]=v-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*d,h=r*u,g=o*d,v=o*u;t[0]=c*d,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,h=r*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-f*u,t[8]=g*u+h,t[1]=u,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*c,h=r*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+v,t[5]=r*d,t[9]=h*u-g,t[2]=g*u-h,t[6]=o*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,Zu)}lookAt(e,t,n){const a=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Qn.crossVectors(n,tn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Qn.crossVectors(n,tn)),Qn.normalize(),Qa.crossVectors(tn,Qn),a[0]=Qn.x,a[4]=Qa.x,a[8]=tn.x,a[1]=Qn.y,a[5]=Qa.y,a[9]=tn.y,a[2]=Qn.z,a[6]=Qa.z,a[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],y=n[7],_=n[11],L=n[15],C=a[0],T=a[4],R=a[8],E=a[12],M=a[1],P=a[5],H=a[9],B=a[13],W=a[2],Q=a[6],q=a[10],ae=a[14],G=a[3],ce=a[7],me=a[11],Te=a[15];return s[0]=r*C+o*M+c*W+l*G,s[4]=r*T+o*P+c*Q+l*ce,s[8]=r*R+o*H+c*q+l*me,s[12]=r*E+o*B+c*ae+l*Te,s[1]=d*C+u*M+f*W+h*G,s[5]=d*T+u*P+f*Q+h*ce,s[9]=d*R+u*H+f*q+h*me,s[13]=d*E+u*B+f*ae+h*Te,s[2]=g*C+v*M+m*W+p*G,s[6]=g*T+v*P+m*Q+p*ce,s[10]=g*R+v*H+m*q+p*me,s[14]=g*E+v*B+m*ae+p*Te,s[3]=b*C+y*M+_*W+L*G,s[7]=b*T+y*P+_*Q+L*ce,s[11]=b*R+y*H+_*q+L*me,s[15]=b*E+y*B+_*ae+L*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*u-a*l*u-s*o*f+n*l*f+a*o*h-n*c*h)+v*(+t*c*h-t*l*f+s*r*f-a*r*h+a*l*d-s*c*d)+m*(+t*l*u-t*o*h-s*r*u+n*r*h+s*o*d-n*l*d)+p*(-a*o*d-t*c*u+t*o*f+a*r*u-n*r*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=u*m*l-v*f*l+v*c*h-o*m*h-u*c*p+o*f*p,y=g*f*l-d*m*l-g*c*h+r*m*h+d*c*p-r*f*p,_=d*v*l-g*u*l+g*o*h-r*v*h-d*o*p+r*u*p,L=g*u*c-d*v*c-g*o*f+r*v*f+d*o*m-r*u*m,C=t*b+n*y+a*_+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=b*T,e[1]=(v*f*s-u*m*s-v*a*h+n*m*h+u*a*p-n*f*p)*T,e[2]=(o*m*s-v*c*s+v*a*l-n*m*l-o*a*p+n*c*p)*T,e[3]=(u*c*s-o*f*s-u*a*l+n*f*l+o*a*h-n*c*h)*T,e[4]=y*T,e[5]=(d*m*s-g*f*s+g*a*h-t*m*h-d*a*p+t*f*p)*T,e[6]=(g*c*s-r*m*s-g*a*l+t*m*l+r*a*p-t*c*p)*T,e[7]=(r*f*s-d*c*s+d*a*l-t*f*l-r*a*h+t*c*h)*T,e[8]=_*T,e[9]=(g*u*s-d*v*s-g*n*h+t*v*h+d*n*p-t*u*p)*T,e[10]=(r*v*s-g*o*s+g*n*l-t*v*l-r*n*p+t*o*p)*T,e[11]=(d*o*s-r*u*s-d*n*l+t*u*l+r*n*h-t*o*h)*T,e[12]=L*T,e[13]=(d*v*a-g*u*a+g*n*f-t*v*f-d*n*m+t*u*m)*T,e[14]=(g*o*a-r*v*a-g*n*c+t*v*c+r*n*m-t*o*m)*T,e[15]=(r*u*a-d*o*a+d*n*c-t*u*c-r*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*r,0,l*c-a*o,d*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,u=o+o,f=s*l,h=s*d,g=s*u,v=r*d,m=r*u,p=o*u,b=c*l,y=c*d,_=c*u,L=n.x,C=n.y,T=n.z;return a[0]=(1-(v+p))*L,a[1]=(h+_)*L,a[2]=(g-y)*L,a[3]=0,a[4]=(h-_)*C,a[5]=(1-(f+p))*C,a[6]=(m+b)*C,a[7]=0,a[8]=(g+y)*T,a[9]=(m-b)*T,a[10]=(1-(f+v))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=Oi.set(a[0],a[1],a[2]).length();const r=Oi.set(a[4],a[5],a[6]).length(),o=Oi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],_n.copy(this);const l=1/s,d=1/r,u=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,a,s,r,o=Gn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-a),u=(t+e)/(t-e),f=(n+a)/(n-a);let h,g;if(o===Gn)h=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ks)h=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Gn){const c=this.elements,l=1/(t-e),d=1/(n-a),u=1/(r-s),f=(t+e)*l,h=(n+a)*d;let g,v;if(o===Gn)g=(r+s)*u,v=-2*u;else if(o===ks)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new D,_n=new ht,Yu=new D(0,0,0),Zu=new D(1,1,1),Qn=new D,Qa=new D,tn=new D,Ac=new ht,Tc=new Va;class Pn{constructor(e=0,t=0,n=0,a=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],d=a[9],u=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ju=0;const Cc=new D,Bi=new Va,Nn=new ht,es=new D,ba=new D,Ju=new D,Ku=new Va,Rc=new D(1,0,0),Pc=new D(0,1,0),Dc=new D(0,0,1),Lc={type:"added"},Qu={type:"removed"},ki={type:"childadded",child:null},dr={type:"childremoved",child:null};class Rt extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new Pn,n=new Va,a=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ba,es,this.up):Nn.lookAt(es,ba,this.up),this.quaternion.setFromRotationMatrix(Nn),a&&(Nn.extractRotation(a.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),u=r(e.shapes),f=r(e.skeletons),h=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=a,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,On=new D,ur=new D,Bn=new D,zi=new D,Hi=new D,Ic=new D,hr=new D,fr=new D,pr=new D,mr=new Mt,gr=new Mt,vr=new Mt;class hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),xn.subVectors(e,t),a.cross(xn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){xn.subVectors(a,t),On.subVectors(n,t),ur.subVectors(e,t);const r=xn.dot(xn),o=xn.dot(On),c=xn.dot(ur),l=On.dot(On),d=On.dot(ur),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,g=(r*d-o*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(r,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return mr.setScalar(0),gr.setScalar(0),vr.setScalar(0),mr.fromBufferAttribute(e,t),gr.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(mr,s.x),r.addScaledVector(gr,s.y),r.addScaledVector(vr,s.z),r}static isFrontFacing(e,t,n,a){return xn.subVectors(n,t),On.subVectors(e,t),xn.cross(On).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;zi.subVectors(a,n),Hi.subVectors(s,n),hr.subVectors(e,n);const c=zi.dot(hr),l=Hi.dot(hr);if(c<=0&&l<=0)return t.copy(n);fr.subVectors(e,a);const d=zi.dot(fr),u=Hi.dot(fr);if(d>=0&&u<=d)return t.copy(a);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(zi,r);pr.subVectors(e,s);const h=zi.dot(pr),g=Hi.dot(pr);if(g>=0&&h<=g)return t.copy(s);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Hi,o);const m=d*g-h*u;if(m<=0&&u-d>=0&&h-g>=0)return Ic.subVectors(s,a),o=(u-d)/(u-d+(h-g)),t.copy(a).addScaledVector(Ic,o);const p=1/(m+v+f);return r=v*p,o=f*p,t.copy(n).addScaledVector(zi,r).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ts={h:0,s:0,l:0};function _r(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Qe.workingColorSpace){if(e=Ou(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=_r(r,s,e+1/3),this.g=_r(r,s,e),this.b=_r(r,s,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ht(Bt.r*255,0,255))*65536+Math.round(Ht(Bt.g*255,0,255))*256+Math.round(Ht(Bt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,a=Bt.g,s=Bt.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=d<=.5?u/(r+o):u/(2-r-o),r){case n:c=(a-s)/u+(a<s?6:0);break;case a:c=(s-n)/u+2;break;case s:c=(n-a)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Kt){Qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,a=Bt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ts);const n=tr(ei.h,ts.h,t),a=tr(ei.s,ts.s,t),s=tr(ei.l,ts.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Oe;Oe.NAMES=rd;let eh=0;class Pi extends ga{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=qn(),this.name="",this.blending=na,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=Hr,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Hr&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xs extends Pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,ns=new pe;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),a=rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),a=rt(a,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}}class od extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let th=0;const ln=new ht,xr=new Rt,Vi=new D,nn=new Ga,Ea=new Ga,It=new D;class Xt extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?cd:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pt(n,3))}else{for(let n=0,a=t.count;n<a;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(nn.min,Ea.min),nn.expandByPoint(It),It.addVectors(nn.max,Ea.max),nn.expandByPoint(It)):(nn.expandByPoint(Ea.min),nn.expandByPoint(Ea.max))}nn.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)It.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(It));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)It.fromBufferAttribute(o,l),c&&(Vi.fromBufferAttribute(e,l),It.add(Vi)),a=Math.max(a,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new D,c[R]=new D;const l=new D,d=new D,u=new D,f=new pe,h=new pe,g=new pe,v=new D,m=new D;function p(R,E,M){l.fromBufferAttribute(n,R),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),d.sub(l),u.sub(l),h.sub(f),g.sub(f);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(P),m.copy(u).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(P),o[R].add(v),o[E].add(v),o[M].add(v),c[R].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,E=b.length;R<E;++R){const M=b[R],P=M.start,H=M.count;for(let B=P,W=P+H;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new D,_=new D,L=new D,C=new D;function T(R){L.fromBufferAttribute(a,R),C.copy(L);const E=o[R];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(C,E);const P=_.dot(c[R])<0?-1:1;r.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,E=b.length;R<E;++R){const M=b[R],P=M.start,H=M.count;for(let B=P,W=P+H;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const a=new D,s=new D,r=new D,o=new D,c=new D,l=new D,d=new D,u=new D;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,s),u.subVectors(a,s),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),u.subVectors(a,s),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?h=c[v]*o.data.stride+o.offset:h=c[v]*d;for(let p=0;p<d;p++)f[g++]=l[h++]}return new rn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(a[c]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new ht,fi=new Wo,is=new $s,Fc=new D,as=new D,ss=new D,rs=new D,yr=new D,os=new D,Nc=new D,cs=new D;class wt extends Rt{constructor(e=new Xt,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],u=s[c];d!==0&&(yr.fromBufferAttribute(u,e),r?os.addScaledVector(yr,d):os.addScaledVector(yr.sub(t),d))}t.add(os)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(is.containsPoint(fi.origin)===!1&&(fi.intersectSphere(is,Fc)===null||fi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),fi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],b=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=b,L=y;_<L;_+=3){const C=o.getX(_),T=o.getX(_+1),R=o.getX(_+2);a=ls(this,p,e,n,l,d,u,C,T,R),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);a=ls(this,r,e,n,l,d,u,b,y,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],b=Math.max(m.start,h.start),y=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let _=b,L=y;_<L;_+=3){const C=_,T=_+1,R=_+2;a=ls(this,p,e,n,l,d,u,C,T,R),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const b=m,y=m+1,_=m+2;a=ls(this,r,e,n,l,d,u,b,y,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function nh(i,e,t,n,a,s,r,o){let c;if(e.side===Qt?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===oi,o),c===null)return null;cs.copy(o),cs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(cs);return l<t.near||l>t.far?null:{distance:l,point:cs.clone(),object:i}}function ls(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,as),i.getVertexPosition(c,ss),i.getVertexPosition(l,rs);const d=nh(i,e,t,n,as,ss,rs,Nc);if(d){const u=new D;hn.getBarycoord(Nc,as,ss,rs,u),a&&(d.uv=hn.getInterpolatedAttribute(a,o,c,l,u,new pe)),s&&(d.uv1=hn.getInterpolatedAttribute(s,o,c,l,u,new pe)),r&&(d.normal=hn.getInterpolatedAttribute(r,o,c,l,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};hn.getNormal(as,ss,rs,f.normal),d.face=f,d.barycoord=u}return d}class li extends Xt{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],u=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,a,r,2),g("x","z","y",1,-1,e,n,-t,a,r,3),g("x","y","z",1,-1,e,t,n,a,s,4),g("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(u,2));function g(v,m,p,b,y,_,L,C,T,R,E){const M=_/T,P=L/R,H=_/2,B=L/2,W=C/2,Q=T+1,q=R+1;let ae=0,G=0;const ce=new D;for(let me=0;me<q;me++){const Te=me*P-B;for(let We=0;We<Q;We++){const ot=We*M-H;ce[v]=ot*b,ce[m]=Te*y,ce[p]=W,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=C>0?1:-1,d.push(ce.x,ce.y,ce.z),u.push(We/T),u.push(1-me/R),ae+=1}}for(let me=0;me<R;me++)for(let Te=0;Te<T;Te++){const We=f+Te+Q*me,ot=f+Te+Q*(me+1),Z=f+(Te+1)+Q*(me+1),se=f+(Te+1)+Q*me;c.push(We,ot,se),c.push(ot,Z,se),G+=6}o.addGroup(h,G,E),h+=G,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=ha(i[t]);for(const a in n)e[a]=n[a]}return e}function ih(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ah={clone:ha,merge:qt};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,Oc=new pe,Bc=new pe;class Sn extends dd{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Wi=1;class oh extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sn(Gi,Wi,e,t);a.layers=this.layers,this.add(a);const s=new Sn(Gi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Gi,Wi,e,t);r.layers=this.layers,this.add(r);const o=new Sn(Gi,Wi,e,t);o.layers=this.layers,this.add(o);const c=new Sn(Gi,Wi,e,t);c.layers=this.layers,this.add(c);const l=new Sn(Gi,Wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,c),e.setRenderTarget(n,4,a),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,a),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ud extends $t{constructor(e,t,n,a,s,r,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:ca,super(e,t,n,a,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new ud(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new li(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:si});s.uniforms.tEquirect.value=t;const r=new wt(a,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Rn),new oh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}const Mr=new D,lh=new D,dh=new ze;class _i{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Mr.subVectors(n,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dh.getNormalMatrix(e),a=this.coplanarPoint(Mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new $s,ds=new D;class $o{constructor(e=new _i,t=new _i,n=new _i,a=new _i,s=new _i,r=new _i){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],c=a[3],l=a[4],d=a[5],u=a[6],f=a[7],h=a[8],g=a[9],v=a[10],m=a[11],p=a[12],b=a[13],y=a[14],_=a[15];if(n[0].setComponents(c-s,f-l,m-h,_-p).normalize(),n[1].setComponents(c+s,f+l,m+h,_+p).normalize(),n[2].setComponents(c+r,f+d,m+g,_+b).normalize(),n[3].setComponents(c-r,f-d,m-g,_-b).normalize(),n[4].setComponents(c-o,f-u,m-v,_-y).normalize(),t===Gn)n[5].setComponents(c+o,f+u,m+v,_+y).normalize();else if(t===ks)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ds.x=a.normal.x>0?e.max.x:e.min.x,ds.y=a.normal.y>0?e.max.y:e.min.y,ds.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let i=null,e=!1,t=null,n=null;function a(s,r){t(s,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function uh(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){const g=u[f],v=u[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){const v=u[h];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}class Wa extends Xt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,u=e/o,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const b=p*f-r;for(let y=0;y<l;y++){const _=y*u-s;g.push(_,-b,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const y=b+l*p,_=b+l*(p+1),L=b+1+l*(p+1),C=b+1+l*p;h.push(y,_,C),h.push(_,L,C)}this.setIndex(h),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
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
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
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
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oh=`vec3 transformedNormal = objectNormal;
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
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
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
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
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
}`,zp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Wp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:hh,alphahash_pars_fragment:fh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:vh,aomap_fragment:_h,aomap_pars_fragment:xh,batching_pars_vertex:yh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:bh,bsdfs:Eh,iridescence_fragment:wh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ph,color_fragment:Dh,color_pars_fragment:Lh,color_pars_vertex:Ih,color_vertex:Uh,common:Fh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:Bh,displacementmap_vertex:kh,emissivemap_fragment:zh,emissivemap_pars_fragment:Hh,colorspace_fragment:Vh,colorspace_pars_fragment:Gh,envmap_fragment:Wh,envmap_common_pars_fragment:qh,envmap_pars_fragment:$h,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:sf,envmap_vertex:Yh,fog_vertex:Zh,fog_pars_vertex:jh,fog_fragment:Jh,fog_pars_fragment:Kh,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:ef,lights_lambert_fragment:tf,lights_lambert_pars_fragment:nf,lights_pars_begin:af,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:cf,lights_phong_pars_fragment:lf,lights_physical_fragment:df,lights_physical_pars_fragment:uf,lights_fragment_begin:hf,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:wf,morphcolor_vertex:Af,morphnormal_vertex:Tf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Rf,normal_fragment_begin:Pf,normal_fragment_maps:Df,normal_pars_fragment:Lf,normal_pars_vertex:If,normal_vertex:Uf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:kf,opaque_fragment:zf,packing:Hf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Wf,dithering_pars_fragment:qf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:Zf,shadowmap_vertex:jf,shadowmask_pars_fragment:Jf,skinbase_vertex:Kf,skinning_pars_vertex:Qf,skinning_vertex:ep,skinnormal_vertex:tp,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:ap,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:op,uv_pars_fragment:cp,uv_pars_vertex:lp,uv_vertex:dp,worldpos_vertex:up,background_vert:hp,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:vp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:bp,linedashed_vert:Ep,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Tp,meshlambert_vert:Cp,meshlambert_frag:Rp,meshmatcap_vert:Pp,meshmatcap_frag:Dp,meshnormal_vert:Lp,meshnormal_frag:Ip,meshphong_vert:Up,meshphong_frag:Fp,meshphysical_vert:Np,meshphysical_frag:Op,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:zp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:qp},re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Tn={basic:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([re.points,re.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([re.common,re.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([re.sprite,re.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:qt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:qt([re.lights,re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Tn.physical={uniforms:qt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const us={r:0,b:0,g:0},mi=new Pn,$p=new ht;function Xp(i,e,t,n,a,s,r){const o=new Oe(0);let c=s===!0?0:1,l,d,u=null,f=0,h=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const _=g(b);_===null?p(o,c):_&&_.isColor&&(p(_,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Ws)?(d===void 0&&(d=new wt(new li(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ha(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(mi)),d.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,(u!==_||f!==_.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new wt(new Wa(2,2),new ci({name:"BackgroundMaterial",uniforms:ha(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(us,ld(i)),n.buffers.color.setClear(us.r,us.g,us.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:v,addToRenderList:m}}function Yp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let s=a,r=!1;function o(M,P,H,B,W){let Q=!1;const q=u(B,H,P);s!==q&&(s=q,l(s.object)),Q=h(M,B,H,W),Q&&g(M,B,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,_(M,P,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,P,H){const B=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Q=W[P.id];Q===void 0&&(Q={},W[P.id]=Q);let q=Q[B];return q===void 0&&(q=f(c()),Q[B]=q),q}function f(M){const P=[],H=[],B=[];for(let W=0;W<t;W++)P[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:B,object:M,attributes:{},index:null}}function h(M,P,H,B){const W=s.attributes,Q=P.attributes;let q=0;const ae=H.getAttributes();for(const G in ae)if(ae[G].location>=0){const me=W[G];let Te=Q[G];if(Te===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function g(M,P,H,B){const W={},Q=P.attributes;let q=0;const ae=H.getAttributes();for(const G in ae)if(ae[G].location>=0){let me=Q[G];me===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),W[G]=Te,q++}s.attributes=W,s.attributesNum=q,s.index=B}function v(){const M=s.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const H=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;H[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function b(){const M=s.newAttributes,P=s.enabledAttributes;for(let H=0,B=P.length;H<B;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function y(M,P,H,B,W,Q,q){q===!0?i.vertexAttribIPointer(M,P,H,W,Q):i.vertexAttribPointer(M,P,H,B,W,Q)}function _(M,P,H,B){v();const W=B.attributes,Q=H.getAttributes(),q=P.defaultAttributeValues;for(const ae in Q){const G=Q[ae];if(G.location>=0){let ce=W[ae];if(ce===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const me=ce.normalized,Te=ce.itemSize,We=e.get(ce);if(We===void 0)continue;const ot=We.buffer,Z=We.type,se=We.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||ce.gpuType===Bo;if(ce.isInterleavedBufferAttribute){const le=ce.data,De=le.stride,Ne=ce.offset;if(le.isInstancedInterleavedBuffer){for(let qe=0;qe<G.locationSize;qe++)p(G.location+qe,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let qe=0;qe<G.locationSize;qe++)y(G.location+qe,Te/G.locationSize,Z,me,De*se,(Ne+Te/G.locationSize*qe)*se,be)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ce.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let le=0;le<G.locationSize;le++)y(G.location+le,Te/G.locationSize,Z,me,Te*se,Te/G.locationSize*le*se,be)}}else if(q!==void 0){const me=q[ae];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(G.location,me);break;case 3:i.vertexAttrib3fv(G.location,me);break;case 4:i.vertexAttrib4fv(G.location,me);break;default:i.vertexAttrib1fv(G.location,me)}}}}b()}function L(){R();for(const M in n){const P=n[M];for(const H in P){const B=P[H];for(const W in B)d(B[W].object),delete B[W];delete P[H]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const B=P[H];for(const W in B)d(B[W].object),delete B[W];delete P[H]}delete n[M.id]}function T(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const B=H[M.id];for(const W in B)d(B[W].object),delete B[W];delete H[M.id]}}function R(){E(),r=!0,s!==a&&(s=a,l(s.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Zp(i,e,t){let n;function a(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function r(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,n,1)}function c(l,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)r(l[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];t.update(g,n,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jp(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function Jp(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new _i,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||a;return a=f,n=u.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!a||g===null||g.length===0||s&&!m)s?d(null):l();else{const b=s?0:n,y=b*4;let _=p.clippingState||null;c.value=_,_=d(g,f,y,h);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=h+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=h;y!==v;++y,_+=4)r.copy(u[y]).applyMatrix4(b,o),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Kp(i){let e=new WeakMap;function t(r,o){return o===Zr?r.mapping=ca:o===jr&&(r.mapping=la),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Zr||o===jr)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new ch(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",a),t(l.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xo extends dd{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,kc=[.125,.215,.35,.446,.526,.582],Mi=20,Sr=new Xo,zc=new Oe;let br=null,Er=0,wr=0,Ar=!1;const xi=(1+Math.sqrt(5))/2,qi=1/xi,Hc=[new D(-xi,qi,0),new D(xi,qi,0),new D(-qi,0,xi),new D(qi,0,xi),new D(0,xi,-qi),new D(0,xi,qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(br,Er,wr),this._renderer.xr.enabled=Ar,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ha,format:En,colorSpace:ma,depthBuffer:!1},a=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=em(s,e,t)}return a}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,a){const o=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zc),d.toneMapping=ri,d.autoClear=!1;const h=new Xs({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new wt(new li,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(zc),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;hs(a,b*y,p>2?y:0,y,y),d.setRenderTarget(a),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ca||e.mapping===la;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hc[(a-s-1)%Hc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",s),this._halfBlur(r,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new wt(this._lodPlanes[a],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Mi-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let b=0;for(let T=0;T<Mi;++T){const R=T/v,E=Math.exp(-R*R/2);p.push(E),T===0?b+=E:T<m&&(b+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[a],L=3*_*(a>y-Qi?a-y+Qi:0),C=4*(this._cubeSize-_);hs(t,L,C,3*_,2*_),c.setRenderTarget(t),c.render(u,Sr)}}function Qp(i){const e=[],t=[],n=[];let a=i;const s=i-Qi+1+kc.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let c=1/o;r>i-Qi?c=kc[r-i+Qi-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*h),y=new Float32Array(m*g*h),_=new Float32Array(p*g*h);for(let C=0;C<h;C++){const T=C%3*2/3-1,R=C>2?0:-1,E=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(E,v*g*C),y.set(f,m*g*C);const M=[C,C,C,C,C,C];_.set(M,p*g*C)}const L=new Xt;L.setAttribute("position",new rn(b,v)),L.setAttribute("uv",new rn(y,m)),L.setAttribute("faceIndex",new rn(_,p)),e.push(L),a>Qi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function em(i,e,t){const n=new Float32Array(Mi),a=new D(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function qc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function tm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zr||c===jr,d=c===ca||c===la;if(l||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Vc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const h=o.image;return l&&h&&h.height>0||d&&h&&a(h)?(t===null&&(t=new Vc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Ra("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function im(i,e,t,n){const a={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",r),delete a[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const h=u.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const f=[],h=u.index,g=u.attributes.position;let v=0;if(h!==null){const b=h.array;v=h.version;for(let y=0,_=b.length;y<_;y+=3){const L=b[y+0],C=b[y+1],T=b[y+2];f.push(L,C,C,T,T,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const L=y+0,C=y+1,T=y+2;f.push(L,C,C,T,T,L)}}else return;const m=new(id(f)?cd:od)(f,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const f=s.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function am(i,e,t){let n;function a(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*r),t.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*r,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function u(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/r,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b]*v[b];t.update(p,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function rm(i,e,t){const n=new WeakMap,a=new Mt;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const C=new Float32Array(_*L*4*u),T=new sd(C,_,L,u);T.type=Vn,T.needsUpdate=!0;const R=y*4;for(let M=0;M<u;M++){const P=m[M],H=p[M],B=b[M],W=_*L*4*M;for(let Q=0;Q<P.count;Q++){const q=Q*R;h===!0&&(a.fromBufferAttribute(P,Q),C[W+q+0]=a.x,C[W+q+1]=a.y,C[W+q+2]=a.z,C[W+q+3]=0),g===!0&&(a.fromBufferAttribute(H,Q),C[W+q+4]=a.x,C[W+q+5]=a.y,C[W+q+6]=a.z,C[W+q+7]=0),v===!0&&(a.fromBufferAttribute(B,Q),C[W+q+8]=a.x,C[W+q+9]=a.y,C[W+q+10]=a.z,C[W+q+11]=B.itemSize===4?a.w:1)}}f={count:u,texture:T,size:new pe(_,L)},n.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];const g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function om(i,e,t,n){let a=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(a.get(u)!==l&&(e.update(u),a.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==l&&(f.update(),a.set(f,l))}return u}function r(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class fd extends $t{constructor(e,t,n,a,s,r,o,c,l,d=ia){if(d!==ia&&d!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ia&&(n=Ai),n===void 0&&d===ua&&(n=da),super(null,a,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pd=new $t,$c=new fd(1,1),md=new sd,gd=new $u,vd=new ud,Xc=[],Yc=[],Zc=new Float32Array(16),jc=new Float32Array(9),Jc=new Float32Array(4);function va(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=Xc[a];if(s===void 0&&(s=new Float32Array(a),Xc[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Lt(t,n)}}function fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),Lt(t,n)}}function pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Lt(t,n)}}function mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function bm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?($c.compareFunction=nd,s=$c):s=pd,t.setTexture2D(e||s,a)}function Em(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||gd,a)}function wm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||vd,a)}function Am(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||md,a)}function Tm(i){switch(i){case 5126:return cm;case 35664:return lm;case 35665:return dm;case 35666:return um;case 35674:return hm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return vm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,e){i.uniform1fv(this.addr,e)}function Rm(i,e){const t=va(e,this.size,2);i.uniform2fv(this.addr,t)}function Pm(i,e){const t=va(e,this.size,3);i.uniform3fv(this.addr,t)}function Dm(i,e){const t=va(e,this.size,4);i.uniform4fv(this.addr,t)}function Lm(i,e){const t=va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Im(i,e){const t=va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Um(i,e){const t=va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fm(i,e){i.uniform1iv(this.addr,e)}function Nm(i,e){i.uniform2iv(this.addr,e)}function Om(i,e){i.uniform3iv(this.addr,e)}function Bm(i,e){i.uniform4iv(this.addr,e)}function km(i,e){i.uniform1uiv(this.addr,e)}function zm(i,e){i.uniform2uiv(this.addr,e)}function Hm(i,e){i.uniform3uiv(this.addr,e)}function Vm(i,e){i.uniform4uiv(this.addr,e)}function Gm(i,e,t){const n=this.cache,a=e.length,s=Ys(t,a);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||pd,s[r])}function Wm(i,e,t){const n=this.cache,a=e.length,s=Ys(t,a);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||gd,s[r])}function qm(i,e,t){const n=this.cache,a=e.length,s=Ys(t,a);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||vd,s[r])}function $m(i,e,t){const n=this.cache,a=e.length,s=Ys(t,a);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||md,s[r])}function Xm(i){switch(i){case 5126:return Cm;case 35664:return Rm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Nm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return km;case 36294:return zm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tm(t.type)}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function Jm(i,e,t){const n=i.name,a=n.length;for(Tr.lastIndex=0;;){const s=Tr.exec(n),r=Tr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){Kc(t,l===void 0?new Ym(o,i,e):new Zm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new jm(o),Kc(t,u)),t=u}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);Jm(s,r,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Qc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Km=37297;let Qm=0;function eg(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const el=new ze;function tg(i){Qe._getMatrix(el,Qe.workingColorSpace,i);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case qs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+eg(i.getShaderSource(e),r)}else return a}function ng(i,e){const t=tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ig(i,e){let t;switch(e){case xu:t="Linear";break;case yu:t="Reinhard";break;case Mu:t="Cineon";break;case Su:t="ACESFilmic";break;case Eu:t="AgX";break;case wu:t="Neutral";break;case bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new D;function ag(){Qe.getLuminanceCoefficients(fs);const i=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function rg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Pa(i){return i!==""}function nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(cg,dg)}const lg=new Map;function dg(i,e){let t=Ge[e];if(t===void 0){const n=lg.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(ug,hg)}function hg(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function sl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ca:case la:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case la:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case vu:e="ENVMAP_BLENDING_MIX";break;case _u:e="ENVMAP_BLENDING_ADD";break}return e}function vg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _g(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=fg(t),l=pg(t),d=mg(t),u=gg(t),f=vg(t),h=sg(t),g=rg(s),v=a.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ri?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),r=Co(r),r=nl(r,t),r=il(r,t),o=Co(o),o=nl(o,t),o=il(o,t),r=al(r),o=al(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+r,_=b+p+o,L=Qc(a,a.VERTEX_SHADER,y),C=Qc(a,a.FRAGMENT_SHADER,_);a.attachShader(v,L),a.attachShader(v,C),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function T(P){if(i.debug.checkShaderErrors){const H=a.getProgramInfoLog(v).trim(),B=a.getShaderInfoLog(L).trim(),W=a.getShaderInfoLog(C).trim();let Q=!0,q=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,L,C);else{const ae=tl(a,L,"vertex"),G=tl(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+ae+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:Q,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}a.deleteShader(L),a.deleteShader(C),R=new Ls(a,v),E=og(a,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,Km)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let xg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mg(e),t.set(e,n)),n}}class Mg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Sg(i,e,t,n,a,s,r){const o=new qo,c=new yg,l=new Set,d=[],u=a.logarithmicDepthBuffer,f=a.vertexTextures;let h=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,H,B){const W=H.fog,Q=B.geometry,q=E.isMeshStandardMaterial?H.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),G=ae&&ae.mapping===Ws?ae.image.height:null,ce=g[E.type];E.precision!==null&&(h=a.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Te=me!==void 0?me.length:0;let We=0;Q.morphAttributes.position!==void 0&&(We=1),Q.morphAttributes.normal!==void 0&&(We=2),Q.morphAttributes.color!==void 0&&(We=3);let ot,Z,se,be;if(ce){const it=Tn[ce];ot=it.vertexShader,Z=it.fragmentShader}else ot=E.vertexShader,Z=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const le=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,vt=!!E.map,je=!!E.matcap,St=!!ae,N=!!E.aoMap,on=!!E.lightMap,Xe=!!E.bumpMap,Ye=!!E.normalMap,Re=!!E.displacementMap,ft=!!E.emissiveMap,Ce=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,O=E.clearcoat>0,J=E.dispersion>0,ee=E.iridescence>0,Y=E.sheen>0,Ee=E.transmission>0,de=x&&!!E.anisotropyMap,ge=O&&!!E.clearcoatMap,Je=O&&!!E.clearcoatNormalMap,ne=O&&!!E.clearcoatRoughnessMap,ve=ee&&!!E.iridescenceMap,Pe=ee&&!!E.iridescenceThicknessMap,Ie=Y&&!!E.sheenColorMap,_e=Y&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,He=!!E.specularColorMap,ct=!!E.specularIntensityMap,I=Ee&&!!E.transmissionMap,oe=Ee&&!!E.thicknessMap,V=!!E.gradientMap,K=!!E.alphaMap,fe=E.alphaTest>0,ue=!!E.alphaHash,Be=!!E.extensions;let yt=ri;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Nt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:Z,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ma,alphaToCoverage:!!E.alphaToCoverage,map:vt,matcap:je,envMap:St,envMapMode:St&&ae.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:on,bumpMap:Xe,normalMap:Ye,displacementMap:f&&Re,emissiveMap:ft,normalMapObjectSpace:Ye&&E.normalMapType===Ru,normalMapTangentSpace:Ye&&E.normalMapType===td,metalnessMap:Ce,roughnessMap:A,anisotropy:x,anisotropyMap:de,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:ne,dispersion:J,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:Y,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Ze,specularColorMap:He,specularIntensityMap:ct,transmission:Ee,transmissionMap:I,thicknessMap:oe,gradientMap:V,opaque:E.transparent===!1&&E.blending===na&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:fe,alphaHash:ue,combine:E.combine,mapUv:vt&&v(E.map.channel),aoMapUv:N&&v(E.aoMap.channel),lightMapUv:on&&v(E.lightMap.channel),bumpMapUv:Xe&&v(E.bumpMap.channel),normalMapUv:Ye&&v(E.normalMap.channel),displacementMapUv:Re&&v(E.displacementMap.channel),emissiveMapUv:ft&&v(E.emissiveMap.channel),metalnessMapUv:Ce&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:de&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(E.sheenRoughnessMap.channel),specularMapUv:Ze&&v(E.specularMap.channel),specularColorMapUv:He&&v(E.specularColorMap.channel),specularIntensityMapUv:ct&&v(E.specularIntensityMap.channel),transmissionMapUv:I&&v(E.transmissionMap.channel),thicknessMapUv:oe&&v(E.thicknessMap.channel),alphaMapUv:K&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ye||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(vt||K),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:vt&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:ft&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=g[E.type];let P;if(M){const H=Tn[M];P=ah.clone(H.uniforms)}else P=E.uniforms;return P}function L(E,M){let P;for(let H=0,B=d.length;H<B;H++){const W=d[H];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new _g(i,M,E,s),d.push(P)),P}function C(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:R}}function bg(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function Eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(u,f,h,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,h,g,v,m){const p=r(u,f,h,g,v,m);h.transmission>0?n.push(p):h.transparent===!0?a.push(p):t.push(p)}function c(u,f,h,g,v,m){const p=r(u,f,h,g,v,m);h.transmission>0?n.unshift(p):h.transparent===!0?a.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Eg),n.length>1&&n.sort(f||rl),a.length>1&&a.sort(f||rl)}function d(){for(let u=e,f=i.length;u<f;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:o,unshift:c,finish:d,sort:l}}function wg(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new ol,i.set(n,[r])):a>=s.length?(r=new ol,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cg=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pg(i){const e=new Ag,t=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const a=new D,s=new ht,r=new ht;function o(l){let d=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,b=0,y=0,_=0,L=0,C=0,T=0;l.sort(Rg);for(let E=0,M=l.length;E<M;E++){const P=l[E],H=P.color,B=P.intensity,W=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*B,u+=H.g*B,f+=H.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);T++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ae=P.shadow,G=t.get(P);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=Q,n.directionalShadowMatrix[h]=P.shadow.matrix,b++}n.directional[h]=q,h++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(H).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;const ae=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ae.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[v]=ae.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Q,_++}v++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(H).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const ae=P.shadow,G=t.get(P);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,R.directionalLength=h,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=T,n.version=Cg++)}function c(l,d){let u=0,f=0,h=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function cl(i){const e=new Pg(i),t=[],n=[];function a(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:r}}function Dg(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new cl(i),e.set(a,[o])):s>=r.length?(o=new cl(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Lg extends Pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ig extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Ng(i,e,t){let n=new $o;const a=new pe,s=new pe,r=new Mt,o=new Lg({depthPacking:Cu}),c=new Ig,l={},d=t.maxTextureSize,u={[oi]:Qt,[Qt]:oi,[bn]:bn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Ug,fragmentShader:Fg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(C,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(si),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==kn&&this.type===kn,W=p===kn&&this.type!==kn;for(let Q=0,q=C.length;Q<q;Q++){const ae=C[Q],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const ce=G.getFrameExtents();if(a.multiply(ce),s.copy(G.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/ce.x),a.x=s.x*ce.x,G.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/ce.y),a.y=s.y*ce.y,G.mapSize.y=s.y)),G.map===null||B===!0||W===!0){const Te=this.type!==kn?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new Ti(a.x,a.y,Te),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const me=G.getViewportCount();for(let Te=0;Te<me;Te++){const We=G.getViewport(Te);r.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),H.viewport(r),G.updateMatrices(ae,Te),n=G.getFrustum(),_(T,R,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&b(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function b(C,T){const R=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ti(a.x,a.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,R,h,v,null)}function y(C,T,R,E){let M=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=M.uuid,B=T.uuid;let W=l[H];W===void 0&&(W={},l[H]=W);let Q=W[B];Q===void 0&&(Q=M.clone(),W[B]=Q,T.addEventListener("dispose",L)),M=Q}if(M.visible=T.visible,M.wireframe=T.wireframe,E===kn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=R}return M}function _(C,T,R,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),W=C.material;if(Array.isArray(W)){const Q=B.groups;for(let q=0,ae=Q.length;q<ae;q++){const G=Q[q],ce=W[G.materialIndex];if(ce&&ce.visible){const me=y(C,ce,E,M);C.onBeforeShadow(i,C,T,R,B,me,G),i.renderBufferDirect(R,null,B,me,C,G),C.onAfterShadow(i,C,T,R,B,me,G)}}}else if(W.visible){const Q=y(C,W,E,M);C.onBeforeShadow(i,C,T,R,B,Q,null),i.renderBufferDirect(R,null,B,Q,C,null),C.onAfterShadow(i,C,T,R,B,Q,null)}}const H=C.children;for(let B=0,W=H.length;B<W;B++)_(H[B],T,R,E,M)}function L(C){C.target.removeEventListener("dispose",L);for(const R in l){const E=l[R],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Og={[Vr]:Gr,[Wr]:Xr,[qr]:Yr,[oa]:$r,[Gr]:Vr,[Xr]:Wr,[Yr]:qr,[$r]:oa};function Bg(i,e){function t(){let I=!1;const oe=new Mt;let V=null;const K=new Mt(0,0,0,0);return{setMask:function(fe){V!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ue,Be,yt,Nt){Nt===!0&&(fe*=yt,ue*=yt,Be*=yt),oe.set(fe,ue,Be,yt),K.equals(oe)===!1&&(i.clearColor(fe,ue,Be,yt),K.copy(oe))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,V=null,K=null,fe=null;return{setReversed:function(ue){if(oe!==ue){const Be=e.get("EXT_clip_control");oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=fe;fe=null,this.setClear(yt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?le(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!I&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(oe&&(ue=Og[ue]),K!==ue){switch(ue){case Vr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case Wr:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case $r:i.depthFunc(i.GEQUAL);break;case Xr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ue}},setLocked:function(ue){I=ue},setClear:function(ue){fe!==ue&&(oe&&(ue=1-ue),i.clearDepth(ue),fe=ue)},reset:function(){I=!1,V=null,K=null,fe=null,oe=!1}}}function a(){let I=!1,oe=null,V=null,K=null,fe=null,ue=null,Be=null,yt=null,Nt=null;return{setTest:function(it){I||(it?le(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(it){oe!==it&&!I&&(i.stencilMask(it),oe=it)},setFunc:function(it,mn,Ln){(V!==it||K!==mn||fe!==Ln)&&(i.stencilFunc(it,mn,Ln),V=it,K=mn,fe=Ln)},setOp:function(it,mn,Ln){(ue!==it||Be!==mn||yt!==Ln)&&(i.stencilOp(it,mn,Ln),ue=it,Be=mn,yt=Ln)},setLocked:function(it){I=it},setClear:function(it){Nt!==it&&(i.clearStencil(it),Nt=it)},reset:function(){I=!1,oe=null,V=null,K=null,fe=null,ue=null,Be=null,yt=null,Nt=null}}}const s=new t,r=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,b=null,y=null,_=null,L=null,C=null,T=new Oe(0,0,0),R=0,E=!1,M=null,P=null,H=null,B=null,W=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ae=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=ae>=2);let ce=null,me={};const Te=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ot=new Mt().fromArray(Te),Z=new Mt().fromArray(We);function se(I,oe,V,K){const fe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(I,ue),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<V;Be++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ue}const be={};be[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),le(i.DEPTH_TEST),r.setFunc(oa),Xe(!1),Ye(pc),le(i.CULL_FACE),N(si);function le(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function De(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ne(I,oe){return u[I]!==oe?(i.bindFramebuffer(I,oe),u[I]=oe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function qe(I,oe){let V=h,K=!1;if(I){V=f.get(oe),V===void 0&&(V=[],f.set(oe,V));const fe=I.textures;if(V.length!==fe.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Be=fe.length;ue<Be;ue++)V[ue]=i.COLOR_ATTACHMENT0+ue;V.length=fe.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function vt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const je={[yi]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};je[nu]=i.MIN,je[iu]=i.MAX;const St={[au]:i.ZERO,[su]:i.ONE,[ru]:i.SRC_COLOR,[zr]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[cu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[Hr]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,oe,V,K,fe,ue,Be,yt,Nt,it){if(I===si){v===!0&&(De(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),I!==Qd){if(I!==m||it!==E){if((p!==yi||_!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,_=yi),it)switch(I){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,L=null,C=null,T.set(0,0,0),R=0,m=I,E=it}return}fe=fe||oe,ue=ue||V,Be=Be||K,(oe!==p||fe!==_)&&(i.blendEquationSeparate(je[oe],je[fe]),p=oe,_=fe),(V!==b||K!==y||ue!==L||Be!==C)&&(i.blendFuncSeparate(St[V],St[K],St[ue],St[Be]),b=V,y=K,L=ue,C=Be),(yt.equals(T)===!1||Nt!==R)&&(i.blendColor(yt.r,yt.g,yt.b,Nt),T.copy(yt),R=Nt),m=I,E=!1}function on(I,oe){I.side===bn?De(i.CULL_FACE):le(i.CULL_FACE);let V=I.side===Qt;oe&&(V=!V),Xe(V),I.blending===na&&I.transparent===!1?N(si):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ft(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Ye(I){I!==Jd?(le(i.CULL_FACE),I!==P&&(I===pc?i.cullFace(i.BACK):I===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),P=I}function Re(I){I!==H&&(q&&i.lineWidth(I),H=I)}function ft(I,oe,V){I?(le(i.POLYGON_OFFSET_FILL),(B!==oe||W!==V)&&(i.polygonOffset(oe,V),B=oe,W=V)):De(i.POLYGON_OFFSET_FILL)}function Ce(I){I?le(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+Q-1),ce!==I&&(i.activeTexture(I),ce=I)}function x(I,oe,V){V===void 0&&(ce===null?V=i.TEXTURE0+Q-1:V=ce);let K=me[V];K===void 0&&(K={type:void 0,texture:void 0},me[V]=K),(K.type!==I||K.texture!==oe)&&(ce!==V&&(i.activeTexture(V),ce=V),i.bindTexture(I,oe||be[I]),K.type=I,K.texture=oe)}function O(){const I=me[ce];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){ot.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ot.copy(I))}function _e(I){Z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Ze(I,oe){let V=l.get(oe);V===void 0&&(V=new WeakMap,l.set(oe,V));let K=V.get(I);K===void 0&&(K=i.getUniformBlockIndex(oe,I.name),V.set(I,K))}function He(I,oe){const K=l.get(oe).get(I);c.get(oe)!==K&&(i.uniformBlockBinding(oe,K,I.__bindingPointIndex),c.set(oe,K))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,me={},u={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,b=null,y=null,_=null,L=null,C=null,T=new Oe(0,0,0),R=0,E=!1,M=null,P=null,H=null,B=null,W=null,ot.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:le,disable:De,bindFramebuffer:Ne,drawBuffers:qe,useProgram:vt,setBlending:N,setMaterial:on,setFlipSided:Xe,setCullFace:Ye,setLineWidth:Re,setPolygonOffset:ft,setScissorTest:Ce,activeTexture:A,bindTexture:x,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Ze,uniformBlockBinding:He,texStorage2D:Je,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Ie,viewport:_e,reset:ct}}function ll(i,e,t,n){const a=kg(n);switch(t){case Yl:return i*e;case jl:return i*e;case Jl:return i*e*2;case Kl:return i*e/a.components*a.byteLength;case Ho:return i*e/a.components*a.byteLength;case Ql:return i*e*2/a.components*a.byteLength;case Vo:return i*e*2/a.components*a.byteLength;case Zl:return i*e*3/a.components*a.byteLength;case En:return i*e*4/a.components*a.byteLength;case Go:return i*e*4/a.components*a.byteLength;case Ts:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:case no:return Math.max(i,16)*Math.max(e,8)/4;case Qr:case to:return Math.max(i,8)*Math.max(e,8)/2;case io:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ds:case Mo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ed:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kg(i){switch(i){case Xn:case ql:return{byteLength:1,components:1};case Fa:case $l:case Ha:return{byteLength:2,components:1};case ko:case zo:return{byteLength:2,components:4};case Ai:case Bo:case Vn:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zg(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return h?new OffscreenCanvas(A,x):zs("canvas")}function v(A,x,O){let J=1;const ee=Ce(A);if((ee.width>O||ee.height>O)&&(J=O/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(J*ee.width),Ee=Math.floor(J*ee.height);u===void 0&&(u=g(Y,Ee));const de=x?g(Y,Ee):u;return de.width=Y,de.height=Ee,de.getContext("2d").drawImage(A,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ee+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,O,J,ee=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const Ee=ee?qs:Qe.getTransfer(J);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,x){let O;return A?x===null||x===Ai||x===da?O=i.DEPTH24_STENCIL8:x===Vn?O=i.DEPTH32F_STENCIL8:x===Fa&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===da?O=i.DEPTH_COMPONENT24:x===Vn?O=i.DEPTH_COMPONENT32F:x===Fa&&(O=i.DEPTH_COMPONENT16),O}function L(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),R(x),x.isVideoTexture&&d.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),M(x)}function R(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,J=f.get(O);if(J){const ee=J[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(A),Object.keys(J).length===0&&f.delete(O)}n.remove(A)}function E(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const O=A.source,J=f.get(O);delete J[x.__cacheKey],r.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ee=0;ee<x.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let J=0,ee=O.length;J<ee;J++){const Y=n.get(O[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(O[J])}n.remove(A)}let P=0;function H(){P=0}function B(){const A=P;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),P+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const O=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,A,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function q(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Z(O,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function ae(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Z(O,A,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function G(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const ce={[Jr]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},me={[wn]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Te={[Pu]:i.NEVER,[Nu]:i.ALWAYS,[Du]:i.LESS,[nd]:i.LEQUAL,[Lu]:i.EQUAL,[Fu]:i.GEQUAL,[Iu]:i.GREATER,[Uu]:i.NOTEQUAL};function We(A,x){if(x.type===Vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rn||x.magFilter===Qs||x.magFilter===Xa||x.magFilter===Ei||x.minFilter===Rn||x.minFilter===Qs||x.minFilter===Xa||x.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,me[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==Xa&&x.minFilter!==Ei||x.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ot(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const J=x.source;let ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));const Y=W(x);if(Y!==A.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),ee[Y].usedTimes++;const Ee=ee[A.__cacheKey];Ee!==void 0&&(ee[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(x)),A.__cacheKey=Y,A.__webglTexture=ee[Y].texture}return O}function Z(A,x,O){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const ee=ot(A,x),Y=x.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+O);const Ee=n.get(Y);if(Y.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const de=Qe.getPrimaries(Qe.workingColorSpace),ge=x.colorSpace===ii?null:Qe.getPrimaries(x.colorSpace),Je=x.colorSpace===ii||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ne=v(x.image,!1,a.maxTextureSize);ne=ft(x,ne);const ve=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let Ie=y(x.internalFormat,ve,Pe,x.colorSpace,x.isVideoTexture);We(J,x);let _e;const Ze=x.mipmaps,He=x.isVideoTexture!==!0,ct=Ee.__version===void 0||ee===!0,I=Y.dataReady,oe=L(x,ne);if(x.isDepthTexture)Ie=_(x.format===ua,x.type),ct&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,Pe,null));else if(x.isDataTexture)if(Ze.length>0){He&&ct&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,Ze[0].width,Ze[0].height);for(let V=0,K=Ze.length;V<K;V++)_e=Ze[V],He?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,V,Ie,_e.width,_e.height,0,ve,Pe,_e.data);x.generateMipmaps=!1}else He?(ct&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,ne.width,ne.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Pe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,Pe,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ie,Ze[0].width,Ze[0].height,ne.depth);for(let V=0,K=Ze.length;V<K;V++)if(_e=Ze[V],x.format!==En)if(ve!==null)if(He){if(I)if(x.layerUpdates.size>0){const fe=ll(_e.width,_e.height,x.format,x.type);for(const ue of x.layerUpdates){const Be=_e.data.subarray(ue*fe/_e.data.BYTES_PER_ELEMENT,(ue+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,ve,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ne.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ie,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ne.depth,ve,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ie,_e.width,_e.height,ne.depth,0,ve,Pe,_e.data)}else{He&&ct&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,Ze[0].width,Ze[0].height);for(let V=0,K=Ze.length;V<K;V++)_e=Ze[V],x.format!==En?ve!==null?He?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,V,Ie,_e.width,_e.height,0,ve,Pe,_e.data)}else if(x.isDataArrayTexture)if(He){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ie,ne.width,ne.height,ne.depth),I)if(x.layerUpdates.size>0){const V=ll(ne.width,ne.height,x.format,x.type);for(const K of x.layerUpdates){const fe=ne.data.subarray(K*V/ne.data.BYTES_PER_ELEMENT,(K+1)*V/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,ve,Pe,fe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Pe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ve,Pe,ne.data);else if(x.isData3DTexture)He?(ct&&t.texStorage3D(i.TEXTURE_3D,oe,Ie,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Pe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ve,Pe,ne.data);else if(x.isFramebufferTexture){if(ct)if(He)t.texStorage2D(i.TEXTURE_2D,oe,Ie,ne.width,ne.height);else{let V=ne.width,K=ne.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ie,V,K,0,ve,Pe,null),V>>=1,K>>=1}}else if(Ze.length>0){if(He&&ct){const V=Ce(Ze[0]);t.texStorage2D(i.TEXTURE_2D,oe,Ie,V.width,V.height)}for(let V=0,K=Ze.length;V<K;V++)_e=Ze[V],He?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve,Pe,_e):t.texImage2D(i.TEXTURE_2D,V,Ie,ve,Pe,_e);x.generateMipmaps=!1}else if(He){if(ct){const V=Ce(ne);t.texStorage2D(i.TEXTURE_2D,oe,Ie,V.width,V.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Pe,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ve,Pe,ne);m(x)&&p(J),Ee.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function se(A,x,O){if(x.image.length!==6)return;const J=ot(A,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const Y=n.get(ee);if(ee.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const Ee=Qe.getPrimaries(Qe.workingColorSpace),de=x.colorSpace===ii?null:Qe.getPrimaries(x.colorSpace),ge=x.colorSpace===ii||Ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Je=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let K=0;K<6;K++)!Je&&!ne?ve[K]=v(x.image[K],!0,a.maxCubemapSize):ve[K]=ne?x.image[K].image:x.image[K],ve[K]=ft(x,ve[K]);const Pe=ve[0],Ie=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),Ze=y(x.internalFormat,Ie,_e,x.colorSpace),He=x.isVideoTexture!==!0,ct=Y.__version===void 0||J===!0,I=ee.dataReady;let oe=L(x,Pe);We(i.TEXTURE_CUBE_MAP,x);let V;if(Je){He&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ze,Pe.width,Pe.height);for(let K=0;K<6;K++){V=ve[K].mipmaps;for(let fe=0;fe<V.length;fe++){const ue=V[fe];x.format!==En?Ie!==null?He?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,Ze,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,ue.width,ue.height,Ie,_e,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,Ze,ue.width,ue.height,0,Ie,_e,ue.data)}}}else{if(V=x.mipmaps,He&&ct){V.length>0&&oe++;const K=Ce(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ze,K.width,K.height)}for(let K=0;K<6;K++)if(ne){He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve[K].width,ve[K].height,Ie,_e,ve[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ze,ve[K].width,ve[K].height,0,Ie,_e,ve[K].data);for(let fe=0;fe<V.length;fe++){const Be=V[fe].image[K].image;He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Be.width,Be.height,Ie,_e,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,Ze,Be.width,Be.height,0,Ie,_e,Be.data)}}else{He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ie,_e,ve[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ze,Ie,_e,ve[K]);for(let fe=0;fe<V.length;fe++){const ue=V[fe];He?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Ie,_e,ue.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,Ze,Ie,_e,ue.image[K])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function be(A,x,O,J,ee,Y){const Ee=s.convert(O.format,O.colorSpace),de=s.convert(O.type),ge=y(O.internalFormat,Ee,de,O.colorSpace),Je=n.get(x),ne=n.get(O);if(ne.__renderTarget=x,!Je.__hasExternalTextures){const ve=Math.max(1,x.width>>Y),Pe=Math.max(1,x.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,ge,ve,Pe,x.depth,0,Ee,de,null):t.texImage2D(ee,Y,ge,ve,Pe,0,Ee,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ee,ne.__webglTexture,0,Xe(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ee,ne.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const J=x.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Y=_(x.stencilBuffer,ee),Ee=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Xe(x);Ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Y,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,A)}else{const J=x.textures;for(let ee=0;ee<J.length;ee++){const Y=J[ee],Ee=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ge=y(Y.internalFormat,Ee,de,Y.colorSpace),Je=Xe(x);O&&Ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ge,x.width,x.height):Ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,ge,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ge,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const ee=J.__webglTexture,Y=Xe(x);if(x.depthTexture.format===ia)Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===ua)Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),le(x.__webglDepthbuffer[J],A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,x,O){const J=n.get(A);x!==void 0&&be(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ne(A)}function vt(A){const x=A.texture,O=n.get(A),J=n.get(x);A.addEventListener("dispose",T);const ee=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,r.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ge=0;ge<x.mipmaps.length;ge++)O.__webglFramebuffer[de][ge]=i.createFramebuffer()}else O.__webglFramebuffer[de]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[de]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let de=0,ge=ee.length;de<ge;de++){const Je=n.get(ee[de]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&Ye(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ge=ee[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Je=s.convert(ge.format,ge.colorSpace),ne=s.convert(ge.type),ve=y(ge.internalFormat,Je,ne,ge.colorSpace,A.isXRRenderTarget===!0),Pe=Xe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),le(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),We(i.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)be(O.__webglFramebuffer[de][ge],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else be(O.__webglFramebuffer[de],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,ge=ee.length;de<ge;de++){const Je=ee[de],ne=n.get(Je);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),We(i.TEXTURE_2D,Je),be(O.__webglFramebuffer,A,Je,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),We(de,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)be(O.__webglFramebuffer[ge],A,x,i.COLOR_ATTACHMENT0,de,ge);else be(O.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,de,0);m(x)&&p(de),t.unbindTexture()}A.depthBuffer&&Ne(A)}function je(A){const x=A.textures;for(let O=0,J=x.length;O<J;O++){const ee=x[O];if(m(ee)){const Y=b(A),Ee=n.get(ee).__webglTexture;t.bindTexture(Y,Ee),p(Y),t.unbindTexture()}}}const St=[],N=[];function on(A){if(A.samples>0){if(Ye(A)===!1){const x=A.textures,O=A.width,J=A.height;let ee=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(A),de=x.length>1;if(de)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Je=n.get(x[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,ee,i.NEAREST),c===!0&&(St.length=0,N.length=0,St.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(St.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Je=n.get(x[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Xe(A){return Math.min(a.maxSamples,A.samples)}function Ye(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Re(A){const x=r.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function ft(A,x){const O=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ma&&O!==ii&&(Qe.getTransfer(O)===at?(J!==En||ee!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function Hg(i,e){function t(n,a=ii){let s;const r=Qe.getTransfer(a);if(n===Xn)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===$l)return i.SHORT;if(n===Fa)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Ha)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===En)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===ia)return i.DEPTH_COMPONENT;if(n===ua)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===Vo)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===Ts||n===Cs||n===Rs||n===Ps)if(r===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===ao||n===so)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===io||n===ao)return r===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===so)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ro)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===Mo||n===So)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ds)return r===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===So)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ed||n===bo||n===Eo||n===wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ds)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===da?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Vg extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class st extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new $t,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:Wg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xg extends ga{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,g=null;const v=new $g,m=t.getContextAttributes();let p=null,b=null;const y=[],_=[],L=new pe;let C=null;const T=new Sn;T.viewport=new Mt;const R=new Sn;R.viewport=new Mt;const E=[T,R],M=new Vg;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=y[Z];return se===void 0&&(se=new Cr,y[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=y[Z];return se===void 0&&(se=new Cr,y[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=y[Z];return se===void 0&&(se=new Cr,y[Z]=se),se.getHandSpace()};function B(Z){const se=_.indexOf(Z.inputSource);if(se===-1)return;const be=y[se];be!==void 0&&(be.update(Z.inputSource,Z.frame,l||r),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<y.length;Z++){const se=_[Z];se!==null&&(_[Z]=null,y[Z].disconnect(se))}P=null,H=null,v.reset(),e.setRenderTarget(p),h=null,f=null,u=null,a=null,b=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",W),a.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),a.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,se),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Ti(h.framebufferWidth,h.framebufferHeight,{format:En,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,be=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?ua:ia,be=m.stencil?da:Ai);const De={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(a,t),f=u.createProjectionLayer(De),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ti(f.textureWidth,f.textureHeight,{format:En,type:Xn,depthTexture:new fd(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),ot.setContext(a),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(Z){for(let se=0;se<Z.removed.length;se++){const be=Z.removed[se],le=_.indexOf(be);le>=0&&(_[le]=null,y[le].disconnect(be))}for(let se=0;se<Z.added.length;se++){const be=Z.added[se];let le=_.indexOf(be);if(le===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=_.length){_.push(be),le=Ne;break}else if(_[Ne]===null){_[Ne]=be,le=Ne;break}if(le===-1)break}const De=y[le];De&&De.connect(be)}}const q=new D,ae=new D;function G(Z,se,be){q.setFromMatrixPosition(se.matrixWorld),ae.setFromMatrixPosition(be.matrixWorld);const le=q.distanceTo(ae),De=se.projectionMatrix.elements,Ne=be.projectionMatrix.elements,qe=De[14]/(De[10]-1),vt=De[14]/(De[10]+1),je=(De[9]+1)/De[5],St=(De[9]-1)/De[5],N=(De[8]-1)/De[0],on=(Ne[8]+1)/Ne[0],Xe=qe*N,Ye=qe*on,Re=le/(-N+on),ft=Re*-N;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ft),Z.translateZ(Re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ce=qe+Re,A=vt+Re,x=Xe-ft,O=Ye+(le-ft),J=je*vt/A*Ce,ee=St*vt/A*Ce;Z.projectionMatrix.makePerspective(x,O,J,ee,Ce,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let se=Z.near,be=Z.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(be=v.depthFar)),M.near=R.near=T.near=se,M.far=R.far=T.far=be,(P!==M.near||H!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),T.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const le=Z.parent,De=M.cameras;ce(M,le);for(let Ne=0;Ne<De.length;Ne++)ce(De[Ne],le);De.length===2?G(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),me(Z,M,le)};function me(Z,se,be){be===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=To*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Te=null;function We(Z,se){if(d=se.getViewerPose(l||r),g=se,d!==null){const be=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let le=!1;be.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ne=0;Ne<be.length;Ne++){const qe=be[Ne];let vt=null;if(h!==null)vt=h.getViewport(qe);else{const St=u.getViewSubImage(f,qe);vt=St.viewport,Ne===0&&(e.setRenderTargetTextures(b,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(b))}let je=E[Ne];je===void 0&&(je=new Sn,je.layers.enable(Ne),je.viewport=new Mt,E[Ne]=je),je.matrix.fromArray(qe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(qe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(vt.x,vt.y,vt.width,vt.height),Ne===0&&(M.matrix.copy(je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(je)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ne=u.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,a.renderState)}}for(let be=0;be<y.length;be++){const le=_[be],De=y[be];le!==null&&De!==void 0&&De.update(le,se,l||r)}Te&&Te(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const ot=new hd;ot.setAnimationLoop(We),this.setAnimationLoop=function(Z){Te=Z},this.dispose=function(){}}}const gi=new Pn,Yg=new ht;function Zg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,b,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,_=b.envMapRotation;y&&(m.envMap.value=y,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function jg(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=a[b.id];_===void 0&&(g(b),_=d(b),a[b.id]=_,b.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(b,L);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function d(b){const y=u();b.__bindingPointIndex=y;const _=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=a[b.id],_=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,T=_.length;C<T;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,M=R.length;E<M;E++){const P=R[E];if(h(P,C,E,L)===!0){const H=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Q=0;Q<B.length;Q++){const q=B[Q],ae=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,y,_,L){const C=b.value,T=y+"_"+_;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const R=L[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return L[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(b){const y=b.uniforms;let _=0;const L=16;for(let T=0,R=y.length;T<R;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=E.length;M<P;M++){const H=E[M],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Q=B.length;W<Q;W++){const q=B[W],ae=v(q),G=_%L,ce=G%ae.boundary,me=G+ce;_+=ce,me!==0&&L-me<ae.storage&&(_+=L-me),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ae.storage}}}const C=_%L;return C>0&&(_+=L-C),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function p(){for(const b in a)i.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:c,update:l,dispose:p}}class Jg{constructor(e={}){const{canvas:t=Bu(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let L=!1,C=0,T=0,R=null,E=-1,M=null;const P=new Mt,H=new Mt;let B=null;const W=new Oe(0);let Q=0,q=t.width,ae=t.height,G=1,ce=null,me=null;const Te=new Mt(0,0,q,ae),We=new Mt(0,0,q,ae);let ot=!1;const Z=new $o;let se=!1,be=!1;const le=new ht,De=new ht,Ne=new D,qe=new Mt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function St(){return R===null?G:1}let N=n;function on(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),N===null){const U="webgl2";if(N=on(U,S),N===null)throw on(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Xe,Ye,Re,ft,Ce,A,x,O,J,ee,Y,Ee,de,ge,Je,ne,ve,Pe,Ie,_e,Ze,He,ct,I;function oe(){Xe=new nm(N),Xe.init(),He=new Hg(N,Xe),Ye=new jp(N,Xe,e,He),Re=new Bg(N,Xe),Ye.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),ft=new sm(N),Ce=new bg,A=new zg(N,Xe,Re,Ce,Ye,He,ft),x=new Kp(_),O=new tm(_),J=new uh(N),ct=new Yp(N,J),ee=new im(N,J,ft,ct),Y=new om(N,ee,J,ft),Ie=new rm(N,Ye,A),ne=new Jp(Ce),Ee=new Sg(_,x,O,Xe,Ye,ct,ne),de=new Zg(_,Ce),ge=new wg,Je=new Dg(Xe),Pe=new Xp(_,x,O,Re,Y,h,c),ve=new Ng(_,Y,Ye),I=new jg(N,ft,Ye,Re),_e=new Zp(N,Xe,ft),Ze=new am(N,Xe,ft),ft.programs=Ee.programs,_.capabilities=Ye,_.extensions=Xe,_.properties=Ce,_.renderLists=ge,_.shadowMap=ve,_.state=Re,_.info=ft}oe();const V=new Xg(_,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(q,ae,!1))},this.getSize=function(S){return S.set(q,ae)},this.setSize=function(S,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,ae=U,t.width=Math.floor(S*G),t.height=Math.floor(U*G),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*G,ae*G).floor()},this.setDrawingBufferSize=function(S,U,k){q=S,ae=U,G=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,U,k,z){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,U,k,z),Re.viewport(P.copy(Te).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,U,k,z){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,U,k,z),Re.scissor(H.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){Re.setScissorTest(ot=S)},this.setOpaqueSort=function(S){ce=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,U=!0,k=!0){let z=0;if(S){let F=!1;if(R!==null){const ie=R.texture.format;F=ie===Go||ie===Vo||ie===Ho}if(F){const ie=R.texture.type,he=ie===Xn||ie===Ai||ie===Fa||ie===da||ie===ko||ie===zo,ye=Pe.getClearColor(),Me=Pe.getClearAlpha(),Fe=ye.r,ke=ye.g,Se=ye.b;he?(g[0]=Fe,g[1]=ke,g[2]=Se,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=Se,v[3]=Me,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),Je.dispose(),Ce.dispose(),x.dispose(),O.dispose(),Y.dispose(),ct.dispose(),I.dispose(),Ee.dispose(),V.dispose(),V.removeEventListener("sessionstart",ac),V.removeEventListener("sessionend",sc),di.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=ft.autoReset,U=ve.enabled,k=ve.autoUpdate,z=ve.needsUpdate,F=ve.type;oe(),ft.autoReset=S,ve.enabled=U,ve.autoUpdate=k,ve.needsUpdate=z,ve.type=F}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const U=S.target;U.removeEventListener("dispose",Be),yt(U)}function yt(S){Nt(S),Ce.remove(S)}function Nt(S){const U=Ce.get(S).programs;U!==void 0&&(U.forEach(function(k){Ee.releaseProgram(k)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,z,F,ie){U===null&&(U=vt);const he=F.isMesh&&F.matrixWorld.determinant()<0,ye=$d(S,U,k,z,F);Re.setMaterial(z,he);let Me=k.index,Fe=1;if(z.wireframe===!0){if(Me=ee.getWireframeAttribute(k),Me===void 0)return;Fe=2}const ke=k.drawRange,Se=k.attributes.position;let et=ke.start*Fe,lt=(ke.start+ke.count)*Fe;ie!==null&&(et=Math.max(et,ie.start*Fe),lt=Math.min(lt,(ie.start+ie.count)*Fe)),Me!==null?(et=Math.max(et,0),lt=Math.min(lt,Me.count)):Se!=null&&(et=Math.max(et,0),lt=Math.min(lt,Se.count));const pt=lt-et;if(pt<0||pt===1/0)return;ct.setup(F,z,ye,k,Me);let Yt,tt=_e;if(Me!==null&&(Yt=J.get(Me),tt=Ze,tt.setIndex(Yt)),F.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*St()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(F.isLine){let we=z.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*St()),F.isLineSegments?tt.setMode(N.LINES):F.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else F.isPoints?tt.setMode(N.POINTS):F.isSprite&&tt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,In=F._multiDrawCounts,nt=F._multiDrawCount,gn=Me?J.get(Me).bytesPerElement:1,Di=Ce.get(z).currentProgram.getUniforms();for(let en=0;en<nt;en++)Di.setValue(N,"_gl_DrawID",en),tt.render(we[en]/gn,In[en])}else if(F.isInstancedMesh)tt.renderInstances(et,pt,F.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,In=Math.min(k.instanceCount,we);tt.renderInstances(et,pt,In)}else tt.render(et,pt)};function it(S,U,k){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,$a(S,U,k),S.side=oi,S.needsUpdate=!0,$a(S,U,k),S.side=bn):$a(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=Je.get(k),p.init(U),y.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const ye=ie[he];it(ye,k,F),z.add(ye)}else it(ie,k,F),z.add(ie)}),y.pop(),p=null,z},this.compileAsync=function(S,U,k=null){const z=this.compile(S,U,k);return new Promise(F=>{function ie(){if(z.forEach(function(he){Ce.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){F(S);return}setTimeout(ie,10)}Xe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let mn=null;function Ln(S){mn&&mn(S)}function ac(){di.stop()}function sc(){di.start()}const di=new hd;di.setAnimationLoop(Ln),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){mn=S,V.setAnimationLoop(S),S===null?di.stop():di.start()},V.addEventListener("sessionstart",ac),V.addEventListener("sessionend",sc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,R),p=Je.get(S,y.length),p.init(U),y.push(p),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(De),be=this.localClippingEnabled,se=ne.init(this.clippingPlanes,be),m=ge.get(S,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&Ks(ie,U,-1/0,_.sortObjects)}Ks(S,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ce,me),je=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,je&&Pe.addToRenderList(m,S),this.info.render.frame++,se===!0&&ne.beginShadows();const k=p.state.shadowsArray;ve.render(k,S,U),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ie=U.cameras;if(F.length>0)for(let he=0,ye=ie.length;he<ye;he++){const Me=ie[he];oc(z,F,S,Me)}je&&Pe.render(S);for(let he=0,ye=ie.length;he<ye;he++){const Me=ie[he];rc(m,S,Me,Me.viewport)}}else F.length>0&&oc(z,F,S,U),je&&Pe.render(S),rc(m,S,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(_,S,U),ct.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&ne.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ks(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){z&&qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);const he=Y.update(S),ye=S.material;ye.visible&&m.push(S,he,ye,k,qe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const he=Y.update(S),ye=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qe.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),qe.copy(he.boundingSphere.center)),qe.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(ye)){const Me=he.groups;for(let Fe=0,ke=Me.length;Fe<ke;Fe++){const Se=Me[Fe],et=ye[Se.materialIndex];et&&et.visible&&m.push(S,he,et,k,qe.z,Se)}}else ye.visible&&m.push(S,he,ye,k,qe.z,null)}}const ie=S.children;for(let he=0,ye=ie.length;he<ye;he++)Ks(ie[he],U,k,z)}function rc(S,U,k,z){const F=S.opaque,ie=S.transmissive,he=S.transparent;p.setupLightsView(k),se===!0&&ne.setGlobalState(_.clippingPlanes,k),z&&Re.viewport(P.copy(z)),F.length>0&&qa(F,U,k),ie.length>0&&qa(ie,U,k),he.length>0&&qa(he,U,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function oc(S,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ti(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ha:Xn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=p.state.transmissionRenderTarget[z.id],he=z.viewport||P;ie.setSize(he.z,he.w);const ye=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(W),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),je&&Pe.render(k);const Me=_.toneMapping;_.toneMapping=ri;const Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),se===!0&&ne.setGlobalState(_.clippingPlanes,z),qa(S,k,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,et=U.length;Se<et;Se++){const lt=U[Se],pt=lt.object,Yt=lt.geometry,tt=lt.material,we=lt.group;if(tt.side===bn&&pt.layers.test(z.layers)){const In=tt.side;tt.side=Qt,tt.needsUpdate=!0,cc(pt,k,z,Yt,tt,we),tt.side=In,tt.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}_.setRenderTarget(ye),_.setClearColor(W,Q),Fe!==void 0&&(z.viewport=Fe),_.toneMapping=Me}function qa(S,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=S.length;F<ie;F++){const he=S[F],ye=he.object,Me=he.geometry,Fe=z===null?he.material:z,ke=he.group;ye.layers.test(k.layers)&&cc(ye,U,k,Me,Fe,ke)}}function cc(S,U,k,z,F,ie){S.onBeforeRender(_,U,k,z,F,ie),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,U,k,z,S,ie),F.transparent===!0&&F.side===bn&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,_.renderBufferDirect(k,U,z,F,S,ie),F.side=oi,F.needsUpdate=!0,_.renderBufferDirect(k,U,z,F,S,ie),F.side=bn):_.renderBufferDirect(k,U,z,F,S,ie),S.onAfterRender(_,U,k,z,F,ie)}function $a(S,U,k){U.isScene!==!0&&(U=vt);const z=Ce.get(S),F=p.state.lights,ie=p.state.shadowsArray,he=F.state.version,ye=Ee.getParameters(S,F.state,ie,U,k),Me=Ee.getProgramCacheKey(ye);let Fe=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?O:x).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Be),Fe=new Map,z.programs=Fe);let ke=Fe.get(Me);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===he)return dc(S,ye),ke}else ye.uniforms=Ee.getUniforms(S),S.onBeforeCompile(ye,_),ke=Ee.acquireProgram(ye,Me),Fe.set(Me,ke),z.uniforms=ye.uniforms;const Se=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=ne.uniform),dc(S,ye),z.needsLights=Yd(S),z.lightsStateVersion=he,z.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=ke,z.uniformsList=null,ke}function lc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function dc(S,U){const k=Ce.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function $d(S,U,k,z,F){U.isScene!==!0&&(U=vt),A.resetTextureUnits();const ie=U.fog,he=z.isMeshStandardMaterial?U.environment:null,ye=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ma,Me=(z.isMeshStandardMaterial?O:x).get(z.envMap||he),Fe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!k.morphAttributes.position,et=!!k.morphAttributes.normal,lt=!!k.morphAttributes.color;let pt=ri;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pt=_.toneMapping);const Yt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=Yt!==void 0?Yt.length:0,we=Ce.get(z),In=p.state.lights;if(se===!0&&(be===!0||S!==M)){const cn=S===M&&z.id===E;ne.setState(z,S,cn)}let nt=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==In.state.version||we.outputColorSpace!==ye||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==Me||z.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==Fe||we.vertexTangents!==ke||we.morphTargets!==Se||we.morphNormals!==et||we.morphColors!==lt||we.toneMapping!==pt||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=z.version);let gn=we.currentProgram;nt===!0&&(gn=$a(z,U,F));let Di=!1,en=!1,xa=!1;const mt=gn.getUniforms(),An=we.uniforms;if(Re.useProgram(gn.program)&&(Di=!0,en=!0,xa=!0),z.id!==E&&(E=z.id,en=!0),Di||M!==S){Re.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),zu(le),Hu(le),mt.setValue(N,"projectionMatrix",le)):mt.setValue(N,"projectionMatrix",S.projectionMatrix),mt.setValue(N,"viewMatrix",S.matrixWorldInverse);const Yn=mt.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,Ne.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,en=!0,xa=!0)}if(F.isSkinnedMesh){mt.setOptional(N,F,"bindMatrix"),mt.setOptional(N,F,"bindMatrixInverse");const cn=F.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),mt.setValue(N,"boneTexture",cn.boneTexture,A))}F.isBatchedMesh&&(mt.setOptional(N,F,"batchingTexture"),mt.setValue(N,"batchingTexture",F._matricesTexture,A),mt.setOptional(N,F,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",F._indirectTexture,A),mt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",F._colorsTexture,A));const ya=k.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&Ie.update(F,k,gn),(en||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,mt.setValue(N,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(An.envMap.value=Me,An.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),en&&(mt.setValue(N,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&Xd(An,xa),ie&&z.fog===!0&&de.refreshFogUniforms(An,ie),de.refreshMaterialUniforms(An,z,G,ae,p.state.transmissionRenderTarget[S.id]),Ls.upload(N,lc(we),An,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ls.upload(N,lc(we),An,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(N,"center",F.center),mt.setValue(N,"modelViewMatrix",F.modelViewMatrix),mt.setValue(N,"normalMatrix",F.normalMatrix),mt.setValue(N,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const cn=z.uniformsGroups;for(let Yn=0,Zn=cn.length;Yn<Zn;Yn++){const uc=cn[Yn];I.update(uc,gn),I.bind(uc,gn)}}return gn}function Xd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,k){Ce.get(S.texture).__webglTexture=U,Ce.get(S.depthTexture).__webglTexture=k;const z=Ce.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=Ce.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){R=S,C=U,T=k;let z=!0,F=null,ie=!1,he=!1;if(S){const Me=Ce.get(S);if(Me.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(Me.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Me.__hasExternalTextures)A.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(he=!0);const ke=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?F=ke[U][k]:F=ke[U],ie=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?F=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[k]:F=ke,P.copy(S.viewport),H.copy(S.scissor),B=S.scissorTest}else P.copy(Te).multiplyScalar(G).floor(),H.copy(We).multiplyScalar(G).floor(),B=ot;if(Re.bindFramebuffer(N.FRAMEBUFFER,F)&&z&&Re.drawBuffers(S,F),Re.viewport(P),Re.scissor(H),Re.setScissorTest(B),ie){const Me=Ce.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,k)}else if(he){const Me=Ce.get(S.texture),Fe=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,Fe)}E=-1},this.readRenderTargetPixels=function(S,U,k,z,F,ie,he){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Re.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Me=S.texture,Fe=Me.format,ke=Me.type;if(!Ye.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&k>=0&&k<=S.height-F&&N.readPixels(U,k,z,F,He.convert(Fe),He.convert(ke),ie)}finally{const Me=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,z,F,ie,he){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const Me=S.texture,Fe=Me.format,ke=Me.type;if(!Ye.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&k>=0&&k<=S.height-F){Re.bindFramebuffer(N.FRAMEBUFFER,ye);const Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),N.readPixels(U,k,z,F,He.convert(Fe),He.convert(ke),0);const et=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,et);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ku(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Se),N.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-k),F=Math.floor(S.image.width*z),ie=Math.floor(S.image.height*z),he=U!==null?U.x:0,ye=U!==null?U.y:0;A.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,he,ye,F,ie),Re.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,z=null,F=0){S.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let ie,he,ye,Me,Fe,ke,Se,et,lt;const pt=S.isCompressedTexture?S.mipmaps[F]:S.image;k!==null?(ie=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.isBox3?k.max.z-k.min.z:1,Me=k.min.x,Fe=k.min.y,ke=k.isBox3?k.min.z:0):(ie=pt.width,he=pt.height,ye=pt.depth||1,Me=0,Fe=0,ke=0),z!==null?(Se=z.x,et=z.y,lt=z.z):(Se=0,et=0,lt=0);const Yt=He.convert(U.format),tt=He.convert(U.type);let we;U.isData3DTexture?(A.setTexture3D(U,0),we=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),we=N.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const In=N.getParameter(N.UNPACK_ROW_LENGTH),nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),Di=N.getParameter(N.UNPACK_SKIP_ROWS),en=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const xa=S.isDataArrayTexture||S.isData3DTexture,mt=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const An=Ce.get(S),ya=Ce.get(U),cn=Ce.get(An.__renderTarget),Yn=Ce.get(ya.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,cn.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<ye;Zn++)xa&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,F,ke+Zn),S.isDepthTexture?(mt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,F,lt+Zn),N.blitFramebuffer(Me,Fe,ie,he,Se,et,ie,he,N.DEPTH_BUFFER_BIT,N.NEAREST)):mt?N.copyTexSubImage3D(we,F,Se,et,lt+Zn,Me,Fe,ie,he):N.copyTexSubImage2D(we,F,Se,et,lt+Zn,Me,Fe,ie,he);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(we,F,Se,et,lt,ie,he,ye,Yt,tt,pt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(we,F,Se,et,lt,ie,he,ye,Yt,pt.data):N.texSubImage3D(we,F,Se,et,lt,ie,he,ye,Yt,tt,pt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Se,et,ie,he,Yt,tt,pt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Se,et,pt.width,pt.height,Yt,pt.data):N.texSubImage2D(N.TEXTURE_2D,F,Se,et,ie,he,Yt,tt,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,In),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Di),N.pixelStorei(N.UNPACK_SKIP_IMAGES,en),F===0&&U.generateMipmaps&&N.generateMipmap(we),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,z=null,F=0){return S.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0),Ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,z,F)},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Re.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Zo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Zo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new D;class Hs{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),a=rt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),a=rt(a,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _d extends Pi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const wa=new D,Xi=new D,Yi=new D,Zi=new pe,Aa=new pe,xd=new ht,ps=new D,Ta=new D,ms=new D,dl=new pe,Rr=new pe,ul=new pe;class e0 extends Rt{constructor(e=new _d){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qg(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new Hs(n,3,0,!1)),$i.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=$i,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),xd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let a,s;n!==0&&(s=Math.cos(n),a=Math.sin(n));const r=this.center;gs(ps.set(-.5,-.5,0),Yi,r,Xi,a,s),gs(Ta.set(.5,-.5,0),Yi,r,Xi,a,s),gs(ms.set(.5,.5,0),Yi,r,Xi,a,s),dl.set(0,0),Rr.set(1,0),ul.set(1,1);let o=e.ray.intersectTriangle(ps,Ta,ms,!1,wa);if(o===null&&(gs(Ta.set(-.5,.5,0),Yi,r,Xi,a,s),Rr.set(0,1),o=e.ray.intersectTriangle(ps,ms,Ta,!1,wa),o===null))return;const c=e.ray.origin.distanceTo(wa);c<e.near||c>e.far||t.push({distance:c,point:wa.clone(),uv:hn.getInterpolation(wa,ps,Ta,ms,dl,Rr,ul,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gs(i,e,t,n,a,s){Zi.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Aa.x=s*Zi.x-a*Zi.y,Aa.y=a*Zi.x+s*Zi.y):Aa.copy(Zi),i.copy(e),i.x+=Aa.x,i.y+=Aa.y,i.applyMatrix4(xd)}class Ro extends Pi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hl=new ht,Po=new Wo,vs=new $s,_s=new D;class fl extends Rt{constructor(e=new Xt,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(a),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;hl.copy(a).invert(),Po.copy(e.ray).applyMatrix4(hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let g=f,v=h;g<v;g++){const m=l.getX(g);_s.fromBufferAttribute(u,m),pl(_s,m,c,a,e,t,this)}}else{const f=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let g=f,v=h;g<v;g++)_s.fromBufferAttribute(u,g),pl(_s,g,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pl(i,e,t,n,a,s,r){const o=Po.distanceSqToPoint(i);if(o<t){const c=new D;Po.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class yd extends $t{constructor(e,t,n,a,s,r,o,c,l){super(e,t,n,a,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(a),t.push(s),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let a=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(a=Math.floor(o+(c-o)/2),l=n[a]-r,l<0)o=a+1;else if(l>0)c=a-1;else{c=a;break}if(a=c,n[a]===r)return a/(s-1);const d=n[a],f=n[a+1]-d,h=(r-d)/f;return(a+h)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),c=t||(r.isVector2?new pe:new D);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,a=[],s=[],r=[],o=new D,c=new ht;for(let h=0;h<=e;h++){const g=h/e;a[h]=this.getTangentAt(g,new D)}s[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const d=Math.abs(a[0].x),u=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(a[0],n).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(a[h-1],a[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ht(a[h-1].dot(a[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(o,g))}r[h].crossVectors(a[h],s[h])}if(t===!0){let h=Math.acos(Ht(s[0].dot(s[e]),-1,1));h/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(a[g],h*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jo extends Dn{constructor(e=0,t=0,n=1,a=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){const n=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*d-h*u+this.aX,l=f*u+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t0 extends jo{constructor(e,t,n,a,s,r){super(e,t,n,n,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Jo(){let i=0,e=0,t=0,n=0;function a(s,r,o,c){i=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){a(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,d,u){let f=(r-s)/l-(o-s)/(l+d)+(o-r)/d,h=(o-r)/d-(c-r)/(d+u)+(c-o)/u;f*=d,h*=d,a(r,o,f,h)},calc:function(s){const r=s*s,o=r*s;return i+e*s+t*r+n*o}}}const xs=new D,Pr=new Jo,Dr=new Jo,Lr=new Jo;class n0 extends Dn{constructor(e=[],t=!1,n="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=a}getPoint(e,t=new D){const n=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,d;this.closed||o>0?l=a[(o-1)%s]:(xs.subVectors(a[0],a[1]).add(a[0]),l=xs);const u=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?d=a[(o+2)%s]:(xs.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),h),v=Math.pow(u.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(d),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Pr.initNonuniformCatmullRom(l.x,u.x,f.x,d.x,g,v,m),Dr.initNonuniformCatmullRom(l.y,u.y,f.y,d.y,g,v,m),Lr.initNonuniformCatmullRom(l.z,u.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(l.x,u.x,f.x,d.x,this.tension),Dr.initCatmullRom(l.y,u.y,f.y,d.y,this.tension),Lr.initCatmullRom(l.z,u.z,f.z,d.z,this.tension));return n.set(Pr.calc(c),Dr.calc(c),Lr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const a=e.points[t];this.points.push(new D().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ml(i,e,t,n,a){const s=(n-e)*.5,r=(a-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*i+t}function i0(i,e){const t=1-i;return t*t*e}function a0(i,e){return 2*(1-i)*i*e}function s0(i,e){return i*i*e}function Da(i,e,t,n){return i0(i,e)+a0(i,t)+s0(i,n)}function r0(i,e){const t=1-i;return t*t*t*e}function o0(i,e){const t=1-i;return 3*t*t*i*e}function c0(i,e){return 3*(1-i)*i*i*e}function l0(i,e){return i*i*i*e}function La(i,e,t,n,a){return r0(i,e)+o0(i,t)+c0(i,n)+l0(i,a)}class Md extends Dn{constructor(e=new pe,t=new pe,n=new pe,a=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new pe){const n=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d0 extends Dn{constructor(e=new D,t=new D,n=new D,a=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new D){const n=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y),La(e,a.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sd extends Dn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u0 extends Dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bd extends Dn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,a=this.v0,s=this.v1,r=this.v2;return n.set(Da(e,a.x,s.x,r.x),Da(e,a.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h0 extends Dn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,a=this.v0,s=this.v1,r=this.v2;return n.set(Da(e,a.x,s.x,r.x),Da(e,a.y,s.y,r.y),Da(e,a.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,c=a[r===0?r:r-1],l=a[r],d=a[r>a.length-2?a.length-1:r+1],u=a[r>a.length-3?a.length-1:r+2];return n.set(ml(o,c.x,l.x,d.x,u.x),ml(o,c.y,l.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const a=e.points[t];this.points.push(new pe().fromArray(a))}return this}}var gl=Object.freeze({__proto__:null,ArcCurve:t0,CatmullRomCurve3:n0,CubicBezierCurve:Md,CubicBezierCurve3:d0,EllipseCurve:jo,LineCurve:Sd,LineCurve3:u0,QuadraticBezierCurve:bd,QuadraticBezierCurve3:h0,SplineCurve:Ed});class f0 extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=n){const r=a[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,a=this.curves.length;n<a;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const a=e.curves[t];this.curves.push(new gl[a.type]().fromJSON(a))}return this}}class vl extends f0{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Sd(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,a){const s=new bd(this.currentPoint.clone(),new pe(e,t),new pe(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}bezierCurveTo(e,t,n,a,s,r){const o=new Md(this.currentPoint.clone(),new pe(e,t),new pe(n,a),new pe(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ed(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,a,s,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,a,s,r),this}absarc(e,t,n,a,s,r){return this.absellipse(e,t,n,n,a,s,r),this}ellipse(e,t,n,a,s,r,o,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,a,s,r,o,c),this}absellipse(e,t,n,a,s,r,o,c){const l=new jo(e,t,n,a,s,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _a extends Xt{constructor(e=1,t=1,n=1,a=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;a=Math.floor(a),s=Math.floor(s);const d=[],u=[],f=[],h=[];let g=0;const v=[],m=n/2;let p=0;b(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function b(){const _=new D,L=new D;let C=0;const T=(t-e)/n;for(let R=0;R<=s;R++){const E=[],M=R/s,P=M*(t-e)+e;for(let H=0;H<=a;H++){const B=H/a,W=B*c+o,Q=Math.sin(W),q=Math.cos(W);L.x=P*Q,L.y=-M*n+m,L.z=P*q,u.push(L.x,L.y,L.z),_.set(Q,T,q).normalize(),f.push(_.x,_.y,_.z),h.push(B,1-M),E.push(g++)}v.push(E)}for(let R=0;R<a;R++)for(let E=0;E<s;E++){const M=v[E][R],P=v[E+1][R],H=v[E+1][R+1],B=v[E][R+1];(e>0||E!==0)&&(d.push(M,P,B),C+=3),(t>0||E!==s-1)&&(d.push(P,H,B),C+=3)}l.addGroup(p,C,0),p+=C}function y(_){const L=g,C=new pe,T=new D;let R=0;const E=_===!0?e:t,M=_===!0?1:-1;for(let H=1;H<=a;H++)u.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;const P=g;for(let H=0;H<=a;H++){const W=H/a*c+o,Q=Math.cos(W),q=Math.sin(W);T.x=E*q,T.y=m*M,T.z=E*Q,u.push(T.x,T.y,T.z),f.push(0,M,0),C.x=Q*.5+.5,C.y=q*.5*M+.5,h.push(C.x,C.y),g++}for(let H=0;H<a;H++){const B=L+H,W=P+H;_===!0?d.push(W,W+1,B):d.push(W+1,W,B),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends _a{constructor(e=1,t=1,n=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new sa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends Xt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const s=[],r=[];o(a),l(n),d(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new D,_=new D,L=new D;for(let C=0;C<t.length;C+=3)h(t[C+0],y),h(t[C+1],_),h(t[C+2],L),c(y,_,L,b)}function c(b,y,_,L){const C=L+1,T=[];for(let R=0;R<=C;R++){T[R]=[];const E=b.clone().lerp(_,R/C),M=y.clone().lerp(_,R/C),P=C-R;for(let H=0;H<=P;H++)H===0&&R===C?T[R][H]=E:T[R][H]=E.clone().lerp(M,H/P)}for(let R=0;R<C;R++)for(let E=0;E<2*(C-R)-1;E++){const M=Math.floor(E/2);E%2===0?(f(T[R][M+1]),f(T[R+1][M]),f(T[R][M])):(f(T[R][M+1]),f(T[R+1][M+1]),f(T[R+1][M]))}}function l(b){const y=new D;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(b),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function d(){const b=new D;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const _=m(b)/2/Math.PI+.5,L=p(b)/Math.PI+.5;r.push(_,1-L)}g(),u()}function u(){for(let b=0;b<r.length;b+=6){const y=r[b+0],_=r[b+2],L=r[b+4],C=Math.max(y,_,L),T=Math.min(y,_,L);C>.9&&T<.1&&(y<.2&&(r[b+0]+=1),_<.2&&(r[b+2]+=1),L<.2&&(r[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function h(b,y){const _=b*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const b=new D,y=new D,_=new D,L=new D,C=new pe,T=new pe,R=new pe;for(let E=0,M=0;E<s.length;E+=9,M+=6){b.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),C.set(r[M+0],r[M+1]),T.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),L.copy(b).add(y).add(_).divideScalar(3);const P=m(L);v(C,M+0,b,P),v(T,M+2,y,P),v(R,M+4,_,P)}}function v(b,y,_,L){L<0&&b.x===1&&(r[y]=b.x-1),_.x===0&&_.z===0&&(r[y]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.vertices,e.indices,e.radius,e.details)}}class Zs extends Ko{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-n,0,-a,n,0,a,-n,0,a,n,-a,-n,0,-a,n,0,a,-n,0,a,n,0,-n,0,-a,n,0,-a,-n,0,a,n,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zs(e.radius,e.detail)}}class wd extends vl{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,a=this.holes.length;n<a;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const a=e.holes[t];this.holes.push(new vl().fromJSON(a))}return this}}const p0={triangulate:function(i,e,t=2){const n=e&&e.length,a=n?e[0]*t:i.length;let s=Ad(i,0,a,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,c,l,d,u,f,h;if(n&&(s=x0(i,e,s,t)),i.length>80*t){o=l=i[0],c=d=i[1];for(let g=t;g<a;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>d&&(d=f);h=Math.max(l-o,d-c),h=h!==0?32767/h:0}return Na(s,r,t,o,c,h,0),r}};function Ad(i,e,t,n,a){let s,r;if(a===P0(i,e,t,n)>0)for(s=e;s<t;s+=n)r=_l(s,i[s],i[s+1],r);else for(s=t-n;s>=e;s-=n)r=_l(s,i[s],i[s+1],r);return r&&js(r,r.next)&&(Ba(r),r=r.next),r}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(js(t,t.next)||xt(t.prev,t,t.next)===0)){if(Ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Na(i,e,t,n,a,s,r){if(!i)return;!r&&s&&E0(i,n,a,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?g0(i,n,a,s):m0(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ba(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=v0(Ci(i),e,t),Na(i,e,t,n,a,s,2)):r===2&&_0(i,e,t,n,a,s):Na(Ci(i),e,t,n,a,s,1);break}}}function m0(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const a=e.x,s=t.x,r=n.x,o=e.y,c=t.y,l=n.y,d=a<s?a<r?a:r:s<r?s:r,u=o<c?o<l?o:l:c<l?c:l,f=a>s?a>r?a:r:s>r?s:r,h=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=f&&g.y>=u&&g.y<=h&&ea(a,o,s,c,r,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function g0(i,e,t,n){const a=i.prev,s=i,r=i.next;if(xt(a,s,r)>=0)return!1;const o=a.x,c=s.x,l=r.x,d=a.y,u=s.y,f=r.y,h=o<c?o<l?o:l:c<l?c:l,g=d<u?d<f?d:f:u<f?u:f,v=o>c?o>l?o:l:c>l?c:l,m=d>u?d>f?d:f:u>f?u:f,p=Do(h,g,e,t,n),b=Do(v,m,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=b;){if(y.x>=h&&y.x<=v&&y.y>=g&&y.y<=m&&y!==a&&y!==r&&ea(o,d,c,u,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==r&&ea(o,d,c,u,l,f,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=h&&y.x<=v&&y.y>=g&&y.y<=m&&y!==a&&y!==r&&ea(o,d,c,u,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==a&&_!==r&&ea(o,d,c,u,l,f,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v0(i,e,t){let n=i;do{const a=n.prev,s=n.next.next;!js(a,s)&&Td(a,n,n.next,s)&&Oa(a,s)&&Oa(s,a)&&(e.push(a.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ba(n),Ba(n.next),n=i=s),n=n.next}while(n!==i);return Ci(n)}function _0(i,e,t,n,a,s){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&T0(r,o)){let c=Cd(r,o);r=Ci(r,r.next),c=Ci(c,c.next),Na(r,e,t,n,a,s,0),Na(c,e,t,n,a,s,0);return}o=o.next}r=r.next}while(r!==i)}function x0(i,e,t,n){const a=[];let s,r,o,c,l;for(s=0,r=e.length;s<r;s++)o=e[s]*n,c=s<r-1?e[s+1]*n:i.length,l=Ad(i,o,c,n,!1),l===l.next&&(l.steiner=!0),a.push(A0(l));for(a.sort(y0),s=0;s<a.length;s++)t=M0(a[s],t);return t}function y0(i,e){return i.x-e.x}function M0(i,e){const t=S0(i,e);if(!t)return e;const n=Cd(t,i);return Ci(n,n.next),Ci(t,t.next)}function S0(i,e){let t=e,n=-1/0,a;const s=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,a=t.x<t.next.x?t:t.next,f===s))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let d=1/0,u;t=a;do s>=t.x&&t.x>=c&&s!==t.x&&ea(r<l?s:n,r,c,l,r<l?n:s,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(s-t.x),Oa(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&b0(a,t)))&&(a=t,d=u)),t=t.next;while(t!==o);return a}function b0(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function E0(i,e,t,n){let a=i;do a.z===0&&(a.z=Do(a.x,a.y,e,t,n)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,w0(a)}function w0(i){let e,t,n,a,s,r,o,c,l=1;do{for(t=i,i=null,s=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(a=t,t=t.nextZ,o--):(a=n,n=n.nextZ,c--),s?s.nextZ=a:i=a,a.prevZ=s,s=a;t=n}s.nextZ=null,l*=2}while(r>1);return i}function Do(i,e,t,n,a){return i=(i-t)*a|0,e=(e-n)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function A0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ea(i,e,t,n,a,s,r,o){return(a-r)*(e-o)>=(i-r)*(s-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(a-r)*(n-o)}function T0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!C0(i,e)&&(Oa(i,e)&&Oa(e,i)&&R0(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||js(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function js(i,e){return i.x===e.x&&i.y===e.y}function Td(i,e,t,n){const a=Ms(xt(i,e,t)),s=Ms(xt(i,e,n)),r=Ms(xt(t,n,i)),o=Ms(xt(t,n,e));return!!(a!==s&&r!==o||a===0&&ys(i,t,e)||s===0&&ys(i,n,e)||r===0&&ys(t,i,n)||o===0&&ys(t,e,n))}function ys(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ms(i){return i>0?1:i<0?-1:0}function C0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Td(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Oa(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function R0(i,e){let t=i,n=!1;const a=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cd(i,e){const t=new Lo(i.i,i.x,i.y),n=new Lo(e.i,e.x,e.y),a=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _l(i,e,t,n){const a=new Lo(i,e,t);return n?(a.next=n.next,a.prev=n,n.next.prev=a,n.next=a):(a.prev=a,a.next=a),a}function Ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P0(i,e,t,n){let a=0;for(let s=e,r=t-n;s<t;s+=n)a+=(i[r]-i[s])*(i[s+1]+i[r+1]),r=s;return a}class Ia{static area(e){const t=e.length;let n=0;for(let a=t-1,s=0;s<t;a=s++)n+=e[a].x*e[s].y-e[s].x*e[a].y;return n*.5}static isClockWise(e){return Ia.area(e)<0}static triangulateShape(e,t){const n=[],a=[],s=[];xl(e),yl(n,e);let r=e.length;t.forEach(xl);for(let c=0;c<t.length;c++)a.push(r),r+=t[c].length,yl(n,t[c]);const o=p0.triangulate(n,a);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function xl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qo extends Xt{constructor(e=new wd([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],a=[],s=[],r=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(o,c,d),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2));function l(d){const u=a.length/3,f=d.extractPoints(t);let h=f.shape;const g=f.holes;Ia.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];Ia.isClockWise(b)===!0&&(g[m]=b.reverse())}const v=Ia.triangulateShape(h,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];h=h.concat(b)}for(let m=0,p=h.length;m<p;m++){const b=h[m];a.push(b.x,b.y,0),s.push(0,0,1),r.push(b.x,b.y)}for(let m=0,p=v.length;m<p;m++){const b=v[m],y=b[0]+u,_=b[1]+u,L=b[2]+u;n.push(y,_,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return D0(t,e)}static fromJSON(e,t){const n=[];for(let a=0,s=e.shapes.length;a<s;a++){const r=t[e.shapes[a]];n.push(r)}return new Qo(n,e.curveSegments)}}function D0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const a=i[t];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e}class Js extends Xt{constructor(e=1,t=32,n=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const d=[],u=new D,f=new D,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],y=p/n;let _=0;p===0&&r===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(a+C*s)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(a+C*s)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+_,1-y),b.push(l++)}d.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const y=d[p][b+1],_=d[p][b],L=d[p+1][b],C=d[p+1][b+1];(p!==0||r>0)&&h.push(y,_,C),(p!==n-1||c<Math.PI)&&h.push(_,L,C)}this.setIndex(h),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ct extends Pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rd extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class L0 extends Rd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ir=new ht,Ml=new D,Sl=new D;class I0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U0 extends I0{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends Rd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bl=new ht;class N0{constructor(e,t,n=0,a=1/0){this.ray=new Wo(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(e,t=!0,n=[]){return Io(e,this,n,t),n.sort(El),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)Io(e[a],this,n,t);return n.sort(El),n}}function El(i,e){return i.distance-e.distance}function Io(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Io(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const Uo=new Set;function Pd({duration:i=300,ease:e=Dd,onUpdate:t,onComplete:n}){const a={start:performance.now(),duration:i,ease:e,onUpdate:t,onComplete:n,done:!1};return Uo.add(a),a}function O0(i){for(const e of Uo){const t=Math.min(1,(i-e.start)/e.duration);e.onUpdate?.(e.ease(t),t),t>=1&&(e.done=!0,Uo.delete(e),e.onComplete?.())}}function Gt(i){return new Promise(e=>{Pd({duration:i,onUpdate:()=>{},onComplete:e})})}function Ca({duration:i,ease:e,onUpdate:t}){return new Promise(n=>{Pd({duration:i,ease:e,onUpdate:t,onComplete:n})})}const Dd=i=>i*(2-i),wl=i=>i*i;class B0{constructor(e){this.canvas=e,this.renderer=new Jg({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vl,this.renderer.outputColorSpace=Kt,this.scene=new Kg,this.scene.background=new Oe("#1a2030"),this.camAngle=Math.PI/4,this.camZoom=1,this.camTarget=new D(0,0,0),this.camera=new Xo(-10,10,10,-10,.1,200),this.ambient=new L0("#cfe3ff","#3a3a4a",1),this.scene.add(this.ambient),this.sun=new F0("#fff4e0",1.6),this.sun.position.set(8,18,6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-14,this.sun.shadow.camera.right=14,this.sun.shadow.camera.top=14,this.sun.shadow.camera.bottom=-14,this.scene.add(this.sun),this.raycaster=new N0,this.pointer=new pe,this.shake=0,this._frameCbs=new Set,this._running=!1,window.addEventListener("resize",()=>this.resize()),this.resize()}setSky(e,t){this.scene.background=new Oe(e),this.scene.fog=new Zo(new Oe(t??e),28,70)}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1);const n=e/t,a=9/this.camZoom;this.camera.left=-a*n,this.camera.right=a*n,this.camera.top=a,this.camera.bottom=-a,this.camera.updateProjectionMatrix()}updateCamera(){const t=Math.cos(this.camAngle)*30,n=Math.sin(this.camAngle)*30;let a=this.camTarget.x,s=this.camTarget.y,r=this.camTarget.z;this.shake>0&&(a+=(Math.random()-.5)*this.shake,r+=(Math.random()-.5)*this.shake,this.shake*=.88,this.shake<.01&&(this.shake=0)),this.camera.position.set(a+t,s+30*.82,r+n),this.camera.lookAt(a,s,r)}rotate(e){this.targetAngle=(this.targetAngle??this.camAngle)+e*Math.PI/2}zoomBy(e){this.camZoom=Math.min(2.2,Math.max(.55,this.camZoom*e)),this.resize()}centerOn(e,t,n=!1){this.camTarget.set(e,0,t)}screenShake(e=.5){this.shake=e}onFrame(e){return this._frameCbs.add(e),()=>this._frameCbs.delete(e)}start(){if(this._running)return;this._running=!0;const e=t=>{if(this._running){if(requestAnimationFrame(e),O0(t),this.targetAngle!=null){const n=this.targetAngle-this.camAngle;Math.abs(n)<.002?(this.camAngle=this.targetAngle,this.targetAngle=null):this.camAngle+=n*.12}this.updateCamera();for(const n of this._frameCbs)n(t);this.renderer.render(this.scene,this.camera)}};requestAnimationFrame(e)}stop(){this._running=!1}worldToScreen(e){const t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*window.innerWidth,y:(-t.y*.5+.5)*window.innerHeight,visible:t.z<1}}raycast(e,t,n){return this.pointer.x=e/window.innerWidth*2-1,this.pointer.y=-(t/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(n,!0)}dispose(e){e.traverse(t=>{t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material?.dispose()}),e.parent?.remove(e)}}const dn=1,k0=i=>i*.35;function Ld(i,e,t=0){return new D(i*dn,k0(t),e*dn)}const Al={water:"#3a6aaa",lava:"#cc3a10",poison:"#4a7a2a",spikes:"#7a7a72"};class z0{constructor(e,t,n){this.sceneMgr=e,this.grid=t,this.zone=n,this.group=new st,this.tileMeshes=[],this.highlights=new Map,this.build(),e.scene.add(this.group)}build(){const e=this.grid,t=this.zone.palette,n=new Map;for(let a=0;a<e.h;a++)for(let s=0;s<e.w;s++){const r=e.at(s,a),o=(r.h+1)*.35;let c=(s+a)%2===0?t.ground:t.groundAlt,l="#000000",d=0;r.terrain==="rock"?c=t.rock:Al[r.terrain]&&(c=Al[r.terrain],r.terrain==="lava"&&(l="#ff5500",d=.7),r.terrain==="poison"&&(l="#44cc22",d=.15));const u=o.toFixed(2);n.has(u)||n.set(u,new li(.98*dn,o,.98*dn));const f=new Ct({color:c,roughness:.85,metalness:.05,emissive:l,emissiveIntensity:d}),h=new wt(n.get(u),f);h.position.set(s*dn,o/2,a*dn),h.receiveShadow=!0,h.userData.tile={x:s,y:a},this.group.add(h),this.tileMeshes.push(h),r.terrain==="rock"&&this.addProp(r,t.prop??"rock"),r.terrain==="spikes"&&this.addSpikes(r)}}addProp(e,t){const n=(e.h+1)*.35;let a;if(t==="tree"){a=new st;const s=new wt(new _a(.09,.13,.5,6),new Ct({color:"#5a4028",roughness:1}));s.position.y=.25;const r=new wt(new sa(.42,.9,7),new Ct({color:"#2a4a22",roughness:1}));r.position.y=.95,a.add(s,r)}else t==="obelisk"?(a=new wt(new sa(.3,1.3,4),new Ct({color:"#3a2a4a",roughness:.6,emissive:"#7733aa",emissiveIntensity:.25})),a.position.y=.65):t==="swamp"?(a=new wt(new Js(.32,6,5),new Ct({color:"#4a4a32",roughness:1})),a.scale.y=1.6,a.position.y=.4):(a=new wt(new Zs(.34,0),new Ct({color:"#8a8a82",roughness:.95})),a.position.y=.28,a.rotation.set(Math.random(),Math.random(),Math.random()));a.position.x=e.x*dn,a.position.z=e.y*dn,a.position.y+=n,a.traverse?.(s=>{s.castShadow=!0}),a.castShadow=!0,this.group.add(a)}addSpikes(e){const t=(e.h+1)*.35,n=new Ct({color:"#9a9a92",roughness:.5,metalness:.5});for(let a=0;a<4;a++){const s=new wt(new sa(.06,.3,5),n);s.position.set(e.x*dn+(Math.random()-.5)*.55,t+.15,e.y*dn+(Math.random()-.5)*.55),this.group.add(s)}}topOf(e,t){return(this.grid.at(e,t).h+1)*.35}clearHighlights(){for(const[,e]of this.highlights)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.highlights.clear()}highlight(e,t){const n={move:{color:"#3a8aff",opacity:.45},attack:{color:"#ff3a3a",opacity:.5},path:{color:"#ffd24a",opacity:.6},hover:{color:"#ffffff",opacity:.4},aoe:{color:"#aa55ff",opacity:.45}}[t]??{color:"#ffffff",opacity:.3};for(const a of e){const s=`${a.x},${a.y}:${t}`;if(this.highlights.has(s)||!this.grid.at(a.x,a.y))continue;const o=new Wa(.92,.92),c=new Xs({color:n.color,transparent:!0,opacity:n.opacity,depthWrite:!1,side:bn}),l=new wt(o,c);l.rotation.x=-Math.PI/2,l.position.set(a.x*dn,this.topOf(a.x,a.y)+.012+(t==="path"?.004:0),a.y*dn),this.group.add(l),this.highlights.set(s,l)}}clearKind(e){for(const[t,n]of[...this.highlights])t.endsWith(`:${e}`)&&(n.geometry.dispose(),n.material.dispose(),this.group.remove(n),this.highlights.delete(t))}dispose(){this.clearHighlights(),this.sceneMgr.dispose(this.group)}}const Id={cortante:"#d8d8d8",perfurante:"#c8b89a",concussao:"#b09a7a",fogo:"#ff7a33",gelo:"#7ad8ff",eletrico:"#ffe14d",acido:"#9aff4d",veneno:"#52c41a",necrotico:"#9a5aff",radiante:"#fff3b0",psiquico:"#ff66cc",trovao:"#8fb4ff"},Ur={cortante:"🗡️",perfurante:"🏹",concussao:"🔨",fogo:"🔥",gelo:"❄️",eletrico:"⚡",acido:"🧪",veneno:"☠️",necrotico:"💀",radiante:"✨",psiquico:"🌀",trovao:"💥"};function H0(i,e,t){let n=1;return t.immunities?.has(e)?n=0:t.resistances?.has(e)&&t.vulnerabilities?.has(e)?n=1:t.resistances?.has(e)?n=.5:t.vulnerabilities?.has(e)&&(n=2),{final:Math.floor(i*n),factor:n}}const V0={fire:"#ff7a33",ice:"#7ad8ff",spark:"#ffe14d",acid:"#9aff4d",poison:"#52c41a",shadow:"#9a5aff",holy:"#fff3b0",psychic:"#ff66cc"};class G0{constructor(e){this.sceneMgr=e,this.bursts=[],this.emitters=[],e.onFrame(t=>this.update(t))}burst(e,t="#ffffff",{count:n=22,speed:a=2.2,size:s=.07,up:r=1.6,life:o=600}={}){const c=new Xt,l=new Float32Array(n*3),d=[];for(let h=0;h<n;h++)l[h*3]=e.x,l[h*3+1]=e.y,l[h*3+2]=e.z,d.push(new D((Math.random()-.5)*a,Math.random()*r+.4,(Math.random()-.5)*a));c.setAttribute("position",new rn(l,3));const u=new Ro({color:t,size:s,transparent:!0,opacity:1,depthWrite:!1,blending:Bs}),f=new fl(c,u);this.sceneMgr.scene.add(f),this.bursts.push({points:f,velocities:d,born:performance.now(),life:o,geo:c,mat:u})}elementBurst(e,t,n=!1){const a=Id[t]??"#ffffff";this.burst(e,a,{count:n?48:24,speed:n?3.4:2.2,size:n?.1:.07,life:n?900:600})}attachEmitter(e,t){const n=V0[t]??"#ffffff",a=10,s=new Xt,r=new Float32Array(a*3),o=[];for(let u=0;u<a;u++)o.push({phase:Math.random()*Math.PI*2,speed:.5+Math.random(),r:.15+Math.random()*.2});s.setAttribute("position",new rn(r,3));const c=new Ro({color:n,size:.06,transparent:!0,opacity:.8,depthWrite:!1,blending:Bs}),l=new fl(s,c);e.add(l);const d={points:l,seeds:o,target:e,geo:s,mat:c};return this.emitters.push(d),d}removeEmitter(e){const t=this.emitters.indexOf(e);t>=0&&this.emitters.splice(t,1),e.points.parent?.remove(e.points),e.geo.dispose(),e.mat.dispose()}update(e){for(let n=this.bursts.length-1;n>=0;n--){const a=this.bursts[n],s=e-a.born,r=.016,o=a.geo.attributes.position.array;for(let c=0;c<a.velocities.length;c++){const l=a.velocities[c];l.y-=4.5*r,o[c*3]+=l.x*r,o[c*3+1]+=l.y*r,o[c*3+2]+=l.z*r}a.geo.attributes.position.needsUpdate=!0,a.mat.opacity=Math.max(0,1-s/a.life),s>a.life&&(this.sceneMgr.scene.remove(a.points),a.geo.dispose(),a.mat.dispose(),this.bursts.splice(n,1))}const t=e/1e3;for(const n of this.emitters){const a=n.geo.attributes.position.array;for(let s=0;s<n.seeds.length;s++){const r=n.seeds[s],o=r.phase+t*r.speed;a[s*3]=Math.cos(o)*r.r,a[s*3+1]=.35+(t*r.speed+r.phase)%1*.7,a[s*3+2]=Math.sin(o)*r.r}n.geo.attributes.position.needsUpdate=!0}}}class W0{constructor(e,t){this.sceneMgr=e,this.root=t}show(e,t,n="",a=!1){const s=this.sceneMgr.worldToScreen(e);if(!s.visible)return;const r=document.createElement("div");r.className=`dmg-number ${n} ${a?"big":""}`,r.textContent=t,r.style.left=`${s.x+(Math.random()-.5)*30}px`,r.style.top=`${s.y-20}px`,this.root.appendChild(r),setTimeout(()=>r.remove(),1300)}damage(e,t,n,a=!1){const s=Id[n]??"#ffffff",r=document.createElement("div");r.className=`dmg-number ${a?"big crit":""}`,r.textContent=a?`${t}!`:`${t}`,r.style.color=s;const o=this.sceneMgr.worldToScreen(e);o.visible&&(r.style.left=`${o.x+(Math.random()-.5)*30}px`,r.style.top=`${o.y-20}px`,this.root.appendChild(r),setTimeout(()=>r.remove(),1300))}}const xe=(i,e={})=>new Ct({color:i,roughness:.85,metalness:.05,...e}),Is=(i,e={})=>new Ct({color:i,roughness:.35,metalness:.85,...e}),Us=(i,e=1,t={})=>new Ct({color:i,emissive:i,emissiveIntensity:e,roughness:.4,...t});function te(i,e,t=0,n=0,a=0){const s=new wt(i,e);return s.position.set(t,n,a),s.castShadow=!0,s}const Le=(i,e,t)=>new li(i,e,t),dt=(i,e=10)=>new Js(i,e,Math.max(6,e-2)),un=(i,e,t=8)=>new sa(i,e,t),zn=(i,e,t,n=8)=>new _a(i,e,t,n);function q0(){const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d");e.fillStyle="#04060f",e.fillRect(0,0,64,256),e.strokeStyle="#66ccff",e.lineWidth=3,e.lineCap="round";const t=7;for(let a=0;a<t;a++){const s=22+a*32;e.beginPath();const r=3+Math.floor(Math.random()*3);let o=20+Math.random()*10,c=s-10;e.moveTo(o,c);for(let l=0;l<r;l++)o=14+Math.random()*36,c=s-10+(l+1)/r*20,e.lineTo(o,c);e.stroke()}const n=new yd(i);return n.colorSpace=Kt,n}function ta(i,e=.85,t=!0){const n=new wd;n.moveTo(0,0),t?(n.quadraticCurveTo(e*.45,.55,e,.42),n.quadraticCurveTo(e*.78,.18,e*.92,-.05),n.quadraticCurveTo(e*.6,-.12,e*.62,-.32),n.quadraticCurveTo(e*.35,-.28,e*.32,-.46),n.quadraticCurveTo(e*.15,-.28,0,-.18)):(n.quadraticCurveTo(e*.5,.6,e,.35),n.quadraticCurveTo(e*.7,.05,e*.85,-.18),n.quadraticCurveTo(e*.45,-.1,e*.4,-.34),n.quadraticCurveTo(e*.18,-.2,0,-.16));const a=new Qo(n,12),s=new Ct({color:i,roughness:.7,side:bn}),r=new wt(a,s);return r.castShadow=!0,r}function Ud(){const i=new st,e=xe("#7da7e8"),t=new Ct({color:"#15151d",roughness:.4,metalness:.75}),n=Is("#caa84a"),a=xe("#2a4aa0"),s=xe("#dfe4ee");i.add(te(Le(.13,.34,.15),t,-.1,.17,0)),i.add(te(Le(.13,.34,.15),t,.1,.17,0));const r=te(Le(.34,.3,.2),a,0,.42,0);i.add(r),i.add(te(Le(.36,.04,.22),n,0,.29,0)),i.add(te(Le(.36,.34,.24),t,0,.72,0));const o=te(Le(.4,.035,.26),n,0,.78,0);o.rotation.z=.5,i.add(o),i.add(te(dt(.1,8),t,-.23,.9,0)),i.add(te(dt(.1,8),t,.23,.9,0));const c=new st;c.position.set(.26,.86,0);const l=te(Le(.09,.3,.1),t,0,-.13,0);c.add(l),i.add(c),i.add(te(Le(.09,.3,.1),t,-.26,.7,0));const d=new st;d.position.y=1.06,d.add(te(dt(.15,14),e,0,0,0));const u=new Ct({color:"#aaccee",roughness:.1,metalness:.4,transparent:!0,opacity:.7});d.add(te(Le(.07,.05,.01),u,-.05,.02,.145)),d.add(te(Le(.07,.05,.01),u,.05,.02,.145)),d.add(te(Le(.03,.012,.01),Is("#888"),0,.02,.148));const f=Is("#d8b75a"),h=te(un(.035,.22,6),f,-.1,.16,0);h.rotation.z=.55;const g=te(un(.035,.22,6),f,.1,.16,0);g.rotation.z=-.55,d.add(h,g),d.add(te(dt(.16,10),s,0,.045,-.035));const v=te(Le(.24,.55,.1),s,0,-.22,-.12);d.add(v),i.add(d);const m=ta("#15151a",.9,!0);m.position.set(-.12,.92,-.14),m.rotation.y=Math.PI/2+.5,m.scale.x=-1;const p=ta("#e8e6f0",.9,!1);p.position.set(.12,.92,-.14),p.rotation.y=Math.PI/2-.5,i.add(m,p);const b=new st,y=new Ct({color:"#2a3a55",roughness:.3,metalness:.7,emissive:"#3399ff",emissiveIntensity:.9,emissiveMap:q0()}),_=te(Le(.085,1.15,.02),y,0,.72,0),L=te(un(.06,.14,4),y,0,1.36,0);L.rotation.y=Math.PI/4;const C=te(Le(.3,.05,.06),n,0,.12,0),T=te(zn(.03,.03,.22,8),xe("#2a1a10"),0,-.02,0),R=te(dt(.05,8),n,0,-.15,0);return b.add(_,L,C,T,R),b.position.set(.05,-.25,.02),b.rotation.z=-.5,c.add(b),i.userData.parts={swordArm:c,sword:b,wingL:m,wingR:p,head:d},i.userData.kind="frosty",i}function an(i,e="#ff3333",t=0,n=0,a=.07,s=.025){const r=Us(e,1.4);i.add(te(dt(s,6),r,-a,t,n)),i.add(te(dt(s,6),r,a,t,n))}const Tl={biped(i,e){const t=new st;t.add(te(Le(.12,.26,.13),xe(e),-.08,.13,0)),t.add(te(Le(.12,.26,.13),xe(e),.08,.13,0)),t.add(te(Le(.3,.3,.2),xe(i),0,.42,0)),t.add(te(Le(.08,.26,.09),xe(i),-.21,.42,0)),t.add(te(Le(.08,.26,.09),xe(i),.21,.42,0));const n=te(dt(.13,10),xe(i),0,.69,0);t.add(n),an(t,"#ffdd44",.7,.11);const a=xe(i),s=te(un(.03,.12,5),a,-.13,.74,0);s.rotation.z=1.2;const r=te(un(.03,.12,5),a,.13,.74,0);return r.rotation.z=-1.2,t.add(s,r),t},humanoid(i,e){const t=new st;t.add(te(Le(.12,.3,.13),xe("#3a3a42"),-.08,.15,0)),t.add(te(Le(.12,.3,.13),xe("#3a3a42"),.08,.15,0)),t.add(te(Le(.3,.34,.2),xe(i),0,.48,0)),t.add(te(Le(.08,.28,.09),xe(i),-.21,.48,0)),t.add(te(Le(.08,.28,.09),xe(i),.21,.48,0)),t.add(te(dt(.13,10),xe("#caa080"),0,.78,0));const n=te(un(.15,.2,8),xe(e),0,.87,0);t.add(n);const a=te(Le(.04,.5,.04),Is("#999"),.28,.55,.08);return a.rotation.z=-.4,t.add(a),t},brute(i,e){const t=new st;t.add(te(Le(.16,.3,.18),xe(e),-.12,.15,0)),t.add(te(Le(.16,.3,.18),xe(e),.12,.15,0));const n=te(Le(.5,.42,.32),xe(i),0,.5,0);return n.rotation.x=.15,t.add(n),t.add(te(Le(.13,.42,.14),xe(i),-.33,.42,0)),t.add(te(Le(.13,.42,.14),xe(i),.33,.42,0)),t.add(te(dt(.15,10),xe(i),0,.82,.08)),an(t,"#ff5533",.84,.2),t.add(te(un(.025,.08,5),xe("#eee"),-.06,.76,.2)),t.add(te(un(.025,.08,5),xe("#eee"),.06,.76,.2)),t},quadruped(i,e){const t=new st,n=te(Le(.3,.24,.62),xe(i),0,.32,0);t.add(n);for(const[r,o]of[[-.12,.22],[.12,.22],[-.12,-.22],[.12,-.22]])t.add(te(Le(.08,.24,.08),xe(e),r,.12,o));const a=te(Le(.2,.18,.26),xe(i),0,.46,.38);t.add(a),an(t,"#ffcc33",.5,.5,.06);const s=te(zn(.02,.05,.34,6),xe(i),0,.38,-.42);return s.rotation.x=.8,t.add(s),t.userData.headPart=a,t},spider(i,e){const t=new st;t.add(te(dt(.24,10),xe(i),0,.3,-.08)),t.add(te(dt(.15,9),xe(i),0,.3,.18)),an(t,"#ff3333",.34,.3,.05,.03),an(t,"#ff3333",.4,.28,.09,.022);const n=xe(e);for(let a=0;a<4;a++)for(const s of[-1,1]){const r=te(zn(.015,.025,.5,5),n,s*.28,.3,-.2+a*.13);r.rotation.z=s*1.1,t.add(r)}return t},serpent(i,e){const t=new st,n=5;for(let s=0;s<n;s++){const r=.16-s*.018;t.add(te(dt(r,9),xe(s%2?i:e),0,.14,.3-s*.18))}const a=te(dt(.13,9),xe(i),0,.42,.38);return t.add(a),t.add(te(zn(.1,.13,.3,8),xe(i),0,.27,.36)),an(t,"#ffee44",.46,.48,.05),t},blob(i,e){const t=new st,n=te(dt(.34,12),new Ct({color:i,roughness:.2,metalness:0,transparent:!0,opacity:.85,emissive:e,emissiveIntensity:.12}),0,.28,0);return n.scale.y=.75,t.add(n),an(t,"#222222",.36,.26,.09,.035),t.userData.blobBody=n,t},flyer(i,e){const t=new st;t.add(te(dt(.16,10),xe(i),0,.6,0)),t.add(te(dt(.11,9),xe(i),0,.74,.12)),an(t,"#ffdd44",.77,.2,.05);const n=ta(e,.55,!0);n.position.set(-.08,.68,-.03),n.rotation.y=Math.PI/2+.4,n.scale.x=-1;const a=ta(e,.55,!0);return a.position.set(.08,.68,-.03),a.rotation.y=Math.PI/2-.4,t.add(n,a),t.add(te(zn(.015,.04,.3,5),xe(i),0,.42,-.06)),t.userData.wings=[n,a],t.userData.floats=!0,t},ghost(i,e){const t=new st,n=te(un(.26,.7,10),new Ct({color:i,transparent:!0,opacity:.6,roughness:.5,emissive:e,emissiveIntensity:.35}),0,.55,0);return n.rotation.x=Math.PI,t.add(n),t.add(te(dt(.16,10),new Ct({color:i,transparent:!0,opacity:.75,emissive:e,emissiveIntensity:.3}),0,.92,0)),an(t,"#aaddff",.95,.13,.06),t.userData.floats=!0,t},skeleton(i,e){const t=new st,n=xe(i);t.add(te(Le(.07,.3,.08),n,-.08,.15,0)),t.add(te(Le(.07,.3,.08),n,.08,.15,0));for(let s=0;s<3;s++)t.add(te(Le(.26-s*.02,.045,.16),n,0,.4+s*.09,0));t.add(te(Le(.06,.34,.07),n,-.2,.45,0)),t.add(te(Le(.06,.34,.07),n,.2,.45,0));const a=te(dt(.12,10),n,0,.72,0);return t.add(a),an(t,e==="#888070"?"#ff4444":e,.74,.1,.05,.03),t},golem(i,e){const t=new st;return t.add(te(Le(.18,.3,.2),xe(i),-.13,.15,0)),t.add(te(Le(.18,.3,.2),xe(i),.13,.15,0)),t.add(te(Le(.52,.44,.34),xe(i),0,.54,0)),t.add(te(Le(.16,.5,.18),xe(e),-.36,.5,0)),t.add(te(Le(.16,.5,.18),xe(e),.36,.5,0)),t.add(te(Le(.2,.16,.18),xe(i),0,.86,0)),an(t,"#66ffcc",.88,.1,.05),t},plant(i,e){const t=new st;t.add(te(zn(.1,.16,.5,7),xe("#5a4028"),0,.25,0));const n=te(dt(.3,9),xe(i),0,.62,0);n.scale.y=.8,t.add(n);for(let a=0;a<5;a++){const s=a/5*Math.PI*2,r=te(un(.07,.26,5),xe(e),Math.cos(s)*.26,.62,Math.sin(s)*.26);r.rotation.z=Math.cos(s)*1.3,r.rotation.x=-Math.sin(s)*1.3,t.add(r)}return an(t,"#ffee66",.62,.27,.08),t},swarm(i,e){const t=new st,n=[];for(let a=0;a<14;a++){const s=te(dt(.045,5),xe(a%3?i:e),(Math.random()-.5)*.5,.35+(Math.random()-.5)*.4,(Math.random()-.5)*.5);n.push(s),t.add(s)}return t.userData.swarmDots=n,t.userData.floats=!0,t},dragon(i,e){const t=new st,n=te(Le(.42,.3,.7),xe(i),0,.38,0);t.add(n);for(const[u,f]of[[-.2,.24],[.2,.24],[-.2,-.24],[.2,-.24]])t.add(te(Le(.11,.28,.11),xe(i),u,.14,f));const a=te(zn(.09,.13,.4,7),xe(i),0,.62,.38);a.rotation.x=-.5,t.add(a);const s=te(Le(.2,.16,.32),xe(i),0,.82,.55);t.add(s),an(t,"#ffcc33",.86,.64,.07);const r=te(un(.03,.14,5),xe(e),-.07,.93,.48);r.rotation.x=-.5;const o=te(un(.03,.14,5),xe(e),.07,.93,.48);o.rotation.x=-.5,t.add(r,o);const c=ta(e,.8,!0);c.position.set(-.15,.55,-.05),c.rotation.y=Math.PI/2+.5,c.scale.x=-1;const l=ta(e,.8,!0);l.position.set(.15,.55,-.05),l.rotation.y=Math.PI/2-.5,t.add(c,l),t.userData.wings=[c,l];const d=te(zn(.03,.09,.6,6),xe(i),0,.32,-.55);return d.rotation.x=1.2,t.add(d),t},elemental(i,e){const t=new st,n=te(dt(.2,10),Us(e,1.2),0,.5,0);t.add(n);const a=[];for(let s=0;s<7;s++){const r=te(new Zs(.085+Math.random()*.06,0),xe(i),0,.5,0);r.userData.orbit={r:.3+Math.random()*.12,speed:.8+Math.random(),phase:Math.random()*Math.PI*2,y:(Math.random()-.5)*.4},a.push(r),t.add(r)}return t.userData.chunks=a,t.userData.floats=!0,t},eye(i,e){const t=new st,n=te(dt(.3,14),xe(i),0,.62,0);t.add(n),t.add(te(dt(.13,10),new Ct({color:"#ffffff",roughness:.2}),0,.62,.22)),t.add(te(dt(.06,8),Us(e,1.5),0,.62,.32));for(let a=0;a<5;a++){const s=a/5*Math.PI*2,r=te(zn(.02,.03,.26,5),xe(i),Math.cos(s)*.22,.92,Math.sin(s)*.22);r.rotation.z=Math.cos(s)*.7,r.rotation.x=-Math.sin(s)*.7,t.add(r),t.add(te(dt(.035,6),Us(e,1.2),Math.cos(s)*.3,1.04,Math.sin(s)*.3))}return t.userData.floats=!0,t}};function $0(i){const e=i.visual,t=Tl[e.body]??Tl.biped;let n=e.color,a=e.accent??"#333333";if(e.tint){const o=new Oe(n),c=new Oe(e.tint);o.lerp(c,.45),n=`#${o.getHexString()}`}const s=t(n,a);e.emissive&&s.traverse(o=>{o.isMesh&&o.material?.emissive!==void 0&&o.material.emissiveIntensity<.5&&(o.material=o.material.clone(),o.material.emissive=new Oe(e.emissive),o.material.emissiveIntensity=.28)});const r=e.scale??1;return s.scale.setScalar(r),s.userData.kind=e.body,s}function X0(i){const e=document.createElement("canvas");e.width=96,e.height=18;const t=new yd(e),n=new e0(new _d({map:t,depthTest:!1,transparent:!0}));n.scale.set(.85,.16,1),n.renderOrder=999;const a=()=>{const s=e.getContext("2d");s.clearRect(0,0,96,18),s.fillStyle="rgba(8,10,16,0.75)",s.fillRect(0,0,96,18);const r=Math.max(0,i.hp/i.maxHp),o=s.createLinearGradient(0,0,96,0);i.side==="hero"?(o.addColorStop(0,"#4ade80"),o.addColorStop(1,"#22c55e")):r>.5?(o.addColorStop(0,"#f87171"),o.addColorStop(1,"#ef4444")):(o.addColorStop(0,"#fb923c"),o.addColorStop(1,"#ef4444")),s.fillStyle=o,s.fillRect(2,2,92*r,14),s.strokeStyle="rgba(255,255,255,0.35)",s.strokeRect(.5,.5,95,17),t.needsUpdate=!0};return a(),{sprite:n,draw:a,tex:t,canvas:e}}class Cl{constructor(e,t,n,a){this.sceneMgr=e,this.fx=t,this.unit=n,this.grid=a,this.group=new st,this.group.userData.unitId=n.id,this.body=n.kind==="hero"?Ud():$0(n),this.group.add(this.body);const s=X0(n);this.hpbar=s;const r=this.bodyHeight();s.sprite.position.y=r+.32,this.group.add(s.sprite);const o=new wt(new li(.85,Math.max(1.1,r),.85),new Xs({transparent:!0,opacity:0,depthWrite:!1}));o.position.y=Math.max(1.1,r)/2,this.group.add(o),n.visual?.particle&&(this.emitter=t.attachEmitter(this.body,n.visual.particle)),this.idlePhase=Math.random()*Math.PI*2,this.syncPosition(!0),e.scene.add(this.group)}bodyHeight(){const e=this.unit.visual?.scale??1;return Math.max(.8,1.15*e)}tilePos(e,t){const n=this.grid.at(e,t),a=Ld(e,t,0);return a.y=(n.h+1)*.35,a}syncPosition(e=!1){const t=this.tilePos(this.unit.pos.x,this.unit.pos.y);this.group.position.copy(t)}update(e){const t=e/1e3+this.idlePhase,n=this.body.userData;if(n.floats?this.body.position.y=.18+Math.sin(t*2.2)*.06:this._animating||(this.body.position.y=Math.abs(Math.sin(t*1.6))*.02),n.wings)for(let a=0;a<n.wings.length;a++){const s=n.wings[a],r=a===0?1:-1;s.rotation.z=Math.sin(t*6)*.3*r}if(n.kind==="frosty"&&n.parts&&(n.parts.wingL.rotation.z=Math.sin(t*1.8)*.12,n.parts.wingR.rotation.z=-Math.sin(t*1.8)*.12),n.swarmDots)for(let a=0;a<n.swarmDots.length;a++){const s=n.swarmDots[a],r=t*(1+a*.13)+a;s.position.x=Math.cos(r)*.22,s.position.z=Math.sin(r*1.3)*.22,s.position.y=.35+Math.sin(r*2)*.15}if(n.chunks)for(const a of n.chunks){const s=a.userData.orbit,r=t*s.speed+s.phase;a.position.set(Math.cos(r)*s.r,.5+s.y+Math.sin(r*1.7)*.08,Math.sin(r)*s.r),a.rotation.x+=.01,a.rotation.y+=.013}n.blobBody&&(n.blobBody.scale.y=.75+Math.sin(t*3)*.06,n.blobBody.scale.x=1-Math.sin(t*3)*.04)}faceToward(e,t){const n=e-this.unit.pos.x,a=t-this.unit.pos.y;n===0&&a===0||(this.body.rotation.y=Math.atan2(n,a))}async walkPath(e,t=140){this._animating=!0;let n={...this.unit.pos};for(const a of e){this.faceTowardFrom(n,a);const s=this.tilePos(n.x,n.y),r=this.tilePos(a.x,a.y);await Ca({duration:t,ease:o=>o,onUpdate:o=>{this.group.position.lerpVectors(s,r,o),this.group.position.y+=Math.sin(o*Math.PI)*.16}}),n=a}this._animating=!1}faceTowardFrom(e,t){const n=t.x-e.x,a=t.y-e.y;(n||a)&&(this.body.rotation.y=Math.atan2(n,a))}async leapTo(e,t=380){this._animating=!0;const n=this.group.position.clone(),a=this.tilePos(e.x,e.y);await Ca({duration:t,ease:s=>s,onUpdate:s=>{this.group.position.lerpVectors(n,a,s),this.group.position.y+=Math.sin(s*Math.PI)*1.4}}),this._animating=!1}async attackLunge(e){this._animating=!0;const t=this.group.position.clone(),a=e.group.position.clone().clone().sub(t).normalize().multiplyScalar(.45);this.faceToward(e.unit.pos.x,e.unit.pos.y);const s=this.body.userData.parts;await Ca({duration:130,ease:wl,onUpdate:r=>{this.group.position.copy(t).addScaledVector(a,r),s&&(s.swordArm.rotation.x=-r*2.2)}}),await Ca({duration:170,ease:Dd,onUpdate:r=>{this.group.position.copy(t).addScaledVector(a,1-r),s&&(s.swordArm.rotation.x=-(1-r)*2.2)}}),this._animating=!1}hitFlash(){this.body.traverse(e=>{if(e.isMesh&&e.material?.emissive){const t=e.material;e.material=t.clone(),e.material.emissive=new Oe("#ff2222"),e.material.emissiveIntensity=.9,setTimeout(()=>{e.material.dispose(),e.material=t},130)}})}async deathAnim(){this._animating=!0;const e=this.group;await Ca({duration:420,ease:wl,onUpdate:t=>{this.body.rotation.x=t*Math.PI/2,e.position.y-=.004,this.body.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=1-t)}),this.hpbar.sprite.material&&(this.hpbar.sprite.material.opacity=1-t)}}),this.group.visible=!1,this._animating=!1}updateHp(){this.hpbar.draw()}worldAnchor(e=.7){const t=this.group.position.clone();return t.y+=this.bodyHeight()*e,t}dispose(){this.emitter&&this.fx.removeEmitter(this.emitter),this.sceneMgr.dispose(this.group)}}const Y0={queimando:{id:"queimando",pt:"Queimando",icon:"🔥",color:"#ff7a33",tickDamage:{dice:"1d6",type:"fogo"},saveEnds:{ability:"dex",dc:12},desc:"Sofre 1d6 de fogo no início do turno. DES CD12 encerra."},envenenado:{id:"envenenado",pt:"Envenenado",icon:"☠️",color:"#52c41a",tickDamage:{dice:"1d4",type:"veneno"},attackAdv:-1,desc:"Sofre 1d4 de veneno por turno e ataca com desvantagem."},sangrando:{id:"sangrando",pt:"Sangrando",icon:"🩸",color:"#e03131",tickDamage:{dice:"1d4",type:"cortante"},desc:"Sofre 1d4 de dano cortante no início do turno."},congelado:{id:"congelado",pt:"Congelado",icon:"🧊",color:"#7ad8ff",preventsAction:!0,preventsMove:!0,advAgainst:1,saveEnds:{ability:"con",dc:13},desc:"Não age nem se move; ataques contra têm vantagem. CON CD13 encerra."},atordoado:{id:"atordoado",pt:"Atordoado",icon:"💫",color:"#ffe14d",preventsAction:!0,preventsMove:!0,advAgainst:1,desc:"Perde o turno; ataques contra têm vantagem."},lento:{id:"lento",pt:"Lento",icon:"🐌",color:"#9aa0a6",speedMult:.5,desc:"Velocidade reduzida pela metade."},medo:{id:"medo",pt:"Amedrontado",icon:"😱",color:"#9a5aff",attackAdv:-1,saveEnds:{ability:"wis",dc:12},desc:"Ataca com desvantagem. SAB CD12 encerra."},cego:{id:"cego",pt:"Cego",icon:"🙈",color:"#666666",attackAdv:-1,advAgainst:1,desc:"Ataca com desvantagem; ataques contra têm vantagem."},enraizado:{id:"enraizado",pt:"Enraizado",icon:"🌿",color:"#2f9e44",preventsMove:!0,saveEnds:{ability:"str",dc:13},desc:"Não pode se mover. FOR CD13 encerra."},marcado:{id:"marcado",pt:"Marcado",icon:"🎯",color:"#ff66cc",advAgainst:1,desc:"Ataques contra esta criatura têm vantagem."},abencoado:{id:"abencoado",pt:"Abençoado",icon:"✨",color:"#fff3b0",attackBonusDice:"1d4",desc:"+1d4 nas jogadas de ataque."},amaldicoado:{id:"amaldicoado",pt:"Amaldiçoado",icon:"🕯️",color:"#9a5aff",attackBonusDice:"-1d4",desc:"-1d4 nas jogadas de ataque."},fortalecido:{id:"fortalecido",pt:"Fortalecido",icon:"💪",color:"#ffa94d",damageBonus:4,desc:"+4 de dano em todos os ataques."},protegido:{id:"protegido",pt:"Protegido",icon:"🛡️",color:"#74c0fc",acBonus:2,desc:"+2 de CA."},regenerando:{id:"regenerando",pt:"Regenerando",icon:"💚",color:"#69db7c",tickHeal:"1d6",desc:"Recupera 1d6 PV no início do turno."},paralisado:{id:"paralisado",pt:"Paralisado",icon:"⚡",color:"#ffe14d",preventsAction:!0,preventsMove:!0,advAgainst:1,saveEnds:{ability:"con",dc:12},desc:"Não age nem se move. CON CD12 encerra."}};function pn(i){const e=Y0[i];if(!e)throw new Error(`Condição desconhecida: ${i}`);return e}class Z0{constructor({sceneMgr:e,fx:t,dmg:n,audio:a,battle:s,tilemap:r,onLog:o,onSync:c,speed:l=1}){this.sceneMgr=e,this.fx=t,this.dmg=n,this.audio=a,this.battle=s,this.tilemap=r,this.onLog=o??(()=>{}),this.onSync=c??(()=>{}),this.speed=l,this.views=new Map,this.busy=!1,this._lastCrit=!1;for(const d of s.units)this.views.set(d.id,new Cl(e,t,d,s.grid));e.onFrame(d=>{for(const[,u]of this.views)u.group.visible&&u.update(d)})}d(e){return Math.max(16,e/this.speed)}view(e){return this.views.get(e)}tileWorld(e,t){const n=this.battle.grid.at(e,t),a=Ld(e,t,0);return a.y=(n.h+1)*.35+.3,a}async drainAndPlay(){const e=this.battle.drainEvents();e.length&&await this.play(e),this.onSync()}async play(e){this.busy=!0;for(const t of e)try{await this.handle(t)}catch(n){console.error("Erro animando evento",t,n)}this.busy=!1,this.onSync()}async handle(e){const t=e.unitId?this.view(e.unitId):null;switch(e.type){case"log":this.onLog(e.msg,e.cls);break;case"turnStart":{t&&(this.sceneMgr.centerOn(t.group.position.x,t.group.position.z),await Gt(this.d(110))),this.onSync();break}case"move":t&&e.path?.length&&(this.audio?.step(),await t.walkPath(e.path,this.d(135)));break;case"attack":{const n=this.view(e.attackerId),a=this.view(e.defenderId);this._lastCrit=e.crit,n&&a&&(this.audio?.slash(),await n.attackLunge(a),e.hit||(this.dmg.show(a.worldAnchor(),"errou","miss"),this.audio?.miss()));break}case"damage":{if(!t)break;t.updateHp(),t.hitFlash();const n=this._lastCrit;this._lastCrit=!1;const a=e.packets?.[0]?.type??"cortante";this.dmg.damage(t.worldAnchor(),e.amount,a,n);for(const s of e.packets??[])s.final>0&&this.fx.elementBurst(t.worldAnchor(.5),s.type,n);n?(this.sceneMgr.screenShake(.5),this.audio?.crit()):this.audio?.hit(),await Gt(this.d(170));break}case"dodge":t&&this.dmg.show(t.worldAnchor(),"esquivou!","dodge"),await Gt(this.d(120));break;case"heal":t&&(t.updateHp(),this.dmg.show(t.worldAnchor(),`+${e.amount}`,"heal"),this.fx.burst(t.worldAnchor(.5),"#4ade80",{count:16,up:1.8}),this.audio?.heal()),await Gt(this.d(140));break;case"death":t&&(this.audio?.death(),await t.deathAnim());break;case"condition":{if(t&&e.on){const n=pn(e.condition);this.dmg.show(t.worldAnchor(.95),`${n.icon} ${n.pt}`,"condition"),await Gt(this.d(160))}this.onSync();break}case"blast":{const n=this.tileWorld(e.x,e.y);this.fx.elementBurst(n,e.element??"fogo",!0),this.sceneMgr.screenShake(.4),this.audio?.blast(),await Gt(this.d(280));break}case"lineBlast":{for(const n of e.tiles)this.fx.elementBurst(this.tileWorld(n.x,n.y),e.element??"gelo",!1),await Gt(this.d(70));this.audio?.blast();break}case"wingJump":t&&(this.audio?.jump(),await t.leapTo(e.to,this.d(420)));break;case"blink":t&&(this.fx.burst(t.worldAnchor(.5),"#ff66cc",{count:18}),t.syncPosition(),this.fx.burst(t.worldAnchor(.5),"#ff66cc",{count:18}),await Gt(this.d(150)));break;case"summon":{const n=this.battle.units.find(a=>a.id===e.unitId);if(n&&!this.views.has(n.id)){const a=new Cl(this.sceneMgr,this.fx,n,this.battle.grid);this.views.set(n.id,a),this.fx.burst(a.worldAnchor(.5),"#aa66ff",{count:26}),this.audio?.summon(),await Gt(this.d(220))}break}case"rage":t&&(this.dmg.show(t.worldAnchor(),"💢 FÚRIA!","rage"),this.fx.burst(t.worldAnchor(.5),"#ff4444",{count:20}),await Gt(this.d(180)));break;case"oa":this.dmg.show(this.view(e.attackerId)?.worldAnchor()??this.tileWorld(0,0),"⚡ oportunidade!","condition"),await Gt(this.d(120));break;case"hazard":t&&this.fx.elementBurst(t.worldAnchor(.3),e.terrain==="lava"?"fogo":e.terrain==="poison"?"veneno":"perfurante"),await Gt(this.d(120));break;case"potion":this.audio?.potion();break;case"ability":case"enemyAbility":t&&(this.dmg.show(t.worldAnchor(1.05),`✨ ${e.pt}`,"ability-name"),await Gt(this.d(200)));break;case"xpGain":break;case"victory":this.audio?.victory(),await Gt(this.d(420));break;case"defeat":this.audio?.defeat(),await Gt(this.d(420));break;case"roundStart":case"turnEnd":case"battleStart":this.onSync();break}}dispose(){for(const[,e]of this.views)e.dispose();this.views.clear()}}class j0{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.muted=this.loadMuted(),this.musicNodes=[]}ensure(){return this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.16,this.musicGain.connect(this.master)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}loadMuted(){try{return localStorage.getItem("frosty-muted")==="1"}catch{return!1}}toggleMute(){this.muted=!this.muted;try{localStorage.setItem("frosty-muted",this.muted?"1":"0")}catch{}return this.master&&(this.master.gain.value=this.muted?0:.5),this.muted}tone({freq:e=440,type:t="sine",dur:n=.15,vol:a=.3,slide:s=0,delay:r=0}){const o=this.ensure(),c=o.currentTime+r,l=o.createOscillator(),d=o.createGain();l.type=t,l.frequency.setValueAtTime(e,c),s&&l.frequency.exponentialRampToValueAtTime(Math.max(30,e+s),c+n),d.gain.setValueAtTime(a,c),d.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(d).connect(this.master),l.start(c),l.stop(c+n+.02)}noise({dur:e=.2,vol:t=.25,freq:n=1e3,q:a=1,type:s="bandpass",delay:r=0,slide:o=0}){const c=this.ensure(),l=c.currentTime+r,d=Math.ceil(c.sampleRate*e),u=c.createBuffer(1,d,c.sampleRate),f=u.getChannelData(0);for(let m=0;m<d;m++)f[m]=Math.random()*2-1;const h=c.createBufferSource();h.buffer=u;const g=c.createBiquadFilter();g.type=s,g.frequency.setValueAtTime(n,l),o&&g.frequency.exponentialRampToValueAtTime(Math.max(40,n+o),l+e),g.Q.value=a;const v=c.createGain();v.gain.setValueAtTime(t,l),v.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(g).connect(v).connect(this.master),h.start(l)}click(){this.tone({freq:700,type:"square",dur:.05,vol:.12})}step(){this.noise({dur:.07,vol:.06,freq:500,type:"lowpass"})}slash(){this.noise({dur:.14,vol:.18,freq:2600,slide:-1800,q:2})}miss(){this.noise({dur:.12,vol:.1,freq:1200,slide:800})}hit(){this.noise({dur:.1,vol:.22,freq:300,type:"lowpass"}),this.tone({freq:160,type:"triangle",dur:.12,vol:.2,slide:-60})}crit(){this.noise({dur:.18,vol:.3,freq:400,type:"lowpass"}),this.tone({freq:90,type:"sawtooth",dur:.25,vol:.25,slide:-40}),this.tone({freq:1200,type:"square",dur:.1,vol:.12,slide:600,delay:.03})}death(){this.tone({freq:320,type:"sawtooth",dur:.5,vol:.16,slide:-260})}heal(){[523,659,784].forEach((e,t)=>this.tone({freq:e,dur:.16,vol:.12,delay:t*.07}))}potion(){this.tone({freq:880,type:"sine",dur:.2,vol:.12,slide:220})}jump(){this.noise({dur:.3,vol:.12,freq:900,slide:1400})}blast(){this.noise({dur:.4,vol:.3,freq:250,type:"lowpass",slide:-150})}summon(){this.tone({freq:220,type:"triangle",dur:.35,vol:.15,slide:330})}levelup(){[523,659,784,1047].forEach((e,t)=>this.tone({freq:e,type:"triangle",dur:.22,vol:.16,delay:t*.1}))}victory(){[392,523,659,784,1047].forEach((e,t)=>this.tone({freq:e,type:"triangle",dur:.3,vol:.15,delay:t*.12}))}defeat(){[400,320,250,180].forEach((e,t)=>this.tone({freq:e,type:"sawtooth",dur:.4,vol:.12,delay:t*.18}))}stopMusic(){for(const e of this.musicNodes)try{e.stop?e.stop():e.disconnect()}catch{}this.musicNodes=[]}playZoneAmbient(e=1){const t=this.ensure();this.stopMusic();const a={1:220,2:196,3:174.6,4:164.8,5:146.8}[e]??220,s=e>=4?[1,1.189,1.498]:[1,1.26,1.498];for(let r=0;r<s.length;r++){const o=t.createOscillator();o.type="sine",o.frequency.value=a*s[r]/2;const c=t.createGain();c.gain.value=.05;const l=t.createOscillator();l.frequency.value=.07+r*.03;const d=t.createGain();d.gain.value=.02,l.connect(d).connect(c.gain),o.connect(c).connect(this.musicGain),o.start(),l.start(),this.musicNodes.push(o,l)}}}const J0={str:"Força",dex:"Destreza",con:"Constituição",int:"Inteligência",wis:"Sabedoria",cha:"Carisma"};function Ri(i){return Math.floor((i-10)/2)}function K0(i){return 2+Math.floor(Math.max(0,i-1)/4)}function Fo(i){return i<=1?0:Math.round(120*Math.pow(i-1,2.1))}function Q0(i){let e=1;for(;Fo(e+1)<=i&&e<99;)e++;return e}const Fd=[{id:"ataque",pt:"Ataque",icon:"⚔️",unlockLevel:1,kind:"attack",targeting:"enemy",range:1,cooldown:0,desc:"Golpeia com a Geada Eterna. Com Ataque Extra, golpeia múltiplas vezes."},{id:"postura_defensiva",pt:"Postura Defensiva",icon:"🛡️",unlockLevel:1,kind:"self",targeting:"self",cooldown:0,condition:"protegido",duration:2,desc:"Assume postura defensiva: +2 de CA até seu próximo turno."},{id:"salto_alado",pt:"Salto Alado",icon:"🪽",unlockLevel:1,kind:"move",targeting:"tile",range:4,cooldown:3,isMovement:!0,desc:"Voa até 4 casas, ignorando obstáculos, inimigos e alturas. Não provoca ataques de oportunidade. Não gasta a ação."},{id:"retomar_folego",pt:"Retomar Fôlego",icon:"💗",unlockLevel:1,kind:"self",targeting:"self",cooldown:0,usesPerBattle:1,freeAction:!0,healDice:"1d10",healLevelBonus:!0,desc:"Recupera 1d10 + nível PV. 1× por batalha. Não gasta a ação."},{id:"golpe_arrebatador",pt:"Golpe Arrebatador",icon:"🌪️",unlockLevel:3,kind:"aoe",targeting:"self",radius:1,cooldown:2,weaponMult:1,desc:"Gira a lâmina: ataca TODOS os inimigos adjacentes com dano total."},{id:"investida",pt:"Investida",icon:"🐏",unlockLevel:5,kind:"charge",targeting:"enemy",range:4,cooldown:3,weaponMult:1,bonusDice:"1d6",advantage:!0,desc:"Avança até 4 casas até um inimigo e ataca com vantagem e +1d6 de dano."},{id:"grito_intimidador",pt:"Grito Intimidador",icon:"😤",unlockLevel:6,kind:"aoe",targeting:"self",radius:2,cooldown:4,noDamage:!0,riders:[{condition:"medo",dc:13,save:"wis",duration:2,chance:1}],desc:"Urro de guerra: inimigos a 2 casas devem salvar (SAB) ou ficam amedrontados."},{id:"golpe_gelido",pt:"Golpe Gélido",icon:"❄️",unlockLevel:7,kind:"attack",targeting:"enemy",range:1,cooldown:3,weaponMult:1,bonusElemental:{dice:"2d8",element:"gelo"},riders:[{condition:"congelado",dc:13,save:"con",duration:1,chance:.35}],desc:"Canaliza as runas: ataque + 2d8 de gelo, 35% de congelar o alvo."},{id:"surto_acao",pt:"Surto de Ação",icon:"⚡",unlockLevel:10,kind:"self",targeting:"self",cooldown:0,usesPerBattle:1,freeAction:!0,grantsExtraAction:!0,desc:"Explosão de vigor: ganha uma ação extra neste turno. 1× por batalha."},{id:"tornado_aco",pt:"Tornado de Aço",icon:"🌀",unlockLevel:13,kind:"aoe",targeting:"self",radius:2,cooldown:4,weaponMult:.75,desc:"Redemoinho de lâmina: atinge todos os inimigos a até 2 casas (75% do dano)."},{id:"lamina_tempestuosa",pt:"Lâmina Tempestuosa",icon:"🌩️",unlockLevel:17,kind:"line",targeting:"line",range:4,cooldown:4,dice:"4d6",dtype:"gelo",riders:[{condition:"lento",dc:14,save:"con",duration:2,chance:1}],desc:"Onda de geada em linha reta: 4d6 de gelo e retarda os atingidos."},{id:"furia_norte",pt:"Fúria do Norte",icon:"🔥",unlockLevel:18,kind:"self",targeting:"self",cooldown:0,usesPerBattle:1,freeAction:!0,selfConditions:[{condition:"fortalecido",duration:3},{condition:"abencoado",duration:3}],desc:"Desperta a fúria gélida: +4 de dano e +1d4 de acerto por 3 turnos. 1× por batalha."},{id:"avatar_geada",pt:"Avatar da Geada",icon:"🧊",unlockLevel:20,kind:"aoe",targeting:"self",radius:3,cooldown:0,usesPerBattle:1,dice:"8d8",dtype:"gelo",riders:[{condition:"congelado",dc:15,save:"con",duration:1,chance:.5}],desc:"Torna-se o inverno: 8d8 de gelo em raio 3, 50% de congelar cada inimigo. 1× por batalha."}],Nd=[{level:5,id:"ataque_extra",pt:"Ataque Extra",desc:"Seu Ataque básico golpeia 2 vezes."},{level:9,id:"indomavel",pt:"Indomável",desc:"Imune a medo; +2 em testes de resistência."},{level:10,id:"runas_despertas",pt:"Runas Despertas",desc:"A Geada Eterna desperta: +1d6 de gelo nos ataques."},{level:11,id:"postura_colosso",pt:"Postura do Colosso",desc:"Imune a acertos críticos."},{level:14,id:"pele_inverno",pt:"Pele de Inverno",desc:"Resistência a gelo e fogo."},{level:15,id:"asas_verdadeiras",pt:"Asas Verdadeiras",desc:"Salto Alado: alcance 6 e recarga 1."},{level:19,id:"mestre_armas",pt:"Mestra de Armas",desc:"Crítico com 19 ou 20."},{level:22,id:"vigor_glacial",pt:"Vigor Glacial",desc:"+20 PV máximos; Retomar Fôlego cura em dobro."},{level:25,id:"ataque_extra_2",pt:"Ataque Extra II",desc:"Seu Ataque básico golpeia 3 vezes."},{level:28,id:"encarnacao_inverno",pt:"Encarnação do Inverno",desc:"Aura gélida: 1d6 de gelo em inimigos adjacentes a cada turno."}];function ev(i){return Fd.filter(e=>e.unlockLevel<=i)}function tv(i){return Nd.filter(e=>e.level<=i)}function nv(){return{level:1,xp:0,gold:50,str:17,dex:12,con:16,int:10,wis:11,cha:14,asiSpent:0,pendingAsi:0,upgrades:{lamina:0,armadura:0,runas:0,botas:0,amuleto:0},potions:{cura:3,cura_maior:0,cura_suprema:0,forca:0,antidoto:0},hp:0,statsTotal:{kills:0,crits:0,damageDealt:0,damageTaken:0,battles:0}}}function ka(i){const e=new Set(tv(i.level).map(r=>r.id)),t=Ri(i.con);i.maxHp=24+t*2+(i.level-1)*(7+t)+i.upgrades.amuleto*10+(e.has("vigor_glacial")?20:0),i.ac=16+i.upgrades.armadura+Math.min(1,Ri(i.dex)),i.speed=5+i.upgrades.botas,i.dmgFlat=i.upgrades.lamina;const n=[];i.upgrades.runas>0&&n.push({dice:`${i.upgrades.runas}d4`,element:"gelo"}),e.has("runas_despertas")&&n.push({dice:"1d6",element:"gelo"});const a=i.level>=20?"3d10":i.level>=12?"2d10":"2d8";i.weapon={pt:"Geada Eterna",dice:a,dtype:"cortante",range:1,extraDamage:n},i.attacksPerAction=e.has("ataque_extra_2")?3:e.has("ataque_extra")?2:1;const s=[];return e.has("indomavel")&&s.push({type:"saveBonus",value:2}),e.has("postura_colosso")&&s.push({type:"sturdy"}),e.has("mestre_armas")&&s.push({type:"critRange",min:19}),e.has("encarnacao_inverno")&&s.push({type:"auraDamage",element:"gelo",dice:"1d6",radius:1}),i.effects=s,i.resistances=e.has("pele_inverno")?["gelo","fogo"]:[],i.conditionImmunities=e.has("indomavel")?["medo"]:[],i.healDouble=e.has("vigor_glacial"),i.wingRange=e.has("asas_verdadeiras")?6:4,i.wingCooldown=e.has("asas_verdadeiras")?1:3,(i.hp<=0||i.hp>i.maxHp)&&(i.hp=i.maxHp),i}function iv(i,e){i.xp+=e;const t=Math.min(99,Q0(i.xp)),n=[],a=[4,8,12,16,21,24,27,30];for(;i.level<t;)i.level++,n.push(i.level),a.includes(i.level)&&i.pendingAsi++;return n.length&&ka(i),n}function Rl(i,e,t){return i.pendingAsi<=0?!1:(i[e]=Math.min(24,i[e]+1),i[t]=Math.min(24,i[t]+1),i.pendingAsi--,i.asiSpent++,ka(i),!0)}function av(i){const e=Fo(i.level),t=Fo(i.level+1);return{current:i.xp-e,needed:t-e,fraction:(i.xp-e)/(t-e)}}const ra={cura:{id:"cura",pt:"Poção de Cura",icon:"🧪",price:25,healDice:"2d4+2",desc:"Recupera 2d4+2 PV."},cura_maior:{id:"cura_maior",pt:"Poção de Cura Maior",icon:"⚗️",price:80,healDice:"4d4+4",desc:"Recupera 4d4+4 PV."},cura_suprema:{id:"cura_suprema",pt:"Poção de Cura Suprema",icon:"🍷",price:220,healDice:"8d4+8",desc:"Recupera 8d4+8 PV."},forca:{id:"forca",pt:"Poção de Fúria",icon:"💪",price:90,condition:"fortalecido",duration:3,desc:"+4 de dano por 3 turnos."},antidoto:{id:"antidoto",pt:"Panaceia",icon:"🌿",price:60,cleanse:!0,desc:"Remove todas as condições negativas."}},sv=["queimando","envenenado","sangrando","congelado","atordoado","lento","medo","cego","enraizado","marcado","amaldicoado","paralisado"],Fs={lamina:{id:"lamina",pt:"Afiar a Geada Eterna",icon:"🗡️",max:5,price:i=>100+i*120,desc:"+1 de dano em todos os ataques (permanente)."},armadura:{id:"armadura",pt:"Reforçar Armadura Negra",icon:"🛡️",max:4,price:i=>150+i*180,desc:"+1 de CA (permanente)."},runas:{id:"runas",pt:"Gravar Runa de Gelo",icon:"❄️",max:3,price:i=>200+i*250,desc:"+1d4 de dano de gelo nos ataques (acumula)."},botas:{id:"botas",pt:"Grevas do Vento Norte",icon:"👢",max:2,price:i=>250+i*300,desc:"+1 de movimento (permanente)."},amuleto:{id:"amuleto",pt:"Amuleto do Coração Gélido",icon:"📿",max:5,price:i=>120+i*140,desc:"+10 PV máximos (permanente)."}},rv=new DOMParser;function ut(i,e){const t=rv.parseFromString(`<body>${e}</body>`,"text/html");i.replaceChildren(...t.body.childNodes)}function gt(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Et(i,e=""){const t=document.createElement("div");return i&&(t.className=i),e&&ut(t,e),t}const ov={goblinoide:"👺",orc:"🗡️","morto-vivo":"💀",fera:"🐺",verme:"🕷️",limo:"🟢",demonio:"😈",diabo:"👹",draconico:"🐉",elemental:"🌪️",constructo:"🗿",gigante:"🏔️",humanoide:"🥷",fada:"🧚",planta:"🌿",aberracao:"👁️",licantropo:"🐾"};function No(i){return ov[i]??"👾"}class cv{constructor(e,t){this.root=e,this.cb=t,this.el=document.createElement("div"),this.el.className="hud",ut(this.el,`
      <div class="hud-top">
        <div class="battle-info"></div>
        <div class="turn-order"></div>
      </div>
      <div class="hud-corner-tr">
        <button class="btn-speed" title="Velocidade das animações">⏩ 1x</button>
        <button class="btn-demo" title="Modo demonstração (Frosty joga sozinha)">🤖</button>
        <button class="btn-mute" title="Som">🔊</button>
        <button class="btn-help" title="Como jogar (H)">❓</button>
      </div>
      <div class="hero-card">
        <div class="name"><span>❄️ Frosty</span><span class="level"></span></div>
        <div class="bar-wrap"><div class="bar hp"></div><div class="bar-label hp-label"></div></div>
        <div class="bar-wrap" style="height:9px"><div class="bar xp"></div></div>
        <div class="conditions"></div>
        <div class="gold-line"></div>
      </div>
      <div class="enemy-inspect"></div>
      <div class="combat-log"></div>
      <div class="action-hint" style="display:none"></div>
      <div class="action-dock">
        <div class="action-bar"></div>
        <div class="potion-bar"></div>
        <button class="end-turn-btn">Encerrar Turno [T]</button>
      </div>
      <div class="attack-preview" style="display:none"></div>
    `),e.appendChild(this.el),this.$info=this.el.querySelector(".battle-info"),this.$turns=this.el.querySelector(".turn-order"),this.$heroLevel=this.el.querySelector(".hero-card .level"),this.$hpBar=this.el.querySelector(".bar.hp"),this.$hpLabel=this.el.querySelector(".hp-label"),this.$xpBar=this.el.querySelector(".bar.xp"),this.$conds=this.el.querySelector(".hero-card .conditions"),this.$gold=this.el.querySelector(".gold-line"),this.$inspect=this.el.querySelector(".enemy-inspect"),this.$log=this.el.querySelector(".combat-log"),this.$abilityBar=this.el.querySelector(".action-bar"),this.$potionBar=this.el.querySelector(".potion-bar"),this.$endTurn=this.el.querySelector(".end-turn-btn"),this.$hint=this.el.querySelector(".action-hint"),this.$preview=this.el.querySelector(".attack-preview"),this.$endTurn.onclick=()=>this.cb.onEndTurn(),this.el.querySelector(".btn-mute").onclick=n=>{const a=this.cb.onToggleMute();n.currentTarget.textContent=a?"🔇":"🔊"},this.el.querySelector(".btn-speed").onclick=n=>{const a=this.cb.onToggleSpeed();n.currentTarget.textContent=`⏩ ${a}x`},this.el.querySelector(".btn-help").onclick=()=>this.cb.onHelp(),this.$demoBtn=this.el.querySelector(".btn-demo"),this.$demoBtn.onclick=()=>{const n=this.cb.onDemoToggle();this.$demoBtn.style.borderColor=n?"var(--gold)":"",this.$demoBtn.textContent=n?"🤖✓":"🤖"}}show(){this.el.style.display=""}hide(){this.el.style.display="none"}log(e,t="info"){const n=document.createElement("div");for(n.className=`log-line ${t}`,n.textContent=e,this.$log.appendChild(n);this.$log.children.length>120;)this.$log.firstChild.remove();this.$log.scrollTop=this.$log.scrollHeight}clearLog(){this.$log.replaceChildren()}sync(e,t,{selectedAbility:n,busy:a,demoMode:s}){const r=e.hero,o=e.zone,c=e.isEndless;ut(this.$info,`<span class="zone-name">${gt(o?.pt??"")}</span> — ${c?"∞ Batalha":"Batalha"} ${e.battleIndex}${c?"":"/50"} · Round ${e.round}`),this.$turns.replaceChildren();const l=e.turnOrder.slice(0,14);for(let h=0;h<l.length;h++){const g=l[h],v=document.createElement("div");v.className=`turn-chip ${g.side==="enemy"?"enemy":""} ${g.alive?"":"dead"} ${h===e.activeIdx?"active":""}`,v.title=`${g.name} — ${g.hp}/${g.maxHp} PV`;const m=g.kind==="hero"?"❄️":No(g.family);ut(v,`<span>${m}</span><div class="mini-hp"><div style="width:${Math.max(0,g.hp/g.maxHp*100)}%"></div></div>`),this.$turns.appendChild(v)}this.$heroLevel.textContent=`Nv ${t.level}`;const d=Math.max(0,r.hp/r.maxHp);this.$hpBar.style.width=`${d*100}%`,this.$hpBar.classList.toggle("low",d<.35),this.$hpLabel.textContent=`${r.hp} / ${r.maxHp}`;const u=av(t);this.$xpBar.style.width=`${Math.min(100,u.fraction*100)}%`,this.$conds.replaceChildren();for(const[h,g]of r.conditions){const v=pn(h),m=document.createElement("span");m.className="cond-chip",m.style.borderColor=v.color,m.textContent=`${v.icon} ${v.pt} (${g.duration})`,m.title=v.desc,this.$conds.appendChild(m)}this.$gold.textContent=`💰 ${t.gold} ouro · 👟 ${r.movementLeft??0} mov · ⚔️ ${r.actionsLeft??0} ação`,this.$abilityBar.replaceChildren(),(r.abilities??[]).forEach((h,g)=>{const v=document.createElement("button");v.className="ability-btn";const m=r.cooldowns.get(h.id),p=h.usesPerBattle?r.usesLeft.get(h.id)??h.usesPerBattle:null,b=p!==null&&p<=0,y=!h.freeAction&&!h.isMovement&&r.actionsLeft<=0;(m||b)&&v.classList.add("oncooldown"),n?.id===h.id&&v.classList.add("selected"),v.disabled=a||s||!e.isPlayerTurn()||!!m||b||y,ut(v,`
        <span class="hotkey">${g+1}</span>
        ${m?`<span class="cd-badge">${m}</span>`:p!==null?`<span class="cd-badge">${p}×</span>`:""}
        <span>${h.icon}</span>
        <span class="ab-label">${gt(h.pt)}</span>`),v.title=`${h.pt} — ${h.desc}`,v.onclick=()=>this.cb.onAbilitySelect(h),this.$abilityBar.appendChild(v)}),this.$potionBar.replaceChildren();for(const h of Object.values(ra)){const g=t.potions[h.id]??0;if(g<=0)continue;const v=document.createElement("button");v.className="potion-btn",v.disabled=a||s||!e.isPlayerTurn()||e.potionUsedThisTurn,ut(v,`<span>${h.icon}</span><span class="count">${g}</span>`),v.title=`${h.pt} — ${h.desc} (1 por turno, ação livre)`,v.onclick=()=>this.cb.onPotion(h.id),this.$potionBar.appendChild(v)}this.$endTurn.disabled=a||s||!e.isPlayerTurn()}setHint(e){this.$hint.style.display=e?"":"none",this.$hint.textContent=e??""}showPreview(e,t,n){this.$preview.style.display="",ut(this.$preview,n);const a=18,s=this.$preview.offsetWidth;this.$preview.style.left=`${Math.min(window.innerWidth-s-10,e+a)}px`,this.$preview.style.top=`${t+a}px`}hidePreview(){this.$preview.style.display="none"}inspectEnemy(e){if(!e){this.$inspect.classList.remove("visible");return}const t=(e.adjectives??[]).map(s=>`<div class="e-adj"><b>${gt(e.gender==="f"?s.f:s.m)}</b> — ${gt(s.desc)}</div>`).join(""),n=[];for(const s of e.resistances??[])n.push(`<span class="tag resist">${Ur[s]??""} resiste ${gt(s)}</span>`);for(const s of e.vulnerabilities??[])n.push(`<span class="tag vuln">${Ur[s]??""} vulnerável ${gt(s)}</span>`);for(const s of e.immunities??[])n.push(`<span class="tag immune">${Ur[s]??""} imune ${gt(s)}</span>`);const a=[...e.conditions.keys()].map(s=>{const r=pn(s);return`<span class="cond-chip" style="border-color:${r.color}">${r.icon} ${r.pt}</span>`}).join(" ");ut(this.$inspect,`
      <div class="e-name">${No(e.family)} ${gt(e.name)}${e.isBoss?" 👑":""}</div>
      <div class="e-stats">
        <span>❤️ ${e.hp}/${e.maxHp}</span>
        <span>🛡️ CA ${e.ac}</span>
        <span>👟 ${e.speed}</span>
        <span>T${e.tier}</span>
      </div>
      ${a?`<div style="margin:4px 0">${a}</div>`:""}
      ${t||'<div style="font-size:0.8rem;color:var(--text-dim)">Espécime comum, sem peculiaridades.</div>'}
      <div class="e-tags">${n.join("")}</div>
    `),this.$inspect.classList.add("visible")}dispose(){this.el.remove()}}const $=(i,e,t,n={})=>({pt:i,dice:e,dtype:t,range:1,...n}),Ve=(i,e,t=12,n="con",a=2)=>({type:"riderCondition",condition:i,chance:e,dc:t,save:n,duration:a}),lv=(i,e,t,n={})=>({pt:i,kind:"smite",dice:e,dtype:t,range:1,cooldown:3,...n}),Ut=(i,e,t,n={})=>({pt:i,kind:"blast",dice:e,dtype:t,range:4,radius:1,save:"dex",dc:12,cooldown:3,...n}),Ss=(i,e,t={})=>({pt:i,kind:"heal",dice:e,range:4,cooldown:3,...t}),bs=(i,e,t={})=>({pt:i,kind:"buff",condition:e,duration:3,range:4,cooldown:4,...t}),yn=(i,e,t={})=>({pt:i,kind:"debuff",condition:e,duration:2,range:4,save:"wis",dc:12,cooldown:3,...t}),Fr=(i,e,t,n={})=>({pt:i,kind:"summon",summonId:e,count:t,uses:1,cooldown:5,...n});function X(i,e,t,n,a,s){return{id:i,pt:e,gender:t,family:n,tier:a,str:10,dex:10,con:10,int:8,wis:8,cha:8,speed:5,behavior:"agressivo",traits:[],specials:[],resist:[],vuln:[],immune:[],condImmune:[],...s}}const fa=[X("goblin","Goblin","m","goblinoide",1,{str:8,dex:14,con:10,int:10,wis:8,cha:8,hp:"2d6",ac:13,speed:6,xp:25,attacks:[$("Cimitarra","1d6","cortante",{finesse:!0})],traits:[{type:"packTactics"}],visual:{body:"biped",color:"#7a9b3e",accent:"#4a3520",scale:.8}}),X("goblin_batedor","Goblin Batedor","m","goblinoide",1,{str:8,dex:15,con:10,int:10,wis:10,cha:8,hp:"2d6",ac:13,speed:6,xp:30,behavior:"atirador",attacks:[$("Funda","1d4","concussao",{range:4,finesse:!0})],visual:{body:"biped",color:"#6b8c3a",accent:"#3a2a18",scale:.78}}),X("hobgoblin","Hobgoblin","m","goblinoide",1,{str:13,dex:12,con:12,int:10,wis:10,cha:9,hp:"3d8",ac:14,speed:5,xp:50,attacks:[$("Espada Longa","1d8","cortante")],traits:[{type:"packTactics"}],visual:{body:"biped",color:"#b35c44",accent:"#5a3a22",scale:.95}}),X("bugbear","Bugbear","m","goblinoide",2,{str:15,dex:14,con:13,int:8,wis:11,cha:9,hp:"5d8",ac:14,speed:5,xp:120,attacks:[$("Clava de Pregos","2d8","concussao")],traits:[{type:"firstBlood",dmgBonus:4}],visual:{body:"brute",color:"#8a6b3e",accent:"#3a2a18",scale:1.15}}),X("xama_goblin","Xamã Goblin","m","goblinoide",2,{str:8,dex:12,con:10,int:12,wis:14,cha:10,hp:"4d6",ac:12,speed:5,xp:110,behavior:"atirador",attacks:[$("Raio Místico","1d8","psiquico",{range:4,ability:"wis"})],specials:[Ss("Cura Tribal","2d6"),bs("Bênção Selvagem","fortalecido")],visual:{body:"biped",color:"#7a9b3e",accent:"#8844aa",scale:.82}}),X("chefe_goblin","Chefe Goblin","m","goblinoide",2,{str:12,dex:14,con:12,int:10,wis:9,cha:12,hp:"6d6",ac:15,speed:6,xp:160,attacks:[$("Cimitarra Dupla","1d6","cortante",{finesse:!0})],multiattack:1,traits:[{type:"packTactics"}],visual:{body:"biped",color:"#5a7b2e",accent:"#aa2222",scale:.9}}),X("rei_goblin","Rei Goblin","m","goblinoide",3,{str:14,dex:14,con:14,int:12,wis:10,cha:14,hp:"10d8",ac:16,speed:5,xp:480,attacks:[$("Machado Real","2d8","cortante")],multiattack:1,specials:[bs("Grito do Rei","fortalecido",{range:5}),Fr("Convocar Súditos","goblin",2)],traits:[{type:"packTactics"},{type:"sturdy"}],visual:{body:"brute",color:"#6a8b2e",accent:"#ffd700",scale:1.1}}),X("orc","Orc","m","orc",1,{str:16,dex:12,con:16,int:7,wis:11,cha:10,hp:"3d8",ac:13,speed:6,xp:50,attacks:[$("Machado Grande","1d12","cortante")],traits:[{type:"rageBelow",threshold:.5,dmgBonus:2,acPenalty:1}],visual:{body:"brute",color:"#5a7a4a",accent:"#3a2a18",scale:1.05}}),X("orc_arqueiro","Orc Arqueiro","m","orc",1,{str:14,dex:14,con:14,int:7,wis:11,cha:9,hp:"3d8",ac:12,speed:5,xp:50,behavior:"atirador",attacks:[$("Arco de Guerra","1d8","perfurante",{range:5,finesse:!0})],visual:{body:"brute",color:"#4a6a3a",accent:"#5a3a22",scale:1}}),X("orc_berserker","Orc Berserker","m","orc",2,{str:18,dex:12,con:16,int:7,wis:9,cha:9,hp:"6d8",ac:12,speed:6,xp:180,attacks:[$("Machado Duplo","2d6","cortante")],traits:[{type:"rageBelow",threshold:.6,dmgBonus:4,acPenalty:2}],visual:{body:"brute",color:"#6a8a4a",accent:"#aa2222",scale:1.12}}),X("xama_orc","Xamã Orc","m","orc",2,{str:12,dex:11,con:14,int:11,wis:16,cha:11,hp:"5d8",ac:13,speed:5,xp:170,behavior:"atirador",attacks:[$("Relâmpago Ancestral","2d6","eletrico",{range:4,ability:"wis"})],specials:[Ss("Toque dos Espíritos","2d8"),Ut("Tempestade de Espíritos","2d6","eletrico",{dc:13})],visual:{body:"brute",color:"#5a7a4a",accent:"#44aaff",scale:1}}),X("brutamontes_orc","Brutamontes Orc","m","orc",2,{str:18,dex:10,con:18,int:6,wis:8,cha:8,hp:"8d8",ac:14,speed:5,xp:220,attacks:[$("Marreta Colossal","2d10","concussao",{riders:[Ve("atordoado",.15,13)]})],traits:[{type:"sturdy"}],visual:{body:"brute",color:"#4a6a3a",accent:"#666666",scale:1.3}}),X("chefe_guerra_orc","Chefe de Guerra Orc","m","orc",3,{str:18,dex:12,con:18,int:11,wis:11,cha:14,hp:"11d8",ac:16,speed:6,xp:550,attacks:[$("Machado do Conquistador","2d12","cortante")],multiattack:1,specials:[bs("Brado de Guerra","fortalecido",{range:5})],traits:[{type:"rageBelow",threshold:.4,dmgBonus:4,acPenalty:1},{type:"sturdy"}],visual:{body:"brute",color:"#3a5a2a",accent:"#ffd700",scale:1.25}}),X("esqueleto","Esqueleto","m","morto-vivo",1,{str:10,dex:14,con:15,int:6,wis:8,cha:5,hp:"2d8",ac:13,speed:5,xp:50,attacks:[$("Espada Enferrujada","1d6","cortante",{finesse:!0})],vuln:["concussao"],immune:["veneno"],condImmune:["envenenado","medo"],visual:{body:"skeleton",color:"#e8e0d0",accent:"#888070",scale:.95}}),X("zumbi","Zumbi","m","morto-vivo",1,{str:13,dex:6,con:16,int:3,wis:6,cha:5,hp:"3d8",ac:8,speed:4,xp:50,attacks:[$("Pancada Pútrida","1d6","concussao")],immune:["veneno"],condImmune:["envenenado","medo"],traits:[{type:"regen",dice:"1d4"}],visual:{body:"biped",color:"#7a8a6a",accent:"#4a3a2a",scale:1}}),X("zumbi_inchado","Zumbi Inchado","m","morto-vivo",2,{str:14,dex:5,con:18,int:3,wis:6,cha:5,hp:"6d8",ac:8,speed:3,xp:140,attacks:[$("Abraço Apodrecido","2d6","concussao",{riders:[Ve("envenenado",.3,12)]})],immune:["veneno"],condImmune:["envenenado","medo"],traits:[{type:"onDeathExplode",element:"veneno",dice:"3d6",radius:1}],visual:{body:"blob",color:"#8a9a5a",accent:"#5a6a3a",scale:1.2}}),X("carnical","Carniçal","m","morto-vivo",2,{str:13,dex:15,con:10,int:7,wis:10,cha:6,hp:"5d8",ac:12,speed:6,xp:130,attacks:[$("Garras Paralisantes","2d4","cortante",{finesse:!0,riders:[Ve("paralisado",.25,12)]})],immune:["veneno"],condImmune:["envenenado"],traits:[{type:"killHeal",dice:"1d8"}],visual:{body:"biped",color:"#9a9a8a",accent:"#cc4444",scale:.95}}),X("sombra","Sombra","f","morto-vivo",2,{str:6,dex:14,con:13,int:6,wis:10,cha:8,hp:"4d8",ac:12,speed:6,xp:130,behavior:"emboscador",attacks:[$("Toque Sombrio","2d6","necrotico",{finesse:!0})],resist:["cortante","perfurante","concussao","gelo","acido"],vuln:["radiante"],immune:["veneno","necrotico"],condImmune:["envenenado","medo"],traits:[{type:"dodge",chance:.15}],visual:{body:"ghost",color:"#222233",accent:"#443355",scale:1}}),X("espectro","Espectro","m","morto-vivo",3,{str:1,dex:14,con:11,int:10,wis:10,cha:11,hp:"7d8",ac:12,speed:7,xp:450,attacks:[$("Dreno Vital","3d6","necrotico",{finesse:!0})],resist:["cortante","perfurante","concussao","gelo","acido"],vuln:["radiante"],immune:["veneno","necrotico"],condImmune:["envenenado","medo","enraizado"],traits:[{type:"phasing"},{type:"flying"},{type:"lifesteal",fraction:.5}],visual:{body:"ghost",color:"#4a5a7a",accent:"#88aacc",scale:1.05}}),X("mumia","Múmia","f","morto-vivo",3,{str:16,dex:8,con:15,int:6,wis:10,cha:12,hp:"9d8",ac:11,speed:4,xp:550,attacks:[$("Punho Maldito","2d6","concussao",{extraDamage:[{dice:"2d6",element:"necrotico"}],riders:[Ve("amaldicoado",.4,13,"wis",3)]})],vuln:["fogo"],immune:["veneno","necrotico"],condImmune:["envenenado","medo"],traits:[{type:"sturdy"}],visual:{body:"biped",color:"#c8b890",accent:"#8a7a50",scale:1}}),X("vampiro","Vampiro","m","morto-vivo",4,{str:18,dex:18,con:18,int:17,wis:15,cha:18,hp:"13d8",ac:16,speed:7,xp:1800,attacks:[$("Mordida Vampírica","3d6","perfurante",{extraDamage:[{dice:"2d6",element:"necrotico"}]})],multiattack:1,resist:["necrotico","cortante","perfurante","concussao"],vuln:["radiante"],condImmune:["medo"],traits:[{type:"lifesteal",fraction:.5},{type:"regen",dice:"2d6"}],visual:{body:"biped",color:"#3a3a4a",accent:"#aa2233",scale:1.05}}),X("cavaleiro_morte","Cavaleiro da Morte","m","morto-vivo",4,{str:20,dex:11,con:20,int:12,wis:14,cha:16,hp:"15d8",ac:18,speed:5,xp:2300,attacks:[$("Lâmina Profana","2d10","cortante",{extraDamage:[{dice:"2d8",element:"necrotico"}]})],multiattack:1,specials:[Ut("Onda Profana","3d8","necrotico",{dc:15,radius:2})],immune:["veneno","necrotico"],condImmune:["envenenado","medo"],traits:[{type:"sturdy"}],visual:{body:"golem",color:"#1a1a2a",accent:"#66ff88",scale:1.2}}),X("lich","Lich","m","morto-vivo",5,{str:11,dex:16,con:16,int:20,wis:14,cha:16,hp:"18d8",ac:17,speed:5,xp:5e3,behavior:"atirador",attacks:[$("Raio da Morte","4d8","necrotico",{range:5,ability:"int"})],specials:[Ut("Bola de Fogo","6d6","fogo",{dc:16,radius:2,range:5}),yn("Paralisia Arcana","paralisado",{dc:15}),Fr("Erguer Mortos","esqueleto",3)],resist:["gelo","eletrico","necrotico"],immune:["veneno"],condImmune:["envenenado","medo","paralisado"],traits:[{type:"sturdy"}],visual:{body:"skeleton",color:"#d8d0c0",accent:"#4466ff",scale:1.05}}),X("lobo","Lobo","m","fera",1,{str:12,dex:15,con:12,int:3,wis:12,cha:6,hp:"2d8",ac:13,speed:7,xp:25,attacks:[$("Mordida","2d4","perfurante",{riders:[Ve("enraizado",.2,11,"str",1)]})],traits:[{type:"packTactics"}],visual:{body:"quadruped",color:"#7a7a7a",accent:"#4a4a4a",scale:.9}}),X("javali","Javali","m","fera",1,{str:13,dex:11,con:12,int:2,wis:9,cha:5,hp:"2d8",ac:11,speed:6,xp:25,attacks:[$("Presas","2d6","cortante")],traits:[{type:"rageBelow",threshold:.5,dmgBonus:2,acPenalty:0}],visual:{body:"quadruped",color:"#6a5a4a",accent:"#3a2a1a",scale:.85}}),X("pantera","Pantera","f","fera",1,{str:14,dex:16,con:10,int:3,wis:14,cha:7,hp:"3d8",ac:12,speed:8,xp:50,behavior:"emboscador",attacks:[$("Garras","1d8","cortante",{finesse:!0})],traits:[{type:"firstBlood",dmgBonus:4},{type:"slippery"}],visual:{body:"quadruped",color:"#1a1a22",accent:"#ffcc00",scale:.95}}),X("vibora","Víbora","f","fera",1,{str:4,dex:16,con:11,int:1,wis:10,cha:3,hp:"2d4",ac:13,speed:5,xp:25,attacks:[$("Presas Venenosas","1d4","perfurante",{finesse:!0,extraDamage:[{dice:"2d4",element:"veneno"}],riders:[Ve("envenenado",.4,11)]})],visual:{body:"serpent",color:"#4a7a3a",accent:"#aacc44",scale:.7}}),X("urso_pardo","Urso Pardo","m","fera",2,{str:18,dex:10,con:16,int:2,wis:13,cha:7,hp:"6d10",ac:11,speed:6,xp:180,attacks:[$("Patada","2d8","cortante")],multiattack:1,visual:{body:"quadruped",color:"#6a4a2a",accent:"#3a2a18",scale:1.3}}),X("crocodilo","Crocodilo","m","fera",2,{str:15,dex:10,con:13,int:2,wis:10,cha:5,hp:"5d10",ac:12,speed:4,xp:110,attacks:[$("Bote","2d10","perfurante",{riders:[Ve("enraizado",.35,12,"str")]})],resist:["perfurante"],visual:{body:"quadruped",color:"#4a6a3a",accent:"#cabb88",scale:1.1}}),X("grifo","Grifo","m","fera",3,{str:18,dex:15,con:16,int:2,wis:13,cha:8,hp:"8d10",ac:12,speed:8,xp:450,attacks:[$("Bico e Garras","2d8","perfurante")],multiattack:1,traits:[{type:"flying"}],visual:{body:"flyer",color:"#b89a6a",accent:"#e8d8b8",scale:1.2}}),X("mamute","Mamute","m","fera",4,{str:22,dex:9,con:21,int:3,wis:11,cha:6,hp:"11d12",ac:13,speed:5,xp:1400,attacks:[$("Investida de Presas","4d8","perfurante",{riders:[Ve("atordoado",.2,14)]})],traits:[{type:"sturdy"},{type:"rageBelow",threshold:.3,dmgBonus:5,acPenalty:1}],visual:{body:"quadruped",color:"#8a6a4a",accent:"#e8e0d0",scale:1.8}}),X("ratazana","Ratazana","f","verme",1,{str:7,dex:15,con:11,int:2,wis:10,cha:4,hp:"2d6",ac:12,speed:6,xp:15,attacks:[$("Mordida Imunda","1d4","perfurante",{finesse:!0,riders:[Ve("envenenado",.2,10)]})],traits:[{type:"packTactics"}],visual:{body:"quadruped",color:"#5a4a3a",accent:"#aa8866",scale:.6}}),X("aranha","Aranha","f","verme",1,{str:10,dex:16,con:12,int:2,wis:11,cha:4,hp:"3d8",ac:13,speed:6,xp:50,attacks:[$("Quelíceras","1d8","perfurante",{finesse:!0,extraDamage:[{dice:"1d8",element:"veneno"}],riders:[Ve("envenenado",.3,11)]})],specials:[yn("Teia","enraizado",{range:3,save:"str",dc:12,cooldown:2})],traits:[{type:"slippery"}],visual:{body:"spider",color:"#3a3a2a",accent:"#886644",scale:.9}}),X("escorpiao","Escorpião","m","verme",2,{str:15,dex:13,con:15,int:1,wis:9,cha:3,hp:"6d10",ac:15,speed:5,xp:180,attacks:[$("Ferrão","1d10","perfurante",{extraDamage:[{dice:"2d8",element:"veneno"}],riders:[Ve("envenenado",.4,13)]})],multiattack:1,visual:{body:"spider",color:"#8a5a2a",accent:"#cc8833",scale:1.1}}),X("enxame_vespas","Enxame de Vespas","m","verme",1,{str:3,dex:13,con:10,int:1,wis:7,cha:1,hp:"4d8",ac:12,speed:6,xp:50,attacks:[$("Mil Ferroadas","2d4","perfurante",{finesse:!0})],resist:["cortante","perfurante","concussao"],vuln:["fogo"],traits:[{type:"flying"},{type:"phasing"}],visual:{body:"swarm",color:"#caa634",accent:"#3a3a1a",scale:.9}}),X("besouro_fogo","Besouro de Fogo","m","verme",1,{str:8,dex:10,con:12,int:1,wis:7,cha:3,hp:"2d6",ac:13,speed:4,xp:20,attacks:[$("Mandíbulas Ardentes","1d6","cortante",{extraDamage:[{dice:"1d4",element:"fogo"}]})],resist:["fogo"],visual:{body:"spider",color:"#aa3a1a",accent:"#ff8833",scale:.65}}),X("centopeia","Centopeia","f","verme",2,{str:13,dex:14,con:13,int:1,wis:8,cha:3,hp:"5d10",ac:14,speed:6,xp:130,attacks:[$("Picada Tóxica","2d6","perfurante",{riders:[Ve("paralisado",.2,12)]})],visual:{body:"serpent",color:"#7a3a5a",accent:"#cc6688",scale:1}}),X("aranha_fase","Aranha de Fase","f","verme",3,{str:15,dex:15,con:12,int:6,wis:10,cha:6,hp:"7d10",ac:13,speed:6,xp:450,behavior:"emboscador",attacks:[$("Mordida Dimensional","2d8","perfurante",{extraDamage:[{dice:"2d8",element:"veneno"}]})],traits:[{type:"blinkOnHit",chance:.4,range:4},{type:"phasing"}],visual:{body:"spider",color:"#5a5a8a",accent:"#aaaaff",scale:1.05}}),X("limo_verde","Limo Verde","m","limo",1,{str:12,dex:6,con:14,int:1,wis:6,cha:1,hp:"3d10",ac:8,speed:3,xp:50,attacks:[$("Pseudópode","1d6","concussao",{extraDamage:[{dice:"1d6",element:"acido"}]})],resist:["acido","cortante"],condImmune:["medo","cego"],visual:{body:"blob",color:"#4a8a2a",accent:"#6aaa4a",scale:.95}}),X("geleia_ocre","Geleia Ocre","f","limo",2,{str:15,dex:6,con:14,int:2,wis:6,cha:1,hp:"6d10",ac:8,speed:3,xp:130,attacks:[$("Pseudópode Ácido","2d6","concussao",{extraDamage:[{dice:"1d6",element:"acido"}]})],resist:["acido"],immune:["eletrico"],condImmune:["medo","cego"],traits:[{type:"onDeathSplit",count:2,hpFraction:.4}],visual:{body:"blob",color:"#caa634",accent:"#aa8a2a",scale:1.1}}),X("cubo_gelatinoso","Cubo Gelatinoso","m","limo",3,{str:14,dex:3,con:20,int:1,wis:6,cha:1,hp:"8d10",ac:6,speed:3,xp:450,attacks:[$("Engolfar","3d6","acido",{riders:[Ve("enraizado",.35,13,"str")]})],immune:["acido"],condImmune:["medo","cego","atordoado"],traits:[{type:"sturdy"},{type:"dodge",chance:0}],visual:{body:"blob",color:"#88ccaa",accent:"#aaeecc",scale:1.35}}),X("pudim_negro","Pudim Negro","m","limo",3,{str:16,dex:5,con:16,int:1,wis:6,cha:1,hp:"10d10",ac:7,speed:3,xp:700,attacks:[$("Pseudópode Corrosivo","2d6","concussao",{extraDamage:[{dice:"3d8",element:"acido"}]})],immune:["acido","gelo"],vuln:["radiante"],condImmune:["medo","cego"],traits:[{type:"onDeathSplit",count:2,hpFraction:.5},{type:"thorns",dice:"1d8",element:"acido"}],visual:{body:"blob",color:"#1a1a22",accent:"#3a3a4a",scale:1.25}}),X("limo_cinzento","Limo Cinzento","m","limo",2,{str:12,dex:6,con:16,int:1,wis:6,cha:2,hp:"5d8",ac:8,speed:3,xp:110,attacks:[$("Toque Corrosivo","1d8","acido",{riders:[Ve("marcado",.4,12,"con",3)]})],immune:["acido","fogo"],condImmune:["medo","cego"],visual:{body:"blob",color:"#6a6a6a",accent:"#8a8a8a",scale:.9}}),X("quasit","Quasit","m","demonio",1,{str:5,dex:17,con:10,int:7,wis:10,cha:10,hp:"3d4",ac:13,speed:6,xp:50,behavior:"covarde",attacks:[$("Garras Abissais","1d4","cortante",{finesse:!0,extraDamage:[{dice:"1d4",element:"veneno"}],riders:[Ve("envenenado",.3,10)]})],resist:["fogo","gelo","eletrico"],immune:["veneno"],traits:[{type:"dodge",chance:.15}],visual:{body:"biped",color:"#7a3a3a",accent:"#aa5544",scale:.6}}),X("dretch","Dretch","m","demonio",1,{str:11,dex:11,con:12,int:5,wis:8,cha:3,hp:"4d6",ac:11,speed:4,xp:50,attacks:[$("Mordida e Garras","1d6","cortante")],specials:[Ut("Nuvem Fétida","1d6","veneno",{dc:11,radius:1,range:1,cooldown:4})],resist:["fogo","gelo","eletrico"],immune:["veneno"],visual:{body:"biped",color:"#6a7a5a",accent:"#4a5a3a",scale:.8}}),X("manes","Manes","m","demonio",1,{str:10,dex:9,con:13,int:3,wis:8,cha:4,hp:"3d6",ac:9,speed:4,xp:25,attacks:[$("Unhas Pútridas","2d4","cortante")],resist:["fogo","gelo","eletrico"],immune:["veneno"],traits:[{type:"onDeathExplode",element:"necrotico",dice:"1d6",radius:1}],visual:{body:"biped",color:"#8a7a6a",accent:"#5a4a3a",scale:.75}}),X("demonio_sombra","Demônio das Sombras","m","demonio",3,{str:1,dex:17,con:12,int:14,wis:13,cha:14,hp:"8d8",ac:13,speed:7,xp:700,behavior:"emboscador",attacks:[$("Garras Umbrais","2d6","necrotico",{finesse:!0})],resist:["acido","fogo","necrotico","trovao"],vuln:["radiante"],immune:["gelo","eletrico","veneno"],traits:[{type:"flying"},{type:"dodge",chance:.2},{type:"firstBlood",dmgBonus:6}],visual:{body:"ghost",color:"#1a1a2a",accent:"#6644aa",scale:1}}),X("vrock","Vrock","m","demonio",4,{str:17,dex:15,con:18,int:8,wis:13,cha:8,hp:"11d10",ac:15,speed:7,xp:1800,attacks:[$("Bico Abissal","2d10","perfurante")],multiattack:1,specials:[Ut("Guincho Atordoante","2d8","trovao",{dc:14,radius:2,range:1,cooldown:4})],resist:["fogo","gelo","eletrico"],immune:["veneno"],traits:[{type:"flying"}],visual:{body:"flyer",color:"#7a5a8a",accent:"#aa88cc",scale:1.3}}),X("hezrou","Hezrou","m","demonio",4,{str:19,dex:17,con:20,int:5,wis:12,cha:13,hp:"13d10",ac:16,speed:6,xp:2300,attacks:[$("Mordida Imunda","2d10","perfurante")],multiattack:1,resist:["fogo","gelo","eletrico"],immune:["veneno"],traits:[{type:"auraDamage",element:"veneno",dice:"1d6",radius:1},{type:"sturdy"}],visual:{body:"brute",color:"#5a7a3a",accent:"#8aaa5a",scale:1.4}}),X("balor","Balor","m","demonio",5,{str:26,dex:15,con:22,int:20,wis:16,cha:22,hp:"21d12",ac:19,speed:7,xp:7e3,attacks:[$("Espada Flamejante","3d8","cortante",{extraDamage:[{dice:"3d8",element:"fogo"}]})],multiattack:1,specials:[lv("Chicote de Fogo","2d6","fogo",{range:3,riders:[Ve("queimando",.5,15,"dex")]})],resist:["gelo","eletrico"],immune:["fogo","veneno"],traits:[{type:"flying"},{type:"sturdy"},{type:"auraDamage",element:"fogo",dice:"1d8",radius:1},{type:"onDeathExplode",element:"fogo",dice:"6d6",radius:3}],visual:{body:"dragon",color:"#5a1a1a",accent:"#ff5522",scale:1.8}}),X("diabrete","Diabrete","m","diabo",1,{str:6,dex:17,con:13,int:11,wis:12,cha:14,hp:"3d4",ac:13,speed:6,xp:50,behavior:"atirador",attacks:[$("Ferrão Infernal","1d4","perfurante",{finesse:!0,extraDamage:[{dice:"2d4",element:"veneno"}]})],resist:["gelo","cortante"],immune:["fogo","veneno"],traits:[{type:"flying"},{type:"dodge",chance:.15}],visual:{body:"flyer",color:"#8a2a2a",accent:"#cc6644",scale:.55}}),X("diabo_espinho","Diabo-espinho","m","diabo",2,{str:10,dex:15,con:12,int:11,wis:14,cha:8,hp:"5d6",ac:13,speed:5,xp:130,behavior:"atirador",attacks:[$("Espinho Flamejante","1d6","perfurante",{range:4,finesse:!0,extraDamage:[{dice:"1d6",element:"fogo"}]})],resist:["gelo"],immune:["fogo","veneno"],traits:[{type:"flying"},{type:"thorns",dice:"1d4",element:"perfurante"}],visual:{body:"flyer",color:"#7a3a2a",accent:"#aa6633",scale:.85}}),X("diabo_barbado","Diabo-barbado","m","diabo",3,{str:16,dex:15,con:15,int:9,wis:11,cha:11,hp:"8d8",ac:13,speed:6,xp:450,attacks:[$("Glaive Serrilhada","1d10","cortante",{riders:[Ve("sangrando",.5,12)]})],multiattack:1,resist:["gelo"],immune:["fogo","veneno"],condImmune:["medo"],visual:{body:"biped",color:"#6a3a3a",accent:"#995533",scale:1.05}}),X("diabo_corrente","Diabo-corrente","m","diabo",4,{str:18,dex:15,con:18,int:11,wis:12,cha:14,hp:"12d8",ac:16,speed:5,xp:1800,attacks:[$("Correntes Animadas","2d6","cortante",{reach:2,riders:[Ve("enraizado",.35,14,"str")]})],multiattack:1,resist:["gelo"],immune:["fogo","veneno"],traits:[{type:"reach",value:2}],visual:{body:"golem",color:"#4a4a52",accent:"#8a8a92",scale:1.15}}),X("erinia","Erínia","f","diabo",4,{str:18,dex:16,con:18,int:14,wis:14,cha:18,hp:"13d8",ac:18,speed:7,xp:2300,attacks:[$("Espada da Perdição","2d8","cortante",{extraDamage:[{dice:"2d8",element:"veneno"}]})],multiattack:1,resist:["gelo"],immune:["fogo","veneno"],condImmune:["envenenado"],traits:[{type:"flying"}],visual:{body:"flyer",color:"#3a3a4a",accent:"#cc8899",scale:1.1}}),X("diabo_gelo","Diabo-do-gelo","m","diabo",5,{str:21,dex:14,con:18,int:18,wis:15,cha:18,hp:"16d10",ac:18,speed:6,xp:5e3,attacks:[$("Lança Glacial","2d10","perfurante",{extraDamage:[{dice:"3d6",element:"gelo"}],riders:[Ve("lento",.4,15)]})],multiattack:1,specials:[Ut("Tempestade de Granizo","4d8","gelo",{dc:15,radius:2,range:5})],resist:[],immune:["fogo","gelo","veneno"],traits:[{type:"auraSlow",radius:2},{type:"sturdy"}],visual:{body:"brute",color:"#4a6a8a",accent:"#aaddff",scale:1.5}}),X("kobold","Kobold","m","draconico",1,{str:7,dex:15,con:9,int:8,wis:7,cha:8,hp:"2d6",ac:12,speed:6,xp:15,behavior:"covarde",attacks:[$("Adaga","1d4","perfurante",{finesse:!0})],traits:[{type:"packTactics"}],visual:{body:"biped",color:"#aa5a3a",accent:"#774422",scale:.65}}),X("draconato","Draconato Saqueador","m","draconico",2,{str:16,dex:10,con:14,int:8,wis:11,cha:10,hp:"5d8",ac:14,speed:5,xp:160,attacks:[$("Espada Larga","2d6","cortante")],specials:[Ut("Sopro Dracônico","2d6","fogo",{dc:12,radius:1,range:2,cooldown:3})],resist:["fogo"],visual:{body:"biped",color:"#aa6a2a",accent:"#cc8833",scale:1.05}}),X("cria_dragao","Cria de Dragão","f","draconico",2,{str:15,dex:10,con:13,int:10,wis:11,cha:13,hp:"6d8",ac:16,speed:6,xp:220,attacks:[$("Mordida Gélida","1d10","perfurante",{extraDamage:[{dice:"1d4",element:"gelo"}]})],specials:[Ut("Sopro de Gelo","3d6","gelo",{dc:12,radius:1,range:2,cooldown:3})],immune:["gelo"],traits:[{type:"flying"}],visual:{body:"dragon",color:"#c8d8e8",accent:"#88aacc",scale:.85}}),X("wyvern","Wyvern","m","draconico",3,{str:19,dex:10,con:16,int:5,wis:12,cha:6,hp:"9d10",ac:13,speed:8,xp:700,attacks:[$("Ferrão Caudal","2d6","perfurante",{extraDamage:[{dice:"3d6",element:"veneno"}],riders:[Ve("envenenado",.45,14)]})],traits:[{type:"flying"}],visual:{body:"dragon",color:"#5a4a7a",accent:"#8866aa",scale:1.3}}),X("hidra","Hidra","f","draconico",4,{str:20,dex:12,con:20,int:2,wis:10,cha:7,hp:"15d12",ac:15,speed:5,xp:2300,attacks:[$("Cabeças Múltiplas","1d10","perfurante")],multiattack:2,traits:[{type:"regen",dice:"2d6"},{type:"sturdy"}],visual:{body:"dragon",color:"#3a6a5a",accent:"#5a8a7a",scale:1.6}}),X("dragao_gelo","Dragão do Gelo","m","draconico",4,{str:22,dex:10,con:20,int:12,wis:12,cha:16,hp:"14d12",ac:17,speed:8,xp:2900,attacks:[$("Mordida Glacial","2d10","perfurante",{extraDamage:[{dice:"2d6",element:"gelo"}]})],multiattack:1,specials:[Ut("Sopro Congelante","6d6","gelo",{dc:15,radius:2,range:4,riders:[Ve("congelado",.3,14)]})],immune:["gelo"],vuln:["fogo"],traits:[{type:"flying"},{type:"sturdy"},{type:"auraSlow",radius:1}],visual:{body:"dragon",color:"#b8d8e8",accent:"#e8f4ff",scale:1.7}}),X("dragao_carmesim","Dragão Carmesim","m","draconico",5,{str:24,dex:12,con:22,int:14,wis:13,cha:18,hp:"17d12",ac:18,speed:8,xp:5500,attacks:[$("Mordida Ígnea","2d12","perfurante",{extraDamage:[{dice:"2d8",element:"fogo"}]})],multiattack:1,specials:[Ut("Sopro Infernal","8d6","fogo",{dc:16,radius:2,range:4,riders:[Ve("queimando",.4,15,"dex")]})],immune:["fogo"],vuln:["gelo"],traits:[{type:"flying"},{type:"sturdy"},{type:"auraDamage",element:"fogo",dice:"1d6",radius:1}],visual:{body:"dragon",color:"#8a1a1a",accent:"#ff6633",scale:1.75}}),X("mefite_gelo","Mefite de Gelo","m","elemental",1,{str:7,dex:13,con:10,int:9,wis:11,cha:12,hp:"3d6",ac:11,speed:6,xp:50,attacks:[$("Garras Geladas","1d4","cortante",{extraDamage:[{dice:"1d4",element:"gelo"}]})],immune:["gelo","veneno"],vuln:["fogo"],traits:[{type:"flying"},{type:"onDeathExplode",element:"gelo",dice:"2d4",radius:1}],visual:{body:"flyer",color:"#aaccee",accent:"#ddeeff",scale:.7}}),X("mefite_magma","Mefite de Magma","m","elemental",1,{str:8,dex:12,con:12,int:7,wis:10,cha:10,hp:"3d6",ac:11,speed:5,xp:50,attacks:[$("Garras Ardentes","1d4","cortante",{extraDamage:[{dice:"1d4",element:"fogo"}]})],immune:["fogo","veneno"],vuln:["gelo"],traits:[{type:"flying"},{type:"onDeathExplode",element:"fogo",dice:"2d4",radius:1}],visual:{body:"flyer",color:"#cc5a2a",accent:"#ff9944",scale:.7}}),X("elemental_fogo","Elemental do Fogo","m","elemental",3,{str:10,dex:17,con:16,int:6,wis:10,cha:7,hp:"10d10",ac:13,speed:7,xp:1100,attacks:[$("Toque Incinerante","2d6","fogo",{riders:[Ve("queimando",.5,13,"dex")]})],multiattack:1,immune:["fogo","veneno"],vuln:["gelo"],condImmune:["envenenado","paralisado"],traits:[{type:"auraDamage",element:"fogo",dice:"1d6",radius:1}],visual:{body:"elemental",color:"#ff6622",accent:"#ffcc44",scale:1.2}}),X("elemental_agua","Elemental da Água","m","elemental",3,{str:18,dex:14,con:18,int:5,wis:10,cha:8,hp:"11d10",ac:14,speed:6,xp:1100,attacks:[$("Onda Esmagadora","2d8","concussao",{riders:[Ve("enraizado",.3,14,"str")]})],multiattack:1,resist:["acido","fogo"],immune:["veneno"],condImmune:["envenenado","paralisado"],visual:{body:"elemental",color:"#3a7aba",accent:"#88ccee",scale:1.2}}),X("elemental_ar","Elemental do Ar","m","elemental",3,{str:14,dex:20,con:14,int:6,wis:10,cha:6,hp:"9d10",ac:15,speed:9,xp:1100,attacks:[$("Rajada Cortante","2d8","trovao")],multiattack:1,resist:["eletrico","trovao","cortante","perfurante","concussao"],immune:["veneno"],traits:[{type:"flying"},{type:"dodge",chance:.15}],visual:{body:"elemental",color:"#aabbcc",accent:"#e8eef4",scale:1.15}}),X("elemental_terra","Elemental da Terra","m","elemental",3,{str:20,dex:8,con:20,int:5,wis:10,cha:5,hp:"12d10",ac:17,speed:4,xp:1100,attacks:[$("Punho de Pedra","2d8","concussao",{riders:[Ve("atordoado",.2,14)]})],multiattack:1,resist:["cortante","perfurante"],immune:["veneno"],vuln:["trovao"],traits:[{type:"sturdy"}],visual:{body:"golem",color:"#7a6a4a",accent:"#9a8a6a",scale:1.35}}),X("armadura_animada","Armadura Animada","f","constructo",1,{str:14,dex:11,con:13,int:1,wis:3,cha:1,hp:"4d8",ac:18,speed:4,xp:110,attacks:[$("Golpe de Manopla","1d6","concussao")],multiattack:1,immune:["veneno","psiquico"],condImmune:["envenenado","medo","cego"],visual:{body:"golem",color:"#8a8a9a",accent:"#5a5a6a",scale:1}}),X("espantalho","Espantalho","m","constructo",1,{str:11,dex:13,con:11,int:10,wis:10,cha:13,hp:"4d8",ac:11,speed:5,xp:110,attacks:[$("Garras de Palha","1d6","cortante",{riders:[Ve("medo",.35,11,"wis")]})],vuln:["fogo"],immune:["veneno"],condImmune:["envenenado","medo"],visual:{body:"biped",color:"#b89a5a",accent:"#7a5a2a",scale:1}}),X("gargula","Gárgula","f","constructo",2,{str:15,dex:11,con:16,int:6,wis:11,cha:7,hp:"7d8",ac:15,speed:6,xp:450,attacks:[$("Garras de Pedra","1d6","cortante")],multiattack:1,resist:["cortante","perfurante","concussao"],immune:["veneno"],condImmune:["envenenado","medo"],traits:[{type:"flying"}],visual:{body:"flyer",color:"#6a6a72",accent:"#8a8a92",scale:1}}),X("golem_carne","Golem de Carne","m","constructo",3,{str:19,dex:9,con:18,int:6,wis:10,cha:5,hp:"11d8",ac:9,speed:5,xp:1100,attacks:[$("Punhos Costurados","2d8","concussao")],multiattack:1,immune:["eletrico","veneno"],condImmune:["envenenado","medo","paralisado"],traits:[{type:"rageBelow",threshold:.4,dmgBonus:4,acPenalty:2}],visual:{body:"brute",color:"#9a8a7a",accent:"#6a5a4a",scale:1.3}}),X("golem_pedra","Golem de Pedra","m","constructo",4,{str:22,dex:9,con:20,int:3,wis:11,cha:1,hp:"14d10",ac:17,speed:4,xp:2300,attacks:[$("Marreta de Granito","3d8","concussao",{riders:[Ve("lento",.4,15)]})],multiattack:1,resist:["cortante","perfurante"],immune:["veneno","psiquico"],condImmune:["envenenado","medo","paralisado","congelado"],traits:[{type:"sturdy"}],visual:{body:"golem",color:"#7a7a72",accent:"#5a5a52",scale:1.5}}),X("golem_ferro","Golem de Ferro","m","constructo",5,{str:24,dex:9,con:20,int:3,wis:11,cha:1,hp:"17d10",ac:20,speed:4,xp:5e3,attacks:[$("Espada Colossal","3d10","cortante")],multiattack:1,specials:[Ut("Sopro Venenoso","5d8","veneno",{dc:16,radius:2,range:3})],immune:["fogo","veneno","psiquico"],vuln:[],condImmune:["envenenado","medo","paralisado","congelado","queimando"],traits:[{type:"sturdy"}],visual:{body:"golem",color:"#4a4a52",accent:"#7a7a82",scale:1.6}}),X("ogro","Ogro","m","gigante",2,{str:19,dex:8,con:16,int:5,wis:7,cha:7,hp:"7d10",ac:11,speed:5,xp:450,attacks:[$("Clava Imensa","2d8","concussao")],visual:{body:"brute",color:"#b8a06a",accent:"#7a5a3a",scale:1.45}}),X("trol","Trol","m","gigante",3,{str:18,dex:13,con:20,int:7,wis:9,cha:7,hp:"8d10",ac:15,speed:6,xp:1100,attacks:[$("Garras Vorazes","2d6","cortante")],multiattack:1,traits:[{type:"regen",dice:"2d6"}],vuln:["fogo","acido"],visual:{body:"brute",color:"#5a8a5a",accent:"#3a5a3a",scale:1.5}}),X("ettin","Ettin","m","gigante",3,{str:21,dex:8,con:17,int:6,wis:10,cha:8,hp:"10d10",ac:12,speed:5,xp:900,attacks:[$("Machado e Maça","2d8","cortante")],multiattack:1,condImmune:["cego","atordoado"],visual:{body:"brute",color:"#9a7a5a",accent:"#5a4a3a",scale:1.55}}),X("ciclope","Ciclope","m","gigante",4,{str:22,dex:11,con:20,int:8,wis:6,cha:10,hp:"12d12",ac:14,speed:6,xp:1800,attacks:[$("Mazo Ciclópico","3d8","concussao")],multiattack:1,visual:{body:"brute",color:"#b89a7a",accent:"#8a6a4a",scale:1.7}}),X("gigante_colina","Gigante da Colina","m","gigante",4,{str:21,dex:8,con:19,int:5,wis:9,cha:6,hp:"13d12",ac:13,speed:6,xp:1800,attacks:[$("Porrete de Árvore","3d8","concussao",{riders:[Ve("atordoado",.15,14)]})],multiattack:1,traits:[{type:"sturdy"}],visual:{body:"brute",color:"#caa884",accent:"#8a6a4a",scale:1.8}}),X("gigante_gelo","Gigante do Gelo","m","gigante",4,{str:23,dex:9,con:21,int:9,wis:10,cha:12,hp:"14d12",ac:15,speed:6,xp:2900,attacks:[$("Machado Glacial","3d12","cortante",{extraDamage:[{dice:"1d8",element:"gelo"}]})],immune:["gelo"],vuln:["fogo"],traits:[{type:"sturdy"},{type:"auraSlow",radius:1}],visual:{body:"brute",color:"#88aacc",accent:"#ddeeff",scale:1.85}}),X("gigante_fogo","Gigante do Fogo","m","gigante",5,{str:25,dex:9,con:23,int:10,wis:14,cha:13,hp:"16d12",ac:18,speed:6,xp:5e3,attacks:[$("Espadão Vulcânico","3d12","cortante",{extraDamage:[{dice:"2d6",element:"fogo"}]})],immune:["fogo"],vuln:["gelo"],traits:[{type:"sturdy"},{type:"auraDamage",element:"fogo",dice:"1d6",radius:1}],visual:{body:"brute",color:"#aa4a2a",accent:"#ff8844",scale:1.9}}),X("bandido","Bandido","m","humanoide",1,{str:11,dex:12,con:12,int:10,wis:10,cha:10,hp:"2d8",ac:12,speed:5,xp:25,attacks:[$("Cimitarra Gasta","1d6","cortante")],visual:{body:"humanoid",color:"#8a6a4a",accent:"#5a3a2a",scale:1}}),X("capanga","Capanga","m","humanoide",1,{str:15,dex:10,con:14,int:8,wis:9,cha:8,hp:"4d8",ac:12,speed:5,xp:50,attacks:[$("Porrete","1d8","concussao")],visual:{body:"brute",color:"#7a5a4a",accent:"#4a3a2a",scale:1.1}}),X("cultista","Cultista","m","humanoide",1,{str:11,dex:12,con:10,int:10,wis:11,cha:10,hp:"2d8",ac:12,speed:5,xp:25,attacks:[$("Adaga Ritual","1d4","perfurante",{finesse:!0,extraDamage:[{dice:"1d4",element:"necrotico"}]})],visual:{body:"humanoid",color:"#3a2a3a",accent:"#7a3a5a",scale:1}}),X("fanatico","Fanático do Culto","m","humanoide",2,{str:11,dex:14,con:12,int:10,wis:13,cha:14,hp:"6d8",ac:13,speed:5,xp:220,behavior:"atirador",attacks:[$("Chama Profana","2d6","necrotico",{range:4,ability:"cha"})],specials:[bs("Frenesi Sombrio","fortalecido",{range:4}),Ss("Toque Vil","2d6")],visual:{body:"humanoid",color:"#4a2a4a",accent:"#aa44aa",scale:1}}),X("assassino","Assassino","m","humanoide",3,{str:11,dex:18,con:14,int:13,wis:11,cha:10,hp:"9d8",ac:15,speed:6,xp:900,behavior:"emboscador",attacks:[$("Lâmina Envenenada","2d6","perfurante",{finesse:!0,extraDamage:[{dice:"2d6",element:"veneno"}],riders:[Ve("envenenado",.5,14)]})],traits:[{type:"firstBlood",dmgBonus:8},{type:"critRange",min:19},{type:"slippery"}],visual:{body:"humanoid",color:"#2a2a32",accent:"#5a5a6a",scale:.98}}),X("mago_renegado","Mago Renegado","m","humanoide",3,{str:9,dex:14,con:12,int:17,wis:12,cha:11,hp:"8d8",ac:12,speed:5,xp:700,behavior:"atirador",attacks:[$("Míssil Arcano","3d4","psiquico",{range:5,ability:"int"})],specials:[Ut("Bola de Fogo","5d6","fogo",{dc:14,radius:2,range:5,cooldown:4}),yn("Raio Congelante","congelado",{dc:13,save:"con",range:4})],visual:{body:"humanoid",color:"#3a3a6a",accent:"#6666cc",scale:1}}),X("cavaleiro_renegado","Cavaleiro Renegado","m","humanoide",3,{str:16,dex:11,con:14,int:11,wis:11,cha:15,hp:"9d8",ac:18,speed:4,xp:700,attacks:[$("Espada e Escudo","2d6","cortante")],multiattack:1,traits:[{type:"sturdy"}],behavior:"guardiao",visual:{body:"golem",color:"#5a5a62",accent:"#aa8833",scale:1.08}}),X("gladiador","Gladiador","m","humanoide",3,{str:18,dex:15,con:16,int:10,wis:12,cha:15,hp:"10d8",ac:16,speed:5,xp:1100,attacks:[$("Tridente de Arena","2d8","perfurante")],multiattack:1,traits:[{type:"rageBelow",threshold:.5,dmgBonus:3,acPenalty:0}],visual:{body:"brute",color:"#b8865a",accent:"#ffd700",scale:1.1}}),X("pixie","Pixie","f","fada",1,{str:2,dex:20,con:8,int:10,wis:14,cha:15,hp:"1d4",ac:15,speed:7,xp:25,behavior:"atirador",attacks:[$("Pó Encantado","1d4","psiquico",{range:4,ability:"cha",riders:[Ve("atordoado",.25,11,"wis")]})],traits:[{type:"flying"},{type:"dodge",chance:.25}],visual:{body:"flyer",color:"#cc88dd",accent:"#ffccff",scale:.45}}),X("duende","Duende","m","fada",1,{str:8,dex:14,con:10,int:12,wis:12,cha:14,hp:"2d6",ac:13,speed:6,xp:25,behavior:"covarde",attacks:[$("Adaga de Prata","1d4","perfurante",{finesse:!0,riders:[Ve("marcado",.3,11,"wis")]})],traits:[{type:"dodge",chance:.15},{type:"slippery"}],visual:{body:"biped",color:"#5a8a4a",accent:"#cc4444",scale:.6}}),X("satiro","Sátiro","m","fada",2,{str:12,dex:16,con:11,int:12,wis:10,cha:14,hp:"5d8",ac:14,speed:6,xp:130,attacks:[$("Cabeçada e Adaga","2d4","concussao")],multiattack:1,specials:[yn("Melodia Hipnótica","atordoado",{dc:13,save:"wis",range:4})],resist:["psiquico"],visual:{body:"biped",color:"#9a6a4a",accent:"#6a4a2a",scale:.95}}),X("driade","Dríade","f","fada",2,{str:10,dex:12,con:11,int:14,wis:15,cha:18,hp:"5d8",ac:13,speed:5,xp:220,behavior:"atirador",attacks:[$("Chicote de Vinhas","1d8","cortante",{range:2,ability:"cha",riders:[Ve("enraizado",.35,13,"str")]})],specials:[Ss("Seiva Vital","2d8"),yn("Encantar","atordoado",{dc:14,save:"wis"})],visual:{body:"plant",color:"#6a8a4a",accent:"#caa868",scale:1}}),X("bruxa_verde","Bruxa Verde","f","fada",3,{str:18,dex:12,con:16,int:13,wis:14,cha:14,hp:"9d8",ac:14,speed:5,xp:700,attacks:[$("Garras Imundas","2d8","cortante")],specials:[yn("Maldição da Bruxa","amaldicoado",{dc:13,duration:3}),Ut("Riso Venenoso","3d6","veneno",{dc:13,radius:1,range:4})],traits:[{type:"dodge",chance:.1}],visual:{body:"biped",color:"#5a7a3a",accent:"#2a4a1a",scale:1}}),X("bruxa_noite","Bruxa da Noite","f","fada",4,{str:18,dex:15,con:16,int:16,wis:14,cha:16,hp:"13d8",ac:17,speed:6,xp:1800,attacks:[$("Garras Oníricas","2d8","cortante",{extraDamage:[{dice:"2d6",element:"psiquico"}]})],multiattack:1,specials:[yn("Pesadelo Vivo","medo",{dc:15,save:"wis",duration:3})],resist:["gelo","fogo"],condImmune:["medo"],traits:[{type:"blinkOnHit",chance:.25,range:3}],visual:{body:"biped",color:"#3a2a4a",accent:"#8855bb",scale:1.05}}),X("arbusto_ambulante","Arbusto Ambulante","m","planta",1,{str:13,dex:8,con:11,int:4,wis:8,cha:3,hp:"3d8",ac:9,speed:4,xp:25,attacks:[$("Galhos Espinhentos","1d6","perfurante")],vuln:["fogo"],resist:["concussao"],traits:[{type:"thorns",dice:"1d4",element:"perfurante"}],visual:{body:"plant",color:"#4a6a2a",accent:"#2a4a1a",scale:.85}}),X("gritador","Gritador","m","planta",1,{str:1,dex:1,con:10,int:1,wis:3,cha:1,hp:"2d8",ac:5,speed:1,xp:10,behavior:"preguicoso",attacks:[$("Guincho Fúngico","1d4","trovao",{range:2,ability:"con"})],condImmune:["medo","cego"],visual:{body:"plant",color:"#9a7aaa",accent:"#caa8da",scale:.7}}),X("fungo_violeta","Fungo Violeta","m","planta",1,{str:3,dex:1,con:10,int:1,wis:3,cha:1,hp:"4d8",ac:5,speed:1,xp:50,behavior:"preguicoso",attacks:[$("Toque Apodrecedor","1d8","necrotico",{reach:2})],traits:[{type:"reach",value:2}],condImmune:["medo","cego"],visual:{body:"plant",color:"#7a4a9a",accent:"#aa77cc",scale:.8}}),X("vinha_estranguladora","Vinha Estranguladora","f","planta",2,{str:17,dex:10,con:16,int:1,wis:10,cha:3,hp:"6d10",ac:12,speed:2,xp:450,attacks:[$("Constrição","2d6","concussao",{reach:2,riders:[Ve("enraizado",.5,13,"str")]})],traits:[{type:"reach",value:2}],resist:["concussao"],vuln:["fogo"],visual:{body:"plant",color:"#3a6a2a",accent:"#6a9a4a",scale:1.1}}),X("planta_carnivora","Planta Carnívora","f","planta",2,{str:15,dex:8,con:14,int:1,wis:8,cha:2,hp:"5d10",ac:11,speed:2,xp:220,attacks:[$("Bocarra Vegetal","2d8","perfurante",{extraDamage:[{dice:"1d6",element:"acido"}]})],vuln:["fogo"],traits:[{type:"lifesteal",fraction:.3}],visual:{body:"plant",color:"#5a8a3a",accent:"#cc4466",scale:1}}),X("ent_menor","Ent Menor","m","planta",3,{str:19,dex:8,con:18,int:10,wis:14,cha:10,hp:"9d10",ac:14,speed:4,xp:900,attacks:[$("Galho Esmagador","3d6","concussao")],resist:["concussao","perfurante"],vuln:["fogo"],visual:{body:"plant",color:"#5a4a2a",accent:"#4a7a2a",scale:1.4}}),X("treant","Treant","m","planta",4,{str:23,dex:8,con:21,int:12,wis:16,cha:12,hp:"12d12",ac:16,speed:4,xp:2300,attacks:[$("Punho de Carvalho","3d6","concussao")],multiattack:1,resist:["concussao","perfurante"],vuln:["fogo"],traits:[{type:"sturdy"},{type:"regen",dice:"1d8"}],visual:{body:"plant",color:"#4a3a1a",accent:"#3a6a1a",scale:1.7}}),X("espreitador","Espreitador","m","aberracao",2,{str:16,dex:14,con:13,int:6,wis:12,cha:6,hp:"5d8",ac:13,speed:6,xp:220,behavior:"emboscador",attacks:[$("Tentáculo Farpado","2d6","perfurante",{reach:2})],traits:[{type:"reach",value:2},{type:"firstBlood",dmgBonus:4}],visual:{body:"spider",color:"#5a3a5a",accent:"#9a6a9a",scale:1}}),X("boca_tagarela","Boca Tagarela","f","aberracao",2,{str:10,dex:8,con:16,int:3,wis:10,cha:6,hp:"6d8",ac:9,speed:3,xp:450,attacks:[$("Mordidas Caóticas","5d4","perfurante")],specials:[yn("Balbucio Enlouquecedor","atordoado",{dc:12,save:"wis",radius:0,range:3})],condImmune:["medo"],visual:{body:"blob",color:"#aa6a7a",accent:"#dd99aa",scale:1}}),X("grell","Grell","m","aberracao",3,{str:15,dex:14,con:13,int:12,wis:11,cha:9,hp:"7d8",ac:12,speed:6,xp:700,attacks:[$("Tentáculos Paralisantes","1d10","perfurante",{riders:[Ve("paralisado",.35,13)]})],immune:["eletrico"],condImmune:["cego"],traits:[{type:"flying"}],visual:{body:"flyer",color:"#aa8a6a",accent:"#cc6644",scale:1.05}}),X("otyugh","Otyugh","m","aberracao",3,{str:16,dex:11,con:19,int:6,wis:13,cha:6,hp:"10d10",ac:14,speed:4,xp:1100,attacks:[$("Mordida Séptica","2d8","perfurante",{riders:[Ve("envenenado",.5,14)]})],multiattack:1,traits:[{type:"reach",value:2},{type:"sturdy"}],visual:{body:"blob",color:"#6a5a3a",accent:"#9a8a5a",scale:1.3}}),X("slaad_vermelho","Slaad Vermelho","m","aberracao",4,{str:16,dex:12,con:16,int:6,wis:6,cha:7,hp:"11d10",ac:14,speed:6,xp:1800,attacks:[$("Garras Caóticas","2d8","cortante",{extraDamage:[{dice:"1d6",element:"fogo"}]})],multiattack:1,resist:["fogo","gelo","eletrico"],traits:[{type:"regen",dice:"1d6"}],visual:{body:"brute",color:"#aa3a3a",accent:"#dd6644",scale:1.25}}),X("observador","Observador","m","aberracao",5,{str:10,dex:14,con:18,int:17,wis:15,cha:17,hp:"15d10",ac:18,speed:6,xp:5500,behavior:"atirador",attacks:[$("Raio Ocular","3d8","necrotico",{range:5,ability:"int"})],multiattack:1,specials:[yn("Raio Petrificante","paralisado",{dc:15,range:5}),yn("Raio do Medo","medo",{dc:15,save:"wis",range:5}),Ut("Raio Desintegrador","5d8","necrotico",{dc:15,radius:0,range:5})],condImmune:["medo"],traits:[{type:"flying"},{type:"sturdy"}],visual:{body:"eye",color:"#8a6a4a",accent:"#ffcc44",scale:1.3}}),X("devorador_mentes","Devorador de Mentes","m","aberracao",5,{str:11,dex:12,con:12,int:19,wis:17,cha:17,hp:"13d8",ac:15,speed:6,xp:5e3,behavior:"atirador",attacks:[$("Tentáculos Cerebrais","2d10","psiquico",{ability:"int",riders:[Ve("atordoado",.4,15,"int")]})],specials:[Ut("Explosão Mental","4d8","psiquico",{dc:15,radius:2,range:4,riders:[Ve("atordoado",.3,15,"int")]})],resist:["psiquico"],traits:[{type:"dodge",chance:.1}],visual:{body:"biped",color:"#6a5a8a",accent:"#9988cc",scale:1.05}}),X("rato_garou","Rato-garou","m","licantropo",2,{str:10,dex:15,con:12,int:11,wis:10,cha:8,hp:"5d8",ac:12,speed:6,xp:220,behavior:"emboscador",attacks:[$("Mordida Maldita","1d8","perfurante",{finesse:!0,riders:[Ve("envenenado",.3,12)]})],resist:["cortante","perfurante","concussao"],traits:[{type:"packTactics"},{type:"slippery"}],visual:{body:"biped",color:"#6a5a4a",accent:"#aa8866",scale:.85}}),X("lobisomem","Lobisomem","m","licantropo",3,{str:17,dex:14,con:16,int:10,wis:11,cha:10,hp:"9d8",ac:13,speed:7,xp:900,attacks:[$("Garras Lupinas","2d6","cortante",{riders:[Ve("sangrando",.4,13)]})],multiattack:1,resist:["cortante","perfurante","concussao"],traits:[{type:"packTactics"},{type:"rageBelow",threshold:.5,dmgBonus:3,acPenalty:1}],visual:{body:"brute",color:"#5a4a3a",accent:"#8a7a6a",scale:1.15}}),X("javali_garou","Javali-garou","m","licantropo",3,{str:17,dex:10,con:18,int:10,wis:11,cha:8,hp:"10d8",ac:12,speed:5,xp:900,attacks:[$("Presas Malditas","2d10","cortante")],resist:["cortante","perfurante","concussao"],traits:[{type:"rageBelow",threshold:.6,dmgBonus:4,acPenalty:1},{type:"sturdy"}],visual:{body:"brute",color:"#6a4a3a",accent:"#3a2a1a",scale:1.2}}),X("urso_garou","Urso-garou","m","licantropo",4,{str:19,dex:10,con:17,int:11,wis:12,cha:12,hp:"12d8",ac:13,speed:6,xp:1800,attacks:[$("Abraço Dilacerante","2d10","cortante",{riders:[Ve("sangrando",.4,14)]})],multiattack:1,resist:["cortante","perfurante","concussao"],traits:[{type:"rageBelow",threshold:.4,dmgBonus:5,acPenalty:2}],visual:{body:"brute",color:"#5a3a2a",accent:"#8a6a4a",scale:1.45}}),X("vorthrax","Vorthrax, o Dragão do Vazio","m","draconico",5,{str:27,dex:14,con:25,int:18,wis:15,cha:21,hp:"26d12",ac:20,speed:8,xp:18e3,boss:!0,attacks:[$("Mandíbulas do Vazio","3d10","perfurante",{extraDamage:[{dice:"3d8",element:"necrotico"}]})],multiattack:1,specials:[Ut("Sopro do Vazio","8d8","necrotico",{dc:17,radius:2,range:5,cooldown:3}),Ut("Tempestade Estelar","5d8","radiante",{dc:16,radius:2,range:6,cooldown:4}),yn("Olhar do Abismo","medo",{dc:17,save:"wis",range:6,duration:2}),Fr("Chamar o Enxame","demonio_sombra",2)],resist:["fogo","gelo","eletrico","cortante","perfurante"],immune:["necrotico","veneno"],vuln:["radiante"],condImmune:["medo","paralisado","congelado","atordoado","envenenado"],traits:[{type:"flying"},{type:"sturdy"},{type:"regen",dice:"2d8"},{type:"auraDamage",element:"necrotico",dice:"1d8",radius:2},{type:"critRange",min:19}],visual:{body:"dragon",color:"#1a0a2a",accent:"#aa66ff",scale:2.2}})],pa=new Map;for(const i of fa){if(pa.has(i.id))throw new Error(`Inimigo duplicado: ${i.id}`);pa.set(i.id,i)}[...new Set(fa.map(i=>i.family))];function dv(i){return i.endsWith("ão")?i.slice(0,-2)+"ã":i.endsWith("eu")?i.slice(0,-2)+"eia":i.endsWith("o")?i.slice(0,-1)+"a":i.endsWith("or")?i+"a":i}const uv={1:10,2:5,3:2},hv={1:1.18,2:1.45,3:1.85};function w(i,e,t,n,a,s=null,r=null){return{id:i,m:e,f:r??dv(e),tier:t,weight:uv[t],effects:[...n,{type:"stat",xpMult:hv[t]}],visual:s,desc:a}}const j=i=>({type:"stat",...i}),Ae=(i,e,t)=>({type:"extraDamage",element:i,dice:e}),$e=(i,e,t=12,n="con",a=2)=>({type:"riderCondition",condition:i,chance:e,dc:t,save:n,duration:a}),ji=(i,e,t=1)=>({type:"auraDamage",element:i,dice:e,radius:t}),Ke=(...i)=>({type:"resistance",types:i}),Es=(...i)=>({type:"immunity",types:i}),Zt=(...i)=>({type:"vulnerability",types:i}),Ji=(...i)=>({type:"conditionImmunity",conditions:i}),ni=i=>({type:"behavior",kind:i}),kt={emissive:"#ff5522",particle:"fire"},jt={emissive:"#66ccff",particle:"ice"},Wt={emissive:"#ffee44",particle:"spark"},Ki={emissive:"#88ff44",particle:"acid"},Jt={emissive:"#44cc22",particle:"poison"},bt={emissive:"#7744cc",particle:"shadow"},Ft={emissive:"#ffeeaa",particle:"holy"},zt={emissive:"#ff66cc",particle:"psychic"},ws={emissive:"#aaccff",particle:"spark"},Vs=[w("fumegante","Fumegante",1,[Ae("fogo","1d4")],"+1d4 de dano de fogo nos ataques",kt),w("flamejante","Flamejante",1,[Ae("fogo","1d6")],"+1d6 de dano de fogo nos ataques",kt),w("ardente","Ardente",2,[Ae("fogo","1d8"),$e("queimando",.25,12,"dex")],"+1d8 de fogo e pode incendiar",kt),w("incandescente","Incandescente",2,[Ae("fogo","2d6")],"+2d6 de dano de fogo nos ataques",kt),w("infernal","Infernal",3,[Ae("fogo","3d6"),$e("queimando",.35,14,"dex")],"+3d6 de fogo e incendeia com frequência",kt),w("nevado","Nevado",1,[Ae("gelo","1d4")],"+1d4 de dano de gelo nos ataques",jt),w("gelido","Gélido",1,[Ae("gelo","1d6")],"+1d6 de dano de gelo nos ataques",jt,"Gélida"),w("congelante","Congelante",2,[Ae("gelo","1d8"),$e("lento",.3,12,"con")],"+1d8 de gelo e pode retardar",jt),w("glacial","Glacial",2,[Ae("gelo","2d6")],"+2d6 de dano de gelo nos ataques",jt),w("polar","Polar",3,[Ae("gelo","3d6"),$e("congelado",.2,14,"con")],"+3d6 de gelo e pode congelar sólido",jt),w("estatico","Estático",1,[Ae("eletrico","1d4")],"+1d4 de dano elétrico nos ataques",Wt,"Estática"),w("eletrico_adj","Elétrico",1,[Ae("eletrico","1d6")],"+1d6 de dano elétrico nos ataques",Wt,"Elétrica"),w("eletrizante","Eletrizante",2,[Ae("eletrico","1d8"),$e("paralisado",.2,12,"con")],"+1d8 elétrico e pode paralisar",Wt),w("voltaico","Voltaico",2,[Ae("eletrico","2d6")],"+2d6 de dano elétrico nos ataques",Wt),w("fulminante","Fulminante",3,[Ae("eletrico","3d6"),$e("atordoado",.2,14,"con")],"+3d6 elétrico e pode atordoar",Wt),w("corrosivo","Corrosivo",1,[Ae("acido","1d6")],"+1d6 de dano ácido nos ataques",Ki),w("caustico","Cáustico",2,[Ae("acido","1d8")],"+1d8 de dano ácido nos ataques",Ki,"Cáustica"),w("vitriolico","Vitriólico",2,[Ae("acido","2d6")],"+2d6 de dano ácido nos ataques",Ki,"Vitriólica"),w("dissolvente","Dissolvente",3,[Ae("acido","3d6"),$e("marcado",.3,13,"con")],"+3d6 ácido e corrói defesas",Ki),w("peconhento","Peçonhento",1,[Ae("veneno","1d6")],"+1d6 de dano de veneno nos ataques",Jt),w("venenoso","Venenoso",1,[Ae("veneno","1d4"),$e("envenenado",.3,11,"con")],"Veneno fraco que pode envenenar",Jt),w("toxico","Tóxico",2,[Ae("veneno","1d8"),$e("envenenado",.25,13,"con")],"+1d8 de veneno e pode envenenar",Jt,"Tóxica"),w("virulento","Virulento",2,[Ae("veneno","2d6"),$e("envenenado",.35,14,"con",3)],"Veneno potente e persistente",Jt),w("pestifero","Pestífero",3,[Ae("veneno","3d6")],"+3d6 de dano de veneno nos ataques",Jt,"Pestífera"),w("sombrio","Sombrio",1,[Ae("necrotico","1d6")],"+1d6 de dano necrótico nos ataques",bt),w("necrotico_adj","Necrótico",2,[Ae("necrotico","1d8")],"+1d8 de dano necrótico nos ataques",bt,"Necrótica"),w("profano","Profano",2,[Ae("necrotico","2d6"),$e("amaldicoado",.2,13,"wis")],"+2d6 necrótico e pode amaldiçoar",bt),w("abissal","Abissal",3,[Ae("necrotico","3d6")],"+3d6 de dano necrótico nos ataques",bt),w("luminoso","Luminoso",1,[Ae("radiante","1d4")],"+1d4 de dano radiante nos ataques",Ft),w("radiante_adj","Radiante",1,[Ae("radiante","1d6")],"+1d6 de dano radiante nos ataques",Ft),w("sagrado","Sagrado",2,[Ae("radiante","2d6")],"+2d6 de dano radiante nos ataques",Ft),w("celestial","Celestial",3,[Ae("radiante","3d6"),$e("cego",.15,13,"con")],"+3d6 radiante e pode cegar",Ft),w("psiquico_adj","Psíquico",1,[Ae("psiquico","1d6")],"+1d6 de dano psíquico nos ataques",zt,"Psíquica"),w("mental","Mental",2,[Ae("psiquico","1d8"),$e("medo",.2,12,"wis")],"+1d8 psíquico e pode amedrontar",zt),w("hipnotico","Hipnótico",2,[Ae("psiquico","2d6"),$e("atordoado",.15,13,"wis")],"+2d6 psíquico e pode hipnotizar",zt,"Hipnótica"),w("enlouquecedor","Enlouquecedor",3,[Ae("psiquico","3d6"),$e("medo",.3,14,"wis")],"+3d6 psíquico e enlouquece",zt),w("trovejante","Trovejante",1,[Ae("trovao","1d6")],"+1d6 de dano de trovão nos ataques",ws),w("estrondoso","Estrondoso",2,[Ae("trovao","2d6")],"+2d6 de dano de trovão nos ataques",ws),w("ensurdecedor","Ensurdecedor",3,[Ae("trovao","3d6"),$e("atordoado",.15,13,"con")],"+3d6 de trovão e pode atordoar",ws),w("igneo","Ígneo",2,[{type:"elementConvert",element:"fogo"},Ke("fogo")],"Todos os ataques causam dano de fogo; resiste a fogo",kt,"Ígnea"),w("boreal","Boreal",2,[{type:"elementConvert",element:"gelo"},Ke("gelo")],"Todos os ataques causam dano de gelo; resiste a gelo",jt),w("galvanico","Galvânico",2,[{type:"elementConvert",element:"eletrico"},Ke("eletrico")],"Ataques elétricos; resiste a eletricidade",Wt,"Galvânica"),w("putrefato","Putrefato",2,[{type:"elementConvert",element:"veneno"},Ke("veneno")],"Ataques venenosos; resiste a veneno",Jt),w("espectral","Espectral",3,[{type:"elementConvert",element:"necrotico"},Ke("necrotico","cortante")],"Ataques necróticos; corpo semi-etéreo",bt),w("aureo","Áureo",2,[{type:"elementConvert",element:"radiante"},Ke("radiante")],"Ataques radiantes; resiste a luz",Ft,"Áurea"),w("ressonante","Ressonante",2,[{type:"elementConvert",element:"trovao"}],"Todos os ataques causam dano de trovão",ws),w("alucinante","Alucinante",3,[{type:"elementConvert",element:"psiquico"},Ke("psiquico")],"Ataques psíquicos; mente alienígena",zt),w("fervente","Fervente",2,[ji("fogo","1d4")],"Aura de calor: queima inimigos adjacentes a cada turno",kt),w("abrasador","Abrasador",3,[ji("fogo","1d6",2)],"Aura ígnea ampla: queima inimigos a 2 casas",kt),w("hibernal","Hibernal",2,[{type:"auraSlow",radius:2}],"Aura de frio que retarda inimigos próximos",jt),w("pestilento","Pestilento",2,[ji("veneno","1d4")],"Aura pútrida: envenena inimigos adjacentes",Jt),w("eletrificado","Eletrificado",2,[ji("eletrico","1d4")],"Aura elétrica: choca inimigos adjacentes",Wt),w("necrosante","Necrosante",2,[ji("necrotico","1d4")],"Aura mórbida: drena vida de inimigos próximos",bt),w("opressor","Opressor",2,[ji("psiquico","1d4")],"Aura opressiva: fere mentes próximas",zt),w("minusculo","Minúsculo",1,[j({hpMult:.4,xpMult:.7}),{type:"dodge",chance:.2}],"Muito pequeno: frágil mas dificílimo de acertar",{scale:.5}),w("pequeno","Pequeno",1,[j({hpMult:.65,xpMult:.85}),{type:"dodge",chance:.1}],"Pequeno: menos vida, esquiva às vezes",{scale:.72}),w("magro","Magro",1,[j({hpMult:.85,speedFlat:1})],"Esguio: menos vida, mais rápido",{scale:.9}),w("gordo","Gordo",1,[j({hpMult:1.35,speedFlat:-1})],"Corpulento: mais vida, mais lento",{scale:1.15}),w("robusto","Robusto",1,[j({hpFlat:12})],"Constituição sólida: +12 PV",{scale:1.08}),w("atarracado","Atarracado",1,[j({hpMult:1.2,speedFlat:-1,acFlat:1})],"Baixo e denso: mais vida e defesa",{scale:.92}),w("enorme","Enorme",2,[j({hpMult:1.5,dmgFlat:1})],"Avantajado: +50% vida e dano extra",{scale:1.3}),w("gigante","Gigante",2,[j({hpMult:1.85,dmgFlat:2,speedFlat:-1})],"Gigantesco: muito mais vida e dano",{scale:1.5}),w("colossal","Colossal",3,[j({hpMult:2.6,dmgFlat:4,speedFlat:-1}),{type:"sturdy"}],"Colosso: vida imensa, imune a críticos",{scale:1.75}),w("titanico","Titânico",3,[j({hpMult:3.2,dmgFlat:5}),{type:"sturdy"}],"Titã: monstruosamente resistente",{scale:1.95},"Titânica"),w("forte","Forte",1,[j({strFlat:4})],"+4 de Força",null),w("fraco","Fraco",1,[j({strFlat:-4,xpMult:.8})],"-4 de Força",null),w("agil","Ágil",1,[j({dexFlat:4,speedFlat:1})],"+4 de Destreza e +1 de movimento",null),w("desajeitado","Desajeitado",1,[j({dexFlat:-4,xpMult:.85}),{type:"accuracy",value:-1}],"-4 de Destreza e mira ruim",null),w("vigoroso","Vigoroso",1,[j({conFlat:4,hpFlat:6})],"+4 de Constituição e PV extra",null),w("doentio","Doentio",1,[j({conFlat:-4,hpMult:.85,xpMult:.8})],"Constituição debilitada",null),w("astuto","Astuto",1,[j({intFlat:4}),{type:"accuracy",value:1}],"+4 de Inteligência e mira afiada",null),w("tolo","Tolo",1,[j({intFlat:-4,xpMult:.9})],"-4 de Inteligência",null),w("sabio","Sábio",1,[j({wisFlat:4}),{type:"saveBonus",value:2}],"+4 de Sabedoria e resistências firmes",null,"Sábia"),w("insensato","Insensato",1,[j({wisFlat:-4,xpMult:.9})],"-4 de Sabedoria",null),w("carismatico","Carismático",1,[j({chaFlat:4}),{type:"saveBonus",value:1}],"Presença magnética",null,"Carismática"),w("apavorante","Apavorante",2,[j({chaFlat:2}),$e("medo",.2,12,"wis")],"Sua presença aterroriza ao golpear",bt),w("brutal","Brutal",1,[j({dmgFlat:3})],"+3 de dano em todos os ataques",null),w("feroz","Feroz",1,[j({dmgFlat:2,acFlat:-1})],"+2 de dano, defesa descuidada",null),w("selvagem","Selvagem",1,[j({dmgMult:1.25}),{type:"accuracy",value:-1}],"+25% de dano, menos precisão",null),w("violento","Violento",1,[j({dmgFlat:2})],"+2 de dano em todos os ataques",null),w("atroz","Atroz",2,[j({dmgFlat:4})],"+4 de dano em todos os ataques",null),w("devastador","Devastador",3,[j({dmgMult:1.5})],"+50% de dano em todos os ataques",null),w("blindado","Blindado",2,[j({acFlat:3,speedFlat:-1})],"+3 de CA, movimento reduzido",null),w("couracado","Couraçado",1,[j({acFlat:2})],"+2 de CA",null),w("reforcado","Reforçado",1,[j({acFlat:1,hpMult:1.1})],"+1 CA e +10% vida",null),w("desprotegido","Desprotegido",1,[j({acFlat:-3,xpMult:.75})],"-3 de CA",null),w("veloz","Veloz",1,[j({speedFlat:2})],"+2 de movimento",null),w("rapido","Rápido",1,[j({speedFlat:1}),{type:"initiativeBonus",value:2}],"+1 movimento, age mais cedo",null,"Rápida"),w("lerdo","Lerdo",1,[j({speedFlat:-2,xpMult:.85})],"-2 de movimento",null),w("vagaroso","Vagaroso",1,[j({speedFlat:-1,xpMult:.92})],"-1 de movimento",null),w("incansavel","Incansável",2,[{type:"multiattack",extra:1},{type:"accuracy",value:-1}],"Ataca duas vezes por turno",null),w("frenetico","Frenético",2,[{type:"multiattack",extra:1},{type:"accuracy",value:-2},j({dmgFlat:-1})],"Dois ataques desesperados",null,"Frenética"),w("hiperativo","Hiperativo",2,[j({speedFlat:2}),{type:"initiativeBonus",value:4}],"Movimento e iniciativa superiores",null),w("preciso","Preciso",1,[{type:"accuracy",value:2}],"+2 nas jogadas de ataque",null),w("certeiro","Certeiro",2,[{type:"accuracy",value:3}],"+3 nas jogadas de ataque",null),w("letal","Letal",2,[{type:"critRange",min:19}],"Crítico com 19 ou 20",null),w("mortifero","Mortífero",3,[{type:"critRange",min:18},j({dmgFlat:2})],"Crítico com 18-20 e +2 dano",null,"Mortífera"),w("impiedoso","Impiedoso",1,[{type:"executioner",threshold:.5,dmgBonus:4}],"+4 de dano contra alvos feridos",null),w("cruel","Cruel",2,[{type:"executioner",threshold:.3,dmgBonus:6}],"+6 de dano contra alvos quase mortos",null),w("nobre","Nobre",1,[{type:"firstBlood",dmgBonus:4}],"+4 de dano contra alvos ilesos",null),w("cacador","Caçador",1,[{type:"firstBlood",dmgBonus:3},j({speedFlat:1})],"Ataque de abertura devastador",null,"Caçadora"),w("vigilante","Vigilante",1,[{type:"initiativeBonus",value:5}],"Sempre age primeiro (+5 iniciativa)",null),w("sonolento","Sonolento",1,[{type:"initiativeBonus",value:-5},j({xpMult:.9})],"Demora a reagir",null),w("alerta","Alerta",1,[{type:"initiativeBonus",value:3},j({acFlat:1})],"Reflexos afiados",null),w("perspicaz","Perspicaz",1,[{type:"accuracy",value:1},{type:"initiativeBonus",value:2}],"Atento a aberturas",null),w("petreo","Pétreo",2,[Ke("cortante","perfurante"),j({acFlat:1,speedFlat:-1})],"Pele de pedra: resiste a cortes e perfurações",{tint:"#9a9a9a"},"Pétrea"),w("escamoso","Escamoso",1,[Ke("cortante")],"Escamas duras: resiste a dano cortante",null),w("cascudo","Cascudo",1,[Ke("perfurante")],"Casco rígido: resiste a perfurações",null),w("almofadado","Almofadado",1,[Ke("concussao")],"Corpo macio: resiste a concussão",null),w("refratario","Refratário",1,[Ke("fogo")],"Resiste a dano de fogo",kt,"Refratária"),w("criofilo","Criófilo",1,[Ke("gelo")],"Resiste a dano de gelo",jt,"Criófila"),w("isolante","Isolante",1,[Ke("eletrico")],"Resiste a dano elétrico",null),w("inoxidavel","Inoxidável",1,[Ke("acido")],"Resiste a dano ácido",null),w("imunizado","Imunizado",1,[Ke("veneno")],"Resiste a veneno",null),w("tumular","Tumular",1,[Ke("necrotico")],"Resiste a energia necrótica",bt),w("consagrado","Consagrado",1,[Ke("radiante")],"Resiste a dano radiante",Ft),w("obstinado","Obstinado",1,[Ke("psiquico"),{type:"saveBonus",value:1}],"Mente fechada: resiste a dano psíquico",null),w("abafado","Abafado",1,[Ke("trovao")],"Resiste a dano de trovão",null),w("incombustivel","Incombustível",2,[Es("fogo"),Ji("queimando")],"Imune a fogo e a queimaduras",kt),w("aterrado","Aterrado",2,[Es("eletrico"),Ji("paralisado")],"Imune a eletricidade",Wt),w("antitoxico","Antitóxico",2,[Es("veneno"),Ji("envenenado")],"Imune a veneno",Jt,"Antitóxica"),w("inerte","Inerte",2,[Es("psiquico"),j({intFlat:-2})],"Mente vazia: imune a dano psíquico",null),w("santificado","Santificado",2,[Ke("radiante","necrotico")],"Protegido contra luz e trevas",Ft),w("espinhoso","Espinhoso",1,[{type:"thorns",dice:"1d4",element:"perfurante"}],"Reflete 1d4 de dano a atacantes corpo a corpo",null),w("urticante","Urticante",1,[{type:"thorns",dice:"1d6",element:"veneno"}],"Pelos urticantes: reflete veneno",Jt),w("farpado","Farpado",2,[{type:"thorns",dice:"2d4",element:"perfurante"}],"Farpas longas: reflete 2d4 de dano",null),w("crepitante","Crepitante",2,[{type:"thorns",dice:"1d6",element:"fogo"}],"Corpo em brasas: queima quem o toca",kt),w("galvanizado","Galvanizado",2,[{type:"thorns",dice:"1d6",element:"eletrico"}],"Carcaça eletrificada: choca atacantes",Wt),w("regenerador","Regenerador",2,[{type:"regen",dice:"1d6"}],"Regenera 1d6 PV por turno",null),w("revigorante","Revigorante",1,[{type:"regen",dice:"1d4"}],"Regenera 1d4 PV por turno",null),w("trolesco","Trolesco",3,[{type:"regen",dice:"2d6"},Zt("fogo")],"Regeneração trollesca, mas teme fogo",null),w("vampirico","Vampírico",2,[{type:"lifesteal",fraction:.5}],"Drena 50% do dano causado como vida",bt,"Vampírica"),w("sanguessuga","Sanguessuga",1,[{type:"lifesteal",fraction:.25}],"Drena 25% do dano causado",null),w("esquivo","Esquivo",2,[{type:"evasive"}],"Ataques contra ele têm desvantagem",null),w("ilusorio","Ilusório",2,[{type:"dodge",chance:.25}],"25% de chance de esquivar de qualquer golpe",zt,"Ilusória"),w("espelhado","Espelhado",2,[{type:"dodge",chance:.2}],"20% de chance de esquivar",null),w("enevoado","Enevoado",1,[{type:"dodge",chance:.15}],"15% de chance de esquivar",bt),w("inabalavel","Inabalável",2,[{type:"sturdy"},{type:"saveBonus",value:2}],"Imune a críticos e firme contra efeitos",null),w("parrudo","Parrudo",1,[{type:"sturdy"},j({hpMult:1.1})],"Corpo denso: imune a críticos",null),w("inflamavel","Inflamável",1,[Zt("fogo"),j({xpMult:.85})],"Vulnerável a fogo",kt),w("friorento","Friorento",1,[Zt("gelo"),j({xpMult:.85})],"Vulnerável a gelo",jt),w("condutor","Condutor",1,[Zt("eletrico"),j({xpMult:.85})],"Vulnerável a eletricidade",Wt),w("soluvel","Solúvel",1,[Zt("acido"),j({xpMult:.85})],"Vulnerável a ácido",Ki),w("alergico","Alérgico",1,[Zt("veneno"),j({xpMult:.85})],"Vulnerável a veneno",Jt,"Alérgica"),w("supersticioso","Supersticioso",1,[Zt("psiquico"),j({xpMult:.85})],"Mente sugestionável: vulnerável a dano psíquico",zt),w("herege","Herege",1,[Zt("radiante"),j({xpMult:.85})],"Vulnerável a dano radiante",Ft),w("quebradico","Quebradiço",1,[Zt("concussao"),j({hpMult:.9,xpMult:.75})],"Estrutura frágil: vulnerável a concussão",null),w("covarde","Covarde",1,[ni("covarde"),j({xpMult:.9})],"Foge quando gravemente ferido",null),w("timido","Tímido",1,[ni("covarde"),{type:"accuracy",value:-1},j({xpMult:.85})],"Hesitante em combate",null,"Tímida"),w("furioso","Furioso",1,[{type:"rageBelow",threshold:.5,dmgBonus:3,acPenalty:2}],"Entra em fúria com metade da vida",null),w("berserker","Berserker",2,[{type:"rageBelow",threshold:.4,dmgBonus:5,acPenalty:3}],"Fúria devastadora quando ferido",null),w("enfurecido","Enfurecido",1,[j({dmgFlat:2}),{type:"rageBelow",threshold:.6,dmgBonus:2,acPenalty:1}],"Sempre irritado, pior ainda ferido",null),w("guardiao","Guardião",1,[ni("guardiao"),j({acFlat:1})],"Protege seus aliados",null,"Guardiã"),w("protetor","Protetor",1,[ni("guardiao"),j({hpMult:1.1})],"Defende o grupo com o corpo",null),w("gregario","Gregário",1,[{type:"packTactics"}],"Vantagem se um aliado cerca o mesmo alvo",null,"Gregária"),w("matilheiro","Matilheiro",2,[{type:"packTactics"},j({dmgFlat:1})],"Caça em bando com precisão mortal",null),w("solitario","Solitário",1,[{type:"loneWolf",dmgBonus:4}],"+4 de dano quando sem aliados próximos",null,"Solitária"),w("territorial","Territorial",1,[ni("agressivo"),j({acFlat:1})],"Ataca invasores com afinco",null),w("preguicoso","Preguiçoso",1,[ni("preguicoso"),j({xpMult:.8})],"Às vezes nem se dá ao trabalho de agir",null),w("atirador","Atirador",1,[ni("atirador"),{type:"accuracy",value:1}],"Mantém distância e mira com calma",null),w("emboscador","Emboscador",2,[{type:"firstBlood",dmgBonus:5},{type:"initiativeBonus",value:3}],"Primeiro golpe devastador",null),w("sadico","Sádico",1,[{type:"executioner",threshold:.4,dmgBonus:3}],"Deleita-se em ferir os já feridos",null,"Sádica"),w("explosivo","Explosivo",2,[{type:"onDeathExplode",element:"fogo",dice:"2d6",radius:1}],"Explode em chamas ao morrer",kt),w("instavel","Instável",1,[{type:"onDeathExplode",element:"eletrico",dice:"1d8",radius:1}],"Descarga elétrica ao morrer",Wt),w("criogenico","Criogênico",2,[{type:"onDeathExplode",element:"gelo",dice:"2d6",radius:1}],"Explosão de gelo ao morrer",jt,"Criogênica"),w("putrido","Pútrido",1,[{type:"onDeathExplode",element:"veneno",dice:"1d8",radius:1}],"Nuvem tóxica ao morrer",Jt,"Pútrida"),w("fulgurante","Fulgurante",2,[{type:"onDeathExplode",element:"radiante",dice:"2d6",radius:1}],"Clarão radiante ao morrer",Ft),w("apodrecido","Apodrecido",1,[{type:"onDeathExplode",element:"necrotico",dice:"1d8",radius:1}],"Eclosão necrótica ao morrer",bt),w("sacrificial","Sacrificial",2,[{type:"onDeathExplode",element:"fogo",dice:"3d6",radius:2},j({hpMult:.8})],"Vive para explodir",kt),w("divisivel","Divisível",2,[{type:"onDeathSplit",count:2,hpFraction:.4}],"Divide-se em dois ao morrer",null),w("mitotico","Mitótico",2,[{type:"onDeathSplit",count:2,hpFraction:.5}],"Mitose: dois clones ao morrer",null,"Mitótica"),w("fragmentario","Fragmentário",3,[{type:"onDeathSplit",count:3,hpFraction:.25}],"Estilhaça-se em três ao morrer",null,"Fragmentária"),w("vingativo","Vingativo",1,[{type:"onDeathCurse",condition:"amaldicoado",duration:3}],"Amaldiçoa quem o mata",bt),w("rancoroso","Rancoroso",1,[{type:"onDeathCurse",condition:"marcado",duration:3}],"Marca quem o mata",null),w("assombrado","Assombrado",2,[{type:"onDeathCurse",condition:"medo",duration:2},Ke("necrotico")],"Seu espírito aterroriza o assassino",bt),w("martir","Mártir",2,[{type:"onDeathHealAllies",dice:"2d6",radius:2}],"Cura aliados próximos ao morrer",Ft),w("alado","Alado",2,[{type:"flying"}],"Voa: ignora terreno, altura e perigos",null),w("voador","Voador",2,[{type:"flying"},j({speedFlat:1})],"Voo rápido e livre",null),w("flutuante","Flutuante",1,[{type:"flying"},j({speedFlat:-1})],"Flutua lentamente sobre o campo",null),w("etereo","Etéreo",3,[{type:"phasing"},Ke("cortante","perfurante","concussao")],"Semi-material: atravessa tudo, resiste a dano físico",bt,"Etérea"),w("fantasmagorico","Fantasmagórico",3,[{type:"phasing"},{type:"dodge",chance:.15}],"Forma espectral evasiva",bt,"Fantasmagórica"),w("escorregadio","Escorregadio",1,[{type:"slippery"},{type:"dodge",chance:.1}],"Não provoca ataques de oportunidade",null),w("saltitante","Saltitante",1,[{type:"slippery"},j({speedFlat:1})],"Salta pelo campo livremente",null),w("errante","Errante",1,[j({speedFlat:1})],"Andarilho incansável",null),w("teleportador","Teleportador",2,[{type:"blinkOnHit",chance:.3,range:3}],"30% de teleportar ao ser atingido",zt),w("piscante","Piscante",3,[{type:"blinkOnHit",chance:.5,range:4}],"Pisca pelo espaço ao ser atingido",zt),w("sortudo","Sortudo",1,[{type:"rerollOnes"},{type:"dodge",chance:.05}],"A sorte sorri: rerola 1 no d20",null),w("azarado","Azarado",1,[{type:"accuracy",value:-1},j({xpMult:.8})],"Nada dá certo para ele",null),w("bendito","Bendito",1,[Ae("radiante","1d4"),{type:"saveBonus",value:1}],"Tocado pelos céus",Ft),w("maldito","Maldito",1,[Ae("necrotico","1d4"),Zt("radiante")],"Tocado pelas trevas",bt),w("arcano","Arcano",1,[Ae("psiquico","1d4"),{type:"saveBonus",value:2}],"Imbuido de magia antiga",zt),w("runico","Rúnico",2,[Ae("gelo","1d4"),Ae("fogo","1d4")],"Runas de fogo e gelo gravadas no corpo",jt,"Rúnica"),w("encantado","Encantado",1,[{type:"accuracy",value:1},j({acFlat:1}),{type:"saveBonus",value:1}],"Envolto em encantamentos",null),w("magnetico","Magnético",1,[j({acFlat:1}),{type:"thorns",dice:"1d4",element:"eletrico"}],"Campo magnético defensivo",Wt,"Magnética"),w("prismatico","Prismático",3,[Ae("fogo","1d4"),Ae("gelo","1d4"),Ae("eletrico","1d4")],"Refrata energia em três elementos",Ft,"Prismática"),w("caotico","Caótico",2,[{type:"blinkOnHit",chance:.2,range:3},Ae("psiquico","1d6")],"Imprevisível e perigoso",zt,"Caótica"),w("jovem","Jovem",1,[j({hpMult:.85,speedFlat:1,xpMult:.9})],"Inexperiente mas ágil",null),w("adulto","Adulto",1,[j({hpMult:1.1})],"No auge da forma",null),w("velho","Velho",1,[j({speedFlat:-1,wisFlat:2,xpMult:.95})],"Lento porém experiente",null),w("anciao","Ancião",2,[j({wisFlat:4,intFlat:2,hpMult:1.15}),{type:"saveBonus",value:2}],"Décadas de batalhas",null,"Anciã"),w("ancestral","Ancestral",3,[j({strFlat:2,dexFlat:2,conFlat:2,hpMult:1.3})],"De uma era esquecida",null),w("real","Real",3,[j({hpMult:1.5,dmgFlat:2,acFlat:1,xpMult:1.5})],"Sangue real: poder de monarca",{tint:"#ffd700"}),w("imperial","Imperial",3,[j({hpMult:1.4,xpMult:1.4}),{type:"accuracy",value:2}],"Disciplina de império",{tint:"#ffd700"}),w("plebeu","Plebeu",1,[j({hpMult:.95,xpMult:.9})],"Um qualquer",null),w("veterano","Veterano",2,[{type:"accuracy",value:2},j({acFlat:1,hpMult:1.15})],"Cicatrizes de cem batalhas",null),w("elite","Elite",3,[{type:"accuracy",value:2},j({dmgFlat:2,acFlat:2,hpMult:1.3,xpMult:1.6})],"O melhor entre os seus",{tint:"#ff4444"}),w("recruta","Recruta",1,[{type:"accuracy",value:-1},j({xpMult:.85})],"Mal saiu do treinamento",null),w("mercenario","Mercenário",1,[j({dmgFlat:1}),{type:"accuracy",value:1}],"Luta por moedas, e luta bem",null,"Mercenária"),w("capitao","Capitão",2,[j({hpMult:1.25,dmgFlat:1}),{type:"accuracy",value:1}],"Líder nato",null,"Capitã"),w("lendario","Lendário",3,[j({hpMult:1.8,dmgFlat:3,acFlat:2,xpMult:2}),{type:"accuracy",value:2}],"Cantado em sagas",{tint:"#ffaa00",emissive:"#ffaa00"},"Lendária"),w("mitico","Mítico",3,[j({hpMult:2.2,dmgFlat:4,xpMult:2.5}),{type:"critRange",min:19}],"Além das lendas",{tint:"#ff66ff",emissive:"#aa44ff"},"Mítica"),w("primordial","Primordial",3,[j({hpMult:2,strFlat:2,conFlat:2,xpMult:2.2})],"Força do início dos tempos",{emissive:"#44ffcc"}),w("eterno","Eterno",3,[{type:"regen",dice:"1d8"},j({hpMult:1.4})],"Não conhece o descanso final",{emissive:"#88ddff"}),w("faminto","Faminto",1,[j({dmgFlat:2,hpMult:.92})],"A fome o torna feroz",null),w("sedento","Sedento",1,[{type:"lifesteal",fraction:.2}],"Sede de sangue literal",null),w("raivoso","Raivoso",1,[j({dmgFlat:1}),{type:"rageBelow",threshold:.5,dmgBonus:2,acPenalty:1}],"Espuma de raiva",null),w("enfermo","Enfermo",1,[j({conFlat:-2,hpMult:.88,xpMult:.85}),Ke("veneno")],"Doente, mas calejado por toxinas",null),w("ferido","Ferido",1,[{type:"startWounded",fraction:.6},j({xpMult:.7})],"Já entra em combate machucado",null,"Ferida"),w("exausto","Exausto",1,[j({speedFlat:-1,xpMult:.8}),{type:"accuracy",value:-1}],"Sem fôlego",null),w("energizado","Energizado",1,[j({speedFlat:1}),{type:"accuracy",value:1}],"Vibrando de energia",Wt),w("euforico","Eufórico",1,[j({dmgFlat:1,acFlat:-1}),{type:"accuracy",value:1}],"Empolgação imprudente",null,"Eufórica"),w("sereno","Sereno",1,[{type:"saveBonus",value:3},Ji("medo")],"Calma inabalável: imune a medo",null),w("concentrado","Concentrado",1,[{type:"accuracy",value:2},{type:"initiativeBonus",value:-2}],"Foco total, reação lenta",null),w("distraido","Distraído",1,[j({acFlat:-2,xpMult:.85}),{type:"initiativeBonus",value:-3}],"Cabeça nas nuvens",null,"Distraída"),w("determinado","Determinado",1,[{type:"saveBonus",value:2},Ji("medo")],"Nada o faz recuar",null),w("nervoso","Nervoso",1,[{type:"accuracy",value:-1},{type:"initiativeBonus",value:2},j({xpMult:.9})],"Agitado e impreciso",null),w("confiante","Confiante",1,[{type:"accuracy",value:1},{type:"firstBlood",dmgBonus:2}],"Acredita em cada golpe",null),w("paranoico","Paranoico",1,[{type:"initiativeBonus",value:4},j({acFlat:1}),{type:"accuracy",value:-1}],"Sempre em guarda",null,"Paranoica"),w("zeloso","Zeloso",1,[ni("guardiao"),{type:"saveBonus",value:1}],"Cuida dos seus com devoção",null),w("paralisante","Paralisante",2,[$e("paralisado",.15,13,"con")],"Seu toque pode paralisar",Wt),w("atordoante","Atordoante",2,[$e("atordoado",.15,13,"con")],"Golpes que atordoam",null),w("cegante","Cegante",1,[$e("cego",.2,12,"con")],"Pode cegar ao acertar",Ft),w("aterrorizante","Aterrorizante",1,[$e("medo",.25,12,"wis")],"Golpes que inspiram pavor",bt),w("enraizante","Enraizante",1,[$e("enraizado",.2,12,"str")],"Prende o alvo ao chão",null),w("rastreador","Rastreador",1,[$e("marcado",.3,12,"wis")],"Marca a presa para o bando",null),w("sangrento","Sangrento",1,[$e("sangrando",.35,12,"con")],"Feridas que não param de sangrar",null),w("lacerante","Lacerante",2,[$e("sangrando",.5,13,"con",3)],"Garras que rasgam profundamente",null),w("entorpecente","Entorpecente",1,[$e("lento",.3,12,"con")],"Toxina que entorpece músculos",Jt),w("congelador","Congelador",2,[$e("congelado",.12,13,"con")],"Pode congelar o alvo sólido",jt),w("incendiario","Incendiário",1,[$e("queimando",.3,12,"dex")],"Põe fogo em tudo que toca",kt,"Incendiária"),w("adormecedor","Adormecedor",2,[$e("atordoado",.2,13,"wis")],"Induz sono profundo",zt),w("debilitante","Debilitante",1,[$e("amaldicoado",.25,12,"wis")],"Enfraquece com cada golpe",bt),w("infeccioso","Infeccioso",1,[$e("envenenado",.4,12,"con")],"Mordidas infectas",Jt),w("petrificante","Petrificante",3,[$e("paralisado",.2,14,"con",2)],"O olhar que enrijece a carne",null),w("longilineo","Longilíneo",1,[{type:"reach",value:2}],"Membros longos: alcance estendido",{scale:1.1},"Longilínea"),w("tentacular","Tentacular",2,[{type:"reach",value:2},$e("enraizado",.15,12,"str")],"Tentáculos que agarram de longe",null),w("camuflado","Camuflado",1,[{type:"dodge",chance:.12},{type:"firstBlood",dmgBonus:2}],"Difícil de ver, fácil de sentir",null),w("noturno","Noturno",1,[{type:"initiativeBonus",value:2},Ke("necrotico")],"Criatura da noite",bt),w("diurno","Diurno",1,[{type:"accuracy",value:1},Ke("radiante")],"Abençoado pelo sol",Ft),w("subterraneo","Subterrâneo",1,[Ke("concussao"),j({speedFlat:-1})],"Escavador de túneis resistente",null,"Subterrânea"),w("anfibio","Anfíbio",1,[{type:"slippery"},Ke("gelo")],"Pele úmida e escorregadia",null,"Anfíbia"),w("cristalino","Cristalino",2,[Ke("eletrico","gelo"),Zt("concussao"),j({acFlat:2})],"Corpo de cristal: belo e quebrável",jt),w("metalico","Metálico",2,[Ke("cortante","perfurante"),Zt("eletrico"),j({acFlat:2,speedFlat:-1})],"Carcaça de metal",{tint:"#aaaacc"},"Metálica"),w("oleoso","Oleoso",1,[{type:"slippery"},Zt("fogo"),{type:"dodge",chance:.1}],"Escorrega de tudo, menos do fogo",null),w("gasoso","Gasoso",2,[{type:"phasing"},Ke("concussao"),Zt("fogo")],"Forma de névoa inflamável",null),w("viscoso","Viscoso",1,[$e("lento",.25,12,"str"),Ke("concussao")],"Gosma que gruda e amortece",Ki),w("faiscante","Faiscante",1,[Ae("fogo","1d4"),Ae("eletrico","1d4")],"Solta faíscas a cada golpe",Wt),w("lunar","Lunar",2,[Ae("gelo","1d6"),{type:"regen",dice:"1d4"}],"Banhado pela lua",jt),w("solar","Solar",2,[Ae("fogo","1d6"),Ae("radiante","1d4")],"Banhado pelo sol",kt),w("estelar","Estelar",3,[Ae("radiante","2d6"),{type:"blinkOnHit",chance:.2,range:3}],"Poeira de estrelas",Ft),w("vazio","Vazio",3,[Ae("necrotico","2d6"),{type:"dodge",chance:.15}],"Tocado pelo Vazio entre os mundos",bt,"Vazia"),w("ressurgente","Ressurgente",3,[{type:"regen",dice:"1d6"},{type:"onDeathHealAllies",dice:"1d6",radius:2}],"A morte não é o fim",Ft),w("simbiotico","Simbiótico",2,[{type:"packTactics"},{type:"onDeathHealAllies",dice:"2d4",radius:2}],"Vive e morre pelo grupo",null,"Simbiótica"),w("parasita","Parasita",1,[{type:"lifesteal",fraction:.3},j({hpMult:.9})],"Suga a vida alheia",Jt),w("voraz","Voraz",2,[{type:"killHeal",dice:"2d6"},j({dmgFlat:1})],"Devora os caídos e se fortalece",null),w("canibal","Canibal",1,[{type:"killHeal",dice:"1d8"}],"Alimenta-se dos derrotados",null),w("imprudente","Imprudente",1,[j({dmgFlat:3,acFlat:-2})],"Ataca sem pensar em defesa",null),w("calculista","Calculista",1,[{type:"accuracy",value:2},j({dmgFlat:-1})],"Cada golpe friamente planejado",null),w("ardiloso","Ardiloso",1,[{type:"executioner",threshold:.5,dmgBonus:2},{type:"initiativeBonus",value:1}],"Explora cada fraqueza",null,"Ardilosa"),w("honorável","Honorável",1,[{type:"firstBlood",dmgBonus:3},Ji("medo")],"Duela de frente, sem medo",null),w("traiçoeiro","Traiçoeiro",1,[{type:"executioner",threshold:.6,dmgBonus:3}],"Golpeia pelas costas",null,"Traiçoeira"),w("selado","Selado",2,[j({hpMult:1.3,dmgFlat:-1}),Ke("psiquico")],"Poder contido por selos antigos",zt),w("desperto","Desperto",2,[j({intFlat:4,dmgFlat:1}),{type:"saveBonus",value:1}],"Consciência recém-despertada",zt),w("onirico","Onírico",2,[{type:"dodge",chance:.15},$e("atordoado",.1,12,"wis")],"Feito de matéria de sonhos",zt,"Onírica"),w("pesadelar","Pesadelar",3,[$e("medo",.35,14,"wis"),Ae("psiquico","1d8")],"Um pesadelo encarnado",bt),w("abencoador","Abençoador",1,[{type:"onDeathHealAllies",dice:"1d8",radius:2}],"Sua queda inspira os seus",Ft),w("magnata","Magnata",1,[j({xpMult:1.3,hpFlat:5,acFlat:1})],"Bem nutrido e protegido por riquezas (mais XP e ouro)",{tint:"#ffd700"}),w("dourado","Dourado",2,[j({xpMult:1.6,acFlat:1})],"Reluzente e valioso",{tint:"#ffd700",emissive:"#886600"}),w("platinado","Platinado",3,[j({xpMult:2,acFlat:2})],"Tesouro ambulante",{tint:"#e5e4e2",emissive:"#888899"})],Pl=new Map;for(const i of Vs){if(Pl.has(i.id))throw new Error(`Adjetivo duplicado: ${i.id}`);Pl.set(i.id,i)}class fv{constructor(e){this.root=e,this.current=null,this.modal=null}clear(){this.current?.remove(),this.current=null}closeModal(){this.modal?.remove(),this.modal=null}show(e){return this.clear(),this.current=e,this.root.appendChild(e),e}openModal(e){this.closeModal();const t=Et("modal-backdrop fade-in"),n=Et("modal");return n.appendChild(e),t.appendChild(n),this.root.appendChild(t),this.modal=t,t}toast(e){let t=this.root.querySelector(".toast-wrap");t||(t=Et("toast-wrap"),this.root.appendChild(t));const n=Et("toast");n.textContent=e,t.appendChild(n),setTimeout(()=>n.remove(),3e3)}mainMenu({hasSave:e,campaignComplete:t,onNew:n,onContinue:a,onBestiary:s,onHelp:r}){const o=Et("screen transparent fade-in");ut(o,`
      <div class="game-title">FROSTY TACTICS</div>
      <div class="game-subtitle">A Lâmina Rúnica ❄️</div>
      <div class="menu-buttons"></div>
      <div style="color:var(--text-dim);font-size:0.85rem;max-width:430px;text-align:center;line-height:1.5">
        Frosty, a tiefling alada da espada bastarda Geada Eterna, enfrenta as hordas
        do Vazio em 50 batalhas táticas por 5 zonas — e além, no Modo Infinito.
      </div>
    `);const c=o.querySelector(".menu-buttons"),l=(d,u,f="")=>{const h=document.createElement("button");return f&&(h.className=f),ut(h,d),h.onclick=u,c.appendChild(h),h};return e&&l(`▶️ Continuar ${t?"(Modo Infinito)":""}`,a,"primary"),l("⚔️ Nova Campanha",()=>{e&&!confirm("Começar do zero apaga o progresso salvo. Continuar?")||n()},e?"":"primary"),l("📖 Bestiário",s),l("❓ Como Jogar",r),this.show(o)}zoneIntro(e,t,n){const a=Et("screen transparent fade-in");return ut(a,`
      <h2>${gt(e.pt)}</h2>
      <div class="panel" style="text-align:center;max-width:520px">
        <p style="line-height:1.6;color:var(--text-dim)">${gt(e.intro)}</p>
        <p style="margin-top:12px;color:var(--gold)">Batalha ${t} de 50</p>
      </div>
      <button class="primary go">⚔️ Entrar em Batalha</button>
    `),a.querySelector(".go").onclick=n,this.show(a)}victoryResults(e,t,{onShop:n,onNext:a,onAsi:s}){const r=Et(""),o=e.levelsGained;if(ut(r,`
      <h3>🏆 Vitória!</h3>
      ${e.wasBoss?`<div class="unlock-item"><b>👑 Chefe derrotado!</b> ${e.zoneCleared?`Zona "${gt(e.zoneCleared.pt)}" concluída!`:""}</div>`:""}
      <div class="results-grid">
        <span>Experiência</span><span class="value">+${e.xp} XP</span>
        <span>Ouro</span><span class="value">+${e.gold} 💰</span>
        <span>Inimigos derrotados</span><span class="value">${e.kills}</span>
        <span>Nível</span><span class="value">${e.levelBefore}${e.levelAfter>e.levelBefore?` → ${e.levelAfter} ⬆️`:""}</span>
      </div>
      <div class="levelups"></div>
      <div class="modal-actions">
        <button class="shop">🛒 Loja</button>
        <button class="primary next">Próxima Batalha ▶️</button>
      </div>
    `),o.length){const c=r.querySelector(".levelups");for(const l of o){const d=Fd.filter(f=>f.unlockLevel===l),u=Nd.filter(f=>f.level===l);for(const f of d)c.appendChild(Et("unlock-item",`<b>${f.icon} ${gt(f.pt)}</b> — ${gt(f.desc)}`));for(const f of u)c.appendChild(Et("unlock-item",`<b>✨ ${gt(f.pt)}</b> — ${gt(f.desc)}`))}t.pendingAsi>0&&c.appendChild(Et("unlock-item","<b>📈 Aumento de Atributo disponível!</b> Escolha +1 em dois atributos."))}return r.querySelector(".shop").onclick=n,r.querySelector(".next").onclick=()=>{t.pendingAsi>0?s():a()},this.openModal(r)}asiModal(e,t){const n=Et("");ut(n,`
      <h3>📈 Aumento de Atributo (nível ${e.level})</h3>
      <p style="color:var(--text-dim);font-size:0.9rem">Escolha 2 pontos para distribuir (pode repetir o mesmo atributo).</p>
      <div class="asi-grid"></div>
      <div class="modal-actions"><button class="primary confirm" disabled>Confirmar</button></div>
    `);const a=n.querySelector(".asi-grid"),s=[],r=["str","dex","con","int","wis","cha"],o=new Map;for(const c of r){const l=document.createElement("button"),d=()=>{const u=s.filter(f=>f===c).length;ut(l,`${gt(J0[c])}<br><b>${e[c]+u}</b>${u?` <span style="color:var(--gold)">(+${u})</span>`:""}`),l.classList.toggle("picked",u>0)};l.onclick=()=>{s.length>=2&&(s.length=0),s.push(c);for(const[,u]of o)u();n.querySelector(".confirm").disabled=s.length!==2},o.set(c,d),d(),a.appendChild(l)}return n.querySelector(".confirm").onclick=()=>t(s[0],s[1]),this.openModal(n)}shop(e,{onBuyPotion:t,onBuyUpgrade:n,onClose:a}){const s=Et("");ut(s,`
      <h3>🛒 Acampamento — Loja</h3>
      <div style="color:var(--gold);margin-bottom:6px">💰 <span class="gold-now">${e.gold}</span> ouro</div>
      <h4 style="margin:10px 0 4px;color:var(--text-dim)">Poções</h4>
      <div class="shop-grid potions"></div>
      <h4 style="margin:14px 0 4px;color:var(--text-dim)">Melhorias permanentes</h4>
      <div class="shop-grid upgrades"></div>
      <div class="modal-actions"><button class="primary close">Pronto</button></div>
    `);const r=()=>{ut(s.querySelector(".gold-now"),String(e.gold));const o=s.querySelector(".potions");o.replaceChildren();for(const l of Object.values(ra)){const d=Et("shop-item");ut(d,`
          <span class="icon">${l.icon}</span>
          <div class="info">
            <div class="title">${gt(l.pt)} <span class="owned">×${e.potions[l.id]??0}</span></div>
            <div class="desc">${gt(l.desc)}</div>
          </div>
          <button ${e.gold<l.price?"disabled":""}>${l.price} 💰</button>
        `),d.querySelector("button").onclick=()=>{t(l.id),r()},o.appendChild(d)}const c=s.querySelector(".upgrades");c.replaceChildren();for(const l of Object.values(Fs)){const d=e.upgrades[l.id],u=d>=l.max,f=u?0:l.price(d),h=Et("shop-item");ut(h,`
          <span class="icon">${l.icon}</span>
          <div class="info">
            <div class="title">${gt(l.pt)} <span class="owned">${d}/${l.max}</span></div>
            <div class="desc">${gt(l.desc)}</div>
          </div>
          <button ${u||e.gold<f?"disabled":""}>${u?"MÁX":`${f} 💰`}</button>
        `),u||(h.querySelector("button").onclick=()=>{n(l.id),r()}),c.appendChild(h)}};return r(),s.querySelector(".close").onclick=a,this.openModal(s)}defeatScreen(e,t,n){const a=Et("screen fade-in");return ut(a,`
      <h2 style="color:#ff6b6b">💔 Frosty caiu…</h2>
      <div class="panel" style="text-align:center">
        <p style="line-height:1.6">Mas tieflings não morrem fácil. Ela recua, recupera o fôlego<br>e perde <b style="color:var(--gold)">${e.goldLost} de ouro</b> no caminho.</p>
        <p style="margin-top:10px;color:var(--text-dim)">A batalha ${e.battleIndex} a aguarda novamente — com um novo campo e novos inimigos.</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">🏠 Menu</button>
        <button class="primary retry">⚔️ Tentar Novamente</button>
      </div>
    `),a.querySelector(".retry").onclick=t,a.querySelector(".menu-btn").onclick=n,this.show(a)}campaignVictory(e,t,n){const a=Et("screen fade-in");return ut(a,`
      <div class="game-title" style="font-size:2.6rem">⭐ VITÓRIA ⭐</div>
      <div class="panel" style="text-align:center;max-width:560px">
        <p style="font-size:1.05rem;line-height:1.7">
          Vorthrax, o Dragão do Vazio, tomba dos céus estilhaçados.<br>
          O portal se fecha. As Planícies do Gelo Quebrado conhecem a paz.<br><br>
          <b style="color:var(--accent-ice)">Frosty, a Lâmina Rúnica</b>, nível ${e.level},
          termina sua jornada com ${e.statsTotal.kills} inimigos derrotados
          em ${e.statsTotal.battles} batalhas.
        </p>
        <p style="margin-top:14px;color:var(--gold)">Mas além do portal… algo ainda se move. O Modo Infinito desperta.</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">🏠 Menu</button>
        <button class="primary endless">♾️ Modo Infinito</button>
      </div>
    `),a.querySelector(".endless").onclick=t,a.querySelector(".menu-btn").onclick=n,this.show(a)}bestiary(e,t){const n=Et("");ut(n,`
      <h3>📖 Bestiário</h3>
      <div class="bestiary-tabs">
        <button class="tab-enemies primary">Criaturas</button>
        <button class="tab-adjectives">Adjetivos</button>
      </div>
      <div class="bestiary-counter"></div>
      <div class="bestiary-grid"></div>
      <div class="modal-actions"><button class="primary close">Fechar</button></div>
    `);const a=n.querySelector(".bestiary-grid"),s=n.querySelector(".bestiary-counter"),r=n.querySelector(".tab-enemies"),o=n.querySelector(".tab-adjectives"),c=()=>{r.classList.add("primary"),o.classList.remove("primary");const d=e.enemies;ut(s,`Descobertas: <b>${d.size}</b> / ${fa.length} criaturas`),a.replaceChildren();for(const u of[...fa].sort((f,h)=>f.tier-h.tier||f.pt.localeCompare(h.pt))){const f=d.has(u.id),h=Et(`bestiary-card ${f?"":"locked"}`);ut(h,f?`<div class="b-name">${No(u.family)} ${gt(u.pt)}</div><div class="b-sub">Tier ${u.tier} · ${gt(u.family)} · ${u.hp} PV · CA ${u.ac}</div>`:`<div class="b-name">❔ ???</div><div class="b-sub">Tier ${u.tier} · ${gt(u.family)}</div>`),a.appendChild(h)}},l=()=>{o.classList.add("primary"),r.classList.remove("primary");const d=e.adjectives;ut(s,`Descobertos: <b>${d.size}</b> / ${Vs.length} adjetivos`),a.replaceChildren();for(const u of[...Vs].sort((f,h)=>f.tier-h.tier||f.m.localeCompare(h.m))){const f=d.has(u.id),h=Et(`bestiary-card ${f?"":"locked"}`);ut(h,f?`<div class="b-name">${gt(u.m)}</div><div class="b-sub">T${u.tier} — ${gt(u.desc)}</div>`:`<div class="b-name">❔ ???</div><div class="b-sub">Tier ${u.tier}</div>`),a.appendChild(h)}};return r.onclick=c,o.onclick=l,c(),n.querySelector(".close").onclick=t,this.openModal(n)}help(e){const t=Et("");return ut(t,`
      <h3>❓ Como Jogar</h3>
      <div class="help-section">
        <b>Objetivo:</b> derrote todos os inimigos de cada batalha. 5 zonas × 10 batalhas,
        com um chefe a cada 10ª. Depois da 50ª… o Modo Infinito.
      </div>
      <div class="help-section">
        <b>Seu turno:</b> mova-se (casas azuis) e use 1 ação (ataque/habilidade).
        Clique num inimigo ao alcance para atacar. Poções são ações livres (1/turno).
        Sair do corpo a corpo provoca <b>ataques de oportunidade</b>!
      </div>
      <div class="help-section">
        <b>D&D nas regras:</b> d20 + bônus vs CA para acertar; 20 natural = crítico (dados dobrados);
        vantagem/desvantagem; testes de resistência contra efeitos; terreno alto dá +2 de acerto;
        atacar à distância adjacente a um inimigo impõe desvantagem.
      </div>
      <div class="help-section">
        <b>Adjetivos:</b> cada criatura pode vir com adjetivos que mudam tudo —
        um <i>Goblin Flamejante Gigante</i> é outra criatura. Passe o mouse para ler os efeitos!
      </div>
      <div class="help-section">
        <b>Atalhos:</b> <span class="kbd">1-9</span> habilidades · <span class="kbd">T</span> encerrar turno ·
        <span class="kbd">Q/E</span> girar câmera · <span class="kbd">roda</span> zoom ·
        <span class="kbd">Esc</span> cancelar mira · <span class="kbd">H</span> esta ajuda
      </div>
      <div class="help-section">
        <b>Entre batalhas:</b> cura completa, loja (poções e melhorias permanentes) e
        aumentos de atributo a cada 4 níveis. Derrota custa 10% do ouro — nunca o progresso.
      </div>
      <div class="modal-actions"><button class="primary close">Entendi!</button></div>
    `),t.querySelector(".close").onclick=e,this.openModal(t)}}class Dl{constructor(e=1){this.state=e>>>0,this.state===0&&(this.state=2654435769)}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e,t){return Math.floor(this.next()*(t-e+1))+e}pick(e){return e[Math.floor(this.next()*e.length)]}shuffle(e){const t=e.slice();for(let n=t.length-1;n>0;n--){const a=Math.floor(this.next()*(n+1));[t[n],t[a]]=[t[a],t[n]]}return t}chance(e){return this.next()<e}weighted(e){const t=e.reduce((a,s)=>a+s,0);let n=this.next()*t;for(let a=0;a<e.length;a++)if(n-=e[a],n<=0)return a;return e.length-1}}function pv(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const mv=/^(\d+)d(\d+)([+-]\d+)?$/;function ec(i){const e=mv.exec(i.replaceAll(" ",""));if(!e)throw new Error(`Expressão de dado inválida: ${i}`);return{count:+e[1],sides:+e[2],bonus:e[3]?+e[3]:0}}function Tt(i,e,{crit:t=!1}={}){const{count:n,sides:a,bonus:s}=ec(e),r=t?n*2:n,o=[];let c=0;for(let l=0;l<r;l++){const d=i.int(1,a);o.push(d),c+=d}return{total:c+s,rolls:o,bonus:s,expr:e}}function Gs(i,e=0){const t=i.int(1,20);if(e===0)return{value:t,rolls:[t]};const n=i.int(1,20);return{value:e>0?Math.max(t,n):Math.min(t,n),rolls:[t,n]}}function _t(i,e){return(i.effects??[]).filter(t=>t.type===e)}function wi(i,e){return(i.effects??[]).some(t=>t.type===e)}function tc(i,e,t){return _t(i,e).reduce((n,a)=>n+(a[t]??0),0)}function gv(i,e){const t={...i};let n=1,a=1,s=1;for(const r of e)if(r.type==="stat"){n*=r.hpMult??1,a*=r.dmgMult??1,s*=r.xpMult??1,t.maxHp+=r.hpFlat??0,t.ac+=r.acFlat??0,t.speed+=r.speedFlat??0,t.dmgFlat=(t.dmgFlat??0)+(r.dmgFlat??0);for(const o of["str","dex","con","int","wis","cha"])t[o]=(t[o]??10)+(r[`${o}Flat`]??0)}return t.maxHp=Math.max(1,Math.round(t.maxHp*n)),t.dmgMult=(i.dmgMult??1)*a,t.xpMult=(i.xpMult??1)*s,t.speed=Math.max(1,t.speed),t.ac=Math.max(5,t.ac),t}let Od=1;function vv(){Od=1}function _v(i,e){return e==="f"?i.f??i.m:i.m}function xv(i,e){let t=i.pt;for(const n of e)t+=` ${_v(n,i.gender)}`;return t}function Ua(i,e,t=[],n={}){const a=Tt(i,e.hp),s=Ri(e.con)*ec(e.hp).count;let r={str:e.str,dex:e.dex,con:e.con,int:e.int,wis:e.wis,cha:e.cha,maxHp:Math.max(1,a.total+s),ac:e.ac,speed:e.speed,dmgFlat:0,dmgMult:1,xpMult:1};const o=[...e.traits??[],...t.flatMap(g=>g.effects??[])];r=gv(r,o),n.hpScale&&(r.maxHp=Math.max(1,Math.round(r.maxHp*n.hpScale))),n.dmgScale&&(r.dmgMult*=n.dmgScale);const c=new Set(e.resist??[]),l=new Set(e.vuln??[]),d=new Set(e.immune??[]),u=new Set(e.condImmune??[]);for(const g of o)g.type==="resistance"&&g.types.forEach(v=>c.add(v)),g.type==="immunity"&&g.types.forEach(v=>d.add(v)),g.type==="vulnerability"&&g.types.forEach(v=>l.add(v)),g.type==="conditionImmunity"&&g.conditions.forEach(v=>u.add(v));for(const g of d)c.delete(g);const f=Math.max(5,Math.round(e.xp*r.xpMult*(n.xpScale??1))),h={id:`u${Od++}`,kind:"enemy",side:"enemy",baseId:e.id,family:e.family,tier:e.tier,level:e.tier*2,name:xv(e,t),baseName:e.pt,gender:e.gender,adjectives:t,adjectiveIds:t.map(g=>g.id),traits:e.traits?[...e.traits]:[],effects:o.filter(g=>g.type!=="stat"),str:r.str,dex:r.dex,con:r.con,int:r.int,wis:r.wis,cha:r.cha,maxHp:r.maxHp,hp:r.maxHp,ac:r.ac,speed:r.speed,dmgFlat:r.dmgFlat,dmgMult:r.dmgMult,attacks:e.attacks.map(g=>({...g})),specials:(e.specials??[]).map(g=>({...g})),resistances:c,vulnerabilities:l,immunities:d,conditionImmunities:u,conditions:new Map,cooldowns:new Map,alive:!0,pos:{x:0,y:0},initiative:0,xp:f,goldValue:Math.max(1,Math.round(e.tier*8+f/12)),visual:{body:e.visual.body,color:e.visual.color,accent:e.visual.accent??"#222222",scale:(e.visual.scale??1)*t.reduce((g,v)=>g*(v.visual?.scale??1),1),tint:t.find(g=>g.visual?.tint)?.visual.tint??null,emissive:t.find(g=>g.visual?.emissive)?.visual.emissive??null,particle:t.map(g=>g.visual?.particle).filter(Boolean)[0]??null},behavior:o.find(g=>g.type==="behavior")?.kind??e.behavior??"aggressive"};return h.attacksPerAction=1+o.filter(g=>g.type==="multiattack").reduce((g,v)=>g+(v.extra??1),0)+(e.multiattack??0),h}function yv(i,e){const t=i;return{id:"frosty",kind:"hero",side:"hero",name:"Frosty",gender:"f",level:t.level,str:t.str,dex:t.dex,con:t.con,int:t.int,wis:t.wis,cha:t.cha,maxHp:t.maxHp,hp:t.hp,ac:t.ac,speed:t.speed,dmgFlat:t.dmgFlat??0,dmgMult:1,attacks:[t.weapon],abilities:e,effects:t.effects??[],traits:[],adjectives:[],resistances:new Set(t.resistances??[]),vulnerabilities:new Set,immunities:new Set,conditionImmunities:new Set(t.conditionImmunities??[]),conditions:new Map,cooldowns:new Map,usesLeft:new Map,alive:!0,pos:{x:0,y:0},initiative:0,attacksPerAction:t.attacksPerAction??1,visual:{body:"frosty",color:"#5b8def",scale:1},behavior:"player"}}const Ns=[{id:1,pt:"Planícies do Gelo Quebrado",tier:1,families:["goblinoide","fera","humanoide","verme","orc"],boss:"rei_goblin",bossMinions:["goblin","goblin","xama_goblin"],palette:{ground:"#7fa05a",groundAlt:"#6a8a4a",rock:"#8a8a7a",sky:"#bcd8ee",fog:"#cfe3f5",prop:"rock"},intro:"Os ventos uivam sobre as planícies congeladas. Bandos de goblins saqueiam as vilas — e Frosty atende ao chamado."},{id:2,pt:"Floresta Sombria de Velgar",tier:2,families:["fada","planta","fera","verme","licantropo","goblinoide"],boss:"bruxa_verde",bossMinions:["lobisomem","duende","duende"],palette:{ground:"#4a6a3a",groundAlt:"#3a5a30",rock:"#5a6a4a",sky:"#3a4a3a",fog:"#2a3a2a",prop:"tree"},intro:"Árvores retorcidas engolem a luz. Algo antigo desperta no coração da floresta, corrompendo suas criaturas."},{id:3,pt:"Pântanos da Podridão",tier:3,families:["morto-vivo","limo","gigante","aberracao","planta"],boss:"lich",bossMinions:["esqueleto","esqueleto","espectro"],palette:{ground:"#5a5a3a",groundAlt:"#4a4a30",rock:"#6a6a5a",sky:"#4a4a3a",fog:"#3d3d2d",prop:"swamp"},intro:"O fedor da morte paira sobre o lodo. Um lich ergue exércitos com os afogados do pântano."},{id:4,pt:"Montanhas do Crepúsculo",tier:4,families:["gigante","elemental","draconico","constructo","licantropo","fera"],boss:"dragao_gelo",bossMinions:["cria_dragao","cria_dragao"],palette:{ground:"#7a7a8a",groundAlt:"#6a6a7a",rock:"#9a9aaa",sky:"#5a4a6a",fog:"#6a5a7a",prop:"rock"},intro:"Picos que arranham o céu púrpura. Gigantes e dragões disputam as fortalezas congeladas das alturas."},{id:5,pt:"Cidadela do Abismo",tier:5,families:["demonio","diabo","aberracao","morto-vivo","constructo"],boss:"vorthrax",bossMinions:["demonio_sombra","vrock"],palette:{ground:"#4a2a3a",groundAlt:"#3a2030",rock:"#5a3a4a",sky:"#1a0a1a",fog:"#2a0a2a",prop:"obelisk"},intro:"O portal para o Vazio se abre. Vorthrax, o Dragão do Vazio, aguarda no trono de estrelas mortas."}],za=10,Wn=Ns.length*za;function Bd(i){return i>Wn?{...Ns[(i-1)%Ns.length],endless:!0}:Ns[Math.floor((i-1)/za)]}function Mv(i){return i%za===0}function Sv(i){return((i-1)%za+1)/za}const fn={ground:{id:"ground",cost:1,blocked:!1},rock:{id:"rock",cost:1/0,blocked:!0},water:{id:"water",cost:2,blocked:!1},lava:{id:"lava",cost:1,blocked:!1,hazard:{dice:"2d6",type:"fogo"}},poison:{id:"poison",cost:1,blocked:!1,hazard:{dice:"1d6",type:"veneno",rider:{condition:"envenenado",dc:12,save:"con"}}},spikes:{id:"spikes",cost:1,blocked:!1,hazard:{dice:"1d4",type:"perfurante",onEnterOnly:!0}}};class bv{constructor(e,t){this.w=e,this.h=t,this.tiles=[];for(let n=0;n<t;n++){const a=[];for(let s=0;s<e;s++)a.push({x:s,y:n,h:0,terrain:"ground",prop:null});this.tiles.push(a)}}at(e,t){return e<0||t<0||e>=this.w||t>=this.h?null:this.tiles[t][e]}inBounds(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}neighbors4(e,t){const n=[];for(const[a,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const r=this.at(e+a,t+s);r&&n.push(r)}return n}}function Ue(i,e){return Math.max(Math.abs(i.x-e.x),Math.abs(i.y-e.y))}function Ev(i,e,t){const n=11+i.int(0,2),a=new bv(n,n),s=i.int(2,4);for(let l=0;l<s;l++){const d=i.int(1,n-2),u=i.int(1,n-2),f=i.int(1,3),h=i.int(2,3);for(let g=0;g<n;g++)for(let v=0;v<n;v++){const m=Math.max(Math.abs(v-d),Math.abs(g-u));if(m<=h){const p=a.at(v,g);p.h=Math.min(3,Math.max(p.h,f-m))}}}const r=i.int(6,11);for(let l=0;l<r;l++){const d=i.int(0,n-1),u=i.int(0,n-1);if(u<=1||u>=n-2)continue;const f=a.at(d,u);f.terrain="rock",f.prop=e.palette.prop}const c={1:null,2:"spikes",3:"poison",4:"water",5:"lava"}[e.tier];if(c&&i.chance(.8)){const l=i.int(1,3);for(let d=0;d<l;d++){const u=i.int(2,n-3),f=i.int(3,n-4);for(let h=-1;h<=1;h++)for(let g=-1;g<=1;g++)if(i.chance(.65)){const v=a.at(u+g,f+h);v&&v.terrain==="ground"&&v.h<=1&&(v.terrain=c,v.h=0)}}}if(e.tier<=3&&i.chance(.4)){const l=i.int(2,n-3),d=i.int(3,n-4);for(let u=0;u<=1;u++)for(let f=-1;f<=1;f++){const h=a.at(l+f,d+u);h&&h.terrain==="ground"&&h.h===0&&(h.terrain="water")}}return wv(a),a}function wv(i){const e=Av(i,Math.floor(i.w/2),Math.floor(i.h/2));if(!e)return;const t=new Set([`${e.x},${e.y}`]),n=[e];for(;n.length;){const a=n.pop();for(const s of i.neighbors4(a.x,a.y)){const r=`${s.x},${s.y}`;!t.has(r)&&!fn[s.terrain].blocked&&(t.add(r),n.push(s))}}for(let a=0;a<i.h;a++)for(let s=0;s<i.w;s++){const r=i.at(s,a);if(!fn[r.terrain].blocked&&!t.has(`${s},${a}`))for(const o of i.neighbors4(s,a))fn[o.terrain].blocked&&(o.terrain="ground",o.prop=null)}}function Av(i,e,t){for(let n=0;n<Math.max(i.w,i.h);n++)for(let a=-n;a<=n;a++)for(let s=-n;s<=n;s++){const r=i.at(e+s,t+a);if(r&&!fn[r.terrain].blocked)return r}return null}function Ll(i,e,t,{maxCost:n=null,ignoreUnits:a=!1}={}){const s=e._flying,r=e._phasing,o=n??e._speed,c=`${e.pos.x},${e.pos.y}`,l=new Map([[c,0]]),d=new Map,u=[[0,e.pos.x,e.pos.y]];for(;u.length;){u.sort((p,b)=>p[0]-b[0]);const[h,g,v]=u.shift();if(h>(l.get(`${g},${v}`)??1/0)||h>=o)continue;const m=i.at(g,v);for(const p of i.neighbors4(g,v)){const b=fn[p.terrain];if(b.blocked&&!s)continue;const y=t.get(`${p.x},${p.y}`);if(y&&y!==e&&!a&&!(y.side===e.side)&&!r&&!s)continue;let _=s?1:b.cost;if(!s){const T=p.h-m.h;if(T>2)continue;T>0&&(_+=T)}const L=h+_;if(L>o)continue;const C=`${p.x},${p.y}`;L<(l.get(C)??1/0)&&(l.set(C,L),d.set(C,`${g},${v}`),u.push([L,p.x,p.y]))}}const f=new Map;for(const[h,g]of l){if(h===c)continue;const[v,m]=h.split(",").map(Number);if(t.get(h))continue;const p=[];let b=h;for(;b&&b!==c;){const[y,_]=b.split(",").map(Number);p.unshift({x:y,y:_}),b=d.get(b)}f.set(h,{cost:g,path:p,x:v,y:m})}return f}function Il(i,e,t,n=1){const a=[];for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){if(r===0&&s===0)continue;const o=i.at(e.x+r,e.y+s);o&&!fn[o.terrain].blocked&&!t.get(`${o.x},${o.y}`)&&a.push(o)}return a}function kd(i,e,t,n){const a=[];let s=e.x,r=e.y;for(let o=0;o<n;o++){s+=t.x,r+=t.y;const c=i.at(s,r);if(!c||(a.push(c),fn[c.terrain].blocked))break}return a}function zd(i,e,t){const n=e.map(t),a=i.weighted(n);return e[a]}function Nr(i,e,t){const n=Vs.filter(r=>r.tier<=t),a=[],s=new Set;for(let r=0;r<e;r++)for(let o=0;o<10;o++){const c=zd(i,n,l=>l.weight);if(!s.has(c.id)){s.add(c.id),a.push(c);break}}return a}function Ul(i,e,t){return e<=3?0:e<=5?i.chance(.35)?1:0:e<=15?i.int(0,1)+(i.chance(.25)?1:0):e<=30?i.int(0,2):e<=Wn?i.int(1,2)+(i.chance(.2)?1:0):i.int(2,3)}function Or(i){return i<=8?1:i<=22?2:3}function Tv(i,e,t){const n=Bd(e),a=Mv(e)&&e<=Wn,s=Sv(e),r=e>Wn,o=r?Math.floor((e-Wn-1)/Wn)+1:0,c=r?{hpScale:1+o*.35,dmgScale:1+o*.2,xpScale:1+o*.5}:{},l=[];if(a){const d=pa.get(n.boss),u=e>=20?Nr(i,1,Or(e)):[],f=Ua(i,d,u,c);f.isBoss=!0,l.push(f);for(const h of n.bossMinions??[]){const g=pa.get(h);g&&l.push(Ua(i,g,Nr(i,Ul(i,e),Or(e)),c))}}else{const d=Math.max(1,n.tier-(s>.5?1:2)),u=fa.filter(y=>!y.boss&&n.families.includes(y.family)&&y.tier<=n.tier&&y.tier>=d),f=fa.filter(y=>!y.boss&&y.tier<=n.tier&&y.tier>=d),h=u.length>=3?u:f,g=e<=4?.75:1,v=Math.round((40+e*26)*(1+t*.06)*(.85+s*.4)*g),m=Or(e);let p=0,b=0;for(;l.length<8&&b++<30;){const y=v-p,_=h.filter(P=>P.xp<=y);if(!_.length&&l.length>=2)break;const L=[...h].sort((P,H)=>P.xp-H.xp).slice(0,Math.max(3,Math.floor(h.length/3))),C=_.length?_:L,T=zd(i,C,P=>{const H=P.tier===n.tier?.4+s:1,B=P.xp<=y*.8?1:P.xp<=y?.6:.05;return H*B*10}),R=Ul(i,e),E=Nr(i,R,m),M=Ua(i,T,E,c);if(l.push(M),p+=M.xp,p>=v&&l.length>=2)break}}return{zone:n,boss:a,enemies:l,endless:r}}function Cv(i,e,t,n){const a=(c,l,d)=>{const u=e.at(c,l);return u&&!fn[u.terrain].blocked&&!fn[u.terrain].hazard&&!d.has(`${c},${l}`)},s=new Set;e:for(let c=e.h-2;c>=0;c--)for(const l of Rv(e.w))if(a(l,c,s)){t.pos={x:l,y:c},s.add(`${l},${c}`);break e}const r=[];for(let c=0;c<Math.ceil(e.h*.55);c++)for(let l=0;l<e.w;l++)a(l,c,s)&&r.push({x:l,y:c});const o=i.shuffle(r);for(const c of n){const l=o.pop();if(!l){for(let d=0;d<e.h;d++)for(let u=0;u<e.w;u++)if(a(u,d,s)){c.pos={x:u,y:d},s.add(`${u},${d}`);break}continue}c.pos={x:l.x,y:l.y},s.add(`${l.x},${l.y}`)}}function Rv(i){const e=Math.floor(i/2),t=[e];for(let n=1;n<=e+1;n++)e-n>=0&&t.push(e-n),e+n<i&&t.push(e+n);return t}function sn(i,e,t,n=2,a=null){const s=pn(t);if(e.conditionImmunities?.has(t))return i.log(`${e.name} é imune a ${s.pt}!`,"info"),!1;const r=e.conditions.get(t),o=Math.max(n,r?.duration??0);return e.conditions.set(t,{duration:o,source:a}),i.event({type:"condition",unitId:e.id,condition:t,on:!0}),i.log(`${e.name} está ${s.pt}! (${o} turnos)`,"condition"),!0}function Br(i,e,t){e.conditions.delete(t)&&i.event({type:"condition",unitId:e.id,condition:t,on:!1})}function Pv(i){let e=0;for(const[t]of i.conditions){const n=pn(t);e+=n.attackAdv??0}return e}function Dv(i){let e=0;for(const[t]of i.conditions){const n=pn(t);e+=n.advAgainst??0}return e}function Hd(i){let e=i.ac;for(const[t]of i.conditions){const n=pn(t);e+=n.acBonus??0}return e}function Lv(i){let e=i.speed,t=1;for(const[n]of i.conditions){const a=pn(n);if(a.preventsMove)return 0;t*=a.speedMult??1}return Math.max(0,Math.floor(e*t))}function Fl(i){for(const[e]of i.conditions)if(pn(e).preventsAction)return!1;return!0}function Mn(i,e,t,n){const{value:s}=Gs(i.rng,0),r=Ri(e[t]??10)+tc(e,"saveBonus","value"),o=s+r,c=o>=n;return i.log(`${e.name} — teste de ${t.toUpperCase()}: ${s}+${r}=${o} vs CD${n} → ${c?"sucesso":"falha"}`,"roll"),c}function Hn(i,e,t,n=null,{isMelee:a=!1}={}){if(e.hp<=0)return{total:0,died:!1};let s=0;const r=[];for(const c of t){const{final:l,factor:d}=H0(c.amount,c.type,e);s+=l,r.push({...c,final:l,factor:d})}if(e.hp=Math.max(0,e.hp-s),i.event({type:"damage",unitId:e.id,amount:s,packets:r,sourceId:n?.id??null,hpAfter:e.hp}),s>0){const c=r.filter(l=>l.final>0).map(l=>`${l.final} ${l.type}${l.factor===.5?" (resistiu)":l.factor===2?" (vulnerável!)":""}`);i.log(`→ ${e.name} sofre ${s} de dano (${c.join(" + ")}). [${e.hp}/${e.maxHp} PV]`,"damage")}else i.log(`→ ${e.name} não sofre dano (imune).`,"info");let o=!1;if(e.hp<=0)o=!0,Iv(i,e,n);else if(n&&s>0){for(const c of _t(e,"rageBelow"))e.hp<=e.maxHp*c.threshold&&!e._raging&&(e._raging=!0,e.dmgFlat=(e.dmgFlat??0)+c.dmgBonus,e.ac-=c.acPenalty??0,i.log(`${e.name} entra em FÚRIA!`,"special"),i.event({type:"rage",unitId:e.id}));for(const c of _t(e,"blinkOnHit"))i.rng.chance(c.chance)&&i.battle&&i.battle.blinkAway(e,c.range??3)}return{total:s,died:o,detail:r}}function ai(i,e,t){if(e.hp<=0)return 0;const n=Math.min(t,e.maxHp-e.hp);return e.hp+=n,n>0&&(i.event({type:"heal",unitId:e.id,amount:n,hpAfter:e.hp}),i.log(`${e.name} recupera ${n} PV.`,"heal")),n}function Iv(i,e,t){e.alive=!1,i.log(`💀 ${e.name} foi derrotado!`,"death"),i.event({type:"death",unitId:e.id,killerId:t?.id??null});for(const n of _t(e,"onDeathExplode"))i.battle?.explodeAt(e,n);for(const n of _t(e,"onDeathCurse"))t&&t.alive&&sn(i,t,n.condition,n.duration??2,e);for(const n of _t(e,"onDeathHealAllies"))i.battle?.deathHealAllies(e,n);for(const n of _t(e,"onDeathSplit"))i.battle?.splitOnDeath(e,n);if(t&&t.alive)for(const n of _t(t,"killHeal"))ai(i,t,Tt(i.rng,n.dice).total);i.battle?.onUnitDeath(e,t)}function Vd(i,e,t,n={}){let a=0;return a+=Pv(e),a+=Dv(t),n.advantage&&(a+=1),n.disadvantage&&(a-=1),wi(e,"packTactics")&&i.battle?.allyAdjacentTo(e,t)&&(a+=1),wi(t,"evasive")&&(a-=1),Math.sign(a)}function Gd(i,e){const t=e.finesse?Math.max(i.str??10,i.dex??10):i[e.ability??"str"]??10;return Ri(t)+K0(i.level??i.tier*2)+(e.toHitBonus??0)+tc(i,"accuracy","value")}function Wd(i,e){const t=e.finesse?Math.max(i.str??10,i.dex??10):i[e.ability??"str"]??10;return Ri(t)+(i.dmgFlat??0)}function Uv(i,e,t,n,a={}){const s=Gd(e,n),r=Hd(t),o=Vd(i,e,t,a);let c=Math.min(.95,Math.max(.05,(21+s-r)/20));o>0?c=1-(1-c)**2:o<0&&(c=c**2);const{count:l,sides:d,bonus:u}=ec(n.dice),f=l*(d+1)/2+u+Wd(e,n);return{pHit:c,avgDamage:Math.round(f*(e.dmgMult??1)),adv:o}}function Si(i,e,t,n,a={}){const s=Vd(i,e,t,a);let o=Gs(i.rng,s).value;o===1&&wi(e,"rerollOnes")&&(o=Gs(i.rng,0).value,i.log(`${e.name} é sortudo e rerola o 1! → ${o}`,"roll"));const c=Gd(e,n);let l=0;for(const[T]of e.conditions){const R=pn(T);if(R.attackBonusDice){const E=R.attackBonusDice,M=E.startsWith("-"),P=Tt(i.rng,M?E.slice(1):E);l+=M?-P.total:P.total}}const d=o+c+l,u=Hd(t),f=Math.min(..._t(e,"critRange").map(T=>T.min),20),h=o>=f&&!wi(t,"sturdy"),g=o===1||!h&&d<u;if(i.event({type:"attack",attackerId:e.id,defenderId:t.id,attackName:n.pt,natural:o,total:d,ac:u,hit:!g,crit:h,adv:s}),g)return i.log(`${e.name} ataca ${t.name} com ${n.pt}: ${o}+${c+l}=${d} vs CA${u} → ERROU!`,"miss"),{hit:!1,crit:!1,damage:0};for(const T of _t(t,"dodge"))if(i.rng.chance(T.chance))return i.log(`${t.name} ESQUIVA do golpe!`,"miss"),i.event({type:"dodge",unitId:t.id}),{hit:!1,crit:!1,damage:0,dodged:!0};const v=[],m=_t(e,"elementConvert")[0],p=m?m.element:n.dtype;let y=Tt(i.rng,n.dice,{crit:h}).total+Wd(e,n);for(const T of _t(e,"executioner"))t.hp<=t.maxHp*T.threshold&&(y+=T.dmgBonus);for(const T of _t(e,"firstBlood"))t.hp>=t.maxHp&&(y+=T.dmgBonus);for(const T of _t(e,"loneWolf"))i.battle&&!i.battle.hasAdjacentAlly(e)&&(y+=T.dmgBonus);y=Math.max(1,Math.round(y*(e.dmgMult??1))),v.push({amount:y,type:p});for(const T of _t(e,"extraDamage")){if(T.chance!=null&&!i.rng.chance(T.chance))continue;const R=Tt(i.rng,T.dice,{crit:h});v.push({amount:R.total,type:T.element})}for(const T of n.extraDamage??[]){const R=Tt(i.rng,T.dice,{crit:h});v.push({amount:R.total,type:T.element})}const _=h?" 💥 CRÍTICO!":"";i.log(`${e.name} acerta ${t.name} com ${n.pt}: ${o}+${c+l}=${d} vs CA${u}.${_}`,h?"crit":"hit");const L=(n.range??1)<=1,C=Hn(i,t,v,e,{isMelee:L});if(t.alive){const T=[...n.riders??[],..._t(e,"riderCondition")];for(const R of T){if(R.chance!=null&&!i.rng.chance(R.chance))continue;Mn(i,t,R.save??"con",R.dc??12)||sn(i,t,R.condition,R.duration??2,e)}}for(const T of _t(e,"lifesteal")){const R=Math.floor(C.total*T.fraction);R>0&&(ai(i,e,R),i.log(`${e.name} drena ${R} PV!`,"special"))}if(L&&t.alive!==!1)for(const T of _t(t,"thorns")){const R=Tt(i.rng,T.dice);i.log(`${t.name} reflete ${R.total} de dano (espinhos)!`,"special"),Hn(i,e,[{amount:R.total,type:T.element??"perfurante"}],t)}return{hit:!0,crit:h,damage:C.total,died:C.died}}function Fv(i,e){const t=i.ctx,n=i.hero;if(!n.alive||i.state!=="active")return;if(e.behavior==="preguicoso"&&i.rng.chance(.25)){t.log(`${e.name} boceja, sem vontade de lutar.`,"info");return}if(e.behavior==="covarde"&&e.hp<e.maxHp*.3){Nl(i,e,n.pos),As(i,e,n);return}if(e.specials?.length&&Nv(i,e))return;const a=e.attacks[0],s=i.attackRange(e,a),r=e.behavior==="atirador"?Math.max(2,s):Math.min(s,e._reach);if(e.behavior==="guardiao"){const o=i.alliesOf(e).sort((c,l)=>c.hp/c.maxHp-l.hp/l.maxHp)[0];if(o&&Ue(e.pos,o.pos)>2&&Ue(e.pos,n.pos)>s){kr(i,e,o.pos,1),As(i,e,n);return}}if(e.behavior==="atirador"){const o=Ue(e.pos,n.pos);o<2?Nl(i,e,n.pos,Math.min(e.movementLeft,3)):o>s&&kr(i,e,n.pos,r),As(i,e,n);return}Ue(e.pos,n.pos)>r&&kr(i,e,n.pos,r),As(i,e,n)}function As(i,e,t){if(i.state!=="active"||!e.alive||!t.alive)return!1;const n=e.attacks[0];if(!i.targetsInRange(e,n).includes(t))return!1;const s=e.attacksPerAction??1;for(let r=0;r<s&&!(!t.alive||i.state!=="active"||!e.alive);r++){const o=i.heightAdvantage(e,t),c=(n.range??1)>1&&Ue(e.pos,t.pos)<=1;Si(i.ctx,e,t,{...n,toHitBonus:(n.toHitBonus??0)+o},{disadvantage:c})}return i.checkEnd(),!0}function kr(i,e,t,n){const a=i.reachableFor(e);let s=null;const r=Ue(e.pos,t);let o=Math.abs(r-n)*100;for(const[,c]of a){const l=Ue({x:c.x,y:c.y},t),d=i.grid.at(c.x,c.y),u=!e._flying&&d&&["lava","poison","spikes"].includes(d.terrain)?50:0,f=d?-d.h*2:0,h=Math.abs(l-n)*100+c.cost+u+f;h<o&&(o=h,s=c)}s&&(e.movementLeft-=s.cost,i.moveUnit(e,s.path))}function Nl(i,e,t,n=null){const a=i.reachableFor(e);let s=null,r=Ue(e.pos,t);for(const[,o]of a){if(n!=null&&o.cost>n)continue;const c=Ue({x:o.x,y:o.y},t);c>r&&(r=c,s=o)}s&&(i.ctx.log(`${e.name} recua!`,"info"),e.movementLeft-=s.cost,i.moveUnit(e,s.path))}function Nv(i,e){const t=i.ctx,n=i.hero;for(const a of e.specials){if(e.cooldowns.has(`sp:${a.pt}`)||a.uses!=null&&(a._usesLeft??a.uses)<=0)continue;const s=Ue(e.pos,n.pos),r=i.alliesOf(e),o=()=>{e.cooldowns.set(`sp:${a.pt}`,(a.cooldown??3)+1),a.uses!=null&&(a._usesLeft=(a._usesLeft??a.uses)-1),t.event({type:"enemyAbility",unitId:e.id,pt:a.pt,kind:a.kind})};switch(a.kind){case"heal":{const c=[e,...r].filter(l=>l.hp<l.maxHp*.55).filter(l=>Ue(e.pos,l.pos)<=(a.range??4)).sort((l,d)=>l.hp/l.maxHp-d.hp/d.maxHp)[0];if(!c)continue;return o(),t.log(`${e.name} usa ${a.pt}!`,"ability"),ai(t,c,Tt(i.rng,a.dice).total),!0}case"buff":{if(r.length<1)continue;const c=[...r,e].filter(l=>!l.conditions.has(a.condition)).filter(l=>Ue(e.pos,l.pos)<=(a.range??4)).sort((l,d)=>d.maxHp-l.maxHp)[0];if(!c)continue;return o(),t.log(`${e.name} usa ${a.pt}!`,"ability"),sn(t,c,a.condition,a.duration??3,e),!0}case"debuff":{if(s>(a.range??4)||n.conditions.has(a.condition))continue;return o(),t.log(`${e.name} usa ${a.pt} contra Frosty!`,"ability"),Mn(t,n,a.save??"wis",a.dc??12)||sn(t,n,a.condition,a.duration??2,e),!0}case"blast":{if(s>(a.range??4))continue;const c=r.filter(d=>Ue(d.pos,n.pos)<=(a.radius??1)).length;if(e.int>6&&c>1)continue;o(),t.log(`${e.name} usa ${a.pt}!`,"ability"),t.event({type:"blast",x:n.pos.x,y:n.pos.y,radius:a.radius??1,element:a.dtype});const l=[n,...r.filter(d=>Ue(d.pos,n.pos)<=(a.radius??1))];for(const d of l){if(!d.alive||Ue(d.pos,n.pos)>(a.radius??1))continue;const u=Tt(i.rng,a.dice),f=Mn(t,d,a.save??"dex",a.dc??12);if(Hn(t,d,[{amount:f?Math.floor(u.total/2):u.total,type:a.dtype}],e),d.alive&&!f)for(const h of a.riders??[])h.chance!=null&&!i.rng.chance(h.chance)||Mn(t,d,h.save??"con",h.dc??12)||sn(t,d,h.condition,h.duration??2,e)}return i.checkEnd(),!0}case"smite":{if(s>(a.range??1))continue;return o(),t.log(`${e.name} usa ${a.pt}!`,"ability"),Si(t,e,n,{pt:a.pt,dice:a.dice,dtype:a.dtype,range:a.range,riders:a.riders}),i.checkEnd(),!0}case"summon":{if(i.livingEnemies().length>=9||i.round<2)continue;return o(),i.spawnSummons(e,a),!0}}}return!1}class Ov{constructor({hero:e,enemies:t,grid:n,rng:a,battleIndex:s=1,zone:r=null}){this.hero=e,this.units=[e,...t],this.grid=n,this.rng=a,this.battleIndex=s,this.zone=r,this.round=0,this.state="setup",this.events=[],this.logLines=[],this.turnOrder=[],this.activeIdx=-1,this.xpEarned=0,this.goldEarned=0,this.killCount=0,this.potionUsedThisTurn=!1,this.ctx={rng:this.rng,battle:this,log:(o,c="info")=>{this.logLines.push({msg:o,cls:c}),this.events.push({type:"log",msg:o,cls:c})},event:o=>this.events.push(o)}}occupiedMap(){const e=new Map;for(const t of this.units)t.alive&&e.set(`${t.pos.x},${t.pos.y}`,t);return e}refreshDerived(e){e._flying=wi(e,"flying"),e._phasing=e._flying||wi(e,"phasing"),e._slippery=wi(e,"slippery"),e._reach=Math.max(1,..._t(e,"reach").map(t=>t.value)),e._speed=Lv(e)}start(){for(const e of this.units){this.refreshDerived(e);for(const n of _t(e,"startWounded"))e.hp=Math.max(1,Math.floor(e.maxHp*n.fraction));const t=Gs(this.rng).value+Ri(e.dex)+tc(e,"initiativeBonus","value");e.initiative=t+(e.kind==="hero"?.5:0)}this.turnOrder=[...this.units].sort((e,t)=>t.initiative-e.initiative),this.state="active",this.round=1,this.ctx.event({type:"battleStart",battleIndex:this.battleIndex}),this.ctx.log(`⚔️ Batalha ${this.battleIndex} — ${this.zone?.pt??""}`,"title"),this.nextTurn()}get activeUnit(){return this.turnOrder[this.activeIdx]??null}isPlayerTurn(){return this.state==="active"&&this.activeUnit?.kind==="hero"}nextTurn(){if(this.state==="active")for(let e=0;e<this.turnOrder.length+1;e++){if(this.activeIdx++,this.activeIdx>=this.turnOrder.length){if(this.activeIdx=-1,this.round++,this.round>150){this.state="defeat",this.ctx.log("A batalha se arrasta sem fim — Frosty recua para se reagrupar.","death"),this.ctx.event({type:"defeat"});return}this.ctx.event({type:"roundStart",round:this.round}),this.nextTurn();return}const t=this.activeUnit;if(t&&t.alive){this.beginTurn(t);return}}}beginTurn(e){this.refreshDerived(e),e.movementLeft=e._speed,e.actionsLeft=1,e.reactionUsed=!1,this.potionUsedThisTurn=!1,this.ctx.event({type:"turnStart",unitId:e.id,round:this.round});for(const t of _t(e,"regen"))e.hp<e.maxHp&&ai(this.ctx,e,Tt(this.rng,t.dice).total);for(const[t,n]of[...e.conditions]){const a=pn(t);if(a.tickDamage){const s=Tt(this.rng,a.tickDamage.dice);if(this.ctx.log(`${e.name} sofre com ${a.pt}.`,"condition"),Hn(this.ctx,e,[{amount:s.total,type:a.tickDamage.type}],n.source),!e.alive){this.state==="active"&&this.endTurnFor(e);return}}a.tickHeal&&ai(this.ctx,e,Tt(this.rng,a.tickHeal).total)}if(this.applyTileHazard(e,!1),!e.alive){this.state==="active"&&this.endTurnFor(e);return}for(const t of this.units)if(!(!t.alive||t.side===e.side)){for(const n of _t(t,"auraDamage"))if(Ue(e.pos,t.pos)<=n.radius){const a=Tt(this.rng,n.dice);if(this.ctx.log(`${e.name} é atingido pela aura de ${t.name}!`,"special"),Hn(this.ctx,e,[{amount:a.total,type:n.element}],t),!e.alive){this.state==="active"&&this.endTurnFor(e);return}}for(const n of _t(t,"auraSlow"))Ue(e.pos,t.pos)<=n.radius&&!e.conditions.has("lento")&&sn(this.ctx,e,"lento",1,t)}this.refreshDerived(e),e.movementLeft=e._speed;for(const[t,n]of[...e.cooldowns])n<=1?e.cooldowns.delete(t):e.cooldowns.set(t,n-1);if(!Fl(e)){this.ctx.log(`${e.name} não consegue agir!`,"condition"),this.endTurnFor(e);return}e.kind!=="hero"&&(Fv(this,e),this.state==="active"&&this.endTurnFor(e))}endTurnFor(e){if(this.state==="active"){for(const[t,n]of[...e.conditions]){const a=pn(t);let s=!1;a.saveEnds&&e.alive&&Mn(this.ctx,e,a.saveEnds.ability,a.saveEnds.dc)&&(Br(this.ctx,e,t),this.ctx.log(`${e.name} se livra de ${a.pt}!`,"info"),s=!0),s||(n.duration--,n.duration<=0&&Br(this.ctx,e,t))}this.ctx.event({type:"turnEnd",unitId:e.id}),this.nextTurn()}}afterAction(){if(this.checkEnd(),this.state!=="active")return;const e=this.activeUnit;e&&(!e.alive||e.kind!=="hero"&&e.actionsLeft<=0)}livingEnemies(e="enemy"){return this.units.filter(t=>t.alive&&t.side===e)}alliesOf(e){return this.units.filter(t=>t.alive&&t.side===e.side&&t!==e)}opponentsOf(e){return this.units.filter(t=>t.alive&&t.side!==e.side)}hasAdjacentAlly(e){return this.alliesOf(e).some(t=>Ue(t.pos,e.pos)<=1)}allyAdjacentTo(e,t){return this.units.some(n=>n.alive&&n!==e&&n.side===e.side&&Ue(n.pos,t.pos)<=1)}unitAt(e,t){return this.units.find(n=>n.alive&&n.pos.x===e&&n.pos.y===t)??null}reachableFor(e){return Ll(this.grid,e,this.occupiedMap(),{maxCost:e.movementLeft})}attackRange(e,t){return Math.max(t.range??1,(t.range??1)<=1?e._reach:t.range)}targetsInRange(e,t){const n=this.attackRange(e,t);return this.opponentsOf(e).filter(a=>!(Ue(e.pos,a.pos)>n||n<=e._reach&&!e._flying&&!a._flying&&Math.abs(this.grid.at(e.pos.x,e.pos.y).h-this.grid.at(a.pos.x,a.pos.y).h)>2))}heightAdvantage(e,t){const n=this.grid.at(e.pos.x,e.pos.y).h,a=this.grid.at(t.pos.x,t.pos.y).h;return n>a?2:0}previewFor(e,t,n){return Uv(this.ctx,e,t,n,{})}moveUnit(e,t,{provokes:n=!0}={}){if(!t.length)return!0;const a=[];let s={...e.pos};for(const r of t){if(n&&!e._slippery)for(const o of this.opponentsOf(e)){if(o.reactionUsed||!o.alive||!o.attacks?.length)continue;const c=o._reach??1,l=Ue(s,o.pos)<=c,d=Ue(r,o.pos)<=c;if(l&&!d&&Fl(o)&&(o.reactionUsed=!0,this.ctx.log(`${o.name} aproveita a brecha — ataque de oportunidade!`,"special"),this.ctx.event({type:"oa",attackerId:o.id,defenderId:e.id}),Si(this.ctx,o,e,o.attacks[0]),!e.alive))return this.checkEnd(),!1}if(s={...r},e.pos={x:r.x,y:r.y},a.push({x:r.x,y:r.y}),!this.applyTileHazard(e,!0))return this.ctx.event({type:"move",unitId:e.id,path:a}),this.checkEnd(),!1}return this.ctx.event({type:"move",unitId:e.id,path:a}),!0}applyTileHazard(e,t){if(e._flying)return!0;const n=this.grid.at(e.pos.x,e.pos.y),a=fn[n.terrain].hazard;if(!a||a.onEnterOnly&&!t)return!0;const s=Tt(this.rng,a.dice);return this.ctx.log(`${e.name} sofre com o terreno (${n.terrain})!`,"condition"),this.ctx.event({type:"hazard",unitId:e.id,terrain:n.terrain}),Hn(this.ctx,e,[{amount:s.total,type:a.type}]),e.alive&&a.rider&&!Mn(this.ctx,e,a.rider.save,a.rider.dc)&&sn(this.ctx,e,a.rider.condition,2),e.alive||this.checkEnd(),e.alive}playerMove(e){if(!this.isPlayerTurn())return!1;const t=this.hero,a=this.reachableFor(t).get(e);if(!a)return!1;t.movementLeft-=a.cost;const s=this.moveUnit(t,a.path);return this.checkEnd(),s}playerAttack(e){if(!this.isPlayerTurn())return!1;const t=this.hero;if(t.actionsLeft<=0)return!1;const n=this.units.find(s=>s.id===e&&s.alive);if(!n||!this.targetsInRange(t,t.attacks[0]).includes(n))return!1;t.actionsLeft--;const a=t.attacksPerAction;for(let s=0;s<a&&!(!n.alive||this.state!=="active");s++){const r=this.heightAdvantage(t,n);Si(this.ctx,t,n,{...t.attacks[0],toHitBonus:(t.attacks[0].toHitBonus??0)+r})}return this.checkEnd(),!0}playerAbility(e,t){if(!this.isPlayerTurn())return!1;const n=this.hero;if(n.cooldowns.has(e.id)||e.usesPerBattle&&(n.usesLeft.get(e.id)??e.usesPerBattle)<=0||!e.freeAction&&!e.isMovement&&n.actionsLeft<=0)return!1;const a=()=>{if(e.cooldown>0&&n.cooldowns.set(e.id,e.cooldown+1),e.usesPerBattle){const s=n.usesLeft.get(e.id)??e.usesPerBattle;n.usesLeft.set(e.id,s-1)}!e.freeAction&&!e.isMovement&&n.actionsLeft--,this.ctx.event({type:"ability",unitId:n.id,abilityId:e.id,pt:e.pt})};switch(e.kind){case"attack":{const s=t;if(!s?.alive||Ue(n.pos,s.pos)>(e.range??1))return!1;a(),this.ctx.log(`Frosty usa ${e.pt}!`,"ability");const r={...n.attacks[0],pt:e.pt};e.bonusElemental&&(r.extraDamage=[...r.extraDamage??[],e.bonusElemental]),e.riders&&(r.riders=[...r.riders??[],...e.riders]);const o=this.heightAdvantage(n,s);Si(this.ctx,n,s,{...r,toHitBonus:o},{});break}case"charge":{const s=t;if(!s?.alive)return!1;const r=Ll(this.grid,n,this.occupiedMap(),{maxCost:e.range});let o=null;for(const[,c]of r)Ue(c,s.pos)<=1&&(!o||c.cost<o.cost)&&(o=c);if(!o&&Ue(n.pos,s.pos)>1)return!1;if(a(),this.ctx.log(`Frosty INVESTE contra ${s.name}!`,"ability"),o&&this.moveUnit(n,o.path,{provokes:!1}),n.alive&&s.alive){const c={...n.attacks[0],pt:e.pt};e.bonusDice&&(c.extraDamage=[...c.extraDamage??[],{dice:e.bonusDice,element:n.attacks[0].dtype}]),Si(this.ctx,n,s,c,{advantage:e.advantage})}break}case"aoe":{a(),this.ctx.log(`Frosty usa ${e.pt}!`,"ability"),this.ctx.event({type:"blast",x:n.pos.x,y:n.pos.y,radius:e.radius,element:e.dtype??"gelo"});const s=this.opponentsOf(n).filter(r=>Ue(n.pos,r.pos)<=e.radius);for(const r of s)if(r.alive){if(e.noDamage)for(const o of e.riders??[])Mn(this.ctx,r,o.save,o.dc)||sn(this.ctx,r,o.condition,o.duration,n);else if(e.weaponMult){const o={...n.attacks[0],pt:e.pt};Si(this.ctx,n,r,o,{})}else if(e.dice){const o=Tt(this.rng,e.dice),c=Mn(this.ctx,r,"dex",14),l=c?Math.floor(o.total/2):o.total;if(Hn(this.ctx,r,[{amount:l,type:e.dtype}],n),r.alive&&!c)for(const d of e.riders??[])d.chance!=null&&!this.rng.chance(d.chance)||Mn(this.ctx,r,d.save,d.dc)||sn(this.ctx,r,d.condition,d.duration,n)}}break}case"line":{const s=t?.dir;if(!s)return!1;a(),this.ctx.log(`Frosty usa ${e.pt}!`,"ability");const r=kd(this.grid,n.pos,s,e.range);this.ctx.event({type:"lineBlast",from:{...n.pos},tiles:r.map(o=>({x:o.x,y:o.y})),element:e.dtype});for(const o of r){const c=this.unitAt(o.x,o.y);if(!c||c.side===n.side||!c.alive)continue;const l=Tt(this.rng,e.dice),d=Mn(this.ctx,c,"dex",14);if(Hn(this.ctx,c,[{amount:d?Math.floor(l.total/2):l.total,type:e.dtype}],n),c.alive)for(const u of e.riders??[])Mn(this.ctx,c,u.save,u.dc)||sn(this.ctx,c,u.condition,u.duration,n)}break}case"self":{if(a(),this.ctx.log(`Frosty usa ${e.pt}!`,"ability"),e.healDice){let s=Tt(this.rng,e.healDice).total;e.healLevelBonus&&(s+=this.hero.level),this.heroState?.healDouble&&(s*=2),ai(this.ctx,n,s)}e.condition&&sn(this.ctx,n,e.condition,e.duration??2,n);for(const s of e.selfConditions??[])sn(this.ctx,n,s.condition,s.duration,n);e.grantsExtraAction&&(n.actionsLeft+=1,this.ctx.log("Frosty ganha uma ação extra!","special"));break}case"move":{const s=t?.key;if(!s)return!1;const[r,o]=s.split(",").map(Number),c=this.grid.at(r,o);if(!c||fn[c.terrain].blocked||this.occupiedMap().get(s)||Ue(n.pos,{x:r,y:o})>(this.heroState?.wingRange??e.range))return!1;a(),n.cooldowns.set(e.id,(this.heroState?.wingCooldown??e.cooldown)+1),this.ctx.log("Frosty abre as asas e salta pelos céus!","ability"),this.ctx.event({type:"wingJump",unitId:n.id,from:{...n.pos},to:{x:r,y:o}}),n.pos={x:r,y:o},this.applyTileHazard(n,!0);break}default:return!1}return this.checkEnd(),!0}playerUsePotion(e){if(!this.isPlayerTurn()||this.potionUsedThisTurn)return!1;const t=this.heroState;if(!t||(t.potions[e]??0)<=0)return!1;const n=ra[e];if(t.potions[e]--,this.potionUsedThisTurn=!0,this.ctx.log(`Frosty bebe ${n.pt}!`,"ability"),this.ctx.event({type:"potion",potionId:e}),n.healDice&&ai(this.ctx,this.hero,Tt(this.rng,n.healDice).total),n.condition&&sn(this.ctx,this.hero,n.condition,n.duration,this.hero),n.cleanse){for(const a of sv)Br(this.ctx,this.hero,a);this.ctx.log("Todas as condições negativas foram removidas!","heal")}return!0}playerEndTurn(){return this.isPlayerTurn()?(this.endTurnFor(this.hero),!0):!1}explodeAt(e,t){this.ctx.log(`${e.name} EXPLODE!`,"special"),this.ctx.event({type:"blast",x:e.pos.x,y:e.pos.y,radius:t.radius,element:t.element});for(const n of this.units)if(!(!n.alive||n===e)&&Ue(e.pos,n.pos)<=t.radius){const a=Tt(this.rng,t.dice);Hn(this.ctx,n,[{amount:a.total,type:t.element}],e)}}splitOnDeath(e,t){const n=Il(this.grid,e.pos,this.occupiedMap()),a=pa.get(e.baseId);if(!a)return;let s=0;for(let r=0;r<t.count&&r<n.length;r++){const o=(e.adjectives??[]).filter(l=>!l.effects.some(d=>d.type==="onDeathSplit")),c=Ua(this.rng,a,o,{});c.maxHp=Math.max(1,Math.floor(e.maxHp*t.hpFraction)),c.hp=c.maxHp,c.effects=c.effects.filter(l=>l.type!=="onDeathSplit"),c.xp=Math.floor(e.xp*.25),c.goldValue=Math.floor(e.goldValue*.25),c.pos={x:n[r].x,y:n[r].y},c.name=`${e.baseName} Dividido`,e.gender==="f"&&(c.name=`${e.baseName} Dividida`),this.refreshDerived(c),this.units.push(c),this.turnOrder.push(c),s++,this.ctx.event({type:"summon",unitId:c.id,x:c.pos.x,y:c.pos.y,summon:Ol(c)})}s&&this.ctx.log(`${e.name} se divide em ${s}!`,"special")}deathHealAllies(e,t){for(const n of this.alliesOf(e))Ue(e.pos,n.pos)<=t.radius&&ai(this.ctx,n,Tt(this.rng,t.dice).total)}blinkAway(e,t){const n=this.occupiedMap(),a=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){const c=this.grid.at(e.pos.x+o,e.pos.y+r);c&&!fn[c.terrain].blocked&&!n.get(`${c.x},${c.y}`)&&a.push(c)}if(!a.length)return;const s=this.rng.pick(a);this.ctx.log(`${e.name} pisca para outro lugar!`,"special"),this.ctx.event({type:"blink",unitId:e.id,from:{...e.pos},to:{x:s.x,y:s.y}}),e.pos={x:s.x,y:s.y}}spawnSummons(e,t){const n=pa.get(t.summonId);if(!n)return 0;const a=Il(this.grid,e.pos,this.occupiedMap(),2);let s=0;for(let r=0;r<t.count&&r<a.length;r++){const o=Ua(this.rng,n,[],{xpScale:.5});o.pos={x:a[r].x,y:a[r].y},this.refreshDerived(o),this.units.push(o),this.turnOrder.push(o),this.ctx.event({type:"summon",unitId:o.id,x:o.pos.x,y:o.pos.y,summon:Ol(o)}),s++}return s&&this.ctx.log(`${e.name} invoca ${s} ${n.pt}${s>1?"s":""}!`,"special"),s}onUnitDeath(e,t){e.side==="enemy"&&(this.xpEarned+=e.xp,this.goldEarned+=e.goldValue,this.killCount++,this.ctx.event({type:"xpGain",amount:e.xp}))}checkEnd(){if(this.state==="active"){if(!this.hero.alive){this.state="defeat",this.ctx.log("💔 Frosty caiu em batalha...","death"),this.ctx.event({type:"defeat"});return}if(this.livingEnemies().length===0){this.state="victory";const e=Math.floor(30+this.battleIndex*18);this.xpEarned+=e,this.goldEarned+=Math.floor(15+this.battleIndex*6),this.ctx.log(`🏆 VITÓRIA! +${this.xpEarned} XP, +${this.goldEarned} ouro`,"title"),this.ctx.event({type:"victory",xp:this.xpEarned,gold:this.goldEarned,kills:this.killCount})}}}drainEvents(){const e=this.events;return this.events=[],e}}function Ol(i){return{id:i.id,name:i.name,maxHp:i.maxHp,hp:i.hp,visual:i.visual,side:i.side,tier:i.tier,baseId:i.baseId}}const nc="frosty-tactics-save-v1";function ic(){try{if(typeof localStorage<"u")return localStorage}catch{}return null}function Bl(i){const e=ic();if(!e)return!1;const t={v:1,seed:i.seed,battleIndex:i.battleIndex,campaignComplete:i.campaignComplete,deaths:i.deaths,hero:{...i.hero},bestiary:{enemies:[...i.bestiary.enemies],adjectives:[...i.bestiary.adjectives]},savedAt:Date.now()};try{return e.setItem(nc,JSON.stringify(t)),!0}catch{return!1}}function Os(){const i=ic();if(!i)return null;try{const e=i.getItem(nc);return e?JSON.parse(e):null}catch{return null}}function Bv(i,e){return i.seed=e.seed,i.battleIndex=e.battleIndex,i.campaignComplete=e.campaignComplete,i.deaths=e.deaths??0,Object.assign(i.hero,e.hero),i.bestiary.enemies=new Set(e.bestiary?.enemies??[]),i.bestiary.adjectives=new Set(e.bestiary?.adjectives??[]),i}function kv(){const i=ic();i&&i.removeItem(nc)}function zv(){return Os()!=null}class kl{constructor(e=Date.now()){this.seed=e>>>0,this.rng=new Dl(this.seed),this.hero=ka(nv()),this.battleIndex=1,this.battle=null,this.bestiary={enemies:new Set,adjectives:new Set},this.campaignComplete=!1,this.totalPlayTimeMs=0,this.deaths=0}get zone(){return Bd(this.battleIndex)}get isEndless(){return this.battleIndex>Wn}startBattle(){vv();const e=new Dl((this.seed^pv(`battle${this.battleIndex}:${this.deaths}`))>>>0),{zone:t,boss:n,enemies:a,endless:s}=Tv(e,this.battleIndex,this.hero.level),r=Ev(e,t,this.battleIndex),o=yv(this.hero,ev(this.hero.level));Cv(e,r,o,a);for(const c of a){this.bestiary.enemies.add(c.baseId);for(const l of c.adjectiveIds)this.bestiary.adjectives.add(l)}return this.battle=new Ov({hero:o,enemies:a,grid:r,rng:e,battleIndex:this.battleIndex,zone:t}),this.battle.heroState=this.hero,this.battle.isBossBattle=n,this.battle.isEndless=s,this.battle.start(),this.battle}collectVictory(){const e=this.battle;this.hero.hp=this.hero.maxHp,this.hero.gold+=e.goldEarned,this.hero.statsTotal.kills+=e.killCount,this.hero.statsTotal.battles++,this.hero.statsTotal.damageDealt+=e.xpEarned;const t=this.hero.level,n=iv(this.hero,e.xpEarned),a={battleIndex:this.battleIndex,xp:e.xpEarned,gold:e.goldEarned,kills:e.killCount,levelsGained:n,levelBefore:t,levelAfter:this.hero.level,pendingAsi:this.hero.pendingAsi,wasBoss:e.isBossBattle,zoneCleared:e.isBossBattle?e.zone:null};return this.battleIndex===Wn&&(this.campaignComplete=!0),this.battleIndex++,this.battle=null,Bl(this),a}collectDefeat(){this.deaths++;const e=Math.floor(this.hero.gold*.1);return this.hero.gold-=e,this.hero.hp=this.hero.maxHp,this.battle=null,Bl(this),{goldLost:e,battleIndex:this.battleIndex}}fullHeal(){this.hero.hp=this.hero.maxHp}}function qd(i){const e=i.hero,t=i.heroState;if(!i.isPlayerTurn())return;let n=0;const a=Object.fromEntries((e.abilities??[]).map(o=>[o.id,o])),s=o=>!(!o||e.cooldowns.has(o.id)||o.usesPerBattle&&(e.usesLeft.get(o.id)??o.usesPerBattle)<=0);if(e.hp<e.maxHp*.35){const o=a.retomar_folego;s(o)&&i.playerAbility(o,null)}if(e.hp<e.maxHp*.3&&t){for(const o of["cura_suprema","cura_maior","cura"])if((t.potions[o]??0)>0){i.playerUsePotion(o);break}}t&&(t.potions.antidoto??0)>0&&["congelado","atordoado","paralisado"].some(c=>e.conditions.has(c))&&i.playerUsePotion("antidoto");const r=()=>i.livingEnemies();if(r().length>=3||i.isBossBattle){const o=a.furia_norte;s(o)&&i.playerAbility(o,null)}if(r().length>=3&&e.hp>e.maxHp*.5||i.isBossBattle){const o=a.surto_acao;s(o)&&i.targetsInRange(e,e.attacks[0]).length>0&&i.playerAbility(o,null)}for(;i.isPlayerTurn()&&n++<30;){const o=r();if(!o.length)break;const c=o.filter(u=>Ue(e.pos,u.pos)<=1),l=o.filter(u=>Ue(e.pos,u.pos)<=2),d=o.filter(u=>Ue(e.pos,u.pos)<=3);if(e.actionsLeft>0){const u=a.avatar_geada;if(s(u)&&(d.length>=3||i.isBossBattle&&d.length>=2)&&i.playerAbility(u,null))continue;const f=a.tornado_aco;if(s(f)&&l.length>=3&&i.playerAbility(f,null))continue;const h=a.golpe_arrebatador;if(s(h)&&c.length>=2&&i.playerAbility(h,null))continue;const g=i.targetsInRange(e,e.attacks[0]);if(g.length){const m=g.sort((b,y)=>b.hp-y.hp)[0],p=a.golpe_gelido;if(s(p)&&m.hp>m.maxHp*.5&&i.playerAbility(p,m)||i.playerAttack(m.id))continue}const v=a.investida;if(s(v)){const m=o.filter(p=>Ue(e.pos,p.pos)<=5).sort((p,b)=>p.hp-b.hp)[0];if(m&&i.playerAbility(v,m))continue}}if(e.movementLeft>0){const u=o.sort((m,p)=>Ue(e.pos,m.pos)-Ue(e.pos,p.pos))[0],f=i.reachableFor(e);let h=null,g=1/0;for(const[m,p]of f){const b=Ue({x:p.x,y:p.y},u.pos),y=i.grid.at(p.x,p.y),_=["lava","poison","spikes"].includes(y.terrain)?50:0,L=b*10+p.cost+_;L<g&&(g=L,h={key:m,r:p})}const v=Ue(e.pos,u.pos)*10;if(h&&g<v){if(i.playerMove(h.key)&&e.actionsLeft>0)continue}else if(e.actionsLeft>0&&Ue(e.pos,u.pos)>1){const m=a.salto_alado;if(s(m)){const p=i.occupiedMap(),b=i.heroState?.wingRange??4;let y=null,_=Ue(e.pos,u.pos);for(let L=-b;L<=b;L++)for(let C=-b;C<=b;C++){const T=i.grid.at(e.pos.x+C,e.pos.y+L);if(!T||T.terrain==="rock"||Ue(e.pos,T)>b||p.get(`${T.x},${T.y}`))continue;const R=Ue(T,u.pos);R<_&&(_=R,y=T)}if(y&&i.playerAbility(m,{key:`${y.x},${y.y}`}))continue}break}else break}else break}i.isPlayerTurn()&&i.playerEndTurn()}function Hv(i,e){for(;i.pendingAsi>0;){const t=i.str<20?"str":i.con<20?"con":"dex",n=i.str<20?"str":i.con<20?"con":"dex";e(i,t,n)}}function Vv(i,{POTIONS:e,UPGRADES:t}){let n=0;for(;n++<50;){const a=i,s=(a.potions.cura??0)+(a.potions.cura_maior??0)+(a.potions.cura_suprema??0);let r=!1;if(s<3){const o=a.level>=12?"cura_suprema":a.level>=6?"cura_maior":"cura",c=e[o];a.gold>=c.price?(a.gold-=c.price,a.potions[o]++,r=!0):e.cura.price<=a.gold&&(a.gold-=e.cura.price,a.potions.cura++,r=!0)}if(!r)for(const o of["lamina","runas","armadura","amuleto","botas"]){const c=t[o],l=a.upgrades[o];if(l>=c.max)continue;const d=c.price(l);if(a.gold>=d+60){a.gold-=d,a.upgrades[o]++,r=!0;break}}if(!r)break}}const zl=Object.freeze(Object.defineProperty({__proto__:null,autoAsi:Hv,autoShop:Vv,heroAutoTurn:qd},Symbol.toStringTag,{value:"Module"})),vi=new URLSearchParams(location.search);class Gv{constructor(){this.canvas=document.getElementById("game-canvas"),this.uiRoot=document.getElementById("ui-root"),this.sceneMgr=new B0(this.canvas),this.fx=new G0(this.sceneMgr),this.sfx=new j0,this.screens=new fv(this.uiRoot),this.dmgLayer=Et("dmg-layer"),this.uiRoot.appendChild(this.dmgLayer),this.dmg=new W0(this.sceneMgr,this.dmgLayer),this.hud=new cv(this.uiRoot,{onAbilitySelect:e=>this.selectAbility(e),onPotion:e=>this.usePotion(e),onEndTurn:()=>this.endTurn(),onToggleMute:()=>this.sfx.toggleMute(),onToggleSpeed:()=>this.toggleSpeed(),onHelp:()=>this.screens.help(()=>this.screens.closeModal()),onDemoToggle:()=>this.toggleDemo()}),this.hud.hide(),this.game=null,this.battle=null,this.renderer=null,this.tilemap=null,this.selectedAbility=null,this.demoMode=vi.has("demo"),this.autoAdvance=vi.has("auto"),this.speedIdx=vi.has("speed")?-1:0,this.speeds=[1,2,4],this.customSpeed=+vi.get("speed")||null,this.menuDecor=null,this.bindInput(),this.sceneMgr.start(),this.showMenu(),window.__app=this}get speed(){return this.customSpeed??this.speeds[this.speedIdx]}toggleSpeed(){return this.customSpeed=null,this.speedIdx=(this.speedIdx+1)%this.speeds.length,this.renderer&&(this.renderer.speed=this.speed),this.speed}toggleDemo(){return this.demoMode=!this.demoMode,this.demoMode&&this.driveDemo(),this.syncHud(),this.demoMode}showMenu(){this.teardownBattle(),this.hud.hide(),this.setupMenuDecor(),this.screens.mainMenu({hasSave:zv(),campaignComplete:Os()?.campaignComplete,onNew:()=>{kv(),this.startGame(new kl(this.seedFromParams()))},onContinue:()=>{const e=new kl(1);Bv(e,Os()),ka(e.hero),this.startGame(e)},onBestiary:()=>{const e=Os(),t=e?{enemies:new Set(e.bestiary.enemies),adjectives:new Set(e.bestiary.adjectives)}:{enemies:new Set,adjectives:new Set};this.screens.bestiary(t,()=>this.screens.closeModal())},onHelp:()=>this.screens.help(()=>this.screens.closeModal())})}seedFromParams(){return vi.has("seed")?+vi.get("seed"):Date.now()&2147483647}setupMenuDecor(){if(this.menuDecor)return;this.sceneMgr.setSky("#101626","#1a2438");const e=new st,t=new wt(new _a(1.5,1.9,.5,8),new Ct({color:"#9accee",roughness:.25,metalness:.1}));t.position.y=-.25,e.add(t);const n=Ud();n.scale.setScalar(1.8),e.add(n),this.sceneMgr.scene.add(e),this.menuDecor=e,this.sceneMgr.centerOn(0,0),this.sceneMgr.camZoom=1.6,this.sceneMgr.resize(),this._menuSpin=this.sceneMgr.onFrame(a=>{e.rotation.y=a/3e3;const s=n.userData.parts;s&&(s.wingL.rotation.z=Math.sin(a/700)*.15,s.wingR.rotation.z=-Math.sin(a/700)*.15)})}clearMenuDecor(){this.menuDecor&&(this._menuSpin?.(),this.sceneMgr.dispose(this.menuDecor),this.menuDecor=null,this.sceneMgr.camZoom=1,this.sceneMgr.resize())}startGame(e){this.game=e,this.maybeZoneIntro()}maybeZoneIntro(){const e=this.game.battleIndex;!this.game.isEndless&&(e-1)%10===0&&!this.autoAdvance?this.screens.zoneIntro(this.game.zone,e,()=>this.launchBattle()):this.launchBattle()}launchBattle(){this.screens.clear(),this.screens.closeModal(),this.clearMenuDecor(),this.teardownBattle();const e=this.game.startBattle();this.battle=e;const t=e.zone;this.sceneMgr.setSky(t.palette.sky,t.palette.fog),this.tilemap=new z0(this.sceneMgr,e.grid,t),this.renderer=new Z0({sceneMgr:this.sceneMgr,fx:this.fx,dmg:this.dmg,audio:this.sfx,battle:e,tilemap:this.tilemap,onLog:(s,r)=>this.hud.log(s,r),onSync:()=>this.syncHud(),speed:this.speed});const n=(e.grid.w-1)/2,a=(e.grid.h-1)/2;this.sceneMgr.centerOn(n,a),this.sceneMgr.camZoom=Math.min(1.15,11/e.grid.w),this.sceneMgr.resize(),this.hud.clearLog(),this.hud.show(),this.selectedAbility=null,this.sfx.playZoneAmbient(t.tier),this.renderer.drainAndPlay().then(()=>{this.afterEvents(),this.demoMode&&this.driveDemo()}),this.updateInteraction()}teardownBattle(){this.renderer?.dispose(),this.renderer=null,this.tilemap?.dispose(),this.tilemap=null,this.battle=null}syncHud(){this.battle&&this.hud.sync(this.battle,this.game.hero,{selectedAbility:this.selectedAbility,busy:this.renderer?.busy,demoMode:this.demoMode})}async afterEvents(){if(this.battle){if(this.battle.state==="victory")return this.handleVictory();if(this.battle.state==="defeat")return this.handleDefeat();this.updateInteraction(),this.syncHud()}}handleVictory(){const e=this.game.battleIndex===Wn,t=this.game.collectVictory();t.levelsGained.length&&this.sfx.levelup(),this.updateInteraction();const n=()=>{this.screens.closeModal(),e?this.screens.campaignVictory(this.game.hero,()=>this.maybeZoneIntro(),()=>this.showMenu()):this.maybeZoneIntro()};if(this.autoAdvance){fc(async()=>{const{autoShop:s,autoAsi:r}=await Promise.resolve().then(()=>zl);return{autoShop:s,autoAsi:r}},void 0,import.meta.url).then(({autoShop:s,autoAsi:r})=>{if(r(this.game.hero,(o,c,l)=>Rl(o,c,l)),s(this.game.hero,{POTIONS:ra,UPGRADES:Fs}),e){if(this.screens.campaignVictory(this.game.hero,()=>this.maybeZoneIntro(),()=>this.showMenu()),vi.has("stopatend"))return;setTimeout(()=>{this.screens.clear(),this.maybeZoneIntro()},2500)}else n()});return}const a=()=>this.screens.victoryResults(t,this.game.hero,{onShop:()=>this.screens.shop(this.game.hero,{onBuyPotion:s=>this.buyPotion(s),onBuyUpgrade:s=>this.buyUpgrade(s),onClose:()=>a()}),onNext:n,onAsi:()=>{const s=()=>this.screens.asiModal(this.game.hero,(r,o)=>{Rl(this.game.hero,r,o),this.sfx.levelup(),this.game.hero.pendingAsi>0?s():a()});s()}});a()}handleDefeat(){const e=this.game.collectDefeat();if(this.updateInteraction(),this.autoAdvance){fc(async()=>{const{autoShop:t}=await Promise.resolve().then(()=>zl);return{autoShop:t}},void 0,import.meta.url).then(({autoShop:t})=>{t(this.game.hero,{POTIONS:ra,UPGRADES:Fs}),this.maybeZoneIntro()});return}this.screens.defeatScreen(e,()=>this.maybeZoneIntro(),()=>this.showMenu())}buyPotion(e){const t=ra[e],n=this.game.hero;n.gold<t.price||(n.gold-=t.price,n.potions[e]=(n.potions[e]??0)+1,this.sfx.click())}buyUpgrade(e){const t=Fs[e],n=this.game.hero,a=n.upgrades[e];if(a>=t.max)return;const s=t.price(a);n.gold<s||(n.gold-=s,n.upgrades[e]++,ka(n),this.sfx.levelup())}async driveDemo(){if(!this._demoRunning){this._demoRunning=!0;try{for(;this.demoMode&&this.battle&&this.battle.state==="active";)this.battle.isPlayerTurn()&&!this.renderer.busy?(qd(this.battle),await this.renderer.drainAndPlay(),await this.afterEvents()):await new Promise(e=>setTimeout(e,120))}finally{this._demoRunning=!1}}}async performAction(e){!this.battle?.isPlayerTurn()||this.renderer.busy||this.demoMode||e()===!1||(this.clearTargeting(),await this.renderer.drainAndPlay(),await this.afterEvents())}selectAbility(e){if(!(!this.battle?.isPlayerTurn()||this.renderer?.busy)){if(this.sfx.click(),this.selectedAbility?.id===e.id)return this.clearTargeting();if(e.kind==="self"||e.kind==="aoe"&&e.targeting==="self"){this.performAction(()=>this.battle.playerAbility(e,null));return}this.selectedAbility=e,this.updateInteraction(),this.syncHud()}}usePotion(e){this.performAction(()=>this.battle.playerUsePotion(e))}endTurn(){this.performAction(()=>this.battle.playerEndTurn())}clearTargeting(){this.selectedAbility=null,this.updateInteraction(),this.syncHud()}updateInteraction(){if(!this.tilemap||!this.battle||(this.tilemap.clearHighlights(),this.hud.setHint(null),!this.battle.isPlayerTurn()||this.battle.state!=="active"||this.demoMode))return;const e=this.battle.hero,t=this.selectedAbility;if(!t){const n=this.battle.reachableFor(e);this.tilemap.highlight([...n.values()],"move");const a=this.battle.targetsInRange(e,e.attacks[0]);e.actionsLeft>0&&this.tilemap.highlight(a.map(s=>s.pos),"attack");return}if(t.kind==="attack"||t.kind==="charge"){const n=t.kind==="charge"?t.range+1:t.range??1,a=this.battle.opponentsOf(e).filter(s=>Ue(e.pos,s.pos)<=n);this.tilemap.highlight(a.map(s=>s.pos),"attack"),this.hud.setHint(`${t.icon} ${t.pt} — clique no alvo (Esc cancela)`)}else if(t.kind==="move"){const n=this.game.hero.wingRange??t.range,a=this.battle.occupiedMap(),s=[];for(let r=-n;r<=n;r++)for(let o=-n;o<=n;o++){const c=this.battle.grid.at(e.pos.x+o,e.pos.y+r);!c||c.terrain==="rock"||Ue(e.pos,c)>n||a.get(`${c.x},${c.y}`)||s.push(c)}this.tilemap.highlight(s,"aoe"),this.hud.setHint(`${t.icon} ${t.pt} — clique na casa de destino (Esc cancela)`)}else if(t.kind==="line"){const n=[];for(const a of[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}])n.push(...kd(this.battle.grid,e.pos,a,t.range));this.tilemap.highlight(n,"aoe"),this.hud.setHint(`${t.icon} ${t.pt} — clique numa direção (Esc cancela)`)}else if(t.kind==="aoe"){const n=this.battle.opponentsOf(e).filter(a=>Ue(e.pos,a.pos)<=t.radius).map(a=>a.pos);this.tilemap.highlight(n,"aoe")}}bindInput(){let e=null;this.canvas.addEventListener("pointermove",t=>{if(!this.battle||!this.renderer||this.renderer.busy)return;const n=[...this.renderer.views.values()].filter(d=>d.group.visible).map(d=>d.group),a=this.sceneMgr.raycast(t.clientX,t.clientY,n),s=a.length?this.findUnitId(a[0].object):null,r=s?this.battle.units.find(d=>d.id===s&&d.alive):null;if(r&&r.side==="enemy"){if(this.hud.inspectEnemy(r),this.battle.isPlayerTurn()&&!this.demoMode){const d=this.selectedAbility;if(!d||d.kind==="attack"||d.kind==="charge"){const f=d?.kind==="charge"?d.range+1:d?.range??this.battle.attackRange(this.battle.hero,this.battle.hero.attacks[0]);if(Ue(this.battle.hero.pos,r.pos)<=f){const h=this.battle.previewFor(this.battle.hero,r,this.battle.hero.attacks[0]),g=h.adv>0?" · vantagem":h.adv<0?" · desvantagem":"";this.hud.showPreview(t.clientX,t.clientY,`<span class="hitchance">${Math.round(h.pHit*100)}%</span> de acertar · ~${h.avgDamage} dano${g}`)}else this.hud.hidePreview()}}}else this.hud.inspectEnemy(null),this.hud.hidePreview();const o=this.sceneMgr.raycast(t.clientX,t.clientY,this.tilemap?.tileMeshes??[]),c=o.length?o[0].object.userData.tile:null,l=c?`${c.x},${c.y}`:null;if(l!==e&&(e=l,this.tilemap?.clearKind("path"),this.tilemap?.clearKind("hover"),c&&this.battle.isPlayerTurn()&&!this.selectedAbility&&!this.demoMode)){const u=this.battle.reachableFor(this.battle.hero).get(l);u?this.tilemap.highlight(u.path,"path"):this.tilemap.highlight([c],"hover")}}),this.canvas.addEventListener("pointerdown",t=>{if(t.button!==0||!this.battle||!this.battle.isPlayerTurn()||this.renderer.busy||this.demoMode)return;this.sfx.ensure();const n=[...this.renderer.views.values()].filter(u=>u.group.visible).map(u=>u.group),a=this.sceneMgr.raycast(t.clientX,t.clientY,n),s=a.length?this.findUnitId(a[0].object):null,r=s?this.battle.units.find(u=>u.id===s&&u.alive):null,o=this.selectedAbility;if(r&&r.side==="enemy"){this.hud.hidePreview(),o?.kind==="attack"||o?.kind==="charge"?this.performAction(()=>this.battle.playerAbility(o,r)):o||this.performAction(()=>this.battle.playerAttack(r.id));return}const c=this.sceneMgr.raycast(t.clientX,t.clientY,this.tilemap?.tileMeshes??[]),l=c.length?c[0].object.userData.tile:null;if(!l)return;const d=`${l.x},${l.y}`;if(o?.kind==="move")this.performAction(()=>this.battle.playerAbility(o,{key:d}));else if(o?.kind==="line"){const u=this.battle.hero,f=Math.sign(l.x-u.pos.x),h=Math.sign(l.y-u.pos.y);if(f!==0==(h!==0))return;this.performAction(()=>this.battle.playerAbility(o,{dir:{x:f,y:h}}))}else o||this.performAction(()=>this.battle.playerMove(d))}),this.canvas.addEventListener("contextmenu",t=>{t.preventDefault(),this.clearTargeting()}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&(this.clearTargeting(),this.screens.closeModal()),!this.battle)return;(t.key==="q"||t.key==="Q")&&this.sceneMgr.rotate(1),(t.key==="e"||t.key==="E")&&this.sceneMgr.rotate(-1),(t.key==="t"||t.key==="T")&&this.endTurn(),(t.key==="h"||t.key==="H")&&this.screens.help(()=>this.screens.closeModal());const n=parseInt(t.key,10);if(n>=1&&n<=9){const a=this.battle.hero.abilities?.[n-1];a&&this.selectAbility(a)}}),window.addEventListener("wheel",t=>{this.battle&&this.sceneMgr.zoomBy(t.deltaY>0?.9:1.1)},{passive:!0})}findUnitId(e){let t=e;for(;t;){if(t.userData?.unitId)return t.userData.unitId;t=t.parent}return null}}new Gv;
