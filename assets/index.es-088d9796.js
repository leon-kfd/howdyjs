import{d as ue,b as h,f as q,w as D,A as se,o as l,c as K,i as c,F as T,m as V,H as J,I as U,l as X,j as z,C as E,n as A,J as re,p as f,k as M,t as F,D as O,T as de,B as Y,q as me,K as le}from"./index-cbe243ad.js";function ce(e,u,n){let i=document.createElement(e);return i.setAttribute("class",u),n&&(i.innerText=n),i}const Z=function(e){let u=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?u[n]=Z(e[n]):u[n]=e[n]);return u};var C=ue({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],setup(e,{emit:u}){const n=h(0),i=h(0),_=h(!1),w=h(0),o=h(0),v=h(!1),r=h(null),y=h([]),H=q(()=>e.menuList.some(a=>a.children&&a.children.length>0)),k=h(10),S=h();D(v,async a=>{var s,d;if(a){await Y();let m=S.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(b=>{m.style.setProperty(`--menu-${b}`,e.menuWrapperCss&&e.menuWrapperCss[b])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(b=>{m.style.setProperty(`--menu-item-${b}`,e.menuItemCss&&e.menuItemCss[b])});let t=(d=(s=e.menuItemCss)==null?void 0:s.arrowSize)==null?void 0:d.match(/\d+/);t?k.value=~~t[0]||10:k.value=10,m.style.setProperty("--menu-item-arrowRealSize",k.value/2+"px"),u("open")}else u("close")});const ne=(a,s)=>{a.disabled||(a.fn&&typeof a.fn=="function"&&a.fn(e.params,r.value,e.el,s),v.value=!1)},te=(a,s)=>{a.disabled||(a.fn&&typeof a.fn=="function"&&!a.disabled&&(a.fn(e.params,r.value,e.el,s),_.value=!1),v.value=!1)},ie=(a,s)=>{if(s.children&&!s.disabled){_.value=!0;const d=a.currentTarget;if(!d)return;const{offsetWidth:m}=d,t=d.querySelector(".__menu__sub__wrapper");if(!t)return;const{offsetWidth:b,offsetHeight:L}=t,{innerWidth:_e,innerHeight:I}=window,{top:j,left:$}=d.getBoundingClientRect();$+m+b>_e-5?n.value=$-b+5:n.value=$+m,j+L>I-5?i.value=I-L:i.value=j+5}},R=(a,s,d,m)=>a.map(t=>(t.children&&(t.children=R(t.children,s,d,m)),t.label&&typeof t.label=="function"&&(t.label=t.label(m,s,d)),t.tips&&typeof t.tips=="function"&&(t.tips=t.tips(m,s,d)),t.icon&&typeof t.icon=="function"&&(t.icon=t.icon(m,s,d)),t.hidden&&typeof t.hidden=="function"&&(t.hidden=t.hidden(m,s,d)),t.disabled&&typeof t.disabled=="function"&&(t.disabled=t.disabled(m,s,d)),t)),ae=async(a=0,s=0)=>{if(r.value=document.elementFromPoint(a-1,s-1),e.menuHiddenFn?v.value=!e.menuHiddenFn(e.params,r.value,e.el):v.value=!0,!v.value)return;y.value=Z(e.menuList),y.value=R(y.value,r.value,e.el,e.params),await Y();const{innerWidth:d,innerHeight:m}=window,b=S.value.offsetHeight,L=e.menuWidth||200;o.value=a+L+1>d?d-L-5:a+1,w.value=s+b+1>m?m-b-5:s+1},oe=()=>{v.value=!1},x=q(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),P=a=>{S.value&&!S.value.contains(a.currentTarget)&&(v.value=!1,document.oncontextmenu=null)};return D(()=>e.injectCloseListener,a=>{a?document.addEventListener(x.value,P):document.removeEventListener(x.value,P)},{immediate:!0}),se(()=>{document.removeEventListener(x.value,P)}),{subLeft:n,subTop:i,hoverFlag:_,menuTop:w,menuLeft:o,showMenu:v,clickDomEl:r,calcMenuList:y,arrowSize:k,hasSubMenu:H,MenuWrapper:S,handleMenuItemClick:ne,handleSubMenuItemClick:te,handleMenuMouseEnter:ie,show:ae,close:oe,clickEventKey:x}}});const ve=["onMouseenter"],be={key:0,class:"__menu__item-icon"},he=["innerHTML"],fe={class:"__menu__item-label"},pe={class:"__menu__item-tips"},we={class:"__menu__item-arrow-after"},ye={class:"__menu__sub__item-label"},ge={class:"__menu__sub__item-tips"};function Ce(e,u,n,i,_,w){return l(),K(de,{to:"body",disabled:!e.appendToBody},[e.showMenu?(l(),c("div",{key:0,ref:"MenuWrapper",class:A(["__menu__wrapper",e.customClass]),style:O({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(l(!0),c(T,null,V(e.calcMenuList,(o,v)=>(l(),c(T,null,[!o.hidden&&!o.line?(l(),c("div",J({key:v,class:["__menu__item",o.disabled&&"disabled",o.customClass]},{[U(e.clickEventKey)]:X(r=>e.handleMenuItemClick(o,r),["stop"])},{onMouseenter:r=>e.handleMenuMouseEnter(r,o)}),[e.hasIcon?(l(),c("div",be,[e.iconType==="font-icon"?z((l(),c("i",{key:0,class:A(o.icon)},null,2)),[[E,o.icon]]):e.iconType==="svg-icon"?z((l(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:o.icon},null,8,he)),[[E,o.icon]]):e.iconType==="vnode-icon"?(l(),K(re(o.icon),{key:2})):f("v-if",!0)])):f("v-if",!0),M("span",fe,F(o.label),1),M("span",pe,F(o.tips||""),1),e.hasSubMenu?(l(),c("span",{key:1,class:A(["__menu__item-arrow",{show:e.hasSubMenu&&o.children}]),style:O({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[z(M("span",we,null,512),[[E,e.hasSubMenu&&o.children]])],6)):f("v-if",!0),o.children&&o.children.length>0?z((l(),c("div",{key:2,class:"__menu__sub__wrapper",style:O({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(l(!0),c(T,null,V(o.children,(r,y)=>(l(),c(T,null,[!r.hidden&&!r.line?(l(),c("div",J({key:y,class:["__menu__sub__item",r.disabled&&"disabled",r.customClass]},{[U(e.clickEventKey)]:X(H=>e.handleSubMenuItemClick(r,H),["stop"])}),[M("span",ye,F(r.label),1),M("span",ge,F(r.tips||""),1)],16)):f("v-if",!0),r.line?(l(),c("div",{key:y,class:"__menu__line"})):f("v-if",!0)],64))),256))],4)),[[E,e.hoverFlag]]):f("v-if",!0)],16,ve)):f("v-if",!0),!o.hidden&&o.line?(l(),c("div",{key:v,class:"__menu__line"})):f("v-if",!0)],64))),256))],6)):f("v-if",!0)],8,["disabled"])}function Se(e,u){u===void 0&&(u={});var n=u.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",n==="top"&&i.firstChild?i.insertBefore(_,i.firstChild):i.appendChild(_),_.styleSheet?_.styleSheet.cssText=e:_.appendChild(document.createTextNode(e))}}var Le=`.__menu__mask[data-v-3d21bc0a] {
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
}`;Se(Le);C.render=Ce;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";C.install=e=>{e.component(C.name,C)};function G(e){var _;const u="__mouse__menu__container";let n;document.querySelector(`.${u}`)?n=document.querySelector(`.${u}`):n=ce("div",u);const i=me(C,e);return le(i,n),document.body.appendChild(n),(_=i.component)==null?void 0:_.proxy}let p,B,N,g;function Me(e,u,n=500,i){N=_=>{p&&p.close(),typeof i=="function"?i(_,e)&&_.preventDefault():typeof i=="boolean"&&i&&_.preventDefault(),B&&clearTimeout(B),B=window.setTimeout(()=>{u(_)},n)},g=()=>{clearTimeout(B)},e.addEventListener("touchstart",N),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("touchcancel",g)}function ee(e){e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",g),e.removeEventListener("touchend",g),e.removeEventListener("touchcancel",g)}let W,Q;const ke=(e,u)=>{const{value:n}=u;if(n.menuList.length>0)W=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),p=G({el:e,...n});const{x:_,y:w}=i;p.show(_,w)},e.removeEventListener("contextmenu",W),e.addEventListener("contextmenu",W),n.useLongPressInMobile&&"ontouchstart"in window&&(Q=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;p=G({el:e,...n});const{touches:_}=i,{clientX:w,clientY:o}=_[0];p.show(w,o),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>p.close(),e.onmousedown=()=>p.close()},500)},ee(e),Me(e,Q,n.longPressDuration||500,n.longPressPreventDefault));else throw new Error("At least set one menu list!")},xe=e=>{e.removeEventListener("contextmenu",W),"touchstart"in window&&ee(e)},ze={mounted:ke,unmounted:xe};export{ze as M,p as a};
