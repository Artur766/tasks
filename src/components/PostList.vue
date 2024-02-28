<template>
     <div>
        <h3>Список пользователей</h3>
        <Post
            :post="post"
            v-for="post in posts"
            :key="post.id"
            @delete="deletePost"
        />
     </div>
</template>

<script>
import Post from './Post.vue';  
export default {
    components: {
        Post
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        deletePost(idPost){
            this.$emit("delete", idPost)
        }
    }
}
</script>

<style>
  
</style>