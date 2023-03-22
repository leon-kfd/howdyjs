import{d as ie,a as p,e as ae,w as N,A as oe,o as l,c as I,g as v,F as T,k as D,n as x,j as q,h as z,B as E,G as _e,l as y,i as k,t as F,C as O,T as ue,E as V,H as se,I as de}from"./index.62737a9d.js";/*! *****************************************************************************
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
***************************************************************************** */function G(e,_,n,i){function s(b){return b instanceof n?b:new n(function(t){t(b)})}return new(n||(n=Promise))(function(b,t){function h(c){try{g(i.next(c))}catch(w){t(w)}}function d(c){try{g(i.throw(c))}catch(w){t(w)}}function g(c){c.done?b(c.value):s(c.value).then(h,d)}g((i=i.apply(e,_||[])).next())})}function re(e,_,n){let i=document.createElement(e);return i.setAttribute("class",_),n&&(i.innerText=n),i}const Y=function(e){let _=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?_[n]=Y(e[n]):_[n]=e[n]);return _};var S=ie({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const _=p(0),n=p(0),i=p(!1),s=p(0),b=p(0),t=p(!1),h=p(null),d=p([]),g=ae(()=>e.menuList.some(o=>o.children&&o.children.length>0)),c=p(10),w=p();N(t,o=>G(this,void 0,void 0,function*(){var u,r;if(o){yield V();let m=w.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(f=>{m.style.setProperty(`--menu-${f}`,e.menuWrapperCss&&e.menuWrapperCss[f])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(f=>{m.style.setProperty(`--menu-item-${f}`,e.menuItemCss&&e.menuItemCss[f])});let a=(r=(u=e.menuItemCss)===null||u===void 0?void 0:u.arrowSize)===null||r===void 0?void 0:r.match(/\d+/);a?c.value=~~a[0]||10:c.value=10,m.style.setProperty("--menu-item-arrowRealSize",c.value/2+"px")}}));const K=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&o.fn(e.params,h.value,e.el,u),t.value=!1)},Q=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&!o.disabled&&(o.fn(e.params,h.value,e.el,u),i.value=!1),t.value=!1)},Z=(o,u)=>{if(u.children&&!u.disabled){i.value=!0;const r=o.currentTarget;if(!r)return;const{offsetWidth:m}=r,a=r.querySelector(".__menu__sub__wrapper");if(!a)return;const{offsetWidth:f,offsetHeight:L}=a,{innerWidth:te,innerHeight:j}=window,{top:R,left:$}=r.getBoundingClientRect();$+m+f>te-5?_.value=$-f+5:_.value=$+m,R+L>j-5?n.value=j-L:n.value=R+5}},A=(o,u,r,m)=>o.map(a=>(a.children&&(a.children=A(a.children,u,r,m)),a.label&&typeof a.label=="function"&&(a.label=a.label(m,u,r)),a.tips&&typeof a.tips=="function"&&(a.tips=a.tips(m,u,r)),a.icon&&typeof a.icon=="function"&&(a.icon=a.icon(m,u,r)),a.hidden&&typeof a.hidden=="function"&&(a.hidden=a.hidden(m,u,r)),a.disabled&&typeof a.disabled=="function"&&(a.disabled=a.disabled(m,u,r)),a)),ee=(o=0,u=0)=>G(this,void 0,void 0,function*(){if(h.value=document.elementFromPoint(o-1,u-1),e.menuHiddenFn?t.value=!e.menuHiddenFn(e.params,h.value,e.el):t.value=!0,!t.value)return;d.value=Y(e.menuList),d.value=A(d.value,h.value,e.el,e.params),yield V();const{innerWidth:r,innerHeight:m}=window,f=w.value.offsetHeight,L=e.menuWidth||200;b.value=o+L+1>r?r-L-5:o+1,s.value=u+f+1>m?m-f-5:u+1}),ne=()=>{t.value=!1},H=o=>{w.value&&!w.value.contains(o.currentTarget)&&(t.value=!1,document.oncontextmenu=null)};return N(()=>e.injectCloseListener,o=>{o?document.addEventListener("mousedown",H):document.removeEventListener("mousedown",H)},{immediate:!0}),oe(()=>{document.removeEventListener("mousedown",H)}),{subLeft:_,subTop:n,hoverFlag:i,menuTop:s,menuLeft:b,showMenu:t,clickDomEl:h,calcMenuList:d,arrowSize:c,hasSubMenu:g,MenuWrapper:w,handleMenuItemClick:K,handleSubMenuItemClick:Q,handleMenuMouseEnter:Z,show:ee,close:ne}}});const me=["onMousedown","onMouseenter"],le={key:0,class:"__menu__item-icon"},ce=["innerHTML"],ve={class:"__menu__item-label"},be={class:"__menu__item-tips"},he={class:"__menu__item-arrow-after"},fe=["onMousedown"],pe={class:"__menu__sub__item-label"},we={class:"__menu__sub__item-tips"};function ye(e,_,n,i,s,b){return l(),I(ue,{to:"body",disabled:!e.appendToBody},[e.showMenu?(l(),v("div",{key:0,ref:"MenuWrapper",class:x(["__menu__wrapper",e.customClass]),style:O({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(l(!0),v(T,null,D(e.calcMenuList,(t,h)=>(l(),v(T,null,[!t.hidden&&!t.line?(l(),v("div",{key:h,class:x(["__menu__item",t.disabled&&"disabled",t.customClass]),onMousedown:q(d=>e.handleMenuItemClick(t,d),["stop"]),onMouseenter:d=>e.handleMenuMouseEnter(d,t)},[e.hasIcon?(l(),v("div",le,[e.iconType==="font-icon"?z((l(),v("i",{key:0,class:x(t.icon)},null,2)),[[E,t.icon]]):e.iconType==="svg-icon"?z((l(),v("div",{key:1,class:"__menu__item-icon-svg",innerHTML:t.icon},null,8,ce)),[[E,t.icon]]):e.iconType==="vnode-icon"?(l(),I(_e(t.icon),{key:2})):y("v-if",!0)])):y("v-if",!0),k("span",ve,F(t.label),1),k("span",be,F(t.tips||""),1),e.hasSubMenu?(l(),v("span",{key:1,class:x(["__menu__item-arrow",{show:e.hasSubMenu&&t.children}]),style:O({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[z(k("span",he,null,512),[[E,e.hasSubMenu&&t.children]])],6)):y("v-if",!0),t.children&&t.children.length>0?z((l(),v("div",{key:2,class:"__menu__sub__wrapper",style:O({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(l(!0),v(T,null,D(t.children,(d,g)=>(l(),v(T,null,[!d.hidden&&!d.line?(l(),v("div",{key:g,class:x(["__menu__sub__item",d.disabled&&"disabled",d.customClass]),onMousedown:q(c=>e.handleSubMenuItemClick(d,c),["stop"])},[k("span",pe,F(d.label),1),k("span",we,F(d.tips||""),1)],42,fe)):y("v-if",!0),d.line?(l(),v("div",{key:g,class:"__menu__line"})):y("v-if",!0)],64))),256))],4)),[[E,e.hoverFlag]]):y("v-if",!0)],42,me)):y("v-if",!0),!t.hidden&&t.line?(l(),v("div",{key:h,class:"__menu__line"})):y("v-if",!0)],64))),256))],6)):y("v-if",!0)],8,["disabled"])}function ge(e,_){_===void 0&&(_={});var n=_.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Ce=`.__menu__mask[data-v-3d21bc0a] {
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
}`;ge(Ce);S.render=ye;S.__scopeId="data-v-3d21bc0a";S.__file="packages/mouse-menu/mouse-menu.vue";S.install=e=>{e.component(S.name,S)};function U(e){var _;const n="__mouse__menu__container";let i;document.querySelector(`.${n}`)?i=document.querySelector(`.${n}`):i=re("div",n);const s=se(S,e);return de(s,i),document.body.appendChild(i),(_=s.component)===null||_===void 0?void 0:_.proxy}let C,W,P,M;function Me(e,_,n=500){P=i=>{C&&C.close(),i.preventDefault(),W&&clearTimeout(W),W=window.setTimeout(()=>{_(i)},n)},M=()=>{clearTimeout(W)},e.addEventListener("touchstart",P),e.addEventListener("touchmove",M),e.addEventListener("touchend",M),e.addEventListener("touchcancel",M)}function J(e){e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",M),e.removeEventListener("touchcancel",M)}let B,X;const Se=(e,_)=>{const{value:n}=_;if(n.menuList.length>0)B=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),C=U(Object.assign({el:e},n));const{x:s,y:b}=i;C.show(s,b)},e.removeEventListener("contextmenu",B),e.addEventListener("contextmenu",B),n.useLongPressInMobile&&"ontouchstart"in window&&(X=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),C=U(Object.assign({el:e},n));const{touches:s}=i,{clientX:b,clientY:t}=s[0];C.show(b,t),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>C.close(),e.onmousedown=()=>C.close()},500)},J(e),Me(e,X,n.longPressDuration||500));else throw new Error("At least set one menu list!")},Le=e=>{e.removeEventListener("contextmenu",B),"touchstart"in window&&J(e)},ke={mounted:Se,unmounted:Le};export{ke as M,C as a};
