import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Form } from "../pages/Form/Form";
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
      {
        path: "/Form",
        element: <Form />,
      },
    ],
  },
]);
export default router;
