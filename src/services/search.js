import qs from 'query-string'
import { api } from './api'

export const search = async (term) => {
  const query = qs.stringify({ q: encodeURIComponent(term), type: 'artist,album,track' })
  try {
    const response = await api.get(`/search?${query}`)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
