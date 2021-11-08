var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 9&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;num&quot;</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box-listitem&quot;</span>
      <span class="hljs-attr">:data-id</span>=<span class="hljs-string">&quot;num&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ num }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;[1,5,9].includes(num)&quot;</span>&gt;</span>, Hidden Open<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;[2,4,6].includes(num)&quot;</span>&gt;</span>, Disabled Edit<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">useLongPressInMobile</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">menuHiddenFn</span>: <span class="hljs-function">(<span class="hljs-params">_: any, el: HTMLElement</span>) =&gt;</span> !(el.getAttribute(<span class="hljs-string">&#x27;class&#x27;</span>) &amp;&amp; el.getAttribute(<span class="hljs-string">&#x27;class&#x27;</span>)?.includes(<span class="hljs-string">&#x27;box-listitem&#x27;</span>)),
        <span class="hljs-attr">menuList</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-function">(<span class="hljs-params">_: any, currentEl: HTMLElement</span>) =&gt;</span> {
              <span class="hljs-keyword">return</span> <span class="hljs-string">\`#<span class="hljs-subst">\${currentEl.getAttribute(<span class="hljs-string">&#x27;data-id&#x27;</span>)}</span>\`</span>;
            },
            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Open&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args),
            <span class="hljs-attr">hidden</span>: <span class="hljs-function">(<span class="hljs-params">_: any, currentEl: HTMLElement</span>) =&gt;</span> [<span class="hljs-string">&#x27;1&#x27;</span>, <span class="hljs-string">&#x27;5&#x27;</span>, <span class="hljs-string">&#x27;9&#x27;</span>].includes(currentEl.getAttribute(<span class="hljs-string">&#x27;data-id&#x27;</span>) <span class="hljs-keyword">as</span> string)
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7F16\u8F91&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Edit&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;edit&#x27;</span>, args),
            <span class="hljs-attr">disabled</span>: <span class="hljs-function">(<span class="hljs-params">_: any, currentEl: HTMLElement</span>) =&gt;</span> [<span class="hljs-string">&#x27;2&#x27;</span>, <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-string">&#x27;6&#x27;</span>].includes(currentEl.getAttribute(<span class="hljs-string">&#x27;data-id&#x27;</span>) <span class="hljs-keyword">as</span> string)
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5220\u9664&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Delete&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;delete&#x27;</span>, args)
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u91CD\u547D\u540D&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Rename&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;rename&#x27;</span>, args)
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
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
  <span class="hljs-attribute">justify-content</span>: space-around;
}
<span class="hljs-selector-class">.box-listitem</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">140px</span>;
  <span class="hljs-attribute">height</span>: auto;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#c2c2e0</span>;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
