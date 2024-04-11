import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router}></RouterProvider>
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
