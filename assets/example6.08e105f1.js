var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var n in o||(o={}))t.call(o,n)&&l(e,n,o[n]);if(a)for(var n of a(o))s.call(o,n)&&l(e,n,o[n]);return e};import{M as n}from"./index.es.6805ab4b.js";import{a as r}from"./global.947b1fb7.js";import{d as i,f as p,s as u,j as d,c as b,F as c,m,w as f,p as y,a as g,b as j,o as v,k as h,t as w}from"./index.d1bea9dc.js";var x=i({directives:{MouseMenu:n},setup(){const e=p([]);return u((async()=>{const t=await fetch(`${r}/page?page=1&pageSize=30`),{data:a,errCode:s}=await t.json();200===s&&(e.value=a.items.map((e=>(e.sex=1===e.sex?"男":"女",e))))})),{list:e,options:{menuList:[{label:e=>`#${e.userName}`,disabled:!0},{label:"编辑",tips:"Edit",fn:(e,...t)=>console.log("edit",e,t)},{label:"停用",tips:"Stop",fn:(e,...t)=>console.log("stop",e,t)},{label:"删除",tips:"Delete",fn:(e,...t)=>console.log("delete",e,t)}]}}}});const O=f();y("data-v-02acd7b2");const M={class:"easy"},P=g("tr",null,[g("th",null,"#"),g("th",null,"用户名"),g("th",null,"性别"),g("th",null,"职位"),g("th",null,"生日")],-1);j();const S=O(((e,t,a,s,l,n)=>{const r=d("mouse-menu");return v(),b("table",M,[P,(v(!0),b(c,null,m(e.list,((t,a)=>h((v(),b("tr",{key:t.id},[g("td",null,w(a+1),1),g("td",null,w(t.userName),1),g("td",null,w(t.sex),1),g("td",null,w(t.position),1),g("td",null,w(t.birth),1)],512)),[[r,o({params:t},e.options)]]))),128))])}));x.render=S,x.__scopeId="data-v-02acd7b2";export default x;
