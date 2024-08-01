import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home/Home";
import Errorpage from "../pages/Errorpage/Errorpage";
import TravelTips from "../pages/TravelTips/TravelTips";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import DivisionDetails from "../pages/DivisionDetails/DivisionDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddBeauties from "../pages/AddBeauties/AddBeauties";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/travel-tips",
        element: <TravelTips />,
      },
      {
        path: "/add-beauties",
        element: (
          <PrivateRoutes>
            <AddBeauties />
          </PrivateRoutes>
        ),
      },
      {
        path: "/divisions/:name",
        element: (
          <PrivateRoutes>
            <DivisionDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
