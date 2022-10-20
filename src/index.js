import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App/App'
import { StateProvider } from './utils/StateProvider'
import reducer, { initialState } from './utils/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
)
