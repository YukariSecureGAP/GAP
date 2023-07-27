import { lazy } from "react";
import { RequireAuth } from "../utils";
interface IRoute {
  path: string;
  element: React.ReactNode;
  children?: IRoute[];
}

const Home = lazy(() => import("../views/login/Login"));
const Login = lazy(() => import("../views/login/Login"));
const Table = lazy(() => import("../views/Table/TableList"));
const MenuList = lazy(() => import("../views/memu/MenuMapt"));


export const routes: IRoute[] = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/table",
    element: (
      <RequireAuth>
        <Table />
      </RequireAuth>
    ),
  },
  {
    path: "/menu",
    element: <MenuList />,
  },
];
