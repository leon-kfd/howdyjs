function a(o,r,e){const n=document.createElement(o);return n.setAttribute("id",r),e&&(n.innerText=e),n}function b(o,r){r===void 0&&(r={});var e=r.insertAt;if(!(!o||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}}var y=`#__imgZoomMask {
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
}`;b(y);const l={};class k{constructor({el:r,options:e}){if(r instanceof HTMLElement?this.el=r:this.el=document.querySelector(r),this.imgSrc=(e==null?void 0:e.imgSrc)||this.el.getAttribute("src"),this.el.$imgZoom=this,e==null?void 0:e.group)if(this.group=e.group,l[this.group]){const n=l[this.group].push({title:e.title,imgSrc:this.imgSrc});this.groupIndex=n-1}else l[this.group]=[{title:e.title,imgSrc:this.imgSrc}],this.groupIndex=0;(e==null?void 0:e.zoomCursor)&&(this.el.style.cursor="zoom-in"),this.clickHandler=n=>{(e==null?void 0:e.preventDefault)&&n.preventDefault();const t=a("div","__imgZoomMask"),d=a("div","__imgZoomWrapper");document.body.append(t);let s,m;const h=(e==null?void 0:e.showLoading)!==!1;h?(m=(e==null?void 0:e.customLoading)?e.customLoading():a("div","__imgZoomLoader"),t.appendChild(m),s=new Image,s.src=this.imgSrc,s.setAttribute("id","__img"),s.onload=()=>{d.contains(s)||(t.appendChild(d),d.appendChild(s)),d.style.display="flex",m.style.display="none"}):(t.appendChild(d),s=new Image,s.src=this.imgSrc,s.setAttribute("id","__img"),d.style.display="flex",d.appendChild(s));const f=()=>{t.style.opacity="0",t.style.transition="all 0.4s",setTimeout(()=>{var i;(i=t==null?void 0:t.parentNode)===null||i===void 0||i.removeChild(t)},400)};if(e==null?void 0:e.showCloseBtn){const i=a("div","__closeBtn");i.addEventListener("click",f),t.appendChild(i)}else t.addEventListener("click",f),(e==null?void 0:e.zoomCursor)&&(t.style.cursor="zoom-out");let g;if((e==null?void 0:e.title)&&(g=a("div","__imgZoomTitle",e.title),t.appendChild(g)),this.group&&l[this.group]){let i=this.groupIndex;const _=a("div","__imgZoomFooter",`${i+1} / ${l[this.group].length}`);t.appendChild(_);const x=a("div","__leftBtn");x.addEventListener("click",u=>{i>0&&(d.style.display="none",s.src=l[this.group][--i].imgSrc,h?s.complete||(m.style.display="block"):setTimeout(()=>{d.style.display="flex"}),_.innerText=`${i+1} / ${l[this.group].length}`,g&&(g.innerText=`${l[this.group][i].title}`)),u.stopPropagation()}),t.appendChild(x);const v=a("div","__rightBtn");v.addEventListener("click",u=>{i<l[this.group].length-1&&(d.style.display="none",s.src=l[this.group][++i].imgSrc,h?s.complete||(m.style.display="block"):setTimeout(()=>{d.style.display="flex"}),_.innerText=`${i+1} / ${l[this.group].length}`,g&&(g.innerText=`${l[this.group][i].title}`)),u.stopPropagation()}),t.appendChild(v)}},this.el.addEventListener("click",this.clickHandler)}destory(){if(this.el.removeEventListener("click",this.clickHandler),this.group&&this.groupIndex&&this.groupIndex>=0){const r=l[this.group].findIndex(e=>e.imgSrc=this.imgSrc);~r&&l[this.group].splice(r,1)}}}const p=(o,r)=>{const{arg:e,value:n}=r;let t={};n?typeof n=="string"?t.imgSrc=n:t=n:t.imgSrc=o.getAttribute("src"),e&&(t.group=e),new k({el:o,options:t})},c=o=>{o.$imgZoom&&o.$imgZoom.destory()},Z={mounted:p,unmounted:c,inserted:p,unbind:c,install(o){o.directive("img-zoom",{mounted:p,unmounted:c,inserted:p,unbind:c})}};export{Z as I};
