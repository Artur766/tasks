<template>
  <div class="sidebar-wrapper">
    <button
      :class="{ button_toggle_visable: !isMenuOpen }"
      class="sidebar__toggle"
      @click="toggleMenu"
    ></button>
    <div :class="['sidebar', { hidden: !isMenuOpen }]">
      <div :class="{ hidden: !isMenuOpen }">
        <div class="header">
          <div class="header__logo"></div>
          <h1 class="header__title">Сим центр</h1>
        </div>

        <ul class="navigation">
          <li
            class="navigation__container"
            v-for="item in navLinks"
            :key="item.name"
            :class="{ navigation__container_active: isActive(item.route) }"
            @click="navigateTo(item.route)"
          >
            <img class="icon" :src="item.imageName" />
            <router-link
              class="navigation__link"
              :to="item.route"
              :class="{ navigation__link_active: isActive(item.route) }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="profile">
          <div class="profile__container-info">
            <p class="profile__name">{{ currentUser.name }}</p>
            <p class="profile__post">{{ currentUser.post }}</p>
          </div>
          <img v-if="currentUser.photo" class="profile__photo-image" :src="currentUser.photo" />
          <div v-else class="profile__photo-div">
            <span>{{ getFirstWordName(currentUser.name) }}</span>
          </div>
        </div>

        <div class="logout">
          <img class="icon" src="@/assets/images/log-out.svg" alt="иконка" />
          <button class="logout__btn" @click="handlerLogout">Выйти</button>
        </div>

        <div class="select-container">
          <img
            class="icon icon-select"
            :src="selectedLanguage === 'ru' ? russianFlag : ''"
            alt="Russian Flag"
          />
          <select v-model="selectedLanguage" class="language-select">
            <option value="ru" class="language-option">Русский</option>
          </select>
        </div>

        <p class="version">Версия 1.02</p>
      </div>
    </div>
  </div>
</template>

<script>
import navLinks from '@/utils/navLinks.js';
import russianFlag from '@/assets/images/flag.svg';
export default {
  name: 'sidebar-menu',
  data() {
    return {
      navLinks,
      selectedLanguage: 'ru',
      isMenuOpen: true,
      russianFlag,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    getFirstWordName(fullnName) {
      return fullnName.split(' ')[0][0] + fullnName.split(' ')[1][0];
    },
    handlerLogout() {
      //Реализация метода выхода из системы
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import url(../../assets/styles/sidebar.css);
</style>
