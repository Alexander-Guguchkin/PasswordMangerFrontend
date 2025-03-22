import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from "./components/Navigation/NavBar"
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/Error/Error-page-404.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/profile",
        element: <Profile />,
        errorElement: <ErrorPage />
    }
])
const navlist = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Settings",
        url: "/settings"
    },

]


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="layout">
          <NavBar navlist={navlist}/>
          <RouterProvider router={router} />
      </div>
  </StrictMode>,
)