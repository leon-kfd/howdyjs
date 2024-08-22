var m=Object.defineProperty,b=(e,t,s)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,n=(e,t,s)=>(b(e,typeof t!="symbol"?t+"":t,s),s);function v(e,t,s=!1){const i={},o=window.getComputedStyle(e);return t.map(h=>{let r=o[h];if(s){const d=r.match(/\d+/);d&&(r=~~d[0])}i[h]=r}),i}class g{constructor({el:t,options:s}){n(this,"el"),n(this,"isTouch"),n(this,"isDrag"),n(this,"parent"),n(this,"left",0),n(this,"top",0),n(this,"right",0),n(this,"bottom",0),n(this,"width",0),n(this,"height",0),n(this,"maxX",0),n(this,"maxY",0),n(this,"needComputeAdsorb",!0),n(this,"options"),n(this,"scrollbarWidth"),n(this,"startX",0),n(this,"startY",0),n(this,"getScrollbarWidth",()=>{const i=document.createElement("div");i.style.cssText="width:100px;height:100px;overflow-y:scroll",document.body.appendChild(i);const o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),o}),n(this,"setBetween",(i,o,h)=>i<o?o:i>h?h:i),n(this,"borderInfo",[0,0,0,0]),this.el=t instanceof HTMLElement?t:document.querySelector(t),this.scrollbarWidth=this.getScrollbarWidth(),this.isTouch="ontouchstart"in document.documentElement,this.isDrag=!1,this.options={moveCursor:!0,adsorb:0,adsorbOffset:0,transitionDuration:400,transitionTimingFunction:"ease-in-out",forbidBodyScroll:!0,isAbsolute:!1,positionMode:1,needComputeBorder:!0,...s},this.parent=this.options.parentSelector&&document.querySelector(this.options.parentSelector)||this.el.parentNode,this.options.transitionDuration&&(this.options.transitionDuration=this.options.transitionDuration/1e3),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleMousedown=this.handleMousedown.bind(this),this.moveEvent=this.moveEvent.bind(this),this.endEvent=this.endEvent.bind(this),this.init()}init(){this.isTouch?this.el.addEventListener("touchstart",this.handleTouchStart):this.el.addEventListener("mousedown",this.handleMousedown),this.options.moveCursor&&(this.el.style.cursor="move"),this.setPosition(),this.setLimit(),this.handleAdsorb(),this.handlePositionMode(),setTimeout(()=>{this.emitEvent("todraginit")})}handleMousedown(t){if(typeof this.options.disabled=="function"&&this.options.disabled())return;const{x:s,y:i}=t;this.setStartInfo(s,i,t),document.addEventListener("mousemove",this.moveEvent),document.addEventListener("mouseup",this.endEvent)}handleTouchStart(t){if(typeof this.options.disabled=="function"&&this.options.disabled())return;const s=this.isTouch?t.changedTouches[0].clientX:t.x,i=this.isTouch?t.changedTouches[0].clientY:t.y;this.setStartInfo(s,i,t),document.addEventListener("touchmove",this.moveEvent,{passive:!1}),document.addEventListener("touchend",this.endEvent)}setPosition(){const{left:t,top:s,width:i,height:o}=this.el.getBoundingClientRect();this.left=t,this.top=s,this.width=i,this.height=o,this.options.isAbsolute?(this.maxX=this.parent.offsetWidth-this.width,this.maxY=this.parent.offsetHeight-this.height):(this.maxX=document.body.scrollWidth>window.innerWidth?window.innerWidth-this.width-this.scrollbarWidth:window.innerWidth-this.width,this.maxY=document.body.scrollHeight>window.innerHeight?window.innerHeight-this.height-this.scrollbarWidth:window.innerHeight-this.height)}setStartInfo(t,s,i){this.needComputeAdsorb=!1,this.setPosition(),this.setLimit(),this.startX=t-this.left,this.startY=s-this.top,this.isDrag=!0,this.el.style.transition="",document.body.style.userSelect="none",this.options.forbidBodyScroll&&(document.body.style.overflow="hidden"),this.emitEvent("todragstart",i)}moveEvent(t){if(!this.isDrag)return;t.preventDefault(),this.needComputeAdsorb=!0;let s,i;const o=this.isTouch?t.changedTouches[0].clientX:t.x,h=this.isTouch?t.changedTouches[0].clientY:t.y;if(!this.options.isAbsolute)s=o-this.startX,i=h-this.startY;else{const r=this.parent.getClientRects()[0];s=o-r.x-this.startX-this.borderInfo[1],i=h-r.y-this.startY-this.borderInfo[2]}this.left=this.setBetween(s,0,this.maxX-this.borderInfo[1]-this.borderInfo[3]),this.top=this.setBetween(i,0,this.maxY-this.borderInfo[2]-this.borderInfo[0]),this.el.style.left=this.left+"px",this.el.style.top=this.top+"px",this.emitEvent("todragmove",t)}endEvent(t){this.isDrag=!1,document.removeEventListener("mousemove",this.moveEvent),document.removeEventListener("mouseup",this.endEvent),document.removeEventListener("touchmove",this.moveEvent),document.removeEventListener("touchend",this.endEvent),document.body.style.userSelect="auto",this.options.forbidBodyScroll&&(document.body.style.overflow="visible"),this.handleAdsorb(),this.handlePositionMode(),this.emitEvent("todragend",t)}handleAdsorb(){if(!this.needComputeAdsorb)return;const t=[this.left+this.width/2,this.top+this.height/2];let s=0,i=0;if(this.options.isAbsolute){const h=this.parent.getClientRects()[0];s=h.width,i=h.height}else s=window.innerWidth,i=window.innerHeight;const o=[s,i];if(this.el.style.transition=`left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`,this.options.adsorb===1)t[0]<=s/2?this.left=this.options.adsorbOffset:this.left=this.maxX-this.options.adsorbOffset-this.borderInfo[1]-this.borderInfo[3];else if(this.options.adsorb===2){const h=o[1]/o[0],r=o[1]/-o[0],d=t[1]/t[0],l=t[1]/(t[0]-o[0]);h>=d&&r<l?this.top=this.options.adsorbOffset:h>=d&&r>=l?this.left=this.maxX-this.options.adsorbOffset-this.borderInfo[1]-this.borderInfo[3]:h<d&&r>=l?this.top=this.maxY-this.options.adsorbOffset-this.borderInfo[2]-this.borderInfo[0]:this.left=this.options.adsorbOffset,this.options.adsorbOffset&&(this.top===0&&(this.top=this.options.adsorbOffset),this.top===this.maxY&&(this.top=this.maxY-this.options.adsorbOffset),this.left===0&&(this.left=this.options.adsorbOffset),this.left===this.maxX&&(this.left=this.maxX-this.options.adsorbOffset))}this.el.style.left=this.left+"px",this.el.style.top=this.top+"px"}handlePositionMode(){if(this.options.adsorb)return;const t=this.options.isAbsolute?this.el.offsetLeft:this.left,s=this.options.isAbsolute?this.el.offsetTop:this.top;this.right=this.maxX-t-this.borderInfo[1]-this.borderInfo[3],this.bottom=this.maxY-s-this.borderInfo[2]-this.borderInfo[0],this.options.positionMode===2?(this.el.style.left="auto",this.el.style.right=this.right+"px"):this.options.positionMode===3?(this.el.style.top="auto",this.el.style.bottom=this.bottom+"px"):this.options.positionMode===4&&(this.el.style.left="auto",this.el.style.top="auto",this.el.style.right=this.right+"px",this.el.style.bottom=this.bottom+"px")}emitEvent(t,s){const i=document.createEvent("HTMLEvents");i.initEvent(t,!1,!1);const{left:o,top:h,right:r,bottom:d,width:l,height:u,maxX:c,maxY:p}=this;i.left=o,i.top=h,i.width=l,i.height=u,i.maxX=c,i.maxY=p,i.right=r,i.bottom=d,s&&(i.sourceEvent=s),this.el.dispatchEvent(i)}destroy(){this.isTouch?this.el.removeEventListener("touchstart",this.handleTouchStart):this.el.removeEventListener("mousedown",this.handleMousedown)}setLimit(){if(!this.options.isAbsolute||!this.options.needComputeBorder)return;const t=["top","right","bottom","left"],s=v(this.parent,[...t.map(i=>`border-${i}-width`)],!0);this.borderInfo=t.map(i=>s[`border-${i}-width`])}}const a=(e,t,s)=>{const{value:i}=t,h={...s||{},...i};e.$toDrag=new g({el:e,options:h})},f=e=>{e.$toDrag&&e.$toDrag.destroy()},w={mounted:(e,t)=>a(e,t),unmounted:f,inserted:(e,t)=>a(e,t),unbind:f,install:(e,t)=>{e.directive("to-drag",{mounted:(s,i)=>a(s,i,t),unmounted:f,inserted:(s,i)=>a(s,i,t),unbind:f})}};export{g as T,w as a};
