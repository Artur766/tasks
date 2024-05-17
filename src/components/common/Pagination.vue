<template>
   <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
      <span v-for="page in pages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">{{ page }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
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
    }
  },
  data() {
    return {
      currentPage: 1,
    }
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
          pages = [1, '...', this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
        } else {
          pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
        }
      }
      return pages;
    }
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
    }
  }
}
</script>

<style scoped>
.pagination {
   display: flex;
   align-items: center;
}

.pagination span {
   margin: 0 5px;
   cursor: pointer;
}

.pagination span.active {
   font-weight: bold;
}

button:disabled {
   cursor: not-allowed;
}
</style>
