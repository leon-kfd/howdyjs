import{e as Q,g as m,i as w,w as U,D as N,o as C,k as W,m as L,F as _,q as z,n as D,G as y,t as Z,H as x}from"./vendor.35d0f4de.js";/*! *****************************************************************************
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
***************************************************************************** */function R(t,a,v,u){function l(p){return p instanceof v?p:new v(function(n){n(p)})}return new(v||(v=Promise))(function(p,n){function c(s){try{i(u.next(s))}catch(h){n(h)}}function g(s){try{i(u.throw(s))}catch(h){n(h)}}function i(s){s.done?p(s.value):l(s.value).then(c,g)}i((u=u.apply(t,a||[])).next())})}var S=Q({name:"StandardTabs",props:{tabWidth:{type:Number,default:80},lineWidth:{type:Number,default:30},tabContentWidth:{type:[Number,String],default:"100vw"},tabContentMinHeight:{type:String,default:"100px"},tabList:{type:Array,required:!0},transitionDuration:{type:Number,default:400},mainTransitionTimingFunction:{type:String,default:"cubic-bezier(0.075, 0.82, 0.165, 1)"},tabTransitionTimingFunction:{type:String,default:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"},tabCustomStyle:{type:String,default:""},stopPropagation:{type:Boolean,default:!1},moveEventPrevent:{type:Boolean,default:!0}},emits:["tabActiveChange","contentTouchStart","contentTouchMove","contentTouchEnd"],setup(t,{emit:a}){let v=0,u=0,l=0,p=0,n=0,c=!1,g=!1;const i=m(0),s=m(0),h=m(0),f=m(0),d=m(0),M=m(!1),E=m(!1),X=m(!1),$=m(!1),k=w(()=>t.tabWidth*t.tabList.length),b=w(()=>typeof t.tabContentWidth=="number"?t.tabContentWidth:typeof t.tabContentWidth=="string"&&/\d+vw/.test(t.tabContentWidth)?~~t.tabContentWidth.replace("vw","")*window.innerWidth/100:(console.error("[StandardTabs]Props Error: tabContentWidth is invalid, it will reset to 100vw!"),window.innerWidth)),Y=w(()=>(t.tabWidth-t.lineWidth)/2),j=w(()=>`transition: all ${t.transitionDuration/1e3}s ${t.mainTransitionTimingFunction}`),H=w(()=>`transition: all ${t.transitionDuration/1e3}s ${t.tabTransitionTimingFunction}`),q=w(()=>{let e=i.value*t.tabWidth,o=t.tabWidth*(t.tabList.length-1);return e<0?e=0:e>o&&(e=o),e});U(i,e=>{a("tabActiveChange",e)});const I=e=>{const{clientX:o}=e.touches[0];v=o},G=e=>{const{clientX:o}=e.touches[0],r=o-v,T=k.value-b.value;f.value=f.value+r,f.value>0?f.value=0:f.value<-T&&(f.value=-T),v=o},V=e=>{console.log("touchEnd",e)},J=e=>{const{clientX:o,clientY:r}=e.touches[0];u=l=o,p=r,n=d.value,h.value=0,E.value=!0,c=!0,setTimeout(()=>{c=!1},300),a("contentTouchStart",e),t.stopPropagation&&e.stopPropagation()},K=e=>{const o=t.tabWidth/b.value,{clientX:r,clientY:T}=e.touches[0],A=r-u;if(g||(g=!0,$.value=Math.abs(T-p)/Math.abs(r-l)>1),X.value=r-l<0,$.value)return;t.moveEventPrevent&&e.preventDefault();const B=b.value*(t.tabList.length-1);if(d.value=d.value+A,X.value?i.value!==t.tabList.length-1&&(h.value+=-A*o):i.value!==0&&(h.value+=+A*o),h.value<0&&(h.value=0),d.value>0)d.value=0;else if(d.value<-B)d.value=-B;else{const F=r-l;Math.abs(F)>b.value/2?F<0?s.value!==i.value+1&&s.value++:s.value!==i.value-1&&s.value--:s.value=i.value}u=r,a("contentTouchMove",e),t.stopPropagation&&e.stopPropagation()},O=e=>R(this,void 0,void 0,function*(){if(g=!1,$.value)return;const{clientX:o}=e.changedTouches[0],r=o-l,T=Math.abs(r);if(M.value=!0,E.value=!1,yield N(),c&&T>10||T>b.value/2){if(r>0){if(i.value===0)return;d.value=n+b.value,i.value--}else{if(i.value===t.tabList.length-1)return;d.value=n-b.value,i.value++}s.value=i.value,P(i.value)}else d.value=n;h.value=0,setTimeout(()=>{M.value=!1},500),a("contentTouchEnd",e),t.stopPropagation&&e.stopPropagation()}),P=e=>{const o=e*t.tabWidth-b.value/2+t.tabWidth/2,r=k.value-b.value;r<0||(o<0?f.value=0:o>r?f.value=-r:f.value=-o)};return{active:i,preActive:s,lineDynamicWidth:h,tabListMove:f,tabContentMove:d,transition:M,denyLineTransition:E,isDragRight:X,isYScroll:$,tabListMaxWidth:k,tabContentRealWidth:b,lineSpacing:Y,computedMainTransitionStr:j,computedTabTransitionStr:H,lineLeft:q,listTouchStart:I,listTouchMove:G,listTouchEnd:V,contentTouchStart:J,contentTouchMove:K,contentTouchEnd:O,setActive:e=>R(this,void 0,void 0,function*(){M.value=!0,yield N(),i.value=s.value=e,P(e),d.value=-i.value*b.value,setTimeout(()=>{M.value=!1},500)})}}});const tt=["onClick"];function et(t,a,v,u,l,p){return C(),W("div",{class:"__tab-wrapper",style:y(`width: ${t.tabContentRealWidth}px`)},[L("div",{class:"__tab-list",style:y(`width:${t.tabListMaxWidth}px;transform: translateX(${t.tabListMove}px);${t.tabCustomStyle};${t.transition&&t.computedTabTransitionStr};`),onTouchstart:a[0]||(a[0]=(...n)=>t.listTouchStart&&t.listTouchStart(...n)),onTouchmove:a[1]||(a[1]=(...n)=>t.listTouchMove&&t.listTouchMove(...n)),onTouchend:a[2]||(a[2]=(...n)=>t.listTouchEnd&&t.listTouchEnd(...n))},[(C(!0),W(_,null,z(t.tabList,(n,c)=>(C(),W("div",{key:n,class:D(["__tab-list-item",{active:t.preActive===c}]),style:y(`width: ${t.tabWidth}px`),onClick:g=>t.setActive(c)},Z(n),15,tt))),128)),L("div",{class:D(["__line-wrapper",{"deny-transition":t.denyLineTransition}]),style:y(`width: ${t.tabWidth}px;transform: translateX(${t.lineLeft}px);${t.transition&&t.computedMainTransitionStr}`)},[L("div",{class:"__line",style:y(`width: ${t.lineWidth+t.lineDynamicWidth}px;${t.isDragRight?"left":"right"}: ${t.lineSpacing}px;${t.transition&&t.computedMainTransitionStr};`)},null,4)],6)],36),L("div",{class:"__tab-content",style:y(`width:${t.tabList.length*100}vw;transform: translateX(${t.tabContentMove}px);${t.transition&&t.computedMainTransitionStr}`),onTouchstart:a[3]||(a[3]=(...n)=>t.contentTouchStart&&t.contentTouchStart(...n)),onTouchmove:a[4]||(a[4]=(...n)=>t.contentTouchMove&&t.contentTouchMove(...n)),onTouchend:a[5]||(a[5]=(...n)=>t.contentTouchEnd&&t.contentTouchEnd(...n))},[(C(!0),W(_,null,z(t.tabList,(n,c)=>(C(),W("div",{key:n,class:D(["__tab-content-item",{active:t.active===c}]),style:y(`width: ${t.tabContentRealWidth}px;min-height: ${t.tabContentMinHeight}`)},[x(t.$slots,`tab${c+1}`)],6))),128))],36)],4)}function nt(t,a){a===void 0&&(a={});var v=a.insertAt;if(!(!t||typeof document=="undefined")){var u=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",v==="top"&&u.firstChild?u.insertBefore(l,u.firstChild):u.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var at=`.deny-transition[data-v-465239b9] {
  transition: none !important;
}
.__tab-wrapper[data-v-465239b9] {
  width: 100vw;
  overflow: hidden;
}
.__tab-wrapper .__tab-list[data-v-465239b9] {
  width: 999999px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  margin-bottom: 10px;
  z-index: 9;
}
.__tab-wrapper .__tab-list .__tab-list-item[data-v-465239b9] {
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.__tab-wrapper .__tab-list .__tab-list-item.active[data-v-465239b9] {
  font-weight: bold;
  color: #262626;
}
.__tab-wrapper .__tab-list .__line-wrapper[data-v-465239b9] {
  position: absolute;
  bottom: -2px;
}
.__tab-wrapper .__tab-list .__line-wrapper .__line[data-v-465239b9] {
  position: absolute;
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(75deg, #e98465, #f5610b);
}
.__tab-wrapper .__tab-content[data-v-465239b9] {
  width: 999999px;
  display: flex;
  flex-wrap: nowrap;
}`;nt(at);S.render=et;S.__scopeId="data-v-465239b9";S.__file="packages/standard-tabs/standard-tabs.vue";S.install=t=>{t.component(S.name,S)};export{S as s};
