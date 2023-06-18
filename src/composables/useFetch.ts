import axios from 'axios'
import { ref } from 'vue'

export const useFetch = (url: string, config = {}) => {
  const data = ref(null)
  const response = ref()
  const error = ref(null)
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true
    try {
      const res = await axios
        .request({
          url,
          ...config
        })

      response.value = res
      data.value = res.data
    } catch (error) {
      if (axios.isAxiosError(error)){
        console.log('error message: ', error.message);
      }
    } finally {
      loading.value = false
    }
  }

  fetch()

  return { response, error, data, loading, fetch }
}
