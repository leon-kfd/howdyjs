import{R as z}from"./index.es.73909a92.js";import{_ as v}from"./index.1d2502c8.js";import{e as x,g as r,j as g,o as n,k as a,m as i,l as h,y as f,z as b}from"./vendor.70dbb883.js";const u=x({directives:{resize:z},setup(){const s=r(),o=r(),c=r(),_=r();return{a:s,b:o,c,d:_,options:{},handleResizeX(t){console.log(t);let l=t.target,e=t.resizeWidth;e&&(l.style.width=`${e}px`,s.value.style.width=`${600-e}px`)},handleResizeY(t){console.log(t);let l=t.target,e=t.resizeHeight;e&&(l.style.height=`${e}px`,o.value.style.height=`${400-e}px`)},handleResizeX1(t){console.log(t);let l=t.target,e=t.resizeWidth;e&&(l.style.width=`${e}px`,c.value.style.width=`${600-e}px`)},handleResizeY1(t){console.log(t);let l=t.target,e=t.resizeHeight;e&&(l.style.height=`${e}px`,_.value.style.height=`${400-e}px`)}}}}),p=s=>(f("data-v-3215663c"),s=s(),b(),s),R={class:"page"},m={class:"container"},y={class:"wrapper x"},$=p(()=>i("p",{class:"text"}," Set this box -> resize:right ",-1)),w=[$],S={ref:"a",class:"box2"},X={class:"wrapper y"},Y=p(()=>i("p",{class:"text"}," Set this box -> resize:bottom ",-1)),j=[Y],H={ref:"b",class:"box2"},I={class:"wrapper x"},W={ref:"c",class:"box1"},k=p(()=>i("p",{class:"text"}," Set this box -> resize:left ",-1)),B=[k],D={class:"wrapper y"},C={ref:"d",class:"box1"},E=p(()=>i("p",{class:"text"}," Set this box -> resize:top ",-1)),N=[E];function V(s,o,c,_,t,l){const e=g("resize");return n(),a("div",R,[i("div",m,[i("div",y,[h((n(),a("div",{class:"box1",onResize:o[0]||(o[0]=(...d)=>s.handleResizeX&&s.handleResizeX(...d))},w,32)),[[e,s.options,"right"]]),i("div",S,null,512)]),i("div",X,[h((n(),a("div",{class:"box1",onResize:o[1]||(o[1]=(...d)=>s.handleResizeY&&s.handleResizeY(...d))},j,32)),[[e,s.options,"bottom"]]),i("div",H,null,512)]),i("div",I,[i("div",W,null,512),h((n(),a("div",{class:"box2",onResize:o[2]||(o[2]=(...d)=>s.handleResizeX1&&s.handleResizeX1(...d))},B,32)),[[e,s.options,"left"]])]),i("div",D,[i("div",C,null,512),h((n(),a("div",{class:"box2",onResize:o[3]||(o[3]=(...d)=>s.handleResizeY1&&s.handleResizeY1(...d))},N,32)),[[e,s.options,"top"]])])])])}var G=v(u,[["render",V],["__scopeId","data-v-3215663c"]]);export{G as default};