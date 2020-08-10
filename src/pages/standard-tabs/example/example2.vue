<template>
  <div>
    <StandardTabs :tabList="tabList" :tabContentWidth="tabContentWidth" tabCustomStyle="position:fixed">
      <template v-for="(item, index) in tabList" #[slotNameArr[index]] >
        <div :class="`tab-content ${slotNameArr[index]}`" :key="item">{{item}}</div>
      </template>
    </StandardTabs>
  </div>
</template>

<script>
// import StandardTabs from '@/howdy/packages/standard-tabs'
export default {
  name: '',
  components: {
    // StandardTabs
  },
  data () {
    return {
      tabList: ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6', '测试7', '测试8', '测试9'],
      tabContentWidth: '100vw'
    }
  },
  computed: {
    slotNameArr () {
      // 动态插槽名
      return this.tabList.map((item, index) => `tab${index + 1}`)
    }
  },
  mounted () {
    this.tabContentWidth = this.$el.parentNode.offsetWidth
  }
}
</script>

<style scoped lang="scss">
.tab-content {
  width:100% !important;
  height:300vh;
  display: flex;
  justify-content: center;
  padding-top: 30vh;
}
.tab1 {
  background: linear-gradient(rgba(231, 202, 255, 1), rgba(231, 202, 255, 0));
}
.tab2 {
  background: linear-gradient(rgba(255, 227, 191, 1), rgba(255, 227, 191, 0));
}
.tab3 {
  background: linear-gradient(rgba(195, 248, 250, 1), rgba(195, 248, 250, 0));
}
.tab4 {
  background: linear-gradient(rgba(209, 236, 255, 1), rgba(209, 236, 255, 0));
}
.tab5 {
  background: linear-gradient(rgba(255, 180, 180, 1), rgba(255, 180, 180, 0));
}
.tab6 {
  background: linear-gradient(rgba(231, 255, 206, 1), rgba(231, 255, 206, 0));
}
.tab7 {
  background: linear-gradient(rgba(197, 216, 252, 1), rgba(197, 216, 252, 0));
}
.tab8 {
  background: linear-gradient(rgba(250, 221, 185, 1), rgba(250, 221, 185, 0));
}
.tab9 {
  background: linear-gradient(rgba(255, 200, 229, 1), rgba(255, 200, 229, 0));
}
</style>
<style>
.example-content {
  padding: 0 !important;
}
</style>
