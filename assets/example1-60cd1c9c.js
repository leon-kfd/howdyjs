const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">StandardTabs</span> <span class="hljs-attr">:tab-list</span>=<span class="hljs-string">&quot;tabList&quot;</span> <span class="hljs-attr">:tab-content-width</span>=<span class="hljs-string">&quot;tabContentWidth&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab1</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content tab1&quot;</span>&gt;</span>
          Tab1
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab2</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content tab2&quot;</span>&gt;</span>
          Tab2
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab3</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content tab3&quot;</span>&gt;</span>
          Tab3
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab4</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content tab4&quot;</span>&gt;</span>
          Tab4
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">StandardTabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, onMounted, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> StandardTabs <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/standard-tabs&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: {
    StandardTabs
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> tabContentWidth = ref(<span class="hljs-string">&#x27;100vw&#x27;</span>);
    <span class="hljs-keyword">const</span> container = ref();
    onMounted(<span class="hljs-function">() =&gt;</span> {
      tabContentWidth.value = container.value.offsetWidth;
    });
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">tabList</span>: [<span class="hljs-string">&#x27;测试1&#x27;</span>, <span class="hljs-string">&#x27;测试2&#x27;</span>, <span class="hljs-string">&#x27;测试3&#x27;</span>, <span class="hljs-string">&#x27;测试4&#x27;</span>],
      tabContentWidth,
      container
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.tab-content</span> {
  <span class="hljs-attribute">width</span>:<span class="hljs-number">100%</span> <span class="hljs-meta">!important</span>;
  <span class="hljs-attribute">height</span>:<span class="hljs-built_in">calc</span>(<span class="hljs-number">100vh</span> - <span class="hljs-number">120px</span>);
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">font-weight</span>: bold;
}
<span class="hljs-selector-class">.tab1</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">231</span>, <span class="hljs-number">202</span>, <span class="hljs-number">255</span>);
}
<span class="hljs-selector-class">.tab2</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">255</span>, <span class="hljs-number">227</span>, <span class="hljs-number">191</span>);
}
<span class="hljs-selector-class">.tab3</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">195</span>, <span class="hljs-number">248</span>, <span class="hljs-number">250</span>);
}
<span class="hljs-selector-class">.tab4</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">209</span>, <span class="hljs-number">236</span>, <span class="hljs-number">255</span>);
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.example-content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-meta">!important</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
