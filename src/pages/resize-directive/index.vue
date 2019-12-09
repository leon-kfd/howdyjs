<template>
  <div id="example">
    <div class="nav">
      <p class="nav-title">Document</p>
      <ul class="nav-list">
        <li class="nav-listitem"
            v-for="(item,index) in readmeList"
            :key="index"
            :class="{active: page === `${mainName}-readme`}"
            @click="$router.push({name: `${mainName}-readme`})">
          <p class="title">#.{{item.name}}</p>
          <p class="introduce">{{item.introduce}}</p>
        </li>
      </ul>
      <p class="nav-title">Example</p>
      <ul class="nav-list">
        <li class="nav-listitem"
            v-for="(item,index) in exampleList"
            :key="index"
            :class="{active: page == `${mainName}-example${index+1}`}"
            @click="handleNavClick(index)">
          <p class="title">{{index + 1}}.{{item.name}}</p>
          <p class="introduce">{{item.introduce}}</p>
        </li>
      </ul>
    </div>
    <div class="content"
         v-if="page!==`${mainName}-readme`">
      <div class="example"
           ref="tableExample">
        <p class="title">Example</p>
        <div class="example-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="code"
           v-loading="codeLoading"
           v-resize:left="resizeOptions"
           @resize="handleResize">
        <p class="title">Code</p>
        <div v-html="code"
             class="code-box"></div>
      </div>
    </div>
    <div class="readme-content"
         v-if="page===`${mainName}-readme`">
      <router-view></router-view>
    </div>
    <div class="copyright">Copyright &copy; <a href="mailto:kfd_personal@163.com">Leon.KFD</a></div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code) => hljs.highlight('html', code).value,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
export default {
  data () {
    return {
      mainName: 'resize',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Flex Basic',
          introduce: 'Flex布局-默认'
        },
        {
          name: 'Flex Multiple',
          introduce: 'Flex布局-两列'
        },
        {
          name: 'Absolute Basic',
          introduce: 'Absolute定位布局'
        },
        {
          name: 'All Direction',
          introduce: 'Abosulute-全方向'
        }
      ],
      page: '',
      code: '',
      codeLoading: false,
      resizeOptions: {
        zIndex: 9999,
        tipLineColor: '#889'
      }
    }
  },
  mounted () {
    this.loadCode()
  },
  methods: {
    handleNavClick (index) {
      this.$router.push({ name: `${this.mainName}-example${index + 1}` })
    },
    async loadCode () {
      try {
        this.codeLoading = true
        let code = await import(`@/pages/${this.mainName}-directive/code/${this.page.replace(this.mainName + '-', '')}`)
        this.code = marked(code.default)
        this.codeLoading = false
      } catch (e) {
        console.log(e)
      }
    },
    handleResize (e) {
      let el = e.target
      el.style.width = `${e.resizeWidthPercent}%`
      this.$refs.tableExample.style.width = `${100 - e.resizeWidthPercent}%`
    }
  },
  watch: {
    '$route.name': {
      handler (val) {
        this.page = val
        this.loadCode()
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: 220px;
  left: 0;
  top: 0;
  height: 100vh;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  z-index: 9999;
  overflow-y: auto;
  padding-bottom: 40px;
  .nav-title {
    font-size: 12px;
    color: #889;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 20px;
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    .nav-listitem {
      height: 70px;
      padding: 5px 10px;
      cursor: pointer;
      &.active {
        background: #f3fbff;
        border-right: 4px solid rgb(91, 157, 243);
      }
      &:hover {
        background: #f3fbff;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        line-height: 34px;
        text-transform: capitalize;
      }
      .introduce {
        font-size: 14px;
        color: #667;
        line-height: 26px;
        width: 100%;
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.readme-content {
  margin-left: 220px;
}
.content {
  margin-left: 220px;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  .example {
    height: 100vh;
    // min-width: 600px;
    width: 60%;
    .example-content {
      height: calc(100vh - 50px);
      overflow-y: auto;
      padding: 10px 15px;
      padding-top: 0;
    }
  }
  .code {
    height: 100vh;
    // min-width: 400px;
    width: 40%;
    // background: #f7f7f9;
    color: #abb2bf;
    background: #282c34;
    .title {
      color: #c8c8c8;
    }
    .code-box {
      height: calc(100vh - 50px);
      padding: 10px 15px;
      padding-top: 0;
      overflow-y: auto;
      font-size: 14px;
    }
  }
  .example,
  .code {
    .title {
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      padding: 0 20px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 10px;
        top: 15px;
        height: 20px;
        border-left: 4px solid rgb(91, 157, 243);
      }
    }
  }
}
.copyright {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 210px;
  text-align: center;
  font-size: 13px;
  color: #889;
  line-height: 36px;
  z-index: 10000;
  background: #fff;
  a {
    color: #f2c299;
    text-decoration: none;
  }
}
</style>
