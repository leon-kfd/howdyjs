const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-scroll</span>=<span class="hljs-string">&quot;scrollSetting1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;scroll-box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 20&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;num&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
        {{ text }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ScrollDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/scroll&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">scroll</span>: ScrollDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">scrollSetting1</span>: {
        <span class="hljs-attr">scrollBarWidth</span>: <span class="hljs-number">8</span>,
        <span class="hljs-attr">scrollBarOffsetX</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">scrollBarOffsetY</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">scrollBarThumbColor</span>: <span class="hljs-string">&#x27;rgb(225, 243, 216)&#x27;</span>,
        <span class="hljs-attr">scrollBarThumbHoverColor</span>: <span class="hljs-string">&#x27;rgb(200, 243, 199)&#x27;</span>,
        <span class="hljs-attr">thumbShow</span>: <span class="hljs-string">&#x27;hover&#x27;</span>
      },
      <span class="hljs-attr">text</span>: <span class="hljs-string">\`Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati sit asperiores dignissimos, 
            cupiditate fugiat, libero, doloremque veniam dolorem autem praesentium qui laudantium voluptas omnis. 
            Odit optio nulla quis perspiciatis!\`</span>
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: space-around;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
}
<span class="hljs-selector-class">.scroll-box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
  <span class="hljs-attribute">overflow-y</span>: auto;
  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">resize</span>: both;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0.8rem</span>;
  <span class="hljs-attribute">text-indent</span>: <span class="hljs-number">1.6rem</span>;
  <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1.5</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#667</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
