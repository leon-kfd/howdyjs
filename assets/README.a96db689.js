var l=`<h1 id="scroll">Scroll</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/scroll" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/scroll?color=%2344cc88" alt="Size"></p>
<p><strong>\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761\u63D2\u4EF6</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u901A\u8FC7\u914D\u7F6E\u9879\u751F\u6210\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u6EDA\u52A8\u6761</li>
<li>\u652F\u6301\u62D6\u62FD\u6EDA\u52A8</li>
<li>\u57FA\u672C\u4E0D\u9700\u8981\u66F4\u6539DOM\u5E03\u5C40\uFF0C\u53EA\u9700\u5728overflow:scroll\u7684\u5143\u7D20\u4E0A\u589E\u52A0\u8BE5\u6307\u4EE4\u5373\u53EF</li>
<li>\u79FB\u52A8\u7AEF\u4E2D\u65E0\u6548\uFF0C\u4F1A\u81EA\u52A8\u6539\u56DE\u9ED8\u8BA4\u7684\u6EDA\u52A8</li>
<li>\u5C01\u88C5\u4E86vue\u6307\u4EE4\u7684\u5F62\u5F0F</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> CustomScrollBar <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/scroll&#x27;</span>
const scroll = <span class="hljs-keyword">new</span> CustomScrollBar({
  el: <span class="hljs-string">&#x27;#scroll&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
});
scroll.init();
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/scroll/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/scroll/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdyScroll</code></li>
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
<td align="left">\u6EDA\u52A8\u6761\u65B9\u5411</td>
<td align="left">String</td>
<td align="left">x/y/all</td>
<td align="left">y</td>
</tr>
<tr>
<td align="left">scrollBarWidth</td>
<td align="left">\u6EDA\u52A8\u6761\u5BBD\u5EA6\uFF08\u8F68\u9053\uFF09</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">6</td>
</tr>
<tr>
<td align="left">scrollBarOffsetX</td>
<td align="left">\u6EDA\u52A8\u6761\u6C34\u5E73\u504F\u79FB\uFF08padding)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">scrollBarOffsetY</td>
<td align="left">\u6EDA\u52A8\u6761\u5782\u76F4\u504F\u79FB\uFF08padding)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">scrollBarThumbColor</td>
<td align="left">\u6EDA\u52A8\u6761\u6ED1\u5757\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#aab</td>
</tr>
<tr>
<td align="left">scrollBarThumbBorderRadius</td>
<td align="left">\u6EDA\u52A8\u6761\u6ED1\u5757\u662F\u5426\u9700\u8981\u5706\u89D2</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">scrollBarThumbBorderRadius</td>
<td align="left">\u6EDA\u52A8\u6761\u8F68\u9053\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">transparent</td>
</tr>
<tr>
<td align="left">scrollBarThumbHoverColor</td>
<td align="left">\u6EDA\u52A8\u6761\u6ED1\u5757Hover\u65F6\u7684\u989C\u8272\uFF08\u9ED8\u8BA4\u4E0D\u8BBE\u7F6E\uFF09</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">enableTrackClickScroll</td>
<td align="left">\u662F\u5426\u5141\u8BB8\u70B9\u51FB\u8F68\u9053\u8FDB\u884C\u6EDA\u52A8</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">scrollSpeed</td>
<td align="left">\u70B9\u51FB\u8F68\u9053\u65F6\u7684\u6EDA\u52A8\u901F\u5EA6\uFF08\u6EDA\u52A8\u6548\u679C\u4F7F\u7528requestAnimationFrame\u5B9E\u73B0\uFF0C\u8BE5\u503C\u8868\u793A\u6BCF\u5E27\u7684\u4F4D\u79FB\u91CF\uFF0C\u5355\u4F4DPX\uFF09</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">20</td>
</tr>
<tr>
<td align="left">dragScroll</td>
<td align="left">\u662F\u5426\u5F00\u542F\u62D6\u62FD\u6EDA\u52A8</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">thumbShow</td>
<td align="left">\u6EDA\u52A8\u6761\u6ED1\u5757\u663E\u793A\u65B9\u5F0F\uFF0C\u53EF\u9009\u4E00\u76F4\u663E\u793A\u4E0EHover\u663E\u793A</td>
<td align="left">String</td>
<td align="left">always/hover</td>
<td align="left">always</td>
</tr>
</tbody></table>
<blockquote>
<p><em>\u957F\u5EA6\u5C5E\u6027\u7684\u5355\u4F4D\u4E3Apx</em></p>
</blockquote>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ScrollDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/scroll&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(ScrollDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(ScrollDirective, someGlobalOptions)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">scroll</span>: ScrollDirective
  }
}
</code></pre>
<h3 id="\u6307\u4EE4arg">\u6307\u4EE4Arg</h3>
<ol>
<li>y(\u9ED8\u8BA4), \u5F00\u542F\u5782\u76F4\u6EDA\u52A8</li>
<li>x, \u5F00\u542F\u6C34\u5E73\u6EDA\u52A8</li>
<li>all, \u540C\u65F6\u5F00\u542F\u5782\u76F4\u3001\u6C34\u5E73\u6EDA\u52A8</li>
</ol>
<blockquote>
<p><em>v-scroll:y | v-scroll:x | v-scroll:all</em></p>
</blockquote>
<h3 id="\u6307\u4EE4value-objcet">\u6307\u4EE4Value (Objcet)</h3>
<p>\u53C2\u6570\u540C\u4E0A\u65B9\u7684\u914D\u7F6E<code>Options</code></p>
`;export{l as default};
