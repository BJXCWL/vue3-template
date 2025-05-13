<template>
    <div class="login-page">
      <div class="login-card">
        <div class="login-header">
          <h1 class="login-title">欢迎登录</h1>
        </div>
        <el-form
          ref="loginForm"
          :model="form"
          :rules="rules"
          label-position="top"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              class="login-input"
              clearable
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              class="login-input"
              show-password
            />
          </el-form-item>
          <el-form-item class="form-footer">
            <el-checkbox v-model="form.remember" class="remember-checkbox">记住我</el-checkbox>
            <a href="#" class="forgot-link">忘记密码?</a>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login-button"
              :loading="loading"
              @click="submit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <p class="register-text">
          还没有账号？
          <router-link to="/register" class="register-link">
            注册
          </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { ElForm } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user' 
  const router = useRouter()
  const loginForm = ref<InstanceType<typeof ElForm>>()
  const loading = ref(false)
  const userStore = useUserStore();
  const form = reactive({
    username: '',
    password: '',
    remember: false,
  })
  
  const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }
  
  const submit = () => {
    loginForm.value?.validate(async valid => {
      if (!valid) return
      loading.value = true
      try {
        // TODO: 调用登录接口
        await userStore.login(form.username, form.password)
        await userStore.getLoginUser();

        console.log('登录成功',userStore.user)
       
        router.push('/')
      } finally {
        loading.value = false
      }
    })
  }
  </script>
  
  <style scoped>
  /* Container and card */
  .login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .login-card {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 32px;
  }
  
  /* Header */
  .login-header {
    text-align: center;
    margin-bottom: 24px;
  }
  .login-logo {
    width: 48px;
    height: 48px;
    transition: transform 0.3s;
  }
  .login-logo:hover {
    transform: scale(1.1);
  }
  .login-title {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 800;
    color: #2d3748;
  }
  .login-subtitle {
    margin-top: 8px;
    font-size: 14px;
    color: #4a5568;
  }
  
  /* Form */
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .login-input ::v-deep .el-input__inner {
    border-radius: 12px;
    height: 44px;
    transition: border-color 0.3s;
  }
  .login-input ::v-deep .el-input__inner:focus {
    border-color: #5a67d8;
  }
  
  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .remember-checkbox ::v-deep .el-checkbox__label {
    color: #4a5568;
  }
  .remember-checkbox ::v-deep .el-checkbox:hover .el-checkbox__label {
    color: #5a67d8;
  }
  .forgot-link {
    font-size: 14px;
    color: #5a67d8;
    text-decoration: none;
    transition: text-decoration 0.2s;
  }
  .forgot-link:hover {
    text-decoration: underline;
  }
  
  /* Button */
  .login-button ::v-deep .el-button {
    width: 100%;
    height: 48px;
    border-radius: 12px;
    background-color: #5a67d8;
    border: none;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  .login-button ::v-deep .el-button:hover {
    background-color: #4c51bf;
    box-shadow: 0 4px 14px rgba(72, 62, 183, 0.4);
  }
  .login-button ::v-deep .el-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(90, 103, 216, 0.6);
  }
  
  /* Register text */
  .register-text {
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: #718096;
  }
  .register-link {
    margin-left: 4px;
    font-weight: 500;
    color: #5a67d8;
    text-decoration: none;
  }
  .register-link:hover {
    text-decoration: underline;
  }
  </style>
  