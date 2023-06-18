import { reactive, computed } from 'vue'
import { type Country } from './getCountries'

export const useFilters = (data: any) => {
  const filters = reactive({
    region: '',
    area: false,
    order: false
  })

  const filteredData = computed(() => {
    let filtered = data.value
    filtered = filtered.filter((c: Country) => c.name)

    console.log(filters.region)
    if (filters.region) {
      filtered = filtered.filter((c: Country) => c.region == filters.region)
    }

    if (filters.area) {
      const temp = data.value.find((c: Country) => c.name == 'Lithuania')
      filtered = filtered.filter((c: Country) => c.area < temp.area)
    }

    if (filters.order) filtered = filtered.reverse()

    return filtered
  })

  const switchRegion = (region: string) => {
    filters.region = region
  }

  const switchArea = () => {
    filters.area = !filters.area
  }

  const switchOrder = () => {
    filters.order = !filters.order
  }

  const filterActions = {
    switchRegion: switchRegion,
    switchArea: switchArea,
    switchOrder: switchOrder
  }

  return { filteredData, filters, filterActions }
}
