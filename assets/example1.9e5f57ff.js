import{S as p}from"./index.es.e2cb0136.js";import{_ as l}from"./index.1d2502c8.js";import{e as v,g as n,j as f,o,k as d,l as g,m,t as c}from"./vendor.70dbb883.js";const u=v({directives:{SizeObserver:p},setup(){const e=n(0),s=n(0);return{width:e,height:s,handleSizeChange:i=>{const{contentRect:r}=i,{width:a,height:t}=r;e.value=~~a,s.value=~~t}}}}),z={class:"wrapper"},S={class:"text"};function b(e,s,h,i,r,a){const t=f("size-observer");return o(),d("div",z,[g((o(),d("div",{class:"box",onSizechange:s[0]||(s[0]=(..._)=>e.handleSizeChange&&e.handleSizeChange(..._))},[m("p",S,c(e.width)+" \xD7 "+c(e.height),1)],32)),[[t]])])}var D=l(u,[["render",b],["__scopeId","data-v-32fe4d0f"]]);export{D as default};