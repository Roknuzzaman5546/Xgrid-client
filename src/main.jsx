import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Pages/Home/Home';
import Brand from './Components/Pages/Brand/Brand';
import Dashboard from './Components/DashLayout/Dashboard/Dashboard';
import Profile from './Components/DashLayout/DashPages/Profile/Profile';
import AddProducts from './Components/DashLayout/DashPages/Products/AddProducts';
import ManegeProducts from './Components/DashLayout/DashPages/Products/ManegeProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/brand",
        element: <Brand></Brand>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
      path: "addProducts",
      element: <AddProducts></AddProducts>
      },
      {
        path: "manegeProducts",
        element: <ManegeProducts></ManegeProducts>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
