import { computed } from 'vue'
import { useFetch } from './useFetch'
import { usePagination } from './usePagination'
import { useFilters } from './useFilters'

export type Country = {
  name: string,
  region: string
  area: number,
}

export const getCountries = () => {
  const { response, error, data, loading, fetch } = useFetch(
    'https://restcountries.com/v2/all?fields=name,region,area'
  )

  const get = async () => {
    await fetch()

    let regions: string[] = []
    if (data.value) regions = [...new Set((data.value as Country[]).map((country: Country) => country.region))]

    const { filteredData, filters, filterActions } = useFilters(data)

    const { paginatedData, page, perPage, pageActions } = usePagination(filteredData, 5)

    const pages = computed(() => Math.ceil(filteredData.value.length / perPage))

    return {
      paginatedData,
      regions,
      filters,
      filterActions,
      page,
      pages,
      pageActions
    }
  }

  return { error, loading, get }
}
