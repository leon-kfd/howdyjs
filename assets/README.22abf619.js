var s=`<h1 id="size-observer">Size Observer</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/size-observer" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/size-observer?color=%2344cc88" alt="Size"></p>
<p><strong>\u76D1\u542C\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u63D2\u4EF6</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u5F53\u76D2\u5B50\u5927\u5C0F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1\u56DE\u8C03\u51FD\u6570</li>
<li>\u57FA\u4E8EJS\u8BD5\u9A8CAPI\uFF1A<a href="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API">ResizeObserver</a></li>
<li>\u57FA\u4E8E<a href="https://github.com/que-etc/resize-observer-polyfill">resize-observer-polyfill</a></li>
<li>\u5C01\u88C5\u4E86vue\u6307\u4EE4\u7684\u5F62\u5F0F</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> SizeObserver <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>
<span class="hljs-keyword">const</span> resizeObserve = <span class="hljs-keyword">new</span> SizeObserver({ 
  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#resize&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-attr">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
});
<span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#x27;#resize&#x27;</span>).addEventListener(<span class="hljs-string">&#x27;sizechange&#x27;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-comment">// \u76D2\u5B50\u89E6\u53D1\u56DE\u8C03\uFF0C\u56DE\u8C03\u53C2\u6570\u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  <span class="hljs-keyword">const</span> { contentRect } = e
})
resizeObserve.init();
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdySizeObserver</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/zYNOKpX" target="_blank">Click Here</a></li>
</ul>
<h3 id="options-objcet">Options (Objcet)</h3>
<table>
<thead>
<tr>
<th align="left">\u53C2\u6570</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u7C7B\u578B</th>
<th align="left">\u53EF\u9009\u503C</th>
<th align="left">\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td align="left">wait</td>
<td align="left">\u8282\u6D41\u5EF6\u8FDF(ms)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">immediate</td>
<td align="left">\u662F\u5426\u7ACB\u5373\u5148\u6267\u884C\u4E00\u904D\u56DE\u8C03</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
</tbody></table>
<h3 id="event">Event</h3>
<ul>
<li>\u521D\u59CB\u5316\u540E\uFF0C\u4F1A\u81EA\u52A8\u52A0\u5165\u4E00\u4E2A<code>sizechange</code>\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C, \u53EF\u4EE5\u5728\u56DE\u8C03\u4E2D\u83B7\u53D6\u5230\u76D2\u5B50\u5927\u5C0F\u53D8\u5316\u540E\u7684\u5C5E\u6027\u3002</li>
</ul>
<p>\u56DE\u8C03\u51FD\u6570\u4E2D\u63D0\u4F9B\u4EE5\u4E0B\u53C2\u6570</p>
<table>
<thead>
<tr>
<th align="left">\u53C2\u6570</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u7C7B\u578B</th>
</tr>
</thead>
<tbody><tr>
<td align="left">contentRect</td>
<td align="left">Dom\u5927\u5C0F\u6539\u53D8\u540E\u7684\u4F4D\u7F6E\u4FE1\u606F</td>
<td align="left">Object</td>
</tr>
</tbody></table>
<p>ContentRect Types</p>
<pre><code class="language-ts"><span class="hljs-keyword">interface</span> DOMRectReadOnly {
  <span class="hljs-keyword">readonly</span> x: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> y: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> width: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> height: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> top: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> right: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> bottom: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> left: <span class="hljs-built_in">number</span>;
}
</code></pre>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { SizeObserverDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(SizeObserverDirective)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(SizeObserverDirective)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">SizeObserver</span>: SizeObserverDirective
  }
}
</code></pre>
<p>\u5176\u4F59Vue\u6307\u4EE4\u4F7F\u7528\u65B9\u5F0F\u53EF\u53C2\u8003<code>Example</code>.</p>
`;export{s as default};
