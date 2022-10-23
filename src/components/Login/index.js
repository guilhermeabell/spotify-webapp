import React from 'react'
import SpotifyLogo from '../../assets/Spotify.png'

import { Container } from './styles'

export function Login() {
  const handleClickLogin = () => {
    const client_id = '2d17b3e09c664d32b1deb7649dcf36c5'
    const redirect_uri = 'http://localhost:3000/'
    const api_uri = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-top-read',
      'streaming',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-read-private',
      'playlist-modify-private',
    ]
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      ',',
    )}&response_type=token&show_dialog=true`
  }
  return (
    <Container>
      <img src={SpotifyLogo} alt="spotify" />
      <button onClick={handleClickLogin}>Login with spotify</button>
    </Container>
  )
}
