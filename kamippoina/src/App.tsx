import { ConfigProvider } from "antd";
import Style from "./App.module.less";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./Router";
import { AuthProvider } from "./utils";
function App() {
  const element = useRoutes(routes);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1DA57A",
        },
      }}
    >
      <div className={Style.App}>
        <Suspense fallback={<div>loading...</div>}>
          <AuthProvider>
            <div>{element}</div>
          </AuthProvider>
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
