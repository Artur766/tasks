<template>
  <button class="filter">
    <img :src="filterImage" />
  </button>
</template>

<script>
export default {
  props: {
    filterImage: String,
  },
};
</script>

<style>
.filter {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: none;
}

.filter:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
