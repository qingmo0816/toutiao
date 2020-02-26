<template>
<!-- 最外层用 el-card 做页面 -->
  <el-card>
    <!-- 面包屑组件 -->
    <bread-crumb slot="header">
    <!-- 面包屑的具名插槽 -->
      <template slot="title"> 评论列表</template>
    </bread-crumb>

    <!-- 表格 -->
    <el-table :data="list">
      <el-table-column prop='name' label='标题' width="700"></el-table-column>
      <el-table-column prop='date' label='评论状态'></el-table-column>
      <el-table-column prop='address' label='总评论数'></el-table-column>
      <el-table-column prop='date' label='粉丝评论数'></el-table-column>
      <el-table-column prop='address' label='操作'></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }

}
</script>

<style>

</style>
