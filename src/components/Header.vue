<template>
   <header class="header">
      <div class="header__container">
         <nav class="navigation">
            <RouterLink :active-class="isActive && 'navigation__link_active'" to="/" class="navigation__link">
               Главная
            </RouterLink>
            <RouterLink :active-class="isActive && 'navigation__link_active'" to="/tasks" class="navigation__link">
               Задачи
            </RouterLink>
         </nav>
      </div>
   </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
   name: "Header",
   components: {
      RouterLink
   },
   data() {
      return {
      };
   },
   methods: {
      isActive(path) {
         return this.$route.path === path;
      },
   },
   mounted() {
   },

}
</script>

<style >
.header {
   background-color: #1b1b30;
   box-shadow: 5px 3px 10px -2px rgba(0, 0, 0, 1.5);
   flex: 0 0 auto;
}

.header__container {
   padding: 15px 0;
   margin: 0 auto;
   width: 95%;
   display: flex;
   align-items: center;
   justify-content: end;
}

.header__logo {
   height: 45px;
   width: 170px;
   object-fit: cover;
}

.navigation {
   background-color: transparent;
   column-gap: 15px;
   display: flex;
   position: static;
   padding: 0;
   height: auto;
   box-shadow: none;
}


.navigation__link {
   border: 1.5px solid #1b1b30;
   background-color: #7a7a7e;
   border-radius: 6px;
   color: #fff;
   font-size: 16px;
   font-weight: 400;
   line-height: 22px;
   padding: 8px 8px;
   text-decoration: none;
   white-space: nowrap;
   color: #1b1b30;
   display: flex;
}

.navigation__link:hover {
   color: #fff;
   border: 1.5px solid #1ab374;
}

.navigation__link_active {
   color: #fff;
   border: none;
   background-color: #1ab374;
}

.navigation__link_active:hover {
   cursor: default;
   border: none;
}


.navigation__icon {
   margin-right: 5px;
   width: 21px;
   height: 20px;
   object-fit: cover;
}

.navigation__link_active {
   color: #fff;
   border: none;
   background-color: #1ab374;
}

.navigation__link_active:hover {
   cursor: default;
   border: none;
}
</style>
