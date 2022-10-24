import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

api.interceptors.request.use((config) => {
  const { ['@token']: token } = parseCookies()

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error.response)
    return Promise.reject(error)
  },
)
