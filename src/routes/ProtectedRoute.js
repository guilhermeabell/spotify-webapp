import React from 'react'
import { parseCookies } from 'nookies'
import { Navigate } from 'react-router-dom'

import { COOKIE_TOKEN } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { [COOKIE_TOKEN]: token } = parseCookies()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
