import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { StateProvider } from './contexts/StateProvider'
import reducer, { initialState } from './utils/reducer'

import Routes from './routes'
import AuthProvider from './contexts/AuthContext'

import { GlobalStyles } from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </StateProvider>
  </BrowserRouter>,
)
