import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import AllTouristsSpot from './components/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './components/AddTouristsSpot/AddTouristsSpot';
import MyList from './components/MyList/MyList';
import ViewDetailsPage from './components/ViewDetailsPage/ViewDetailsPage';
import UpdatePage from './components/UpdatePage/UpdatePage';
import AuthProviders from './providers/AuthProviders';
import ViewPageForSpecficCountry from './components/ViewPageForSpecficCountry/ViewPageForSpecficCountry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://dream-destination-server-side.vercel.app/addTouristsSpot', { credentials: "include" })
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://dream-destination-server-side.vercel.app/addTouristsSpot', { credentials: "include" })
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
      },
      {
        path: "/my-list/:email",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://dream-destination-server-side.vercel.app/myList/${params.email}`, { credentials: "include" })
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoutes><ViewDetailsPage></ViewDetailsPage></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://dream-destination-server-side.vercel.app/viewDetails/${params.id}`, { credentials: "include" })
      },
      {
        path: "/update-page/:id",
        element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://dream-destination-server-side.vercel.app/viewDetails/${params.id}`, { credentials: "include" })
      },
      {
        path: "/specific-country/:country_Name",
        element: <ViewPageForSpecficCountry></ViewPageForSpecficCountry>,
        loader: ({ params }) => fetch(`https://dream-destination-server-side.vercel.app/viewDetailsForSpecificCountry/${params.country_Name}`, { credentials: "include" })
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
