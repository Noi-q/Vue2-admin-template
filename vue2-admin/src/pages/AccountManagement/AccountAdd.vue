<template>
  <div class="AccountAdd">
    <div class="Admin-State">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >账号管理</el-breadcrumb-item>
        <el-breadcrumb-item >添加账号</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <el-row>
      <el-button icon="el-icon-arrow-left" @click="GetAccountList">返回列表</el-button>
    </el-row>
    <br>
    <el-card>
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name" placeholder="(全公司设置统一命名规范)"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="(中英文，6-16个字符)"></el-input>
          </el-form-item>

          <el-form-item label="真实姓名">
            <el-input v-model="form.fullName"></el-input>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>

          <el-form-item label="部门">
            <el-select v-model="form.region" placeholder="请选择部门">
              <el-option label="技术部" value="技术部"></el-option>
              <el-option label="设计部" value="设计部"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="角色">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="前端开发工程师" name="type"></el-checkbox>
              <el-checkbox label="插播一个小广告：https://t.me/PublicGoodVPN" name="type"></el-checkbox>
              <el-checkbox label="PHP开发工程师" name="type"></el-checkbox>
              <el-checkbox label="Java开发工程师" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'AccountAdd',
    data(){
      return {
        user_name:'',
        password:'',
        full_name:'',
        phone:'',
        form: {
          name: '',
          password:'',
          fullName:'',
          phone:'',
          region: '',
          gender:'',
          type: [],
        }
      }
    },
    methods:{
      GetAccountList(){
        this.$router.push({
          path:'/home/list'
        })
      },
      onSubmit() {
        this.$store.commit('AccountAdd',this.form)
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
  .form-input{
    width: 450px;
  }
  .form-div1{
    display: block;
    float: left;
  }
  .form-div2{
    display: block;
    float: right;
  }
  .form-div3{
    display: block;
    float: left;
  }
  .form-div4{
    display: block;
    float: right;
  }
</style>