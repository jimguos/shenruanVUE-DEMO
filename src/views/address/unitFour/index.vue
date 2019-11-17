<template>
 <div>
     <div style="background:white;height:50px;border:1px solid #EBEEF5;font-size:28px;color:#666;text-align:center">
         <span style="line-height:50px">四单位通讯录</span>
     </div>
     <el-table
    :data="tableData"
    border
    style="width: 100%;font-size:20px"
    height="900">
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
 </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      }, {
        unit: '四单位',
        department: '运维',
        name: '赵六',
        position: '中级工程师',
        phone: '13823239898',
        address: '北京市海淀区神软四区'
      } ]
    }
  }
}
</script>
