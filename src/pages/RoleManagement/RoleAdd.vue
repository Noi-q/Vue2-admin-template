<template>
  <div class="RoleAdd">
    <div class="Admin-State">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >角色管理</el-breadcrumb-item>
        <el-breadcrumb-item >新增角色</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <el-row>
      <el-button icon="el-icon-arrow-left" @click="GetRoleList">返回列表</el-button>
    </el-row>
    <br>
    <el-card>
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="角色名称">
            <el-input v-model="form.name" placeholder="(全公司设置统一命名规范)"></el-input>
          </el-form-item>

          <el-form-item label="角色简介">
            <el-input v-model="form.brief"></el-input>
          </el-form-item>

          <el-form-item label="基本权限">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
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
  const cityOptions = ['1', '2', '3', '4']
  export default {
    name:'RoleAdd',
    data(){
      return {
        form:{
            name:'',
            brief:''
        },
        checkAll: false,
        checkedCities: ['1', '2'],
        cities: cityOptions,
        isIndeterminate: true,
      }
    },
    methods:{
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.cities.length
      },
      GetRoleList(){
        this.$router.push({
          name:'role_list'
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
</style>