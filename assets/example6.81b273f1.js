var m=Object.defineProperty;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,c=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&p(t,s,e[s]);if(d)for(var s of d(e))v.call(e,s)&&p(t,s,e[s]);return t};import{M as h}from"./index.es.f9286a49.js";import{a as g}from"./global.947b1fb7.js";import{_ as x}from"./index.1d2502c8.js";import{e as y,g as D,B as M,j,o as u,k as r,F,q as S,y as $,z as B,l as I,m as a,t as n}from"./vendor.70dbb883.js";const k=y({directives:{MouseMenu:h},setup(){const t=D([]);return M(async()=>{const e=await fetch(`${g}/page?page=1&pageSize=30`),{data:s,errCode:i}=await e.json();i===200&&(t.value=s.items.map(l=>(l.sex=l.sex===1?"\u7537":"\u5973",l)))}),{list:t,options:{useLongPressInMobile:!0,menuList:[{label:e=>`#${e.userName}`,disabled:!0},{label:"\u7F16\u8F91",tips:"Edit",fn:(e,...s)=>console.log("edit",e,s)},{label:"\u505C\u7528",tips:"Stop",fn:(e,...s)=>console.log("stop",e,s)},{label:"\u5220\u9664",tips:"Delete",fn:(e,...s)=>console.log("delete",e,s)}]}}}}),w=t=>($("data-v-2aeb0dad"),t=t(),B(),t),C={class:"easy"},L=w(()=>a("tr",null,[a("th",null,"#"),a("th",null,"\u7528\u6237\u540D"),a("th",null,"\u6027\u522B"),a("th",null,"\u804C\u4F4D"),a("th",null,"\u751F\u65E5")],-1));function E(t,e,s,i,l,N){const _=j("mouse-menu");return u(),r("table",C,[L,(u(!0),r(F,null,S(t.list,(o,f)=>I((u(),r("tr",{key:o.id},[a("td",null,n(f+1),1),a("td",null,n(o.userName),1),a("td",null,n(o.sex),1),a("td",null,n(o.position),1),a("td",null,n(o.birth),1)])),[[_,c({params:o},t.options)]])),128))])}var V=x(k,[["render",E],["__scopeId","data-v-2aeb0dad"]]);export{V as default};