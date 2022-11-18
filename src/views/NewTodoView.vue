<script setup>
import VueTableLite from 'vue3-table-lite'
import { reactive  } from 'vue'



      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Email",
            field: "email",
            width: "15%",
            sortable: true,
          },
        ],
        rows: [{
            id: 1,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 2,
            name: 'rose',
            email: 'example@example.com'
        },
        {
            id: 3,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 4,
            name: 'rose',
            email: 'example@example.com'
        },
        {
            id: 5,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 6,
            name: 'rose',
            email: 'example@example.com'
        },{
            id: 7,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 8,
            name: 'rose',
            email: 'example@example.com'
        },
        {
            id: 9,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 10,
            name: 'rose',
            email: 'example@example.com'
        },
        {
            id: 11,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 12,
            name: 'rose',
            email: 'example@example.com'
        } ,
        {
            id: 13,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 14,
            name: 'rose',
            email: 'example@example.com'
        },
        
        
        ],
        totalRecordCount: 14,
        sortable: {
          order: "id",
          sort: "asc",
        },
      });
  

</script>
<template>
    <h2> Nuevo Elemento todo</h2>
    <VueTableLite
      :is-static-mode="true"
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @is-finished="table.isLoading = false"
    ></VueTableLite>
                        

</template>
<style scope>

</style>
