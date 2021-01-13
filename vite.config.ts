import vue from '@vitejs/plugin-vue';
import marked from 'marked';
import hljs from 'highlight.js';

const markdownPlugin = (options) => {
  return {
    name: 'markdown',
    transform(code, id) {
      if (!/\.md/.test(id)) {
        return;
      }
      const result = marked(code, options);
      return `export default ${JSON.stringify(result)}`;
    }
  };
};

export default {
  plugins: [
    vue(), 
    markdownPlugin({
      highlight: (code) => {
        if (code[0] === '<' || code.includes('template') || code.includes('script')) {
          return hljs.highlight('html', code).value;
        } else if (code.includes('npm')) {
          return hljs.highlight('bash', code).value;
        } else {
          return hljs.highlight('js', code).value;
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
  build: {
    rollupOptions: {
      plugins: [
        markdownPlugin({
          highlight: (code) => {
            if (code[0] === '<' || code.includes('template') || code.includes('script')) {
              return hljs.highlight('html', code).value;
            } else if (code.includes('npm')) {
              return hljs.highlight('bash', code).value;
            } else {
              return hljs.highlight('js', code).value;
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
      ]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://kongfandong.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};
