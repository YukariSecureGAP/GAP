// import React from "react";
import { ConfigProvider } from "antd";
// import "./App.css";
import Style from "./App.module.less";
import { Login } from "./views/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TableList } from "./views/Table";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1DA57A",
        },
      }}
    >
      <div className={Style.App}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/table/:id" element={<TableList />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404 ERROR</h1>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
