var t=`<h1 id="standard-tabs">Standard Tabs</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/standard-tabs" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/standard-tabs?color=%2344cc88" alt="Size"></p>
<p><strong>VUE3\u7EC4\u4EF6-StandardTabs</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u9002\u7528\u4E8E\u624B\u673A\u7AEF\u7684\u6ED1\u52A8Tabs\u7EC4\u4EF6</li>
<li>\u96C6\u6210\u9876\u90E8Tabs\u5207\u6362\u7684\u4EA4\u4E92\u52A8\u753B</li>
<li>\u5907\u6CE8\uFF1A\u7531\u4E8E\u4EC5\u4F7F\u7528\u4E86touch\u76F8\u5173\u4E8B\u4EF6\u5B9E\u73B0\uFF0C\u6240\u4EE5\u8BE5\u7EC4\u4EF6\u4E0D\u9002\u7528\u4E8EPC\u7AEF</li>
</ol>
<h2 id="\u914D\u7F6E">\u914D\u7F6E</h2>
<h3 id="1-slot-\u63D2\u69FD">1 Slot \u63D2\u69FD</h3>
<p>\u63D2\u69FD\u540D\u4E0E\u6BCF\u4E2A\u6807\u7B7E\u9875\u81EA\u52A8\u5173\u8054,\u4F7F\u7528tab + \u6807\u7B7E\u987A\u5E8F\u5F62\u6210slot\u540D</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">standard-tabs</span> <span class="hljs-attr">:tabList</span>=<span class="hljs-string">&quot;[&#x27;tab1&#x27;, &#x27;tab2&#x27;, &#x27;tab3&#x27;]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab1</span>&gt;</span>Tab1<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab2</span>&gt;</span>Tab2<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab3</span>&gt;</span>Tab3<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">standard-tabs</span>&gt;</span>
...
</code></pre>
<h3 id="2-attrs-\u5C5E\u6027">2 Attrs \u5C5E\u6027</h3>
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
<td align="left">tabWidth</td>
<td align="left">\u6807\u7B7E\u680F\u6807\u7B7E\u5BBD\u5EA6</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">80</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">\u6807\u7B7E\u680F\u6FC0\u6D3B\u7EBF\u6761\u5BBD\u5EA6</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">30</td>
</tr>
<tr>
<td align="left">tabContentWidth</td>
<td align="left">\u6807\u7B7E\u9875\u5BBD\u5EA6,Number\u65F6\u4E3A\u5355\u4F4D\u4E3Apx,String\u65F6\u53EF\u4F20vw\u5355\u4F4D</td>
<td align="left">Number/String</td>
<td align="left">-</td>
<td align="left">100vw</td>
</tr>
<tr>
<td align="left">tabContentMinHeight</td>
<td align="left">\u6807\u7B7E\u9875\u6700\u5C0F\u9AD8\u5EA6\uFF08\u8BBE\u7F6E\u9632\u6B62\u51FA\u73B0\u65E0\u5143\u7D20\u8FDB\u884C\u6ED1\u52A8\uFF09</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">100px</td>
</tr>
<tr>
<td align="left"><strong>tabList</strong></td>
<td align="left">\u6807\u7B7E\u6570\u7EC4</td>
<td align="left">Array[String]</td>
<td align="left">Require</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">transitionDuration</td>
<td align="left">\u52A8\u753B\u6267\u884C\u65F6\u95F4(\u5355\u4F4Dms)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">400</td>
</tr>
<tr>
<td align="left">mainTransitionTimingFunction</td>
<td align="left">\u6807\u7B7E\u9875\u5185\u5BB9\u4E0E\u6807\u7B7E\u4E0B\u5212\u7EBF\u7684\u52A8\u753B\u66F2\u7EBF</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.075, 0.82, 0.165, 1)</td>
</tr>
<tr>
<td align="left">tabTransitionTimingFunction</td>
<td align="left">\u6807\u7B7E\u7684\u52A8\u753B\u66F2\u7EBF(\u4EE5\u9632\u65E0\u6CD5\u4EA7\u751F\u89C6\u89C9\u5DEE,\u4E0D\u5EFA\u8BAE\u4E0E\u4E0A\u65B9\u8BBE\u7F6E\u540C\u6837\u7684\u52A8\u753B\u66F2\u7EBF)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.075, 0.82, 0.165, 1)</td>
</tr>
<tr>
<td align="left">tabCustomStyle</td>
<td align="left">\u6807\u7B7E\u680F\u7684\u81EA\u5B9A\u4E49Style,\u53EA\u652F\u6301\u4F20\u5165\u5B57\u7B26\u4E32\u4E14\u4E0D\u80FD\u8986\u76D6width/transform/transition\u5C5E\u6027</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="3-methods-\u65B9\u6CD5">3 Methods \u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th align="left">\u65B9\u6CD5\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">setActive</td>
<td align="left">\u8DF3\u8F6C\u6807\u7B7E\u9875</td>
<td align="left">index:\u8DF3\u8F6C\u6807\u7B7E\u7684index</td>
</tr>
</tbody></table>
<h3 id="4-events-\u4E8B\u4EF6">4 Events \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th align="left">\u4E8B\u4EF6\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">contentTouchStart</td>
<td align="left">\u6807\u7B7E\u9875touchStart</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">contentTouchMove</td>
<td align="left">\u6807\u7B7E\u9875touchMove</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">contentTouchEnd</td>
<td align="left">\u6807\u7B7E\u9875touchEnd</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">tabActiveChange</td>
<td align="left">\u6807\u7B7E\u9875\u5207\u6362\u4E8B\u4EF6</td>
<td align="left">index:\u8DF3\u8F6C\u6807\u7B7E\u7684index</td>
</tr>
</tbody></table>
`;export{t as default};
