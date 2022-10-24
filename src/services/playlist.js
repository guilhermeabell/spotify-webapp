import { api } from './api'

export const getAllPlaylist = async () => {
  try {
    const response = await api.get('/me/playlists')
    console.log(response.data)

    const { items } = response.data

    const playlists = items.map(({ name, id }) => {
      return { name, id }
    })

    return playlists
  } catch (err) {
    throw new Error(err)
  }
}
