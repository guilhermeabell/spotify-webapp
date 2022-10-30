import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import VolumeRange from '../components/VolumeRange'
import Loader from '../components/Loader'

const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const Auth = lazy(() => import('../pages/Auth'))

const AllRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
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
        <Route path="/volume" element={<VolumeRange />} />
      </Routes>
    </Suspense>
  )
}

export default AllRoutes
