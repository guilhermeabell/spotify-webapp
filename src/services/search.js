import qs from 'query-string'
import { api } from './api'

export const search = async (term, type = ['artist', 'album', 'track']) => {
  const query = qs.stringify({ q: encodeURIComponent(term), type: type.join() })
  try {
    const response = await api.get(`/search?${query}`)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
