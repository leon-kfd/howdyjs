const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;box1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResize&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
          Set this box resize left &amp; right
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;box3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
    <span class="hljs-keyword">const</span> box1 = ref();
    <span class="hljs-keyword">const</span> box3 = ref();
    <span class="hljs-keyword">return</span> {
      box1,
      box3,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">direction</span>: [<span class="hljs-string">&#x27;left&#x27;</span>, <span class="hljs-string">&#x27;right&#x27;</span>]
      },
      handleResize (e: ResizeEvent) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;resizeEvent&#x27;</span>, e);
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">if</span> (e.direction === <span class="hljs-string">&#x27;left&#x27;</span>) {
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${e.resizeWidthPercent}</span>%\`</span>;
          box1.value.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${e.moveOffsetPercent}</span>%\`</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (e.direction === <span class="hljs-string">&#x27;right&#x27;</span>) {
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${e.resizeWidthPercent}</span>%\`</span>;
          box3.value.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">100</span> - e.moveOffsetPercent}</span>%\`</span>;
        }
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.page</span> {
  <span class="hljs-attribute">overflow-x</span>: auto;
}
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#ccc</span>;
  <span class="hljs-attribute">position</span>: relative;
}
<span class="hljs-selector-class">.box1</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">33.33%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
}
<span class="hljs-selector-class">.box2</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">33.33%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
}
<span class="hljs-selector-class">.box3</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">33.33%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ddf1d5</span>;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
