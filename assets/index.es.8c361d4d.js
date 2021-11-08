import{e as te,g as p,i as ie,w as N,C as ae,o as l,b as oe,k as b,F as k,q as j,n as z,p as D,l as $,E as O,s as g,m as L,t as T,G as P,T as _e,D as q,I as ue,J as se}from"./vendor.35d0f4de.js";/*! *****************************************************************************
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
***************************************************************************** */function V(e,_,n,i){function u(c){return c instanceof n?c:new n(function(t){t(c)})}return new(n||(n=Promise))(function(c,t){function h(v){try{y(i.next(v))}catch(w){t(w)}}function s(v){try{y(i.throw(v))}catch(w){t(w)}}function y(v){v.done?c(v.value):u(v.value).then(h,s)}y((i=i.apply(e,_||[])).next())})}function re(e,_,n){let i=document.createElement(e);return i.setAttribute("class",_),n&&(i.innerText=n),i}const G=function(e){let _=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?_[n]=G(e[n]):_[n]=e[n]);return _};var C=te({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0}},setup(e){const _=p(0),n=p(0),i=p(!1),u=p(0),c=p(0),t=p(!1),h=p(null),s=p([]),y=ie(()=>e.menuList.some(a=>a.children&&a.children.length>0)),v=p(10),w=p();N(t,a=>V(this,void 0,void 0,function*(){var d,r;if(a){yield q();let m=w.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(f=>{m.style.setProperty(`--menu-${f}`,e.menuWrapperCss&&e.menuWrapperCss[f])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(f=>{m.style.setProperty(`--menu-item-${f}`,e.menuItemCss&&e.menuItemCss[f])});let o=(r=(d=e.menuItemCss)===null||d===void 0?void 0:d.arrowSize)===null||r===void 0?void 0:r.match(/\d+/);o?v.value=~~o[0]||10:v.value=10,m.style.setProperty("--menu-item-arrowRealSize",v.value/2+"px")}}));const Y=a=>{a.disabled||(a.fn&&typeof a.fn=="function"&&a.fn(e.params,h.value,e.el),t.value=!1)},K=a=>{a.disabled||(a.fn&&typeof a.fn=="function"&&!a.disabled&&(a.fn(e.params,h.value,e.el),i.value=!1),t.value=!1)},Q=(a,d)=>{if(d.children&&!d.disabled){i.value=!0;const r=a.currentTarget;if(!r)return;const{offsetWidth:m}=r,o=r.querySelector(".__menu__sub__wrapper");if(!o)return;const{offsetWidth:f,offsetHeight:S}=o,{innerWidth:ne,innerHeight:R}=window,{top:I,left:B}=r.getBoundingClientRect();B+m+f>ne-5?_.value=B-f+5:_.value=B+m,I+S>R-5?n.value=R-S:n.value=I+5}},A=(a,d,r,m)=>a.map(o=>(o.children&&(o.children=A(o.children,d,r,m)),o.label&&typeof o.label=="function"&&(o.label=o.label(m,d,r)),o.tips&&typeof o.tips=="function"&&(o.tips=o.tips(m,d,r)),o.hidden&&typeof o.hidden=="function"&&(o.hidden=o.hidden(m,d,r)),o.disabled&&typeof o.disabled=="function"&&(o.disabled=o.disabled(m,d,r)),o)),Z=(a=0,d=0)=>V(this,void 0,void 0,function*(){if(h.value=document.elementFromPoint(a-1,d-1),e.menuHiddenFn?t.value=!e.menuHiddenFn(e.params,h.value,e.el):t.value=!0,!t.value)return;s.value=G(e.menuList),s.value=A(s.value,h.value,e.el,e.params),yield q();const{innerWidth:r,innerHeight:m}=window,f=w.value.offsetHeight,S=e.menuWidth||200;c.value=a+S+1>r?r-S-5:a+1,u.value=d+f+1>m?m-f-5:d+1}),ee=()=>{t.value=!1},F=a=>{w.value&&!w.value.contains(a.currentTarget)&&(t.value=!1,document.oncontextmenu=null)};return N(()=>e.injectCloseListener,a=>{a?document.addEventListener("mousedown",F):document.removeEventListener("mousedown",F)},{immediate:!0}),ae(()=>{document.removeEventListener("mousedown",F)}),{subLeft:_,subTop:n,hoverFlag:i,menuTop:u,menuLeft:c,showMenu:t,clickDomEl:h,calcMenuList:s,arrowSize:v,hasSubMenu:y,MenuWrapper:w,handleMenuItemClick:Y,handleSubMenuItemClick:K,handleMenuMouseEnter:Q,show:Z,close:ee}}});const de=["onMousedown","onMouseenter"],me={key:0,class:"__menu__item-icon"},le={class:"__menu__item-label"},ce={class:"__menu__item-tips"},ve={class:"__menu__item-arrow-after"},be=["onMousedown"],he={class:"__menu__sub__item-label"},fe={class:"__menu__sub__item-tips"};function pe(e,_,n,i,u,c){return l(),oe(_e,{to:"body",disabled:!e.appendToBody},[e.showMenu?(l(),b("div",{key:0,ref:"MenuWrapper",class:"__menu__wrapper",style:P({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(l(!0),b(k,null,j(e.calcMenuList,(t,h)=>(l(),b(k,null,[!t.hidden&&!t.line?(l(),b("div",{key:h,class:z(["__menu__item",{disabled:t.disabled}]),onMousedown:D(s=>e.handleMenuItemClick(t),["stop"]),onMouseenter:s=>e.handleMenuMouseEnter(s,t)},[e.hasIcon?(l(),b("span",me,[e.iconType==="font-icon"?$((l(),b("i",{key:0,class:z(t.icon)},null,2)),[[O,t.icon]]):g("v-if",!0)])):g("v-if",!0),L("span",le,T(t.label),1),L("span",ce,T(t.tips||""),1),e.hasSubMenu?(l(),b("span",{key:1,class:z(["__menu__item-arrow",{show:e.hasSubMenu&&t.children}]),style:P({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[$(L("span",ve,null,512),[[O,e.hasSubMenu&&t.children]])],6)):g("v-if",!0),t.children&&t.children.length>0?$((l(),b("div",{key:2,class:"__menu__sub__wrapper",style:P({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(l(!0),b(k,null,j(t.children,(s,y)=>(l(),b(k,null,[!s.hidden&&!s.line?(l(),b("div",{key:y,class:z(["__menu__sub__item",{disabled:s.disabled}]),onMousedown:D(v=>e.handleSubMenuItemClick(s),["stop"])},[L("span",he,T(s.label),1),L("span",fe,T(s.tips||""),1)],42,be)):g("v-if",!0),s.line?(l(),b("div",{key:y,class:"__menu__line"})):g("v-if",!0)],64))),256))],4)),[[O,e.hoverFlag]]):g("v-if",!0)],42,de)):g("v-if",!0),t.line?(l(),b("div",{key:h,class:"__menu__line"})):g("v-if",!0)],64))),256))],4)):g("v-if",!0)],8,["disabled"])}function we(e,_){_===void 0&&(_={});var n=_.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",n==="top"&&i.firstChild?i.insertBefore(u,i.firstChild):i.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var ge=`.__menu__mask[data-v-3d21bc0a] {
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
  line-height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
  line-height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
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
}`;we(ge);C.render=pe;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";C.install=e=>{e.component(C.name,C)};function J(e){var _;const n="__mouse__menu__container";let i;document.querySelector(`.${n}`)?i=document.querySelector(`.${n}`):i=re("div",n);const u=ue(C,e);return se(u,i),document.body.appendChild(i),(_=u.component)===null||_===void 0?void 0:_.proxy}let x,E,H,M;function ye(e,_,n=500){H=i=>{x&&x.close(),i.preventDefault(),E&&clearTimeout(E),E=window.setTimeout(()=>{_(i)},n)},M=()=>{clearTimeout(E)},e.addEventListener("touchstart",H),e.addEventListener("touchmove",M),e.addEventListener("touchend",M),e.addEventListener("touchcancel",M)}function U(e){e.removeEventListener("touchstart",H),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",M),e.removeEventListener("touchcancel",M)}let W,X;const Ce=(e,_)=>{const{value:n}=_;if(n.menuList.length>0)W=i=>{i.preventDefault();const u=J(Object.assign({el:e},n)),{x:c,y:t}=i;u.show(c,t)},e.removeEventListener("contextmenu",W),e.addEventListener("contextmenu",W),n.useLongPressInMobile&&"ontouchstart"in window&&(X=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),x=J(Object.assign({el:e},n));const{touches:u}=i,{clientX:c,clientY:t}=u[0];x.show(c,t),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>x.close(),e.onmousedown=()=>x.close()},500)},U(e),ye(e,X,n.longPressDuration||500));else throw new Error("At least set one menu list!")},Me=e=>{e.removeEventListener("contextmenu",W),"touchstart"in window&&U(e)},Se={mounted:Ce,unmounted:Me};export{Se as M};
