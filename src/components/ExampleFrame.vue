<template>
  <div id="example">
    <input type="checkbox"
           id="navBtnActive"
           v-model="navActive"
           style="display:none">
    <label class="nav-btn"
           for="navBtnActive">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="header-tips">
      <p class="title">{{activeTitle}}</p>
    </div>
    <div class="nav-mask"
         :class="{active: navActive}"
         @click.self="navActive = false"></div>
    <div class="nav"
         :class="{active: navActive}">
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
      <div class="copyright">
        <img :src="homeImg"
             @click="$router.push('/')"
             class="home-img">Copyright &copy; <a href="mailto:kfd_personal@163.com">Leon.KFD</a>
      </div>
    </div>
    <div class="content"
         v-if="page!==`${mainName}-readme`">
      <div class="content-nav">
        <div class="content-nav-box">
          <div class="content-nav-item"
               :class="{active: contentActive === 1}"
               @click="contentActive = 1">Example</div>
          <div class="content-nav-item"
               :class="{active: contentActive === 2}"
               @click="contentActive = 2">Code</div>
        </div>
      </div>
      <div class="example"
           :class="{active: contentActive === 1}"
           ref="tableExample">
        <p class="title">Example</p>
        <div class="mobile-warning"
             v-if="showMobileWarning">
          <div class="mobile-warning-content">插件功能不支持移动端，请使用PC端浏览</div>
        </div>
        <div class="example-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="code"
           :class="{active: contentActive === 2}"
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
  </div>
</template>

<script>
export default {
  name: 'ExampleFrame',
  props: {
    mainName: String,
    readmeList: Array,
    exampleList: Array,
    disabledMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      page: '',
      code: '',
      codeLoading: false,
      resizeOptions: {
        zIndex: 9999,
        tipLineColor: '#889'
      },
      homeImg: require('@/assets/Home.svg'),
      navActive: false,
      contentActive: 1
    }
  },
  computed: {
    activeTitle () {
      if (this.page === `${this.mainName}-readme`) {
        return `#.README`
      } else {
        let index = this.exampleList.findIndex((item, index) => this.page === `${this.mainName}-example${index + 1}`)
        return index > -1 ? `${index + 1}.${this.exampleList[index].name}` : ``
      }
    },
    showMobileWarning () {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      return isMobile && this.disabledMobile
    }
  },
  methods: {
    handleNavClick (index) {
      this.$router.push({ name: `${this.mainName}-example${index + 1}` })
    },
    async loadCode () {
      try {
        this.codeLoading = true
        let code = await import(`@/code/${this.mainName}/${this.page.replace(this.mainName + '-', '')}.md`)
        this.code = code.default
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
        this.navActive = false
        this.contentActive = 1
        if (val.includes('example')) {
          this.loadCode()
        }
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
    margin-top: 36px;
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
    height: 100%;
    width: 60%;
    .mobile-warning {
      width: 100%;
      padding: 8px 10px;
      box-sizing: border-box;
      .mobile-warning-content {
        width: 100%;
        height: 30px;
        line-height: 28px;
        font-size: 14px;
        background: #fcede0;
        color: #ed9810;
        border: 1px solid #e6c288;
        border-radius: 4px;
        padding: 0 8px;
      }
    }
    .example-content {
      height: calc(100% - 50px);
      overflow-y: auto;
      padding: 10px 15px;
      padding-top: 0;
    }
  }
  .code {
    height: 100%;
    width: 40%;
    color: #abb2bf;
    background: #282c34;
    .title {
      color: #c8c8c8;
    }
    .code-box {
      height: calc(100% - 50px);
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
        content: '';
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
  padding-left: 50px;
  font-size: 13px;
  color: #889;
  line-height: 36px;
  z-index: 10000;
  background: #fff;
  a {
    color: #f2c299;
    text-decoration: none;
  }
  .home-img {
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    left: 25px;
    top: 10px;
    color: rgb(91, 157, 243);
  }
}

.header-tips,
.nav-btn,
.nav-mask,
.content-nav {
  display: none;
}

@media screen and (max-width: 768px) {
  .readme {
    font-size: 13px;
  }
  .nav {
    transform: translateX(-230px);
    transition: transform 0.4s ease-in-out;
    &.active {
      transform: translateX(0);
    }
  }
  .content,
  .readme-content {
    margin-left: 0;
    margin-top: 40px;
    height: calc(100vh - 40px);
  }
  .content {
    flex-wrap: wrap;
    overflow-y: auto;
    .example,
    .code {
      width: 100% !important;
      height: auto;
      display: none;
      &.active {
        display: block;
      }
      .title {
        display: none;
      }
      .example-content,
      .code-box {
        height: auto;
        padding-top: 10px;
        padding-bottom: 40px;
      }
    }
  }

  .header-tips {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 20;
    box-shadow: 0 0 10px #ccc;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    text-transform: capitalize;
    padding-left: 48px;
  }
  .nav-btn {
    display: block;
    position: fixed;
    left: 4px;
    top: 6px;
    cursor: pointer;
    z-index: 10001;
    .line {
      width: 28px;
      height: 4px;
      background: #262626;
      margin: 4px;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  #navBtnActive:checked {
    & + .nav-btn {
      .line:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      .line:nth-child(2) {
        visibility: hidden;
      }
      .line:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
  .nav-mask {
    &.active {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9998;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .content-nav {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    z-index: 20;
    .content-nav-box {
      display: flex;
      flex-wrap: nowrap;
      height: 36px;
      width: 100%;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 0 5px #ccc;
      padding: 2px 3px;
      .content-nav-item {
        width: 100%;
        text-align: center;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #262626;
        flex: 1;
        border-radius: 16px;
        &.active {
          background: #d3e7fa;
          color: #0a7bef;
        }
      }
    }
  }
}
</style>
<style>
@media screen and (max-width: 768px) {
  .readme {
    font-size: 13px;
  }
}
</style>
