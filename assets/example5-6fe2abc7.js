import{R as h}from"./index.es-724d9dc0.js";import{d as z,a as m,_ as v,h as _,o as a,i as c,k as r,j as f,J as n}from"./index-ed9ba0aa.js";const u=z({directives:{resize:h},setup(){const t=m();return{resize:t,options:{immediate:!0},handleResizeX(e){let s=e.target;s.style.width=`${e.resizeWidthPercent}%`,e.resizeWidthPercent&&(t.value.style.width=`${100-e.resizeWidthPercent}%`)},handleResizeAll(e){let s=e.target,{direction:l}=e;if(l==="right"){let i=e.resizeWidthPercent;s.style.width=`${i}%`}else if(l==="bottom"){let i=e.resizeHeightPercent;s.style.height=`${i}%`}else if(l==="left"){let{moveOffsetPercent:i,resizeWidthPercent:o}=e;s.style.width=`${o}%`,s.style.left=`${i}%`}else if(l==="top"){let{moveOffsetPercent:i,resizeHeightPercent:o}=e;s.style.height=`${o}%`,s.style.top=`${i}%`}}}}});const $={class:"page"},P={class:"flex-wrapper"},g={ref:"resize",class:"box2"},x={class:"outer-box"};function y(t,e,s,l,i,o){const p=_("resize");return a(),c("div",$,[r("div",P,[f((a(),c("div",{class:"box1",onResize:e[0]||(e[0]=(...d)=>t.handleResizeX&&t.handleResizeX(...d))},e[2]||(e[2]=[r("p",{class:"text"},[n(" Set this box default resize"),r("br"),n("immediate: true ")],-1)]),32)),[[p,t.options]]),r("div",g,null,512)]),r("div",x,[f((a(),c("div",{class:"inner-box",onResize:e[1]||(e[1]=(...d)=>t.handleResizeAll&&t.handleResizeAll(...d))},e[3]||(e[3]=[r("p",{class:"text"},[n(" Set this box -> resize:all"),r("br"),n("immediate: true ")],-1)]),32)),[[p,t.options,"all"]])])])}const w=v(u,[["render",y],["__scopeId","data-v-ce8606fe"]]);export{w as default};