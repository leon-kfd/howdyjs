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
            list: [
              {
                name: '男',
                value: 1
              },
              {
                name: '女',
                value: 2
              }
            ],
            label: 'name',
            value: 'value'
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
            list: [
              {
                name: '普通话',
                lang: 'mandarin'
              },
              {
                name: '英语',
                lang: 'english'
              },
              {
                name: '粤语',
                lang: 'cantonese'
              }
            ],
            label: 'name',
            value: 'lang'
          }
        },
        position: {
          label: '职位',
          type: 'select',
          attrs: {
            valueKey: 'label'
          },
          option: {
            list: [
              {
                label: '前端开发',
                id: 1
              },
              {
                label: '测试工程师',
                id: 2
              },
              {
                label: 'JAVA开发',
                id: 3
              }
            ],
            label: 'label'
          }
        }
      },
      formData: {
        name: '',
        sex: 1,
        birth: '',
        lang: [],
        position: ''
      }
    }
  }
}
</script>
