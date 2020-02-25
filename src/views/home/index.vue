<template>
<!-- 最外层容器 -->
  <el-container>
      <!-- 左侧 -->
      <el-aside style="width:199px;background:#323745" >
          <layout-aside></layout-aside>
      </el-aside>
      <!-- 右侧 -->
      <el-container>
          <el-header>
              <layout-header></layout-header>
          </el-header>
          <el-main style="margin:0;padding:0">
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
