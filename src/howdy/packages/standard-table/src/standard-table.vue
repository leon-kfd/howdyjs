<template>
  <div class="__standard-table">
    <div class="__header-box"
         :class="conf.header.class"
         :style="typeof conf.header.style === 'object' ? {...conf.header.style} : conf.header.style"
         v-if="conf.header">
      <el-form :inline="true"
               :size="conf.header.size || 'small'"
               :style="{
                 display: 'flex',
                'align-items': 'center',
                'flex-wrap': 'wrap',
                'flex-direction': conf.header.align ==='right' && 'row-reverse',
                ...conf.header.formStyle
               }">
        <el-form-item :label="item.label"
                      v-for="(item,index) in conf.header.operation"
                      :key="index">
          <template v-if="typeLimit.includes(item.type)">
            <component v-if="item.valueFor"
                       :is="`el-${item.type}`"
                       v-model="conf.params[item.valueFor]"
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
                <el-button v-for="(button,index) in item.button.list"
                           :key="index"
                           v-bind="{...button.attrs}">{{button.text}}</el-button>
              </template>
            </component>
            <component v-else
                       :is="`el-${item.type}`"
                       v-model="item.value"
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
        </el-form-item>
      </el-form>
    </div>
    <div class="__table-box"
         v-if="!conf.isCard">
      <el-table :data="conf.data"
                v-bind="$attrs"
                v-on="$listeners"
                v-loading="loading"
                :border="typeof $attrs.border != 'undefined' ? $attrs.border : true"
                :height="conf.fixedRender ? ($attrs.height || '80vh') : $attrs.height"
                ref="table">
        <template v-for="(item,index) in rowList">
          <el-table-column v-if="['selection', 'index'].includes(item.type) && (typeof item.show == 'undefined' ? true : typeof item.show == 'function' ? item.show() : item.show)"
                           :key="index"
                           :align="item.align || 'center'"
                           v-bind="{...item}"></el-table-column>
          <el-table-column v-if="!['selection', 'index'].includes(item.type)"
                           :key="index"
                           :align="item.align || 'center'"
                           :type="item.type"
                           :slot="null"
                           :show-overflow-tooltip="typeof item['show-overflow-tooltip']!== 'undefined' ? item['show-overflow-tooltip'] : true"
                           v-bind="{...item}">
            <template #default="scope">
              <slot :name="item.slot"
                    v-bind="{...scope}">
                <span :style="item.style ? item.style(scope.row) : ''">{{item.formatter ? item.formatter(scope.row) : scope.row[item.prop]}}</span>
              </slot>
            </template>
          </el-table-column>
        </template>
        <el-table-column v-if="conf.operation"
                         :label="conf.operation.label || '操作'"
                         :align="conf.operation.align || 'center'"
                         :fixed="typeof conf.operation.fixed ==='undefined' ? 'right': conf.operation.fixed"
                         :min-width="conf.operation['min-width'] || '150px'"
                         :width="conf.operation.width || '150px'">
          <template slot-scope="scope">
            <template v-for="(item,index) in conf.operation.btns">
              <el-button v-if="item.show ? item.show(scope.row) : true"
                         :key="index"
                         :type="item.type || 'text'"
                         :size="item.size || 'small'"
                         :disabled="item.disabled ? item.disabled(scope.row) : false"
                         :style="(item.style && typeof item.style == 'function') ? item.style(scope.row) : item.style"
                         @click="item.fn && item.fn(scope.row)">{{typeof item.label == 'function' ? item.label(scope.row) : item.label}}</el-button>
            </template>
            <template v-for="(item,index) in conf.operation.links">
              <el-link v-if="item.show ? item.show(scope.row) : true"
                       :key="index"
                       :type="item.type || 'primary'"
                       :disabled="item.disabled ? item.disabled(scope.row) : false"
                       :style="(item.style && typeof item.style == 'function') ? item.style(scope.row) : item.style"
                       :href="typeof item.href == 'function' ? item.href(scope.row) : item.href"
                       :target="item.target || '_blank'">{{typeof item.label == 'function' ? item.label(scope.row) : item.label}}</el-link>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <el-popover placement="bottom-end"
                  v-if="customColumn"
                  popper-class="__more-row-popper"
                  title="自定义显示列"
                  width="150"
                  trigger="hover">
        <div class="__show-more-row"
             slot="reference">
          <i class="el-icon-more"></i>
        </div>
        <div class="__show-more-row-content">
          <el-checkbox-group :value="rowSelectList">
            <el-checkbox v-for="(item,index) in allRowList"
                         @change="handleMoreRowSelect($event,item)"
                         style="width:150px"
                         :key="index"
                         :label="item.label"></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-popover>
    </div>
    <div class="__card-box"
         v-if="conf.isCard">
      <div class="__card-list">
        <div class="__card-list-item"
             v-for="(item,index) in conf.data"
             :key="index"
             :style="{width: conf.cardWidth + 'px', ...conf.cardStyle}">
          <el-card class="__standard_card"
                   :body-style="{padding: '10px'}"
                   :shadow="conf.cardShadow || 'hover'">
            <div class="__standard_card_main">
              <dl class="__standard_card_row"
                  v-for="(item1, index1) in rowList"
                  :key="index1">
                <dt class="__standard_card_label">{{item1.label}}</dt>
                <dd class="__standard_card_value">
                  <slot :name="item1.slot"
                        v-bind="{...item}">
                    <span :style="typeof item1.style === 'function' ? item1.style(item) : item1.style">
                      {{item1.formatter ? item1.formatter(item) : item[item1.prop]}}
                    </span>
                  </slot>
                </dd>
              </dl>
            </div>
            <div class="__standard_card_footer"
                 v-if="conf.operation"
                 :style="{'text-align': conf.operation.align || 'center', ...conf.operation.style}">
              <template v-for="(item1,index1) in conf.operation.btns">
                <el-button v-if="item1.show ? item1.show(item) : true"
                           :key="index1"
                           :type="item1.type || 'text'"
                           :size="item1.size || 'small'"
                           :disabled="item1.disabled ? item1.disabled(item) : false"
                           :style="(item1.style && typeof item1.style == 'function') ? item1.style(item) : item1.style"
                           v-bind="{...item1}"
                           @click="item1.fn && item1.fn(item)">{{typeof item1.label == 'function' ? item1.label(item) : item1.label}}</el-button>
              </template>
              <template v-for="(item1,index1) in conf.operation.links">
                <el-link v-if="item1.show ? item1.show(item) : true"
                         :key="index1"
                         :type="item1.type || 'primary'"
                         :disabled="item1.disabled ? item1.disabled(item) : false"
                         :style="(item1.style && typeof item1.style == 'function') ? item1.style(item) : item1.style"
                         :href="typeof item1.href == 'function' ? item1.href(item) : item1.href"
                         :target="item1.target || '_blank'">{{typeof item1.label == 'function' ? item1.label(item) : item1.label}}</el-link>
              </template>
            </div>
          </el-card>
        </div>
        <div class="__card-list-item-fake"
             v-for="num in 10"
             :key="num + 'fake'"></div>
      </div>
    </div>
    <card-mode v-if="conf.isCard"
               :listData="conf.data"
               :row="conf.row"
               :operation="conf.operation"
               :cardSetting="conf.cardSetting"></card-mode>
    <div class="__footer-box">
      <div class="__footer-btn-box">
        <slot name="footerLeft"></slot>
      </div>
      <div class="__pagination-box"
           v-if="conf.pagination"
           :style="{'text-align': (conf.pagination && conf.pagination.align) || 'right'}">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="currentPageSize"
                       :page-sizes="(conf.pagination && conf.pagination.pageSizes) || this.$STANDARD.pageSizes"
                       :layout="(conf.pagination && conf.pagination.layout) || this.$STANDARD.pageLayout"
                       :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { clone, addPropertyFromObj } from '../utils/object-method'
