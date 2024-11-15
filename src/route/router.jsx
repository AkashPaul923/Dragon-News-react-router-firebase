import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: "/",
        element: <Navigate to="/category/01"></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: "/news",
    element: <h1>NEWS</h1>,
  },
  {
    path: "/login",
    element: <h1>LOGIN</h1>,
  },
  {
    path: "*",
    element: <h1>ERROR</h1>,
  },
]);

export default router;
