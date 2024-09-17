
<template>
  <div class="main-layout">
    <!-- Sidebar -->
    <Sidebar v-if="token" />
    
    <!-- Contenido principal -->
    <div :class="{token : 'content'}">
      <main>
        <!-- El RouterView renderiza las rutas aquí -->
        <RouterView />
      </main>
    </div>
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Sidebar from './views/layouts/Sidebar.vue';
import LoginView from './views/auth/loginView.vue';
import { ref } from 'vue';
    const token = localStorage.getItem('token');
    const prop = defineProps()
</script>
<style scoped>
.main-layout {
  display: flex;
  align-content: center;
}

.sidebar {
  width: 250px;
}

.content {
  flex: 1;
  padding: 20px;
}

header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
