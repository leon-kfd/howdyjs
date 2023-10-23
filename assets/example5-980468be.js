const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-wrapper&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
          Set this box default resize<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>immediate: true
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;resize&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;outer-box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize:all</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;inner-box&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeAll&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
          Set this box -&gt; resize:all<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>immediate: true
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref, defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ResizeEvent, ResizeDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/resize&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">resize</span>: ResizeDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resize = ref();
    <span class="hljs-keyword">return</span> {
      resize,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span>
      },
      handleResizeX (e:ResizeEvent) {
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${e.resizeWidthPercent}</span>%\`</span>;
        <span class="hljs-keyword">if</span> (e.resizeWidthPercent) {
          resize.value.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">100</span> - e.resizeWidthPercent}</span>%\`</span>;
        }
      },
      handleResizeAll (e: ResizeEvent) {
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">let</span> { direction } = e;
        <span class="hljs-keyword">if</span> (direction === <span class="hljs-string">&#x27;right&#x27;</span>) {
          <span class="hljs-keyword">let</span> resizeWidthPercent = e.resizeWidthPercent;
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${resizeWidthPercent}</span>%\`</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (direction === <span class="hljs-string">&#x27;bottom&#x27;</span>) {
          <span class="hljs-keyword">let</span> resizeHeightPercent = e.resizeHeightPercent;
          el.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${resizeHeightPercent}</span>%\`</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (direction === <span class="hljs-string">&#x27;left&#x27;</span>) {
          <span class="hljs-keyword">let</span> { moveOffsetPercent, resizeWidthPercent } = e;
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${resizeWidthPercent}</span>%\`</span>;
          el.style.left = <span class="hljs-string">\`<span class="hljs-subst">\${moveOffsetPercent}</span>%\`</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (direction === <span class="hljs-string">&#x27;top&#x27;</span>) {
          <span class="hljs-keyword">let</span> { moveOffsetPercent, resizeHeightPercent } = e;
          el.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${resizeHeightPercent}</span>%\`</span>;
          el.style.top = <span class="hljs-string">\`<span class="hljs-subst">\${moveOffsetPercent}</span>%\`</span>;
        }
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&#x27;scss&#x27;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.page</span> {
  <span class="hljs-attribute">overflow-x</span>: auto;
  <span class="hljs-attribute">overflow-y</span>: auto;
  <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vh</span> - <span class="hljs-number">80px</span>);
}
<span class="hljs-selector-class">.flex-wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">400px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#ccc</span>;
}
<span class="hljs-selector-class">.box1</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
}
<span class="hljs-selector-class">.box2</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
}
<span class="hljs-selector-class">.outer-box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">400px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#ccc</span>;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
}
<span class="hljs-selector-class">.inner-box</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">25%</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">25%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
