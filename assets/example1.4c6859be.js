import{S as p}from"./index.es.e2cb0136.js";import{_ as l,d as v,b as n,g,o,h as d,i as f,j as u,t as c}from"./index.a6e7310d.js";const m=v({directives:{SizeObserver:p},setup(){const e=n(0),t=n(0);return{width:e,height:t,handleSizeChange:i=>{const{contentRect:a}=i,{width:r,height:s}=a;e.value=~~r,t.value=~~s}}}}),z={class:"wrapper"},S={class:"text"};function b(e,t,h,i,a,r){const s=g("size-observer");return o(),d("div",z,[f((o(),d("div",{class:"box",onSizechange:t[0]||(t[0]=(..._)=>e.handleSizeChange&&e.handleSizeChange(..._))},[u("p",S,c(e.width)+" \xD7 "+c(e.height),1)],32)),[[s]])])}var C=l(m,[["render",b],["__scopeId","data-v-32fe4d0f"]]);export{C as default};