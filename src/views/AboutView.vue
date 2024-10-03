<template>
  <div class="about container" style="width: 800px;">
    <h1>Libros</h1>
    <!--el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="Nombre" width="180" />
      <el-table-column prop="price" label="Precio" />
    </el-table-->

    <InfoView :total="total" :info="infoView" @tocame="change" />

  </div>


</template>

<style>

</style>

<script setup>
import axios from 'axios';
import InfoView from './InfoView.vue';
import { ref, computed, onMounted } from 'vue'

    const baseUrl = import.meta.env.VITE_API_BOOKS;
    const tableData = ref([])
    const infoView = ref([])
    const total = ref(0)
    onMounted(()=>{    
        axios.get(baseUrl).then(response=>{
          tableData.value = response.data.data.data.map(value =>{
               let random = Math.round(Math.random() * 1000)
               total.value += random
              return {
                id:value.id,
                name:value.volumeInfo.title,
                price:random
              }
          }) 
          infoView.value = tableData.value
        }).catch(error=>{
            console.error(error)
        })
    })

    function change(e){
      console.log(e)
    }

 
</script>
