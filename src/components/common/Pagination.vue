<template>
  <div class="pagination" v-if="pages.length > 1">
    <button
      style="margin-left: 16.25px"
      class="pagination__button"
      @click="prevPage"
      :disabled="currentPage === 1"
    ></button>
    <span
      class="pagination__span"
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </span>
    <button
      style="rotate: 270deg"
      class="pagination__button"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    pages() {
      let pages = [];
      if (this.totalPages <= 5) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (this.currentPage <= 3) {
          pages = [1, 2, 3, 4, 5, '...', this.totalPages];
        } else if (this.currentPage >= this.totalPages - 2) {
          pages = [
            1,
            '...',
            this.totalPages - 4,
            this.totalPages - 3,
            this.totalPages - 2,
            this.totalPages - 1,
            this.totalPages,
          ];
        } else {
          pages = [
            1,
            '...',
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            '...',
            this.totalPages,
          ];
        }
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page === '...') return;
      this.currentPage = page;
      this.$emit('pageChanged', this.currentPage);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit('pageChanged', this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit('pageChanged', this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
@import url(../../assets/styles/pagination.css);
</style>
