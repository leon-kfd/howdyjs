<template>
   <el-form v-bind="$attrs" v-on="$listeners" :model="cloneFormData" :rules="formRules">
    <el-form-item v-for="(item,key) in formConf"
                  :label="item.label"
                  :key="key"
                  :prop="key">
      <template v-if="typeLimit.includes(item.type)">
        <component :is="`el-${item.type}`"
                    v-model="formData[key]"
                    v-bind="{...item.attrs}"
                    v-on="item.events">{{item.text}}
          <template v-if="item.type === 'select'">
            <el-option v-for="(option, index) in item.option.list"
                        :key="index"
                        :label="item.option.label ? option[item.option.label] : option"
                        :value="item.option.value ? option[item.option.value] : option"></el-option>
          </template>
          <template v-if="item.type === 'radio-group'">
            <el-radio v-for="(radio,index) in item.radio.list"
                      :key="index"
                      :label="item.radio.value ? radio[item.radio.value] : radio"
                      v-bind="{...item.radio.attrs}">{{item.radio.label ? radio[item.radio.label] : (item.radio.value ? radio[item.radio.value] : radio)}}</el-radio>
          </template>
          <template v-if="item.type === 'checkbox-group'">
            <el-checkbox v-for="(checkbox,index) in item.checkbox.list"
                          :key="index"
                          :label="item.checkbox.value ? checkbox[item.checkbox.value] : checkbox"
                          v-bind="{...item.checkbox.attrs}">{{item.checkbox.label ? checkbox[item.checkbox.label] : (item.checkbox.value ? checkbox[item.checkbox.value] : checkbox)}}</el-checkbox>
          </template>
          <template v-if="item.type === 'button-group'">
            <el-button v-for="(button,index) in item.button"
                        :key="index"
                        v-bind="{...button.attrs}">{{button.text}}</el-button>
          </template>
        </component>
      </template>
      <template v-if="item.slot">
        <slot v-if="typeof item.slot !== 'function'" :name="item.slot"></slot>
        <jsx-render v-if="typeof item.slot === 'function'" :render="item.slot"></jsx-render>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import JsxRender from './jsx-render.vue'
export default {
  name: 'StandardForm',
  components: {
    JsxRender
  },
  props: {
    formConf: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => {}
    }
  },
  model: {
    prop: 'formData',
    event: 'change'
  },
  data () {
    return {
      cloneFormData: {},
      typeLimit: [
        'input',
        'input-number',
        'select',
        'switch',
        'radio',
        'radio-group',
        'checkbox',
        'checkbox-group',
        'button',
        'button-group',
        'time-select',
        'date-picker'
      ]
    }
  },
  computed: {
    formRules () {
      let rules = {}
      Object.keys(this.formConf).map(key => {
        if (this.formConf[key].rules) {
          rules[key] = this.formConf[key].rules
        }
      })
      return rules
    }
  },
  mounted () {
    this.cloneFormData = JSON.parse(JSON.stringify(this.formData))
  },
  watch: {
    cloneFormData: {
      handler (val) {
        this.$emit('change', val)
      },
      deep: true
    }
  }
}
</script>
