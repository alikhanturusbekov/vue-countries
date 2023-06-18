<template>
  <div class="pagination-buttons">
    <button @click="pageActions.back">prev</button>
    <button
      v-for="item in pages"
      :key="item"
      :class="{ 
        current: item == page,
      }"
      @click="() => pageActions.goto(item)"
    >
      {{ item }}
    </button>
    <button @click="pageActions.next">next</button>
  </div>
</template>

<script lang="ts">
import { watch } from 'vue'

export default {
  name: 'PaginationButtonList',
  props: ['filters', 'page', 'pages', 'pageActions'],
  setup(props) {
    watch(props.filters, () => props.pageActions.goto(1))
  }
}
</script>

<style scoped>

.pagination-buttons{
  margin-top: 20px;
}
.current {
  background-color: #011936;
  color: #F0F3F5;
}

button {
  background-color: #F0F3F5;
  border: none;
  border: 2px solid #011936;
  margin: 5px;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  transition: 0.3s ease-out;
}

button:hover {
  transform: translateY(-2px)
}

.none {
  display: none;
}
</style>
