import{d as y,a as p,b as k,e as g,w as z,u as C,f as w,g as i,_ as N,r as F,h as M,o as s,i as l,j as P,v as B,k as t,t as n,n as d,l as H,F as T,m as O,p as D,q as I}from"./index-ed9ba0aa.js";import{_ as j}from"./dynamic-import-helper-be004503.js";import{R as G}from"./index.es-724d9dc0.js";const W=y({name:"ExampleFrame",directives:{resize:G},props:{mainName:{type:String,default:""},readmeList:{type:Array,default:()=>[]},exampleList:{type:Array,default:()=>[]},disabledMobile:{type:Boolean,default:!1}},setup(e){const o=C(),R=w(),v=p(),_=p(""),c=p(""),u=p(!1),E=k({zIndex:9999,tipLineColor:"#889"}),m=p(!1),r=p(1),A=g(()=>{if(_.value===`${e.mainName}-readme`)return"#.README";{let a=e.exampleList.findIndex((L,$)=>_.value===`${e.mainName}-example${$+1}`);return a>-1?`${a+1}.${e.exampleList[a].name}`:""}}),V=g(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&e.disabledMobile),b=g(()=>e.mainName.split("-").map(a=>a.slice(0,1).toUpperCase()+a.slice(1)).join(" ")),f=a=>{R.push({name:`${e.mainName}-example${a+1}`})},x=async()=>{u.value=!0;let a=await j(Object.assign({"../code/animation-dialog/example1.md":()=>i(()=>import("./example1-df3d130d.js"),[],import.meta.url),"../code/animation-dialog/example2.md":()=>i(()=>import("./example2-b8ba30fd.js"),[],import.meta.url),"../code/animation-dialog/example3.md":()=>i(()=>import("./example3-7a159247.js"),[],import.meta.url),"../code/animation-dialog/example4.md":()=>i(()=>import("./example4-55dcd079.js"),[],import.meta.url),"../code/img-zoom/example1.md":()=>i(()=>import("./example1-72ea5d9b.js"),[],import.meta.url),"../code/img-zoom/example2.md":()=>i(()=>import("./example2-f0ca1d02.js"),[],import.meta.url),"../code/img-zoom/example3.md":()=>i(()=>import("./example3-8a33977d.js"),[],import.meta.url),"../code/mouse-menu/example1.md":()=>i(()=>import("./example1-15821630.js"),[],import.meta.url),"../code/mouse-menu/example2.md":()=>i(()=>import("./example2-e419b516.js"),[],import.meta.url),"../code/mouse-menu/example3.md":()=>i(()=>import("./example3-1b0582e4.js"),[],import.meta.url),"../code/mouse-menu/example4.md":()=>i(()=>import("./example4-f15660df.js"),[],import.meta.url),"../code/mouse-menu/example5.md":()=>i(()=>import("./example5-be4ef37d.js"),[],import.meta.url),"../code/mouse-menu/example6.md":()=>i(()=>import("./example6-faf0559c.js"),[],import.meta.url),"../code/mouse-menu/example7.md":()=>i(()=>import("./example7-cde4e0e0.js"),[],import.meta.url),"../code/resize/example1.md":()=>i(()=>import("./example1-f249f375.js"),[],import.meta.url),"../code/resize/example2.md":()=>i(()=>import("./example2-55d6252a.js"),[],import.meta.url),"../code/resize/example3.md":()=>i(()=>import("./example3-d6152d47.js"),[],import.meta.url),"../code/resize/example4.md":()=>i(()=>import("./example4-954429e6.js"),[],import.meta.url),"../code/resize/example5.md":()=>i(()=>import("./example5-980468be.js"),[],import.meta.url),"../code/scroll/example1.md":()=>i(()=>import("./example1-bb312d20.js"),[],import.meta.url),"../code/scroll/example2.md":()=>i(()=>import("./example2-460752c3.js"),[],import.meta.url),"../code/scroll/example3.md":()=>i(()=>import("./example3-5ee59127.js"),[],import.meta.url),"../code/scroll/example4.md":()=>i(()=>import("./example4-6ba031ee.js"),[],import.meta.url),"../code/scroll/example5.md":()=>i(()=>import("./example5-93f2c51a.js"),[],import.meta.url),"../code/size-observer/example1.md":()=>i(()=>import("./example1-334f2440.js"),[],import.meta.url),"../code/size-observer/example2.md":()=>i(()=>import("./example2-9df0d862.js"),[],import.meta.url),"../code/standard-tabs/example1.md":()=>i(()=>import("./example1-60cd1c9c.js"),[],import.meta.url),"../code/standard-tabs/example2.md":()=>i(()=>import("./example2-b810d3c3.js"),[],import.meta.url),"../code/to-control/example1.md":()=>i(()=>import("./example1-5f5eacab.js"),[],import.meta.url),"../code/to-control/example2.md":()=>i(()=>import("./example2-ed609f1c.js"),[],import.meta.url),"../code/to-control/example3.md":()=>i(()=>import("./example3-99c97889.js"),[],import.meta.url),"../code/to-control/example4.md":()=>i(()=>import("./example4-ed574c61.js"),[],import.meta.url),"../code/to-drag/example1.md":()=>i(()=>import("./example1-1a7ebedb.js"),[],import.meta.url),"../code/to-drag/example2.md":()=>i(()=>import("./example2-f1e1b442.js"),[],import.meta.url),"../code/to-drag/example3.md":()=>i(()=>import("./example3-46e9cff5.js"),[],import.meta.url),"../code/to-drag/example4.md":()=>i(()=>import("./example4-6d90c073.js"),[],import.meta.url),"../code/to-drag/example5.md":()=>i(()=>import("./example5-ca003ba8.js"),[],import.meta.url),"../code/to-drag/example6.md":()=>i(()=>import("./example6-9808cc0c.js"),[],import.meta.url)}),`../code/${e.mainName}/${_.value.replace(e.mainName+"-","")}.md`);c.value=a.default.replace(/\.\.\/\.\.\/\.\.\/\.\.\/packages/g,"@howdyjs"),u.value=!1},h=a=>{let L=a.target;L&&a.resizeWidthPercent&&(L.style.width=`${a.resizeWidthPercent}%`,v.value.style.width=`${100-a.resizeWidthPercent}%`)};return z(()=>o.name,a=>{a&&typeof a=="string"&&(_.value=a,m.value=!1,r.value=1,a.includes("example")&&x())},{immediate:!0}),{tableExample:v,page:_,code:c,codeLoading:u,resizeOptions:E,navActive:m,contentActive:r,activeTitle:A,showMobileWarning:V,moduleName:b,handleNavClick:f,handleResize:h,turnToGithub(){window.open("https://github.com/leon-kfd/howdyjs")}}}}),U=""+new URL("../images/Home.svg",import.meta.url).href,S=""+new URL("../images/github.svg",import.meta.url).href;const q={id:"example"},K={class:"header-tips"},J={class:"title"},Q={class:"nav-content"},X={class:"logo"},Y={id:"moduleName"},Z={class:"nav-list"},ee={class:"title"},te={class:"introduce"},oe={class:"nav-list"},ie=["onClick"],ae={class:"title"},me={class:"introduce"},re={class:"copyright"},se={key:0,class:"content"},le={class:"content-nav"},de={class:"content-nav-box"},ne={key:0,class:"mobile-warning"},_e={class:"example-content"},ue=["innerHTML"],pe={key:1,class:"readme-content"};function ve(e,o,R,v,_,c){const u=F("router-view"),E=M("resize");return s(),l("div",q,[P(t("input",{id:"navBtnActive","onUpdate:modelValue":o[0]||(o[0]=m=>e.navActive=m),type:"checkbox",style:{display:"none"}},null,512),[[B,e.navActive]]),o[17]||(o[17]=t("label",{class:"nav-btn",for:"navBtnActive"},[t("div",{class:"line"}),t("div",{class:"line"}),t("div",{class:"line"})],-1)),t("div",K,[t("p",J,n(e.activeTitle),1)]),t("div",{class:d(["nav-mask",{active:e.navActive}]),onClick:o[1]||(o[1]=H(m=>e.navActive=!1,["self"]))},null,2),t("div",{class:d(["nav",{active:e.navActive}])},[t("div",Q,[t("div",X,[t("h1",{id:"howdy",onClick:o[2]||(o[2]=m=>e.$router.push("/"))},o[9]||(o[9]=[t("svg",{class:"back",viewBox:"0 0 1024 1024"},[t("path",{d:"M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z"})],-1),t("span",{class:"text"},"Howdyjs",-1)])),t("p",Y,n(e.moduleName),1)]),o[10]||(o[10]=t("p",{class:"nav-title"}," Document ",-1)),t("ul",Z,[(s(!0),l(T,null,O(e.readmeList,(m,r)=>(s(),l("li",{key:r,class:d(["nav-listitem",{active:e.page===`${e.mainName}-readme`}]),onClick:o[3]||(o[3]=A=>e.$router.push({name:`${e.mainName}-readme`}))},[t("p",ee," #."+n(m.name),1),t("p",te,n(m.introduce),1)],2))),128))]),o[11]||(o[11]=t("p",{class:"nav-title"}," Example ",-1)),t("ul",oe,[(s(!0),l(T,null,O(e.exampleList,(m,r)=>(s(),l("li",{key:r,class:d(["nav-listitem",{active:e.page==`${e.mainName}-example${r+1}`}]),onClick:A=>e.handleNavClick(r)},[t("p",ae,n(r+1)+"."+n(m.name),1),t("p",me,n(m.introduce),1)],10,ie))),128))])]),t("div",re,[t("img",{src:U,class:"home-img",alt:"Home",title:"Home",onClick:o[4]||(o[4]=m=>e.$router.push("/"))}),t("img",{src:S,class:"github-img",alt:"Github",title:"Github",onClick:o[5]||(o[5]=(...m)=>e.turnToGithub&&e.turnToGithub(...m))}),o[12]||(o[12]=t("a",{href:"http://kongfandong.cn/blog/about",target:"_blank",title:"About Author",class:"link"},"LEON.KFD",-1)),o[13]||(o[13]=t("span",{class:"text"},"© 2024 ",-1))])],2),e.page!==`${e.mainName}-readme`?(s(),l("div",se,[t("div",le,[t("div",de,[t("div",{class:d(["content-nav-item",{active:e.contentActive===1}]),onClick:o[6]||(o[6]=m=>e.contentActive=1)}," Example ",2),t("div",{class:d(["content-nav-item",{active:e.contentActive===2}]),onClick:o[7]||(o[7]=m=>e.contentActive=2)}," Code ",2)])]),t("div",{ref:"tableExample",class:d(["example",{active:e.contentActive===1}])},[o[15]||(o[15]=t("p",{class:"title"}," Example ",-1)),e.showMobileWarning?(s(),l("div",ne,o[14]||(o[14]=[t("div",{class:"mobile-warning-content"}," 插件功能不支持移动端，请使用PC端浏览 ",-1)]))):D("",!0),t("div",_e,[I(u)])],2),P((s(),l("div",{class:d(["code",{active:e.contentActive===2}]),onResize:o[8]||(o[8]=(...m)=>e.handleResize&&e.handleResize(...m))},[o[16]||(o[16]=t("p",{class:"title"}," Code ",-1)),t("div",{class:"code-box",innerHTML:e.code},null,8,ue)],34)),[[E,e.resizeOptions,"left"]])])):D("",!0),e.page===`${e.mainName}-readme`?(s(),l("div",pe,[I(u)])):D("",!0)])}const Le=N(W,[["render",ve],["__scopeId","data-v-30840779"]]);export{Le as E};