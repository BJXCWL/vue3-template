<template>
    <el-card class="forget-password-card">
      <h2 class="title">忘记密码</h2>
      <el-form
        :model="form"
        :rules="rules"
        ref="formRef"
        label-width="100px"
        label-position="left"
        label-align="left"
        class="forget-form"
      >
        <!-- 邮箱 -->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
  
        <!-- 邮箱验证码 -->
        <el-form-item label="验证码" prop="code">
          <el-row :gutter="8">
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                :disabled="sending"
                @click="sendCode"
                style="width: 100%;"
              >
                {{ sending ? countdown + 's 后重发' : '发送验证码' }}
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
  
        <!-- 新密码 -->
        <el-form-item label="新密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
  
        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="confirm">
          <el-input
            type="password"
            v-model="form.confirm"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
  
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">重置密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  // 表单状态
  const formRef = ref(null)
  const form = reactive({
    email: '',
    code: '',
    password: '',
    confirm: ''
  })
  
  // 发送验证码状态
  const sending = ref(false)
  const countdown = ref(60)
  let timer = null
  
  // 校验规则
  const validateConfirm = (rule, value, callback) => {
    if (value !== form.password) {
      callback(new Error('两次输入的密码不一致'))
    } else {
      callback()
    }
  }
  
  const rules = {
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码至少 6 位', trigger: 'blur' }
    ],
    confirm: [
      { required: true, message: '请确认密码', trigger: 'blur' },
      { validator: validateConfirm, trigger: 'blur' }
    ]
  }
  
  // 发送验证码（占位方法）
  const sendCode = () => {
    if (sending.value) return
    formRef.value.validateField('email', valid => {
      if (!valid) return
      sending.value = true
      countdown.value = 60
      // TODO: 调用接口 sendEmailCode(form.email)
      ElMessage.success('验证码已发送，请注意查收')
      timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
          clearInterval(timer)
          sending.value = false
        }
      }, 1000)
    })
  }
  
  // 提交表单
  const onSubmit = () => {
    formRef.value.validate(valid => {
      if (!valid) return
      // TODO: 调用重置密码接口 resetPassword({ email, code, password })
      ElMessage.success('密码重置成功，请使用新密码登录')
      // 清空表单或跳转登录页
    })
  }
  </script>
  
  <style scoped>
  .forget-password-card {
    max-width: 400px;
    margin: 80px auto;
    padding: 20px;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .forget-form {
    width: 100%;
  }
  </style>
  