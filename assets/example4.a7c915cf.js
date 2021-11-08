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
        <span class="hljs-attr">menuWrapperCss</span>: {
          <span class="hljs-attr">background</span>: <span class="hljs-string">&#x27;linear-gradient(45deg, #3439e6, #EC6EAD)&#x27;</span>,
          <span class="hljs-attr">boxShadow</span>: <span class="hljs-string">&#x27;0 0 10px #ccc&#x27;</span>
        },
        <span class="hljs-attr">menuItemCss</span>: {
          <span class="hljs-attr">labelColor</span>: <span class="hljs-string">&#x27;#fff&#x27;</span>,
          <span class="hljs-attr">tipsColor</span>: <span class="hljs-string">&#x27;#ccc&#x27;</span>,
          <span class="hljs-attr">arrowColor</span>: <span class="hljs-string">&#x27;#aaa&#x27;</span>,
          <span class="hljs-attr">disabledColor</span>: <span class="hljs-string">&#x27;#aaa&#x27;</span>
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
</code></pre>
`;export{s as default};
