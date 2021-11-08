var t=`<h1 id="todrag">ToDrag</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/to-drag" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/to-drag?color=%2344cc88" alt="Size"></p>
<p><strong>\u8BBE\u7F6EDom\u53EF\u62D6\u52A8\u63D2\u4EF6</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u5C06fixed\u5143\u7D20\u8BBE\u4E3A\u53EF\u62D6\u52A8</li>
<li>\u63D0\u4F9B\u4E0D\u5438\u9644\u3001\u5DE6\u53F3\u5438\u9644\u3001\u56DB\u65B9\u5411\u5438\u9644\u4E09\u79CD\u6A21\u5F0F</li>
<li>\u540C\u65F6\u652F\u6301PC\u7AEF\u548C\u79FB\u52A8\u7AEF</li>
<li>\u5C01\u88C5\u4E86vue\u6307\u4EE4\u7684\u5F62\u5F0F</li>
<li>\u65B0\u589E<a href="https://kongfandong.cn/howdy/to-drag/example6">Absolute\u6A21\u5F0F</a>\uFF0C\u63A7\u5236absolute\u5143\u7D20\u5728\u5176\u7236\u5143\u7D20\u76D2\u5B50\u4E0B\u8FDB\u884C\u62D6\u62FD</li>
</ol>
<h2 id="\u539F\u751F\u4F7F\u7528">\u539F\u751F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ToDrag <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>
<span class="hljs-keyword">new</span> ToDrag({
  el: <span class="hljs-string">&#x27;#to-drag&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// \u53C2\u8003\u4E0B\u65B9\u8BF4\u660E</span>
  }
});
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/to-drag/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/to-drag/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdyToDrag</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/wvWyXNY" target="_blank">Click Here</a></li>
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
<td align="left"><strong>adsorb</strong></td>
<td align="left">\u662F\u5426\u5F00\u542F\u8FB9\u7F18\u5438\u9644\uFF0C\u9ED8\u8BA4\u4E3A\u4E0D\u5F00\u542F\uFF0C\u8BBE\u4E3A1\u5219\u4E3A\u5DE6\u53F3\u5438\u9644\uFF0C\u8BBE\u4E3A2\u4E3A\u56DB\u65B9\u5411\u5438\u9644</td>
<td align="left">Number</td>
<td align="left">0/1/2</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">adsorbOffset</td>
<td align="left">\u5F00\u542F\u5438\u9644\u540E\uFF0C\u5438\u9644\u8FB9\u7F18\u7684\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3Apx</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">transitionDuration</td>
<td align="left">\u5438\u9644\u52A8\u753B\u7684\u8FC7\u6E21\u6548\u679C\u7684\u6301\u7EED\u65F6\u95F4,\u5355\u4F4D\u4E3Ams</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">400</td>
</tr>
<tr>
<td align="left">transitionTimingFunction</td>
<td align="left">\u5438\u9644\u52A8\u753B\u7684\u8FC7\u6E21\u6548\u679C\u7684\u52A8\u753B\u66F2\u7EBF</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">ease-in-out</td>
</tr>
<tr>
<td align="left"><strong>forbidBodyScroll</strong></td>
<td align="left">\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5904\u7406\u79FB\u52A8\u7AEF\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\uFF0C\u5F53\u524D\u4F7F\u7528\u8BBE\u7F6Ebody\u7684overflow\u5B9E\u73B0\uFF0C\u8BBE\u4E3Afalse\u65F6\u9700\u81EA\u884C\u5904\u7406\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left"><strong>isAbsolute</strong></td>
<td align="left">\u662F\u5426\u4E3AAbsolute\u6A21\u5F0F,v1.5.0\u540E\u65B0\u589E\uFF0C\u53EF\u63A7\u5236absolute\u7684\u5143\u7D20\u5728\u5176\u7236\u5143\u7D20\u4E0B\u8FDB\u884C\u62D6\u62FD\uFF0C\u5F00\u542F\u8BE5\u6A21\u5F0F\u6682\u4E0D\u652F\u6301\u5438\u9644\u529F\u80FD</td>
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
<td align="left"><strong>positionMode</strong></td>
<td align="left">\u5B9A\u4F4D\u6A21\u5F0F,\u9ED8\u8BA4\u4F1A\u8BB0\u5F55top\u4E0Eleft\u503C,\u66F4\u6539\u6B64\u503C\u53EF\u4EE5\u5B9A\u4F4D\u65B9\u5411(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)</td>
<td align="left">Number</td>
<td align="left">1,2,3,4</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">\u662F\u5426\u7981\u7528\uFF0C\u9700\u4F20\u5165\u51FD\u6570\u8FD4\u56DEBoolean</td>
<td align="left">Function: () =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="event">Event</h3>
<ul>
<li><strong>todraginit</strong>\uFF1A\u521D\u59CB\u5316\u5B8C\u6210\u4E8B\u4EF6</li>
<li><strong>todragstart</strong>: \u62D6\u62FD\u5F00\u59CB\u4E8B\u4EF6</li>
<li><strong>todragmove</strong>\uFF1A\u62D6\u62FD\u79FB\u52A8\u4E8B\u4EF6</li>
<li><strong>todragend</strong>\uFF1A\u62D6\u62FD\u7ED3\u675F\u65F6\u95F4</li>
</ul>
<p>\u5B83\u4EEC\u90FD\u63D0\u4F9B\u4EE5\u4E0B\u7684\u56DE\u8C03\u53C2\u6570\uFF1A</p>
<ul>
<li>width\uFF1A\u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u5BBD</li>
<li>height\uFF1A\u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u5BBD</li>
<li>top\uFF1A\u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u4E0A\u504F\u79FB</li>
<li>left\uFF1A\u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u5DE6\u504F\u79FB</li>
<li>bottom: \u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u4E0B\u504F\u79FB</li>
<li>right\uFF1A\u5F53\u524D\u62D6\u62FD\u5143\u7D20\u7684\u53F3\u504F\u79FB</li>
<li>maxX\uFF1A\u5F53\u524D\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF08\u4E0D\u5305\u542B\u6EDA\u52A8\u6761\uFF09</li>
<li>maxY\uFF1A\u5F53\u524D\u5C4F\u5E55\u7684\u9AD8\u5EA6\uFF08\u4E0D\u5305\u542B\u6EDA\u52A8\u6761\uFF09</li>
</ul>
<p><em>\u4E00\u822C\u5728\u56DE\u8C03\u4E2D\u5C06\u4F4D\u7F6E\u4FE1\u606F\u8BB0\u5F55\u5230 localstorage\uFF0C\u5728\u4E0B\u4E00\u6B21\u521D\u59CB\u5316\u65F6\u586B\u5165\u7528\u6237\u4E0A\u4E00\u6B21\u6700\u540E\u79FB\u52A8\u7684\u4FE1\u606F\u3002</em></p>
<h2 id="\u4EE5vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528">\u4EE5Vue\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>
<span class="hljs-comment">// Vue3\u5168\u5C40\u5F15\u5165</span>
app.use(ToDragDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2\u5168\u5C40\u5F15\u5165(\u5BF9vue2\u505A\u4E86\u517C\u5BB9)</span>
Vue.use(ToDragDirective, someGlobalOptions)

<span class="hljs-comment">// \u7EC4\u4EF6\u5185\u5F15\u5165</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective
  }
}
</code></pre>
<h3 id="\u6307\u4EE4value-objcet">\u6307\u4EE4Value (Objcet)</h3>
<p>\u53C2\u6570\u540C\u4E0A\u65B9\u7684\u914D\u7F6E<code>Options</code></p>
`;export{t as default};
