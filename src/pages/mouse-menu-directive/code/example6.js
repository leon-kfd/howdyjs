export default `
\`\`\`
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
            label: '打开',
            tips: 'Open',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (currentEl, bindingEl) => console.log(currentEl, bindingEl)
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

<style lang="scss" scope>
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
// 兼容css3自定义变量
.__menu__wrapper {
  background: #c8f2f0;
  box-shadow: 0 1px 5px #888;
  padding: 5px 0;
  border-radius: 0;
}
.__menu__sub__wrapper {
  background: #c8f2f0;
  box-shadow: 0 1px 5px #888;
  padding: 5px 0;
  border-radius: 0;
}
.__menu__line,
.__menu__sub__line {
  border-top: 1px solid #ccc;
  margin: 5px 0;
}
.__menu__item,
.__menu__sub__item {
  height: 30px;
  line-height: 30px;
  .__menu__item-icon {
    color: #484852;
    width: 20px;
    height: 20px;
    line-height: 20px;
    i {
      font-size: 14px;
    }
  }
  .__menu__item-label,
  .__menu__sub__item-label {
    font-size: 14px;
    color: #484852;
  }
  .__menu__item-tips,
  .__menu__sub__item-tips {
    font-size: 12px;
    color: #484852;
  }
  &.disabled {
    cursor: not-allowed;
    .__menu__item-icon,
    .__menu__item-label,
    .__menu__sub__item-label,
    .__menu__item-tips,
    .__menu__sub__item-tips {
      color: #bcc;
    }
    .__menu__item-arrow {
      .__menu__item-arrow-after {
        border-left: 5 solid #484852;
      }
    }
  }
}
.__menu__item {
  &:not(.disabled):hover {
    background: rgba(255, 255, 255, 0.8);
  }
}
.__menu__sub__item {
  &:not(.disabled):hover {
    background: rgba(255, 255, 255, 0.8);
  }
}
.__menu__item-arrow.show .__menu__item-arrow-after {
  border-left: 5px solid #484852;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
</style>
\`\`\`
`
