export default `
\`\`\`
<template>
  <div id="example">
    <div class="wrapper">
      <div class="box"
           v-mouseMenu="options">
        <div class="box-listitem"
             v-for="num in 9"
             :key="num"
             :data-id="num">
          <p class="text">
            <span>{{num}}</span>
            <span v-if="[1,5,9].includes(num)">, Hidden Open</span>
            <span v-if="[2,4,6].includes(num)">, Disabled Edit</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        hidden: (el) => !el.getAttribute('class').includes('box-listitem'),
        menuList: [
          {
            label: (currentEl) => \`#\${ currentEl.getAttribute('data-id') }\`,
            disabled: true
          },
          {
            label: '打开',
            tips: 'Open',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl),
            hidden: (currentEl) => ['1', '5', '9'].includes(currentEl.getAttribute('data-id'))
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl),
            disabled: (currentEl) => ['2', '4', '6'].includes(currentEl.getAttribute('data-id'))
          },
          {
            label: '删除',
            tips: 'Delete',
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-listitem {
  width: 140px;
  height: auto;
  margin: 20px 10px;
  background: #c2c2e0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
\`\`\`
`
