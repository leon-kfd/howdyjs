<template>
  <div id="example">
    <input
      id="navBtnActive"
      v-model="navActive"
      type="checkbox"
      style="display:none"
    >
    <label
      class="nav-btn"
      for="navBtnActive"
    >
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </label>
    <div class="header-tips">
      <p class="title">
        {{ activeTitle }}
      </p>
    </div>
    <div
      class="nav-mask"
      :class="{active: navActive}"
      @click.self="navActive = false"
    />
    <div
      class="nav"
      :class="{active: navActive}"
    >
      <div class="nav-content">
        <div class="logo">
          <h1
            id="howdy"
            @click="$router.push('/')"
          >
            <svg class="back" viewBox="0 0 1024 1024">
              <path d="M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z"></path>
            </svg>
            <span class="text">Howdyjs</span>
          </h1>
          <p id="moduleName">
            {{ moduleName }}
          </p>
        </div>
        <p class="nav-title">
          Document
        </p>
        <ul class="nav-list">
          <li
            v-for="(item,index) in readmeList"
            :key="index"
            class="nav-listitem"
            :class="{active: page === `${mainName}-readme`}"
            @click="$router.push({name: `${mainName}-readme`})"
          >
            <p class="title">
              #.{{ item.name }}
            </p>
            <p class="introduce">
              {{ item.introduce }}
            </p>
          </li>
        </ul>
        <p class="nav-title">
          Example
        </p>
        <ul class="nav-list">
          <li
            v-for="(item,index) in exampleList"
            :key="index"
            class="nav-listitem"
            :class="{active: page == `${mainName}-example${index+1}`}"
            @click="handleNavClick(index)"
          >
            <p class="title">
              {{ index + 1 }}.{{ item.name }}
            </p>
            <p class="introduce">
              {{ item.introduce }}
            </p>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <img
          src="/images/Home.svg"
          class="home-img"
          alt="Home"
          title="Home"
          @click="$router.push('/')"
        >
        <img
          src="/images/github.svg"
          class="github-img"
          alt="Github"
          title="Github"
          @click="turnToGithub"
        >
        <a
          href="http://kongfandong.cn/blog/about"
          target="_blank"
          title="About Author"
          class="link"
        >LEON.KFD</a>
        <span class="text">&copy; 2025 </span>
      </div>
    </div>
    <div
      v-if="page!==`${mainName}-readme`"
      class="content"
    >
      <div class="content-nav">
        <div class="content-nav-box">
          <div
            class="content-nav-item"
            :class="{active: contentActive === 1}"
            @click="contentActive = 1"
          >
            Example
          </div>
          <div
            class="content-nav-item"
            :class="{active: contentActive === 2}"
            @click="contentActive = 2"
          >
            Code
          </div>
        </div>
      </div>
      <div
        ref="tableExample"
        class="example"
        :class="{active: contentActive === 1}"
      >
        <p class="title">
          Example
        </p>
        <div
          v-if="showMobileWarning"
          class="mobile-warning"
        >
          <div class="mobile-warning-content">
            插件功能不支持移动端，请使用PC端浏览
          </div>
        </div>
        <div class="example-content">
          <router-view />
        </div>
      </div>
      <div
        v-resize:left="resizeOptions"
        class="code"
        :class="{active: contentActive === 2}"
        @resize="handleResize"
      >
        <p class="title">
          Code
        </p>
        <div
          class="code-box"
          v-html="code"
        />
      </div>
    </div>
    <div
      v-if="page===`${mainName}-readme`"
      class="readme-content"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive, PropType, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ResizeEvent, ResizeDirective } from '../../packages/resize';
