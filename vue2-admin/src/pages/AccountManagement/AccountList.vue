<template>
  <div class="AccountList">
    <div class="Admin-State">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >账号管理</el-breadcrumb-item>
        <el-breadcrumb-item >账号列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <el-row>
      <el-button type="info" plain class="btn" @click="Add">添加</el-button>
      <el-button type="info" plain class="btn" @click="Use">启用</el-button>
      <el-button type="info" plain class="btn" @click="None">禁用</el-button>
      <el-button type="info" plain class="btn" @click="Deletes">删除</el-button>

      <el-input 
      class="input-css"
      placeholder="搜索用户名，真实姓名"
      v-model="info"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-row>
    <br>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="UserData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          prop="user_id"
          label="ID"
          width="120">
        </el-table-column>

        <el-table-column
          prop="user_name"
          label="用户名"
          width="120">
        </el-table-column>

        <el-table-column
          prop="full_name"
          label="真实姓名"
          width="120"
        >
        </el-table-column>

        <el-table-column
          prop="user_class"
          label="部门"
          width="120"
        >
        </el-table-column>

        
        <el-table-column
          prop="user_role"
          label="角色"
          width="120"
        >
        </el-table-column>

        
        <el-table-column
          prop="account_status"
          label="账号状态"
          width="120"
        >
        </el-table-column>

        
        <el-table-column
          prop="reg_time"
          label="注册时间"
          width="200"
        >
        </el-table-column>
        
        <el-table-column
          prop="options"
          label="操作选项"
          show-overflow-tooltip
        >
        <el-button type="primary" @click="Edit">编辑</el-button>
        <el-button type="danger" @click="Delete">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'AccountList',
    data(){
      return {
        info:'',
        UserData: [
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        {
          user_id:'001',
          user_name: 'Noi-q',
          full_name: 'Noi-q',
          user_class: '技术部',
          user_role: '前端程序员',
          account_status: '可用',
          reg_time: '2022/1/2'
        },
        ],
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      Edit(){
        console.log(1)
      },
      Delete(){
        console.log(2)
      },
      // 四大按钮
      Add(){
        console.log(1)
      },
      Use(){
        console.log(1)
      },
      None(){
        console.log(1)
      },
      Deletes(){
        console.log(1)
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
  .btn{
    color: black;
  }
  .input-css{
    width: 400px;
    float: right;
  }
</style>