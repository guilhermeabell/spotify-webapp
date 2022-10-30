import { api } from './api'

export const getCurrentlyPlaying = async () => {
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

export const changePlayerState = (playerState) => {
  const state = playerState ? 'pause' : 'play'
  return api.put(`me/player/${state}`)
}
