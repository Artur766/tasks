<template>
   <div>
      <div class="head">
         <h2 class="head__title">Учебные сессии</h2>
         <div>
            <input class="head__input" />
            <FilterButton :filterImage="''" />
            <FilterButton :filterImage="''" />
            <CreateButton />
         </div>
      </div>
      <table>
         <thead>
            <tr>
               <th>1</th>
               <th>1</th>
               <th>1</th>
               <th>1</th>
               <th>1</th>
               <th>1</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="module in modules">
               <td>module</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
import FilterButton from '@/components/common/FilterButton.vue'
import CreateButton from '@/components/common/CreateButton.vue'
export default {
   name: "training-sessions",
   components: {
      FilterButton,
      CreateButton
   },
   data(){
      return{ 
         modules: [],
      }
   }
}
</script>
<style>
   
</style>