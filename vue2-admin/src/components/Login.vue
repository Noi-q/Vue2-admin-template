<template>
  <div class="Login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录界面</span>
      </div>
      <br><br>
      <div style="text-align:center;">
        <el-input 
        class="accountInfo"
        v-model="account" 
        placeholder="账号"
        ></el-input>
        <br><br><br>
        <el-input 
        class="accountInfo"
        v-model="password" 
        placeholder="密码"
        show-password
        ></el-input>
      </div>
      <br><br>
      <div style="text-align:center;">
        <el-button 
        type="primary" 
        round
        @click="Get"
        >登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  // import Axios from "axios"
  export default {
    name:'Login',
    data(){
      return {
        account:'',
        password:''
      }
    },
    methods:{
      Get(){
        if(this.account === 'admin' && this.password === 'admin'){
          alert('登录成功')
          this.$router.push({
            path:'/home/list'
          })
        }
      }
    },
  }
</script>

<style scoped>


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .clearfix {
    text-align: center;
  }

  .clearfix span {
    font-size: 25px;
    color: skyblue;
  }

  .box-card {
    margin: 0 auto;
    margin-top: 15%;
    width: 480px;
  }

  .accountInfo{
    width: 300px;
  }
</style>