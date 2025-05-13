<template>
    <el-card class="profile-card">
      <div class="profile-header">
        <el-avatar :size="120" src="user.avatar" />
        <div class="info">
          <h2>{{ user.name }}</h2>
          <p class="email">{{ user.email }}</p>
        </div>
        <el-button type="primary" class="edit-btn" @click="onEdit">编辑资料</el-button>
      </div>
  
      <el-divider />
  
      <el-form :model="user" label-width="100px" class="profile-form">
        <el-form-item label="用户名">
          <el-input v-model="user.username" readonly />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="user.name" placeholder="输入昵称" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email" placeholder="输入邮箱" />
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" v-model="user.bio" placeholder="说点什么..." rows="3" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const user = reactive({
    avatar: 'https://via.placeholder.com/120',
    name: '张三',
    username: 'zhangsan',
    email: 'zhangsan@example.com',
    bio: '这是一段个人简介。'
  })
  
  const onEdit = () => {
    // 进入编辑状态，可扩展
  }
  const onSave = () => {
    // 调用 API 保存用户信息
    ElMessage.success('保存成功！')
  }
  const onCancel = () => {
    // 取消编辑逻辑
    ElMessage.info('已取消')
  }
  </script>
  
  <style scoped>
  .profile-card {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info {
    flex: 1;
    margin-left: 20px;
  }
  .info h2 {
    margin: 0;
    font-size: 24px;
  }
  .email {
    color: #888;
    margin-top: 4px;
  }
  .edit-btn {
    align-self: flex-start;
  }
  .profile-form {
    margin-top: 20px;
  }
  </style>
  