export default {
  name: 'StandardTable',
  model: {
    prop: 'conf',
    event: 'update'
  },
  props: {
    conf: Object,
    loading: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
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
      ],
      currentPage: 1,
      currentPageSize: 20,
      total: 0,
      isStaticPagination: false,
      staticData: [],
      header: null,
      tableBodyWrapper: null,
      tableBody: null,
      scrollFn: null,
      isRender: false,
      fixedRenderIndex: 0,
      fixedRenderLength: 50,
      customColumn: false
    }
  },
  mounted () {
    this.isStaticPagination = (this.conf.pagination && this.conf.pagination.static) || false
    this.currentPageSize = (this.conf.pagination && this.conf.pagination.pageSize) || this.$STANDARD.pageSize
    this.customColumn = this.conf.customColumn || false
    if (!this.conf.isCard) {
      // Append el-table's methods to standard-table
      const { clearSelection, toggleRowSelection, toggleAllSelection, toggleRowExpansion, setCurrentRow, clearSort, clearFilter, doLayout, sort } = this.$refs.table
      addPropertyFromObj(this, { clearSelection, toggleRowSelection, toggleAllSelection, toggleRowExpansion, setCurrentRow, clearSort, clearFilter, doLayout, sort })
    }
  },
  computed: {
    rowList () {
      return this.conf.row.filter(item => !item.hidden)
    },
    allRowList () {
      return this.conf.row.filter(item => item.label)
    },
    rowSelectList () {
      return this.rowList.map(item => item.label)
    }
  },
  methods: {
    handleSizeChange (val) {
      this.currentPageSize = val
      this.currentPage = 1
      if (this.isStaticPagination) {
        this.staticPagination()
      } else {
        this.fetch()
      }
    },
    handleCurrentChange (val) {
      this.currentPage = val
      if (this.isStaticPagination) {
        this.staticPagination()
      } else {
        this.fetch()
      }
    },
    handleMoreRowSelect ($event, item) {
      const index = this.conf.row.findIndex(el => el.label === item.label)
      if (index > -1) {
        this.$set(this.conf.row[index], 'hidden', !$event)
      }
    },
    staticPagination () {
      this.conf.data = this.staticData.slice(((this.currentPage - 1) * this.currentPageSize), this.currentPage * this.currentPageSize)
    },
    getMap (result, mapRule) {
      const mapItems = mapRule ? mapRule.split('.') : []
      mapItems.map(item => {
        if (typeof result !== 'undefined' && result !== null) {
          result = item ? result[item] : result
        } else {
          this.$message ? this.$message.error(`返回${mapRule}映射失败,请检查Map配置与后端返回数据是否配置正确..`) : alert(`返回${mapRule}映射失败,请检查Map配置与后端返回数据是否配置正确..`)
          throw new Error('规则映射出错')
        }
      })
      return result
    },
    fetch () {
      return new Promise((resolve, reject) => {
        this.$emit('update:loading', true)
        const params = this.conf.params || {}
        if (this.conf.pagination && !this.isStaticPagination) {
          const page = this.conf.pagination.requestPage || this.$STANDARD.requestPage
          const pageSize = this.conf.pagination.requestPageSize || this.$STANDARD.requestPageSize
          params[page] = this.currentPage
          params[pageSize] = this.currentPageSize
        }
        const method = this.conf.axiosMethod || this.$STANDARD.axiosMethod
        const config = Object.assign(this.$STANDARD.axiosConfig, this.conf.axiosConfig)
        let instance
        if (this.$STANDARD.axiosInstance) {
          if (method === 'post') {
            instance = this.$STANDARD.axiosInstance.post(this.conf.url, params)
          } else {
            instance = this.$STANDARD.axiosInstance.get(this.conf.url, { params })
          }
        } else {
          instance = axios({
            ...config,
            method,
            url: this.conf.url,
            data: method === 'post' && params,
            params: method === 'get' && params
          })
        }
        instance.then(data => {
          if (this.conf.formatRespone && typeof this.conf.formatRespone === 'function') {
            data = this.conf.formatRespone(data)
          }
          if (data) {
            const resultItems = this.getMap(data, typeof this.conf.responseItems === 'undefined' ? this.$STANDARD.responseItems : this.conf.responseItems)
            if (typeof resultItems !== 'undefined' && resultItems !== null) {
              if (!this.conf.pagination) {
                if (this.conf.fixedRender) {
                  this.conf.cloneData = clone(resultItems)
                  this.conf.data = resultItems.slice(0, this.conf.fixedRender.length)
                  this.renderFakeRow()
                } else {
                  this.conf.data = resultItems
                }
              } else if (this.conf.pagination && this.isStaticPagination) {
                this.staticData = resultItems
                this.total = this.staticData.length || 0
                this.staticPagination()
              } else {
                this.conf.data = resultItems
                if (this.conf.pagination) {
                  const resultTotal = this.getMap(data, typeof this.conf.responseTotal === 'undefined' ? this.$STANDARD.responseTotal : this.conf.responseTotal)
                  if (typeof resultTotal !== 'undefined' && resultTotal !== null) {
                    this.total = resultTotal
                  } else {
                    this.$message ? this.$message.error('返回数据total字段映射失败,请检查Map配置与后端返回数据是否配置正确..') : alert('返回数据total字段映射失败,请检查Map配置与后端返回数据是否配置正确..')
                  }
                }
              }
            } else {
              this.$message ? this.$message.error('返回数据items字段映射失败,请检查Map配置与后端返回数据是否正确...') : alert('返回数据items字段映射失败,请检查Map配置与后端返回数据是否正确...')
            }
            resolve(data)
            this.$emit('update:loading', false)
          }
        }, data => {
          reject(data)
          this.$emit('update:loading', false)
        })
      })
    },
    renderFakeRow () {
      this.$nextTick(() => {
        if (!this.isRender) {
          const table = this.$refs.table.$el
          const rowHeight = table.querySelector('.el-table__body-wrapper .el-table__row').offsetHeight
          const wrapper = document.createElement('div')
          wrapper.setAttribute('class', 'new-wrapper')
          wrapper.style.cssText = 'position:relative'
          wrapper.style.height = `${rowHeight * this.conf.cloneData.length}px`
          this.tableBodyWrapper = table.querySelector('.el-table__body-wrapper')
          this.tableBodyWrapper.appendChild(wrapper)
          this.tableBody = this.tableBodyWrapper.removeChild(table.querySelector('.el-table__body-wrapper table.el-table__body'))
          this.tableBody.style.cssText = 'position:absolute;width: 100%;top: 0;left: 0'
          this.tableBody.style.top = `${rowHeight * this.fixedRenderIndex}px`
          wrapper.appendChild(this.tableBody)
          this.scrollFn = (e) => {
            this.fixedRenderIndex = ~~(e.target.scrollTop / rowHeight)
            this.tableBody.style.top = `${rowHeight * this.fixedRenderIndex}px`
            this.conf.data = this.conf.cloneData.slice(this.fixedRenderIndex, this.fixedRenderLength + this.fixedRenderIndex)
          }
          this.tableBodyWrapper.addEventListener('scroll', this.scrollFn)
          this.isRender = true
        }
      })
    },
    fixedRenderJump (index) {
      if (index >= 0 & index <= this.conf.cloneData.length) {
        const table = this.$refs.table.$el
        const rowHeight = table.querySelector('.el-table__body-wrapper .el-table__row').offsetHeight
        this.fixedRenderIndex = index
        this.tableBody.style.top = `${rowHeight * this.fixedRenderIndex}px`
        this.tableBodyWrapper.scrollTop = rowHeight * this.fixedRenderIndex
      } else {
        this.$message ? this.$message.error('Index不在范围内.') : alert('Index不在范围内.')
      }
    }
  },
  destroyed () {
    this.tableBodyWrapper && this.tableBodyWrapper.removeEventListener('scroll', this.scrollFn)
  }
}
</script>
<style scoped>
.__footer-box {
  margin-top: 15px;
  zoom: 1;
}
.__footer-box:after {
  content: "";
  display: table;
  clear: both;
}
.__footer-btn-box {
  float: left;
}
.__pagination-box {
  float: right;
}
.__table-box {
  position: relative;
}
.__table-box .__show-more-row {
  position: absolute;
  right: 8px;
  height: 20px;
  width: 20px;
  text-align: center;
  line-height: 20px;
  top: 10px;
  font-size: 16px;
  color: #667;
  z-index: 8888;
  cursor: pointer;
}
.__card-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.__card-list-item {
  width: 240px;
  margin: 15px 10px;
}
.__card-list-item-fake {
  width: 240px;
  height: 0;
  overflow: hidden;
}
.__standard_card {
  height: 100%;
}
.__standard_card_main {
  height: 100%;
  flex: 1;
  padding: 5px;
}
.__standard_card_row {
  margin-bottom: 10px;
  display: flex;
}
.__standard_card_label {
  font-size: 14px;
  color: #889;
  line-height: 20px;
  margin-right: 8px;
}
.__standard_card_value {
  width: 100%;
  flex: 1;
  color: #262630;
  font-size: 14px;
  text-align: right;
  line-height: 20px;
}
.__standard_card_footer {
  margin-top: 5px;
}
</style>
<style>
.__more-row-popper .el-popover__title {
  color: #889;
  font-size: 13px;
  margin-bottom: 8px;
}
.__card-box .el-card__body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
