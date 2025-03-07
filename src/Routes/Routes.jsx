import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Addcraft from '../Pages/Addcraft/Addcraft';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Details from '../Pages/Details/Details';
import Private from './Private/Private';
import Myarts from '../Pages/Myarts/Myarts';
import Update from '../Pages/Update/Update';
import AllArts from '../Pages/AllArts/AllArts';
import Errorpage from '../Pages/Errorpage/Errorpage';
import CategoryPage from '../Pages/CategoryPage/CategoryPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/arts',
          element:<Private><Addcraft></Addcraft></Private>
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
          element:<Private><Details></Details></Private>,
          loader:({params})=> fetch(`https://assignment10-server-swart.vercel.app/arts/${params.id}`)
        },
        {
          path:'/myarts/:email',
          element:<Private><Myarts></Myarts></Private>,
         
        },
        {
          path:'/update/:id',
          element:<Private><Update></Update></Private>,
          loader:({params})=>fetch(`https://assignment10-server-swart.vercel.app/arts/${params.id}`)
        },
        {
          path:'/allarts',
          element:<AllArts></AllArts>,
          loader:()=>fetch(`https://assignment10-server-swart.vercel.app/arts`)
        },
        {
          path:`/category/:Subcategory_Name`,
          element:<CategoryPage></CategoryPage>,
          loader:({params})=>fetch(`https://assignment10-server-swart.vercel.app/category/${params.Subcategory_Name}`)
        }
      ]


    },
  ]);

export default router;