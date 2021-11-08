var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-size-observer</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span> @<span class="hljs-attr">sizechange</span>=<span class="hljs-string">&quot;handleSizeChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tips&quot;</span>&gt;</span>
        Delay: 1s, Immediate: false
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
        {{ width }} <span class="hljs-symbol">&amp;times;</span> {{ height }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref, defineComponent, Ref, ObjectDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { SizeObserverDirective, SizeObserverEvent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/size-observer&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">SizeObserver</span>: SizeObserverDirective <span class="hljs-keyword">as</span> ObjectDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> width: Ref&lt;string|number&gt; = ref(<span class="hljs-string">&#x27;?&#x27;</span>);
    <span class="hljs-keyword">const</span> height: Ref&lt;string|number&gt; = ref(<span class="hljs-string">&#x27;?&#x27;</span>);
    <span class="hljs-keyword">const</span> options = {
      <span class="hljs-attr">wait</span>: <span class="hljs-number">1000</span>,
      <span class="hljs-attr">immediate</span>: <span class="hljs-literal">false</span>
    };
    <span class="hljs-keyword">const</span> handleSizeChange = <span class="hljs-function">(<span class="hljs-params">e: SizeObserverEvent</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { contentRect } = e;
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">width</span>: _width, <span class="hljs-attr">height</span>: _height } = contentRect;
      width.value = ~~_width;
      height.value = ~~_height;
    };
    <span class="hljs-keyword">return</span> {
      width,height,options,handleSizeChange
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
}
<span class="hljs-selector-class">.box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
  <span class="hljs-attribute">position</span>: relative;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">28px</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
