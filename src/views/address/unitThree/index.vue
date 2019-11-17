<template>
 <div>
     <div style="background:white;height:50px;border:1px solid #EBEEF5;font-size:28px;color:#666;text-align:center">
         <span style="line-height:50px">三单位通讯录</span>
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
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      }, {
        unit: '三单位',
        department: '开发',
        name: '王五',
        position: '中级工程师',
        phone: '13678777877',
        address: '北京市海淀区神软三区'
      } ]
    }
  }
}
</script>
