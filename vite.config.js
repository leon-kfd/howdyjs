import vue from '@vitejs/plugin-vue'
import marked from 'marked'
import hljs from 'highlight.js'

/**
 * @type {import('vite').UserConfig}
 */
const markdownPlugin = (options) => {
  return {
    name: 'markdown',
    transform(code, id) {
      if (!/\.md/.test(id)) {
        return
      }
      const result = marked(code, options)
      return 'export default ' + '`' + result +'`'
    }
  }
}

export default {
  plugins: [
    vue(), 
    markdownPlugin({
      highlight: (code) => {
        if (code[0] === '<' || code.includes('template') || code.includes('script')) {
          return hljs.highlight('html', code).value
        } else if (code.includes('npm')) {
          return hljs.highlight('bash', code).value
        } else {
          return hljs.highlight('js', code).value
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
