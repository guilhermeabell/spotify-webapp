/* eslint-disable react/prop-types */
export const COOKIE_TOKEN = '@token'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setToken = (token) => {
    setCookie(null, COOKIE_TOKEN, token, {
      path: '/',
      maxAge: 60 * 60 * 1, // 1 hours
    })

    setIsAuthenticated(!!token)

    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  const logOut = () => {
    setIsAuthenticated(false)
    destroyCookie(null, COOKIE_TOKEN, { path: '/' })
    navigate('/login')
  }

  useEffect(() => {
    const { [COOKIE_TOKEN]: token } = parseCookies()
    console.log({ isAuthenticated: !!token })
    setIsAuthenticated(!!token)
  }, [])

  return <AuthContext.Provider value={{ isAuthenticated: isAuthenticated, setToken }}>{children}</AuthContext.Provider>
}

export default AuthProvider
