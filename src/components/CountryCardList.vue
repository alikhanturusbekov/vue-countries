<template>
  <div class="class-list">
    <CountryCard v-for="country in paginatedData" :country="country" />
  </div>
</template>

<script lang="ts">
import CountryCard from './CountryCard.vue'

export default {
  name: 'CountryCardList',
  components: { CountryCard },
  props: ['paginatedData']
}
</script>

<style scoped>
.class-list {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  width: 100%;
}
</style>