interface Example {
  name: string,
  introduce: string
}
export default defineComponent({
  name: 'ExampleFrame',
  directives: {
    resize: ResizeDirective
  },
  props: {
    mainName: {
      type: String,
      default: ''
    },
    readmeList: {
      type: Array,
      default: () => []
    },
    exampleList: {
      type: Array as PropType<Example[]>,
      default: () => []
    },
    disabledMobile: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const tableExample = ref();
    const page = ref('');
    const code = ref('');
    const codeLoading = ref(false);
    const resizeOptions = reactive({
      zIndex: 9999,
      tipLineColor: '#889'
    });
    const navActive = ref(false);
    const contentActive = ref(1);
    const activeTitle = computed(() => {
      if (page.value === `${props.mainName}-readme`) {
        return '#.README';
      } else {
        let index = props.exampleList.findIndex((item, index) => page.value === `${props.mainName}-example${index + 1}`);
        return index > -1 ? `${index + 1}.${props.exampleList[index].name}` : '';
      }
    });
    const showMobileWarning = computed(() => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
      return isMobile && props.disabledMobile;
    });
    const moduleName = computed(() => props.mainName.split('-').map(name => name.slice(0, 1).toUpperCase() + name.slice(1)).join(' '));
    const handleNavClick = (index:number) => {
      router.push({ name: `${props.mainName}-example${index + 1}` });
    };
    const loadCode = async () => {
      codeLoading.value = true;
      let codeText = await import(`../code/${props.mainName}/${page.value.replace(props.mainName + '-', '')}.md`);
      code.value = codeText.default.replace(/\.\.\/\.\.\/\.\.\/\.\.\/packages/g, '@howdyjs');
      codeLoading.value = false;
    }; 
    const handleResize = (e:ResizeEvent) => {
      let el = e.target as HTMLElement;
      if (el && e.resizeWidthPercent) {
        el.style.width = `${e.resizeWidthPercent}%`;
        tableExample.value.style.width = `${100 - e.resizeWidthPercent}%`;
      }
    };
    watch(() => route.name, (val) => {
      if (val && typeof val === 'string') {
        page.value = val;
        navActive.value = false;
        contentActive.value = 1;
        if (val.includes('example')) {
          loadCode();
        }
      }
    }, {
      immediate: true
    });

    return {
      tableExample,
      page,
      code,
      codeLoading,
      resizeOptions,
      navActive,
      contentActive,
      activeTitle,
      showMobileWarning,
      moduleName,
      handleNavClick,
      handleResize,
      turnToGithub () {
        window.open('https://github.com/leon-kfd/howdyjs');
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.logo {
  padding: 0 10px;
  #howdy {
    font-size: 28px;
    line-height: 28px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 30px;
      left: 0;
      border-top: 2px solid #5b9df3;
    }
    .back {
      position: absolute;
      opacity: 0;
      width: 18px;
      height: 18px;
      left: 0;
      top: calc(50% - 9px);
      transition: all .4s ease-in-out;
    }
    &:hover {
      padding-left: 20px;
      .back {
        opacity: 1;
      }
    }
  }
  #moduleName {
    display: inline-flex;
    align-items: center;
    margin-top: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #262626;
    border-left: 4px solid rgb(131, 23, 113);
    padding-left: 6px;
    font-family: 'Kaushan Script', cursive;
  }
}
.nav {
  position: fixed;
  width: 240px;
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  z-index: 9999;
  .nav-content {
    height: calc(100% - 38px);
    overflow-y: auto;
  }
  .nav-title {
    font-size: 12px;
    color: #889;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 18px;
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
  margin-left: 240px;
}
.content {
  margin-left: 240px;
  display: flex;
  // height: 100vh;
  height: 100%;
  overflow-y: hidden;
  position: relative;
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
      height: calc(100vh - 50px);
      overflow-y: auto;
      padding: 10px 15px;
      padding-top: 0;
    }
  }
  .code {
    height: 100%;
    width: 40%;
    color: #c6dbea;
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
      background: #282c34;
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
  padding-left: 20px;
  color: #889;
  line-height: 36px;
  z-index: 10000;
  background: #fff;
  display: flex;
  align-items: center;
  font-size: 13px;
  a.link {
    color: #df904c;
    text-decoration: none;
    margin: 0 4px;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  .home-img,
  .github-img {
    width: 22px;
    height: 22px;
    padding: 2px;
    cursor: pointer;
    margin: 0 2px;
    border-radius: 2px;
    &:hover {
      background: #e0e0ff;
    }
  }
}

.header-tips,
.nav-btn,
.nav-mask,
.content-nav {
  display: none;
}

@media screen and (max-width: 768px) {
  .logo {
    padding-top: 42px;
  }
  .readme {
    font-size: 13px;
  }
  .nav {
    transform: translateX(-245px);
    transition: transform 0.4s ease-in-out;
    &.active {
      transform: translateX(0);
    }
  }
  .content,
  .readme-content {
    margin-left: 0;
    margin-top: 40px;
    // height: calc(100vh - 40px);
    height: calc(100% - 40px);
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
