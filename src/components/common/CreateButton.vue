<template>
  <button class="head__create">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Создать',
    },
  },
};
</script>

<style>
.head__create {
  background-color: #3761f3;
  border: none;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  color: white;
  border-radius: 12px;
  width: 112px;
  height: 44px;
}

.head__create:hover {
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #3761f3;
  color: black;
}
</style>
