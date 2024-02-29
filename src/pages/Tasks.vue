<template>
   <main class="main">
      <PostForm @create="createPost"></PostForm>
      <PostList></PostList>
   </main>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
   components: { PostForm, PostList },
   name: "Tasks",
   methods: {
      createPost(post) {
         this.$store.dispatch("createPost", post);
      },
   },
}
</script>

<style>
.main {
   width: 95%;
   margin: 0 auto;
   padding-top: 20px;
}
</style>