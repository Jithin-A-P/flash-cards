import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Deck from './Deck'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/decks/:id',
    element: <Deck />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
