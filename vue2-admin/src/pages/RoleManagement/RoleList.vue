<template>
  <div class="RoleList">
    <div class="Admin-State">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >角色管理</el-breadcrumb-item>
        <el-breadcrumb-item >角色列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <el-row>
      <el-button type="info" plain class="btn" @click="Add">新增</el-button>
      <el-button type="info" plain class="btn" @click="Deletes">删除</el-button>
    </el-row>
    <br>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="RoleData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          prop="role_id"
          label="角色ID"
          width="120">
        </el-table-column>

        <el-table-column
          prop="role_name"
          label="角色名称"
          width="180">
        </el-table-column>

        <el-table-column
          prop="basic_access"
          label="基本权限"
          width="180"
        >
        </el-table-column>

        <el-table-column
          prop="found_date"
          label="创建时间"
          width="180"
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
    name:'RoleList',
    data(){
      return {
        RoleData:this.$store.state.Role.roleList
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      Add(){
      },
      Deletes(){
      },
      Edit(){},
      Delete(){}
    },
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
</style>