<template>
  <section class="training-sessions">
    <div class="head">
      <h2 class="head__title">Учебные сессии</h2>
      <div class="head_container-filter">
        <input
          class="head__input"
          v-model="searchQuery"
          @input="filterModules"
          placeholder="Поиск"
        />
        <FilterButton :filterImage="filterImage" />
        <FilterButton :filterImage="sortImage" />
        <CreateButton />
      </div>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="table-th__date">
              Дата и время
              <button
                :class="[
                  'table__btn-time-filter',
                  { 'table__btn-time-filter_rotate': sortOrder !== 'asc' },
                ]"
                @click="sortModulesByDate"
              ></button>
            </th>
            <th class="table-th__status">Статус</th>
            <th class="table-th__name">Название учебного модуля</th>
            <th class="table-th__type">Тип сессии</th>
            <th class="table-th__room">Комната</th>
            <th class="table-th__group">Группа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="module in paginatedModules" :key="new Date()">
            <td class="table-td__date">
              {{ formatPeriodTime(module.start, module.end) }}
            </td>
            <td class="table-td__status">
              <p :class="['table-status', getStatusClass(module.status.name)]">
                {{ getStatusText(module.status.name) }}
              </p>
            </td>
            <td class="table-td__name">{{ module.module }}</td>
            <td class="table-td__type">{{ getTypeText(module.type.name) }}</td>
            <td class="table-td__room">{{ formatNames(module.rooms) }}</td>
            <td class="table-td__group">{{ formatNames(module.groups) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      :totalItems="filteredModules.length"
      :itemsPerPage="itemsPerPage"
      @pageChanged="handlePageChange"
    />
  </section>
</template>

<script>
import FilterButton from '@/components/common/FilterButton.vue';
import CreateButton from '@/components/common/CreateButton.vue';
import Pagination from '@/components/common/Pagination.vue';
import data1 from '@/utils/data1.json';
import filterImage from '@/assets/images/filter/filter.svg';
import sortImage from '@/assets/images/filter/sort.svg';
import { format } from 'date-fns';

export default {
  name: 'training-sessions',
  components: {
    FilterButton,
    CreateButton,
    Pagination,
  },
  data() {
    return {
      modules: [],
      currentPage: 1,
      itemsPerPage: 12,
      searchQuery: '',
      filterImage,
      sortImage,
      sortOrder: 'asc',
    };
  },
  computed: {
    paginatedModules() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredModules.slice(start, end);
    },
    filteredModules() {
      if (!this.searchQuery.trim()) return this.modules;
      return this.modules.filter((module) =>
        module.module.toLowerCase().includes(this.searchQuery.trim().toLowerCase()),
      );
    },
  },
  methods: {
    formatNames(items) {
      return items.map((item) => item.name).join(', ');
    },
    getStatusText(status) {
      switch (status) {
        case 'planned':
          return 'Запланировано';
        case 'completed':
          return 'Завершено';
        default:
          return 'Идет';
      }
    },
    getStatusClass(status) {
      switch (status) {
        case 'planned':
          return 'status-class-planned';
        case 'completed':
          return 'status-class-completed';
        default:
          return 'status-class-pending';
      }
    },
    getTypeText(type) {
      switch (type) {
        case 'lesson':
          return 'Урок';
        case 'examination':
          return 'Экзамен';
        default:
          return 'Аккредитация';
      }
    },
    formatPeriodTime(startDate, endDate) {
      const formattedDate = format(new Date(startDate), 'dd.MM.yyyy');
      const formattedStartTime = format(new Date(startDate), 'HH:mm');
      const formattedEndTime = format(new Date(endDate), 'HH:mm');
      return `${formattedDate}, ${formattedStartTime}-${formattedEndTime}`;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    filterModules() {
      this.currentPage = 1; // При каждом вводе в поле поиска возвращаемся на первую страницу пагинации
    },
    sortModulesByDate() {
      this.modules.sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        if (this.sortOrder === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
  created() {
    this.modules = data1.sessions;
  },
};
</script>
<style>
@import url(../../assets/styles/training);
</style>
