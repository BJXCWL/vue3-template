# vue3-template

## 项目简介
Vue3企业级开发模板，集成以下技术栈：
- 🔗 核心框架：Vue 3.5 + Vite 6.2
- 🔧 状态管理：Pinia 3.0
- 🛠 路由系统：Vue Router 4.5
- 📝 UI组件库：Element Plus 2.9
- 🔨 测试框架：Playwright 1.51
- 📦 自动导入：unplugin-auto-import

## 功能特性
✅ 路由守卫配置（见`src/access`）
✅ Pinia模块化状态管理（见`src/stores`）
✅ 自动生成的API客户端（基于openapi-typescript-codegen）
✅ Element Plus按需加载
✅ 完善的权限管理示例
✅ 多环境构建配置

## 技术架构
```
├── src
│   ├── access/            # 路由守卫配置
│   ├── assets/            # 静态资源
│   ├── components/        # 全局组件
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia状态管理
│   ├── services/          # API服务层
│   └── views/             # 页面组件
```

## 快速开始
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 生成API客户端（需后端OpenAPI文档）
npx openapi --input http://api.example.com/v3/api-docs --output ./generated
```

## 开发指南
### 路由守卫配置
在`src/access/permission.ts`中实现路由守卫逻辑，支持：
- 页面权限验证
- 动态路由加载
- 登录状态检查

### 状态管理
1. 在`src/stores`中创建新的store模块
2. 使用`defineStore`API定义store：
```typescript
// user.store.ts
export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null
  }),
  actions: {
    async login(payload) {
      // 登录逻辑
    }
  }
})
```

### Element Plus集成
组件按需导入配置见`vite.config.ts`，已配置：
- 中文语言包
- 暗黑主题支持
- 自动组件解析

## API文档
🔗 [在线API文档](http://api.example.com/swagger-ui.html)

## 测试指南
```bash
# 运行E2E测试
npm run test:e2e

# 生成测试报告
npm run test:report
```

## 贡献说明
欢迎通过GitHub提交PR或Issue，请遵循：
1. 在`develop`分支进行开发
2. 提交前运行lint检查：`npm run lint`
3. 重大变更请先创建讨论Issue

## 相关链接
- [Element Plus文档](https://element-plus.org)
- [Vue Router指南](https://router.vuejs.org/zh/)
- [Pinia官方文档](https://pinia.vuejs.org/zh/)
