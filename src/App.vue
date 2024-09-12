<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Sidebar from './views/layouts/Sidebar.vue';
</script>

<template>
  <div class="main-layout">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Contenido principal -->
    <div class="content">
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Libros</RouterLink>
        </nav>
      </header>

      <main>
        <!-- El RouterView renderiza las rutas aquí -->
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
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
