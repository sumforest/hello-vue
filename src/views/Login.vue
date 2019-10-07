<template>
    <div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-box">
        <el-form-item>
          <h3 class="title-box">用户登录</h3>
        </el-form-item>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" type="text" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :plain="true" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            form:{
              username:"",
              password:""
            },
            rules:{
              username: [
                { required: true, message: '请输入账号', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            }
          };
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              sessionStorage.setItem('isLogin', 'true');
              this.$store.dispatch('asyncUpdateUser',{username:this.form.username});
              //vue的编程式跳转
              this.$router.push('/main');
            } else {
              this.$message.error('请输入密码');
              return false;
            }
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
.login-box{
  width: 350px;
  margin: 180px auto;
  border: 1px solid #DCDFE6;
  padding:0px 45px 0px 0px ;
  border-radius: 5px;
  box-shadow: 0 0 25px #DCDFE6;
}
.title-box{
  text-align: center;
  padding: 0px 20px 0px 0px;
}
</style>
