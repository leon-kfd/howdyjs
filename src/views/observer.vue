<template>
  <div id="observe">
    <div class="container">
      <div class="wrapper">
        <div class="box"
             ref="box"
             v-observer="{wait: 500, immediate:false}"
             @sizeChange="handleSizeChange"></div>
        <div class="box">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SizeObserver from '../directive-size-observer/size-observer'
export default {
  name: 'observer',
  directives: {
    observer: SizeObserver
  },
  methods: {
    handleSizeChange (a) {
      console.log(a)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  // margin: 20px auto;
  .wrapper {
    width: 100%;
    display: flex;
    .box {
      width: 80%;
      height: 400px;
      background: #ddf1d5;
      box-shadow: 0 1px 10px #ccc;
      border-radius: 5px;
      margin: 20px;
    }
  }
}
</style>
