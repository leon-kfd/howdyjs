var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">StandardTabs</span> <span class="hljs-attr">:tab-list</span>=<span class="hljs-string">&quot;tabList.map(item =&gt; item.name)&quot;</span> <span class="hljs-attr">:tab-content-width</span>=<span class="hljs-string">&quot;tabContentWidth&quot;</span> <span class="hljs-attr">tab-custom-style</span>=<span class="hljs-string">&quot;position:fixed&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in tabList&quot;</span> #[<span class="hljs-attr">item.slotName</span>] <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.name&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;\`tab-content \${item.slotName}\`&quot;</span>&gt;</span>
          {{ item.name }}
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
    <span class="hljs-keyword">const</span> tabList = <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">9</span>}, <span class="hljs-function">(<span class="hljs-params">_, index: number</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">name</span>: <span class="hljs-string">\`\u6D4B\u8BD5<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>,
        <span class="hljs-attr">slotName</span>: <span class="hljs-string">\`tab<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>
      };
    });
    <span class="hljs-keyword">const</span> container = ref();
    onMounted(<span class="hljs-function">() =&gt;</span> {
      tabContentWidth.value = container.value.offsetWidth;
    });
    <span class="hljs-keyword">return</span> {
      tabContentWidth,
      tabList,
      container
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.tab-content</span> {
  <span class="hljs-attribute">width</span>:<span class="hljs-number">100%</span> <span class="hljs-meta">!important</span>;
  <span class="hljs-attribute">height</span>:<span class="hljs-number">300vh</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">30vh</span>;
}
<span class="hljs-selector-class">.tab1</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">202</span>, <span class="hljs-number">255</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">202</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab2</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">227</span>, <span class="hljs-number">191</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">227</span>, <span class="hljs-number">191</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab3</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">195</span>, <span class="hljs-number">248</span>, <span class="hljs-number">250</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">195</span>, <span class="hljs-number">248</span>, <span class="hljs-number">250</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab4</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">209</span>, <span class="hljs-number">236</span>, <span class="hljs-number">255</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">209</span>, <span class="hljs-number">236</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab5</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">180</span>, <span class="hljs-number">180</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">180</span>, <span class="hljs-number">180</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab6</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">255</span>, <span class="hljs-number">206</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">255</span>, <span class="hljs-number">206</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab7</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">197</span>, <span class="hljs-number">216</span>, <span class="hljs-number">252</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">197</span>, <span class="hljs-number">216</span>, <span class="hljs-number">252</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab8</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">250</span>, <span class="hljs-number">221</span>, <span class="hljs-number">185</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">250</span>, <span class="hljs-number">221</span>, <span class="hljs-number">185</span>, <span class="hljs-number">0</span>));
}
<span class="hljs-selector-class">.tab9</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">200</span>, <span class="hljs-number">229</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">200</span>, <span class="hljs-number">229</span>, <span class="hljs-number">0</span>));
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.example-content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-meta">!important</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
