<template>
  <div>
    <h4>Form</h4>
    <standard-form v-model="formData" :formConf="formConf" label-width="80px"></standard-form>
    <h4>Data</h4>
    <pre>{{formData}}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formConf: {
        name: {
          label: '姓名',
          type: 'input'
        },
        sex: {
          label: '性别',
          type: 'radio-group',
          radio: {
            list: ['男', '女']
          }
        },
        birth: {
          label: '出生日期',
          type: 'date-picker'
        },
        lang: {
          label: '语言',
          type: 'checkbox-group',
          checkbox: {
            list: ['普通话', '英语', '粤语']
          }
        },
        position: {
          label: '职位',
          type: 'select',
          option: {
            list: ['前端开发', '测试工程师', 'JAVA开发']
          }
        }
      },
      formData: {
        name: '',
        sex: '男',
        birth: '',
        lang: [],
        position: ''
      }
    }
  }
}
</script>
