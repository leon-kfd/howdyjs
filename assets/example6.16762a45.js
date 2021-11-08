var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;easy&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u7528\u6237\u540D<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u6027\u522B<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u804C\u4F4D<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u751F\u65E5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in list&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.id&quot;</span>
      <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;{
        params: item,
        ...options
      }&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ index + 1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.userName }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.sex }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.position }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.birth }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/mouse-menu&#x27;</span>;
<span class="hljs-keyword">import</span> { apiURL } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../global&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> list = ref([]);
    onMounted(<span class="hljs-keyword">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">\`<span class="hljs-subst">\${apiURL}</span>/page?page=1&amp;pageSize=30\`</span>);
      <span class="hljs-keyword">const</span> { data, errCode } = <span class="hljs-keyword">await</span> res.json();
      <span class="hljs-keyword">if</span> (errCode === <span class="hljs-number">200</span>) {
        list.value = data.items.map(<span class="hljs-function">(<span class="hljs-params">item: Record&lt;string, any&gt;</span>) =&gt;</span> {
          item.sex = item.sex === <span class="hljs-number">1</span> ? <span class="hljs-string">&#x27;\u7537&#x27;</span> : <span class="hljs-string">&#x27;\u5973&#x27;</span>;
          <span class="hljs-keyword">return</span> item;
        });
      }
    });
    <span class="hljs-keyword">return</span> {
      list,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">useLongPressInMobile</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">menuList</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-function">(<span class="hljs-params">params: any</span>) =&gt;</span> <span class="hljs-string">\`#<span class="hljs-subst">\${params.userName}</span>\`</span>,
            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7F16\u8F91&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Edit&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">row: any, ...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;edit&#x27;</span>, row, args),
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u505C\u7528&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Stop&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">row: any, ...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;stop&#x27;</span>, row, args),
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5220\u9664&#x27;</span>,
            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Delete&#x27;</span>,
            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">row: any, ...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;delete&#x27;</span>, row, args)
          }
        ]
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.easy</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">border-spacing</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#c0c2e0</span>;
  <span class="hljs-attribute">border-collapse</span>: collapse;
  <span class="hljs-attribute">empty-cells</span>: show;
  <span class="hljs-selector-tag">th</span>,<span class="hljs-selector-tag">td</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#262626</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">35px</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#c0c2e0</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span> <span class="hljs-number">10px</span>;
  }
  <span class="hljs-selector-tag">th</span> {
    <span class="hljs-attribute">font-weight</span>: bold;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">235</span>, <span class="hljs-number">245</span>, <span class="hljs-number">255</span>);
  }
  <span class="hljs-selector-tag">tr</span><span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">2</span>n - <span class="hljs-number">1</span>) {
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">245</span>, <span class="hljs-number">250</span>, <span class="hljs-number">255</span>);
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
