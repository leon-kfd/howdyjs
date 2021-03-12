export default'<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\n    请拖拽屏幕上的紫色浮块\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;compass-box&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-wrapper&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{transform: `rotate(${rotate}deg)`}&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span>\n        <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;compass&quot;</span>\n        <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/images/compass.svg&quot;</span>\n        <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;compass&quot;</span>\n        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;compass&quot;</span>\n      &gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n    <span class="hljs-attr">v-to-drag</span>=<span class="hljs-string">&quot;options&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;move-box&quot;</span>\n    @<span class="hljs-attr">todraginit</span>=<span class="hljs-string">&quot;setCompassRotate&quot;</span>\n    @<span class="hljs-attr">todragstart</span>=<span class="hljs-string">&quot;handleToDragStart&quot;</span>\n    @<span class="hljs-attr">todragmove</span>=<span class="hljs-string">&quot;setCompassRotate&quot;</span>\n    @<span class="hljs-attr">todragend</span>=<span class="hljs-string">&quot;handleToDragEnd&quot;</span>\n  &gt;</span>\n    DRAG\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-drag&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">directives</span>: {\n    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> rotate = ref(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> compass = ref();\n    \n    <span class="hljs-keyword">return</span> {\n      rotate,\n      compass,\n      <span class="hljs-attr">options</span>: {\n        <span class="hljs-attr">immediateEvent</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">forbidBodyScroll</span>: <span class="hljs-literal">false</span> <span class="hljs-comment">// 自行处理滚动穿透</span>\n      },\n      setCompassRotate (e: any) {\n        <span class="hljs-keyword">const</span> { <span class="hljs-attr">top</span>: compassTop, <span class="hljs-attr">left</span>: compassLeft, <span class="hljs-attr">width</span>: compassWidth, <span class="hljs-attr">height</span>: compassHeight } = compass.value.getBoundingClientRect();\n        <span class="hljs-keyword">const</span> compassPoint = [compassLeft - compassWidth / <span class="hljs-number">2</span>, compassTop - compassHeight / <span class="hljs-number">2</span>];\n        <span class="hljs-keyword">const</span> { top, left, width, height } = e;\n        <span class="hljs-keyword">const</span> movePoint = [left - width / <span class="hljs-number">2</span>, top - height / <span class="hljs-number">2</span>];\n        <span class="hljs-keyword">const</span> deg = <span class="hljs-built_in">Math</span>.atan2(movePoint[<span class="hljs-number">1</span>] - compassPoint[<span class="hljs-number">1</span>], movePoint[<span class="hljs-number">0</span>] - compassPoint[<span class="hljs-number">0</span>]) / <span class="hljs-built_in">Math</span>.PI * <span class="hljs-number">180</span>;\n        rotate.value = deg + <span class="hljs-number">90</span>;\n      },\n      handleToDragStart () {\n        <span class="hljs-built_in">document</span>.body.style.overflow = <span class="hljs-string">&#x27;hidden&#x27;</span>;\n      },\n      handleToDragEnd () {\n        <span class="hljs-built_in">document</span>.body.style.overflow = <span class="hljs-string">&#x27;visible&#x27;</span>;\n      }\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&#x27;scss&#x27;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.move-box</span> {\n  <span class="hljs-attribute">position</span>: fixed;\n  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">right</span>: <span class="hljs-number">50px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-built_in">rgb</span>(<span class="hljs-number">174</span>, <span class="hljs-number">79</span>, <span class="hljs-number">252</span>), <span class="hljs-built_in">rgb</span>(<span class="hljs-number">137</span>, <span class="hljs-number">64</span>, <span class="hljs-number">253</span>));\n  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">43</span>, <span class="hljs-number">58</span>, <span class="hljs-number">73</span>);\n  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">999999</span>;\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">align-items</span>: center;\n  <span class="hljs-attribute">justify-content</span>: center;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;\n  <span class="hljs-attribute">font-weight</span>: bold;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;\n  user-select: none;\n}\n<span class="hljs-selector-class">.text</span> {\n  <span class="hljs-attribute">text-align</span>: center;\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8rem</span>;\n  <span class="hljs-attribute">font-weight</span>: bold;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.3rem</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#262626</span>;\n}\n<span class="hljs-selector-class">.compass-box</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: center;\n  <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">50px</span>;\n  <span class="hljs-selector-class">.compass</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">64px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">64px</span>;\n    <span class="hljs-attribute">filter</span>: <span class="hljs-built_in">drop-shadow</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">16px</span> <span class="hljs-number">#ccc</span>);\n    <span class="hljs-attribute">animation</span>: bounce <span class="hljs-number">2s</span> ease-in-out <span class="hljs-number">1s</span> infinite;\n  }\n}\n<span class="hljs-keyword">@keyframes</span> bounce {\n  <span class="hljs-selector-tag">from</span>,\n  <span class="hljs-number">20%</span>,\n  <span class="hljs-number">53%</span>,\n  <span class="hljs-number">80%</span>,\n  <span class="hljs-selector-tag">to</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.215</span>, <span class="hljs-number">0.61</span>, <span class="hljs-number">0.355</span>, <span class="hljs-number">1</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);\n  }\n\n  <span class="hljs-number">40%</span>,\n  <span class="hljs-number">43%</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">30px</span>, <span class="hljs-number">0</span>);\n  }\n\n  <span class="hljs-number">70%</span> {\n    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">15px</span>, <span class="hljs-number">0</span>);\n  }\n\n  <span class="hljs-number">90%</span> {\n    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">4px</span>, <span class="hljs-number">0</span>);\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';