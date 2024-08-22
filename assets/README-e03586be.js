const t=`<h1 id="todrag">ToDrag</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/to-drag" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/to-drag?color=%2344cc88" alt="Size"></p>
<p><strong>设置Dom可拖动插件</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>将fixed元素设为可拖动</li>
<li>提供不吸附、左右吸附、四方向吸附三种模式</li>
<li>同时支持PC端和移动端</li>
<li>封装了vue指令的形式</li>
<li>新增<a href="https://kongfandong.cn/howdy/to-drag/example6">Absolute模式</a>，控制absolute元素在其父元素盒子下进行拖拽</li>
</ol>
<h2 id="原生使用">原生使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> ToDrag <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>
<span class="hljs-keyword">new</span> ToDrag({
  el: <span class="hljs-string">&#x27;#to-drag&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>
  <span class="hljs-keyword">options</span>: {
    <span class="hljs-comment">// Your Options</span>
    <span class="hljs-comment">// 参考下方说明</span>
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
<td align="left"><strong>adsorb</strong></td>
<td align="left">是否开启边缘吸附，默认为不开启，设为1则为左右吸附，设为2为四方向吸附</td>
<td align="left">Number</td>
<td align="left">0/1/2</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">adsorbOffset</td>
<td align="left">开启吸附后，吸附边缘的偏移量，单位为px</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">0</td>
</tr>
<tr>
<td align="left">transitionDuration</td>
<td align="left">吸附动画的过渡效果的持续时间,单位为ms</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">400</td>
</tr>
<tr>
<td align="left">transitionTimingFunction</td>
<td align="left">吸附动画的过渡效果的动画曲线</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">ease-in-out</td>
</tr>
<tr>
<td align="left"><strong>forbidBodyScroll</strong></td>
<td align="left">默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left"><strong>isAbsolute</strong></td>
<td align="left">是否为Absolute模式,v1.5.0后新增，可控制absolute的元素在其父元素下进行拖拽</td>
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
<td align="left"><strong>positionMode</strong></td>
<td align="left">定位模式,默认会记录top与left值,更改此值可以定位方向(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)</td>
<td align="left">Number</td>
<td align="left">1,2,3,4</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">是否禁用，需传入函数返回Boolean</td>
<td align="left">Function: () =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="event">Event</h3>
<ul>
<li><strong>todraginit</strong>：初始化完成事件</li>
<li><strong>todragstart</strong>: 拖拽开始事件</li>
<li><strong>todragmove</strong>：拖拽移动事件</li>
<li><strong>todragend</strong>：拖拽结束时间</li>
</ul>
<p>它们都提供以下的回调参数：</p>
<ul>
<li>width：当前拖拽元素的宽</li>
<li>height：当前拖拽元素的宽</li>
<li>top：当前拖拽元素的上偏移</li>
<li>left：当前拖拽元素的左偏移</li>
<li>bottom: 当前拖拽元素的下偏移</li>
<li>right：当前拖拽元素的右偏移</li>
<li>maxX：当前屏幕的宽度（不包含滚动条）</li>
<li>maxY：当前屏幕的高度（不包含滚动条）</li>
</ul>
<p><em>一般在回调中将位置信息记录到 localstorage，在下一次初始化时填入用户上一次最后移动的信息。</em></p>
<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>
<span class="hljs-comment">// Vue3全局引入</span>
app.use(ToDragDirective, someGlobalOptions)

<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>
Vue.use(ToDragDirective, someGlobalOptions)

<span class="hljs-comment">// 组件内引入</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective
  }
}
</code></pre>
<h3 id="指令value-objcet">指令Value (Objcet)</h3>
<p>参数同上方的配置<code>Options</code></p>
`;export{t as default};
