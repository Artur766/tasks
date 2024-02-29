<template>
    <div>
        <h3 v-if="posts.length > 0">Спсиок задач</h3>
        <h3 v-else>Задач пока нет</h3>
        <Post :post="post" v-for="post in posts" :key="post.id"/>
    </div>
</template>

<script>
import Post from './Post.vue';
export default {
    components: {
        Post
    },
    computed: {
        posts() {
            return this.$store.getters.getPosts;
        }
    },
    mounted() {
       this.$store.dispatch("loadPostsFromLocalStorage");
    }
}
</script>

<style></style>