/**
 * Jdenticon 3.2.0
 * http://jdenticon.com
 *  
 * Built: 2022-08-07T11:23:11.640Z
 *
 * MIT License
 * 
 * Copyright (c) 2014-2021 Daniel Mester Pirttijärvi
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!function(t,n){var i=function(t){"use strict"
function n(t,n,i){return parseInt(t.substr(n,i),16)}function i(t){return t|=0,t<0?"00":t<16?"0"+t.toString(16):t<256?t.toString(16):"ff"}function e(t,n,e){return e=e<0?e+6:e>6?e-6:e,i(255*(e<1?t+(n-t)*e:e<3?n:e<4?t+(n-t)*(4-e):t))}function r(t){if(/^#[0-9a-f]{3,8}$/i.test(t)){var n,i=t.length
if(i<6){var e=t[1],r=t[2],o=t[3],u=t[4]||""
n="#"+e+e+r+r+o+o+u+u}return(7==i||i>8)&&(n=t),n}}function o(t){var i,e=n(t,7,2)
if(isNaN(e))i=t
else{i="rgba("+n(t,1,2)+","+n(t,3,2)+","+n(t,5,2)+","+(e/255).toFixed(2)+")"}return i}function u(t,n,r){var o
if(0==n){var u=i(255*r)
o=u+u+u}else{var f=r<=.5?r*(n+1):r+n-r*n,h=2*r-f
o=e(h,f,6*t+2)+e(h,f,6*t)+e(h,f,6*t-2)}return"#"+o}function f(t,n,i){var e=[.55,.5,.5,.46,.6,.55,.55],r=e[6*t+.5|0]
return i=i<.5?i*r*2:r+(i-.5)*(1-r)*2,u(t,n,i)}function h(t){return arguments.length&&(D[L.n]=t),D[L.n]}function s(t,n){function i(t,n){var i=u[t]
return i&&i.length>1||(i=n),function(t){return t=i[0]+t*(i[1]-i[0]),t<0?0:t>1?1:t}}function e(t){var n,i=o.hues
return i&&i.length>0&&(n=i[0|.999*t*i.length]),"number"==typeof n?(n/360%1+1)%1:t}var o="object"==typeof t&&t||D[L.n]||B[L.G]||{},u=o.lightness||{},f=o.saturation||{},h="color"in f?f.color:f,s=f.grayscale,a=o.backColor,c=o.padding
return{X:e,p:"number"==typeof h?h:.5,H:"number"==typeof s?s:0,q:i("color",[.4,.8]),I:i("grayscale",[.3,.9]),J:r(a),Y:"number"==typeof t?t:"number"==typeof c?c:n}}function a(t){if(t){var n=t.tagName
if(/^svg$/i.test(n))return U
if(/^canvas$/i.test(n)&&"getContext"in t)return $}}function c(t){if("undefined"!=typeof MutationObserver){new MutationObserver(function(n){for(var i=0;i<n.length;i++){for(var e=n[i],r=e.addedNodes,o=0;r&&o<r.length;o++){var u=r[o]
if(1==u.nodeType)if(a(u))t(u)
else for(var f=u.querySelectorAll(H),h=0;h<f.length;h++)t(f[h])}"attributes"==e.type&&a(e.target)&&t(e.target)}}).observe(document.body,{childList:!0,attributes:!0,attributeFilter:[G.o,G.t,"width","height"],subtree:!0})}}function l(t,n){this.x=t,this.y=n}function v(t,n,i,e){this.u=t,this.v=n,this.K=i,this.Z=e}function g(t){this.M=t,this.A=K}function d(t,n,i,e){t%=14
var r,o,u,f,h,s
t?1==t?(u=0|.5*i,f=0|.8*i,n.j(i-u,0,u,f,2)):2==t?(u=0|i/3,n.i(u,u,i-u,i-u)):3==t?(h=.1*i,s=i<6?1:i<8?2:0|.25*i,h=h>1?0|h:h>.5?1:h,n.i(s,s,i-h-s,i-h-s)):4==t?(o=0|.15*i,u=0|.5*i,n.h(i-u-o,i-u-o,u)):5==t?(h=.1*i,s=4*h,s>3&&(s|=0),n.i(0,0,i,i),n.g([s,s,i-h,s,s+(i-s-h)/2,i-h],!0)):6==t?n.g([0,0,i,0,i,.7*i,.4*i,.4*i,.7*i,i,0,i]):7==t?n.j(i/2,i/2,i/2,i/2,3):8==t?(n.i(0,0,i,i/2),n.i(0,i/2,i/2,i/2),n.j(i/2,i/2,i/2,i/2,1)):9==t?(h=.14*i,s=i<4?1:i<6?2:0|.35*i,h=i<8?h:0|h,n.i(0,0,i,i),n.i(s,s,i-s-h,i-s-h,!0)):10==t?(h=.12*i,s=3*h,n.i(0,0,i,i),n.h(s,s,i-h-s,!0)):11==t?n.j(i/2,i/2,i/2,i/2,3):12==t?(o=.25*i,n.i(0,0,i,i),n.N(o,o,i-o,i-o,!0)):!e&&(o=.4*i,u=1.2*i,n.h(o,o,u)):(r=.42*i,n.g([0,0,i,0,i,i-2*r,i-r,i,0,i]))}function p(t,n,i){t%=4
var e
t?1==t?n.j(0,i/2,i,i/2,0):2==t?n.N(0,0,i,i):(e=i/6,n.h(e,e,i-2*e)):n.j(0,0,i,i,0)}function y(t,n){return t=n.X(t),[f(t,n.H,n.I(0)),f(t,n.p,n.q(.5)),f(t,n.H,n.I(1)),f(t,n.p,n.q(1)),f(t,n.p,n.q(0))]}function m(t,i,e){function r(e,r,o,u,f){var h=n(i,o,1),s=u?n(i,u,1):0
t.O(x[A[e]])
for(var a=0;a<f.length;a++)c.A=new v(m+f[a][0]*l,b+f[a][1]*l,l,s++%4),r(h,c,l,a)
t.P()}function o(t){if(t.indexOf(a)>=0)for(var n=0;n<t.length;n++)if(A.indexOf(t[n])>=0)return!0}var u=s(e,.08)
u.J&&t.m(u.J)
var f=t.k,h=.5+f*u.Y|0
f-=2*h
for(var a,c=new g(t),l=0|f/4,m=0|h+f/2-2*l,b=0|h+f/2-2*l,w=n(i,-7)/268435455,x=y(w,u),A=[],S=0;S<3;S++)a=n(i,8+S,1)%x.length,(o([0,4])||o([2,3]))&&(a=1),A.push(a)
r(0,p,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),r(1,p,4,5,[[0,0],[3,0],[3,3],[0,3]]),r(2,d,1,null,[[1,1],[2,1],[2,2],[1,2]]),t.finish()}function b(t){function n(t,n){return t<<n|t>>>32-n}for(var i,e=0,r=0,o=encodeURI(t)+"%80",u=[],f=[],h=1732584193,s=4023233417,a=~h,c=~s,l=3285377520,v=[h,s,a,c,l],g=0,d="";e<o.length;r++)u[r>>2]=u[r>>2]|("%"==o[e]?parseInt(o.substring(e+1,e+=3),16):o.charCodeAt(e++))<<8*(3-(3&r))
for(i=16*(1+(r+7>>6)),u[i-1]=8*r-8;g<i;g+=16){for(e=0;e<80;e++)r=n(h,5)+l+(e<20?1518500249+(s&a^~s&c):e<40?1859775393+(s^a^c):e<60?2400959708+(s&a^s&c^a&c):3395469782+(s^a^c))+(f[e]=e<16?0|u[g+e]:n(f[e-3]^f[e-8]^f[e-14]^f[e-16],1)),l=c,c=a,a=n(s,30),s=h,h=r
v[0]=h=v[0]+h|0,v[1]=s=v[1]+s|0,v[2]=a=v[2]+a|0,v[3]=c=v[3]+c|0,v[4]=l=v[4]+l|0}for(e=0;e<40;e++)d+=(v[e>>3]>>>4*(7-(7&e))&15).toString(16)
return d}function w(t){return/^[0-9a-f]{11,}$/i.test(t)&&t}function x(t){return b(null==t?"":""+t)}function A(t,n){var i=t.canvas,e=i.width,r=i.height
t.save(),n||(n=Math.min(e,r),t.translate((e-n)/2|0,(r-n)/2|0)),this.l=t,this.k=n,t.clearRect(0,0,n,n)}function S(t,n,i,e){if(!t)throw new Error("No canvas specified.")
m(new A(t,i),w(n)||x(n),e)}function j(t){return(10*t+.5|0)/10}function C(){this.B=""}function M(t){this.C,this.D={},this.R=t,this.k=t.k}function N(t){this.k=t,this.F='<svg xmlns="'+E.T+'" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'">'}function T(t,n,i){var e=new N(n)
return m(new M(e),w(t)||x(t),i),e.toString()}function k(t,n){for(var i=[],e=arguments.length-2;e-- >0;)i[e]=arguments[e+2]
for(var r=document.createElementNS(E.T,n),o=0;o+1<i.length;o+=2)r.setAttribute(i[o],i[o+1])
t.appendChild(r)}function I(t){var n=this.k=Math.min(Number(t.getAttribute(E.U))||100,Number(t.getAttribute(E.V))||100)
for(this.W=t;t.firstChild;)t.removeChild(t.firstChild)
t.setAttribute("viewBox","0 0 "+n+" "+n),t.setAttribute("preserveAspectRatio","xMidYMid meet")}function O(){J&&P(H)}function P(t,n,i){F(t,n,i,function(t,n){if(n)return n==U?new M(new I(t)):new A(t.getContext("2d"))})}function F(t,n,i,e){if("string"!=typeof t){var r=w(n)||null!=n&&x(n)||w(t.getAttribute(G.t))||t.hasAttribute(G.o)&&x(t.getAttribute(G.o))
if(r){var o=e(t,a(t))
o&&m(o,r,i)}}else if(J)for(var u=J(t),f=0;f<u.length;f++)F(u[f],n,i,e)}function R(t,n){return this.each(function(i,e){P(e,t,n)}),this}function q(){var t=(_[L.n]||B[L.G]||{}).replaceMode
"never"!=t&&(O(),"observe"==t&&c(P))}var B=t,L={G:"jdenticon_config",n:"config"},D={},U=1,$=2,G={t:"data-jdenticon-hash",o:"data-jdenticon-value"},H="["+G.t+"],["+G.o+"]",J="undefined"!=typeof document&&document.querySelectorAll.bind(document)
v.prototype.L=function(t,n,i,e){var r=this.u+this.K,o=this.v+this.K,u=this.Z
return 1===u?new l(r-n-(e||0),this.v+t):2===u?new l(r-t-(i||0),o-n-(e||0)):3===u?new l(this.u+n,o-t-(i||0)):new l(this.u+t,this.v+n)}
var K=new v(0,0,0,0),V=g.prototype
V.g=function(t,n){for(var i=this,e=n?-2:2,r=[],o=n?t.length-2:0;o<t.length&&o>=0;o+=e)r.push(i.A.L(t[o],t[o+1]))
this.M.g(r)},V.h=function(t,n,i,e){var r=this.A.L(t,n,i,i)
this.M.h(r,i,e)},V.i=function(t,n,i,e,r){this.g([t,n,t+i,n,t+i,n+e,t,n+e],r)},V.j=function(t,n,i,e,r,o){var u=[t+i,n,t+i,n+e,t,n+e,t,n]
u.splice((r||0)%4*2,2),this.g(u,o)},V.N=function(t,n,i,e,r){this.g([t+i/2,n,t+i,n+e/2,t+i/2,n+e,t,n+e/2],r)}
var W=A.prototype
W.m=function(t){var n=this.l,i=this.k
n.fillStyle=o(t),n.fillRect(0,0,i,i)},W.O=function(t){var n=this.l
n.fillStyle=o(t),n.beginPath()},W.P=function(){this.l.fill()},W.g=function(t){var n=this.l
n.moveTo(t[0].x,t[0].y)
for(var i=1;i<t.length;i++)n.lineTo(t[i].x,t[i].y)
n.closePath()},W.h=function(t,n,i){var e=this.l,r=n/2
e.moveTo(t.x+r,t.y+r),e.arc(t.x+r,t.y+r,r,0,2*Math.PI,i),e.closePath()},W.finish=function(){this.l.restore()}
var Y=C.prototype
Y.g=function(t){for(var n="",i=0;i<t.length;i++)n+=(i?"L":"M")+j(t[i].x)+" "+j(t[i].y)
this.B+=n+"Z"},Y.h=function(t,n,i){var e=i?0:1,r=j(n/2),o=j(n),u="a"+r+","+r+" 0 1,"+e+" "
this.B+="M"+j(t.x)+" "+j(t.y+n/2)+u+o+",0"+u+-o+",0"}
var Z=M.prototype
Z.m=function(t){var i=/^(#......)(..)?/.exec(t),e=i[2]?n(i[2],0)/255:1
this.R.m(i[1],e)},Z.O=function(t){this.C=this.D[t]||(this.D[t]=new C)},Z.P=function(){},Z.g=function(t){this.C.g(t)},Z.h=function(t,n,i){this.C.h(t,n,i)},Z.finish=function(){var t=this,n=this.D
for(var i in n)n.hasOwnProperty(i)&&t.R.S(i,n[i].B)}
var E={T:"http://www.w3.org/2000/svg",U:"width",V:"height"},X=N.prototype
X.m=function(t,n){n&&(this.F+='<rect width="100%" height="100%" fill="'+t+'" opacity="'+n.toFixed(2)+'"/>')},X.S=function(t,n){this.F+='<path fill="'+t+'" d="'+n+'"/>'},X.toString=function(){return this.F+"</svg>"}
var Q=I.prototype
Q.m=function(t,n){n&&k(this.W,"rect",E.U,"100%",E.V,"100%","fill",t,"opacity",n)},Q.S=function(t,n){k(this.W,"path","fill",t,"d",n)}
var _=O
!function(t){D=t}(_),_.configure=h,_.drawIcon=S,_.toSvg=T,_.update=P,_.updateCanvas=P,_.updateSvg=P,_.version="3.2.0",_.bundle="browser-umd"
var z=B.jQuery
return z&&(z.fn.jdenticon=R),"function"==typeof setTimeout&&setTimeout(q,0),_}(t)
"undefined"!=typeof module&&"exports"in module?module.exports=i:"function"==typeof define&&define.amd?define([],function(){return i}):t.jdenticon=i}("undefined"!=typeof self?self:this)
