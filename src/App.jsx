import React from 'react'
import './index.css'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Country from './pages/Country.jsx'
import Error from './pages/Error.jsx'
import AppLayout from './components/AppLayout.jsx'
import CountryDetails from './components/CountryDetails.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Link } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
        {
          path: '/',
          element: <AppLayout />,
          errorElement: <Error />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/about',
              element: <About />,
            },
            {
              path: '/contact',
              element: <Contact />,
            },
            {
              path: '/country',
              element: <Country />,
            },
             {
              path: '/country/:id',
              element: <CountryDetails/>,
            },
          ],
        }
      ])
  return (
    <RouterProvider router={router} />
  )
}

export default App