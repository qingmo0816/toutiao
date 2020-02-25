
<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="6" class="left">
      <i class="el-icon-s-fold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <!-- 属性不给:就相当于字符串 -->
      <img class='head-img' :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">

      <el-dropdown trigger="click" @command="handleMenuItem">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='account'>个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>git地址</el-dropdown-item>
        <el-dropdown-item command='lgout'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg') // 转成base64字符串
    }
  },
  methods: {
    // 获取用户数据
    getUserInfo () {
      const token = window.localStorage.getItem('user-token') // 获取token
      this.$axios({
        url: '/user/profile',
        headers: { Authorization: `Bearer ${token}` }
      }).then(result => {
        this.userInfo = result.data.data
      })
    },
    handleMenuItem (command) {
      if (command === 'account') {
        // 账户信息
      } else if (command === 'git') {
        // git地址
        window.location.href = 'https://github.com/shuiruohanyu/82heimatoutiao' // 改变当前的地址
      } else {
        // 退出
        window.localStorage.clear() // 清空缓存 清除所有的缓存  只能清除自己当前项目的缓存
        this.$router.push('/login') // 跳转到登录页
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
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
    .head-img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
}
</style>
