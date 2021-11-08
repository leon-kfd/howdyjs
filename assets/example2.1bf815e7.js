var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;control&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;control&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
      Absolute\u6A21\u5F0F: \u63A7\u5236absolute\u62D6\u62FD\u5143\u7D20\u53EA\u5141\u8BB8\u5728\u5176\u7236\u5143\u7D20\u4E0B\u8FDB\u884C\u62D6\u62FD.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, onMounted, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> ToControl <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-control&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> control = ref();
    onMounted(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">new</span> ToControl({
        <span class="hljs-attr">el</span>: control.value,
        <span class="hljs-attr">options</span>: {
          <span class="hljs-attr">isAbsolute</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">arrowOptions</span>: {
            <span class="hljs-attr">size</span>: <span class="hljs-number">10</span>,
            <span class="hljs-attr">padding</span>: <span class="hljs-number">4</span>
          }
        }
      });
    });
    <span class="hljs-keyword">return</span> {
      control
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#262626</span>;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#eaffe0</span>;
}
<span class="hljs-selector-class">.control</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#dd9944</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">184</span>, <span class="hljs-number">202</span>, <span class="hljs-number">235</span>);
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8rem</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.1rem</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#262626</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
