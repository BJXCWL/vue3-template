import router from '@/router'
import { useUserStore } from '@/stores/user' 

// 白名单路径
const whiteList = ['/forget', '/register']

router.beforeEach(async(to, from, next) => {
  const userStore = useUserStore()
  let loginUser = userStore.user
  // 1.白名单路径直接放行
  if (whiteList.includes(to.path)) {
    return next()
  }
  if (!loginUser || loginUser == undefined) {
      await userStore.getLoginUser()
      loginUser = userStore.user
      //1.未登录
      if (!loginUser || loginUser == undefined) {
        //1.1未登录访问白名单路径，直接放行
        if(whiteList.includes(to.path) || to.path === '/login'){
          next()
        }else{
        //1.2未登录访问其他路径，跳转到登录界面
          next('/login')
        }
      } else {
        //2.已登录访问登录界面，直接跳转到首页
        if(to.path === '/login'){
          next('/')
        }else{
          //3.已登录，访问其他界面，直接放行
          next()
        }        
      }
    
  } else {
    next()
  }
})