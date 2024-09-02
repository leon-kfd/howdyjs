import{R as t}from"./ReadmeFrame-d31c2993.js";import{d as s,_ as a,r,o as h,i as l,q as d}from"./index-c0388996.js";const n=`<h1 style="text-shadow: 3px 3px #5b9df3;color: transparent;-webkit-text-stroke-color: #262626;-webkit-text-stroke-width: 2px;font-family: unset">Howdyjs</h1>

<p>
  <a href="https://github.com/leon-kfd/howdyjs" target="_blank">
    <img src="https://img.shields.io/github/stars/leon-kfd/howdyjs?style=flat" alt="Star">
  </a>
  <a href="https://github.com/leon-kfd/howdyjs" target="_blank">
    <img src="https://img.shields.io/github/forks/leon-kfd/howdyjs?style=flat&color=%23cc8844" alt="Fork">
  </a>
  <a href="https://github.com/leon-kfd/howdyjs/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/leon-kfd/howdyjs" alt="Licensee">
  </a>
</p>

<hr>
<p><strong>一个包含Javascript插件、Vue3组件、Vue3指令的轻量工具组件库</strong><br><em>An universal component packages of javascript plugins or tools</em> </p>
<blockquote>
<p>当前该仓库已使用<code>Vue3</code> + <code>Typescript</code>，基于Vue2组件的旧版项目请前往<a href="https://github.com/leon-kfd/howdyjs/tree/howdy" target="_blank">howdy分支</a>查看。</p>
</blockquote>
<h2 id="link">Link</h2>
<ul>
<li><a href="https://github.com/leon-kfd/howdyjs" target="_blank">⚡Github</a></li>
<li><a href="https://kongfandong.cn/howdy" target="_blank">📖Document</a></li>
<li><a href="https://www.npmjs.com/search?q=%40howdyjs" target="_blank">💾NPM</a></li>
</ul>
<hr>
<h2 id="组件">组件</h2>
<ol>
<li><p><strong><a href="https://kongfandong.cn/howdy/mouse-menu">@howdyjs/mouse-menu</a></strong><br>✨自定义右键菜单Vue3组件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/resize">@howdyjs/resize</a></strong><br>✨通过拖拽更改元素尺寸插件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/to-drag">@howdyjs/to-drag</a></strong><br>✨设置Dom可拖动插件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/to-control">@howdyjs/to-control</a></strong><br>✨拖拽更改元素大小与位置插件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/img-zoom">@howdyjs/img-zoom</a></strong><br>✨图片放大插件，支持按组浏览下一张图片</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/animation-dialog">@howdyjs/animation-dialog</a></strong><br>✨动画模态框Vue3组件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/size-observer">@howdyjs/size-observer</a></strong><br>✨监听元素尺寸变化插件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/scroll">@howdyjs/scroll</a></strong><br>✨自定义滚动条插件</p>
</li>
<li><p><strong><a href="https://kongfandong.cn/howdy/standard-tabs">@howdyjs/standard-tabs</a></strong><br>✨移动端标签页Vue3组件</p>
</li>
</ol>
<hr>
<h2 id="开始使用">开始使用</h2>
<h3 id="安装">安装</h3>
<pre><code class="language-cmd"><span class="hljs-regexp">//</span> 新版已进行分包
npm i -S @howdyjs/XXX

<span class="hljs-regexp">//</span> 旧版
npm i -S howdyjs
</code></pre>
<h3 id="使用">使用</h3>
<ul>
<li>新版进行了分包，可按需安装相应的分包</li>
<li>新版的Vue组件只可在Vue3中使用，而指令做了向下兼容可同时在Vue2.X中使用</li>
<li>多数包是基于原生JS编写的，基本可直接原生使用，只是为了方便提供了Vue指令的封装形式</li>
<li>若需要在Vue2.X中使用，可使用旧版，旧版文档 <a href="https://github.com/leon-kfd/howdyjs/blob/howdy/README.md">参考此处</a></li>
</ul>
<h2 id="关于项目">关于项目</h2>
<h3 id="packages">Packages</h3>
<ul>
<li>使用<strong>Lerna</strong>进行分包管理，执行<code>npm run bootstrap</code>项目初始化</li>
<li>使用<strong>Rollup</strong>进行打包，执行<code>npm run build:lib</code>打包各个Packages</li>
<li>已更新使用<code>rollup-plugin-esbuild</code>加速打包</li>
</ul>
<h3 id="展示站点">展示站点</h3>
<ul>
<li>开发环境及展示站点使用<strong>Vite</strong>搭建，lerna初始化、安装依赖、打包Packages，完成后执行<code>npm run example</code>启动</li>
<li>站点路由文件使用<code>import.meta.glob</code>读取文件目录<strong>自动生成</strong>，原则上不需更改路由文件</li>
</ul>
<h3 id="贡献与本地开发">贡献与本地开发</h3>
<p>在项目初始化后，执行<code>npm run backup-package-json &amp;&amp; npm run example</code>可使展示站点直接引用项目中Packages的代码并实现热更新，但注意开发完后要执行<code>npm run reset-package-json</code>恢复各包的<strong>package.json</strong>。</p>
<p>原理是更改<strong>package.json</strong>的main字段指向开发的源文件，而发包的时候再将main字段入口文件指向打包后的<strong>index.js</strong>，后续有可能把这种方式更改为软连接的方式。</p>
<hr>
<p>欢迎各种建议反馈与PR，感谢使用。</p>
<h4 id="view-author-blog"><a href="https://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a></h4>
<h2 id="license">License</h2>
<p>All for <a href="https://github.com/leon-kfd/howdyjs/blob/master/LICENSE">MIT</a></p>
<p>Copyright (c) 2024 Leon.D</p>
`,i=!0,p=!0,g=s({name:"Home",components:{ReadmeFrame:t},setup(){return{readme:p&&!i?n:n.replace(/https:\/\/kongfandong.cn\/howdy/g,"./#")}}}),c={id:"Home"};function m(o,u,f,k,b,w){const e=r("readme-frame");return h(),l("div",c,[d(e,{readme:o.readme},null,8,["readme"])])}const _=a(g,[["render",m]]);export{_ as default};
