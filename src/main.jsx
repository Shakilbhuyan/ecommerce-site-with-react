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
        element:<Inventory></Inventory>
      },
      {
        path:'/checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
