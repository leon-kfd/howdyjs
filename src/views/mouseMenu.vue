<template>
  <div id="mouseMenu">
    <div class="wrapper">
      <div class="box1"
           v-mouseMenu></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mouseMenu',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='scss'>
.wrapper {
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  .box1 {
    width: 800px;
    height: 600px;
    background: #ddf1d5;
    box-shadow: 0 1px 10px #ccc;
  }
}
</style>
