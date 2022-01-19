var t=`<h1 id="tocontrol">ToControl</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/to-control" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/to-control?color=%2344cc88" alt="Size"></p>
<p><strong>Resize or drag to move a html dom.</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u5C06\u4E00\u4E2A\u5B9A\u4F4D\u4E3Aabsolute\u7684Dom\u8BBE\u7F6E\u6210\u53EF\u62D6\u62FD\u79FB\u52A8\u4E0E\u66F4\u6539\u5927\u5C0F</li>
<li>\u7EE7\u627F\u4E8E<a href="https://kongfandong.cn/howdy/to-drag/">@howdyjs/to-drag</a>\uFF0C\u4E3A\u5176\u6DFB\u52A0\u66F4\u6539\u5927\u5C0F\u529F\u80FD</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ToControl <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-control&#x27;</span>
<span class="hljs-keyword">new</span> ToDrag({
  el: <span class="hljs-string">&#x27;#to-control&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
});
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/to-control/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/to-control/dist/index.umd.js</a>\uFF08\u9700\u540C\u65F6\u5F15\u5165ToDrag\uFF09</li>
<li>UMD Name: <code>HowdyToControl</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/NWjyPBp" target="_blank">Click Here</a></li>
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
<td align="left">moveCursor</td>
<td align="left">\u662F\u5426\u663E\u793A\u79FB\u52A8\u5149\u6807(cursor: move)</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">forbidBodyScroll</td>
<td align="left">\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5904\u7406\u79FB\u52A8\u7AEF\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\uFF0C\u5F53\u524D\u4F7F\u7528\u8BBE\u7F6Ebody\u7684overflow\u5B9E\u73B0\uFF0C\u8BBE\u4E3Afalse\u65F6\u9700\u81EA\u884C\u5904\u7406\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left"><strong>isAbsolute</strong></td>
<td align="left">\u662F\u5426\u4E3AAbsolute\u6A21\u5F0F, \u53EF\u63A7\u5236absolute\u7684\u5143\u7D20\u5728\u5176\u7236\u5143\u7D20\u4E0B\u8FDB\u884C\u62D6\u62FD</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">parentSelector</td>
<td align="left">Absolute\u6A21\u5F0F\u4E0B\u5143\u7D20\u7684\u7236\u7EA7\u5BB9\u5668\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4F20\u5165\u5B57\u7B26\u4E32\u9009\u62E9\u5668</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">arrowOptions</td>
<td align="left">\u53F3\u4E0B\u89D2\u66F4\u6539\u5927\u5C0F\u7528\u7684\u7BAD\u5934\u914D\u7F6E\uFF0C\u914D\u7F6E\u53C2\u8003\u4E0B\u8868</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>positionMode</strong></td>
<td align="left">\u5B9A\u4F4D\u6A21\u5F0F,\u9ED8\u8BA4\u4F1A\u8BB0\u5F55top\u4E0Eleft\u503C,\u66F4\u6539\u6B64\u503C\u53EF\u4EE5\u5B9A\u4F4D\u65B9\u5411(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)</td>
<td align="left">Number</td>
<td align="left">1,2,3,4</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">\u662F\u5426\u7981\u7528\uFF0C\u9700\u4F20\u5165\u51FD\u6570\u8FD4\u56DEBoolean\uFF0C\u82E5\u9700\u540C\u65F6\u9690\u85CF\u7BAD\u5934ICON\u5728\u539F\u751F\u4F7F\u7528\u81EA\u884C\u8C03\u7528<code>updateArrow</code>\u65B9\u6CD5\uFF0C\u5728Vue\u6307\u4EE4\u65B9\u5F0F\u9700\u89E6\u53D1DOM\u66F4\u65B0</td>
<td align="left">Function: () =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="arrowoptions-objcet">arrowOptions (Objcet)</h4>
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
<td align="left">size</td>
<td align="left">\u7BAD\u5934\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3Apx</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">8</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">\u7BAD\u5934\u7EBF\u5BBD</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">\u7BAD\u5934\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#9a9a9a</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">\u8DDD\u79BB\u53F3\u4E0B\u89D2padding</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">background</td>
<td align="left">\u7BAD\u5934\u76D2\u5B50\u80CC\u666F\u5C5E\u6027\uFF0C\u4E00\u822C\u7528\u4E8E\u81EA\u5B9A\u4E49\u56FE\u6807</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">none</td>
</tr>
</tbody></table>
<blockquote>
<p>\u7BAD\u5934\u76D2\u5B50\u7684CSS\u7C7B\u540D\u4E3A<code>to-control-arrow</code>\uFF0C\u4E5F\u53EF\u81EA\u884C\u63A7\u5236\u6837\u5F0F</p>
</blockquote>
<h3 id="event">Event</h3>
<p>\u8BE5\u63D2\u4EF6\u7EE7\u627F\u81EA<a href="https://kongfandong.cn/howdy/to-drag/">@howdyjs/to-drag</a>\uFF0C\u5728\u62D6\u62FD\u66F4\u6539\u4F4D\u7F6E\u65F6\u53EF\u4EE5\u4F7F\u7528\u5176\u4E8B\u4EF6\u56DE\u8C03\u3002</p>
<p>\u540C\u65F6\u63D0\u4F9B\u4E86<code>tocontrolstart</code>, <code>tocontrolmove</code>, <code>tocontrolend</code>\u4F5C\u4E3A\u66F4\u6539\u5927\u5C0F\u540E\u7684\u4E8B\u4EF6\uFF0C\u53C2\u6570\u4E0Eto-drag\u4E8B\u4EF6\u53C2\u6570\u4E00\u81F4\u3002</p>
<blockquote>
<p>\u9700\u8981\u6CE8\u610Ftocontrolend\u4F1A\u540C\u65F6\u89E6\u53D1todragend.</p>
</blockquote>
<h3 id="method">Method</h3>
<ul>
<li><code>updateArrow</code>: \u53EF\u624B\u52A8\u66F4\u65B0\u7BAD\u5934DOM</li>
</ul>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ToControlDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-control&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(ToControlDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(ToControlDirective, someGlobalOptions)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-string">&#x27;to-control&#x27;</span>: ToControlDirective
  }
}
</code></pre>
<h3 id="\u6307\u4EE4value-objcet">\u6307\u4EE4Value (Objcet)</h3>
<p>\u53C2\u6570\u540C\u4E0A\u65B9\u7684\u914D\u7F6E<code>Options</code></p>
`;export{t as default};
