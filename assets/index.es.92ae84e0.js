import{d as se,b as w,f as q,w as D,A as re,o as m,c as K,h as v,F as z,l as V,G,H as J,k as U,i as E,B as F,n as P,I as de,m as y,j as k,t as B,C as A,T as le,E as X,p as me,J as ce}from"./index.42748373.js";/*! *****************************************************************************
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
***************************************************************************** */function Y(e,u,n,t){function _(b){return b instanceof n?b:new n(function(a){a(b)})}return new(n||(n=Promise))(function(b,a){function c(f){try{h(t.next(f))}catch(g){a(g)}}function s(f){try{h(t.throw(f))}catch(g){a(g)}}function h(f){f.done?b(f.value):_(f.value).then(c,s)}h((t=t.apply(e,u||[])).next())})}function ve(e,u,n){let t=document.createElement(e);return t.setAttribute("class",u),n&&(t.innerText=n),t}const ee=function(e){let u=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?u[n]=ee(e[n]):u[n]=e[n]);return u};var L=se({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],setup(e,{emit:u}){const n=w(0),t=w(0),_=w(!1),b=w(0),a=w(0),c=w(!1),s=w(null),h=w([]),f=q(()=>e.menuList.some(o=>o.children&&o.children.length>0)),g=w(10),M=w();D(c,o=>Y(this,void 0,void 0,function*(){var r,d;if(o){yield X();let l=M.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(p=>{l.style.setProperty(`--menu-${p}`,e.menuWrapperCss&&e.menuWrapperCss[p])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(p=>{l.style.setProperty(`--menu-item-${p}`,e.menuItemCss&&e.menuItemCss[p])});let i=(d=(r=e.menuItemCss)===null||r===void 0?void 0:r.arrowSize)===null||d===void 0?void 0:d.match(/\d+/);i?g.value=~~i[0]||10:g.value=10,l.style.setProperty("--menu-item-arrowRealSize",g.value/2+"px"),u("open")}else u("close")}));const te=(o,r)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&o.fn(e.params,s.value,e.el,r),c.value=!1)},ie=(o,r)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&!o.disabled&&(o.fn(e.params,s.value,e.el,r),_.value=!1),c.value=!1)},ae=(o,r)=>{if(r.children&&!r.disabled){_.value=!0;const d=o.currentTarget;if(!d)return;const{offsetWidth:l}=d,i=d.querySelector(".__menu__sub__wrapper");if(!i)return;const{offsetWidth:p,offsetHeight:x}=i,{innerWidth:ue,innerHeight:R}=window,{top:I,left:O}=d.getBoundingClientRect();O+l+p>ue-5?n.value=O-p+5:n.value=O+l,I+x>R-5?t.value=R-x:t.value=I+5}},N=(o,r,d,l)=>o.map(i=>(i.children&&(i.children=N(i.children,r,d,l)),i.label&&typeof i.label=="function"&&(i.label=i.label(l,r,d)),i.tips&&typeof i.tips=="function"&&(i.tips=i.tips(l,r,d)),i.icon&&typeof i.icon=="function"&&(i.icon=i.icon(l,r,d)),i.hidden&&typeof i.hidden=="function"&&(i.hidden=i.hidden(l,r,d)),i.disabled&&typeof i.disabled=="function"&&(i.disabled=i.disabled(l,r,d)),i)),oe=(o=0,r=0)=>Y(this,void 0,void 0,function*(){if(s.value=document.elementFromPoint(o-1,r-1),e.menuHiddenFn?c.value=!e.menuHiddenFn(e.params,s.value,e.el):c.value=!0,!c.value)return;h.value=ee(e.menuList),h.value=N(h.value,s.value,e.el,e.params),yield X();const{innerWidth:d,innerHeight:l}=window,p=M.value.offsetHeight,x=e.menuWidth||200;a.value=o+x+1>d?d-x-5:o+1,b.value=r+p+1>l?l-p-5:r+1}),_e=()=>{c.value=!1},T=q(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),$=o=>{M.value&&!M.value.contains(o.currentTarget)&&(c.value=!1,document.oncontextmenu=null)};return D(()=>e.injectCloseListener,o=>{o?document.addEventListener(T.value,$):document.removeEventListener(T.value,$)},{immediate:!0}),re(()=>{document.removeEventListener(T.value,$)}),{subLeft:n,subTop:t,hoverFlag:_,menuTop:b,menuLeft:a,showMenu:c,clickDomEl:s,calcMenuList:h,arrowSize:g,hasSubMenu:f,MenuWrapper:M,handleMenuItemClick:te,handleSubMenuItemClick:ie,handleMenuMouseEnter:ae,show:oe,close:_e,clickEventKey:T}}});const be=["onMouseenter"],he={key:0,class:"__menu__item-icon"},fe=["innerHTML"],pe={class:"__menu__item-label"},we={class:"__menu__item-tips"},ye={class:"__menu__item-arrow-after"},ge={class:"__menu__sub__item-label"},Ce={class:"__menu__sub__item-tips"};function Se(e,u,n,t,_,b){return m(),K(le,{to:"body",disabled:!e.appendToBody},[e.showMenu?(m(),v("div",{key:0,ref:"MenuWrapper",class:P(["__menu__wrapper",e.customClass]),style:A({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(m(!0),v(z,null,V(e.calcMenuList,(a,c)=>(m(),v(z,null,[!a.hidden&&!a.line?(m(),v("div",G({key:c,class:["__menu__item",a.disabled&&"disabled",a.customClass]},{[J(e.clickEventKey)]:U(s=>e.handleMenuItemClick(a,s),["stop"])},{onMouseenter:s=>e.handleMenuMouseEnter(s,a)}),[e.hasIcon?(m(),v("div",he,[e.iconType==="font-icon"?E((m(),v("i",{key:0,class:P(a.icon)},null,2)),[[F,a.icon]]):e.iconType==="svg-icon"?E((m(),v("div",{key:1,class:"__menu__item-icon-svg",innerHTML:a.icon},null,8,fe)),[[F,a.icon]]):e.iconType==="vnode-icon"?(m(),K(de(a.icon),{key:2})):y("v-if",!0)])):y("v-if",!0),k("span",pe,B(a.label),1),k("span",we,B(a.tips||""),1),e.hasSubMenu?(m(),v("span",{key:1,class:P(["__menu__item-arrow",{show:e.hasSubMenu&&a.children}]),style:A({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[E(k("span",ye,null,512),[[F,e.hasSubMenu&&a.children]])],6)):y("v-if",!0),a.children&&a.children.length>0?E((m(),v("div",{key:2,class:"__menu__sub__wrapper",style:A({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(m(!0),v(z,null,V(a.children,(s,h)=>(m(),v(z,null,[!s.hidden&&!s.line?(m(),v("div",G({key:h,class:["__menu__sub__item",s.disabled&&"disabled",s.customClass]},{[J(e.clickEventKey)]:U(f=>e.handleSubMenuItemClick(s,f),["stop"])}),[k("span",ge,B(s.label),1),k("span",Ce,B(s.tips||""),1)],16)):y("v-if",!0),s.line?(m(),v("div",{key:h,class:"__menu__line"})):y("v-if",!0)],64))),256))],4)),[[F,e.hoverFlag]]):y("v-if",!0)],16,be)):y("v-if",!0),!a.hidden&&a.line?(m(),v("div",{key:c,class:"__menu__line"})):y("v-if",!0)],64))),256))],6)):y("v-if",!0)],8,["disabled"])}function Le(e,u){u===void 0&&(u={});var n=u.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",n==="top"&&t.firstChild?t.insertBefore(_,t.firstChild):t.appendChild(_),_.styleSheet?_.styleSheet.cssText=e:_.appendChild(document.createTextNode(e))}}var Me=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;Le(Me);L.render=Se;L.__scopeId="data-v-3d21bc0a";L.__file="packages/mouse-menu/mouse-menu.vue";L.install=e=>{e.component(L.name,L)};function Q(e){var u;const n="__mouse__menu__container";let t;document.querySelector(`.${n}`)?t=document.querySelector(`.${n}`):t=ve("div",n);const _=me(L,e);return ce(_,t),document.body.appendChild(t),(u=_.component)===null||u===void 0?void 0:u.proxy}let C,W,j,S;function xe(e,u,n=500,t){j=_=>{C&&C.close(),typeof t=="function"?t(_,e)&&_.preventDefault():typeof t=="boolean"&&t&&_.preventDefault(),W&&clearTimeout(W),W=window.setTimeout(()=>{u(_)},n)},S=()=>{clearTimeout(W)},e.addEventListener("touchstart",j),e.addEventListener("touchmove",S),e.addEventListener("touchend",S),e.addEventListener("touchcancel",S)}function ne(e){e.removeEventListener("touchstart",j),e.removeEventListener("touchmove",S),e.removeEventListener("touchend",S),e.removeEventListener("touchcancel",S)}let H,Z;const ke=(e,u)=>{const{value:n}=u;if(n.menuList.length>0)H=t=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;t.preventDefault(),C=Q(Object.assign({el:e},n));const{x:_,y:b}=t;C.show(_,b)},e.removeEventListener("contextmenu",H),e.addEventListener("contextmenu",H),n.useLongPressInMobile&&"ontouchstart"in window&&(Z=t=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;C=Q(Object.assign({el:e},n));const{touches:_}=t,{clientX:b,clientY:a}=_[0];C.show(b,a),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>C.close(),e.onmousedown=()=>C.close()},500)},ne(e),xe(e,Z,n.longPressDuration||500,n.longPressPreventDefault));else throw new Error("At least set one menu list!")},Te=e=>{e.removeEventListener("contextmenu",H),"touchstart"in window&&ne(e)},Ee={mounted:ke,unmounted:Te};export{Ee as M,C as a};
