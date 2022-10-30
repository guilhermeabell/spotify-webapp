import { api } from './api'

export const getSelectedPlaylist = async (selectedPlaylistId) => {
  try {
    const response = await api.get(`/playlists/${selectedPlaylistId}`)

    const selectedPlaylist = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description.startsWith('<a') ? ' ' : response.data.description,
      image: response.data.images[0].url,
      tracks: response.data.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((artist) => artist.name),
        image: track.album.images[2].url,
        duration: track.duration_ms,
        album: track.album.name,
        context_uri: track.album.uri,
        track_number: track.track_number,
      })),
    }

    return selectedPlaylist
  } catch (err) {
    throw new Error(err)
  }
}
