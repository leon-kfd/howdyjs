const s=`<h1 id="size-observer">Size Observer</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/size-observer" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/size-observer?color=%2344cc88" alt="Size"></p>
<p><strong>监听元素尺寸变化插件</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>当盒子大小改变时会触发回调函数</li>
<li>基于JS试验API：<a href="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API">ResizeObserver</a></li>
<li><del>基于<a href="https://github.com/que-etc/resize-observer-polyfill">resize-observer-polyfill</a></del></li>
<li>封装了vue指令的形式</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> SizeObserver <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>
<span class="hljs-keyword">const</span> resizeObserve = <span class="hljs-keyword">new</span> SizeObserver({ 
  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#resize&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-attr">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
  }
});
<span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#x27;#resize&#x27;</span>).addEventListener(<span class="hljs-string">&#x27;sizechange&#x27;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-comment">// 盒子触发回调，回调参数参考下方说明</span>
  <span class="hljs-keyword">const</span> { contentRect } = e
})
resizeObserve.init();
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdySizeObserver</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/zYNOKpX" target="_blank">Click Here</a></li>
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
<td align="left">wait</td>
<td align="left">节流延迟(ms)</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">immediate</td>
<td align="left">是否立即先执行一遍回调</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
</tbody></table>
<h3 id="event">Event</h3>
<ul>
<li>初始化后，会自动加入一个<code>sizechange</code>的自定义事件监听, 可以在回调中获取到盒子大小变化后的属性。</li>
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
<td align="left">contentRect</td>
<td align="left">Dom大小改变后的位置信息</td>
<td align="left">Object</td>
</tr>
</tbody></table>
<p>ContentRect Types</p>
<pre><code class="language-ts"><span class="hljs-keyword">interface</span> DOMRectReadOnly {
  <span class="hljs-keyword">readonly</span> x: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> y: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> width: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> height: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> top: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> right: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> bottom: <span class="hljs-built_in">number</span>;
  <span class="hljs-keyword">readonly</span> left: <span class="hljs-built_in">number</span>;
}
</code></pre>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { SizeObserverDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(SizeObserverDirective)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(SizeObserverDirective)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">SizeObserver</span>: SizeObserverDirective
  }
}
</code></pre>
<p>其余Vue指令使用方式可参考<code>Example</code>.</p>
`;export{s as default};
