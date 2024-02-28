<template>
    <div>
        <h3 v-if="posts.length > 0">Спсиок задач</h3>
        <h3 v-else>Задач пока нет</h3>
        <Post :post="post" v-for="post in posts" :key="post.id" @delete="deletePost" @save="saveEdit" />
    </div>
</template>

<script>
import Post from './Post.vue';
export default {
    components: {
        Post
    },
    data() {
        return {

        }
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        deletePost(idPost) {
            this.$emit("delete", idPost)
        },
        saveEdit(editedPost) {
            this.$emit("save", editedPost)
        }
    }
}
</script>

<style></style>