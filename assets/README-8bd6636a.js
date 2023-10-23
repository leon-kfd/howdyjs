const t=`<h1 id="resize">Resize</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/resize" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/resize?color=%2344cc88" alt="Size"></p>
<p><strong>拖拽更改元素尺寸插件</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>为box加入更改大小功能</li>
<li>目前仅支持position:absolute的布局或者简单Flex布局</li>
<li>可配置resize立即生效或者延迟生效</li>
<li>封装了vue指令的形式</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> CustomResize <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-keyword">const</span> resize = <span class="hljs-keyword">new</span> CustomResize({
  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#resize&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-attr">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
  }
})
resize.init()
<span class="hljs-built_in">document</span>.addEventListener(<span class="hljs-string">&#x27;resize&#x27;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-comment">// 盒子更改后的处理逻辑,需自行处理,参数参考下方说明</span>
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
<th align="left">参数</th>
<th align="left">说明</th>
<th align="left">类型</th>
<th align="left">可选值</th>
<th align="left">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="left">direction</td>
<td align="left">resize方向数组</td>
<td align="left">Array</td>
<td align="left">left/right/top/bottom</td>
<td align="left">right</td>
</tr>
<tr>
<td align="left">immediate</td>
<td align="left">resize是否立即执行，默认为false，false时会在点击时生成一条虚线，改完大小后松开鼠标，盒子大小才会变化；若为true则盒子大小会立即改变</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">生成边框线的颜色，边框线会生成在元素盒子需要resize方向的边框上</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#aab</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">生成边框线的宽度</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">lineHoverColor</td>
<td align="left">生成边框线hover时的颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#88f</td>
</tr>
<tr>
<td align="left">lineHoverWidth</td>
<td align="left">生成边框线hover时的宽度</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">4</td>
</tr>
<tr>
<td align="left">tipLineColor</td>
<td align="left">生成提示线的颜色,immediate为true时无效</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#262626</td>
</tr>
<tr>
<td align="left">tipLineWidth</td>
<td align="left">生成提示线的宽度,immediate为true时无效</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">tipLineStyle</td>
<td align="left">生成提示线的线条样式,immediate为true时无效</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">dashed</td>
</tr>
<tr>
<td align="left">zIndex</td>
<td align="left">生成的线条的zIndex</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">999</td>
</tr>
</tbody></table>
<blockquote>
<p><em>Width属性的单位为px</em></p>
</blockquote>
<h3 id="event">Event</h3>
<ul>
<li>初始化后，会自动加入一个resize的自定义事件监听。该插件并不会直接更改盒子的宽度高度，使用时需要在resize事件的回调中自行处理更改盒子宽高的逻辑。</li>
</ul>
<p>回调函数中提供以下参数</p>
<table>
<thead>
<tr>
<th align="left">参数</th>
<th align="left">说明</th>
<th align="left">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="left">direction</td>
<td align="left">本次操作的方向</td>
<td align="left">String</td>
</tr>
<tr>
<td align="left">moveOffset</td>
<td align="left">resize改变的偏移量，单位为px</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">moveOffsetPercent</td>
<td align="left">resize改变的偏移量百分比，单位为%</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">resizeWidth/resizeHeight</td>
<td align="left">更改的宽或高</td>
<td align="left">Number</td>
</tr>
<tr>
<td align="left">resizeWidthPercent/resizeHeightPercent</td>
<td align="left">更改的宽或高的百分比</td>
<td align="left">Number</td>
</tr>
</tbody></table>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ResizeDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(ReizeDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(ReizeDirective, someGlobalOptions)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">resize</span>: ResizeDirective
  }
}
</code></pre>
<h3 id="指令arg">指令Arg</h3>
<ol>
<li>top、left、bottom、right(默认),可以进行resize的方向</li>
<li>all，全部方向可resize</li>
</ol>
<blockquote>
<p><em>v-resize:left | v-resize:top | v-resize:all ...</em></p>
</blockquote>
<h3 id="指令value-objcet">指令Value (Objcet)</h3>
<p>参数同上方的配置<code>Options</code></p>
<h3 id="指令event">指令Event</h3>
<ul>
<li>使用指令后，会自动加入一个resize的自定义事件监听。本指令并不会直接更改盒子的宽度高度，使用时需要在resize事件的回调中自行处理更改盒子宽高的逻辑,可直接使用“@resize=&quot;someMethod&quot;”操作回调函数。回调参数同上方<code>Event</code></li>
</ul>
`;export{t as default};
