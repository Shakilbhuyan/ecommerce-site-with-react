import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Componants/Shop/Shop';
import Home from './Componants/Layout/Home';
import Orders from './Componants/Orders/Orders';
import Inventory from './Componants/Inventory/Inventory';
import Login from './Componants/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './Componants/Checkout/Checkout';
import SignUp from './Componants/signup/signUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Componants/Providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children :[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path :'/orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'/inventory',
        element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path:'/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
      <ToastContainer/>
     </AuthProvider>
  </React.StrictMode>,
)
