var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowBounceDialog&quot;</span>&gt;</span>
          BounceIn / Out (Default)
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowFadeDialog&quot;</span>&gt;</span>
          FadeInLeft / FadeOutRight
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowZoomDialog&quot;</span>&gt;</span>
          ZoomIn / ZoomOut
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowFlipDialog&quot;</span>&gt;</span>
          FlipInX / FlipOutX
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;bounce&quot;</span> <span class="hljs-attr">:animation-mode</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;bounceIn / bounceOut&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;fade&quot;</span>
    <span class="hljs-attr">:animation-mode</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">animation-in</span>=<span class="hljs-string">&quot;fadeInLeft&quot;</span>
    <span class="hljs-attr">animation-out</span>=<span class="hljs-string">&quot;fadeOutRight&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;fadeInLeft / fadeOutRight&quot;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;zoom&quot;</span>
    <span class="hljs-attr">:animation-mode</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">animation-in</span>=<span class="hljs-string">&quot;zoomIn&quot;</span>
    <span class="hljs-attr">animation-out</span>=<span class="hljs-string">&quot;zoomOut&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;zoomIn / zoomOut&quot;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;flip&quot;</span>
    <span class="hljs-attr">:animation-mode</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">animation-in</span>=<span class="hljs-string">&quot;flipInX&quot;</span>
    <span class="hljs-attr">animation-out</span>=<span class="hljs-string">&quot;flipOutX&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;flipInX / flipOutX&quot;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> AnimationDialog <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/animation-dialog&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;animate.css&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: {
    AnimationDialog
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> bounce = ref();
    <span class="hljs-keyword">const</span> fade = ref();
    <span class="hljs-keyword">const</span> zoom = ref();
    <span class="hljs-keyword">const</span> flip = ref();
    <span class="hljs-keyword">return</span> {
      bounce,
      fade,
      zoom,
      flip,
      handleShowBounceDialog () {
        bounce.value.open();
      },
      handleShowFadeDialog () {
        fade.value.open();
      },
      handleShowZoomDialog () {
        zoom.value.open();
      },
      handleShowFlipDialog () {
        flip.value.open();
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.btn-list</span> {
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">30px</span>;
}
<span class="hljs-selector-class">.btn-list</span> <span class="hljs-selector-tag">li</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">15px</span> <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.btn-list</span> <span class="hljs-selector-tag">li</span> <span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span> <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">cursor</span>: pointer;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
