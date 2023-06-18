<template>
  <div class="country-section">
    <FilterList :regions="regions" :filters="filters" :filterActions="filterActions" />
    <CountryCardList :paginatedData="paginatedData" :filters="filters" />
    <PaginationButtonList
      :filters="filters"
      :page="page"
      :pages="pages"
      :pageActions="pageActions"
    />
  </div>
</template>

<script lang="ts">
import FilterList from './FilterList.vue'
import CountryCardList from './CountryCardList.vue'
import PaginationButtonList from './PaginationButtonList.vue'
import { getCountries } from '../composables/getCountries'

export default {
  name: 'CountrySection',
  components: { FilterList, CountryCardList, PaginationButtonList },
  async setup() {
    const { error, loading, get } = getCountries()

    return await get()
  }
}
</script>

<style scoped></style>
