import { children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from "./router/Home"
import Contact from "./router/Contact"

// 2 - criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
    <RouterProvider router={router} />
    </CounterContextProvider>
  </StrictMode>,
)
