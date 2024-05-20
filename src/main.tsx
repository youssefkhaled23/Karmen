import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/AppRouter.tsx'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
