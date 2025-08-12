import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Component/Home/Home.jsx';
import DetailsData from './Components/Component/Phones/Showphonedata/DetailsData/DetailsData.jsx';
import Dashboard from './Components/Component/Phones/Showphonedata/DetailsData/Dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <DetailsData></DetailsData>,
        loader: () => fetch('/Phone.json')
        
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
