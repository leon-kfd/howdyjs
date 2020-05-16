<template>
  <div id="API">
    <div class="container">
      <div class="readme"
           v-html="transformReadme"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'readmeFrame',
  props: {
    readme: String
  },
  computed: {
    transformReadme () {
      return this.readme.replace(/<table>(.|\n)*?<\/table>/g, '<div class="table-wrapper">$&</div>')
    }
  }
}
</script>
<style lang="scss" scoped>
#API {
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}
</style>
<style lang='scss'>
.table-wrapper {
  width: 100%;
  overflow: auto;
}
.readme {
  table {
    width: 100%;
    max-width: 65em;
    max-width: 100vw;
    border: 1px solid #c0c2e0;
    margin: 15px auto;
    border-collapse: collapse;
    empty-cells: show;
  }
  table th,
  table td {
    height: 35px;
    border: 1px solid #c0c2e0;
    padding: 5px 10px;
    min-width: 70px;
  }
  table th {
    font-weight: bold;
    text-align: center !important;
    background: rgb(235, 245, 255);
  }
  table tbody tr:nth-child(2n) {
    background: rgb(245, 250, 255);
  }
  // table tr:hover {
  //   background: #efefef;
  // }
  h1 {
    font-size: 2.2em;
    font-weight: 700;
    line-height: 1.1;
    padding-top: 16px;
    margin-bottom: 4px;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5em;
    margin-top: 2.2em;
    margin-bottom: 4px;
  }
  h2 {
    font-size: 1.4em;
    margin: 40px 10px 20px 0;
    padding-left: 9px;
    border-left: 6px solid #5b9df3;
    font-weight: 700;
    line-height: 1.4;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px;
  }
  h4 {
    font-weight: 700;
    font-size: 1.1em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px;
  }
  h5,
  h6 {
    font-size: 0.9em;
  }
  h5 {
    font-weight: bold;
  }
  h6 {
    font-weight: normal;
    color: #aaa;
  }
  img {
    width: 100%;
    border-radius: 5px;
    display: block;
    margin-bottom: 15px;
    height: auto;
  }
  dl,
  ol,
  ul {
    margin-top: 12px;
    margin-bottom: 20px;
    padding-left: 20px;
    line-height: 1.8;
  }
  p {
    margin: 0 0 20px;
    padding: 0;
    line-height: 1.8;
  }
  a {
    color: #5b9df3;
    text-decoration: none;
  }
  a:hover {
    color: #5b9df3;
    text-decoration: underline;
  }
  a:focus {
    outline-offset: -2px;
  }
  blockquote {
    font-size: 1em;
    font-style: normal;
    padding: 30px 38px;
    margin: 0 0 15px;
    position: relative;
    line-height: 1.8;
    text-indent: 0;
    border: none;
    color: #888;
  }
  blockquote:before {
    content: '“';
    left: 12px;
    top: 0;
    color: #e0e0e0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
  }
  blockquote:after {
    content: '”';
    right: 12px;
    bottom: -26px;
    color: #e0e0e0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
    bottom: -31px;
  }
  strong,
  dfn {
    font-weight: 700;
  }
  em,
  dfn {
    font-style: italic;
    font-weight: 400;
  }
  del {
    text-decoration: line-through;
  }
  /*code {font-size:90%;}*/

  /*pre {text-align:left; overflow-x: scroll; color: #257fa0; background: #f6f6f6; padding: 10pt 15pt; border-radius: 3px; border: solid 1px #e2e2e2;}*/

  pre {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857;
    word-break: break-all;
    word-wrap: break-word;
    border-radius: 4px;
    white-space: pre-wrap;
    display: block;
    background: #282c34;
    padding: 10px 20px;
    border: none;
    margin-bottom: 25px;
    color: #cacaca;
    font-family: Courier, sans-serif;
  }
  figure {
    margin: 1em 0;
  }
  figcaption {
    font-size: 0.75em;
    padding: 0.5em 2em;
    margin-bottom: 2em;
  }
  figure img {
    margin-bottom: 0px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  ol p,
  ul p {
    margin-bottom: 0px;
  }
  li {
    margin-bottom: 0.75em;
    margin-top: 0.75em;
  }
  ol#footnotes {
    font-size: 0.95em;
    padding-top: 1em;
    margin-top: 1em;
    margin-left: 0;
    border-top: 1px solid #eaeaea;
    counter-reset: footer-counter;
    list-style: none;
    color: #555;
    padding-left: 5%;
    margin: 20px 0;
  }
  ol#footnotes li {
    margin-bottom: 10px;
    margin-left: 16px;
    font-weight: 400;
    line-height: 2;
    list-style-type: none;
  }
  ol#footnotes li:before {
    content: counter(footer-counter) '. ';
    counter-increment: footer-counter;
    font-weight: 800;
    font-size: 0.95em;
  }
  @keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  @-webkit-keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  a:target,
  ol#footnotes li:target,
  sup a:target {
    animation-name: highfade;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    -webkit-animation-name: highfade;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
  }
  a:target {
    border: 0;
    outline: 0;
  }
}
.language-js {
  .hljs-attr,
  .hljs-attribute,
  .hljs-builtin-name {
    color: #ee9263;
  }
  .hljs-string,
  .hljs-meta-string {
    color: #bebceb;
  }
  .hljs-number,
  .hljs-class {
    color: #c1e6a8;
  }
}
</style>
