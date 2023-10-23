const t=`<h1 id="tocontrol">ToControl</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/to-control" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/to-control?color=%2344cc88" alt="Size"></p>
<p><strong>Resize or drag to move a html dom.</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>将一个定位为absolute的Dom设置成可拖拽移动与更改大小</li>
<li>继承于<a href="https://kongfandong.cn/howdy/to-drag/">@howdyjs/to-drag</a>，为其添加更改大小功能</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ToControl <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-control&#x27;</span>
<span class="hljs-keyword">new</span> ToDrag({
  el: <span class="hljs-string">&#x27;#to-control&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
  }
});
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/to-control/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/to-control/dist/index.umd.js</a>（需同时引入ToDrag）</li>
<li>UMD Name: <code>HowdyToControl</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/NWjyPBp" target="_blank">Click Here</a></li>
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
<td align="left">moveCursor</td>
<td align="left">是否显示移动光标(cursor: move)</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">forbidBodyScroll</td>
<td align="left">默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left"><strong>isAbsolute</strong></td>
<td align="left">是否为Absolute模式, 可控制absolute的元素在其父元素下进行拖拽</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">parentSelector</td>
<td align="left">Absolute模式下元素的父级容器，目前只支持传入字符串选择器</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">arrowOptions</td>
<td align="left">右下角更改大小用的箭头配置，配置参考下表</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>positionMode</strong></td>
<td align="left">定位模式,默认会记录top与left值,更改此值可以定位方向(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)</td>
<td align="left">Number</td>
<td align="left">1,2,3,4</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">是否禁用，需传入函数返回Boolean，若需同时隐藏箭头ICON在原生使用自行调用<code>updateArrow</code>方法，在Vue指令方式需触发DOM更新</td>
<td align="left">Function: () =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="arrowoptions-objcet">arrowOptions (Objcet)</h4>
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
<td align="left">size</td>
<td align="left">箭头大小，单位为px</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">8</td>
</tr>
<tr>
<td align="left">lineWidth</td>
<td align="left">箭头线宽</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">箭头颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#9a9a9a</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">距离右下角padding</td>
<td align="left">number</td>
<td align="left">-</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">background</td>
<td align="left">箭头盒子背景属性，一般用于自定义图标</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">none</td>
</tr>
</tbody></table>
<blockquote>
<p>箭头盒子的CSS类名为<code>to-control-arrow</code>，也可自行控制样式</p>
</blockquote>
<h3 id="event">Event</h3>
<p>该插件继承自<a href="https://kongfandong.cn/howdy/to-drag/">@howdyjs/to-drag</a>，在拖拽更改位置时可以使用其事件回调。</p>
<p>同时提供了<code>tocontrolstart</code>, <code>tocontrolmove</code>, <code>tocontrolend</code>作为更改大小后的事件，参数与to-drag事件参数一致。</p>
<blockquote>
<p>需要注意tocontrolend会同时触发todragend.</p>
</blockquote>
<h3 id="method">Method</h3>
<ul>
<li><code>updateArrow</code>: 可手动更新箭头DOM</li>
</ul>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ToControlDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-control&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(ToControlDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(ToControlDirective, someGlobalOptions)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-string">&#x27;to-control&#x27;</span>: ToControlDirective
  }
}
</code></pre>
<h3 id="指令value-objcet">指令Value (Objcet)</h3>
<p>参数同上方的配置<code>Options</code></p>
`;export{t as default};
