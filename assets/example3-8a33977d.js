const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in imgList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
        <span class="hljs-attr">v-img-zoom</span>=<span class="hljs-string">&quot;{
          group: &#x27;example4&#x27;,
          zoomCursor: true,
          showCloseBtn: true,
          title: item.title,
          imgSrc: item.regularImg,
          customLoading
        }&quot;</span>
        <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;item.thumbImg&quot;</span>
        <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;image&quot;</span>
      &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 9&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;&#x27;fake&#x27;+num&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fake&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tips&quot;</span>&gt;</span>
    PHOTOS FROM UNSPLAH
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, onMounted, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ImgZoomDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/img-zoom&#x27;</span>;
<span class="hljs-keyword">import</span> { apiURL } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../global&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">ImgZoom</span>: ImgZoomDirective
  },
  setup () {
    <span class="hljs-keyword">const</span> imgList = ref([]);
    onMounted(<span class="hljs-keyword">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">\`<span class="hljs-subst">\${apiURL}</span>/photos?type=mirror\`</span>);
      <span class="hljs-keyword">const</span> { data, errCode } = <span class="hljs-keyword">await</span> res.json();
      <span class="hljs-keyword">if</span> (errCode === <span class="hljs-number">200</span>) {
        imgList.value = data.list.slice(<span class="hljs-number">0</span>, <span class="hljs-number">9</span>).map(<span class="hljs-function">(<span class="hljs-params">item: Record&lt;string,any&gt;, index:number</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">thumbImg</span>: item.urls.thumb,
            <span class="hljs-attr">regularImg</span>: item.urls.regular,
            <span class="hljs-attr">title</span>: <span class="hljs-string">\`#<span class="hljs-subst">\${index}</span> <span class="hljs-subst">\${item.description || <span class="hljs-string">&#x27;&#x27;</span>}</span>\`</span>
          };
        });
      }
    });
    <span class="hljs-keyword">return</span> {
      imgList,
      <span class="hljs-attr">customLoading</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> text = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#x27;div&#x27;</span>);
        text.innerText = <span class="hljs-string">&#x27;Loading...&#x27;</span>;
        text.style.cssText = <span class="hljs-string">&#x27;font-size: 20px;color: #c8c9d0;&#x27;</span>;
        <span class="hljs-keyword">return</span> text;
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.tips</span> {
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> <span class="hljs-number">0</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#778</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
}
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: space-around;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
}
<span class="hljs-selector-class">.box</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-number">#bdc3c7</span>, <span class="hljs-number">#2c3e50</span>);
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">cursor</span>: pointer;
}
<span class="hljs-selector-class">.fake</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">visibility</span>: hidden;
}
<span class="hljs-selector-class">.box</span> <span class="hljs-selector-tag">img</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
