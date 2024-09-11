<template>
  <div class="about">
    <h1>Esta es una pagina en Acerca </h1>
    <el-table :data="paginatedData" style="width: 100%;">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handlePageChange"
    />
  </div>
</template>

<style>

</style>

<script setup>
import { ref, computed } from 'vue'

    const tableData = ref([])

    const currentPage = ref(1)
    const pageSize = ref(10) // Número de filas por página
    const total = computed(() => tableData.value.length)

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value
      const end = start + pageSize.value
      return tableData.value.slice(start, end)
    })

    const handlePageChange = (page) => {
      currentPage.value = page
    }


 
</script>
