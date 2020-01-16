<template>
  <div>
    <el-button @click="handleOpen1">Test</el-button>
    <div class="dialog">
      <!-- <el-button @click="handleOpen">Test</el-button> -->
      <div v-for="num in 9"
           :key="num"
           class="box"
           @click="handleOpen2">{{num}}</div>
      <standard-dialog :visible.sync="show"
                       ref="dialog">
        <div>Hello</div>
      </standard-dialog>
    </div>
  </div>
</template>

<script>
import StandardDialog from '@/standard-dialog/standard-dialog'
export default {
  name: 'dialogTest',
  components: {
    StandardDialog
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleOpen1 () {
      this.$refs.dialog.open()
    },
    handleOpen2 (e) {
      this.$refs.dialog.open(e.currentTarget)
    }
  }
}
</script>
<style scoped lang='scss'>
.dialog {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  .box {
    width: 300px;
    height: 300px;
    border-radius: 4px;
    box-shadow: 0 0 10px #ccc;
    background: #ffe0e0;
    margin: 20px;
    cursor: pointer;
  }
}
</style>
