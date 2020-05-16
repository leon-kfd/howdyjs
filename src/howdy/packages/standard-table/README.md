# Standard Table

**基于ElementUI table的二次封装**

## 特性
1. 保留el-table的所有attrs/events/methods
2. el-table-column使用配置数据生成, 保留el-table-column的所有attrs与events
3. 可配置使用axios自动获取后端数据
4. 可配置自动分页
5. 可配置自动生成条件过滤表单
6. 可配置大数据表格，固定表格渲染行数（试验阶段）

## 配置

### 1 Table Config
> 在组件中使用v-model绑定Table-config

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|data|表格数据|Array|-|-|
|row|表格列配置，配置参考下方|Array|-|-|
|pagination|添加该参数说明开启表格自动分页功能，配置参考下方|Object|-|-|
|operation|配置自动生成右侧操作栏，配置参考下方|Object|-|-|
|header|配置自动渲染生成头部条件过滤表单，配置参考下方|Object|-|-|
|fixedRender|使表格固定渲染指定行数，解决大数据表格渲染性能问题,使用length属性指定固定渲染的行数。使用该功能需确保表格行高为固定的而且需要设置表格的height，同时不可使用el-table部分功能，如展开列，行选择等。与自带分页功能冲突|Object|-|{length: 50}|
|url|数据请求地址（使用axios）|String|-|-|
|params|请求参数|Object|-|-|
|axiosMethod|axios请求类型|String|post/get|post|
|axiosConfig|axios其余配置，设置header等|String|-|-|
|axiosInstance|axios实例，可传入自己封装过的axios实例，扩展自己的拦截器功能等，该参数与上面的axiosMethod、axiosConfig冲突|Axios instance|-|null|
|responseItems|响应数据中列表项映射，使用对象的“.”连接|String|-|data.items|
|responseTotal|响应数据中列表total映射，使用对象的“.”连接|String|-|data.total|
|customColumn|是否开启可自定义显示列功能，需要默认隐藏的列请在列配置中加入hidden:true参数|Boolean|-|false|

#### 1.1 Table Config - Row
+ 与ElmentUI保持一致，请参考<a href="https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes" target="_blank">Table-column Attributes</a>
+ 表格列配置使用el-table-column的所有Attributes，主要是将列配置写在了js中
+ 重设了show-overflow-tooltip的默认值为true
+ 新增style参数，参数值为String/Function, 其中Function设置row参数为当前行的数据
+ 新增slot参数，参数值(string)对应standard-table中的template的slot值，slot-scope与el-table的Table-column Scoped Slot保持一致，分别有{ row, column, $index }
+ 新增hidden参数，参数值(Boolean，默认为false)，控制该列是否默认隐藏，可结合自定义列功能使用配置默认隐藏的列

#### 1.2 Table Config - Pagination
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|static|是否静态分页，即后端接口不含分页功能，但又想使用分页功能，使用前端截取成分页数据|Boolean|-|false|
|requestPage|请求参数中Page字段的名称映射，即请求含分页接口中需要的page字段名字|String|-|page|
|requestPageSize|请求参数中PageSize字段的名称映射，即请求含分页接口中需要的pageSize字段名字|String|-|pageSize|
|align|分页栏底部对齐|String|-|right|
|pageSize|分页功能默认的pageSize|Number|-|20|
|pageSizes|分页功能默认的pageSizes|Array[Number]|-|[10, 20, 30, 40, 50]|
|pageLayout|分页功能默认的pageLayout（与el-pagination一致）|Array[String]|-|total, sizes, prev, pager, next, jumper|

#### 1.3 Table Config - Opeartion
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|label|操作栏列名|String|-|操作|
|align|列对齐方式|String|left/center/right|center|
|fixed|列固定，默认会固定操作栏到右侧|String/Boolean|right|
|min-width|最小宽度|String|-|150px|
|width|列宽|String|-|-|
|btns|自动生成按钮（el-button）, 配置参考下方|Array|-|-|
|links|自动生成链接（el-link），配置参考下方|Array|-|-|

##### 1.3.1 Table Config - Operation - Btns
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|label|按钮显示文本|String|-|-|
|show|是否显示，函数时提供row参数|Boolean/Function|-|true|
|type|按钮类型，与el-button一致，默认为text|String|-|text|
|size|按钮大小，与el-button一致，默认为small|String|-|small|
|disabled|按钮disabled属性，函数时提供row参数|Boolean/Function|-|false|
|style|按钮style，函数时提供row参数|String/Function|-|-|
|fn|按钮点击执行的函数，提供row参数|Function|-|-|

##### 1.3.2 Table Config - Operation - Links
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|label|链接显示文本|String|-|-|
|show|是否显示，函数时提供row参数|Boolean/Function|-|true|
|type|链接类型，与el-link一致，默认为text|String|-|text|
|disabled|链接disabled属性，函数时提供row参数|Boolean/Function|-|false|
|style|链接style，函数时提供row参数|String/Function|-|-|
|href|链接href地址，函数时提供row参数|String/Function|-|-|
|target|原生|String|-|_blank|

#### 1.4 Table Config - Header
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|class|类名|String|-|-|
|style|样式|String/Object|-|-|
|align|对齐方式|String|left/right/center|left|
|operation|需要生成的过滤表单项，配置参考下方|Array|-|
|size|表单项的size|String|medium/small/mini|small|

##### 1.4.1 Table Config - Header - Operation
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|type|表单类型，使用‘el-’拼接，最终生成element相应表单类型|String|input/ input-number/ select/ switch/ radio/ radio-group/ checkbox/ checkbox-group/ button/ button-group/ time-select/ date-picker|-|
|label|表单项label|String|-|-|
|valueFor|表单项v-model将指向conf.params中的键名，与下面value冲突|String|-|-|
|value|表单选v-model的绑定值，与上面valueFor冲突|String|-|-|
|attrs|生成el表单元素的属性，与element保持一致|Object|-|-|
|events|生成el表单元素的事件，与element保持一致|Object|-|-|
|option|select类型特有，含有list/label/value3个属性，list为option循环项数组，label/value为list相应名称映射|Object|-|-|
|radio|radio-group类型特有，含有list/label/value/attrs4个属性，list为radio循环项数组,label/value为list相应名称映射，attrs为原element属性|Object|-|-|
|checkbox|checkbox-group类型特有，配置同上radio|Object|-|-|
|button|button-group类型特有，只含有list属性，list下设置text与el-button的attrs|Object|-|-|

### 2 Table Attributes
+ 与ElmentUI保持一致（data参数不可用），使用v-bind="$attrs"实现。默认设置了开启boder，当使用fixedRender功能时，会默认设置表格的height为80vh（可重写），具体请参考<a href="https://element.eleme.cn/#/zh-CN/component/table#table-attributes" target="_blank">Table Attributes</a>
+ 添加了loading参数，使用:loading.sync="loading"，可以将当前表格加载loading同步到this.loading

### 3 Table Events
+ 表格事件与el-table的Events一致，使用v-on="$event"实现，具体请参考<a href="https://element.eleme.cn/#/zh-CN/component/table#table-events" target="_blank">Table Events</a>

### 4 Table Methods
+ 表格方法与el-table的Methods一致，具体请参考<a href="https://element.eleme.cn/#/zh-CN/component/table#table-methods" target="_blank">Table Methods</a>
+ 新增fetch方法，参数：无，用于自动发送axios请求获取表格数据渲染表格
+ 新增fixedRenderJump方法，参数：index【number】，用于在大数据表格中自动滚动到相应index行

### 5 Table Slot
+ 新增名称为footerLeft的slot，一般用于放置页脚左侧的批量按钮