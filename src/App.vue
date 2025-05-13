<template>
    <div class="app">
        <template v-if="route.path.startsWith('/login')||route.path.startsWith('/register')||route.path.startsWith('/forget')">
      <router-view />
    </template>
    <template v-else>
        <home/>
    </template>
        
    </div>
</template>
<script setup lang="ts">
import home from './views/home/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped>
.app {
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
