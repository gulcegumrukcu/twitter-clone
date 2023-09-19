import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'; // Import createBrowserRouter
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
);
