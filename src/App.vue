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
}
</script>

<style scoped>
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
