import{d as E,a as k,e as H,z as A,A as M,o as $,c as q,h as D,B as j,i as d,C as V,n as S,g as T,D as C,l as z,j as U,T as G,E as b,t as J,q as K,s as Q}from"./index.48b516a8.js";/*! *****************************************************************************
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
***************************************************************************** */function I(n,i,e,o){function t(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function y(l){try{a(o.next(l))}catch(g){s(g)}}function u(l){try{a(o.throw(l))}catch(g){s(g)}}function a(l){l.done?r(l.value):t(l.value).then(y,u)}a((o=o.apply(n,i||[])).next())})}function X(n,i){const e=i.parentNode;e.lastChild===i?e.appendChild(n):e.insertBefore(n,i.nextSibling)}var h=E({name:"AnimationDialog",props:{width:{type:String,default:"60vw"},height:{type:String,default:"70vh"},animationMode:{type:Boolean,default:!1},animationIn:{type:String,default:"bounceIn"},animationOut:{type:String,default:"bounceOut"},time:{type:Number,default:500},timingFunction:{type:String,default:"ease-in-out"},openFromItself:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},customClass:String,customWrapperClass:String,listenWindowSizeChange:{type:Boolean,default:!1},debounceWait:{type:Number,default:200},title:{type:String},closeOnClickOutside:{type:Boolean,default:!0}},emits:["beforeClose","close"],setup(n,{emit:i}){const e=k(),o=k(),t=k(),r=H(()=>n.time/1e3);let s=null;const y=()=>{s&&clearTimeout(s),s=setTimeout(()=>I(this,void 0,void 0,function*(){const{width:c,height:f}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${c/2}px`,e.value.top=`calc(50% - ${f/2}px)`,yield b();const{top:p,left:m,width:v,height:w}=e.value.getBoundingClientRect();t.value.style.top=`${p}px`,t.value.style.left=`${m}px`,t.value.style.width=`${v}px`,t.value.style.height=`${w}px`}),n.debounceWait)};A(()=>{n.listenWindowSizeChange&&window.addEventListener("resize",y)}),M(()=>{n.listenWindowSizeChange&&window.removeEventListener("resize",y)});const u=k(!1);let a=null,l=null;const g=c=>I(this,void 0,void 0,function*(){if(n.animationMode){u.value=!0,yield b();const{width:f,height:p}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${f/2}px`,e.value.style.top=`calc(50% - ${p/2}px)`,yield b();const{top:m,left:v,width:w,height:x}=e.value.getBoundingClientRect();t.value.style.cssText=`top:${m}px; 
                                    left: ${v}px;
                                    width: ${w}px;
                                    height: ${x}px;
                                    animation: ${n.animationIn} ${r.value}s forwards`}else{u.value=!0,a=c?typeof c=="string"?document.querySelector(c):c:o.value,a.classList.add("is-open"),yield b();const{top:f,left:p,width:m,height:v}=a.getBoundingClientRect();t.value.classList.add("animating"),t.value.style.cssText=`top:${f}px; left: ${p}px;width: ${m}px;height: ${v}px;`;const{width:w,height:x}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${w/2}px`,e.value.style.top=`calc(50% - ${x/2}px)`,n.openFromItself&&(l=a.cloneNode(!0),a.style.visibility="hidden",X(l,a),l.style.cssText="position:absolute;top:0;left:0;right:0;bottom:0;margin:0;width: auto;height:auto;",t.value.querySelector(".dialog-body").appendChild(l)),yield b();const{top:F,left:_,width:N,height:R}=e.value.getBoundingClientRect();t.value.style.cssText=`top:${F}px; 
                                    left: ${_}px;
                                    width: ${N}px;
                                    height: ${R}px;
                                    transition: ${r.value}s all ${n.timingFunction}`,setTimeout(()=>{t.value.classList.remove("animating")},n.time+10)}}),L=()=>{n.closeOnClickOutside&&B()},B=()=>{if(n.animationMode)t.value.style.animation=`${n.animationOut} ${r.value}s forwards`,i("beforeClose"),setTimeout(()=>{u.value=!1,i("close")},n.time-10);else{if(!a)return;const{top:c,left:f,width:p,height:m}=a.getBoundingClientRect();t.value.classList.add("animating"),t.value.style.cssText=`top:${c}px; 
                                    left: ${f}px;
                                    width: ${p}px;
                                    height: ${m}px;
                                    transition: ${r.value}s all ${n.timingFunction};`,i("beforeClose"),setTimeout(()=>{a&&(a.classList.remove("is-open"),t.value.classList.remove("animating"),u.value=!1,n.openFromItself&&(a.style.visibility="visible",t.value.querySelector(".dialog-body").removeChild(l))),i("close")},n.time+100)}};return{open:g,close:B,staticFake:e,centerFake:o,main:t,show:u,clickOutside:L}}});const O=n=>(K("data-v-1424118a"),n=n(),Q(),n),Y={ref:"centerFake",class:"dialog-center-fake"},Z=O(()=>d("span",{class:"line"},null,-1)),P=O(()=>d("span",{class:"line"},null,-1)),nn=[Z,P],tn={key:0,class:"dialog-title"},en={class:"dialog-static-title"},an={class:"dialog-body"},on={key:1,class:"dialog-footer"};function ln(n,i,e,o,t,r){return $(),q(G,{to:"body",disabled:!n.appendToBody},[D(d("div",{class:S(["animation-dialog-wrapper",n.customWrapperClass]),onClick:i[1]||(i[1]=U((...s)=>n.clickOutside&&n.clickOutside(...s),["self"]))},[d("div",{ref:"staticFake",class:"dialog-static-fake",style:V({width:n.width,height:n.height})},null,4),d("div",Y,null,512),d("div",{ref:"main",class:S(["dialog",n.customClass])},[d("div",{class:"icon-close",onClick:i[0]||(i[0]=(...s)=>n.close&&n.close(...s))},nn),n.$slots.title||n.title?($(),T("div",tn,[C(n.$slots,"title",{},()=>[d("div",en,J(n.title),1)])])):z("v-if",!0),d("div",an,[C(n.$slots,"default")]),n.$slots.footer?($(),T("div",on,[C(n.$slots,"footer")])):z("v-if",!0)],2)],2),[[j,n.show]])],8,["disabled"])}function W(n,i){i===void 0&&(i={});var e=i.insertAt;if(!(!n||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}var sn=`.animation-dialog-wrapper[data-v-1424118a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 100001;
}
.animation-dialog-wrapper .dialog-static-fake[data-v-1424118a] {
  position: absolute;
  visibility: hidden;
}
.animation-dialog-wrapper .dialog-center-fake[data-v-1424118a] {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  visibility: hidden;
}
.animation-dialog-wrapper .dialog[data-v-1424118a] {
  position: absolute;
  background: #fff;
  cursor: default;
  box-shadow: 0 0 5px #888;
  width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.animation-dialog-wrapper .dialog .dialog-body[data-v-1424118a] {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  flex: 1;
}
.animation-dialog-wrapper .dialog .dialog-title .dialog-static-title[data-v-1424118a] {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  padding-left: 20px;
}
.animation-dialog-wrapper .dialog .dialog-title .dialog-static-title[data-v-1424118a]:after {
  content: "";
  position: absolute;
  border-left: 4px solid #88aaff;
  height: 20px;
  top: 20px;
  left: 10px;
}
.animation-dialog-wrapper .dialog.animating .dialog-body[data-v-1424118a] {
  overflow: hidden;
}
.animation-dialog-wrapper .dialog .icon-close[data-v-1424118a] {
  width: 36px;
  height: 36px;
  position: absolute;
  right: 12px;
  top: 10px;
  background: transparent;
  cursor: pointer;
  z-index: 9999;
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a] {
  display: block;
  position: absolute;
  width: 20px;
  height: 2px;
  top: 17px;
  right: 8px;
  transform-origin: center;
  border-radius: 1px;
  background: #99a;
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a]:nth-child(1) {
  transform: rotate(45deg);
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a]:nth-child(2) {
  transform: rotate(-45deg);
}
.animation-dialog-wrapper .dialog .icon-close:hover .line[data-v-1424118a] {
  background: #667;
}`;W(sn);var rn=`\r
/* Inject default animate css mode */\r
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
from,\r
  20%,\r
  40%,\r
  60%,\r
  80%,\r
  to {\r
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
20% {\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
40% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
60% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r
    transform: scale3d(1.03, 1.03, 1.03);
}
80% {\r
    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r
    transform: scale3d(0.97, 0.97, 0.97);
}
to {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1, 1, 1);\r
    transform: scale3d(1, 1, 1);
}
}
@keyframes bounceIn {
from,\r
  20%,\r
  40%,\r
  60%,\r
  80%,\r
  to {\r
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
20% {\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
40% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
60% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r
    transform: scale3d(1.03, 1.03, 1.03);
}
80% {\r
    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r
    transform: scale3d(0.97, 0.97, 0.97);
}
to {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1, 1, 1);\r
    transform: scale3d(1, 1, 1);
}
}
.animate__bounceIn {\r
  -webkit-animation-duration: calc(1s * 0.75);\r
  animation-duration: calc(1s * 0.75);\r
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\r
  animation-duration: calc(var(--animate-duration) * 0.75);\r
  -webkit-animation-name: bounceIn;\r
  animation-name: bounceIn;
}\r
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
20% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
50%,\r
  55% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
to {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
}
@keyframes bounceOut {
20% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
50%,\r
  55% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
to {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
}
.animate__bounceOut {\r
  -webkit-animation-duration: calc(1s * 0.75);\r
  animation-duration: calc(1s * 0.75);\r
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\r
  animation-duration: calc(var(--animate-duration) * 0.75);\r
  -webkit-animation-name: bounceOut;\r
  animation-name: bounceOut;
}\r
`;W(rn);h.render=ln;h.__scopeId="data-v-1424118a";h.__file="packages/animation-dialog/animation-dialog.vue";h.install=n=>{n.component(h.name,h)};export{h as s};
