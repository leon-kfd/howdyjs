<template>
  <div>
    <StandardTabs :tabList="tabList" stopPropagation>
      <template #tab0>
        <div class="tab-content tab0">Tab1</div>
      </template>
      <template #tab1>
        <div class="tab-content tab1">Tab2</div>
      </template>
      <template #tab2>
        <div class="tab-content tab2">Tab3</div>
      </template>
      <template #tab3>
        <div class="tab-content tab3">Tab4</div>
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
      tabList: ['测试1', '测试2', '测试3', '测试4']
    }
  }
}
</script>

<style scoped lang="scss">
.tab-content {
  width:100vw;
  height:calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab0 {
  background: rgb(231, 202, 255);
}
.tab1 {
  background: rgb(255, 227, 191);
}
.tab2 {
  background: rgb(195, 248, 250);
}
.tab3 {
  background: rgb(209, 236, 255);
}
</style>
<style>
.example-content {
  padding: 0 !important;
}
</style>
