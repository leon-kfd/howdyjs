var S=Object.defineProperty,H=(s,t,e)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t,e)=>(H(s,typeof t!="symbol"?t+"":t,e),e);class P{constructor({el:t,options:e}){x(this,"el"),x(this,"options"),x(this,"directionArr"),t instanceof HTMLElement?this.el=t:this.el=document.querySelector(t),this.options={immediate:!1,direction:["right"],scrollElSelector:null,lineColor:"#aab",lineWidth:2,lineHoverColor:"#88f",lineHoverWidth:4,tipLineColor:"#262626",tipLineWidth:1,tipLineStyle:"dashed",zIndex:999,needParentNodeOffset:!0,...e},this.directionArr=this.options.direction||["right"],this.el.$resize=this}init(){const{position:t}=getComputedStyle(this.el),{position:e}=getComputedStyle(this.el.parentNode);t==="static"&&(this.el.style.position="relative"),e==="static"&&console.warn("[@howdyjs/resize] Element parentNode position can not be static!"),this.directionArr.map(i=>{if(this.options.immediate){const n=this.createLineEl(i);this.el.appendChild(n)}else{const n=this.createDashedLineEl(i),r=this.createLineEl(i,n);this.el.appendChild(n),this.el.appendChild(r)}})}createDashedLineEl(t){const{tipLineColor:e,tipLineWidth:i,tipLineStyle:n,zIndex:r}=this.options,u=document.createElement("div"),m=`position:absolute;z-index: ${r};visibility: hidden;`,y=t==="left"||t==="right";return u.style.cssText=y?`${m};top:0;bottom: 0;${t}:0;border-${t}:${i}px ${n} ${e}`:`${m};left:0;right: 0;${t}:0;border-${t}:${i}px ${n} ${e}`,u.setAttribute("class","resize__dashed-line"),u}createLineEl(t,e){const{immediate:i,lineColor:n,lineWidth:r,lineHoverColor:u,lineHoverWidth:m,zIndex:y}=this.options,o=document.createElement("div"),L=`position: absolute;background: ${n};z-index: ${y}`,l=t==="left"||t==="right",p=t==="right"||t==="bottom";o.style.cssText=l?`${L};width: ${r}px;top:0;bottom: 0;${t}: -${r/2}px;cursor: col-resize;`:`${L};height: ${r}px;left:0;right: 0;${t}: -${r/2}px;cursor: row-resize;`,o.mouseoverEvent=function(){o.style.background=u,o.style[l?"width":"height"]=`${m}px`,o.style[t]=`-${m/2}px`},o.mouseoutEvent=function(){o.style.background=n,o.style[l?"width":"height"]=`${r}px`,o.style[t]=`-${r/2}px`};const c=this.el;return o.mousedownEvent=function(_){const C=(c||_.target.parentNode).parentNode;let d;const E=l?C.offsetWidth:C.offsetHeight;document.body.style.userSelect="none";let g=!0;const w=()=>{const a=l?c.offsetWidth:c.offsetHeight,v=l?c.offsetLeft:c.offsetTop,z=p?v+a+d:v+d,h=p?a+d:a-d,f=document.createEvent("HTMLEvents");f.initEvent("resize",!1,!1),f.direction=t,f.moveOffset=z,f.moveOffsetPercent=z/E*100,f[l?"resizeWidth":"resizeHeight"]=h,f[l?"resizeWidthPercent":"resizeHeightPercent"]=h/E*100,c.dispatchEvent(f)};document.onmousemove=function(a){a.preventDefault();const{x:v,y:z}=c.getBoundingClientRect(),h=l?c.offsetWidth:c.offsetHeight,f=l?c.offsetLeft:c.offsetTop;d=p?l?a.clientX-v-h:a.clientY-z-h:l?a.clientX-v:a.clientY-z,g=p?-d<=h&&f+h+d<=E:d<=h&&f+d>=0,g&&(i?w():e&&(e.style.visibility="visible",e.style[t]=`${p?-d:d}px`))},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,document.body.style.userSelect="auto",i||(e&&(e.style.visibility="hidden"),g&&(w(),e&&(e.style[t]="0px")))}},o.setAttribute("class","resize__line"),o.addEventListener("mousemove",o.mouseoverEvent),o.addEventListener("mouseout",o.mouseoutEvent),o.addEventListener("mousedown",o.mousedownEvent),o}destroy(){Array.prototype.slice.call(this.el.querySelectorAll(".resize__line")).forEach(e=>{e.mouseoverEvent&&e.removeEventListener("mousemove",e.mouseoverEvent),e.mouseoutEvent&&e.removeEventListener("mouseout",e.mouseoutEvent),e.mousedownEvent&&e.removeEventListener("mousedown",e.mousedownEvent),e.parentNode&&e.parentNode.removeChild(e)}),this.el.querySelectorAll(".resize__dashed-line").forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}}const $=(s,t,e)=>{const{arg:i,value:n}=t,r=e||{};let u,m;i&&(i==="all"?u=["top","left","bottom","right"]:u=[i]),u?m={...r,...n,direction:u}:m={...r,...n},new P({el:s,options:m}).init()},b=s=>{s.$resize&&s.$resize.destroy()},N={mounted:(s,t)=>$(s,t),unmounted:b,inserted:(s,t)=>$(s,t),unbind:b,install:(s,t)=>{s.directive("resize",{mounted:(e,i)=>$(e,i,t),unmounted:b,inserted:(e,i)=>$(e,i,t),unbind:b})}};export{N as R};