<template>
  <div class="AccountAdd">
    <div class="Admin-State">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >账号管理</el-breadcrumb-item>
        <el-breadcrumb-item >账号列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <el-row>
      <el-button icon="el-icon-arrow-left" @click="GetAccountList">返回列表</el-button>
    </el-row>
    <br>
    <el-card>
      123
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'AccountAdd',
    methods:{
      GetAccountList(){
        this.$router.push({
          path:'/home/list'
        })
      }
    }
  }
</script>

<style scoped>
  .Admin-State{
    padding: 10px;
    background-color: white;
    /* border-radius: 10px 10px 10px 10px; */
  }
</style>