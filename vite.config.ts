import vue from '@vitejs/plugin-vue';
import { parse } from 'marked';
import hljs from 'highlight.js';
import path from 'path';

const isHashRouterMode = process.env.VITE_ROUTER_MODE === 'hash';
const basePath = isHashRouterMode ? './' : '/howdy/';
const markdownPlugin = (options: any) => {
  return {
    name: 'markdown',
    transform(code: string, id: string) {
      if (!/\.md/.test(id)) {
        return;
      }
      const result = parse(code, options);
      return `export default ${JSON.stringify(result)}`;
    }
  };
};

export default {
  base: basePath,
  resolve: {
    alias: {
      '@howdyjs': path.resolve(__dirname, 'packages')
    }
  },
  plugins: [
    vue(), 
    markdownPlugin({
      highlight: (code: string) => {
        if (code.includes('template')) {
          return hljs.highlight('html', code).value;
        } else if (code.includes('lang="ts"')) {
          return hljs.highlight('typescript', code).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      },
      // highlight: (code) => hljs.highlightAuto(code).value,
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
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
