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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
const queryClient = new QueryClient()

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
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
