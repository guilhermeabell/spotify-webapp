import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'react'

const Auth = () => {
  const { setToken } = useAuth()
  const { hash } = useLocation()
  const { access_token: accessToken } = qs.parse(hash)

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken)
    }
  }, [accessToken])

  if (accessToken) {
    return <h1>Authenticated</h1>
  }

  return <h1>Not authenticated</h1>
}

export default Auth
