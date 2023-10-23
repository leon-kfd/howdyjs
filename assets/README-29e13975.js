const n=`<h1 id="img-zoom">Img Zoom</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/img-zoom" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/img-zoom?color=%2344cc88" alt="Size"></p>
<p><strong>图片放大插件</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>实现点击图片放大显示</li>
<li>支持设置同组图片，可在放大的模态框进行切换上一张下一张</li>
<li>图片Loading加载效果</li>
<li>可设置点击后加载显示的是另外一张大图</li>
<li>封装了vue指令的形式</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ImgZoom <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/img-zoom&#x27;</span>
<span class="hljs-keyword">new</span> ImgZoom({
  el: <span class="hljs-string">&#x27;#el&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
  }
})
</code></pre>
<ul>
<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js</a></li>
<li>UMD Name: <code>HowdyImgZoom</code></li>
<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/XWNKyLe" target="_blank">Click here</a></li>
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
<td align="left">imgSrc</td>
<td align="left">放大后的图片地址, 默认不传会使用原img的src</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">title</td>
<td align="left">显示图片标题</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">group</td>
<td align="left">启用图片分组功能，传一个自定义组名</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">zoomCursor</td>
<td align="left">是否显示放大镜cursor</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">showCloseBtn</td>
<td align="left">是否显示关闭按钮，开启后只能通过点击关闭按钮关闭模态框</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">preventDefault</td>
<td align="left">是否阻止默认行为，例如父元素的A标签跳转</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">showLoading</td>
<td align="left">加载图片时，是否显示loading动画</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">customLoading</td>
<td align="left">自定义loading动画，函数类型，需要返回HtmlElement</td>
<td align="left">Funtion</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ImgZoomDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(ImgZoomDirective)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(ImgZoomDirective)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">ImgZoom</span>: ImgZoomDirective
  }
}
</code></pre>
<p><strong>指令支持简写</strong></p>
<pre><code class="language-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom:example</span>=<span class="hljs-string">&quot;http://a.com/b.png&quot;</span> /&gt;</span>
// 等价于
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom</span>=<span class="hljs-string">&quot;</span></span></span><span class="hljs-template-variable">{group: &#x27;example&#x27;, imgSrc: &#x27;http://a.com/b.png&#x27;}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">&quot;</span> /&gt;</span></span>
</code></pre>
`;export{n as default};
