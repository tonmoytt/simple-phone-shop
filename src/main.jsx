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
import Electronics from './Components/Component/Pages/Electronics/Electronics.jsx';
import FashionPage from './Components/Component/Pages/Electronics/FashionPage/FashionPage.jsx';
import Offerd from './Components/Component/Pages/Electronics/Offerd/Offerd.jsx';
import AllOfferd from './Components/Component/Pages/Electronics/Offerd/AllOfferd/AllOfferd.jsx';
import DealsPage from './Components/Component/Pages/Electronics/Deals/Deals.jsx';
import Register from './Components/Authincation/AuthProvider/Register/Register.jsx';
import Login from './Components/Authincation/AuthProvider/Login/Login.jsx';
import Authincation from './Components/Authincation/AuthProvider/Authincation.jsx';
import Privetroute from './Components/Authincation/Privetroute/Privetroute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element:  <Privetroute><DetailsData></DetailsData></Privetroute>  ,
        loader: () => fetch('/Phone.json')

      },
      {
        path: '/dashboard',
        element: <Privetroute><Dashboard></Dashboard></Privetroute> 
      },
      {
        path: '/electronics',
        element: <Electronics></Electronics>
      },
      {
        path: '/fashion',
        element: <FashionPage></FashionPage>
      },
      // {
      //   path:'/offers',
      //   element: <Offerd></Offerd>
      // },
      {
        path: '/offers',
        element: <AllOfferd></AllOfferd>
      },
      {
        path: '/deals',
        element: <DealsPage></DealsPage>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authincation>
      <RouterProvider router={router} />
    </Authincation>

  </StrictMode>,
)
