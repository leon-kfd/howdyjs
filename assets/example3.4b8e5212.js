import{s as d}from"./index.es.42d9d9c4.js";import{_ as s,d as p,a as t,r,o as f,g as h,i as e,m as i,F as g}from"./index.48b516a8.js";const c=p({components:{AnimationDialog:d},setup(){const o=t(),n=t(),u=t(),m=t();return{bounce:o,fade:n,zoom:u,flip:m,handleShowBounceDialog(){o.value.open()},handleShowFadeDialog(){n.value.open()},handleShowZoomDialog(){u.value.open()},handleShowFlipDialog(){m.value.open()}}}}),D={class:"wrapper"},w={class:"btn-list"};function v(o,n,u,m,F,I){const l=r("AnimationDialog");return f(),h(g,null,[e("div",D,[e("ul",w,[e("li",null,[e("button",{onClick:n[0]||(n[0]=(...a)=>o.handleShowBounceDialog&&o.handleShowBounceDialog(...a))}," BounceIn / Out (Default) ")]),e("li",null,[e("button",{onClick:n[1]||(n[1]=(...a)=>o.handleShowFadeDialog&&o.handleShowFadeDialog(...a))}," FadeInLeft / FadeOutRight ")]),e("li",null,[e("button",{onClick:n[2]||(n[2]=(...a)=>o.handleShowZoomDialog&&o.handleShowZoomDialog(...a))}," ZoomIn / ZoomOut ")]),e("li",null,[e("button",{onClick:n[3]||(n[3]=(...a)=>o.handleShowFlipDialog&&o.handleShowFlipDialog(...a))}," FlipInX / FlipOutX ")])])]),i(l,{ref:"bounce","animation-mode":!0,title:"bounceIn / bounceOut"},null,512),i(l,{ref:"fade","animation-mode":!0,"animation-in":"fadeInLeft","animation-out":"fadeOutRight",title:"fadeInLeft / fadeOutRight"},null,512),i(l,{ref:"zoom","animation-mode":!0,"animation-in":"zoomIn","animation-out":"zoomOut",title:"zoomIn / zoomOut"},null,512),i(l,{ref:"flip","animation-mode":!0,"animation-in":"flipInX","animation-out":"flipOutX",title:"flipInX / flipOutX"},null,512)],64)}var _=s(c,[["render",v],["__scopeId","data-v-ca1af21a"]]);export{_ as default};
