<template>
   <main class="main">
      <PostForm @create="createPost"></PostForm>
      <PostList :posts="posts" @delete="deletePost"></PostList>
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
        posts: [
            { id: 1, title:"js1", body: "Описание"},
            { id: 2, title: "js2", body: "Описание" },
            { id: 3, title: "js3", body: "Описание" },
         ],
      }
   },
   computed: {
      
   },
   methods: {
      createPost(post){
         this.posts.push(post)
      },
      deletePost(idPost){
         this.posts = this.posts.filter(post => post.id !== idPost)
      }
   },
   mounted() {
   }
}
</script>

<style>
   .main{
      width: 95%; 
      margin:  0 auto; 
      padding-top: 20px;
   }
</style>