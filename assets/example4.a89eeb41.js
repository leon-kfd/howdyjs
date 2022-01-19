var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">v-to-control</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;control&quot;</span>
      @<span class="hljs-attr">todragend</span>=<span class="hljs-string">&quot;handleToDragEnd&quot;</span>
      @<span class="hljs-attr">tocontrolend</span>=<span class="hljs-string">&quot;handleToControlEnd&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>isLock: {{ isLock }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isLock = !isLock&quot;</span>&gt;</span>
      Toggle Lock
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ToControlDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-control&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-string">&#x27;to-control&#x27;</span>: ToControlDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> arrowBase64 = <span class="hljs-string">&#x27;url(\\&#x27;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3Mjc4NzU0NTQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzNjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF8xdWhyOHJpMHBrNS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfMXVocjhyaTBwazUuc3ZnI2ljb25mb250IikgZm9ybWF0KCJzdmciKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTU0Ljc1MiAyMDIuNDEwNjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDAuMTI4IDUwLjEzMzMzM2wxNTUuMzA2NjY3IDE1Ni45NzA2NjcgMy41ODQgMy4xNTczMzNhMzQuNDMyIDM0LjQzMiAwIDAgMCA0NS43Mzg2NjYtMy4yODUzMzMgMzUuNjI2NjY3IDM1LjYyNjY2NyAwIDAgMC0wLjA4NTMzMy01MC4wOTA2NjdsLTE1NS4zMDY2NjctMTU3LjAxMzMzMy0zLjU0MTMzMy0zLjExNDY2N2EzNC41NiAzNC41NiAwIDAgMC00NS44MjQgMy4yNDI2Njd6IG0tMzk2LjIwMjY2NyAyNzQuNDMyQTM1LjI4NTMzMyAzNS4yODUzMzMgMCAwIDAgMTI4IDUxMmMwIDE5LjU0MTMzMyAxNS42NTg2NjcgMzUuNDEzMzMzIDM0LjkwMTMzMyAzNS40MTMzMzNoNjEzLjY3NDY2N2wtMjIxLjY5NiAyMjQuMDQyNjY3LTMuMTU3MzMzIDMuNjI2NjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDMuMDcyIDQ2LjUwNjY2NiAzNC41NiAzNC41NiAwIDAgMCA0OS4zMjI2NjYgMC4wODUzMzRsMjgxLjYtMjg0LjU4NjY2NyAzLjExNDY2Ny0zLjU4NGEzNS42NjkzMzMgMzUuNjY5MzMzIDAgMCAwIDQuNTIyNjY3LTM0Ljk4NjY2NyAzNC44NTg2NjcgMzQuODU4NjY3IDAgMCAwLTMyLjI1Ni0yMS45MzA2NjZIMTYyLjkwMTMzM2wtNC4zNTIgMC4yNTZ6IiBmaWxsPSIjMjAwRTMyIiBwLWlkPSI1MzYzIj48L3BhdGg+PC9zdmc+\\&#x27;)&#x27;</span>;
    <span class="hljs-keyword">const</span> isLock = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> disabled = <span class="hljs-function">() =&gt;</span> isLock.value;
    <span class="hljs-keyword">return</span> {
      isLock,
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">isAbsolute</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">positionMode</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">moveCursor</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">arrowOptions</span>: {
          <span class="hljs-attr">padding</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">size</span>: <span class="hljs-number">20</span>,
          <span class="hljs-attr">lineWidth</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">background</span>: <span class="hljs-string">\`<span class="hljs-subst">\${arrowBase64}</span> 0 0/20px 20px\`</span>
        },
        disabled
      },
      <span class="hljs-function"><span class="hljs-title">handleToDragEnd</span>(<span class="hljs-params">e: any</span>)</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;todragend&#x27;</span>, e);
      },
      <span class="hljs-function"><span class="hljs-title">handleToControlEnd</span>(<span class="hljs-params">e: any</span>)</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;tocontrolend&#x27;</span>, e);
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#262626</span>;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#eaffe0</span>;
}
<span class="hljs-selector-class">.control</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#dd9944</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">184</span>, <span class="hljs-number">202</span>, <span class="hljs-number">235</span>);
  <span class="hljs-attribute">top</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">100px</span>);
  <span class="hljs-attribute">left</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">100px</span>);
  :deep {
    .to-control-arrow {
      transform: <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
      <span class="hljs-attribute">animation</span>: bounce <span class="hljs-number">2s</span> ease-in-out <span class="hljs-number">1s</span> infinite;
      // \u4EE5\u4E0B\u4EE3\u7801\u65F6\u4F7F\u7528\u4F2A\u7C7B\u6269\u5927\u7BAD\u5934\u63A7\u5236\u533A\u57DF
      &amp;:after {
        content: <span class="hljs-string">&#x27;&#x27;</span>;
        <span class="hljs-attribute">position</span>: absolute;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">200%</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">200%</span>;
        <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);
      }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-keyword">@keyframes</span> bounce {
  <span class="hljs-selector-tag">from</span>,
  <span class="hljs-number">20%</span>,
  <span class="hljs-number">53%</span>,
  <span class="hljs-number">80%</span>,
  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.215</span>, <span class="hljs-number">0.61</span>, <span class="hljs-number">0.355</span>, <span class="hljs-number">1</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
  }

  <span class="hljs-number">40%</span>,
  <span class="hljs-number">43%</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">12px</span>, -<span class="hljs-number">12px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
  }

  <span class="hljs-number">70%</span> {
    <span class="hljs-attribute">animation-timing-function</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.755</span>, <span class="hljs-number">0.05</span>, <span class="hljs-number">0.855</span>, <span class="hljs-number">0.06</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">6px</span>, -<span class="hljs-number">6px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
  }

  <span class="hljs-number">90%</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">1px</span>, -<span class="hljs-number">1px</span>, <span class="hljs-number">0</span>) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
