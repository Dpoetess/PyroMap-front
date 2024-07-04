import { createBrowserRouter } from "react-router-dom";
import Layout1 from "../layout/Layout1/Layout1";
import Layout2 from "../layout/Layout2/Layout2";
import Layout3 from "../layout/Layout3/Layout3";
import Hompage from "../pages/Homepage/Hompage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import UserView from "../pages/UserView/UserView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/",
        element: <Hompage />,
      },
      {
        path: "/about",
        element: <div>Aqui hay que mostrar About</div>,
      },
    ],
  },
  {
    path: "/register",
    element: <Layout2 />,
    children: [
      {
        path: "/register/",
        element: <Signup />,
      },
      {
        path: "/register/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/user",
    element: <Layout3 />,
    children: [
      {
        path: "/user/",
        element: <UserView />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
