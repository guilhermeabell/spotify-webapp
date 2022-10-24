import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Auth from '../pages/Auth'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AllRoutes
