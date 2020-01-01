<template>
  <div id="resizeDirective">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame'
export default {
  components: {
    ExampleFrame
  },
  data () {
    return {
      mainName: 'scroll',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '默认'
        },
        {
          name: 'Custom Style',
          introduce: '自定义样式'
        },
        {
          name: 'Hover Mode',
          introduce: '悬停展示'
        },
        {
          name: 'Drag Scroll',
          introduce: '拖拽滚动'
        }
      ]
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
