import { ref, computed } from 'vue'

export const usePagination = (filteredData: any, perPage: number) => {
  let page = ref(1)

  const paginatedData = computed(() =>
    filteredData.value.slice((page.value - 1) * perPage, page.value * perPage)
  )

  const nextPage = () => {
    if (page.value !== Math.ceil(filteredData.value.length / perPage)) {
      page.value += 1
    }
  }

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1
    }
  }

  const goToPage = (numPage: number) => {
    page.value = numPage
  }

  const pageActions = {
    next: nextPage,
    back: backPage,
    goto: goToPage
  }

  return { paginatedData, page, perPage, pageActions }
}
