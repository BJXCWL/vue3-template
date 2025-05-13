<template>
  <div class="home">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
       
        <el-main><RouterView/></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<style scoped>
.home {
    height: 100%;
    :deep(.el-header) {
        height: 70px;
        
    }
    :deep(.el-main) {
        height: calc(100vh - 70px);
        background-color: rgb(243.9, 244.2, 244.8);
    }
}
</style>