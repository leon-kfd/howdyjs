export default'<h1 id="todrag">ToDrag</h1>\n<p><img src="https://img.shields.io/npm/v/@howdyjs/to-drag" alt="Version">\n<img src="https://img.shields.io/bundlephobia/min/@howdyjs/to-drag?color=%2344cc88" alt="Size"></p>\n<p><strong>设置Dom可拖动插件</strong></p>\n<h2 id="特性">特性</h2>\n<ol>\n<li>将fixed元素设为可拖动</li>\n<li>提供不吸附、左右吸附、四方向吸附三种模式</li>\n<li>同时支持PC端和移动端</li>\n<li>封装了vue指令的形式</li>\n<li>新增<a href="https://kongfandong.cn/howdy/to-drag/example6">Absolute模式</a>，控制absolute元素在其父元素盒子下进行拖拽</li>\n</ol>\n<h2 id="原生使用">原生使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> ToDrag <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>\n<span class="hljs-keyword">new</span> ToDrag({\n  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#to-drag&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>\n  <span class="hljs-attr">options</span>: {\n    <span class="hljs-comment">// Your Options</span>\n    <span class="hljs-comment">// 参考下方说明</span>\n  }\n});\n</code></pre>\n<ul>\n<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/to-drag/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/to-drag/dist/index.umd.js</a></li>\n<li>UMD Name: <code>HowdyToDrag</code></li>\n<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/wvWyXNY" target="_blank">Click Here</a></li>\n</ul>\n<h3 id="options-objcet">Options (Objcet)</h3>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">moveCursor</td>\n<td align="left">是否显示移动光标(cursor: move)</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n<tr>\n<td align="left"><strong>adsorb</strong></td>\n<td align="left">是否开启边缘吸附，默认为不开启，设为1则为左右吸附，设为2为四方向吸附</td>\n<td align="left">Number</td>\n<td align="left">0/1/2</td>\n<td align="left">0</td>\n</tr>\n<tr>\n<td align="left">adsorbOffset</td>\n<td align="left">开启吸附后，吸附边缘的偏移量，单位为px</td>\n<td align="left">Number</td>\n<td align="left">-</td>\n<td align="left">0</td>\n</tr>\n<tr>\n<td align="left">transitionDuration</td>\n<td align="left">吸附动画的过渡效果的持续时间,单位为ms</td>\n<td align="left">Number</td>\n<td align="left">-</td>\n<td align="left">400</td>\n</tr>\n<tr>\n<td align="left">transitionTimingFunction</td>\n<td align="left">吸附动画的过渡效果的动画曲线</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">ease-in-out</td>\n</tr>\n<tr>\n<td align="left"><strong>forbidBodyScroll</strong></td>\n<td align="left">默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n<tr>\n<td align="left"><strong>isAbsolute</strong></td>\n<td align="left">是否为Absolute模式,v1.5.0后新增，可控制absolute的元素在其父元素下进行拖拽，开启该模式暂不支持吸附功能</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">parentSelector</td>\n<td align="left">Absolute模式下元素的父级容器，目前只支持传入字符串选择器</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left"><strong>positionMode</strong></td>\n<td align="left">定位模式,默认会记录top与left值,更改此值可以定位方向(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)</td>\n<td align="left">Number</td>\n<td align="left">1,2,3,4</td>\n<td align="left">1</td>\n</tr>\n<tr>\n<td align="left">disabled</td>\n<td align="left">是否禁用，需传入函数返回Boolean</td>\n<td align="left">Function: () =&gt; boolean</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n</tbody></table>\n<h3 id="event">Event</h3>\n<ul>\n<li><strong>todraginit</strong>：初始化完成事件</li>\n<li><strong>todragstart</strong>: 拖拽开始事件</li>\n<li><strong>todragmove</strong>：拖拽移动事件</li>\n<li><strong>todragend</strong>：拖拽结束时间</li>\n</ul>\n<p>它们都提供以下的回调参数：</p>\n<ul>\n<li>width：当前拖拽元素的宽</li>\n<li>height：当前拖拽元素的宽</li>\n<li>top：当前拖拽元素的上偏移</li>\n<li>left：当前拖拽元素的左偏移</li>\n<li>bottom: 当前拖拽元素的下偏移</li>\n<li>right：当前拖拽元素的右偏移</li>\n<li>maxX：当前屏幕的宽度（不包含滚动条）</li>\n<li>maxY：当前屏幕的高度（不包含滚动条）</li>\n</ul>\n<p><em>一般在回调中将位置信息记录到 localstorage，在下一次初始化时填入用户上一次最后移动的信息。</em></p>\n<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/to-drag&#x27;</span>\n<span class="hljs-comment">// Vue3全局引入</span>\napp.use(ToDragDirective, someGlobalOptions)\n\n<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>\nVue.use(ToDragDirective, someGlobalOptions)\n\n<span class="hljs-comment">// 组件内引入</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">directive</span>: {\n    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective\n  }\n}\n</code></pre>\n<h3 id="指令value-objcet">指令Value (Objcet)</h3>\n<p>参数同上方的配置<code>Options</code></p>\n';
