const t=`<h1 id="animation-dialog">Animation Dialog</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/animation-dialog" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/animation-dialog?color=%2344cc88" alt="Size"></p>
<p><strong>Vue3动画模态框组件-AnimationDialog</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>可实现从点击元素打开Dialog的动画交互</li>
<li>可使用animate.css动画进行dialog的打开与关闭</li>
<li><a href="https://daneden.github.io/animate.css/">animate.css</a>  <blockquote>
<p>为了优化包大小，组件只内置了BounceIn与BounceOut动画，使用animate.css模式时请自行引入animate.css样式文件</p>
</blockquote>
</li>
</ol>
<h2 id="配置">配置</h2>
<h3 id="1-attrs-属性">1 Attrs 属性</h3>
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
<td align="left">width</td>
<td align="left">Dialog宽度</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">50vw</td>
</tr>
<tr>
<td align="left">height</td>
<td align="left">Dialog高度</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">70vh</td>
</tr>
<tr>
<td align="left">animationMode</td>
<td align="left">是否为animate.css模式打开，需自行引入animate.css</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">animationIn</td>
<td align="left">当animationMode为true时有效，Dialog进入动画,参考animate.css</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">bounceIn</td>
</tr>
<tr>
<td align="left">animationOut</td>
<td align="left">当animationMode为true时有效，Dialog离开动画,参考animate.css</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">bounceOut</td>
</tr>
<tr>
<td align="left">time</td>
<td align="left">动画执行时间</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">500</td>
</tr>
<tr>
<td align="left">timingFunction</td>
<td align="left">当animationMode为false时有效，过渡动画曲线</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">cubic-bezier(0.55,-0.15, 0.71, 1.35)</td>
</tr>
<tr>
<td align="left">openFromItself</td>
<td align="left">是否使用自身作为Dialog，即Dialog为点击的元素(但打开的其实为Clone的Dom)</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">appendToBody</td>
<td align="left">是否将Dom插入到body中，防止父元素样式造成的异常</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">自定义Dialog的类名, 追加到<code>.dialog</code>上</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">customWrapperClass</td>
<td align="left">自定义Wrapper的类名，追加到<code>.animation-dialog-wrapper</code>上</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">listenWindowSizeChange</td>
<td align="left">是否需要监听Window宽度变化而改变dialog宽度,默认不监听</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">debounceWait</td>
<td align="left">监听Window宽度变化的延迟时间</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">200</td>
</tr>
<tr>
<td align="left">title</td>
<td align="left">Dialog标题,V1.6.2后新增,样式内置,要自定义请使用slot</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">closeOnClickOutside</td>
<td align="left">是否点击Dialog外层后直接关闭Dialog</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
</tbody></table>
<h3 id="2-methods-方法">2 Methods 方法</h3>
<table>
<thead>
<tr>
<th align="left">方法名</th>
<th align="left">说明</th>
<th align="left">参数</th>
</tr>
</thead>
<tbody><tr>
<td align="left">open</td>
<td align="left">打开Dialog</td>
<td align="left">el (在默认模式下，需要传实现交互的Dom，即点击元素，不传默认从中间打开)</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">关闭Dialog</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="3-events-事件">3 Events 事件</h3>
<table>
<thead>
<tr>
<th align="left">事件名</th>
<th align="left">说明</th>
<th align="left">回调参数</th>
</tr>
</thead>
<tbody><tr>
<td align="left">beforeClose</td>
<td align="left">关闭动画前执行事件</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">关闭动画后执行事件</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h3 id="4-slot">4 Slot</h3>
<table>
<thead>
<tr>
<th align="left">插槽名</th>
<th align="left">说明</th>
</tr>
</thead>
<tbody><tr>
<td align="left">title</td>
<td align="left">Dialog标题</td>
</tr>
<tr>
<td align="left">footer</td>
<td align="left">Dialog页脚</td>
</tr>
</tbody></table>
<blockquote>
<p>Package umd name: <code>HowdyAnimationDialog</code></p>
</blockquote>
`;export{t as default};
