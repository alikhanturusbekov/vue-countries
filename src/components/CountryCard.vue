<template>
  <div class="card">
    <div>
      <h2>{{ country.name }}</h2>
      <div><p>{{ country.region }}</p></div>
    </div>
    <p v-if="country.area">{{ country.area }} km<sup>2</sup></p>
  </div>
</template>

<script lang="ts">
export default {
  props: ['country']
}
</script>

<style scoped>

h2{
  font-size: large;
}
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
  margin: 10px 0;
  width: 770px;
  border-radius: 5px;
  border: 2px solid #011936;
  background-color: #F0F3F5;
}

.card > p {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
