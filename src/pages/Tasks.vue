<template>
   <main class="main">
      <PostForm @create="createPost"></PostForm>
      <PostList :posts="posts" @delete="deletePost" @save="saveEdit"></PostList>
   </main>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
   components: { PostForm, PostList },
   name: "Tasks",
   data() {
      return {
         posts: this.loadPostsFromLocalStorage() || [],
      }
   },
   computed: {

   },
   methods: {
      createPost(post) {
         this.posts.push(post);
         this.savePostsToLocalStorage();
      },
      deletePost(idPost) {
         this.posts = this.posts.filter(post => post.id !== idPost);
         this.savePostsToLocalStorage();
      },
      saveEdit(editedPost) {
         this.posts = this.posts.map(post => {
            if (editedPost.id === post.id) {
               return editedPost;
            }
            return post;
         });
         this.savePostsToLocalStorage();
      },
      savePostsToLocalStorage() {
         localStorage.setItem('posts', JSON.stringify(this.posts));
      },
      loadPostsFromLocalStorage() {
         const storedPosts = localStorage.getItem('posts');
         return storedPosts ? JSON.parse(storedPosts) : null;
      }
   },
   mounted() {
   }
}
</script>

<style>
.main {
   width: 95%;
   margin: 0 auto;
   padding-top: 20px;
}
</style>