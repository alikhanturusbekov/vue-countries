<template>
  <Suspense>
    <div class="home">
      <header>
        <h1>Countries List</h1>
      </header>
      <CountrySection />
    </div>
  </Suspense>
</template>

<script lang="ts">
import CountrySection from '../components/CountrySection.vue'

export default {
  name: 'HomeView',
  components: { CountrySection }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 800px;
}

header{
    margin: 35px 0;
}
</style>
