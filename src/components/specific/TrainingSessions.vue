<template>
   <div>
      <div class="head">
         <h2 class="head__title">Учебные сессии</h2>
         <div>
            <input class="head__input" v-model="searchQuery" @input="filterModules" placeholder="Поиск по названию учебного модуля" />
            <FilterButton :filterImage="''" />
            <FilterButton :filterImage="''" />
            <CreateButton />
         </div>
      </div>
      <table>
         <thead>
            <tr>
               <th>Дата и время</th>
               <th>Статус</th>
               <th>Название учебного модуля</th>
               <th>Тип сессии</th>
               <th>Комната</th>
               <th>Группа</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="module in paginatedModules" :key="new Date()">
               <td>{{ formatPeriodTime(module.start, module.end) }}</td>
               <td>{{ getStatusText(module.status.name) }}</td>
               <td>{{ module.module }}</td>
               <td>{{ getTypeText(module.type.name) }}</td>
               <td>{{ formatNames(module.rooms) }}</td>
               <td>{{ formatNames(module.groups) }}</td>
            </tr>
         </tbody>
      </table>
      <Pagination :totalItems="filteredModules.length" :itemsPerPage="itemsPerPage" @pageChanged="handlePageChange" />
   </div>
</template>

<script>
import FilterButton from '@/components/common/FilterButton.vue';
import CreateButton from '@/components/common/CreateButton.vue';
import Pagination from '@/components/common/Pagination.vue';
import data1 from '@/utils/data1.json';
import { format } from 'date-fns';

export default {
   name: "training-sessions",
   components: {
      FilterButton,
      CreateButton,
      Pagination
   },
   data(){
      return{ 
         modules: [],
         currentPage: 1,
         itemsPerPage: 10,
         searchQuery:''
      }
   },
   computed: {
      paginatedModules() {
         const start = (this.currentPage - 1) * this.itemsPerPage;
         const end = start + this.itemsPerPage;
         return this.filteredModules.slice(start, end);
      },
      filteredModules() {
         if (!this.searchQuery.trim()) return this.modules;
         return this.modules.filter(module => module.module.toLowerCase().includes(this.searchQuery.trim().toLowerCase()));
      }
   },
   methods:{
      formatNames(items) {
         return items.map(item => item.name).join(", ");
      },
      getStatusText(status) {
         switch (status) {
            case 'planned':
               return 'Запланировано';
            case 'completed':
               return 'Завершено';
            default:
               return 'Идет';
         }
      },
      getTypeText(type){
         switch (type) {
            case 'lesson':
               return 'Урок';
            case 'examination':
               return 'Экзамен';
            default:
               return 'Аккредитация';
         }
      },
      formatPeriodTime(startDate, endDate){
         const formattedDate = format(new Date(startDate), 'dd.MM.yyyy');
         const formattedStartTime = format(new Date(startDate), 'HH:mm');
         const formattedEndTime = format(new Date(endDate), 'HH:mm');
         return `${formattedDate}, ${formattedStartTime} - ${formattedEndTime}`;
      },
      handlePageChange(page) {
         this.currentPage = page;
      },
      filterModules() {
         this.currentPage = 1; // При каждом вводе в поле поиска возвращаемся на первую страницу пагинации
      },
   },
   created() {
      this.modules = data1.sessions;
      console.log(this.modules);
   }
}
</script>
<style>
   
</style>