<template>
    <button class="btn" ><slot></slot></button>
</template>

<script>
    export default {
        name: "my-button",
    }   
</script>


<style scoped>
   .btn{
    cursor: pointer;
        margin-top: 15px;
        align-self: flex-end;
        padding: 10px 15px;
        color: teal;
        background-color: black;
        border: 0;
        color: white;
    }  
</style>