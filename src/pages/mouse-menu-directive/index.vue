<template>
  <div id="mouseMenuDirective">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"
                   disabledMobile></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame';
export default {
  components: {
    ExampleFrame
  },
  data () {
    return {
      mainName: 'mouse-menu-directive',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '基础菜单'
        },
        {
          name: 'Sub Menu',
          introduce: '二级菜单'
        },
        {
          name: 'Icon',
          introduce: '使用图标'
        },
        {
          name: 'Style',
          introduce: '样式'
        },
        {
          name: 'Function Mode',
          introduce: '使用函数'
        },
        {
          name: 'IE11 Style',
          introduce: '兼容IE11'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
