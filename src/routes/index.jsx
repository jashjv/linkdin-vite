
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/login";
import Signup from "../pages/signup";
  

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/home",
    element:<HomeLayout/>
  }


]);
  
  