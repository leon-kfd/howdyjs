import{M as t}from"./index.es-1857ab19.js";import{d as l,j as i,D as a,o as p,i as c,k as r,t as d,_}from"./index-ed9ba0aa.js";const u={class:"box"},b={class:"text"},x=l({__name:"example4",setup(m){const o=t,s={useLongPressInMobile:!0,customClass:"custom-howdy-menu",menuWrapperCss:{background:"#ffffff",borderRadius:"6px",padding:"8px 6px",boxShadow:"0 2px 12px 0 rgba(0,0,0,.1)",lineColor:"#eee",lineMargin:"5px 10px"},menuItemCss:{arrowSize:"10px",iconFontSize:"18px",labelColor:"#5E6370",iconColor:"#5E6370"},menuList:[{label:"刷新",tips:"Refresh",fn:(...e)=>console.log("open",e)},{label:"查看",tips:"Check",fn:(...e)=>console.log("open",e),disabled:()=>!0},{line:!0},{label:"操作",tips:"Operation",children:[{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e)},{label:"编辑",tips:"Edit",disabled:()=>!0,fn:(...e)=>console.log("open",e)},{label:"删除",tips:"Delete",customClass:"delete",fn:(...e)=>console.log("open",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("open",e),hidden:()=>!0}]},{label:"设置",tips:"Setting"}]},n="ontouchstart"in window;return(e,f)=>i((p(),c("div",u,[r("p",b,d(n?"Long press this box, but it don not support children menu":"Right click this box")+". ",1)])),[[a(o),s]])}});const v=_(x,[["__scopeId","data-v-3b1d7db6"]]);export{v as default};