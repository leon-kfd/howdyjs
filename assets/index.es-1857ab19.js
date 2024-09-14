import{d as se,a as f,e as K,w as V,y as re,o as d,c as O,i as m,F as E,m as G,E as U,G as X,l as Y,j as L,A as M,n as F,H as J,p as h,k as T,t as W,B as N,T as de,z as R,q as le,I as me}from"./index-ed9ba0aa.js";const ee=function(e){let s=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?s[n]=ee(e[n]):s[n]=e[n]);return s};var C=se({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],expose:["show","close","showMenu"],setup(e,{emit:s}){const n=f(0),i=f(0),u=f(!1),w=f(0),_=f(0),v=f(!1),o=f(null),y=f([]),P=K(()=>e.menuList.some(a=>a.children&&a.children.length>0)),x=f(10),S=f();V(v,async a=>{var r,l;if(a){await R();let c=S.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(b=>{c.style.setProperty(`--menu-${b}`,e.menuWrapperCss&&e.menuWrapperCss[b])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(b=>{c.style.setProperty(`--menu-item-${b}`,e.menuItemCss&&e.menuItemCss[b])});let t=(l=(r=e.menuItemCss)==null?void 0:r.arrowSize)==null?void 0:l.match(/\d+/);t?x.value=~~t[0]||10:x.value=10,c.style.setProperty("--menu-item-arrowRealSize",x.value/2+"px"),s("open",e.params,o.value,e.el)}else s("close",e.params,o.value,e.el)});const te=(a,r)=>{a.disabled||a.fn&&typeof a.fn=="function"&&a.fn(e.params,o.value,e.el,r)===!1||(v.value=!1)},ie=(a,r)=>{if(!a.disabled){if(a.fn&&typeof a.fn=="function"&&!a.disabled){if(a.fn(e.params,o.value,e.el,r)===!1)return;u.value=!1}v.value=!1}},ae=async(a,r)=>{if(r.children&&!r.disabled){u.value=!0,await R();const l=a.currentTarget;if(!l)return;const{offsetWidth:c}=l,t=l.querySelector(".__menu__sub__wrapper");if(!t)return;const{offsetWidth:b,offsetHeight:k}=t,{innerWidth:ue,innerHeight:D}=window,{top:I,left:A}=l.getBoundingClientRect();A+c+b>ue-5?n.value=A-b+5:n.value=A+c,I+k>D-5?i.value=D-k:i.value=I+5}},q=(a,r,l,c)=>a.map(t=>(t.children&&(t.children=q(t.children,r,l,c)),t.label&&typeof t.label=="function"&&(t.label=t.label(c,r,l)),t.tips&&typeof t.tips=="function"&&(t.tips=t.tips(c,r,l)),t.icon&&typeof t.icon=="function"&&(t.icon=t.icon(c,r,l)),t.hidden&&typeof t.hidden=="function"&&(t.hidden=t.hidden(c,r,l)),t.disabled&&typeof t.disabled=="function"&&(t.disabled=t.disabled(c,r,l)),t)),oe=async(a=0,r=0)=>{if(o.value=document.elementFromPoint(a-1,r-1),e.menuHiddenFn?v.value=!e.menuHiddenFn(e.params,o.value,e.el):v.value=!0,!v.value)return;y.value=ee(e.menuList),y.value=q(y.value,o.value,e.el,e.params),await R();const{innerWidth:l,innerHeight:c}=window,b=S.value.offsetHeight,k=e.menuWidth||200;_.value=a+k+1>l?l-k-5:a+1,w.value=r+b+1>c?c-b-5:r+1},_e=()=>{v.value=!1},z=K(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),$=a=>{S.value&&!S.value.contains(a.currentTarget)&&(v.value=!1,document.oncontextmenu=null)};return V(()=>e.injectCloseListener,a=>{a?document.addEventListener(z.value,$):document.removeEventListener(z.value,$)},{immediate:!0}),re(()=>{document.removeEventListener(z.value,$)}),{subLeft:n,subTop:i,hoverFlag:u,menuTop:w,menuLeft:_,showMenu:v,clickDomEl:o,calcMenuList:y,arrowSize:x,hasSubMenu:P,MenuWrapper:S,handleMenuItemClick:te,handleSubMenuItemClick:ie,handleMenuMouseEnter:ae,show:oe,close:_e,clickEventKey:z}}});const ce=["onMouseenter"],ve={key:0,class:"__menu__item-icon"},be=["innerHTML"],he={class:"__menu__item-label"},fe={class:"__menu__item-tips"},pe={class:"__menu__item-arrow-after"},we={key:0,class:"__menu__item-icon"},ye=["innerHTML"],ge={class:"__menu__sub__item-label"},Ce={class:"__menu__sub__item-tips"};function Le(e,s,n,i,u,w){return d(),O(de,{to:"body",disabled:!e.appendToBody},[e.showMenu?(d(),m("div",{key:0,ref:"MenuWrapper",class:F(["__menu__wrapper",e.customClass]),style:N({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(d(!0),m(E,null,G(e.calcMenuList,(_,v)=>(d(),m(E,null,[!_.hidden&&!_.line?(d(),m("div",U({key:v,class:["__menu__item",_.disabled&&"disabled",_.customClass]},{[X(e.clickEventKey)]:Y(o=>e.handleMenuItemClick(_,o),["stop"])},{onMouseenter:o=>e.handleMenuMouseEnter(o,_)}),[e.hasIcon?(d(),m("div",ve,[e.iconType==="font-icon"?L((d(),m("i",{key:0,class:F(_.icon)},null,2)),[[M,_.icon]]):e.iconType==="svg-icon"?L((d(),m("div",{key:1,class:"__menu__item-icon-svg",innerHTML:_.icon},null,8,be)),[[M,_.icon]]):e.iconType==="vnode-icon"?(d(),O(J(_.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),T("span",he,W(_.label),1),T("span",fe,W(_.tips||""),1),e.hasSubMenu?(d(),m("span",{key:1,class:F(["__menu__item-arrow",{show:e.hasSubMenu&&_.children}]),style:N({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[L(T("span",pe,null,512),[[M,e.hasSubMenu&&_.children]])],6)):h("v-if",!0),_.children&&_.children.length>0?L((d(),m("div",{key:2,class:"__menu__sub__wrapper",style:N({width:`${e.menuWidth}px`,top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(d(!0),m(E,null,G(_.children,(o,y)=>(d(),m(E,null,[!o.hidden&&!o.line?(d(),m("div",U({key:y,class:["__menu__sub__item",o.disabled&&"disabled",o.customClass]},{[X(e.clickEventKey)]:Y(P=>e.handleSubMenuItemClick(o,P),["stop"])}),[e.hasIcon?(d(),m("div",we,[e.iconType==="font-icon"?L((d(),m("i",{key:0,class:F(o.icon)},null,2)),[[M,o.icon]]):e.iconType==="svg-icon"?L((d(),m("div",{key:1,class:"__menu__item-icon-svg",innerHTML:o.icon},null,8,ye)),[[M,o.icon]]):e.iconType==="vnode-icon"?(d(),O(J(o.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),T("span",ge,W(o.label),1),T("span",Ce,W(o.tips||""),1)],16)):h("v-if",!0),o.line?(d(),m("div",{key:y,class:"__menu__line"})):h("v-if",!0)],64))),256))],4)),[[M,e.hoverFlag]]):h("v-if",!0)],16,ce)):h("v-if",!0),!_.hidden&&_.line?(d(),m("div",{key:v,class:"__menu__line"})):h("v-if",!0)],64))),256))],6)):h("v-if",!0)],8,["disabled"])}function Me(e,s){s===void 0&&(s={});var n=s.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",n==="top"&&i.firstChild?i.insertBefore(u,i.firstChild):i.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var Se=`.__menu__mask[data-v-3d21bc0a] {
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
}`;Me(Se);C.render=Le;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";function ke(e,s,n){let i=document.createElement(e);return i.setAttribute("class",s),n&&(i.innerText=n),i}C.install=e=>{e.component(C.name,C)};function Q(e){var u;const s="__mouse__menu__container";let n;document.querySelector(`.${s}`)?n=document.querySelector(`.${s}`):n=ke("div",s);const i=le(C,e);return me(i,n),document.body.appendChild(n),(u=i.component)==null?void 0:u.proxy}let p,B,j,g;function Te(e,s,n=500,i){j=u=>{p&&p.close(),typeof i=="function"?i(u,e)&&u.preventDefault():typeof i=="boolean"&&i&&u.preventDefault(),B&&clearTimeout(B),B=window.setTimeout(()=>{s(u)},n)},g=()=>{clearTimeout(B)},e.addEventListener("touchstart",j),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("touchcancel",g)}function ne(e){e.removeEventListener("touchstart",j),e.removeEventListener("touchmove",g),e.removeEventListener("touchend",g),e.removeEventListener("touchcancel",g)}let H,Z;const xe=(e,s)=>{const{value:n}=s;if(n.menuList.length>0)H=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),p=Q({el:e,...n});const{x:u,y:w}=i;p.show(u,w)},e.removeEventListener("contextmenu",H),e.addEventListener("contextmenu",H),n.useLongPressInMobile&&"ontouchstart"in window&&(Z=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;p=Q({el:e,...n});const{touches:u}=i,{clientX:w,clientY:_}=u[0];p.show(w,_),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>p.close(),e.onmousedown=()=>p.close()},500)},ne(e),Te(e,Z,n.longPressDuration||500,n.longPressPreventDefault));else throw new Error("At least set one menu list!")},ze=e=>{e.removeEventListener("contextmenu",H),"touchstart"in window&&ne(e)},Fe={mounted:xe,unmounted:ze};export{Fe as M,p as a};
