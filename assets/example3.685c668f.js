export default'<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\n      Right Click This box.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@fortawesome/fontawesome-free/css/all.min.css&#x27;</span>;\n<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/mouse-menu&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">directives</span>: {\n    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">options</span>: {\n        <span class="hljs-attr">hasIcon</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">iconType</span>: <span class="hljs-string">&#x27;font-icon&#x27;</span>,\n        <span class="hljs-attr">menuList</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;打开&#x27;</span>,\n            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Open&#x27;</span>,\n            <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;fas fa-folder-open&#x27;</span>,\n            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;open&#x27;</span>, args)\n          },\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;编辑&#x27;</span>,\n            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Edit&#x27;</span>,\n            <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;fas fa-pencil-alt&#x27;</span>,\n            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;edit&#x27;</span>, args)\n          },\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;删除&#x27;</span>,\n            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Delete&#x27;</span>,\n            <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;fas fa-trash-alt&#x27;</span>,\n            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;delete&#x27;</span>, args)\n          },\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;重命名&#x27;</span>,\n            <span class="hljs-attr">tips</span>: <span class="hljs-string">&#x27;Rename&#x27;</span>,\n            <span class="hljs-attr">fn</span>: <span class="hljs-function">(<span class="hljs-params">...args:[]</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;rename&#x27;</span>, args)\n          }\n        ]\n      }\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.box</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;\n}\n<span class="hljs-selector-class">.text</span> {\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';