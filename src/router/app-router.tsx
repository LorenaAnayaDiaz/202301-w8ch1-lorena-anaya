import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
export default router;
