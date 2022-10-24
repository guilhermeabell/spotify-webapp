import qs from 'query-string'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import Loader from '../../components/Loader'

const Auth = () => {
  const { setToken } = useAuth()
  const { hash } = useLocation()
  const { access_token: accessToken } = qs.parse(hash)

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken)
    }
  }, [accessToken])

  return <Loader />
}

export default Auth
