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
export default {
  data () {
    return {
      options: {
        menuList: [
          {
            label: '刷新',
            tips: 'Refresh',
            fn: (currentEl, bindingEl) => {
              console.log(currentEl, bindingEl)
            }
          },
          {
            label: '查看',
            tips: 'Check',
            fn: (currentEl, bindingEl) => {
              console.log(currentEl, bindingEl)
            },
            disabled: (currentEl, bindingEl) => true
          },
          {
            line: true
          },
          {
            label: '操作',
            tips: 'Operation',
            children: [
              {
                label: '打开',
                tips: 'Open',
                fn: (currentEl, bindingEl) => {
                  console.log(currentEl, bindingEl)
                }
              },
              {
                label: '编辑',
                tips: 'Edit',
                disabled: () => true,
                fn: (currentEl, bindingEl) => {
                  console.log(currentEl, bindingEl)
                }
              },
              {
                label: '删除',
                tips: 'Delete',
                fn: (currentEl, bindingEl) => {
                  console.log(currentEl, bindingEl)
                }
              },
              {
                label: '重命名',
                tips: 'Rename',
                fn: (currentEl, bindingEl) => {
                  console.log(currentEl, bindingEl)
                },
                hidden: (currentEl, bindingEl) => true
              }
            ]
          },
          {
            label: '设置',
            tips: 'Setting'
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