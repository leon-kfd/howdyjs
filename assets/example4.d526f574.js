var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
      {{ !isMobile ? &#x27;Right click this box&#x27; : &#x27;Long press this box, but it don not support children menu&#x27; }}.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">isMobile</span>: <span class="hljs-string">&#x27;ontouchstart&#x27;</span> <span class="hljs-keyword">in</span> <span class="hljs-built_in">window</span>,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">useLongPressInMobile</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">customClass</span>: <span class="hljs-string">&#x27;custom-howdy-menu&#x27;</span>, <span class="hljs-comment">// \u901A\u8FC7\u6CE8\u5165\u7C7B\u540D\u5B9E\u73B0\u66F4\u591A\u6837\u5F0F\u6548\u679C</span>
        <span class="hljs-attr">menuWrapperCss</span>: {
          <span class="hljs-attr">background</span>: <span class="hljs-string">&#x27;#ffffff&#x27;</span>,
          <span class="hljs-attr">borderRadius</span>: <span class="hljs-string">&#x27;6px&#x27;</span>,
          <span class="hljs-attr">padding</span>: <span class="hljs-string">&#x27;8px 6px&#x27;</span>,
          <span class="hljs-attr">boxShadow</span>: <span class="hljs-string">&#x27;0 2px 12px 0 rgba(0,0,0,.1)&#x27;</span>,
          <span class="hljs-attr">lineColor</span>: <span class="hljs-string">&#x27;#eee&#x27;</span>,
          <span class="hljs-attr">lineMargin</span>: <span class="hljs-string">&#x27;5px 10px&#x27;</span>,
        },
        <span class="hljs-attr">menuItemCss</span>: {
          <span class="hljs-attr">arrowSize</span>: <span class="hljs-string">&#x27;10px&#x27;</span>,
          <span class="hljs-attr">iconFontSize</span>: <span class="hljs-string">&#x27;18px&#x27;</span>,
          <span class="hljs-attr">labelColor</span>: <span class="hljs-string">&#x27;#5E6370&#x27;</span>,
          <span class="hljs-attr">iconColor</span>: <span class="hljs-string">&#x27;#5E6370&#x27;</span>,
        },
        <span class="hljs-attr">menuList</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5237\u65B0&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Refresh&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u67E5\u770B&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Check&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args),
            <span class="hljs-attr">disabled</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>
          },
          {
            <span class="hljs-attr">line</span>: <span class="hljs-literal">true</span>
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Operation&#x27;</span>,
            <span class="hljs-attr">children</span>: [
              {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span>,
                <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Open&#x27;</span>,
                <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)
              },
              {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7F16\u8F91&#x27;</span>,
                <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Edit&#x27;</span>,
                <span class="hljs-attr">disabled</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>,
                <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)
              },
              {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5220\u9664&#x27;</span>,
                <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Delete&#x27;</span>,
                <span class="hljs-attr">customClass</span>: <span class="hljs-string">&#x27;delete&#x27;</span>, <span class="hljs-comment">// \u81EA\u5B9A\u4E49\u6837\u5F0F</span>
                <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)
              },
              {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u91CD\u547D\u540D&#x27;</span>,
                <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Rename&#x27;</span>,
                <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args),
                <span class="hljs-attr">hidden</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>
              }
            ]
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u8BBE\u7F6E&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Setting&#x27;</span>
          }
        ]
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-built_in">min</span>(<span class="hljs-number">90vw</span>, <span class="hljs-number">500px</span>);
  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">
// \u8986\u76D6\u83DC\u5355CSS
.__menu__wrapper<span class="hljs-selector-class">.custom-howdy-menu</span> {
  .__menu__item,
  .__menu__sub__item{
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
    &amp;<span class="hljs-selector-pseudo">:not</span>(<span class="hljs-selector-class">.disabled</span>)<span class="hljs-selector-pseudo">:hover</span> {
      <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">31</span>, <span class="hljs-number">54</span>, <span class="hljs-number">128</span>) <span class="hljs-meta">!important</span>;
      <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">31</span>, <span class="hljs-number">54</span>, <span class="hljs-number">128</span>, <span class="hljs-number">0.1</span>) <span class="hljs-meta">!important</span>;
    }
    &amp;<span class="hljs-selector-class">.delete</span> {
      &amp;<span class="hljs-selector-pseudo">:hover</span> {
        <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">216</span>, <span class="hljs-number">94</span>, <span class="hljs-number">94</span>) <span class="hljs-meta">!important</span>;
        <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">216</span>, <span class="hljs-number">94</span>, <span class="hljs-number">94</span>, <span class="hljs-number">0.2</span>) <span class="hljs-meta">!important</span>;
      }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
