var s='<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n      <span class="hljs-attr">v-to-control</span>=<span class="hljs-string">&quot;options&quot;</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;control&quot;</span>\n      @<span class="hljs-attr">todragend</span>=<span class="hljs-string">&quot;handleToDragEnd&quot;</span>\n      @<span class="hljs-attr">tocontrolend</span>=<span class="hljs-string">&quot;handleToControlEnd&quot;</span>\n    &gt;</span>\n      isLock: {{ isLock }}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isLock = !isLock&quot;</span>&gt;</span>\n      Toggle Lock\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ToControlDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-control&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">directives</span>: {\n    <span class="hljs-string">&#x27;to-control&#x27;</span>: ToControlDirective\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> arrowBase64 = <span class="hljs-string">&#x27;url(\\&#x27;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3Mjc4NzU0NTQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzNjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF8xdWhyOHJpMHBrNS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfMXVocjhyaTBwazUuc3ZnI2ljb25mb250IikgZm9ybWF0KCJzdmciKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTU0Ljc1MiAyMDIuNDEwNjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDAuMTI4IDUwLjEzMzMzM2wxNTUuMzA2NjY3IDE1Ni45NzA2NjcgMy41ODQgMy4xNTczMzNhMzQuNDMyIDM0LjQzMiAwIDAgMCA0NS43Mzg2NjYtMy4yODUzMzMgMzUuNjI2NjY3IDM1LjYyNjY2NyAwIDAgMC0wLjA4NTMzMy01MC4wOTA2NjdsLTE1NS4zMDY2NjctMTU3LjAxMzMzMy0zLjU0MTMzMy0zLjExNDY2N2EzNC41NiAzNC41NiAwIDAgMC00NS44MjQgMy4yNDI2Njd6IG0tMzk2LjIwMjY2NyAyNzQuNDMyQTM1LjI4NTMzMyAzNS4yODUzMzMgMCAwIDAgMTI4IDUxMmMwIDE5LjU0MTMzMyAxNS42NTg2NjcgMzUuNDEzMzMzIDM0LjkwMTMzMyAzNS40MTMzMzNoNjEzLjY3NDY2N2wtMjIxLjY5NiAyMjQuMDQyNjY3LTMuMTU3MzMzIDMuNjI2NjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDMuMDcyIDQ2LjUwNjY2NiAzNC41NiAzNC41NiAwIDAgMCA0OS4zMjI2NjYgMC4wODUzMzRsMjgxLjYtMjg0LjU4NjY2NyAzLjExNDY2Ny0zLjU4NGEzNS42NjkzMzMgMzUuNjY5MzMzIDAgMCAwIDQuNTIyNjY3LTM0Ljk4NjY2NyAzNC44NTg2NjcgMzQuODU4NjY3IDAgMCAwLTMyLjI1Ni0yMS45MzA2NjZIMTYyLjkwMTMzM2wtNC4zNTIgMC4yNTZ6IiBmaWxsPSIjMjAwRTMyIiBwLWlkPSI1MzYzIj48L3BhdGg+PC9zdmc+\\&#x27;)&#x27;</span>;\n    <span class="hljs-keyword">const</span> isLock = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> disabled = <span class="hljs-function">() =&gt;</span> isLock.value;\n    <span class="hljs-keyword">return</span> {\n      isLock,\n      <span class="hljs-attr">options</span>: {\n        <span class="hljs-attr">isAbsolute</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">positionMode</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">moveCursor</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">arrowOptions</span>: {\n          <span class="hljs-attr">padding</span>: <span class="hljs-number">0</span>,\n          <span class="hljs-attr">size</span>: <span class="hljs-number">20</span>,\n          <span class="hljs-attr">lineWidth</span>: <span class="hljs-number">0</span>,\n          <span class="hljs-attr">background</span>: <span class="hljs-string">`<span class="hljs-subst">${arrowBase64}</span> 0 0/20px 20px`</span>\n        },\n        disabled\n      },\n      <span class="hljs-function"><span class="hljs-title">handleToDragEnd</span>(<span class="hljs-params">e: any</span>)</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;todragend&#x27;</span>, e);\n      },\n      <span class="hljs-function"><span class="hljs-title">handleToControlEnd</span>(<span class="hljs-params">e: any</span>)</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;tocontrolend&#x27;</span>, e);\n      }\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.wrapper</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#262626</span>;\n  <span class="hljs-attribute">position</span>: relative;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#eaffe0</span>;\n}\n<span class="hljs-selector-class">.control</span> {\n  <span class="hljs-attribute">position</span>: absolute;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#dd9944</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">184</span>, <span class="hljs-number">202</span>, <span class="hljs-number">235</span>);\n  <span class="hljs-attribute">top</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">100px</span>);\n  <span class="hljs-attribute">left</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">100px</span>);\n  :deep {\n    .to-control-arrow {\n      transform: <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);\n      <span class="hljs-attribute">animation</span>: bounce <span class="hljs-number">2s</span> ease-in-out <span class="hljs-number">1s</span> infinite;\n      // 以下代码时使用伪类扩大箭头控制区域\n      &amp;:after {\n        content: <span class="hljs-string">&#x27;&#x27;</span>;\n        <span class="hljs-attribute">position</span>: absolute;\n        <span class="hljs-attribute">width</span>: <span class="hljs-number">200%</span>;\n        <span class="hljs-attribute">height</span>: <span class="hljs-number">200%</span>;\n        <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;\n        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;\n        <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);\n      }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-keyword">@keyframes</span> bounce {\n  <span class="hljs-selector-tag">from</span>,\n  <span class="hljs-number">20%</span>,\n  <span class="hljs-number">53%</span>,\n  <span class="hljs-number">80%</span>,\n  <span class="hljs-selector-tag">to</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.215</span>, <span class="hljs-number">0.61</span>, <span class="hljs-number">0.355</span>, <span class="hljs-number">1</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);\n  }\n\n  <span class="hljs-number">40%</span>,\n  <span class="hljs-number">43%</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">12px</span>, -<span class="hljs-number">12px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);\n  }\n\n  <span class="hljs-number">70%</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">6px</span>, -<span class="hljs-number">6px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);\n  }\n\n  <span class="hljs-number">90%</span> {\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">1px</span>, -<span class="hljs-number">1px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';export{s as default};
