<template>
  <p>
    <input id="m-disabled" v-model="isDisabled" type="checkbox">
    <label for="m-disabled">Disbaled</label>
  </p>
  <p>
    <input id="m-changeLabel" v-model="isEnglish" type="checkbox">
    <label for="m-changeLabel">Change Label</label>
  </p>
  <p>
    <input id="m-hiddenDivider" v-model="isHiddenLine" type="checkbox">
    <label for="m-hiddenDivider">Hidden Divider</label>
  </p>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      {{ !isMobile ? 'Right click this box' : 'Long press this box' }}.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { MouseMenuDirective, CustomMouseMenuOptions } from '../../../../packages/mouse-menu';
const vMouseMenu = MouseMenuDirective

const isDisabled = ref(false)
const isEnglish = ref(false)
const isHiddenLine = ref(false)
const lang = {
  en: {
    'open': 'Open',
    'edit': 'Edit',
    'delete': 'Delete'
  },
  cn: {
    'open': '打开',
    'edit': '编辑',
    'delete': '删除'
  }
}
const currentLang = computed(() => isEnglish.value ? 'en' : 'cn')

const options: CustomMouseMenuOptions = {
  disabled: () => isDisabled.value,
  params: { a: 1 },
  useLongPressInMobile: true,
  menuWidth: 120,
  menuList: [
    {
      label: () => lang[currentLang.value]['open'],
      fn: (params, currentEl, bindingEl, e) => console.log('open', params, currentEl, bindingEl, e)
    },
    {
      label: () => lang[currentLang.value]['edit'],
      fn: (params, currentEl, bindingEl, e) => console.log('edit', params, currentEl, bindingEl, e)
    },
    {
      line: true,
      hidden: () => isHiddenLine.value
    },
    {
      label: () => lang[currentLang.value]['delete'],
      fn: (params, currentEl, bindingEl, e) => console.log('delete', params, currentEl, bindingEl, e)
    }
  ]
}
const isMobile = 'ontouchstart' in window
</script>

<style scoped>
.box {
  width: 500px;
  width: min(90vw, 500px);
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
p {
  line-height: 1.5;
}
</style>
