import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../landing-page/App.jsx';
import './index.css';
import Shop from '../shop/Shop.jsx';
import AboutUs from '../about-us/AboutUs.jsx';
import Footer from '../footer/Footer.jsx';
import { PriceProvider } from "../context/PriceProvider.jsx";
import { ItemProvider } from '../context/ItemProvider.jsx';
import Login from '../user/Login.jsx';
import Signup from '../user/Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
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
      <ItemProvider>
        <RouterProvider router={router} />
        <Footer></Footer>
      </ItemProvider>
    </PriceProvider>
  </React.StrictMode>,
)