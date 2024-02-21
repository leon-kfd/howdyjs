const t=`<h1 id="scroll">Scroll</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/scroll" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/scroll?color=%2344cc88" alt="Size"></p>
<p><strong>自定义滚动条插件</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>通过配置项生成自定义样式的滚动条</li>
<li>支持拖拽滚动</li>
<li>基本不需要更改DOM布局，只需在overflow:scroll的元素上增加该指令即可</li>
<li>移动端中无效，会自动改回默认的滚动</li>
<li>封装了vue指令的形式</li>
<li>使用<code>ResizeObserver</code>监听盒子大小变化，已无需手动调用<code>update</code>方法(^2.1.2)</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> CustomScrollBar <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/scroll&#x27;</span>
const scroll = <span class="hljs-keyword">new</span> CustomScrollBar({
  el: <span class="hljs-string">&#x27;#scroll&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
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
<th align="left">参数</th>
<th align="left">说明</th>
<th align="left">类型</th>
<th align="left">可选值</th>
<th align="left">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="left">direction</td>
<td align="left">滚动条方向</td>
<td align="left">String</td>
<td align="left">x/y/all</td>
<td align="left">y</td>
</tr>
<tr>
<td align="left">scrollBarWidth</td>
<td align="left">滚动条宽度（轨道）</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">6</td>
</tr>
<tr>
<td align="left">scrollBarOffsetX</td>
<td align="left">滚动条水平偏移（padding)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">scrollBarOffsetY</td>
<td align="left">滚动条垂直偏移（padding)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">scrollBarThumbColor</td>
<td align="left">滚动条滑块颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#aab</td>
</tr>
<tr>
<td align="left">scrollBarThumbBorderRadius</td>
<td align="left">滚动条滑块是否需要圆角</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">scrollBarThumbBorderRadius</td>
<td align="left">滚动条轨道颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">transparent</td>
</tr>
<tr>
<td align="left">scrollBarThumbHoverColor</td>
<td align="left">滚动条滑块Hover时的颜色（默认不设置）</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">enableTrackClickScroll</td>
<td align="left">是否允许点击轨道进行滚动</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">scrollSpeed</td>
<td align="left">点击轨道时的滚动速度（滚动效果使用requestAnimationFrame实现，该值表示每帧的位移量，单位PX）</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">20</td>
</tr>
<tr>
<td align="left">dragScroll</td>
<td align="left">是否开启拖拽滚动</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">thumbShow</td>
<td align="left">滚动条滑块显示方式，可选一直显示与Hover显示</td>
<td align="left">String</td>
<td align="left">always/hover</td>
<td align="left">always</td>
</tr>
<tr>
<td align="left">observeAutoUpdate</td>
<td align="left">自动更新滚动条，默认开启，若关闭则需要自行在盒子大小改变时手动调用更新方法</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
</tbody></table>
<blockquote>
<p><em>长度属性的单位为px</em></p>
</blockquote>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ScrollDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/scroll&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(ScrollDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(ScrollDirective, someGlobalOptions)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">scroll</span>: ScrollDirective
  }
}
</code></pre>
<h3 id="指令arg">指令Arg</h3>
<ol>
<li>y(默认), 开启垂直滚动</li>
<li>x, 开启水平滚动</li>
<li>all, 同时开启垂直、水平滚动</li>
</ol>
<blockquote>
<p><em>v-scroll:y | v-scroll:x | v-scroll:all</em></p>
</blockquote>
<h3 id="指令value-objcet">指令Value (Objcet)</h3>
<p>参数同上方的配置<code>Options</code></p>
`;export{t as default};
