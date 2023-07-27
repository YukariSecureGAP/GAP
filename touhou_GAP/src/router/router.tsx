import { lazy } from "react";
import { Constants } from "../utils/constants";

const Comics = lazy(() => import("@/pages/Comic"));
const Home = lazy(() => import("@/pages/Home"));
const RegisterPage = lazy(() => import("@/pages/AuthLogin/Register/Register"));
const LoginPage = lazy(() => import("@/pages/AuthLogin/Login/Login"));

export const routes: Constants.RouteInfo[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/comic",
    element: <Comics />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];
