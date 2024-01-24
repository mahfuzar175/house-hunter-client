import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardProfile from "../components/DashboardProfile";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'register',
          element: <Register></Register>
      },
      {
          path: 'login',
          element: <Login></Login>
      }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
          {
              path: '/dashboard',
              element: <DashboardProfile></DashboardProfile>
          },
          
      ]
  },
  ]);