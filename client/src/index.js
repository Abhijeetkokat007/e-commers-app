import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import AddProduct from './views/AddProduct/AddProduct';
import EditProduct from './views/EditProduct/EditProduct';
import MoreDetails from './views/MoreDetails/MoreDetails';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/EditProduct/:_id',
    element: <EditProduct/>
  },
  {
    path: '/AddProduct',
    element: <AddProduct/>
  },
  {
    path: '/MoreDetails/:_id',
    element: <MoreDetails/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );


reportWebVitals();
