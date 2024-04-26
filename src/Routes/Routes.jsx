import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Addcraft from '../Pages/Addcraft/Addcraft';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/arts',
          element:<Addcraft></Addcraft>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]


    },
  ]);

export default router;