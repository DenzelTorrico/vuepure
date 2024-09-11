<template>
  <div>
    <h2>Libros disponibles:</h2>
  
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

// Definir una referencia reactiva para almacenar los libros
const vehicules = ref([]);
const baseUrl = import.meta.env.VITE_API_LUMEN;
// Función para cargar los datos de la API
const loadData = async () => {
  try {
   const response = await axios.get(`${baseUrl}/vehicules`);
   console.log(response.data); // Mostrar los libros en la consola
  } catch (error) {
    console.error("Error al cargar los libros:", error);
  }
};

// Ejecutar la función cuando el componente esté montado
onMounted(() => {
  loadData();
});
</script>
