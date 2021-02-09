<template>
  <div ref="container">
    <StandardTabs :tab-list="tabList" :tab-content-width="tabContentWidth">
      <template #tab1>
        <div class="tab-content tab1">
          Tab1
        </div>
      </template>
      <template #tab2>
        <div class="tab-content tab2">
          Tab2
        </div>
      </template>
      <template #tab3>
        <div class="tab-content tab3">
          Tab3
        </div>
      </template>
      <template #tab4>
        <div class="tab-content tab4">
          Tab4
        </div>
      </template>
    </StandardTabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import StandardTabs from '../../../../packages/standard-tabs';
export default defineComponent({
  components: {
    StandardTabs
  },
  setup() {
    const tabContentWidth = ref('100vw');
    const container = ref();
    onMounted(() => {
      tabContentWidth.value = container.value.offsetWidth;
    });
    return {
      tabList: ['测试1', '测试2', '测试3', '测试4'],
      tabContentWidth,
      container
    };
  }
});
</script>

<style scoped lang="scss">
.tab-content {
  width:100% !important;
  height:calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.tab1 {
  background: rgb(231, 202, 255);
}
.tab2 {
  background: rgb(255, 227, 191);
}
.tab3 {
  background: rgb(195, 248, 250);
}
.tab4 {
  background: rgb(209, 236, 255);
}
</style>
<style>
.example-content {
  padding: 0 !important;
}
</style>
