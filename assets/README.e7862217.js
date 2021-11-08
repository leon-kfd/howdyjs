var t=`<h1 id="resize">Resize</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/resize" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/resize?color=%2344cc88" alt="Size"></p>
<p><strong>\u62D6\u62FD\u66F4\u6539\u5143\u7D20\u5C3A\u5BF8\u63D2\u4EF6</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u4E3Abox\u52A0\u5165\u66F4\u6539\u5927\u5C0F\u529F\u80FD</li>
<li>\u76EE\u524D\u4EC5\u652F\u6301position:absolute\u7684\u5E03\u5C40\u6216\u8005\u7B80\u5355Flex\u5E03\u5C40</li>
<li>\u53EF\u914D\u7F6Eresize\u7ACB\u5373\u751F\u6548\u6216\u8005\u5EF6\u8FDF\u751F\u6548</li>
<li>\u5C01\u88C5\u4E86vue\u6307\u4EE4\u7684\u5F62\u5F0F</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> CustomResize <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-keyword">const</span> resize = <span class="hljs-keyword">new</span> CustomResize({
  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#resize&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-attr">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
})
resize.init()
<span class="hljs-built_in">document</span>.addEventListener(<span class="hljs-string">&#x27;resize&#x27;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-comment">// \u76D2\u5B50\u66F4\u6539\u540E\u7684\u5904\u7406\u903B\u8F91,\u9700\u81EA\u884C\u5904\u7406,\u53C2\u6570\u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  <span class="hljs-keyword">const</span> { direction, moveOffset, moveOffsetPercent } = e
})
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/resize/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/resize/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdyResize</code></li>
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
<td align="left">direction</td>
<td align="left">resize\u65B9\u5411\u6570\u7EC4</td>
<td align="left">Array</td>
<td align="left">left/right/top/bottom</td>
<td align="left">right</td>
</tr>
<tr>
<td align="left">immediate</td>
<td align="left">resize\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0Cfalse\u65F6\u4F1A\u5728\u70B9\u51FB\u65F6\u751F\u6210\u4E00\u6761\u865A\u7EBF\uFF0C\u6539\u5B8C\u5927\u5C0F\u540E\u677E\u5F00\u9F20\u6807\uFF0C\u76D2\u5B50\u5927\u5C0F\u624D\u4F1A\u53D8\u5316\uFF1B\u82E5\u4E3Atrue\u5219\u76D2\u5B50\u5927\u5C0F\u4F1A\u7ACB\u5373\u6539\u53D8</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">\u751F\u6210\u8FB9\u6846\u7EBF\u7684\u989C\u8272\uFF0C\u8FB9\u6846\u7EBF\u4F1A\u751F\u6210\u5728\u5143\u7D20\u76D2\u5B50\u9700\u8981resize\u65B9\u5411\u7684\u8FB9\u6846\u4E0A</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#aab</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">\u751F\u6210\u8FB9\u6846\u7EBF\u7684\u5BBD\u5EA6</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">lineHoverColor</td>
<td align="left">\u751F\u6210\u8FB9\u6846\u7EBFhover\u65F6\u7684\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#88f</td>
</tr>
<tr>
<td align="left">lineHoverWidth</td>
<td align="left">\u751F\u6210\u8FB9\u6846\u7EBFhover\u65F6\u7684\u5BBD\u5EA6</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">4</td>
</tr>
<tr>
<td align="left">tipLineColor</td>
<td align="left">\u751F\u6210\u63D0\u793A\u7EBF\u7684\u989C\u8272,immediate\u4E3Atrue\u65F6\u65E0\u6548</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#262626</td>
</tr>
<tr>
<td align="left">tipLineWidth</td>
<td align="left">\u751F\u6210\u63D0\u793A\u7EBF\u7684\u5BBD\u5EA6,immediate\u4E3Atrue\u65F6\u65E0\u6548</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">tipLineStyle</td>
<td align="left">\u751F\u6210\u63D0\u793A\u7EBF\u7684\u7EBF\u6761\u6837\u5F0F,immediate\u4E3Atrue\u65F6\u65E0\u6548</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">dashed</td>
</tr>
<tr>
<td align="left">zIndex</td>
<td align="left">\u751F\u6210\u7684\u7EBF\u6761\u7684zIndex</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">999</td>
</tr>
</tbody></table>
<blockquote>
<p><em>Width\u5C5E\u6027\u7684\u5355\u4F4D\u4E3Apx</em></p>
</blockquote>
<h3 id="event">Event</h3>
<ul>
<li>\u521D\u59CB\u5316\u540E\uFF0C\u4F1A\u81EA\u52A8\u52A0\u5165\u4E00\u4E2Aresize\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\u3002\u8BE5\u63D2\u4EF6\u5E76\u4E0D\u4F1A\u76F4\u63A5\u66F4\u6539\u76D2\u5B50\u7684\u5BBD\u5EA6\u9AD8\u5EA6\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u5728resize\u4E8B\u4EF6\u7684\u56DE\u8C03\u4E2D\u81EA\u884C\u5904\u7406\u66F4\u6539\u76D2\u5B50\u5BBD\u9AD8\u7684\u903B\u8F91\u3002</li>
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
<td align="left">direction</td>
<td align="left">\u672C\u6B21\u64CD\u4F5C\u7684\u65B9\u5411</td>
<td align="left">String</td>
</tr>
<tr>
<td align="left">moveOffset</td>
<td align="left">resize\u6539\u53D8\u7684\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3Apx</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">moveOffsetPercent</td>
<td align="left">resize\u6539\u53D8\u7684\u504F\u79FB\u91CF\u767E\u5206\u6BD4\uFF0C\u5355\u4F4D\u4E3A%</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">resizeWidth/resizeHeight</td>
<td align="left">\u66F4\u6539\u7684\u5BBD\u6216\u9AD8</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">resizeWidthPercent/resizeHeightPercent</td>
<td align="left">\u66F4\u6539\u7684\u5BBD\u6216\u9AD8\u7684\u767E\u5206\u6BD4</td>
<td align="left">Number</td>
</tr>
</tbody></table>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ResizeDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(ReizeDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(ReizeDirective, someGlobalOptions)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">resize</span>: ResizeDirective
  }
}
</code></pre>
<h3 id="\u6307\u4EE4arg">\u6307\u4EE4Arg</h3>
<ol>
<li>top\u3001left\u3001bottom\u3001right(\u9ED8\u8BA4),\u53EF\u4EE5\u8FDB\u884Cresize\u7684\u65B9\u5411</li>
<li>all\uFF0C\u5168\u90E8\u65B9\u5411\u53EFresize</li>
</ol>
<blockquote>
<p><em>v-resize:left | v-resize:top | v-resize:all ...</em></p>
</blockquote>
<h3 id="\u6307\u4EE4value-objcet">\u6307\u4EE4Value (Objcet)</h3>
<p>\u53C2\u6570\u540C\u4E0A\u65B9\u7684\u914D\u7F6E<code>Options</code></p>
<h3 id="\u6307\u4EE4event">\u6307\u4EE4Event</h3>
<ul>
<li>\u4F7F\u7528\u6307\u4EE4\u540E\uFF0C\u4F1A\u81EA\u52A8\u52A0\u5165\u4E00\u4E2Aresize\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\u3002\u672C\u6307\u4EE4\u5E76\u4E0D\u4F1A\u76F4\u63A5\u66F4\u6539\u76D2\u5B50\u7684\u5BBD\u5EA6\u9AD8\u5EA6\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u5728resize\u4E8B\u4EF6\u7684\u56DE\u8C03\u4E2D\u81EA\u884C\u5904\u7406\u66F4\u6539\u76D2\u5B50\u5BBD\u9AD8\u7684\u903B\u8F91,\u53EF\u76F4\u63A5\u4F7F\u7528\u201C@resize=&quot;someMethod&quot;\u201D\u64CD\u4F5C\u56DE\u8C03\u51FD\u6570\u3002\u56DE\u8C03\u53C2\u6570\u540C\u4E0A\u65B9<code>Event</code></li>
</ul>
`;export{t as default};
