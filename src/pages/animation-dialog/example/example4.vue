<template>
  <button class="btn-open" @click="open">
    Open
  </button>
  <AnimationDialog ref="dialog" :animation-mode="true">
    <template #title>
      <div class="title">
        <select value="1">
          <option value="1">
            Test1
          </option>
          <option value="2">
            Test2
          </option>
        </select>
      </div>
    </template>
    <div v-for="num in 20" :key="num">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio vero eum vel iusto iure itaque dolor, minima illum, distinctio aliquam fuga obcaecati. Quas delectus dolores officiis perspiciatis ducimus id.
    </div>
    <template #footer>
      <div class="footer">
        <button>Submit</button>
        <button @click="close">
          Cancel
        </button>
      </div>
    </template>
  </AnimationDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimationDialog from '../../../../packages/animation-dialog';
export default defineComponent({
  components: {
    AnimationDialog
  },
  setup() {
    const dialog = ref();
    const open = () => {
      dialog.value.open();
    };
    const close = () => {
      dialog.value.close();
    };
    return {
      dialog,
      open,
      close
    };
  }
});
</script>

<style lang="scss" scoped>
.btn-open {
  padding: 5px;
}
.title, .footer {
  padding: 20px;
}
.footer {
  text-align: right;
  button {
    margin: 0 10px;
    padding: 5px;
  }
}
</style>
