import{s as t}from"./index.es.7baf79bb.js";import{d as a,f as s,s as e,r as n,c as o,a as i,D as r,m as d,w as b,p as m,b as c,o as f,t as l}from"./index.8548921f.js";var p=a({components:{StandardTabs:t},setup(){const t=s("100vw"),a=Array.from({length:9},((t,a)=>({name:`测试${a+1}`,slotName:`tab${a+1}`}))),n=s();return e((()=>{t.value=n.value.offsetWidth})),{tabContentWidth:t,tabList:a,container:n}}});const v=b();m("data-v-7e1e2314");const u={ref:"container"};c();const h=v(((t,a,s,e,b,m)=>{const c=n("StandardTabs");return f(),o("div",u,[i(c,{"tab-list":t.tabList.map((t=>t.name)),"tab-content-width":t.tabContentWidth,"tab-custom-style":"position:fixed"},r({_:2},[d(t.tabList,(t=>({name:t.slotName,fn:v((()=>[i("div",{class:`tab-content ${t.slotName}`},l(t.name),3)]))})))]),1032,["tab-list","tab-content-width"])],512)}));p.render=h,p.__scopeId="data-v-7e1e2314";export default p;
