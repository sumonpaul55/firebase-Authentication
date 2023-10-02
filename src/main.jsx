import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/home/Home.jsx'
// import PassLogin from './components/passwithLogin/PassLogin'
import Registration from './components/regipage/Registration'
import Loginpage from './components/passwithLogin/loginpage/Loginpage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/login",
        element: <Loginpage></Loginpage>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
