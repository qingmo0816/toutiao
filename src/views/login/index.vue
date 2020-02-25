<template>
  <div class='login'>
      <!-- 使用elementUI组件 el-card -->
     <el-card class="login-card">
         <!-- 匿名插槽 -->
         <div  class='title'>
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单 => el-form包裹 -->
         <!-- 数据校验 => el-form绑定 model ,绑定rules规则 -->
         <el-form status-icon ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
             <!-- 每一个表单域由一个 Form-Item 组件构成 -->
             <!-- form-item  prop属性 绑定 下面表单组件的 字段名 -->
             <el-form-item prop="mobile">
                 <!-- 表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
                 <!-- 手机号 绑定 v-model -->
                 <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item prop="code">
                 <!-- 验证码 -->
                 <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button  style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="agree">
                 <!-- 同意选项 -->
                 <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
              <el-form-item>
                  <!-- 登录按钮 -->
                  <!-- 注册点击事件 -->
                  <el-button @click="login"  type="primary" style="width:100%">登录</el-button>
              </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const validator = function (rule, value, callBack) {
      if (value) {
        callBack() // 如果value为true直接通过
      } else {
        callBack(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选协议
      },
      // 定义 rules 校验规则 表单是根据规则去校验 没有规则 就没有校验
      // key(字段名):value(数组对象=> 多个 => 一个字段 可能有一个或者多个校验规则)
      loginRules: {
        mobile: [{
          required: true, // 意味着必填
          message: '手机号不能为空' // 如果没有满足要求 就会提示message的内容
        }, {
          pattern: /^1[3456789]\d{9}$/, // 正则表达式
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码必须为6位数字'
        }],
        check: [{
          validator
        }]
      }
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法 => 方法中传入的一个函数 两个校验参数  是否校验成功/未校验成功的字段
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 只有一切的校验通过之后 才会进行请求
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.loginForm
          }).then(result => {
            // 将后台返回的token令牌存储到前端缓存中
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home') // 跳转到主页
          }).catch(() => {
            this.$message({
              message: '用户名或验证码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 如果要在组件样式中写less 就要给一个lang属性 lang='less'
// 如果加了scoped属性 那么该style就会只对当前组件有效
.login {
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
   .login-card {
       width:440px;
       height:340px;
       .title {
           text-align: center;
           img {
               height:45px;
           }
       }
   }
}
</style>
