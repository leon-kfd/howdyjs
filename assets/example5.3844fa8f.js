import{R as z}from"./index.es.73909a92.js";import{_ as f,d as v,b as m,g as u,o as n,h as c,j as r,i as p,q as b,s as $,J as a}from"./index.a6e7310d.js";const g=v({directives:{resize:z},setup(){const t=m();return{resize:t,options:{immediate:!0},handleResizeX(e){let s=e.target;s.style.width=`${e.resizeWidthPercent}%`,e.resizeWidthPercent&&(t.value.style.width=`${100-e.resizeWidthPercent}%`)},handleResizeAll(e){let s=e.target,{direction:o}=e;if(o==="right"){let i=e.resizeWidthPercent;s.style.width=`${i}%`}else if(o==="bottom"){let i=e.resizeHeightPercent;s.style.height=`${i}%`}else if(o==="left"){let{moveOffsetPercent:i,resizeWidthPercent:l}=e;s.style.width=`${l}%`,s.style.left=`${i}%`}else if(o==="top"){let{moveOffsetPercent:i,resizeHeightPercent:l}=e;s.style.height=`${l}%`,s.style.top=`${i}%`}}}}}),_=t=>(b("data-v-cc2ab0be"),t=t(),$(),t),P={class:"page"},x={class:"flex-wrapper"},y=_(()=>r("p",{class:"text"},[a(" Set this box default resize"),r("br"),a("immediate: true ")],-1)),R=[y],w={ref:"resize",class:"box2"},W={class:"outer-box"},S=_(()=>r("p",{class:"text"},[a(" Set this box -> resize:all"),r("br"),a("immediate: true ")],-1)),I=[S];function A(t,e,s,o,i,l){const h=u("resize");return n(),c("div",P,[r("div",x,[p((n(),c("div",{class:"box1",onResize:e[0]||(e[0]=(...d)=>t.handleResizeX&&t.handleResizeX(...d))},R,32)),[[h,t.options]]),r("div",w,null,512)]),r("div",W,[p((n(),c("div",{class:"inner-box",onResize:e[1]||(e[1]=(...d)=>t.handleResizeAll&&t.handleResizeAll(...d))},I,32)),[[h,t.options,"all"]])])])}var H=f(g,[["render",A],["__scopeId","data-v-cc2ab0be"]]);export{H as default};