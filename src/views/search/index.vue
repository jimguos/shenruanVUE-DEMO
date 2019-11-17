<template>
<div>
<el-card>
    <el-row :gutter="20">
        <el-col :span="8">
            <div>
                单位
            </div>
            <el-select placeholder="请选择单位" v-model="searchUnit" style="width:100%" clearable>
                <el-option v-for="(item) in units" :key="item" :label="item" :value="item"></el-option>

            </el-select>
        </el-col>
        <el-col :span="8">
            <div>
                姓名
            </div>
            <el-input placeholder="请输入姓名" v-model="searchName" clearable>

            </el-input>
        </el-col>
        <el-col :span="8">
            <div>
                电话
            </div>
            <el-input placeholder="请输入电话" v-model="searchPhone" clearable>

            </el-input>
        </el-col>
    </el-row>
    <div style="margin-top:10px">
    <el-button type="primary" @click="search">
        查 询
    </el-button>
    </div>
</el-card>
<el-card style="margin-top:20px">
    <el-table
    :data="searchOptions"
    border
    style="width: 100%;font-size:20px"
    >
    <el-table-column
      prop="unit"
      label="单位"
      >
    </el-table-column>
    <el-table-column
      prop="department"
      label="部门"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="position"
      label="职位">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="联系方式">
    </el-table-column>
    <el-table-column
      prop="address"
      label="办公地点">
    </el-table-column>
  </el-table>
</el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      searchUnit: '',
      searchName: '',
      searchPhone: '',
      units: ['一单位', '二单位', '三单位', '四单位'],
      totalOptions: [
        {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }, {
          unit: '四单位',
          department: '运维',
          name: '赵六',
          position: '中级工程师',
          phone: '13823239898',
          address: '北京市海淀区神软四区'
        }, {
          unit: '一单位',
          department: '培训',
          name: '张三',
          position: '高级工程师',
          phone: '133323232323',
          address: '北京市海淀区神软一区'
        }, {
          unit: '三单位',
          department: '开发',
          name: '王五',
          position: '中级工程师',
          phone: '13678777877',
          address: '北京市海淀区神软三区'
        }, {
          unit: '二单位',
          department: '培训',
          name: '李四',
          position: '中级工程师',
          phone: '18825252525',
          address: '北京市海淀区神软二区'
        }],
      searchOptions: []
    }
  },
  methods: {
    search () {
      if (this.searchUnit === '' && this.searchName === '' && this.searchPhone === '') {
        this.searchOptions = []
        this.$message.error('请输入查询条件')
      } else {
        this.searchOptions = this.totalOptions.filter(item => {
          return true
        })
        if (this.searchUnit !== '') {
          this.searchOptions = this.searchOptions.filter(i => {
            return i.unit === this.searchUnit
          })
        }
        if (this.searchName !== '') {
          this.searchOptions = this.searchOptions.filter(i => {
            return i.name === this.searchName
          })
        }
        if (this.searchPhone !== '') {
          this.searchOptions = this.searchOptions.filter(i => {
            return i.phone === this.searchPhone
          })
        }
        if (this.searchOptions.length === 0) this.$message.error('查无此人')
      }
    }
  }
}
</script>
