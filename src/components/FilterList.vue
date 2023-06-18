<template>
  <div class="filter-list">
    <div class="filter-list-left">
      <select v-model="filters.region">
        <option value="">All</option>
        <option v-for="region in regions">{{ region }}</option>
      </select>
      <button :class="{ active: filters.area }" @click="filterActions.switchArea()">
         Smaller than Lithuania
      </button>
    </div>
    <div class="filter-list-right">
      <button :class="{ active: filters.order }" @click="filterActions.switchOrder">Desc</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FilterList',
  props: ['regions', 'filters', 'filterActions']
}
</script>

<style scoped>
.filter-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

select, button{
  height: 30px;
  font: 24px;
  font-weight: bold;
  min-width: 100px;
  border-radius: 5px;
  padding: 0 20px;
}

button{
  background: none;
  border: none;
  transition: 0.3s ease-out;
  background-color: white;
}

button:hover{
  outline: 2px solid #011936;
  outline-offset: -2px;
}

.filter-list-left > select{
  padding: 0 5px;
}

.filter-list-left > button{
  margin-left: 20px;
}

.active{
  background-color: #011936;
  color: #F0F3F5;
}
</style>
