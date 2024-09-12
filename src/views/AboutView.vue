<template>
  <div class="about container">
    <h1>Libros</h1>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="Nombre" width="180" />
      <el-table-column prop="price" label="Precio" />
    </el-table>

  
  </div>
</template>

<style>

</style>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue'

    const baseUrl = import.meta.env.VITE_API_BOOKS;
    const tableData = ref([])

    onMounted(()=>{
    
        axios.get(baseUrl).then(response=>{
          tableData.value = response.data.data.data.map(value =>{
              return {
                id:value.id,
                name:value.volumeInfo.title,
                price:Math.round(Math.random() * 1000)
              }
          })  
          console.log(tableData.value)
        }).catch(error=>{
            console.error(error)
        })
    })


 
</script>
