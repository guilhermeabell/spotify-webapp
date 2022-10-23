import React, { useEffect, useState } from 'react'
import { Login } from '../components/Login'
import { reducerCases } from '../utils/constants/index'
import { useStateProvider } from '../contexts/StateProvider'
import Spotify from '../components/Spotify'
import Loader from '../components/Loader'

export default function App() {
  const [{ token }, dispatch] = useStateProvider()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hash = window.location.hash
    // console.log(hash);  log to access token
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      // console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token })
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [token, dispatch])

  if (loading) {
    return <Loader />
  }

  return <>{token ? <Spotify /> : <Login />}</>
}
