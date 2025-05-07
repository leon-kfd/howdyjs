const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
      {{ !isMobile ? &#x27;Right click this box&#x27; : &#x27;Long press this box, but it don not support children menu&#x27; }}.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/mouse-menu&#x27;</span>;
<span class="hljs-keyword">import</span> type { CustomMouseMenuOptions} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/mouse-menu&#x27;</span>;
<span class="hljs-comment">// Setup语法下的指令写法, 以小写v开头</span>
<span class="hljs-keyword">const</span> vMouseMenu = MouseMenuDirective
<span class="hljs-comment">// 右键菜单配置, TS下导入CustomMouseMenuOptions定义类型</span>
<span class="hljs-keyword">const</span> options: CustomMouseMenuOptions = {
  <span class="hljs-attr">useLongPressInMobile</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">menuWidth</span>: <span class="hljs-number">180</span>,
  <span class="hljs-attr">menuItemCss</span>: {
    <span class="hljs-attr">arrowSize</span>: <span class="hljs-string">&#x27;8px&#x27;</span>
  },
  <span class="hljs-attr">menuList</span>: [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;刷新&#x27;</span>,
      <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Refresh&#x27;</span>,
      <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;refresh&#x27;</span>, args)
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;查看&#x27;</span>,
      <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Check&#x27;</span>,
      <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;check&#x27;</span>, args),
      <span class="hljs-attr">disabled</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>
    },
    {
      <span class="hljs-attr">line</span>: <span class="hljs-literal">true</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;操作&#x27;</span>,
      <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Operation&#x27;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;打开&#x27;</span>,
          <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Open&#x27;</span>,
          <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;编辑&#x27;</span>,
          <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Edit&#x27;</span>,
          <span class="hljs-attr">disabled</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>,
          <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;edit&#x27;</span>, args)
            <span class="hljs-comment">// 当返回false时，点击会后可阻止菜单关闭</span>
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
          }
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;删除&#x27;</span>,
          <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Delete&#x27;</span>,
          <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;delete&#x27;</span>, args)
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;重命名&#x27;</span>,
          <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Rename&#x27;</span>,
          <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;rename&#x27;</span>, args),
          <span class="hljs-attr">hidden</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>
        }
      ]
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;禁用菜单&#x27;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;测试&#x27;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;设置&#x27;</span>,
      <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Setting&#x27;</span>,
      <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;setting&#x27;</span>, args)
    }
  ]
}
<span class="hljs-keyword">const</span> isMobile = <span class="hljs-string">&#x27;ontouchstart&#x27;</span> <span class="hljs-keyword">in</span> <span class="hljs-built_in">window</span>
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
