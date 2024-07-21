import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/reset.css';

import { createBrowserRouter, HashRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/HomePage.tsx';
import Contact from './pages/contact/ContactPage.tsx';
import Products from './components/Products.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import FAQ from './components/FAQ.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Products/>
      },
      {
        path: "/servicos",
        element: <Services/>
      },
      {
        path: "/contato",
        element: <Contact/>
      },
      {
        path: "/sobre",
        element: <About/>
      },
      {
        path: "/faq",
        element: <FAQ/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
);

