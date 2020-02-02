```vue
<template>
  <div id="example">
    <div class="wrapper">
      <div class="box"
           v-mouseMenu="options">
        <p class="text">Right Click This box.</p>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  data () {
    return {
      options: {
        hasIcon: true,
        iconType: 'font-icon',
        menuList: [
          {
            label: '打开',
            tips: 'Open',
            icon: 'fas fa-folder-open',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
          },
          {
            label: '编辑',
            tips: 'Edit',
            icon: 'fas fa-pencil-alt',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
          },
          {
            label: '删除',
            tips: 'Delete',
            icon: 'fas fa-trash-alt',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
          },
          {
            label: '重命名',
            tips: 'Rename',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>

```
