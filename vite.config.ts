import vue from '@vitejs/plugin-vue';
import { parse } from 'marked';
import hljs from 'highlight.js';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'

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
          return hljs.highlight(code, { language: 'html' }).value;
        } else if (code.includes('lang="ts"')) {
          return hljs.highlight(code, { language: 'typescript' }).value;
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
    }),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: "generateSW",
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'logo_192x192.png'],
      manifest: {
        name: "Howdyjs",
        short_name: "Howdyjs",
        description: "Howdyjs文档",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
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
