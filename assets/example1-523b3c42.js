import{M as i,a as r}from"./index.es-1857ab19.js";import{d as p,j as _,D as u,o as g,i as m,k as d,t as f,_ as x}from"./index-ed9ba0aa.js";const b={class:"text",style:{height:"900px"}},h=p({__name:"example1",setup(M){const t=i,l={params:{a:1},menuList:[{label:"打开",tips:"Open",fn:(e,o,s,n)=>{console.log("open",e,o,s,n)}},{label:"编辑",tips:"Edit",fn:(e,o,s,n)=>(console.log("edit",e,o,s,n),!1)},{label:"删除",tips:"Delete",fn:(e,o,s,n)=>{console.log("delete",e,o,s,n)}},{label:"重命名",tips:"Rename",fn:(e,o,s,n)=>{console.log("rename",e,o,s,n)}}],onOpen:(e,o,s)=>{console.log("onOpen",e,o,s)},onClose:(e,o,s)=>{console.log("onClose",e,o,s)},useLongPressInMobile:!0,longPressDuration:300,longPressPreventDefault:(e,o)=>(console.log({e,el:o}),!1)},a="ontouchstart"in window,c=()=>{var e;(e=r)==null||e.close()};return(e,o)=>_((g(),m("div",{class:"box",onScroll:c},[d("p",b,f(a?"Long press this box":"Right click this box")+". ",1)],32)),[[u(t),l]])}});const k=x(h,[["__scopeId","data-v-c36a230a"]]);export{k as default};