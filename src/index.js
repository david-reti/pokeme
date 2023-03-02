import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ROUTES from './pokeme/config/routes';

/* Global Constant Definitions */
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([ ROUTES ]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
