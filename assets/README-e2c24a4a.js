const t=`<h1 id="standard-tabs">Standard Tabs</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/standard-tabs" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/standard-tabs?color=%2344cc88" alt="Size"></p>
<p><strong>VUE3组件-StandardTabs</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>适用于手机端的滑动Tabs组件</li>
<li>集成顶部Tabs切换的交互动画</li>
<li>备注：由于仅使用了touch相关事件实现，所以该组件不适用于PC端</li>
</ol>
<h2 id="配置">配置</h2>
<h3 id="1-slot-插槽">1 Slot 插槽</h3>
<p>插槽名与每个标签页自动关联,使用tab + 标签顺序形成slot名</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">standard-tabs</span> <span class="hljs-attr">:tabList</span>=<span class="hljs-string">&quot;[&#x27;tab1&#x27;, &#x27;tab2&#x27;, &#x27;tab3&#x27;]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab1</span>&gt;</span>Tab1<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab2</span>&gt;</span>Tab2<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tab3</span>&gt;</span>Tab3<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">standard-tabs</span>&gt;</span>
...
</code></pre>
<h3 id="2-attrs-属性">2 Attrs 属性</h3>
<table>
<thead>
<tr>
<th align="left">参数</th>
<th align="left">说明</th>
<th align="left">类型</th>
<th align="left">可选值</th>
<th align="left">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="left">tabWidth</td>
<td align="left">标签栏标签宽度</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">80</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">标签栏激活线条宽度</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">30</td>
</tr>
<tr>
<td align="left">tabContentWidth</td>
<td align="left">标签页宽度,Number时为单位为px,String时可传vw单位</td>
<td align="left">Number/String</td>
<td align="left">-</td>
<td align="left">100vw</td>
</tr>
<tr>
<td align="left">tabContentMinHeight</td>
<td align="left">标签页最小高度（设置防止出现无元素进行滑动）</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">100px</td>
</tr>
<tr>
<td align="left"><strong>tabList</strong></td>
<td align="left">标签数组</td>
<td align="left">Array[String]</td>
<td align="left">Require</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">transitionDuration</td>
<td align="left">动画执行时间(单位ms)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">400</td>
</tr>
<tr>
<td align="left">mainTransitionTimingFunction</td>
<td align="left">标签页内容与标签下划线的动画曲线</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.075, 0.82, 0.165, 1)</td>
</tr>
<tr>
<td align="left">tabTransitionTimingFunction</td>
<td align="left">标签的动画曲线(以防无法产生视觉差,不建议与上方设置同样的动画曲线)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.075, 0.82, 0.165, 1)</td>
</tr>
<tr>
<td align="left">tabCustomStyle</td>
<td align="left">标签栏的自定义Style,只支持传入字符串且不能覆盖width/transform/transition属性</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="3-methods-方法">3 Methods 方法</h3>
<table>
<thead>
<tr>
<th align="left">方法名</th>
<th align="left">说明</th>
<th align="left">参数</th>
</tr>
</thead>
<tbody><tr>
<td align="left">setActive</td>
<td align="left">跳转标签页</td>
<td align="left">index:跳转标签的index</td>
</tr>
</tbody></table>
<h3 id="4-events-事件">4 Events 事件</h3>
<table>
<thead>
<tr>
<th align="left">事件名</th>
<th align="left">说明</th>
<th align="left">回调参数</th>
</tr>
</thead>
<tbody><tr>
<td align="left">contentTouchStart</td>
<td align="left">标签页touchStart</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">contentTouchMove</td>
<td align="left">标签页touchMove</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">contentTouchEnd</td>
<td align="left">标签页touchEnd</td>
<td align="left">TouchEvent</td>
</tr>
<tr>
<td align="left">tabActiveChange</td>
<td align="left">标签页切换事件</td>
<td align="left">index:跳转标签的index</td>
</tr>
</tbody></table>
`;export{t as default};
