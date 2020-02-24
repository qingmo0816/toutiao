<template>
  <div class="layout-aside">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
    <el-menu background-color="#323745" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 首页 -->
      <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 内容管理 -->
      <el-submenu>
        <template slot="title">
          <i class="el-icon-s-order"></i>
          内容管理
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <!-- 粉丝管理 -->
      <el-submenu>
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          粉丝管理
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <!-- 账户信息 -->
      <el-menu-item index="3">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scope>
.layout-aside{
    width: 200px;
    height: 100vh;
    background-color:#323745;
    .title{
        text-align: center;
        background-color: #2e2f32;
        padding:10px 0;
        img{
            height: 30px;
        }
    }
}
</style>
