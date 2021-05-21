<template>
  <table class="easy">
    <tr>
      <th>#</th>
      <th>用户名</th>
      <th>性别</th>
      <th>职位</th>
      <th>生日</th>
    </tr>
    <tr
      v-for="(item,index) in list"
      :key="item.id"
      v-mouse-menu="{
        params: item,
        ...options
      }"
    >
      <td>{{ index + 1 }}</td>
      <td>{{ item.userName }}</td>
      <td>{{ item.sex }}</td>
      <td>{{ item.position }}</td>
      <td>{{ item.birth }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { MouseMenuDirective } from '../../../../packages/mouse-menu';
import { apiURL } from '../../../global';
export default defineComponent({
  directives: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    const list = ref([]);
    onMounted(async () => {
      const res = await fetch(`${apiURL}/page?page=1&pageSize=30`);
      const { data, errCode } = await res.json();
      if (errCode === 200) {
        list.value = data.items.map((item: Record<string, any>) => {
          item.sex = item.sex === 1 ? '男' : '女';
          return item;
        });
      }
    });
    return {
      list,
      options: {
        useLongPressInMobile: true,
        menuList: [
          {
            label: (params: any) => `#${params.userName}`,
            disabled: true
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (row: any, ...args:[]) => console.log('edit', row, args),
          },
          {
            label: '停用',
            tips: 'Stop',
            fn: (row: any, ...args:[]) => console.log('stop', row, args),
          },
          {
            label: '删除',
            tips: 'Delete',
            fn: (row: any, ...args:[]) => console.log('delete', row, args)
          }
        ]
      }
    };
  }
});
</script>
<style lang="scss" scoped>
.easy {
  width: 100%;
  border-spacing: 0;
  border: 1px solid #c0c2e0;
  border-collapse: collapse;
  empty-cells: show;
  th,td {
    border: 1px solid #262626;
    text-align: center;
    height: 35px;
    border: 1px solid #c0c2e0;
    padding: 5px 10px;
  }
  th {
    font-weight: bold;
    background: rgb(235, 245, 255);
  }
  tr:nth-child(2n - 1) {
    background: rgb(245, 250, 255);
  }
}
</style>
