<template>
  <div class="app">
    <main class="main">
      <SidebarMenu />
      <router-view class="content" />
    </main>
  </div>
</template>

<script>
import SidebarMenu from '@/components/layout/SidebarMenu.vue';
export default {
  components: {
    SidebarMenu,
  },
  created() {
    this.$store.dispatch('fetchCurrentUser');
  },
};
</script>

<style>
body {
  font-family: 'Manrope', sans-serif;
  background-color: #f4f4f8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  column-gap: 8px;
}
</style>
