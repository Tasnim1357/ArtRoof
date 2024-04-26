import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Addcraft from '../Pages/Addcraft/Addcraft';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Details from '../Pages/Details/Details';

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
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params})=> fetch(`http://localhost:5000/arts/${params.id}`)
        }
      ]


    },
  ]);

export default router;