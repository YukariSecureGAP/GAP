import "./App.css";
// import Home from "./pages/Home";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { routes } from "./router/router";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <ConfigProvider    >
      <div>
        <Suspense fallback={<div>loading...</div>}>
            <div>{element}</div>
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
