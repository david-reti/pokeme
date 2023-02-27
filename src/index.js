import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

/* App Components And Pages */
import App from './pokeme/App';
import Error from './pokeme/pages/error/Error';
import Root from './pokeme/pages/root/Root';
import UserDetails from './pokeme/pages/user-details/UserDetails';
import UserFavourites from './pokeme/pages/user-favourites/UserFavourites';

/* Global Constant Definitions */
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '',
        element: <Root/>
      },
      {
        path: 'user/details',
        element: <UserDetails/>
      },
      {
        path: 'user/favourites',
        element: <UserFavourites/>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
