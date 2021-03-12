import{d as e,f as a,g as s,e as t,h as m,u as l,i,_ as c,r as n,j as r,c as o,k as d,v as p,a as _,t as u,l as v,F as x,m as E,n as A,w as L,p as b,q as g,b as P,o as j}from"./index.f6d1a223.js";import{R}from"./index.es.2e33f828.js";var T=e({name:"ExampleFrame",directives:{resize:R},props:{mainName:{type:String,default:""},readmeList:{type:Array,default:()=>[]},exampleList:{type:Array,default:()=>[]},disabledMobile:{type:Boolean,default:!1}},setup(e){const n=l(),r=i(),o=a(),d=a(""),p=a(""),_=a(!1),u=s({zIndex:9999,tipLineColor:"#889"}),v=a(!1),x=a(1),E=t((()=>{if(d.value===`${e.mainName}-readme`)return"#.README";{let a=e.exampleList.findIndex(((a,s)=>d.value===`${e.mainName}-example${s+1}`));return a>-1?`${a+1}.${e.exampleList[a].name}`:""}})),A=t((()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&e.disabledMobile)),L=t((()=>e.mainName.split("-").map((e=>e.slice(0,1).toUpperCase()+e.slice(1))).join(" "))),b=async()=>{_.value=!0;let a=await function(e){switch(e){case"../code/animation-dialog/example1.md":return c((()=>__import__("./example1.8abaf0ee.js")),void 0);case"../code/animation-dialog/example2.md":return c((()=>__import__("./example2.a9ab57b6.js")),void 0);case"../code/animation-dialog/example3.md":return c((()=>__import__("./example3.9c685380.js")),void 0);case"../code/img-zoom/example1.md":return c((()=>__import__("./example1.1bdf6832.js")),void 0);case"../code/img-zoom/example2.md":return c((()=>__import__("./example2.5f4bda7f.js")),void 0);case"../code/img-zoom/example3.md":return c((()=>__import__("./example3.ce439ff4.js")),void 0);case"../code/mouse-menu/example1.md":return c((()=>__import__("./example1.7deadc90.js")),void 0);case"../code/mouse-menu/example2.md":return c((()=>__import__("./example2.5e85db61.js")),void 0);case"../code/mouse-menu/example3.md":return c((()=>__import__("./example3.685c668f.js")),void 0);case"../code/mouse-menu/example4.md":return c((()=>__import__("./example4.d4991d29.js")),void 0);case"../code/mouse-menu/example5.md":return c((()=>__import__("./example5.692ed963.js")),void 0);case"../code/mouse-menu/example6.md":return c((()=>__import__("./example6.e08c2f96.js")),void 0);case"../code/resize/example1.md":return c((()=>__import__("./example1.80823b52.js")),void 0);case"../code/resize/example2.md":return c((()=>__import__("./example2.292cd9d9.js")),void 0);case"../code/resize/example3.md":return c((()=>__import__("./example3.b902f6c2.js")),void 0);case"../code/resize/example4.md":return c((()=>__import__("./example4.aa58b28d.js")),void 0);case"../code/resize/example5.md":return c((()=>__import__("./example5.02bef24f.js")),void 0);case"../code/scroll/example1.md":return c((()=>__import__("./example1.2989339f.js")),void 0);case"../code/scroll/example2.md":return c((()=>__import__("./example2.9a70937e.js")),void 0);case"../code/scroll/example3.md":return c((()=>__import__("./example3.d7957218.js")),void 0);case"../code/scroll/example4.md":return c((()=>__import__("./example4.90198c41.js")),void 0);case"../code/scroll/example5.md":return c((()=>__import__("./example5.54412e33.js")),void 0);case"../code/size-observer/example1.md":return c((()=>__import__("./example1.08b5c556.js")),void 0);case"../code/size-observer/example2.md":return c((()=>__import__("./example2.4ca22494.js")),void 0);case"../code/standard-tabs/example1.md":return c((()=>__import__("./example1.e7b662a5.js")),void 0);case"../code/standard-tabs/example2.md":return c((()=>__import__("./example2.946dc601.js")),void 0);case"../code/to-drag/example1.md":return c((()=>__import__("./example1.e4a2b30b.js")),void 0);case"../code/to-drag/example2.md":return c((()=>__import__("./example2.324b3dc8.js")),void 0);case"../code/to-drag/example3.md":return c((()=>__import__("./example3.c9ddd341.js")),void 0);case"../code/to-drag/example4.md":return c((()=>__import__("./example4.779171b7.js")),void 0);case"../code/to-drag/example5.md":return c((()=>__import__("./example5.803a23aa.js")),void 0);case"../code/to-drag/example6.md":return c((()=>__import__("./example6.f94a7cda.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`../code/${e.mainName}/${d.value.replace(e.mainName+"-","")}.md`);p.value=a.default.replace(/\.\.\/\.\.\/\.\.\/\.\.\/packages/g,"@howdyjs"),_.value=!1};return m((()=>n.name),(e=>{e&&"string"==typeof e&&(d.value=e,v.value=!1,x.value=1,e.includes("example")&&b())}),{immediate:!0}),{tableExample:o,page:d,code:p,codeLoading:_,resizeOptions:u,navActive:v,contentActive:x,activeTitle:E,showMobileWarning:A,moduleName:L,handleNavClick:a=>{r.push({name:`${e.mainName}-example${a+1}`})},handleResize:e=>{let a=e.target;a&&e.resizeWidthPercent&&(a.style.width=`${e.resizeWidthPercent}%`,o.value.style.width=100-e.resizeWidthPercent+"%")}}}});const D=L("data-v-4bda1042");b("data-v-4bda1042");const I={id:"example"},O=_("label",{class:"nav-btn",for:"navBtnActive"},[_("div",{class:"line"}),_("div",{class:"line"}),_("div",{class:"line"})],-1),f={class:"header-tips"},V={class:"title"},h={class:"nav-content"},y={class:"logo"},k=_("svg",{class:"back",viewBox:"0 0 1024 1024"},[_("path",{d:"M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z"})],-1),z=_("span",{class:"text"},"Howdy",-1),$={id:"moduleName"},w=_("p",{class:"nav-title"}," Document ",-1),C={class:"nav-list"},N={class:"title"},M={class:"introduce"},B=_("p",{class:"nav-title"}," Example ",-1),W={class:"nav-list"},H={class:"title"},F={class:"introduce"},U={class:"copyright"},S=g("Copyright © "),q=_("a",{href:"http://kongfandong.cn/blog/about",target:"_blank"},"Leon.KFD",-1),K={key:0,class:"content"},G={class:"content-nav"},J={class:"content-nav-box"},Q=_("p",{class:"title"}," Example ",-1),X={key:0,class:"mobile-warning"},Y=_("div",{class:"mobile-warning-content"}," 插件功能不支持移动端，请使用PC端浏览 ",-1),Z={class:"example-content"},ee=_("p",{class:"title"}," Code ",-1),ae={key:1,class:"readme-content"};P();const se=D(((e,a,s,t,m,l)=>{const i=n("router-view"),c=r("resize");return j(),o("div",I,[d(_("input",{id:"navBtnActive","onUpdate:modelValue":a[1]||(a[1]=a=>e.navActive=a),type:"checkbox",style:{display:"none"}},null,512),[[p,e.navActive]]),O,_("div",f,[_("p",V,u(e.activeTitle),1)]),_("div",{class:["nav-mask",{active:e.navActive}],onClick:a[2]||(a[2]=v((a=>e.navActive=!1),["self"]))},null,2),_("div",{class:["nav",{active:e.navActive}]},[_("div",h,[_("div",y,[_("h1",{id:"howdy",onClick:a[3]||(a[3]=a=>e.$router.push("/"))},[k,z]),_("p",$,u(e.moduleName),1)]),w,_("ul",C,[(j(!0),o(x,null,E(e.readmeList,((s,t)=>(j(),o("li",{key:t,class:["nav-listitem",{active:e.page===`${e.mainName}-readme`}],onClick:a[4]||(a[4]=a=>e.$router.push({name:`${e.mainName}-readme`}))},[_("p",N," #."+u(s.name),1),_("p",M,u(s.introduce),1)],2)))),128))]),B,_("ul",W,[(j(!0),o(x,null,E(e.exampleList,((a,s)=>(j(),o("li",{key:s,class:["nav-listitem",{active:e.page==`${e.mainName}-example${s+1}`}],onClick:a=>e.handleNavClick(s)},[_("p",H,u(s+1)+"."+u(a.name),1),_("p",F,u(a.introduce),1)],10,["onClick"])))),128))])]),_("div",U,[_("img",{src:"/howdy-next/images/Home.svg",class:"home-img",onClick:a[5]||(a[5]=a=>e.$router.push("/"))}),S,q])],2),e.page!==`${e.mainName}-readme`?(j(),o("div",K,[_("div",G,[_("div",J,[_("div",{class:["content-nav-item",{active:1===e.contentActive}],onClick:a[6]||(a[6]=a=>e.contentActive=1)}," Example ",2),_("div",{class:["content-nav-item",{active:2===e.contentActive}],onClick:a[7]||(a[7]=a=>e.contentActive=2)}," Code ",2)])]),_("div",{ref:"tableExample",class:["example",{active:1===e.contentActive}]},[Q,e.showMobileWarning?(j(),o("div",X,[Y])):A("",!0),_("div",Z,[_(i)])],2),d(_("div",{class:["code",{active:2===e.contentActive}],onResize:a[8]||(a[8]=(...a)=>e.handleResize&&e.handleResize(...a))},[ee,_("div",{class:"code-box",innerHTML:e.code},null,8,["innerHTML"])],34),[[c,e.resizeOptions,"left"]])])):A("",!0),e.page===`${e.mainName}-readme`?(j(),o("div",ae,[_(i)])):A("",!0)])}));T.render=se,T.__scopeId="data-v-4bda1042";export{T as _};