var n=`<h1 id="img-zoom">Img Zoom</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/img-zoom" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/img-zoom?color=%2344cc88" alt="Size"></p>
<p><strong>\u56FE\u7247\u653E\u5927\u63D2\u4EF6</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u5B9E\u73B0\u70B9\u51FB\u56FE\u7247\u653E\u5927\u663E\u793A</li>
<li>\u652F\u6301\u8BBE\u7F6E\u540C\u7EC4\u56FE\u7247\uFF0C\u53EF\u5728\u653E\u5927\u7684\u6A21\u6001\u6846\u8FDB\u884C\u5207\u6362\u4E0A\u4E00\u5F20\u4E0B\u4E00\u5F20</li>
<li>\u56FE\u7247Loading\u52A0\u8F7D\u6548\u679C</li>
<li>\u53EF\u8BBE\u7F6E\u70B9\u51FB\u540E\u52A0\u8F7D\u663E\u793A\u7684\u662F\u53E6\u5916\u4E00\u5F20\u5927\u56FE</li>
<li>\u5C01\u88C5\u4E86vue\u6307\u4EE4\u7684\u5F62\u5F0F</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ImgZoom <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/img-zoom&#x27;</span>
<span class="hljs-keyword">new</span> ImgZoom({
  el: <span class="hljs-string">&#x27;#el&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
})
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdyImgZoom</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/XWNKyLe" target="_blank">Click here</a></li>
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
<td align="left">imgSrc</td>
<td align="left">\u653E\u5927\u540E\u7684\u56FE\u7247\u5730\u5740, \u9ED8\u8BA4\u4E0D\u4F20\u4F1A\u4F7F\u7528\u539Fimg\u7684src</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">title</td>
<td align="left">\u663E\u793A\u56FE\u7247\u6807\u9898</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">group</td>
<td align="left">\u542F\u7528\u56FE\u7247\u5206\u7EC4\u529F\u80FD\uFF0C\u4F20\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u540D</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">zoomCursor</td>
<td align="left">\u662F\u5426\u663E\u793A\u653E\u5927\u955Ccursor</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">showCloseBtn</td>
<td align="left">\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u5F00\u542F\u540E\u53EA\u80FD\u901A\u8FC7\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u5173\u95ED\u6A21\u6001\u6846</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">preventDefault</td>
<td align="left">\u662F\u5426\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4F8B\u5982\u7236\u5143\u7D20\u7684A\u6807\u7B7E\u8DF3\u8F6C</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">showLoading</td>
<td align="left">\u52A0\u8F7D\u56FE\u7247\u65F6\uFF0C\u662F\u5426\u663E\u793Aloading\u52A8\u753B</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">customLoading</td>
<td align="left">\u81EA\u5B9A\u4E49loading\u52A8\u753B\uFF0C\u51FD\u6570\u7C7B\u578B\uFF0C\u9700\u8981\u8FD4\u56DEHtmlElement</td>
<td align="left">Funtion</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ImgZoomDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(ImgZoomDirective)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(ImgZoomDirective)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">ImgZoom</span>: ImgZoomDirective
  }
}
</code></pre>
<p><strong>\u6307\u4EE4\u652F\u6301\u7B80\u5199</strong></p>
<pre><code class="language-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom:example</span>=<span class="hljs-string">&quot;http://a.com/b.png&quot;</span> /&gt;</span>
// \u7B49\u4EF7\u4E8E
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom</span>=<span class="hljs-string">&quot;</span></span></span><span class="hljs-template-variable">{group: &#x27;example&#x27;, imgSrc: &#x27;http://a.com/b.png&#x27;}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">&quot;</span> /&gt;</span></span>
</code></pre>
`;export{n as default};
