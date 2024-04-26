import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvider>
    <ToastContainer  />
      <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
