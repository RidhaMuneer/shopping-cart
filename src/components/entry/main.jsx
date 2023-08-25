import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../landing-page/App.jsx';
import './index.css';
import Shop from '../shop/Shop.jsx';
import AboutUs from '../about-us/AboutUs.jsx';
import Footer from '../footer/Footer.jsx';
import { PriceProvider } from "../context/PriceProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path:"/aboutus",
    element: <AboutUs />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PriceProvider>
      <RouterProvider router={router} />
      <Footer></Footer>
    </PriceProvider>
  </React.StrictMode>,
)