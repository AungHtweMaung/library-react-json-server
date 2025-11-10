import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/index';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider, ThemeContext } from './contexts/ThemeContext';


createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
)
