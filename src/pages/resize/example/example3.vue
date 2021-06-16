<template>
  <div class="page">
    <div class="container">
      <div class="wrapper x">
        <div v-resize:right="options" class="box1" @resize="handleResizeX">
          <p class="text">
            Set this box -> resize:right
          </p>
        </div>
        <div ref="a" class="box2"></div>
      </div>
      <div class="wrapper y">
        <div v-resize:bottom="options" class="box1" @resize="handleResizeY">
          <p class="text">
            Set this box -> resize:bottom
          </p>
        </div>
        <div ref="b" class="box2"></div>
      </div>
      <div class="wrapper x">
        <div ref="c" class="box1"></div>
        <div v-resize:left="options" class="box2" @resize="handleResizeX1">
          <p class="text">
            Set this box -> resize:left
          </p>
        </div>
      </div>
      <div class="wrapper y">
        <div ref="d" class="box1"></div>
        <div v-resize:top="options" class="box2" @resize="handleResizeY1">
          <p class="text">
            Set this box -> resize:top
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { ResizeEvent, ResizeDirective } from '../../../../packages/resize';
export default defineComponent({
  directives: {
    resize: ResizeDirective
  },
  setup() {
    const a = ref();
    const b = ref();
    const c = ref();
    const d = ref();
    return {
      a,b,c,d,
      options: {
        // use default
      },
      handleResizeX (e: ResizeEvent) {
        console.log(e);
        let el = e.target as HTMLElement;
        let resizeWidth = e.resizeWidth;
        if (resizeWidth) {
          el.style.width = `${resizeWidth}px`;
          a.value.style.width = `${600 - resizeWidth}px`;
        }
      },
      handleResizeY (e: ResizeEvent) {
        console.log(e);
        let el = e.target as HTMLElement;
        let resizeHeight = e.resizeHeight;
        if (resizeHeight) {
          el.style.height = `${resizeHeight}px`;
          b.value.style.height = `${400 - resizeHeight}px`;
        }
      },
      handleResizeX1 (e: ResizeEvent) {
        console.log(e);
        let el = e.target as HTMLElement;
        let resizeWidth = e.resizeWidth;
        if (resizeWidth) {
          el.style.width = `${resizeWidth}px`;
          c.value.style.width = `${600 - resizeWidth}px`;
        }
      },
      handleResizeY1 (e: ResizeEvent) {
        console.log(e);
        let el = e.target as HTMLElement;
        let resizeHeight = e.resizeHeight;
        if (resizeHeight) {
          el.style.height = `${resizeHeight}px`;
          d.value.style.height = `${400 - resizeHeight}px`;
        }
      }
    };
  }
});
</script>
<style scoped>
.page {
  height: calc(100vh - 60px);
  overflow: auto;
}
.container {
  min-width: 700px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.wrapper {
  width: 600px;
  height: 400px;
  margin: 20px;
  position: relative;
  box-shadow: 0 1px 5px #ccc;
}
.wrapper .box1 {
  background: #c2c2e0;
  position: absolute;
}
.wrapper .box2 {
  background: #ffe0e0;
  position: absolute;
}
.x .box1 {
  width: 300px;
  height: 100%;
  left: 0;
  top: 0;
}
.x .box2 {
  width: 300px;
  height: 100%;
  right: 0;
  top: 0;
}
.y .box1 {
  width: 100%;
  height: 200px;
  left: 0;
  top: 0;
}
.y .box2 {
  width: 100%;
  height: 200px;
  left: 0;
  bottom: 0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
