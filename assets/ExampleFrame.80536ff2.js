import{d as $,u as z,a as w,b as p,e as C,f as D,w as N,_ as F,r as M,g as B,o as d,h as l,i as P,v as H,j as t,t as _,n as m,k as S,F as T,l as I,m as R,p as b,q as j,s as G,x as o}from"./index.a6e7310d.js";import{R as W}from"./index.es.73909a92.js";var q="./images/Home.svg",U="./images/github.svg";function K(e){switch(e){case"../code/animation-dialog/example1.md":return o(()=>import("./example1.8abaf0ee.js"),[]);case"../code/animation-dialog/example2.md":return o(()=>import("./example2.d403bbad.js"),[]);case"../code/animation-dialog/example3.md":return o(()=>import("./example3.e13e70be.js"),[]);case"../code/animation-dialog/example4.md":return o(()=>import("./example4.4170e0ea.js"),[]);case"../code/img-zoom/example1.md":return o(()=>import("./example1.1bdf6832.js"),[]);case"../code/img-zoom/example2.md":return o(()=>import("./example2.5f4bda7f.js"),[]);case"../code/img-zoom/example3.md":return o(()=>import("./example3.040aa0a1.js"),[]);case"../code/mouse-menu/example1.md":return o(()=>import("./example1.0aa5a613.js"),[]);case"../code/mouse-menu/example2.md":return o(()=>import("./example2.57e4a6ab.js"),[]);case"../code/mouse-menu/example3.md":return o(()=>import("./example3.d2ec3197.js"),[]);case"../code/mouse-menu/example4.md":return o(()=>import("./example4.d526f574.js"),[]);case"../code/mouse-menu/example5.md":return o(()=>import("./example5.abf1b905.js"),[]);case"../code/mouse-menu/example6.md":return o(()=>import("./example6.16762a45.js"),[]);case"../code/mouse-menu/example7.md":return o(()=>import("./example7.f3b3b394.js"),[]);case"../code/resize/example1.md":return o(()=>import("./example1.ea92e3fd.js"),[]);case"../code/resize/example2.md":return o(()=>import("./example2.b7f9f778.js"),[]);case"../code/resize/example3.md":return o(()=>import("./example3.aa0430b2.js"),[]);case"../code/resize/example4.md":return o(()=>import("./example4.fc8373da.js"),[]);case"../code/resize/example5.md":return o(()=>import("./example5.e00a8636.js"),[]);case"../code/scroll/example1.md":return o(()=>import("./example1.2989339f.js"),[]);case"../code/scroll/example2.md":return o(()=>import("./example2.9a70937e.js"),[]);case"../code/scroll/example3.md":return o(()=>import("./example3.d7957218.js"),[]);case"../code/scroll/example4.md":return o(()=>import("./example4.90198c41.js"),[]);case"../code/scroll/example5.md":return o(()=>import("./example5.54412e33.js"),[]);case"../code/size-observer/example1.md":return o(()=>import("./example1.08b5c556.js"),[]);case"../code/size-observer/example2.md":return o(()=>import("./example2.4ca22494.js"),[]);case"../code/standard-tabs/example1.md":return o(()=>import("./example1.e7b662a5.js"),[]);case"../code/standard-tabs/example2.md":return o(()=>import("./example2.946dc601.js"),[]);case"../code/to-control/example1.md":return o(()=>import("./example1.cefbb006.js"),[]);case"../code/to-control/example2.md":return o(()=>import("./example2.1bf815e7.js"),[]);case"../code/to-control/example3.md":return o(()=>import("./example3.7c994c38.js"),[]);case"../code/to-control/example4.md":return o(()=>import("./example4.a89eeb41.js"),[]);case"../code/to-drag/example1.md":return o(()=>import("./example1.e4a2b30b.js"),[]);case"../code/to-drag/example2.md":return o(()=>import("./example2.f0d9dc5e.js"),[]);case"../code/to-drag/example3.md":return o(()=>import("./example3.c9ddd341.js"),[]);case"../code/to-drag/example4.md":return o(()=>import("./example4.779171b7.js"),[]);case"../code/to-drag/example5.md":return o(()=>import("./example5.7237c6d1.js"),[]);case"../code/to-drag/example6.md":return o(()=>import("./example6.d0ad9284.js"),[]);default:return new Promise(function(i,v){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(v.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const J=$({name:"ExampleFrame",directives:{resize:W},props:{mainName:{type:String,default:""},readmeList:{type:Array,default:()=>[]},exampleList:{type:Array,default:()=>[]},disabledMobile:{type:Boolean,default:!1}},setup(e){const i=z(),v=w(),E=p(),c=p(""),A=p(""),u=p(!1),h=C({zIndex:9999,tipLineColor:"#889"}),s=p(!1),n=p(1),g=D(()=>{if(c.value===`${e.mainName}-readme`)return"#.README";{let a=e.exampleList.findIndex((L,y)=>c.value===`${e.mainName}-example${y+1}`);return a>-1?`${a+1}.${e.exampleList[a].name}`:""}}),O=D(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&e.disabledMobile),V=D(()=>e.mainName.split("-").map(a=>a.slice(0,1).toUpperCase()+a.slice(1)).join(" ")),f=a=>{v.push({name:`${e.mainName}-example${a+1}`})},x=async()=>{u.value=!0;let a=await K(`../code/${e.mainName}/${c.value.replace(e.mainName+"-","")}.md`);A.value=a.default.replace(/\.\.\/\.\.\/\.\.\/\.\.\/packages/g,"@howdyjs"),u.value=!1},k=a=>{let L=a.target;L&&a.resizeWidthPercent&&(L.style.width=`${a.resizeWidthPercent}%`,E.value.style.width=`${100-a.resizeWidthPercent}%`)};return N(()=>i.name,a=>{a&&typeof a=="string"&&(c.value=a,s.value=!1,n.value=1,a.includes("example")&&x())},{immediate:!0}),{tableExample:E,page:c,code:A,codeLoading:u,resizeOptions:h,navActive:s,contentActive:n,activeTitle:g,showMobileWarning:O,moduleName:V,handleNavClick:f,handleResize:k,turnToGithub(){window.open("https://github.com/leon-kfd/howdyjs")}}}}),r=e=>(j("data-v-4de0d75b"),e=e(),G(),e),Q={id:"example"},X=r(()=>t("label",{class:"nav-btn",for:"navBtnActive"},[t("div",{class:"line"}),t("div",{class:"line"}),t("div",{class:"line"})],-1)),Y={class:"header-tips"},Z={class:"title"},ee={class:"nav-content"},te={class:"logo"},oe=r(()=>t("svg",{class:"back",viewBox:"0 0 1024 1024"},[t("path",{d:"M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z"})],-1)),ie=r(()=>t("span",{class:"text"},"Howdyjs",-1)),ae=[oe,ie],se={id:"moduleName"},re=r(()=>t("p",{class:"nav-title"}," Document ",-1)),ne={class:"nav-list"},de={class:"title"},le={class:"introduce"},me=r(()=>t("p",{class:"nav-title"}," Example ",-1)),_e={class:"nav-list"},ce=["onClick"],ue={class:"title"},pe={class:"introduce"},ve={class:"copyright"},Ee=r(()=>t("a",{href:"http://kongfandong.cn/blog/about",target:"_blank",title:"About Author",class:"link"},"LEON.KFD",-1)),Ae=r(()=>t("span",{class:"text"},"\xA9 2023 ",-1)),he={key:0,class:"content"},ge={class:"content-nav"},Le={class:"content-nav-box"},De=r(()=>t("p",{class:"title"}," Example ",-1)),Re={key:0,class:"mobile-warning"},Pe=r(()=>t("div",{class:"mobile-warning-content"}," \u63D2\u4EF6\u529F\u80FD\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\uFF0C\u8BF7\u4F7F\u7528PC\u7AEF\u6D4F\u89C8 ",-1)),Te=[Pe],Ie={class:"example-content"},be=r(()=>t("p",{class:"title"}," Code ",-1)),Oe=["innerHTML"],Ve={key:1,class:"readme-content"};function fe(e,i,v,E,c,A){const u=M("router-view"),h=B("resize");return d(),l("div",Q,[P(t("input",{id:"navBtnActive","onUpdate:modelValue":i[0]||(i[0]=s=>e.navActive=s),type:"checkbox",style:{display:"none"}},null,512),[[H,e.navActive]]),X,t("div",Y,[t("p",Z,_(e.activeTitle),1)]),t("div",{class:m(["nav-mask",{active:e.navActive}]),onClick:i[1]||(i[1]=S(s=>e.navActive=!1,["self"]))},null,2),t("div",{class:m(["nav",{active:e.navActive}])},[t("div",ee,[t("div",te,[t("h1",{id:"howdy",onClick:i[2]||(i[2]=s=>e.$router.push("/"))},ae),t("p",se,_(e.moduleName),1)]),re,t("ul",ne,[(d(!0),l(T,null,I(e.readmeList,(s,n)=>(d(),l("li",{key:n,class:m(["nav-listitem",{active:e.page===`${e.mainName}-readme`}]),onClick:i[3]||(i[3]=g=>e.$router.push({name:`${e.mainName}-readme`}))},[t("p",de," #."+_(s.name),1),t("p",le,_(s.introduce),1)],2))),128))]),me,t("ul",_e,[(d(!0),l(T,null,I(e.exampleList,(s,n)=>(d(),l("li",{key:n,class:m(["nav-listitem",{active:e.page==`${e.mainName}-example${n+1}`}]),onClick:g=>e.handleNavClick(n)},[t("p",ue,_(n+1)+"."+_(s.name),1),t("p",pe,_(s.introduce),1)],10,ce))),128))])]),t("div",ve,[t("img",{src:q,class:"home-img",alt:"Home",title:"Home",onClick:i[4]||(i[4]=s=>e.$router.push("/"))}),t("img",{src:U,class:"github-img",alt:"Github",title:"Github",onClick:i[5]||(i[5]=(...s)=>e.turnToGithub&&e.turnToGithub(...s))}),Ee,Ae])],2),e.page!==`${e.mainName}-readme`?(d(),l("div",he,[t("div",ge,[t("div",Le,[t("div",{class:m(["content-nav-item",{active:e.contentActive===1}]),onClick:i[6]||(i[6]=s=>e.contentActive=1)}," Example ",2),t("div",{class:m(["content-nav-item",{active:e.contentActive===2}]),onClick:i[7]||(i[7]=s=>e.contentActive=2)}," Code ",2)])]),t("div",{ref:"tableExample",class:m(["example",{active:e.contentActive===1}])},[De,e.showMobileWarning?(d(),l("div",Re,Te)):R("",!0),t("div",Ie,[b(u)])],2),P((d(),l("div",{class:m(["code",{active:e.contentActive===2}]),onResize:i[8]||(i[8]=(...s)=>e.handleResize&&e.handleResize(...s))},[be,t("div",{class:"code-box",innerHTML:e.code},null,8,Oe)],34)),[[h,e.resizeOptions,"left"]])])):R("",!0),e.page===`${e.mainName}-readme`?(d(),l("div",Ve,[b(u)])):R("",!0)])}var ye=F(J,[["render",fe],["__scopeId","data-v-4de0d75b"]]);export{ye as E};