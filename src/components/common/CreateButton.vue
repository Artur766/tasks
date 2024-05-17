<template>
   <button class="head__create">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Создать"
    }
  }
}
</script>

<style>
</style>
