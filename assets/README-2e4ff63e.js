const n=`<h1 id="mouse-menu">Mouse Menu</h1>
<p><img src="https://img.shields.io/npm/v/@howdyjs/mouse-menu" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/@howdyjs/mouse-menu?color=%2344cc88" alt="Size"></p>
<p><strong>自定义菜单-VUE3组件/指令</strong></p>
<h2 id="特性">特性</h2>
<ol>
<li>默认封装成Vue指令</li>
<li>支持自定义样式</li>
<li>支持子菜单</li>
<li>支持加入菜单图标</li>
<li><em>支持移动端长按唤出菜单</em>(v1.7.0后支持)</li>
</ol>
<h2 id="配置">配置</h2>
<h3 id="props指令value-object">Props/指令Value (Object)</h3>
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
<td align="left">el</td>
<td align="left">触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入）</td>
<td align="left">-</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">menuWidth</td>
<td align="left">菜单宽度</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">200</td>
</tr>
<tr>
<td align="left">menuList</td>
<td align="left">生成菜单项的数组，具体配置参考下表</td>
<td align="left">Array</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">hasIcon</td>
<td align="left">是否有菜单图标</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">iconType</td>
<td align="left">菜单图标的类型，支持字体图标、SVG图标、VNode组件</td>
<td align="left">&#39;font-icon&#39;, &#39;svg-icon&#39;, &#39;vnode-icon&#39;</td>
<td align="left">-</td>
<td align="left">font-icon</td>
</tr>
<tr>
<td align="left">menuWrapperCss</td>
<td align="left">菜单容器的CSS设置，具体配置参考下表</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">menuItemCss</td>
<td align="left">菜单项的CSS设置，具体配置参考下表</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">params</td>
<td align="left">传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中</td>
<td align="left">Any</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">appendToBody</td>
<td align="left">容器是否挂载到body上</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">是否禁用整个菜单，接收一个函数</td>
<td align="left">(params: any) =&gt; boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">useLongPressInMobile</td>
<td align="left">移动端下兼容使用长按事件唤出菜单, 但长按模式不支持多级菜单（仅支持指令方式）</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">false</td>
</tr>
<tr>
<td align="left">longPressDuration</td>
<td align="left">长按事件需持续时间,单位ms</td>
<td align="left">Number</td>
<td align="left">-</td>
<td align="left">500</td>
</tr>
<tr>
<td align="left">longPressPreventDefault</td>
<td align="left">长按事件下touchstart是否PreventDefault, 可接收函数</td>
<td align="left">Boolean/Function</td>
<td align="left">-</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">injectCloseListener</td>
<td align="left">自动注入关闭菜单的Listener，设为false时需自行处理</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">true</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">注入自定义类名到MenuWrapper上</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">onOpen</td>
<td align="left">菜单打开后的回调（^2.0.8）</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">onClose</td>
<td align="left">菜单打开后的回调（^2.0.8）</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="menulist-菜单项数组配置">menuList-菜单项数组配置</h4>
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
<td align="left">fn</td>
<td align="left">点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素, 参数4为原生点击事件数据</td>
<td align="left">Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">label</td>
<td align="left">菜单名, 可使用函数，回调参数同fn选项</td>
<td align="left">String, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">tips</td>
<td align="left">菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项</td>
<td align="left">String, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">icon</td>
<td align="left">菜单图标的类名（字体图标)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">hidden</td>
<td align="left">菜单项是否隐藏，可使用函数，回调参数同fn选项</td>
<td align="left">Boolean, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">disabled</td>
<td align="left">菜单项是否不可点击，可使用函数，回调参数同fn选项</td>
<td align="left">Boolean, Function</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">children</td>
<td align="left">子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）</td>
<td align="left">Array</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">line</td>
<td align="left">是否为分割线,该值为True时,以上设置均失效</td>
<td align="left">Boolean</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left">customClass</td>
<td align="left">注入自定义类名到MenuItem上</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">-</td>
</tr>
</tbody></table>
<h4 id="menuwrappercss-菜单容器css设置">menuWrapperCss-菜单容器CSS设置</h4>
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
<td align="left">background</td>
<td align="left">菜单容器背景色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#c8f2f0</td>
</tr>
<tr>
<td align="left">boxShadow</td>
<td align="left">菜单容器阴影</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">0 1px 5px #888</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">默认padding</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">5px 0</td>
</tr>
<tr>
<td align="left">borderRadius</td>
<td align="left">圆角</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">4px</td>
</tr>
<tr>
<td align="left">lineColor</td>
<td align="left">分割线颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#ccc</td>
</tr>
<tr>
<td align="left">lineMargin</td>
<td align="left">分割线Margin</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">5px 0</td>
</tr>
</tbody></table>
<h3 id="menuitemcss-菜单项css设置">menuItemCss-菜单项CSS设置</h3>
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
<td align="left">height</td>
<td align="left">每项高度</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">30px</td>
</tr>
<tr>
<td align="left">padding</td>
<td align="left">-</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">0 10px</td>
</tr>
<tr>
<td align="left">iconSize</td>
<td align="left">图标大小</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">20px</td>
</tr>
<tr>
<td align="left">iconFontSize</td>
<td align="left">字体图标字体大小(设置类型为字体图标时可用)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">iconColor</td>
<td align="left">字体图标颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">labelColor</td>
<td align="left">菜单项标题颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">labelFontSize</td>
<td align="left">菜单项标题字体大小</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">14px</td>
</tr>
<tr>
<td align="left">tipsColor</td>
<td align="left">菜单辅助文字颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#889</td>
</tr>
<tr>
<td align="left">tipsFontSize</td>
<td align="left">菜单辅助文字字体大小</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">12px</td>
</tr>
<tr>
<td align="left">arrowColor</td>
<td align="left">指示箭头颜色（出现子菜单时生成）</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#484852</td>
</tr>
<tr>
<td align="left">arrowSize</td>
<td align="left">指示箭头大小（指示箭头为使用border生成的三角形)</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">10px</td>
</tr>
<tr>
<td align="left">disabledColor</td>
<td align="left">菜单禁用状态时的颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">#bcc</td>
</tr>
<tr>
<td align="left">hoverBackground</td>
<td align="left">hover时菜单项的背景色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">rgba(255,255,255,.8)</td>
</tr>
<tr>
<td align="left">hoverLabelColor</td>
<td align="left">hover时菜单项label的颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">hoverTipsColor</td>
<td align="left">hover时菜单项tips的颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
<tr>
<td align="left">hoverArrowColor</td>
<td align="left">hover时菜单项arrow的颜色</td>
<td align="left">String</td>
<td align="left">-</td>
<td align="left">null</td>
</tr>
</tbody></table>
<blockquote>
<p>以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表</p>
</blockquote>
<h3 id="methods">Methods</h3>
<table>
<thead>
<tr>
<th align="left">方法名</th>
<th align="left">说明</th>
<th align="left">参数</th>
</tr>
</thead>
<tbody><tr>
<td align="left">show</td>
<td align="left">显示菜单，一般不需要自行调用</td>
<td align="left">x:number,y:number</td>
</tr>
<tr>
<td align="left">close</td>
<td align="left">关闭菜单</td>
<td align="left">-</td>
</tr>
</tbody></table>
<blockquote>
<p>若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为</p>
</blockquote>
<h2 id="使用">使用</h2>
<ol>
<li>指令方式使用（推荐）</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">directive</span>: {
    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">options</span>: {} <span class="hljs-comment">// Some Options</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<ol start="2">
<li>函数方式使用</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">import</span> { CustomMouseMenu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> dom = ref()
    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
      e.preventDefault()
      <span class="hljs-keyword">const</span> MouseMenuCtx = CustomMouseMenu({
        <span class="hljs-attr">el</span>: dom.value,
        <span class="hljs-comment">// Other Options</span>
      })
      <span class="hljs-keyword">const</span> { x, y } = e;
      MouseMenuCtx.show(x,y);
    }
    <span class="hljs-keyword">return</span> {
      dom,
      showMenu
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<ol start="3">
<li>组件方式使用</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">mouse-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;mouseMenuEl&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mouse-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">import</span> MouseMenu <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    MouseMenu
  },
  setup () {
    <span class="hljs-keyword">const</span> dom = ref()
    <span class="hljs-keyword">const</span> mouseMenuEl = ref()
    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
      e.preventDefault()
      <span class="hljs-keyword">const</span> { x, y } = e;
      mouseMenuEl.value.show(x,y);
    }
    <span class="hljs-keyword">return</span> {
      dom,
      mouseMenuEl,
      showMenu,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">el</span>: dom.value,
        <span class="hljs-comment">// Other Options...</span>
      } 
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h2 id="其他说明">其他说明</h2>
<p>为了性能，指令封装模式默认只对mounted钩子进行挂载。<br>当使用场景中有params参数传入菜单函数，有可能需要在组件更新时更新菜单，这时可以同时把update也挂载上。可参考以下写法:</p>
<pre><code class="language-js"><span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  directive: {
    MouseMenu: {
      ...MouseMenuDirective,
      updated: MouseMenuDirective.mounted
    }
  }
}
</code></pre>
<ul>
<li>UMD Name: <code>HowdyMouseMenu</code></li>
<li>Example in <code>ElementPlusTable</code>: <a href="https://codepen.io/leon-kfd/pen/yLMKPOP" target="_blank">Demo</a></li>
</ul>
`;export{n as default};
