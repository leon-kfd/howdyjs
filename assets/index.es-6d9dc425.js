import{d as ue,a as h,e as q,w as D,A as se,o as m,c as K,i as c,F as T,m as V,H as J,I as U,l as X,j as z,C as E,n as A,J as re,p as f,k as M,t as F,D as O,T as de,B as Y,q as le,K as me}from"./index-9e0334f6.js";const Z=function(e){let u=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?u[n]=Z(e[n]):u[n]=e[n]);return u};var C=ue({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],setup(e,{emit:u}){const n=h(0),a=h(0),_=h(!1),w=h(0),o=h(0),v=h(!1),s=h(null),y=h([]),H=q(()=>e.menuList.some(i=>i.children&&i.children.length>0)),k=h(10),S=h();D(v,async i=>{var r,d;if(i){await Y();let l=S.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(b=>{l.style.setProperty(`--menu-${b}`,e.menuWrapperCss&&e.menuWrapperCss[b])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(b=>{l.style.setProperty(`--menu-item-${b}`,e.menuItemCss&&e.menuItemCss[b])});let t=(d=(r=e.menuItemCss)==null?void 0:r.arrowSize)==null?void 0:d.match(/\d+/);t?k.value=~~t[0]||10:k.value=10,l.style.setProperty("--menu-item-arrowRealSize",k.value/2+"px"),u("open",e.params,s.value,e.el)}else u("close",e.params,s.value,e.el)});const ne=(i,r)=>{i.disabled||(i.fn&&typeof i.fn=="function"&&i.fn(e.params,s.value,e.el,r),v.value=!1)},te=(i,r)=>{i.disabled||(i.fn&&typeof i.fn=="function"&&!i.disabled&&(i.fn(e.params,s.value,e.el,r),_.value=!1),v.value=!1)},ae=(i,r)=>{if(r.children&&!r.disabled){_.value=!0;const d=i.currentTarget;if(!d)return;const{offsetWidth:l}=d,t=d.querySelector(".__menu__sub__wrapper");if(!t)return;const{offsetWidth:b,offsetHeight:L}=t,{innerWidth:_e,innerHeight:I}=window,{top:j,left:$}=d.getBoundingClientRect();$+l+b>_e-5?n.value=$-b+5:n.value=$+l,j+L>I-5?a.value=I-L:a.value=j+5}},R=(i,r,d,l)=>i.map(t=>(t.children&&(t.children=R(t.children,r,d,l)),t.label&&typeof t.label=="function"&&(t.label=t.label(l,r,d)),t.tips&&typeof t.tips=="function"&&(t.tips=t.tips(l,r,d)),t.icon&&typeof t.icon=="function"&&(t.icon=t.icon(l,r,d)),t.hidden&&typeof t.hidden=="function"&&(t.hidden=t.hidden(l,r,d)),t.disabled&&typeof t.disabled=="function"&&(t.disabled=t.disabled(l,r,d)),t)),ie=async(i=0,r=0)=>{if(s.value=document.elementFromPoint(i-1,r-1),e.menuHiddenFn?v.value=!e.menuHiddenFn(e.params,s.value,e.el):v.value=!0,!v.value)return;y.value=Z(e.menuList),y.value=R(y.value,s.value,e.el,e.params),await Y();const{innerWidth:d,innerHeight:l}=window,b=S.value.offsetHeight,L=e.menuWidth||200;o.value=i+L+1>d?d-L-5:i+1,w.value=r+b+1>l?l-b-5:r+1},oe=()=>{v.value=!1},x=q(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),P=i=>{S.value&&!S.value.contains(i.currentTarget)&&(v.value=!1,document.oncontextmenu=null)};return D(()=>e.injectCloseListener,i=>{i?document.addEventListener(x.value,P):document.removeEventListener(x.value,P)},{immediate:!0}),se(()=>{document.removeEventListener(x.value,P)}),{subLeft:n,subTop:a,hoverFlag:_,menuTop:w,menuLeft:o,showMenu:v,clickDomEl:s,calcMenuList:y,arrowSize:k,hasSubMenu:H,MenuWrapper:S,handleMenuItemClick:ne,handleSubMenuItemClick:te,handleMenuMouseEnter:ae,show:ie,close:oe,clickEventKey:x}}});const ce=["onMouseenter"],ve={key:0,class:"__menu__item-icon"},be=["innerHTML"],he={class:"__menu__item-label"},fe={class:"__menu__item-tips"},pe={class:"__menu__item-arrow-after"},we={class:"__menu__sub__item-label"},ye={class:"__menu__sub__item-tips"};function ge(e,u,n,a,_,w){return m(),K(de,{to:"body",disabled:!e.appendToBody},[e.showMenu?(m(),c("div",{key:0,ref:"MenuWrapper",class:A(["__menu__wrapper",e.customClass]),style:O({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(m(!0),c(T,null,V(e.calcMenuList,(o,v)=>(m(),c(T,null,[!o.hidden&&!o.line?(m(),c("div",J({key:v,class:["__menu__item",o.disabled&&"disabled",o.customClass]},{[U(e.clickEventKey)]:X(s=>e.handleMenuItemClick(o,s),["stop"])},{onMouseenter:s=>e.handleMenuMouseEnter(s,o)}),[e.hasIcon?(m(),c("div",ve,[e.iconType==="font-icon"?z((m(),c("i",{key:0,class:A(o.icon)},null,2)),[[E,o.icon]]):e.iconType==="svg-icon"?z((m(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:o.icon},null,8,be)),[[E,o.icon]]):e.iconType==="vnode-icon"?(m(),K(re(o.icon),{key:2})):f("v-if",!0)])):f("v-if",!0),M("span",he,F(o.label),1),M("span",fe,F(o.tips||""),1),e.hasSubMenu?(m(),c("span",{key:1,class:A(["__menu__item-arrow",{show:e.hasSubMenu&&o.children}]),style:O({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[z(M("span",pe,null,512),[[E,e.hasSubMenu&&o.children]])],6)):f("v-if",!0),o.children&&o.children.length>0?z((m(),c("div",{key:2,class:"__menu__sub__wrapper",style:O({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(m(!0),c(T,null,V(o.children,(s,y)=>(m(),c(T,null,[!s.hidden&&!s.line?(m(),c("div",J({key:y,class:["__menu__sub__item",s.disabled&&"disabled",s.customClass]},{[U(e.clickEventKey)]:X(H=>e.handleSubMenuItemClick(s,H),["stop"])}),[M("span",we,F(s.label),1),M("span",ye,F(s.tips||""),1)],16)):f("v-if",!0),s.line?(m(),c("div",{key:y,class:"__menu__line"})):f("v-if",!0)],64))),256))],4)),[[E,e.hoverFlag]]):f("v-if",!0)],16,ce)):f("v-if",!0),!o.hidden&&o.line?(m(),c("div",{key:v,class:"__menu__line"})):f("v-if",!0)],64))),256))],6)):f("v-if",!0)],8,["disabled"])}function Ce(e,u){u===void 0&&(u={});var n=u.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",n==="top"&&a.firstChild?a.insertBefore(_,a.firstChild):a.appendChild(_),_.styleSheet?_.styleSheet.cssText=e:_.appendChild(document.createTextNode(e))}}var Se=`.__menu__mask[data-v-3d21bc0a] {
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
}`;Ce(Se);C.render=ge;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";function Le(e,u,n){let a=document.createElement(e);return a.setAttribute("class",u),n&&(a.innerText=n),a}C.install=e=>{e.component(C.name,C)};function G(e){var _;const u="__mouse__menu__container";let n;document.querySelector(`.${u}`)?n=document.querySelector(`.${u}`):n=Le("div",u);const a=le(C,e);return me(a,n),document.body.appendChild(n),(_=a.component)==null?void 0:_.proxy}let p,B,N,g;function Me(e,u,n=500,a){N=_=>{p&&p.close(),typeof a=="function"?a(_,e)&&_.preventDefault():typeof a=="boolean"&&a&&_.preventDefault(),B&&clearTimeout(B),B=window.setTimeout(()=>{u(_)},n)},g=()=>{clearTimeout(B)},e.addEventListener("touchstart",N),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("touchcancel",g)}function ee(e){e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",g),e.removeEventListener("touchend",g),e.removeEventListener("touchcancel",g)}let W,Q;const ke=(e,u)=>{const{value:n}=u;if(n.menuList.length>0)W=a=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;a.preventDefault(),p=G({el:e,...n});const{x:_,y:w}=a;p.show(_,w)},e.removeEventListener("contextmenu",W),e.addEventListener("contextmenu",W),n.useLongPressInMobile&&"ontouchstart"in window&&(Q=a=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;p=G({el:e,...n});const{touches:_}=a,{clientX:w,clientY:o}=_[0];p.show(w,o),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>p.close(),e.onmousedown=()=>p.close()},500)},ee(e),Me(e,Q,n.longPressDuration||500,n.longPressPreventDefault));else throw new Error("At least set one menu list!")},xe=e=>{e.removeEventListener("contextmenu",W),"touchstart"in window&&ee(e)},ze={mounted:ke,unmounted:xe};export{ze as M,p as a};
