import{_ as s,d as n,r as m,o as d,h as c,p as i,u,b as E,z as p,x as e}from"./index.a6e7310d.js";import{R}from"./ReadmeFrame.dffbc3a0.js";function D(r){switch(r){case"../../packages/animation-dialog/README.md":return e(()=>import("./README.d9a35c2e.js"),[]);case"../../packages/img-zoom/README.md":return e(()=>import("./README.87bc4dfc.js"),[]);case"../../packages/mouse-menu/README.md":return e(()=>import("./README.0c34cd86.js"),[]);case"../../packages/resize/README.md":return e(()=>import("./README.e7862217.js"),[]);case"../../packages/scroll/README.md":return e(()=>import("./README.a96db689.js"),[]);case"../../packages/shared/README.md":return e(()=>import("./README.59a4a4eb.js"),[]);case"../../packages/size-observer/README.md":return e(()=>import("./README.22abf619.js"),[]);case"../../packages/standard-tabs/README.md":return e(()=>import("./README.18cbabb2.js"),[]);case"../../packages/to-control/README.md":return e(()=>import("./README.8e6f1a52.js"),[]);case"../../packages/to-drag/README.md":return e(()=>import("./README.23edd650.js"),[]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}const l=n({name:"PageReadme",components:{ReadmeFrame:R},setup(){const t=u().name.replace("-readme",""),a=E("");return p(async()=>{const o=await D(`../../packages/${t}/README.md`);a.value=o.default}),{readme:a}}}),A={id:"Readme"};function v(r,t,a,o,f,g){const _=m("readme-frame");return d(),c("div",A,[i(_,{readme:r.readme},null,8,["readme"])])}var P=s(l,[["render",v]]);export{P as default};