<template>
    <div class="post" >
        <div>
            <div>Название:<strong> {{ post.title }}</strong></div>
            <div>Описание:<strong> {{ post.body }}</strong></div>
        </div>
        <div>
            <div class="post__btn">
                <my-button @click="deletePost">Удалить</my-button>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
       props: {
            post: {
                type: Object,
                required: true,
            }
       },
       methods: {
            deletePost(){
                this.$emit("delete", this.post.id);
            }
       }
    }
</script>

<style scoped>
  .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
