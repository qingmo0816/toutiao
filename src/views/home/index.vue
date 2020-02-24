<template>
<!-- 最外层容器 -->
  <el-container>
      <!-- 左侧 -->
      <el-aside style="width:200px">
          <layout-aside></layout-aside>
      </el-aside>
      <!-- 右侧 -->
      <el-container>
          <el-header>
              <layout-header></layout-header>
          </el-header>
          <el-main>主体</el-main>
      </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
