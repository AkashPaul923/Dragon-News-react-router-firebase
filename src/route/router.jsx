import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
