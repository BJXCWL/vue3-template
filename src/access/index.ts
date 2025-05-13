import router from '@/router'
import { useUserStore } from '@/stores/user' 

// 白名单路径
const whiteList = ['/login', '/register']

router.beforeEach(async(to, from, next) => {
  // 白名单路径直接放行
  if (whiteList.includes(to.path)) {
    return next()
  }

  const userStore = useUserStore()
  let loginUser = userStore.user

  console.log("loginUser1:", loginUser)

  if (!loginUser) {
    console.log("loginUser为null，调用getLoginUser...")
    try {
      await userStore.getLoginUser()
      loginUser = userStore.user
      console.log("loginUser2:", loginUser)
      
      if (!loginUser) {
        console.log("loginUser仍为null，跳转到登录页...")
        next('/login')
      } else {
        next()
      }
    } catch (error) {
      console.error("获取用户信息失败:", error)
      next('/login')
    }
  } else {
    next()
  }
})