<template>
  <div ref="container">
    <StandardTabs :tab-list="tabList.map(item => item.name)" :tab-content-width="tabContentWidth" tab-custom-style="position:fixed">
      <template v-for="item in tabList" #[item.slotName] :key="item.name">
        <div :class="`tab-content ${item.slotName}`">
          {{ item.name }}
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
    const tabList = Array.from({ length: 9}, (_, index: number) => {
      return {
        name: `测试${index + 1}`,
        slotName: `tab${index + 1}`
      };
    });
    const container = ref();
    onMounted(() => {
      tabContentWidth.value = container.value.offsetWidth;
    });
    return {
      tabContentWidth,
      tabList,
      container
    };
  }
});
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
