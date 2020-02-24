<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="6" class="left">
      <i class="el-icon-s-fold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <img class="header-img" src="../../assets/img/avatar.jpg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          肖战是我的
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人信息</el-dropdown-item>
          <el-dropdown-item >git地址</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scope>
.layout-header {
  padding: 10px 0;
  .left {
    display: flex;
    align-items: center;
    .icon {
      font-size: 22px;
      margin-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .header-img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
}
</style>
