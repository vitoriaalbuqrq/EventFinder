import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'

//carousel swiper
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//pages
import Home from './routes/Home.jsx'
import Event from './routes/Event.jsx'
import CreateEvent from './routes/CreateEvent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/new",
        element: <CreateEvent />,
      },
      {
        path: "/event/:id",
        element: <Event />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
