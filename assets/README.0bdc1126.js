var n=`<h1 id="mouse-menu">Mouse Menu</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/mouse-menu" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/mouse-menu?color=%2344cc88" alt="Size"></p>
<p><strong>\u81EA\u5B9A\u4E49\u83DC\u5355-VUE3\u7EC4\u4EF6/\u6307\u4EE4</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u9ED8\u8BA4\u5C01\u88C5\u6210Vue\u6307\u4EE4</li>
<li>\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F</li>
<li>\u652F\u6301\u5B50\u83DC\u5355</li>
<li>\u652F\u6301\u52A0\u5165\u83DC\u5355\u56FE\u6807</li>
<li><em>\u652F\u6301\u79FB\u52A8\u7AEF\u957F\u6309\u5524\u51FA\u83DC\u5355</em>(v1.7.0\u540E\u652F\u6301)</li>
</ol>
<h2 id="\u914D\u7F6E">\u914D\u7F6E</h2>
<h3 id="props\u6307\u4EE4value-object">Props/\u6307\u4EE4Value (Object)</h3>
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
<td align="left">el</td>
<td align="left">\u89E6\u53D1\u7684Dom\u5143\u7D20\uFF08\u4EE5Vue\u7EC4\u4EF6\u65B9\u5F0F\u6216CustomMenu\u51FD\u6570\u65B9\u5F0F\u4F7F\u7528\u65F6\u5FC5\u987B\u4F20\u5165\uFF09</td>
<td align="left">-</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">menuWidth</td>
<td align="left">\u83DC\u5355\u5BBD\u5EA6</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">200</td>
</tr>
<tr>
<td align="left">menuList</td>
<td align="left">\u751F\u6210\u83DC\u5355\u9879\u7684\u6570\u7EC4\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u8003\u4E0B\u8868</td>
<td align="left">Array</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">hasIcon</td>
<td align="left">\u662F\u5426\u6709\u83DC\u5355\u56FE\u6807</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">iconType</td>
<td align="left">\u83DC\u5355\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u652F\u6301\u5B57\u4F53\u56FE\u6807\u3001SVG\u56FE\u6807\u3001VNode\u7EC4\u4EF6</td>
<td align="left">&#39;font-icon&#39;, &#39;svg-icon&#39;, &#39;vnode-icon&#39;</td>
<td align="left">-</td>
<td align="left">font-icon</td>
</tr>
<tr>
<td align="left">menuWrapperCss</td>
<td align="left">\u83DC\u5355\u5BB9\u5668\u7684CSS\u8BBE\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u8003\u4E0B\u8868</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">menuItemCss</td>
<td align="left">\u83DC\u5355\u9879\u7684CSS\u8BBE\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u8003\u4E0B\u8868</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">params</td>
<td align="left">\u4F20\u7ED9\u5904\u7406\u51FD\u6570\u7684\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u4F1A\u6CE8\u5165\u5230\u4E0B\u65B9\u5404\u56DE\u8C03\u51FD\u6570\u7684\u9996\u4E2A\u53C2\u6570\u4E2D</td>
<td align="left">Any</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">appendToBody</td>
<td align="left">\u5BB9\u5668\u662F\u5426\u6302\u8F7D\u5230body\u4E0A</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">\u662F\u5426\u7981\u7528\u6574\u4E2A\u83DC\u5355\uFF0C\u63A5\u6536\u4E00\u4E2A\u51FD\u6570</td>
<td align="left">(params: any) =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">useLongPressInMobile</td>
<td align="left">\u79FB\u52A8\u7AEF\u4E0B\u517C\u5BB9\u4F7F\u7528\u957F\u6309\u4E8B\u4EF6\u5524\u51FA\u83DC\u5355, \u4F46\u957F\u6309\u6A21\u5F0F\u4E0D\u652F\u6301\u591A\u7EA7\u83DC\u5355\uFF08\u4EC5\u652F\u6301\u6307\u4EE4\u65B9\u5F0F\uFF09</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">longPressDuration</td>
<td align="left">\u957F\u6309\u4E8B\u4EF6\u9700\u6301\u7EED\u65F6\u95F4,\u5355\u4F4Dms</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">500</td>
</tr>
<tr>
<td align="left">injectCloseListener</td>
<td align="left">\u81EA\u52A8\u6CE8\u5165\u5173\u95ED\u83DC\u5355\u7684Listener\uFF0C\u8BBE\u4E3Afalse\u65F6\u9700\u81EA\u884C\u5904\u7406</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">\u6CE8\u5165\u81EA\u5B9A\u4E49\u7C7B\u540D\u5230MenuWrapper\u4E0A</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">onOpen</td>
<td align="left">\u83DC\u5355\u6253\u5F00\u540E\u7684\u56DE\u8C03\uFF08^2.0.8\uFF09</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">onClose</td>
<td align="left">\u83DC\u5355\u6253\u5F00\u540E\u7684\u56DE\u8C03\uFF08^2.0.8\uFF09</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="menulist-\u83DC\u5355\u9879\u6570\u7EC4\u914D\u7F6E">menuList-\u83DC\u5355\u9879\u6570\u7EC4\u914D\u7F6E</h4>
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
<td align="left">fn</td>
<td align="left">\u70B9\u51FB\u83DC\u5355\u540E\u6267\u884C\u7684\u56DE\u8C03,\u56DE\u8C03\u53C2\u65701\u4E3A\u7528\u6237\u4F20\u5165\u7684Params, \u53C2\u65702\u4E3A\u70B9\u51FB\u53F3\u952E\u65F6\u6240\u5728\u7684HtmlElement\u5143\u7D20\uFF08\u4F7F\u7528document.elementFromPoint\u83B7\u53D6\uFF09, \u53C2\u65703\u4E3A\u6307\u4EE4\u7ED1\u5B9A\u7684\u5F53\u524D\u5143\u7D20, \u53C2\u65704\u4E3A\u539F\u751F\u70B9\u51FB\u4E8B\u4EF6\u6570\u636E</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">label</td>
<td align="left">\u83DC\u5355\u540D, \u53EF\u4F7F\u7528\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u540Cfn\u9009\u9879</td>
<td align="left">String, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">tips</td>
<td align="left">\u83DC\u5355\u8F85\u52A9\u6587\u672C\uFF08\u5904\u4E8E\u53F3\u4FA7\u7684\u6587\u672C\uFF09\uFF0C\u53EF\u4F7F\u7528\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u540Cfn\u9009\u9879</td>
<td align="left">String, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">icon</td>
<td align="left">\u83DC\u5355\u56FE\u6807\u7684\u7C7B\u540D\uFF08\u5B57\u4F53\u56FE\u6807)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">hidden</td>
<td align="left">\u83DC\u5355\u9879\u662F\u5426\u9690\u85CF\uFF0C\u53EF\u4F7F\u7528\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u540Cfn\u9009\u9879</td>
<td align="left">Boolean, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">\u83DC\u5355\u9879\u662F\u5426\u4E0D\u53EF\u70B9\u51FB\uFF0C\u53EF\u4F7F\u7528\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u540Cfn\u9009\u9879</td>
<td align="left">Boolean, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">children</td>
<td align="left">\u5B50\u83DC\u5355\u7684\u83DC\u5355\u9879\u6570\u7EC4\uFF08\u914D\u7F6E\u4E0E\u6B64\u8868\u4E00\u81F4\uFF0C\u4F46\u76EE\u524D\u4EC5\u652F\u6301\u4E8C\u7EA7\u83DC\u5355\uFF09</td>
<td align="left">Array</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">line</td>
<td align="left">\u662F\u5426\u4E3A\u5206\u5272\u7EBF,\u8BE5\u503C\u4E3ATrue\u65F6,\u4EE5\u4E0A\u8BBE\u7F6E\u5747\u5931\u6548</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">\u6CE8\u5165\u81EA\u5B9A\u4E49\u7C7B\u540D\u5230MenuItem\u4E0A</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="menuwrappercss-\u83DC\u5355\u5BB9\u5668css\u8BBE\u7F6E">menuWrapperCss-\u83DC\u5355\u5BB9\u5668CSS\u8BBE\u7F6E</h4>
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
<td align="left">background</td>
<td align="left">\u83DC\u5355\u5BB9\u5668\u80CC\u666F\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#c8f2f0</td>
</tr>
<tr>
<td align="left">boxShadow</td>
<td align="left">\u83DC\u5355\u5BB9\u5668\u9634\u5F71</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">0 1px 5px #888</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">\u9ED8\u8BA4padding</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">5px 0</td>
</tr>
<tr>
<td align="left">borderRadius</td>
<td align="left">\u5706\u89D2</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">4px</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">\u5206\u5272\u7EBF\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#ccc</td>
</tr>
<tr>
<td align="left">lineMargin</td>
<td align="left">\u5206\u5272\u7EBFMargin</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">5px 0</td>
</tr>
</tbody></table>
<h3 id="menuitemcss-\u83DC\u5355\u9879css\u8BBE\u7F6E">menuItemCss-\u83DC\u5355\u9879CSS\u8BBE\u7F6E</h3>
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
<td align="left">height</td>
<td align="left">\u6BCF\u9879\u9AD8\u5EA6</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">30px</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">-</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">0 10px</td>
</tr>
<tr>
<td align="left">iconSize</td>
<td align="left">\u56FE\u6807\u5927\u5C0F</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">20px</td>
</tr>
<tr>
<td align="left">iconFontSize</td>
<td align="left">\u5B57\u4F53\u56FE\u6807\u5B57\u4F53\u5927\u5C0F(\u8BBE\u7F6E\u7C7B\u578B\u4E3A\u5B57\u4F53\u56FE\u6807\u65F6\u53EF\u7528)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">iconColor</td>
<td align="left">\u5B57\u4F53\u56FE\u6807\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">labelColor</td>
<td align="left">\u83DC\u5355\u9879\u6807\u9898\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">labelFontSize</td>
<td align="left">\u83DC\u5355\u9879\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">14px</td>
</tr>
<tr>
<td align="left">tipsColor</td>
<td align="left">\u83DC\u5355\u8F85\u52A9\u6587\u5B57\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#889</td>
</tr>
<tr>
<td align="left">tipsFontSize</td>
<td align="left">\u83DC\u5355\u8F85\u52A9\u6587\u5B57\u5B57\u4F53\u5927\u5C0F</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">12px</td>
</tr>
<tr>
<td align="left">arrowColor</td>
<td align="left">\u6307\u793A\u7BAD\u5934\u989C\u8272\uFF08\u51FA\u73B0\u5B50\u83DC\u5355\u65F6\u751F\u6210\uFF09</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">arrowSize</td>
<td align="left">\u6307\u793A\u7BAD\u5934\u5927\u5C0F\uFF08\u6307\u793A\u7BAD\u5934\u4E3A\u4F7F\u7528border\u751F\u6210\u7684\u4E09\u89D2\u5F62)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">10px</td>
</tr>
<tr>
<td align="left">disabledColor</td>
<td align="left">\u83DC\u5355\u7981\u7528\u72B6\u6001\u65F6\u7684\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#bcc</td>
</tr>
<tr>
<td align="left">hoverBackground</td>
<td align="left">hover\u65F6\u83DC\u5355\u9879\u7684\u80CC\u666F\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">rgba(255,255,255,.8)</td>
</tr>
<tr>
<td align="left">hoverLabelColor</td>
<td align="left">hover\u65F6\u83DC\u5355\u9879label\u7684\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">hoverTipsColor</td>
<td align="left">hover\u65F6\u83DC\u5355\u9879tips\u7684\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">hoverArrowColor</td>
<td align="left">hover\u65F6\u83DC\u5355\u9879arrow\u7684\u989C\u8272</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
</tbody></table>
<blockquote>
<p>\u4EE5\u4E0A\u6D89\u53CA\u7684CSS\u90E8\u5206\u914D\u7F6E\u4F7F\u7528css3\u7684css\u53D8\u91CF\u5B9E\u73B0\uFF0C\u82E5\u9700\u517C\u5BB9IE\u8BF7\u81EA\u5DF1\u5B9A\u4E49\u6837\u5F0F\u8868</p>
</blockquote>
<h3 id="methods">Methods</h3>
<table>
<thead>
<tr>
<th align="left">\u65B9\u6CD5\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">show</td>
<td align="left">\u663E\u793A\u83DC\u5355\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u81EA\u884C\u8C03\u7528</td>
<td align="left">x:number,y:number</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">\u5173\u95ED\u83DC\u5355</td>
<td align="left">-</td>
</tr>
</tbody></table>
<blockquote>
<p>\u82E5\u4EE5\u7EC4\u4EF6\u65B9\u5F0F\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528\u4E0A\u65B9\u7684show/close\u65B9\u6CD5\u81EA\u884C\u5904\u7406\u9F20\u6807\u53F3\u952E\u83DC\u5355\u884C\u4E3A</p>
</blockquote>
<h2 id="\u4F7F\u7528">\u4F7F\u7528</h2>
<ol>
<li>\u6307\u4EE4\u65B9\u5F0F\u4F7F\u7528\uFF08\u63A8\u8350\uFF09</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">options</span>: {} <span class="hljs-comment">// Some Options</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<ol start="2">
<li>\u51FD\u6570\u65B9\u5F0F\u4F7F\u7528</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">import</span> { CustomMouseMenu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> dom = ref()
    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
      e.preventDefault()
      <span class="hljs-keyword">const</span> MouseMenuCtx = CustomMouseMenu({
        <span class="hljs-attr">el</span>: dom.value,
        <span class="hljs-comment">// Other Options</span>
      })
      <span class="hljs-keyword">const</span> { x, y } = e;
      MouseMenuCtx.show(x,y);
    }
    <span class="hljs-keyword">return</span> {
      dom,
      showMenu
    }
  }
}</span>
</code></pre>
<ol start="3">
<li>\u7EC4\u4EF6\u65B9\u5F0F\u4F7F\u7528</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">mouse-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;mouseMenuEl&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mouse-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">import</span> MouseMenu <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    MouseMenu
  },
  setup () {
    <span class="hljs-keyword">const</span> dom = ref()
    <span class="hljs-keyword">const</span> mouseMenuEl = ref()
    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
      e.preventDefault()
      <span class="hljs-keyword">const</span> { x, y } = e;
      mouseMenuEl.value.show(x,y);
    }
    <span class="hljs-keyword">return</span> {
      dom,
      mouseMenuEl,
      showMenu,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">el</span>: dom.value,
        <span class="hljs-comment">// Other Options...</span>
      } 
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h2 id="\u5176\u4ED6\u8BF4\u660E">\u5176\u4ED6\u8BF4\u660E</h2>
<p>\u4E3A\u4E86\u6027\u80FD\uFF0C\u6307\u4EE4\u5C01\u88C5\u6A21\u5F0F\u9ED8\u8BA4\u53EA\u5BF9mounted\u94A9\u5B50\u8FDB\u884C\u6302\u8F7D\u3002<br>\u5F53\u4F7F\u7528\u573A\u666F\u4E2D\u6709params\u53C2\u6570\u4F20\u5165\u83DC\u5355\u51FD\u6570\uFF0C\u6709\u53EF\u80FD\u9700\u8981\u5728\u7EC4\u4EF6\u66F4\u65B0\u65F6\u66F4\u65B0\u83DC\u5355\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u540C\u65F6\u628Aupdate\u4E5F\u6302\u8F7D\u4E0A\u3002\u53EF\u53C2\u8003\u4EE5\u4E0B\u5199\u6CD5:</p>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  directive: {
    MouseMenu: {
      ...MouseMenuDirective,
      updated: MouseMenuDirective.mounted
    }
  }
}
</code></pre>
<ul>
<li>UMD Name: <code>HowdyMouseMenu</code></li>
<li>Example in <code>ElementPlusTable</code>: <a href="https://codepen.io/leon-kfd/pen/yLMKPOP" target="_blank">Demo</a></li>
</ul>
`;export{n as default};
