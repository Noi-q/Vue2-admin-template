<template>
  <div class="Home">
    <div>

      <el-menu 
      default-active="1-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose">
        <div class="logo-div">
          <img src="https://avatars.githubusercontent.com/u/76736117?v=4" class="logo">
          <br>
          <i>Admin</i>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">账号管理</span>
          </template>

          <el-menu-item-group>
            <el-menu-item 
            router="true"
            index="1-1"
            @click="GetAccountList"
            >账号列表</el-menu-item>
            <el-menu-item 
            router="true"
            index="1-2"
            @click="GetAccountAdd"
            >添加账号</el-menu-item>
          </el-menu-item-group>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">角色管理</span>
          </template>

          <el-menu-item-group>
            <el-menu-item 
            router="true"
            index="2-1"
            @click="GetRoleList"
            >角色列表</el-menu-item>
            <el-menu-item 
            router="true"
            index="2-2"
            @click="GetRoleAdd"
            >新增角色</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">权限管理</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="3-1">权限列表</el-menu-item>
            <el-menu-item index="3-2">新增权限</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        -->
        <el-menu-item index="4">
          <i class="el-icon-link"></i>
          <span slot="title">
            <a href="https://t.me/Noi_q">Telegram</a>
          </span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-link"></i>
          <span slot="title">
            <a href="https://t.me/PublicGoodVPN">免费公益机场推荐</a>
          </span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-link"></i>
          <span slot="title">
            <a href="https://t.me/Noi_q">诚招广告位</a>
          </span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="Admin">
      <el-card class="Admin-box">
        <div>
          <router-view></router-view>
        </div>
      </el-card>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'Home',
    data(){
      return {
        isCollapse: false,
        PathSate:''
      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 账号列表
      GetAccountList(){
        this.$router.push({
          // path:'/home/list'
          name:'list'
        })
      },
      // 添加账号
      GetAccountAdd(){
        this.$router.push({
          // path:'/home/add'
          name:'add'
        })
      },
      // 角色列表
      GetRoleList(){
        this.$router.push({
          name:'role_list'
        })
      },
      // 角色添加
      GetRoleAdd(){
        this.$router.push({
          name:'role_add'
        })
      }
    }
  }
</script>

<style scoped>
  .logo-div{
    text-align: center;
  }
  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50px 50px 50px 50px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo{
    position: fixed;
    height: 100%;
    overflow: auto;
  }
  .Admin{
    margin-left: 200px;
    position: relative;
    /* background-color: gray; */
  }
  .Admin-box{
    background-color: #F5F5F5;
  }
  .Admin-State{
    padding: 10px;
    background-color: white;
    /* border-radius: 10px 10px 10px 10px; */
  }
</style>