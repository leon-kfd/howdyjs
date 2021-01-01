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
          type: 'input',
          attrs: {
            style: `width: 220px`,
            placeholder: '请输入姓名',
            clearable: true,
            maxlength: 10,
            'show-word-limit': true
          },
          events: {
            blur: () => console.log('blur')
          }
        },
        sex: {
          label: '性别',
          type: 'radio-group',
          radio: {
            list: ['男', '女']
          },
          attrs: {
            disabled: true
          }
        },
        date: {
          label: '日期范围',
          type: 'date-picker',
          attrs: {
            type: 'daterange',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            valueFormat: 'yyyy-MM-dd',
            pickerOptions: {
              shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近一个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近三个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                  picker.$emit('pick', [start, end]);
                }
              }]
            }
          },
          events: {
            change: (val) => console.log(val)
          }
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
          },
          attrs: {
            multiple: true
          }
        }
      },
      formData: {
        name: '',
        sex: '男',
        date: [],
        lang: [],
        position: []
      }
    }
  }
}
</script>
