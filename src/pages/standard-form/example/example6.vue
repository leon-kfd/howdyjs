<template>
  <div>
    <h4>Form</h4>
    <standard-form v-model="formData" :formConf="formConf" label-width="80px" ref="form"></standard-form>
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
          rules: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        sex: {
          label: '性别',
          type: 'radio-group',
          radio: {
            list: ['男', '女']
          },
          rules: [
            { required: true, message: '请输入姓名', trigger: 'change' }
          ]
        },
        birth: {
          label: '出生日期',
          type: 'date-picker',
          rules: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'blur' }
          ]
        },
        lang: {
          label: '语言',
          type: 'checkbox-group',
          checkbox: {
            list: ['普通话', '英语', '粤语']
          },
          rules: [
            { type: 'array', required: true, message: '请至少选择一个语言', trigger: 'change' }
          ]
        },
        position: {
          label: '职位',
          type: 'select',
          option: {
            list: ['前端开发', '测试工程师', 'JAVA开发']
          },
          rules: [
            { required: true, message: '请选择职位', trigger: 'change' }
          ]
        },
        btn1: {
          slot: (h) => {
            return (
              <el-button type="primary" onClick={() => this.submit()}>提交</el-button>
            )
          }
        }
      },
      formData: {
        name: '',
        sex: '',
        birth: '',
        lang: [],
        position: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>
