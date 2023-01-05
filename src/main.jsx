import React from 'react'
import { Children } from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import Pokemon from './routes/pokemon';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
  },
  {
    path:"/pokemon",
    element: <Pokemon/>, 
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
