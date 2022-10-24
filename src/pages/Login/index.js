import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SpotifyLogo from '../../assets/Spotify.png'
import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'

function Login() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleClickLogin = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const redirect_uri = `${process.env.REACT_APP_REDIRECT_URL}` || 'http://localhost:3000/auth'
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
    <S.Container>
      <img src={SpotifyLogo} alt="spotify" />
      <button onClick={handleClickLogin}>Login with spotify</button>
    </S.Container>
  )
}

export default Login
