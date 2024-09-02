const s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
      {{ !isMobile ? &#x27;Right click this box&#x27; : &#x27;Long press this box&#x27; }}.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="handlebars"><span class="xml">
// import { onMounted, onUnmounted } from &#x27;vue&#x27;;
import { MouseMenuDirective } from &#x27;../../../../packages/mouse-menu&#x27;;
import type { CustomMouseMenuOptions} from &#x27;../../../../packages/mouse-menu&#x27;;
const vMouseMenu = MouseMenuDirective
// onMounted(() =&gt; {
//   const cssLink = document.createElement(&#x27;link&#x27;);
//   cssLink.id = &#x27;fontawesomeCDN&#x27;;
//   cssLink.rel  = &#x27;stylesheet&#x27;;
//   cssLink.type = &#x27;text/css&#x27;;
//   cssLink.href = &#x27;https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css&#x27;;
//   document.querySelector(&#x27;head&#x27;)?.appendChild(cssLink);
// })
// onUnmounted(() =&gt; {
//   const cssLink = document.querySelector(&#x27;#fontawesomeCDN&#x27;);
//   cssLink?.parentNode?.removeChild(cssLink);
// })
const isMobile = &#x27;ontouchstart&#x27; in window
const options: CustomMouseMenuOptions = {
  useLongPressInMobile: true,
  hasIcon: true,
  // iconType: &#x27;font-icon&#x27;,
  iconType: &#x27;svg-icon&#x27;,
  menuItemCss: {
    iconSize: &#x27;16px&#x27;,
  },
  menuList: [
    {
      label: &#x27;打开&#x27;,
      tips: &#x27;Open&#x27;,
      // icon: &#x27;fas fa-folder-open&#x27;,
      icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;,
      fn: (...args:[]) =&gt; console.log(&#x27;open&#x27;, args)
    },
    {
      label: &#x27;编辑&#x27;,
      tips: &#x27;Edit&#x27;,
      // icon: &#x27;fas fa-pencil-alt&#x27;,
      icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;,
      fn: (...args:[]) =&gt; console.log(&#x27;edit&#x27;, args)
    },
    {
      label: &#x27;删除&#x27;,
      tips: &#x27;Delete&#x27;,
      // icon: &#x27;fas fa-trash-alt&#x27;,
      icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;,
      fn: (...args:[]) =&gt; console.log(&#x27;delete&#x27;, args)
    },
    {
      label: &#x27;分享&#x27;,
      icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;,
      children: [
        {
          label: &#x27;Facebook&#x27;,
          icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;
        },
        {
          label: &#x27;Twitter&#x27;,
          icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M15.3499 5.55005C13.7681 5.55005 12.4786 6.81809 12.4504 8.39658L12.4223 9.97162C12.4164 10.3029 12.143 10.5667 11.8117 10.5608C11.7881 10.5604 11.7646 10.5586 11.7413 10.5554L10.1805 10.3426C8.12699 10.0625 6.15883 9.11736 4.27072 7.54411C3.67275 10.8538 4.84 13.1472 7.65342 14.916L9.40041 16.0142C9.68095 16.1906 9.7654 16.561 9.58903 16.8415C9.54861 16.9058 9.49636 16.9619 9.43504 17.0067L7.84338 18.1696C8.78973 18.229 9.68938 18.1875 10.435 18.0387C15.1526 17.0973 18.2897 13.547 18.2897 7.69109C18.2897 7.213 17.2774 5.55005 15.3499 5.55005ZM10.4507 8.3609C10.4983 5.69584 12.6735 3.55005 15.3499 3.55005C16.7132 3.55005 17.9465 4.10683 18.8348 5.0054C19.5462 5.00005 20.1514 5.17991 21.5035 4.35967C21.1693 6.00005 21.0034 6.71201 20.2897 7.69109C20.2897 15.3326 15.5926 19.0489 10.8264 20C7.5587 20.6522 2.80646 19.5815 1.44531 18.1587C2.13874 18.1054 4.95928 17.802 6.58895 16.6092C5.20994 15.6987 -0.278631 12.4681 3.32772 3.78642C5.02119 5.76307 6.73797 7.10855 8.47807 7.82286C9.63548 8.29798 9.91978 8.2885 10.4507 8.3609Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;
        },
        {
          label: &#x27;Bilibili&#x27;,
          icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;
        },
        {
          label: &#x27;Wechat&#x27;,
          icon: &#x27;<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">&quot;0 0 24 24&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;currentColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">&quot;M8.66725 11.5114C7.94997 11.5114 7.38211 10.9432 7.38211 10.2255C7.38211 9.50784 7.94997 8.93968 8.66725 8.93968C9.38454 8.93968 9.95239 9.50784 9.95239 10.2255C9.95239 10.9432 9.38454 11.5114 8.66725 11.5114ZM15.3339 11.5114C14.6166 11.5114 14.0488 10.9432 14.0488 10.2255C14.0488 9.50784 14.6166 8.93968 15.3339 8.93968C16.0512 8.93968 16.6191 9.50784 16.6191 10.2255C16.6191 10.9432 16.0512 11.5114 15.3339 11.5114ZM6.82289 19.2153L7.53841 18.7789C8.34812 18.2851 9.30697 18.095 10.2438 18.2426C10.4553 18.2759 10.6292 18.3015 10.7634 18.3192C11.1696 18.3728 11.5828 18.4 12.0006 18.4C16.4213 18.4 19.9006 15.3776 19.9006 11.8C19.9006 8.22235 16.4213 5.19995 12.0006 5.19995C7.57986 5.19995 4.10059 8.22235 4.10059 11.8C4.10059 13.1655 4.60024 14.4728 5.53227 15.5809C5.58056 15.6383 5.65277 15.7177 5.74666 15.8155C6.54199 16.6438 6.94301 17.7739 6.84765 18.9182L6.82289 19.2153ZM6.19286 21.9423C6.00989 22.0566 5.79484 22.1087 5.57981 22.0908C5.02944 22.045 4.62045 21.5616 4.66631 21.0112L4.85456 18.7521C4.90224 18.1799 4.70173 17.6149 4.30407 17.2008C4.1819 17.0735 4.08111 16.9627 4.0017 16.8683C2.80622 15.447 2.10059 13.6951 2.10059 11.8C2.10059 7.0503 6.53297 3.19995 12.0006 3.19995C17.4682 3.19995 21.9006 7.0503 21.9006 11.8C21.9006 16.5496 17.4682 20.4 12.0006 20.4C11.4911 20.4 10.9906 20.3665 10.5018 20.302C10.3491 20.2819 10.1593 20.254 9.93256 20.2182C9.46412 20.1444 8.9847 20.2395 8.57985 20.4864L6.19286 21.9423Z&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>&#x27;
        }
      ]
    }
  ]
}
</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-built_in">min</span>(<span class="hljs-number">90vw</span>, <span class="hljs-number">500px</span>);
  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
