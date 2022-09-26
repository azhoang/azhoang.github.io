import{p as dr}from"./chunk-79accaca.js";import{c as $,d as pr,r as rr}from"./chunk-c861753c.js";var yr={},L={};function er(r,i){if(!Array.isArray(r))throw new Error("shuffle expect an array as parameter.");i=i||{};var t=r,n=r.length,s=i.rng||Math.random,g,x;for(i.copy===!0&&(t=r.slice());n;)g=Math.floor(s()*n),n-=1,x=t[n],t[n]=t[g],t[g]=x;return t}er.pick=function(r,i){if(!Array.isArray(r))throw new Error("shuffle.pick() expect an array as parameter.");i=i||{};var t=i.rng||Math.random,n=i.picks||1;if(typeof n=="number"&&n!==1){for(var s=r.length,g=r.slice(),x=[],v;n&&s;)v=Math.floor(t()*s),x.push(g[v]),g.splice(v,1),s-=1,n-=1;return x}return r[Math.floor(t()*r.length)]};var gr=er,H={exports:{}};(function(r,i){(function(t,n){{var s=n();r&&r.exports&&(i=r.exports=s),i.randomColor=s}})($,function(){var t=null,n={};R();var s=[],g=function(a){if(a=a||{},a.seed!==void 0&&a.seed!==null&&a.seed===parseInt(a.seed,10))t=a.seed;else if(typeof a.seed=="string")t=_(a.seed);else{if(a.seed!==void 0&&a.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var c,l,y;if(a.count!==null&&a.count!==void 0){for(var h=a.count,b=[],w=0;w<a.count;w++)s.push(!1);for(a.count=null;h>b.length;){var C=g(a);t!==null&&(a.seed=t),b.push(C)}return a.count=h,b}return c=x(a),l=v(c,a),y=e(c,l,a),u([c,l,y],a)};function x(a){if(s.length>0){var c=M(a.hue),l=m(c),y=(c[1]-c[0])/s.length,h=parseInt((l-c[0])/y);s[h]===!0?h=(h+2)%s.length:s[h]=!0;var b=(c[0]+h*y)%359,w=(c[0]+(h+1)*y)%359;return c=[b,w],l=m(c),l<0&&(l=360+l),l}else{var c=o(a.hue);return l=m(c),l<0&&(l=360+l),l}}function v(a,c){if(c.hue==="monochrome")return 0;if(c.luminosity==="random")return m([0,100]);var l=f(a),y=l[0],h=l[1];switch(c.luminosity){case"bright":y=55;break;case"dark":y=h-10;break;case"light":h=55;break}return m([y,h])}function e(a,c,l){var y=d(a,c),h=100;switch(l.luminosity){case"dark":h=y+20;break;case"light":y=(h+y)/2;break;case"random":y=0,h=100;break}return m([y,h])}function u(a,c){switch(c.format){case"hsvArray":return a;case"hslArray":return O(a);case"hsl":var l=O(a);return"hsl("+l[0]+", "+l[1]+"%, "+l[2]+"%)";case"hsla":var y=O(a),w=c.alpha||Math.random();return"hsla("+y[0]+", "+y[1]+"%, "+y[2]+"%, "+w+")";case"rgbArray":return T(a);case"rgb":var h=T(a);return"rgb("+h.join(", ")+")";case"rgba":var b=T(a),w=c.alpha||Math.random();return"rgba("+b.join(", ")+", "+w+")";default:return A(a)}}function d(a,c){for(var l=p(a).lowerBounds,y=0;y<l.length-1;y++){var h=l[y][0],b=l[y][1],w=l[y+1][0],C=l[y+1][1];if(c>=h&&c<=w){var k=(C-b)/(w-h),P=b-k*h;return k*c+P}}return 0}function o(a){if(typeof parseInt(a)=="number"){var c=parseInt(a);if(c<360&&c>0)return[c,c]}if(typeof a=="string"){if(n[a]){var l=n[a];if(l.hueRange)return l.hueRange}else if(a.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var y=z(a)[0];return[y,y]}}return[0,360]}function f(a){return p(a).saturationRange}function p(a){a>=334&&a<=360&&(a-=360);for(var c in n){var l=n[c];if(l.hueRange&&a>=l.hueRange[0]&&a<=l.hueRange[1])return n[c]}return"Color not found"}function m(a){if(t===null){var c=.618033988749895,l=Math.random();return l+=c,l%=1,Math.floor(a[0]+l*(a[1]+1-a[0]))}else{var y=a[1]||1,h=a[0]||0;t=(t*9301+49297)%233280;var b=t/233280;return Math.floor(h+b*(y-h))}}function A(a){var c=T(a);function l(h){var b=h.toString(16);return b.length==1?"0"+b:b}var y="#"+l(c[0])+l(c[1])+l(c[2]);return y}function S(a,c,l){var y=l[0][0],h=l[l.length-1][0],b=l[l.length-1][1],w=l[0][1];n[a]={hueRange:c,lowerBounds:l,saturationRange:[y,h],brightnessRange:[b,w]}}function R(){S("monochrome",null,[[0,0],[100,0]]),S("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),S("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),S("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),S("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),S("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),S("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),S("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function T(a){var c=a[0];c===0&&(c=1),c===360&&(c=359),c=c/360;var l=a[1]/100,y=a[2]/100,h=Math.floor(c*6),b=c*6-h,w=y*(1-l),C=y*(1-b*l),k=y*(1-(1-b)*l),P=256,E=256,q=256;switch(h){case 0:P=y,E=k,q=w;break;case 1:P=C,E=y,q=w;break;case 2:P=w,E=y,q=k;break;case 3:P=w,E=C,q=y;break;case 4:P=k,E=w,q=y;break;case 5:P=y,E=w,q=C;break}var vr=[Math.floor(P*255),Math.floor(E*255),Math.floor(q*255)];return vr}function z(a){a=a.replace(/^#/,""),a=a.length===3?a.replace(/(.)/g,"$1$1"):a;var c=parseInt(a.substr(0,2),16)/255,l=parseInt(a.substr(2,2),16)/255,y=parseInt(a.substr(4,2),16)/255,h=Math.max(c,l,y),b=h-Math.min(c,l,y),w=h?b/h:0;switch(h){case c:return[60*((l-y)/b%6)||0,w,h];case l:return[60*((y-c)/b+2)||0,w,h];case y:return[60*((c-l)/b+4)||0,w,h]}}function O(a){var c=a[0],l=a[1]/100,y=a[2]/100,h=(2-l)*y;return[c,Math.round(l*y/(h<1?h:2-h)*1e4)/100,h/2*100]}function _(a){for(var c=0,l=0;l!==a.length&&!(c>=Number.MAX_SAFE_INTEGER);l++)c+=a.charCodeAt(l);return c}function M(a){if(isNaN(a)){if(typeof a=="string"){if(n[a]){var l=n[a];if(l.hueRange)return l.hueRange}else if(a.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var y=z(a)[0];return p(y).hueRange}}}else{var c=parseInt(a);if(c<360&&c>0)return p(a).hueRange}return[0,360]}return g})})(H,H.exports);var tr={exports:{}};(function(r){(function(i,t,n){function s(e){var u=this,d=v();u.next=function(){var o=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=o-(u.c=o|0)},u.c=1,u.s0=d(" "),u.s1=d(" "),u.s2=d(" "),u.s0-=d(e),u.s0<0&&(u.s0+=1),u.s1-=d(e),u.s1<0&&(u.s1+=1),u.s2-=d(e),u.s2<0&&(u.s2+=1),d=null}function g(e,u){return u.c=e.c,u.s0=e.s0,u.s1=e.s1,u.s2=e.s2,u}function x(e,u){var d=new s(e),o=u&&u.state,f=d.next;return f.int32=function(){return d.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,o&&(typeof o=="object"&&g(o,d),f.state=function(){return g(d,{})}),f}function v(){var e=4022871197,u=function(d){d=String(d);for(var o=0;o<d.length;o++){e+=d.charCodeAt(o);var f=.02519603282416938*e;e=f>>>0,f-=e,f*=e,e=f>>>0,f-=e,e+=f*4294967296}return(e>>>0)*23283064365386963e-26};return u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.alea=x})($,r,!1)})(tr);var nr={exports:{}};(function(r){(function(i,t,n){function s(v){var e=this,u="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var o=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^o^o>>>8},v===(v|0)?e.x=v:u+=v;for(var d=0;d<u.length+64;d++)e.x^=u.charCodeAt(d)|0,e.next()}function g(v,e){return e.x=v.x,e.y=v.y,e.z=v.z,e.w=v.w,e}function x(v,e){var u=new s(v),d=e&&e.state,o=function(){return(u.next()>>>0)/4294967296};return o.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,m=(f+p)/(1<<21);while(m===0);return m},o.int32=u.next,o.quick=o,d&&(typeof d=="object"&&g(d,u),o.state=function(){return g(u,{})}),o}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xor128=x})($,r,!1)})(nr);var ar={exports:{}};(function(r){(function(i,t,n){function s(v){var e=this,u="";e.next=function(){var o=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(o^o<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,v===(v|0)?e.x=v:u+=v;for(var d=0;d<u.length+64;d++)e.x^=u.charCodeAt(d)|0,d==u.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function g(v,e){return e.x=v.x,e.y=v.y,e.z=v.z,e.w=v.w,e.v=v.v,e.d=v.d,e}function x(v,e){var u=new s(v),d=e&&e.state,o=function(){return(u.next()>>>0)/4294967296};return o.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,m=(f+p)/(1<<21);while(m===0);return m},o.int32=u.next,o.quick=o,d&&(typeof d=="object"&&g(d,u),o.state=function(){return g(u,{})}),o}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xorwow=x})($,r,!1)})(ar);var ir={exports:{}};(function(r){(function(i,t,n){function s(v){var e=this;e.next=function(){var d=e.x,o=e.i,f,p;return f=d[o],f^=f>>>7,p=f^f<<24,f=d[o+1&7],p^=f^f>>>10,f=d[o+3&7],p^=f^f>>>3,f=d[o+4&7],p^=f^f<<7,f=d[o+7&7],f=f^f<<13,p^=f^f<<9,d[o]=p,e.i=o+1&7,p};function u(d,o){var f,p=[];if(o===(o|0))p[0]=o;else for(o=""+o,f=0;f<o.length;++f)p[f&7]=p[f&7]<<15^o.charCodeAt(f)+p[f+1&7]<<13;for(;p.length<8;)p.push(0);for(f=0;f<8&&p[f]===0;++f);for(f==8?p[7]=-1:p[f],d.x=p,d.i=0,f=256;f>0;--f)d.next()}u(e,v)}function g(v,e){return e.x=v.x.slice(),e.i=v.i,e}function x(v,e){v==null&&(v=+new Date);var u=new s(v),d=e&&e.state,o=function(){return(u.next()>>>0)/4294967296};return o.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,m=(f+p)/(1<<21);while(m===0);return m},o.int32=u.next,o.quick=o,d&&(d.x&&g(d,u),o.state=function(){return g(u,{})}),o}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xorshift7=x})($,r,!1)})(ir);var or={exports:{}};(function(r){(function(i,t,n){function s(v){var e=this;e.next=function(){var d=e.w,o=e.X,f=e.i,p,m;return e.w=d=d+1640531527|0,m=o[f+34&127],p=o[f=f+1&127],m^=m<<13,p^=p<<17,m^=m>>>15,p^=p>>>12,m=o[f]=m^p,e.i=f,m+(d^d>>>16)|0};function u(d,o){var f,p,m,A,S,R=[],T=128;for(o===(o|0)?(p=o,o=null):(o=o+"\0",p=0,T=Math.max(T,o.length)),m=0,A=-32;A<T;++A)o&&(p^=o.charCodeAt((A+32)%o.length)),A===0&&(S=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,A>=0&&(S=S+1640531527|0,f=R[A&127]^=p+S,m=f==0?m+1:0);for(m>=128&&(R[(o&&o.length||0)&127]=-1),m=127,A=4*128;A>0;--A)p=R[m+34&127],f=R[m=m+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,R[m]=p^f;d.w=S,d.X=R,d.i=m}u(e,v)}function g(v,e){return e.i=v.i,e.w=v.w,e.X=v.X.slice(),e}function x(v,e){v==null&&(v=+new Date);var u=new s(v),d=e&&e.state,o=function(){return(u.next()>>>0)/4294967296};return o.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,m=(f+p)/(1<<21);while(m===0);return m},o.int32=u.next,o.quick=o,d&&(d.X&&g(d,u),o.state=function(){return g(u,{})}),o}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xor4096=x})($,r,!1)})(or);var ur={exports:{}};(function(r){(function(i,t,n){function s(v){var e=this,u="";e.next=function(){var o=e.b,f=e.c,p=e.d,m=e.a;return o=o<<25^o>>>7^f,f=f-p|0,p=p<<24^p>>>8^m,m=m-o|0,e.b=o=o<<20^o>>>12^f,e.c=f=f-p|0,e.d=p<<16^f>>>16^m,e.a=m-o|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,v===Math.floor(v)?(e.a=v/4294967296|0,e.b=v|0):u+=v;for(var d=0;d<u.length+20;d++)e.b^=u.charCodeAt(d)|0,e.next()}function g(v,e){return e.a=v.a,e.b=v.b,e.c=v.c,e.d=v.d,e}function x(v,e){var u=new s(v),d=e&&e.state,o=function(){return(u.next()>>>0)/4294967296};return o.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,m=(f+p)/(1<<21);while(m===0);return m},o.int32=u.next,o.quick=o,d&&(typeof d=="object"&&g(d,u),o.state=function(){return g(u,{})}),o}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.tychei=x})($,r,!1)})(ur);var fr={exports:{}};const hr={},xr=Object.freeze(Object.defineProperty({__proto__:null,default:hr},Symbol.toStringTag,{value:"Module"})),mr=pr(xr);(function(r){(function(i,t,n){var s=256,g=6,x=52,v="random",e=n.pow(s,g),u=n.pow(2,x),d=u*2,o=s-1,f;function p(O,_,M){var a=[];_=_==!0?{entropy:!0}:_||{};var c=R(S(_.entropy?[O,z(t)]:O==null?T():O,3),a),l=new m(a),y=function(){for(var h=l.g(g),b=e,w=0;h<u;)h=(h+w)*s,b*=s,w=l.g(1);for(;h>=d;)h/=2,b/=2,w>>>=1;return(h+w)/b};return y.int32=function(){return l.g(4)|0},y.quick=function(){return l.g(4)/4294967296},y.double=y,R(z(l.S),t),(_.pass||M||function(h,b,w,C){return C&&(C.S&&A(C,l),h.state=function(){return A(l,{})}),w?(n[v]=h,b):h})(y,c,"global"in _?_.global:this==n,_.state)}function m(O){var _,M=O.length,a=this,c=0,l=a.i=a.j=0,y=a.S=[];for(M||(O=[M++]);c<s;)y[c]=c++;for(c=0;c<s;c++)y[c]=y[l=o&l+O[c%M]+(_=y[c])],y[l]=_;(a.g=function(h){for(var b,w=0,C=a.i,k=a.j,P=a.S;h--;)b=P[C=o&C+1],w=w*s+P[o&(P[C]=P[k=o&k+b])+(P[k]=b)];return a.i=C,a.j=k,w})(s)}function A(O,_){return _.i=O.i,_.j=O.j,_.S=O.S.slice(),_}function S(O,_){var M=[],a=typeof O,c;if(_&&a=="object")for(c in O)try{M.push(S(O[c],_-1))}catch{}return M.length?M:a=="string"?O:O+"\0"}function R(O,_){for(var M=O+"",a,c=0;c<M.length;)_[o&c]=o&(a^=_[o&c]*19)+M.charCodeAt(c++);return z(_)}function T(){try{var O;return f&&(O=f.randomBytes)?O=O(s):(O=new Uint8Array(s),(i.crypto||i.msCrypto).getRandomValues(O)),z(O)}catch{var _=i.navigator,M=_&&_.plugins;return[+new Date,i,M,i.screen,z(t)]}}function z(O){return String.fromCharCode.apply(0,O)}if(R(n.random(),t),r.exports){r.exports=p;try{f=mr}catch{}}else n["seed"+v]=p})(typeof self<"u"?self:$,[],Math)})(fr);var br=tr.exports,wr=nr.exports,Or=ar.exports,_r=ir.exports,Sr=or.exports,Mr=ur.exports,I=fr.exports;I.alea=br;I.xor128=wr;I.xorwow=Or;I.xorshift7=_r;I.xor4096=Sr;I.tychei=Mr;var Cr=I,G={};Object.defineProperty(G,"__esModule",{value:!0});G.defaultRenderer=void 0;var Ar=Rr(rr.exports),Pr=["className","style"];function Rr(r){return r&&r.__esModule?r:{default:r}}function B(){return B=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},B.apply(this,arguments)}function J(r,i){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);i&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,n)}return t}function Q(r){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?J(Object(t),!0).forEach(function(n){kr(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function kr(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}function jr(r,i){if(r==null)return{};var t=Tr(r,i),n,s;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(r);for(s=0;s<g.length;s++)n=g[s],!(i.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(t[n]=r[n]))}return t}function Tr(r,i){if(r==null)return{};var t={},n=Object.keys(r),s,g;for(g=0;g<n.length;g++)s=n[g],!(i.indexOf(s)>=0)&&(t[s]=r[s]);return t}var zr=function(i,t,n){var s=i.props||{},g=s.className,x=s.style,v=jr(s,Pr),e=t+"px",u=i.key||i.value,d=Q(Q({},$r),{},{color:n,fontSize:e},x),o="tag-cloud-tag";return g&&(o+=" "+g),Ar.default.createElement("span",B({className:o,style:d,key:u},v),i.value)};G.defaultRenderer=zr;var $r={margin:"0px 3px",verticalAlign:"middle",display:"inline-block"},D={};Object.defineProperty(D,"__esModule",{value:!0});D.fontSizeConverter=void 0;D.keys=Ir;D.omit=void 0;D.pick=qr;var Dr=function(i,t,n,s,g){return n-t===0?Math.round((s+g)/2):Math.round((i-t)*(g-s)/(n-t)+s)};D.fontSizeConverter=Dr;var Er=function(i,t){return Object.keys(i).reduce(function(n,s){return~t.indexOf(s)||(n[s]=i[s]),n},{})};D.omit=Er;function qr(r,i){return i.reduce(function(t,n){return t[n]=r[n],t},{})}function Ir(r){return Object.keys(r)}function F(r){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},F(r)}Object.defineProperty(L,"__esModule",{value:!0});L.TagCloud=U;var j=W(dr.exports),N=Hr(rr.exports),Xr=W(gr),Nr=W(H.exports),Gr=W(Cr),Wr=G,X=D;function cr(r){if(typeof WeakMap!="function")return null;var i=new WeakMap,t=new WeakMap;return(cr=function(s){return s?t:i})(r)}function Hr(r,i){if(!i&&r&&r.__esModule)return r;if(r===null||F(r)!=="object"&&typeof r!="function")return{default:r};var t=cr(i);if(t&&t.has(r))return t.get(r);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in r)if(g!=="default"&&Object.prototype.hasOwnProperty.call(r,g)){var x=s?Object.getOwnPropertyDescriptor(r,g):null;x&&(x.get||x.set)?Object.defineProperty(n,g,x):n[g]=r[g]}return n.default=r,t&&t.set(r,n),n}function W(r){return r&&r.__esModule?r:{default:r}}function Br(r,i){return Lr(r)||Vr(r,i)||lr(r,i)||Fr()}function Fr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vr(r,i){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],s=!0,g=!1,x,v;try{for(t=t.call(r);!(s=(x=t.next()).done)&&(n.push(x.value),!(i&&n.length===i));s=!0);}catch(e){g=!0,v=e}finally{try{!s&&t.return!=null&&t.return()}finally{if(g)throw v}}return n}}function Lr(r){if(Array.isArray(r))return r}function Y(r){return Jr(r)||Ur(r)||lr(r)||Kr()}function Kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(r,i){if(!!r){if(typeof r=="string")return V(r,i);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(r,i)}}function Ur(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Jr(r){if(Array.isArray(r))return V(r)}function V(r,i){(i==null||i>r.length)&&(i=r.length);for(var t=0,n=new Array(i);t<i;t++)n[t]=r[t];return n}function Z(r,i){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);i&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,n)}return t}function Qr(r){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?Z(Object(t),!0).forEach(function(n){Yr(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Yr(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var K=["onClick","onDoubleClick","onMouseMove","onMouseOver","onMouseOut","onPress","onPressIn","onPressOut"],Zr=["tags","shuffle","renderer","maxSize","minSize","colorOptions","disableRandomColor","randomSeed","randomNumberGenerator","containerComponent"];function sr(r){return r.key+r.value+r.count}function re(r,i){var t=i.disableRandomColor,n=i.colorOptions,s=i.randomSeed;if(r.color)return r.color;if(!t)return(0,Nr.default)(Qr({seed:s&&"".concat(s,":").concat(sr(r))},n))}function ee(r,i,t){var n=(0,X.pick)(r.props,K),s=(0,X.keys)(t).reduce(function(g,x){return(t[x]||n[x])&&(g[x]=function(v){t[x]&&t[x](i,v),n[x]&&n(v)}),g},{});return N.default.cloneElement(r,s)}function te(r,i){var t=r.minSize,n=r.maxSize,s=i.map(function(e){var u=e.tag;return u.count}),g=Math.min.apply(Math,Y(s)),x=Math.max.apply(Math,Y(s)),v=(0,X.pick)(r,K);return i.map(function(e){var u=e.tag,d=e.color,o=(0,X.fontSizeConverter)(u.count,g,x,t,n),f=r.renderer(u,o,d);return ee(f,u,v)})}function ne(r){var i=r.tags,t=r.shuffle,n=r.randomSeed,s=r.randomNumberGenerator,g=n?(0,Gr.default)(n):s,x=i.slice(),v=t?(0,Xr.default)(x,{rng:g}):x;return v.map(function(e){return{tag:e,color:re(e,r)}})}function U(r){var i=(0,N.useState)([]),t=Br(i,2),n=t[0],s=t[1],g=r.tags.map(sr).join(":");(0,N.useEffect)(function(){s(ne(r))},[r.colorOptions,r.randomSeed,r.shuffle,r.disableRandomColor,g]);var x=(0,X.omit)(r,[].concat(Zr,K)),v=r.containerComponent;return N.default.createElement(v,x,te(r,n))}U.propTypes={tags:j.default.array.isRequired,maxSize:j.default.number.isRequired,minSize:j.default.number.isRequired,shuffle:j.default.bool,colorOptions:j.default.object,disableRandomColor:j.default.bool,renderer:j.default.func,className:j.default.string,randomSeed:j.default.any,randomNumberGenerator:j.default.func,containerComponent:j.default.elementType};U.defaultProps={renderer:Wr.defaultRenderer,shuffle:!0,className:"tag-cloud",colorOptions:{},containerComponent:"div"};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"TagCloud",{enumerable:!0,get:function(){return i.TagCloud}});var i=L})(yr);export{yr as l};
