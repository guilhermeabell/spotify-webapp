import { api } from './api'

export const getUserInfo = async () => {
  try {
    const response = await api.get('/me')
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
