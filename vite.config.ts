import vue from '@vitejs/plugin-vue';
import marked from 'marked';
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('html', html);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

const isHashRouterMode = process.env.VITE_ROUTER_MODE === 'hash';
const basePath = isHashRouterMode ? './' : '/howdy/';
const markdownPlugin = (options: any) => {
  return {
    name: 'markdown',
    transform(code: string, id: string) {
      if (!/\.md/.test(id)) {
        return;
      }
      const result = marked(code, options);
      return `export default ${JSON.stringify(result)}`;
    }
  };
};

export default {
  base: basePath,
  plugins: [
    vue(), 
    markdownPlugin({
      highlight: (code: string) => hljs.highlightAuto(code).value
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://kongfandong.cn',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
};
