<template>
   <div>
      <button @click="toggleMenu">{{ isMenuOpen ? '<' : '>' }}</button>

      <div class="sidebar" :class="{ 'hidden': !isMenuOpen }">
         <div class="header">
            <img class="header__logo" />
            <h1 class="header__title">Сим центр</h1>
         </div>

         <ul class="navigation">
            <li v-for="item in navLinks" :key="item.name" :class="{ 'active': $route.path === item.route }">
               <img class="navigation__imgae" :src="`@/assets/images/${item.imageName}.svg`"
                  :class="{ 'active': $route.path === item.route }" />
               <router-link class="navigation__link" to="/training-sessions">{{ item.name }}</router-link>
            </li>
         </ul>

         <div class="profile">
            <div class="profile__container-info">
               <p class="profile__name">{{ currentUser.name }}</p>
               <p class="profile__post">{{ currentUser.post }}</p>
            </div>
            <img class="profile__photo" :src="currentUser.photo" />
         </div>

         <div class="logout">
            <button class="logout__btn" @click="handlerLogout"></button>
            <p class="logout__text">Выйти</p>
         </div>

         <select v-model="selectedLanguage" class="language-select">
            <option value="ru" class="language-option">
               <img src="@/assets/images/russian-flag.svg" alt="Russian Flag" class="language-option__flag" /> Русский
            </option>
            <option value="en" class="language-option">
               <img src="@/assets/images/english-flag.svg" alt="English Flag" class="language-option__flag" /> English
            </option>
         </select>

         <p class="version">Версия 1.02</p>
      </div>
   </div>
</template>

<script>
import navLinks from '@/utils/navLinks.js';
export default {
   name: "sidebar-menu",
   data(){
      return {
         navLinks,
         selectedLanguage: 'ru',
         isMenuOpen: true
      }
   },
   computed: {
      currentUser(){
         return this.$store.getters.getCurrentUser;
      },
   },
   methods: {
      handlerLogout(){
         //Реализация метода выхода из системы
      },
      toggleMenu() {
         this.isMenuOpen = !this.isMenuOpen;
      }
   }
}
</script>

<style scoped>
.hidden{
   display: none;
}
</style>