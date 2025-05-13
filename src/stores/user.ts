import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { UserControllerService } from '../../generated/services/UserControllerService'
interface User {
  name: string
  avater: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>();

  async function login(loginName:string, password:string){
    // 登录接口
    const res = await UserControllerService.login(loginName, password);
    if(res.code===0){
      console.log("登录信息：{}",res)
      user.value = {
        name: res.data.userName,
        avater: res.data.avater
      }
    } 
  }
  async function getLoginUser(){
    try {
      // 获取登录用户接口
      const res = await UserControllerService.getLoginUser();
    if(res.code===0){
      console.log("登录信息：{}",res)
      user.value = {
        name: res.data.userName,
        avater: res.data.avater
      }
    }
    }catch (error) {
      console.error('Error fetching login user:', error);
    }
    
    }
  return { user, login , getLoginUser}
})
