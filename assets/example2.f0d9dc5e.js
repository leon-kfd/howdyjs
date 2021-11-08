var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
    \u8BF7\u62D6\u62FD\u5C4F\u5E55\u4E0A\u7684\u7D2B\u8272\u6D6E\u5757
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-to-drag</span>=<span class="hljs-string">&quot;{ adsorb: 1, positionMode: 3 }&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;move-box&quot;</span>&gt;</span>
    DRAG
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-drag&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
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
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
