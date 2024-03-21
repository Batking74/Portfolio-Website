// Importing Modules/Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormSubmissionPage from './pages/FormSubmissionPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

// Importing Stylesheets
import './assets/sass/home.css';
import './assets/sass/testimonials.css';
import './assets/sass/thankYou.css';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/Confirmation',
      element: <FormSubmissionPage />
    }
  ]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);