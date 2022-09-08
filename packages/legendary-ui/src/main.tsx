import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const componentLibRoot = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
componentLibRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
