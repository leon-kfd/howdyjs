var t=`<h1 id="animation-dialog">Animation Dialog</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/animation-dialog" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/animation-dialog?color=%2344cc88" alt="Size"></p>
<p><strong>Vue3\u52A8\u753B\u6A21\u6001\u6846\u7EC4\u4EF6-AnimationDialog</strong></p>
<h2 id="\u7279\u6027">\u7279\u6027</h2>
<ol>
<li>\u53EF\u5B9E\u73B0\u4ECE\u70B9\u51FB\u5143\u7D20\u6253\u5F00Dialog\u7684\u52A8\u753B\u4EA4\u4E92</li>
<li>\u53EF\u4F7F\u7528animate.css\u52A8\u753B\u8FDB\u884Cdialog\u7684\u6253\u5F00\u4E0E\u5173\u95ED</li>
<li><a href="https://daneden.github.io/animate.css/">animate.css</a>  <blockquote>
<p>\u4E3A\u4E86\u4F18\u5316\u5305\u5927\u5C0F\uFF0C\u7EC4\u4EF6\u53EA\u5185\u7F6E\u4E86BounceIn\u4E0EBounceOut\u52A8\u753B\uFF0C\u4F7F\u7528animate.css\u6A21\u5F0F\u65F6\u8BF7\u81EA\u884C\u5F15\u5165animate.css\u6837\u5F0F\u6587\u4EF6</p>
</blockquote>
</li>
</ol>
<h2 id="\u914D\u7F6E">\u914D\u7F6E</h2>
<h3 id="1-attrs-\u5C5E\u6027">1 Attrs \u5C5E\u6027</h3>
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
<td align="left">width</td>
<td align="left">Dialog\u5BBD\u5EA6</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">50vw</td>
</tr>
<tr>
<td align="left">height</td>
<td align="left">Dialog\u9AD8\u5EA6</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">70vh</td>
</tr>
<tr>
<td align="left">animationMode</td>
<td align="left">\u662F\u5426\u4E3Aanimate.css\u6A21\u5F0F\u6253\u5F00\uFF0C\u9700\u81EA\u884C\u5F15\u5165animate.css</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">animationIn</td>
<td align="left">\u5F53animationMode\u4E3Atrue\u65F6\u6709\u6548\uFF0CDialog\u8FDB\u5165\u52A8\u753B,\u53C2\u8003animate.css</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">bounceIn</td>
</tr>
<tr>
<td align="left">animationOut</td>
<td align="left">\u5F53animationMode\u4E3Atrue\u65F6\u6709\u6548\uFF0CDialog\u79BB\u5F00\u52A8\u753B,\u53C2\u8003animate.css</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">bounceOut</td>
</tr>
<tr>
<td align="left">time</td>
<td align="left">\u52A8\u753B\u6267\u884C\u65F6\u95F4</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">500</td>
</tr>
<tr>
<td align="left">timingFunction</td>
<td align="left">\u5F53animationMode\u4E3Afalse\u65F6\u6709\u6548\uFF0C\u8FC7\u6E21\u52A8\u753B\u66F2\u7EBF</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.55,-0.15, 0.71, 1.35)</td>
</tr>
<tr>
<td align="left">openFromItself</td>
<td align="left">\u662F\u5426\u4F7F\u7528\u81EA\u8EAB\u4F5C\u4E3ADialog\uFF0C\u5373Dialog\u4E3A\u70B9\u51FB\u7684\u5143\u7D20(\u4F46\u6253\u5F00\u7684\u5176\u5B9E\u4E3AClone\u7684Dom)</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">appendToBody</td>
<td align="left">\u662F\u5426\u5C06Dom\u63D2\u5165\u5230body\u4E2D\uFF0C\u9632\u6B62\u7236\u5143\u7D20\u6837\u5F0F\u9020\u6210\u7684\u5F02\u5E38</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">\u81EA\u5B9A\u4E49Dialog\u7684\u7C7B\u540D, \u8FFD\u52A0\u5230<code>.dialog</code>\u4E0A</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">customWrapperClass</td>
<td align="left">\u81EA\u5B9A\u4E49Wrapper\u7684\u7C7B\u540D\uFF0C\u8FFD\u52A0\u5230<code>.animation-dialog-wrapper</code>\u4E0A</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">listenWindowSizeChange</td>
<td align="left">\u662F\u5426\u9700\u8981\u76D1\u542CWindow\u5BBD\u5EA6\u53D8\u5316\u800C\u6539\u53D8dialog\u5BBD\u5EA6,\u9ED8\u8BA4\u4E0D\u76D1\u542C</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">debounceWait</td>
<td align="left">\u76D1\u542CWindow\u5BBD\u5EA6\u53D8\u5316\u7684\u5EF6\u8FDF\u65F6\u95F4</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">200</td>
</tr>
<tr>
<td align="left">title</td>
<td align="left">Dialog\u6807\u9898,V1.6.2\u540E\u65B0\u589E,\u6837\u5F0F\u5185\u7F6E,\u8981\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528slot</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">closeOnClickOutside</td>
<td align="left">\u662F\u5426\u70B9\u51FBDialog\u5916\u5C42\u540E\u76F4\u63A5\u5173\u95EDDialog</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
</tbody></table>
<h3 id="2-methods-\u65B9\u6CD5">2 Methods \u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th align="left">\u65B9\u6CD5\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">open</td>
<td align="left">\u6253\u5F00Dialog</td>
<td align="left">el (\u5728\u9ED8\u8BA4\u6A21\u5F0F\u4E0B\uFF0C\u9700\u8981\u4F20\u5B9E\u73B0\u4EA4\u4E92\u7684Dom\uFF0C\u5373\u70B9\u51FB\u5143\u7D20\uFF0C\u4E0D\u4F20\u9ED8\u8BA4\u4ECE\u4E2D\u95F4\u6253\u5F00)</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">\u5173\u95EDDialog</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="3-events-\u4E8B\u4EF6">3 Events \u4E8B\u4EF6</h3>
<table>
<thead>
<tr>
<th align="left">\u4E8B\u4EF6\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">beforeClose</td>
<td align="left">\u5173\u95ED\u52A8\u753B\u524D\u6267\u884C\u4E8B\u4EF6</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">\u5173\u95ED\u52A8\u753B\u540E\u6267\u884C\u4E8B\u4EF6</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="4-slot">4 Slot</h3>
<table>
<thead>
<tr>
<th align="left">\u63D2\u69FD\u540D</th>
<th align="left">\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td align="left">title</td>
<td align="left">Dialog\u6807\u9898</td>
</tr>
<tr>
<td align="left">footer</td>
<td align="left">Dialog\u9875\u811A</td>
</tr>
</tbody></table>
<blockquote>
<p>Package umd name: <code>HowdyAnimationDialog</code></p>
</blockquote>
`;export{t as default};
