<template>
   <button class="head__filter">
      <img :src="filterImage" alt="Filter" />
   </button>
</template>

<script>
export default {
  props: {
    filterImage: String
  }
}
</script>

<style>

</style>
