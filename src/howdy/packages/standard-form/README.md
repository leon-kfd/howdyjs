# Standard Form

**基于ElementUI form的二次封装**

## 特性
1. 使用json配置生成表单，并使用v-model双向绑定表单数据
2. 支持兼容原el-form的所有属性、方法
3. 支持el-form的表单验证
4. 使用数组生成el-select/el-radio-group/el-checkbox-group/el-button-group的子项
5. 支持slot与jsx语法生成自定义的表单项

## 配置

### 1. formData (v-model)
表单双向绑定的对象，Key值会对应下方的formConf形成双向绑定

### 2. formConf (Object)
传入的JSON配置，自动生成表单

#### Key (String)  
绑定数据对象的Key值，会双向绑定到`formData`中

#### Value
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|**type**|表单类型，使用‘el-’拼接，最终生成element相应表单类型|String|input/ input-number/ select/ switch/ radio/ radio-group/ checkbox/ checkbox-group/ button/ button-group/ time-select/ date-picker|-|
|label|表单项label|String|-|-|
|attrs|生成el表单元素的属性，与element保持一致|Object|-|-|
|events|生成el表单元素的事件，与element保持一致|Object|-|-|
|option|select类型特有，含有list/label/value3个属性，list为option循环项数组，label/value为list相应名称映射|Object|-|-|
|radio|radio-group类型特有，含有list/label/value/attrs4个属性，list为radio循环项数组,label/value为list相应名称映射，attrs为原element属性|Object|-|-|
|checkbox|checkbox-group类型特有，配置同上radio|Object|-|-|
|button|button-group类型特有，只含有list属性，list下设置text与el-button的attrs|Object|-|-|
|**rules**|表单验证规则（同el-form）|Array|-|-|
|**slot**|自定义表单slot，值为字符串时，会绑定到表单的slot中，为函数是支持JSX写法直接返回|String/Function|-|-|

## Event/Methods
与el-form保持一致
