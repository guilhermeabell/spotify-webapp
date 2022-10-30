import { api } from './api'

export const currentTrack = async () => {
  try {
    const response = await api.get('me/player/currently-playing')

    const { item } = response.data

    const currentlyPlaying = {
      id: item.id,
      name: item.name,
      artists: item.artists.map((artist) => artist.name),
      image: item.album.images[2].url,
    }

    return currentlyPlaying
  } catch (err) {
    throw new Error(err)
  }
}
