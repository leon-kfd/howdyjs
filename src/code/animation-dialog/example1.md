```vue
<template>
  <div id="example">
    <div class="wrapper">
      <div class="box"
           v-for="num in 9"
           :key="num"
           @click="handleShowDialog">
        <p class="text">#{{num}}</p>
      </div>
    </div>
    <AnimationDialog ref="dialog">
      <div>Hello World</div>
    </AnimationDialog>
  </div>
</template>

<script>
import { AnimationDialog } from 'howdy'
export default {
  components: {
    AnimationDialog
  },
  methods: {
    handleShowDialog (e) {
      this.$refs.dialog.open(e.currentTarget)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box {
  background: #ffe0e0;
  height: 160px;
  width: 160px;
  margin: 20px;
  cursor: pointer;
}
.text {
  font-size: 20px;
  color: #889;
  padding: 5px;
}
</style>

```
