<template>
  <el-container>
    <el-aside :width="menuCollapse?'65px':'200px'">
      <el-menu
        background-color="#353B4E"
        text-color="#fff"
        active-text-color="#3C9DFF"
        :collapse="menuCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/welcome" :style="{width:menuCollapse?'65px':'200px'}">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu :style="{width:menuCollapse?'65px':'200px'}" index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>通讯录</span>
          </template>
          <el-menu-item index="/unitOne">一单位</el-menu-item>
          <el-menu-item index="/unitTwo">二单位</el-menu-item>
          <el-menu-item index="/unitThree">三单位</el-menu-item>
          <el-menu-item index="/unitFour">四单位</el-menu-item>
        </el-submenu>
        <el-menu-item index="/search" :style="{width:menuCollapse?'65px':'200px'}">
          <i class="el-icon-search"></i>
          <span slot="title">查询</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="zuobian">
          <i
            slot="prefix"
            :class="menuCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
            style="cursor:pointer;"
            @click="menuCollapse=!menuCollapse"
          ></i>
          <span>神软后台管理系统</span>
        </div>
      </el-header>
      <el-main>
        <!--给子组件设置占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 左侧导航菜单 折叠true、展开false 的标志
      menuCollapse: false
    }
  }

}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #323745;
  }
  .el-header {
    background-color: #fff;
    .zuobian {
      width: 400px;
      height: 60px;
      line-height: 60px;
      float: left;
      font-size: 26px
    }
    .youbian {
      width: 450px;
      height: 60px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      .ms {
        width: 120px;
        margin: 0 10px;
      }
      .el-dropdown {
        width: 240px;
      }
    }
  }
  .el-main {
    background-color: #f2f3f5;
  }
}
</style>
