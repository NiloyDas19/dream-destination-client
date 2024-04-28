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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        loader: () => fetch('http://localhost:5000/addTouristsSpot')
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
      },
      {
        path: "/my-list",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoutes><ViewDetailsPage></ViewDetailsPage></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails/${params.id}`),
      },
      {
        path: "/update-page",
        element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>
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
