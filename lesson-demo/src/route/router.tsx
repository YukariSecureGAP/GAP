import { lazy } from "react";

const Login = lazy(() => import("../login/login"));
const Home = lazy(() => import("../Home/Home"));
export const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Home />,
  },
];
