import{d as t,e as s,_ as n,o as d,g as _,i as a}from"./index.48b516a8.js";const o=t({name:"ReadmeFrame",props:{readme:{type:String,default:""}},setup(e){return{transformReadme:s(()=>e.readme.replace(/<table>(.|\n)*?<\/table>/g,'<div class="table-wrapper">$&</div>'))}}}),m={id:"API"},c={class:"container"},i=["innerHTML"];function p(e,r,l,u,v,f){return d(),_("div",m,[a("div",c,[a("div",{class:"readme",innerHTML:e.transformReadme},null,8,i)])])}var g=n(o,[["render",p],["__scopeId","data-v-5800d4e5"]]);export{g as R};
