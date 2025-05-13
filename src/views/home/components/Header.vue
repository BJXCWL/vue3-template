<template>
    <el-header class="app-header">
      <div class="header-content">
        <div class="logo-container" @click="goHome">
          <img :src="user?.avater ? user?.avater:logoSrc" alt="Logo" class="logo" />
        </div>
  
        <el-menu
          :default-active="activePath"
          mode="horizontal"
          class="el-menu-demo"
          @select="onSelect"
        >
          <el-menu-item
            v-for="route in menuRoutes"
            :key="route.path"
            :index="route.path"
          >
            {{ route.meta.title }}
          </el-menu-item>
        </el-menu>
  
        <div class="avatar-container">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-space>
              <el-avatar :src="userAvatar" />
              <p>{{user?.name ? user.name : "未登录"}}</p>
            </el-space>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click.native="goProfile">个人资料</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
        
     
        </div>
      </div>
    </el-header>
  </template>
  
  <script setup lang="ts">
  import { computed,ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import type { Router, RouteRecordRaw } from 'vue-router'
  import logoSrc from '@/assets/logo.png'
  import { useUserStore } from '@/stores/user'
  const router: Router = useRouter()
  const route = useRoute()
  
  const userStore = useUserStore()

  const user = computed(() => userStore.user)
  
  function goHome() {
    router.push('/')
  }
  
  const menuRoutes = computed(() => {
    return router.getRoutes()
      .filter((r: RouteRecordRaw) => r.meta && !r.meta.hideMenu)
  })
  
  const activePath = computed(() => route.path)
  
  function onSelect(path: string) {
    router.push(path)
  }
  
  const userAvatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  
  function goProfile() {
    router.push('/profile')
  }
  
  function logout() {
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .app-header {
    background-color: #fff;
    box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
    padding: 0;
    height: 70px !important;
    position: relative;
    z-index: 1000;
  }
  .header-content {

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }
  .logo-container {
    cursor: pointer;
  }
  .logo {
    height: 40px;
  }
  .el-menu-demo {
    background-color: transparent;
    border-bottom: none;
    flex: 1;
    margin: 0 48px;
  }
  .el-menu-demo ::v-deep .el-menu-item {
    font-size: 16px;
    color: #4a4a4a;
    transition: color 0.3s;
  }
  .el-menu-demo ::v-deep .el-menu-item:hover {
    color: #409EFF;
  }
  .el-menu-demo ::v-deep .el-menu-item.is-active {
    color: #409EFF;
  }
  .avatar-container {
    display: flex;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  </style>
  