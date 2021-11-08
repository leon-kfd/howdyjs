var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
    \u8BF7\u62D6\u62FD\u5C4F\u5E55\u4E0A\u7684\u7D2B\u8272\u6D6E\u5757
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;compass-box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-wrapper&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{transform: \`rotate(\${rotate}deg)\`}&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;compass&quot;</span>
        <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/images/compass.svg&quot;</span>
        <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;compass&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;compass&quot;</span>
      &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">v-to-drag</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;move-box&quot;</span>
    @<span class="hljs-attr">todraginit</span>=<span class="hljs-string">&quot;setCompassRotate&quot;</span>
    @<span class="hljs-attr">todragstart</span>=<span class="hljs-string">&quot;handleToDragStart&quot;</span>
    @<span class="hljs-attr">todragmove</span>=<span class="hljs-string">&quot;setCompassRotate&quot;</span>
    @<span class="hljs-attr">todragend</span>=<span class="hljs-string">&quot;handleToDragEnd&quot;</span>
  &gt;</span>
    DRAG
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-drag&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> rotate = ref(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> compass = ref();
    
    <span class="hljs-keyword">return</span> {
      rotate,
      compass,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">immediateEvent</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">forbidBodyScroll</span>: <span class="hljs-literal">false</span> <span class="hljs-comment">// \u81EA\u884C\u5904\u7406\u6EDA\u52A8\u7A7F\u900F</span>
      },
      setCompassRotate (e: any) {
        <span class="hljs-keyword">const</span> { <span class="hljs-attr">top</span>: compassTop, <span class="hljs-attr">left</span>: compassLeft, <span class="hljs-attr">width</span>: compassWidth, <span class="hljs-attr">height</span>: compassHeight } = compass.value.getBoundingClientRect();
        <span class="hljs-keyword">const</span> compassPoint = [compassLeft - compassWidth / <span class="hljs-number">2</span>, compassTop - compassHeight / <span class="hljs-number">2</span>];
        <span class="hljs-keyword">const</span> { top, left, width, height } = e;
        <span class="hljs-keyword">const</span> movePoint = [left - width / <span class="hljs-number">2</span>, top - height / <span class="hljs-number">2</span>];
        <span class="hljs-keyword">const</span> deg = <span class="hljs-built_in">Math</span>.atan2(movePoint[<span class="hljs-number">1</span>] - compassPoint[<span class="hljs-number">1</span>], movePoint[<span class="hljs-number">0</span>] - compassPoint[<span class="hljs-number">0</span>]) / <span class="hljs-built_in">Math</span>.PI * <span class="hljs-number">180</span>;
        rotate.value = deg + <span class="hljs-number">90</span>;
      },
      handleToDragStart () {
        <span class="hljs-built_in">document</span>.body.style.overflow = <span class="hljs-string">&#x27;hidden&#x27;</span>;
      },
      handleToDragEnd () {
        <span class="hljs-built_in">document</span>.body.style.overflow = <span class="hljs-string">&#x27;visible&#x27;</span>;
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&#x27;scss&#x27;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.move-box</span> {
  <span class="hljs-attribute">position</span>: fixed;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">50px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-built_in">rgb</span>(<span class="hljs-number">174</span>, <span class="hljs-number">79</span>, <span class="hljs-number">252</span>), <span class="hljs-built_in">rgb</span>(<span class="hljs-number">137</span>, <span class="hljs-number">64</span>, <span class="hljs-number">253</span>));
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">43</span>, <span class="hljs-number">58</span>, <span class="hljs-number">73</span>);
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">999999</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  user-select: none;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8rem</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.3rem</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#262626</span>;
}
<span class="hljs-selector-class">.compass-box</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">50px</span>;
  <span class="hljs-selector-class">.compass</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">64px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">64px</span>;
    <span class="hljs-attribute">filter</span>: <span class="hljs-built_in">drop-shadow</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">16px</span> <span class="hljs-number">#ccc</span>);
    <span class="hljs-attribute">animation</span>: bounce <span class="hljs-number">2s</span> ease-in-out <span class="hljs-number">1s</span> infinite;
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-keyword">@keyframes</span> bounce {
  <span class="hljs-selector-tag">from</span>,
  <span class="hljs-number">20%</span>,
  <span class="hljs-number">53%</span>,
  <span class="hljs-number">80%</span>,
  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.215</span>, <span class="hljs-number">0.61</span>, <span class="hljs-number">0.355</span>, <span class="hljs-number">1</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-number">40%</span>,
  <span class="hljs-number">43%</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">30px</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-number">70%</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">15px</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-number">90%</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, -<span class="hljs-number">4px</span>, <span class="hljs-number">0</span>);
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
