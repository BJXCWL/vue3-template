<template>
    <div class="register-page">
      <div class="register-card">
        <h2 class="register-title">创建新账号</h2>
        <el-form
          ref="registerForm"
          :model="form"
          :rules="rules"
          label-position="top"
          class="register-form"
        >
        <el-form-item label="用户名" prop="email">
            <el-input
              v-model="form.name"
              placeholder="请输入用户名"
              class="register-input"
              clearable
            />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="form.email"
              placeholder="请输入邮箱"
              class="register-input"
              clearable
            />
          </el-form-item>
  
          <el-form-item label="验证码" prop="code">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              class="register-input code-input"
              clearable
            >
              <template #append>
                <el-button
                  :disabled="countdown > 0"
                  @click="sendCode"
                  class="code-button"
                >
                  <span v-if="countdown === 0">获取验证码</span>
                  <span v-else>{{ countdown }} 秒</span>
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="email">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              class="register-input"
              clearable
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="email">
            <el-input
              v-model="form.confirmPassword"
              placeholder="请输入密码"
              class="register-input"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="register-button"
              :loading="loading"
              @click="submit"
            >
              注册
            </el-button>
          </el-form-item>
        </el-form>
        <p class="login-link">
          已有账号？
          <router-link to="/login" class="login-text-link">去登录</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { ElForm } from 'element-plus'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const registerForm = ref<InstanceType<typeof ElForm>>()
  const loading = ref(false)
  const countdown = ref(0)
  let timer: number | null = null
  
  const form = reactive({
    name: '',
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  })
  
  const rules = {
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '邮箱格式不正确', trigger: ['blur', 'change'] }
    ],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ]
  }
  
  function sendCode() {
    registerForm.value?.validateField('email', valid => {
      if (valid) {
        // TODO: 调用发送验证码接口
        countdown.value = 60
        timer = window.setInterval(() => {
          if (countdown.value > 0) {
            countdown.value--
          } else {
            clearInterval(timer!)          
          }
        }, 1000)
      }
    })
  }
  
  function submit() {
    registerForm.value?.validate(async valid => {
      if (!valid) return
      loading.value = true
      try {
        // TODO: 调用注册接口
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push('/login')
      } finally {
        loading.value = false
      }
    })
  }
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .register-card {
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    padding: 32px;
  }
  .register-title {
    font-size: 24px;
    font-weight: 700;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 24px;
  }
  .register-form {
    display: flex;
    flex-direction: column;
  }
  .register-input ::v-deep .el-input__inner {
    height: 38px;
    transition: border-color 0.3s;
  }
  .register-input ::v-deep .el-input__inner:focus {
    border-color: #5b79f4;
  }
  .code-input {
    display: flex;
  }
  .code-button ::v-deep .el-button {
    border-radius: 8px;
    margin-left: 8px;
    height: 44px;
    padding: 0 12px;
    background: #5b79f4;
    color: #fff;
    transition: background 0.3s;
  }
  .code-button ::v-deep .el-button:disabled {
    background: #a0aec0;
    cursor: not-allowed;
  }
  .register-button ::v-deep .el-button {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: #5b79f4;
    border: none;
    font-size: 16px;
    color: #fff;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  .register-button ::v-deep .el-button:hover {
    background-color: #4a67d0;
    box-shadow: 0 4px 12px rgba(74, 103, 208, 0.4);
  }
  .register-button ::v-deep .el-button:focus {
    box-shadow: 0 0 0 3px rgba(91, 121, 244, 0.6);
  }
  .login-link {
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: #718096;
  }
  .login-text-link {
    margin-left: 4px;
    color: #5b79f4;
    font-weight: 500;
    text-decoration: none;
  }
  .login-text-link:hover {
    text-decoration: underline;
  }
  </style>
  