function v(i,n){n===void 0&&(n={});var e=n.insertAt;if(!(!i||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i))}}var Z=`#__imgZoomMask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99999;
  display: flex;
  animation: fadeIn 0.4s;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
#__imgZoomMask #__imgZoomWrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
#__imgZoomMask #__imgZoomWrapper #__img {
  margin: auto;
  max-width: 85%;
}
#__imgZoomMask #__imgZoomTitle {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  color: #c8c8cc;
  font-weight: bold;
  font-size: 22px;
  padding: 0 50px;
  box-sizing: border-box;
}
#__imgZoomMask #__imgZoomFooter {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  color: #c8c8cc;
  font-weight: bold;
}
#__imgZoomMask #__leftBtn,
#__imgZoomMask #__rightBtn {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
#__imgZoomMask #__leftBtn:after,
#__imgZoomMask #__rightBtn:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 15px;
  box-sizing: border-box;
}
#__imgZoomMask #__leftBtn:hover,
#__imgZoomMask #__rightBtn:hover {
  background: rgba(0, 0, 0, 0.85);
}
#__imgZoomMask #__leftBtn {
  left: 20px;
}
#__imgZoomMask #__leftBtn:after {
  border-top: 2px solid #99a;
  border-left: 2px solid #99a;
  transform: rotate(-45deg);
  left: 20px;
}
#__imgZoomMask #__leftBtn:hover:after {
  border-top: 2px solid #eee;
  border-left: 2px solid #eee;
}
#__imgZoomMask #__rightBtn {
  right: 20px;
}
#__imgZoomMask #__rightBtn:after {
  border-top: 2px solid #889;
  border-right: 2px solid #889;
  transform: rotate(45deg);
  right: 20px;
}
#__imgZoomMask #__rightBtn:hover:after {
  border-top: 2px solid #eee;
  border-right: 2px solid #eee;
}
#__imgZoomMask #__closeBtn {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 100000;
}
#__imgZoomMask #__closeBtn::before {
  content: "";
  position: absolute;
  width: 30px;
  border-top: 2px solid #eee;
  left: 5px;
  top: 19px;
  transform: rotate(45deg);
}
#__imgZoomMask #__closeBtn::after {
  content: "";
  position: absolute;
  width: 30px;
  border-top: 2px solid #eee;
  left: 5px;
  top: 19px;
  transform: rotate(-45deg);
}
#__imgZoomMask #__imgZoomLoader {
  position: absolute;
  width: 40px;
  height: 40px;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  background: #b9b9eb;
  z-index: 100000;
  animation: squareLoader 1.2s infinite ease-in-out;
}

@keyframes squareLoader {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}`;v(Z);var k=Object.defineProperty,B=(i,n,e)=>n in i?k(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,c=(i,n,e)=>(B(i,typeof n!="symbol"?n+"":n,e),e);const l={};function a(i,n,e){const r=document.createElement(i);return r.setAttribute("id",n),e&&(r.innerText=e),r}class M{constructor({el:n,options:e}){if(c(this,"el"),c(this,"imgSrc"),c(this,"group"),c(this,"groupIndex"),c(this,"clickHandler"),n instanceof HTMLElement?this.el=n:this.el=document.querySelector(n),this.imgSrc=(e==null?void 0:e.imgSrc)||this.el.getAttribute("src"),this.el.$imgZoom=this,e!=null&&e.group)if(this.group=e.group,l[this.group]){const r=l[this.group].push({title:e.title,imgSrc:this.imgSrc});this.groupIndex=r-1}else l[this.group]=[{title:e.title,imgSrc:this.imgSrc}],this.groupIndex=0;e!=null&&e.zoomCursor&&(this.el.style.cursor="zoom-in"),this.clickHandler=r=>{e!=null&&e.preventDefault&&r.preventDefault();const t=a("div","__imgZoomMask"),d=a("div","__imgZoomWrapper");document.body.append(t);let s,m;const _=(e==null?void 0:e.showLoading)!==!1;_?(m=e!=null&&e.customLoading?e.customLoading():a("div","__imgZoomLoader"),t.appendChild(m),s=new Image,s.src=this.imgSrc,s.setAttribute("id","__img"),s.onload=()=>{d.contains(s)||(t.appendChild(d),d.appendChild(s)),d.style.display="flex",m.style.display="none"}):(t.appendChild(d),s=new Image,s.src=this.imgSrc,s.setAttribute("id","__img"),d.style.display="flex",d.appendChild(s));const x=()=>{t.style.opacity="0",t.style.transition="all 0.4s",setTimeout(()=>{var o;(o=t==null?void 0:t.parentNode)==null||o.removeChild(t)},400)};if(e!=null&&e.showCloseBtn){const o=a("div","__closeBtn");o.addEventListener("click",x),t.appendChild(o)}else t.addEventListener("click",x),e!=null&&e.zoomCursor&&(t.style.cursor="zoom-out");let g;if(e!=null&&e.title&&(g=a("div","__imgZoomTitle",e.title),t.appendChild(g)),this.group&&l[this.group]){let o=this.groupIndex;const f=a("div","__imgZoomFooter",`${o+1} / ${l[this.group].length}`);t.appendChild(f);const b=a("div","__leftBtn");b.addEventListener("click",u=>{o>0&&(d.style.display="none",s.src=l[this.group][--o].imgSrc,_?s.complete||(m.style.display="block"):setTimeout(()=>{d.style.display="flex"}),f.innerText=`${o+1} / ${l[this.group].length}`,g&&(g.innerText=`${l[this.group][o].title}`)),u.stopPropagation()}),t.appendChild(b);const y=a("div","__rightBtn");y.addEventListener("click",u=>{o<l[this.group].length-1&&(d.style.display="none",s.src=l[this.group][++o].imgSrc,_?s.complete||(m.style.display="block"):setTimeout(()=>{d.style.display="flex"}),f.innerText=`${o+1} / ${l[this.group].length}`,g&&(g.innerText=`${l[this.group][o].title}`)),u.stopPropagation()}),t.appendChild(y)}},this.el.addEventListener("click",this.clickHandler)}destory(){if(this.el.removeEventListener("click",this.clickHandler),this.group&&this.groupIndex&&this.groupIndex>=0){const n=l[this.group].findIndex(e=>e.imgSrc=this.imgSrc);~n&&l[this.group].splice(n,1)}}}const p=(i,n)=>{const{arg:e,value:r}=n;let t={};r?typeof r=="string"?t.imgSrc=r:t=r:t.imgSrc=i.getAttribute("src"),e&&(t.group=e),new M({el:i,options:t})},h=i=>{i.$imgZoom&&i.$imgZoom.destory()},w={mounted:p,unmounted:h,inserted:p,unbind:h,install(i){i.directive("img-zoom",{mounted:p,unmounted:h,inserted:p,unbind:h})}};export{w as I};
