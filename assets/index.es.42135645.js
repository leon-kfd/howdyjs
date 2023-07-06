import{d as ae,b as w,f as oe,w as I,A as _e,o as l,c as D,h as v,F as z,l as q,n as k,k as V,i as E,B as F,G as ue,m as y,j as T,t as W,C as P,T as se,E as G,H as de,I as re}from"./index.a4fae731.js";/*! *****************************************************************************
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
***************************************************************************** */function U(e,_,n,t){function u(b){return b instanceof n?b:new n(function(a){a(b)})}return new(n||(n=Promise))(function(b,a){function c(f){try{h(t.next(f))}catch(g){a(g)}}function s(f){try{h(t.throw(f))}catch(g){a(g)}}function h(f){f.done?b(f.value):u(f.value).then(c,s)}h((t=t.apply(e,_||[])).next())})}function me(e,_,n){let t=document.createElement(e);return t.setAttribute("class",_),n&&(t.innerText=n),t}const J=function(e){let _=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?_[n]=J(e[n]):_[n]=e[n]);return _};var S=ae({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],setup(e,{emit:_}){const n=w(0),t=w(0),u=w(!1),b=w(0),a=w(0),c=w(!1),s=w(null),h=w([]),f=oe(()=>e.menuList.some(o=>o.children&&o.children.length>0)),g=w(10),L=w();I(c,o=>U(this,void 0,void 0,function*(){var d,r;if(o){yield G();let m=L.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(p=>{m.style.setProperty(`--menu-${p}`,e.menuWrapperCss&&e.menuWrapperCss[p])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(p=>{m.style.setProperty(`--menu-item-${p}`,e.menuItemCss&&e.menuItemCss[p])});let i=(r=(d=e.menuItemCss)===null||d===void 0?void 0:d.arrowSize)===null||r===void 0?void 0:r.match(/\d+/);i?g.value=~~i[0]||10:g.value=10,m.style.setProperty("--menu-item-arrowRealSize",g.value/2+"px"),_("open")}else _("close")}));const Q=(o,d)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&o.fn(e.params,s.value,e.el,d),c.value=!1)},Z=(o,d)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&!o.disabled&&(o.fn(e.params,s.value,e.el,d),u.value=!1),c.value=!1)},ee=(o,d)=>{if(d.children&&!d.disabled){u.value=!0;const r=o.currentTarget;if(!r)return;const{offsetWidth:m}=r,i=r.querySelector(".__menu__sub__wrapper");if(!i)return;const{offsetWidth:p,offsetHeight:x}=i,{innerWidth:ie,innerHeight:R}=window,{top:N,left:O}=r.getBoundingClientRect();O+m+p>ie-5?n.value=O-p+5:n.value=O+m,N+x>R-5?t.value=R-x:t.value=N+5}},j=(o,d,r,m)=>o.map(i=>(i.children&&(i.children=j(i.children,d,r,m)),i.label&&typeof i.label=="function"&&(i.label=i.label(m,d,r)),i.tips&&typeof i.tips=="function"&&(i.tips=i.tips(m,d,r)),i.icon&&typeof i.icon=="function"&&(i.icon=i.icon(m,d,r)),i.hidden&&typeof i.hidden=="function"&&(i.hidden=i.hidden(m,d,r)),i.disabled&&typeof i.disabled=="function"&&(i.disabled=i.disabled(m,d,r)),i)),ne=(o=0,d=0)=>U(this,void 0,void 0,function*(){if(s.value=document.elementFromPoint(o-1,d-1),e.menuHiddenFn?c.value=!e.menuHiddenFn(e.params,s.value,e.el):c.value=!0,!c.value)return;h.value=J(e.menuList),h.value=j(h.value,s.value,e.el,e.params),yield G();const{innerWidth:r,innerHeight:m}=window,p=L.value.offsetHeight,x=e.menuWidth||200;a.value=o+x+1>r?r-x-5:o+1,b.value=d+p+1>m?m-p-5:d+1}),te=()=>{c.value=!1},$=o=>{L.value&&!L.value.contains(o.currentTarget)&&(c.value=!1,document.oncontextmenu=null)};return I(()=>e.injectCloseListener,o=>{o?document.addEventListener("mousedown",$):document.removeEventListener("mousedown",$)},{immediate:!0}),_e(()=>{document.removeEventListener("mousedown",$)}),{subLeft:n,subTop:t,hoverFlag:u,menuTop:b,menuLeft:a,showMenu:c,clickDomEl:s,calcMenuList:h,arrowSize:g,hasSubMenu:f,MenuWrapper:L,handleMenuItemClick:Q,handleSubMenuItemClick:Z,handleMenuMouseEnter:ee,show:ne,close:te}}});const le=["onMousedown","onMouseenter"],ce={key:0,class:"__menu__item-icon"},ve=["innerHTML"],be={class:"__menu__item-label"},he={class:"__menu__item-tips"},fe={class:"__menu__item-arrow-after"},pe=["onMousedown"],we={class:"__menu__sub__item-label"},ye={class:"__menu__sub__item-tips"};function ge(e,_,n,t,u,b){return l(),D(se,{to:"body",disabled:!e.appendToBody},[e.showMenu?(l(),v("div",{key:0,ref:"MenuWrapper",class:k(["__menu__wrapper",e.customClass]),style:P({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(l(!0),v(z,null,q(e.calcMenuList,(a,c)=>(l(),v(z,null,[!a.hidden&&!a.line?(l(),v("div",{key:c,class:k(["__menu__item",a.disabled&&"disabled",a.customClass]),onMousedown:V(s=>e.handleMenuItemClick(a,s),["stop"]),onMouseenter:s=>e.handleMenuMouseEnter(s,a)},[e.hasIcon?(l(),v("div",ce,[e.iconType==="font-icon"?E((l(),v("i",{key:0,class:k(a.icon)},null,2)),[[F,a.icon]]):e.iconType==="svg-icon"?E((l(),v("div",{key:1,class:"__menu__item-icon-svg",innerHTML:a.icon},null,8,ve)),[[F,a.icon]]):e.iconType==="vnode-icon"?(l(),D(ue(a.icon),{key:2})):y("v-if",!0)])):y("v-if",!0),T("span",be,W(a.label),1),T("span",he,W(a.tips||""),1),e.hasSubMenu?(l(),v("span",{key:1,class:k(["__menu__item-arrow",{show:e.hasSubMenu&&a.children}]),style:P({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[E(T("span",fe,null,512),[[F,e.hasSubMenu&&a.children]])],6)):y("v-if",!0),a.children&&a.children.length>0?E((l(),v("div",{key:2,class:"__menu__sub__wrapper",style:P({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(l(!0),v(z,null,q(a.children,(s,h)=>(l(),v(z,null,[!s.hidden&&!s.line?(l(),v("div",{key:h,class:k(["__menu__sub__item",s.disabled&&"disabled",s.customClass]),onMousedown:V(f=>e.handleSubMenuItemClick(s,f),["stop"])},[T("span",we,W(s.label),1),T("span",ye,W(s.tips||""),1)],42,pe)):y("v-if",!0),s.line?(l(),v("div",{key:h,class:"__menu__line"})):y("v-if",!0)],64))),256))],4)),[[F,e.hoverFlag]]):y("v-if",!0)],42,le)):y("v-if",!0),!a.hidden&&a.line?(l(),v("div",{key:c,class:"__menu__line"})):y("v-if",!0)],64))),256))],6)):y("v-if",!0)],8,["disabled"])}function Ce(e,_){_===void 0&&(_={});var n=_.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",n==="top"&&t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var Me=`.__menu__mask[data-v-3d21bc0a] {
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
}`;Ce(Me);S.render=ge;S.__scopeId="data-v-3d21bc0a";S.__file="packages/mouse-menu/mouse-menu.vue";S.install=e=>{e.component(S.name,S)};function X(e){var _;const n="__mouse__menu__container";let t;document.querySelector(`.${n}`)?t=document.querySelector(`.${n}`):t=me("div",n);const u=de(S,e);return re(u,t),document.body.appendChild(t),(_=u.component)===null||_===void 0?void 0:_.proxy}let C,B,A,M;function Se(e,_,n=500){A=t=>{C&&C.close(),t.preventDefault(),B&&clearTimeout(B),B=window.setTimeout(()=>{_(t)},n)},M=()=>{clearTimeout(B)},e.addEventListener("touchstart",A),e.addEventListener("touchmove",M),e.addEventListener("touchend",M),e.addEventListener("touchcancel",M)}function K(e){e.removeEventListener("touchstart",A),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",M),e.removeEventListener("touchcancel",M)}let H,Y;const Le=(e,_)=>{const{value:n}=_;if(n.menuList.length>0)H=t=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;t.preventDefault(),C=X(Object.assign({el:e},n));const{x:u,y:b}=t;C.show(u,b)},e.removeEventListener("contextmenu",H),e.addEventListener("contextmenu",H),n.useLongPressInMobile&&"ontouchstart"in window&&(Y=t=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;t.preventDefault(),C=X(Object.assign({el:e},n));const{touches:u}=t,{clientX:b,clientY:a}=u[0];C.show(b,a),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>C.close(),e.onmousedown=()=>C.close()},500)},K(e),Se(e,Y,n.longPressDuration||500));else throw new Error("At least set one menu list!")},xe=e=>{e.removeEventListener("contextmenu",H),"touchstart"in window&&K(e)},Te={mounted:Le,unmounted:xe};export{Te as M,C as a};
