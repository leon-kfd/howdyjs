import{d as O,a as b,e as g,w as Q,B as N,o as S,i as M,k as $,F as z,m as R,n as D,D as m,t as U,E as Z}from"./index-50364406.js";var y=O({name:"StandardTabs",props:{tabWidth:{type:Number,default:80},lineWidth:{type:Number,default:30},tabContentWidth:{type:[Number,String],default:"100vw"},tabContentMinHeight:{type:String,default:"100px"},tabList:{type:Array,required:!0},transitionDuration:{type:Number,default:400},mainTransitionTimingFunction:{type:String,default:"cubic-bezier(0.075, 0.82, 0.165, 1)"},tabTransitionTimingFunction:{type:String,default:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"},tabCustomStyle:{type:String,default:""},stopPropagation:{type:Boolean,default:!1},moveEventPrevent:{type:Boolean,default:!0}},emits:["tabActiveChange","contentTouchStart","contentTouchMove","contentTouchEnd"],setup(t,{emit:n}){let T=0,v=0,s=0,L=0,a=0,c=!1,C=!1;const o=b(0),h=b(0),f=b(0),d=b(0),r=b(0),w=b(!1),E=b(!1),X=b(!1),W=b(!1),k=g(()=>t.tabWidth*t.tabList.length),u=g(()=>typeof t.tabContentWidth=="number"?t.tabContentWidth:typeof t.tabContentWidth=="string"&&/\d+vw/.test(t.tabContentWidth)?~~t.tabContentWidth.replace("vw","")*window.innerWidth/100:(console.error("[StandardTabs]Props Error: tabContentWidth is invalid, it will reset to 100vw!"),window.innerWidth)),_=g(()=>(t.tabWidth-t.lineWidth)/2),Y=g(()=>`transition: all ${t.transitionDuration/1e3}s ${t.mainTransitionTimingFunction}`),j=g(()=>`transition: all ${t.transitionDuration/1e3}s ${t.tabTransitionTimingFunction}`),H=g(()=>{let e=o.value*t.tabWidth,i=t.tabWidth*(t.tabList.length-1);return e<0?e=0:e>i&&(e=i),e});Q(o,e=>{n("tabActiveChange",e)});const I=e=>{const{clientX:i}=e.touches[0];T=i},q=e=>{const{clientX:i}=e.touches[0],l=i-T,p=k.value-u.value;d.value=d.value+l,d.value>0?d.value=0:d.value<-p&&(d.value=-p),T=i},V=e=>{console.log("touchEnd",e)},G=e=>{const{clientX:i,clientY:l}=e.touches[0];v=s=i,L=l,a=r.value,f.value=0,E.value=!0,c=!0,setTimeout(()=>{c=!1},300),n("contentTouchStart",e),t.stopPropagation&&e.stopPropagation()},J=e=>{const i=t.tabWidth/u.value,{clientX:l,clientY:p}=e.touches[0],A=l-v;if(C||(C=!0,W.value=Math.abs(p-L)/Math.abs(l-s)>1),X.value=l-s<0,W.value)return;t.moveEventPrevent&&e.preventDefault();const B=u.value*(t.tabList.length-1);if(r.value=r.value+A,X.value?o.value!==t.tabList.length-1&&(f.value+=-A*i):o.value!==0&&(f.value+=+A*i),f.value<0&&(f.value=0),r.value>0)r.value=0;else if(r.value<-B)r.value=-B;else{const F=l-s;Math.abs(F)>u.value/2?F<0?h.value!==o.value+1&&h.value++:h.value!==o.value-1&&h.value--:h.value=o.value}v=l,n("contentTouchMove",e),t.stopPropagation&&e.stopPropagation()},K=async e=>{if(C=!1,W.value)return;const{clientX:i}=e.changedTouches[0],l=i-s,p=Math.abs(l);if(w.value=!0,E.value=!1,await N(),c&&p>10||p>u.value/2){if(l>0){if(o.value===0)return;r.value=a+u.value,o.value--}else{if(o.value===t.tabList.length-1)return;r.value=a-u.value,o.value++}h.value=o.value,P(o.value)}else r.value=a;f.value=0,setTimeout(()=>{w.value=!1},500),n("contentTouchEnd",e),t.stopPropagation&&e.stopPropagation()},P=e=>{const i=e*t.tabWidth-u.value/2+t.tabWidth/2,l=k.value-u.value;l<0||(i<0?d.value=0:i>l?d.value=-l:d.value=-i)};return{active:o,preActive:h,lineDynamicWidth:f,tabListMove:d,tabContentMove:r,transition:w,denyLineTransition:E,isDragRight:X,isYScroll:W,tabListMaxWidth:k,tabContentRealWidth:u,lineSpacing:_,computedMainTransitionStr:Y,computedTabTransitionStr:j,lineLeft:H,listTouchStart:I,listTouchMove:q,listTouchEnd:V,contentTouchStart:G,contentTouchMove:J,contentTouchEnd:K,setActive:async e=>{w.value=!0,await N(),o.value=h.value=e,P(e),r.value=-o.value*u.value,setTimeout(()=>{w.value=!1},500)}}}});const x=["onClick"];function tt(t,n,T,v,s,L){return S(),M("div",{class:"__tab-wrapper",style:m(`width: ${t.tabContentRealWidth}px`)},[$("div",{class:"__tab-list",style:m(`width:${t.tabListMaxWidth}px;transform: translateX(${t.tabListMove}px);${t.tabCustomStyle};${t.transition&&t.computedTabTransitionStr};`),onTouchstart:n[0]||(n[0]=(...a)=>t.listTouchStart&&t.listTouchStart(...a)),onTouchmove:n[1]||(n[1]=(...a)=>t.listTouchMove&&t.listTouchMove(...a)),onTouchend:n[2]||(n[2]=(...a)=>t.listTouchEnd&&t.listTouchEnd(...a))},[(S(!0),M(z,null,R(t.tabList,(a,c)=>(S(),M("div",{key:a,class:D(["__tab-list-item",{active:t.preActive===c}]),style:m(`width: ${t.tabWidth}px`),onClick:C=>t.setActive(c)},U(a),15,x))),128)),$("div",{class:D(["__line-wrapper",{"deny-transition":t.denyLineTransition}]),style:m(`width: ${t.tabWidth}px;transform: translateX(${t.lineLeft}px);${t.transition&&t.computedMainTransitionStr}`)},[$("div",{class:"__line",style:m(`width: ${t.lineWidth+t.lineDynamicWidth}px;${t.isDragRight?"left":"right"}: ${t.lineSpacing}px;${t.transition&&t.computedMainTransitionStr};`)},null,4)],6)],36),$("div",{class:"__tab-content",style:m(`width:${t.tabList.length*100}vw;transform: translateX(${t.tabContentMove}px);${t.transition&&t.computedMainTransitionStr}`),onTouchstart:n[3]||(n[3]=(...a)=>t.contentTouchStart&&t.contentTouchStart(...a)),onTouchmove:n[4]||(n[4]=(...a)=>t.contentTouchMove&&t.contentTouchMove(...a)),onTouchend:n[5]||(n[5]=(...a)=>t.contentTouchEnd&&t.contentTouchEnd(...a))},[(S(!0),M(z,null,R(t.tabList,(a,c)=>(S(),M("div",{key:a,class:D(["__tab-content-item",{active:t.active===c}]),style:m(`width: ${t.tabContentRealWidth}px;min-height: ${t.tabContentMinHeight}`)},[Z(t.$slots,`tab${c+1}`)],6))),128))],36)],4)}function et(t,n){n===void 0&&(n={});var T=n.insertAt;if(!(!t||typeof document>"u")){var v=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",T==="top"&&v.firstChild?v.insertBefore(s,v.firstChild):v.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var nt=`.deny-transition[data-v-465239b9] {
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
  background: linear-gradient(75deg, rgb(233, 132, 101), rgb(245, 97, 11));
}
.__tab-wrapper .__tab-content[data-v-465239b9] {
  width: 999999px;
  display: flex;
  flex-wrap: nowrap;
}`;et(nt);y.render=tt;y.__scopeId="data-v-465239b9";y.__file="packages/standard-tabs/standard-tabs.vue";y.install=t=>{t.component(y.name,y)};export{y as s};
