const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper x&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize:right</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeX&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
            Set this box -&gt; resize:right
          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;a&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper y&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize:bottom</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeY&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
            Set this box -&gt; resize:bottom
          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;b&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper x&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;c&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize:left</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeX1&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
            Set this box -&gt; resize:left
          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper y&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;d&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-resize:top</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box2&quot;</span> @<span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;handleResizeY1&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
            Set this box -&gt; resize:top
          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
    <span class="hljs-keyword">const</span> a = ref();
    <span class="hljs-keyword">const</span> b = ref();
    <span class="hljs-keyword">const</span> c = ref();
    <span class="hljs-keyword">const</span> d = ref();
    <span class="hljs-keyword">return</span> {
      a,b,c,d,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-comment">// use default</span>
      },
      handleResizeX (e: ResizeEvent) {
        <span class="hljs-built_in">console</span>.log(e);
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">let</span> resizeWidth = e.resizeWidth;
        <span class="hljs-keyword">if</span> (resizeWidth) {
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${resizeWidth}</span>px\`</span>;
          a.value.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">600</span> - resizeWidth}</span>px\`</span>;
        }
      },
      handleResizeY (e: ResizeEvent) {
        <span class="hljs-built_in">console</span>.log(e);
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">let</span> resizeHeight = e.resizeHeight;
        <span class="hljs-keyword">if</span> (resizeHeight) {
          el.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${resizeHeight}</span>px\`</span>;
          b.value.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">400</span> - resizeHeight}</span>px\`</span>;
        }
      },
      handleResizeX1 (e: ResizeEvent) {
        <span class="hljs-built_in">console</span>.log(e);
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">let</span> resizeWidth = e.resizeWidth;
        <span class="hljs-keyword">if</span> (resizeWidth) {
          el.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${resizeWidth}</span>px\`</span>;
          c.value.style.width = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">600</span> - resizeWidth}</span>px\`</span>;
        }
      },
      handleResizeY1 (e: ResizeEvent) {
        <span class="hljs-built_in">console</span>.log(e);
        <span class="hljs-keyword">let</span> el = e.target <span class="hljs-keyword">as</span> HTMLElement;
        <span class="hljs-keyword">let</span> resizeHeight = e.resizeHeight;
        <span class="hljs-keyword">if</span> (resizeHeight) {
          el.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${resizeHeight}</span>px\`</span>;
          d.value.style.height = <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-number">400</span> - resizeHeight}</span>px\`</span>;
        }
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.page</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vh</span> - <span class="hljs-number">60px</span>);
  <span class="hljs-attribute">overflow</span>: auto;
}
<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">700px</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: space-around;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
}
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">400px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#ccc</span>;
}
<span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-class">.box1</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
  <span class="hljs-attribute">position</span>: absolute;
}
<span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-class">.box2</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
  <span class="hljs-attribute">position</span>: absolute;
}
<span class="hljs-selector-class">.x</span> <span class="hljs-selector-class">.box1</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.x</span> <span class="hljs-selector-class">.box2</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.y</span> <span class="hljs-selector-class">.box1</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.y</span> <span class="hljs-selector-class">.box2</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
