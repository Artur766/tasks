<template>
    <div class="post">
        <div v-if="!isEditing" class="post__container">
            <div>
                <div>Название:<strong> {{ post.title }}</strong></div>
                <div>Описание:<strong> {{ post.body }}</strong></div>
            </div>
            <div class="post__btn-container">
                <my-button @click="editPost">Редактировать</my-button>
                <my-button @click="deletePost">Удалить</my-button>
            </div>
        </div>
        <div v-else class="post__container">
            <div>
                <div class="post__input-container">Название: <input class="post__input" v-model="editedTitle" /></div>
                <div class="post__input-container">Описание: <input class="post__input" v-model="editedBody" /></div>
            </div>
            <div class="post__btn-container">
                <my-button @click="savePost">Сохранить</my-button>
                <my-button @click="cancelEdit">Отмена</my-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isEditing: false,
            editedTitle: this.post.title,
            editedBody: this.post.body,
        };
    },
    methods: {
        deletePost() {
            this.$emit("delete", this.post.id);
        },
        editPost() {
            this.isEditing = true;
        },
        savePost() {
            const editedPost = {
                id: this.post.id,
                title: this.editedTitle,
                body: this.editedBody,
            };
            this.$emit("save", editedPost);
            this.isEditing = false;
        },
        cancelEdit() {
            this.isEditing = false;
        },
    },
};
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}

.post__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post__btn-container {
    display: flex;
    column-gap: 8px;
}

.post__input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.post__input {
    width: 100%;
    border: 1px solid teal;
    padding: 5px;
    margin-left: 5px;
}
</style>