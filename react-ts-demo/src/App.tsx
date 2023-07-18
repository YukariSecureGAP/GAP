import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ShoppingL from "./utils/TryCv";
import CountPrice from "./utils/useMemmo";
import { StudentForm } from "./utils/StudentScore";
import { MovingEyes } from "./utils/eyesMoving";
export default class App extends React.Component {
  render() {
    return (
      <>
        <MovingEyes />
        <BrowserRouter>
          <br />
          <Link to="/CountPrice">toLib</Link>
          <Routes>
            <Route path="/CountPrice" element={<CountPrice />} />
          </Routes>
          <br />
          <Link to="/LibManage">toClac</Link>
          <Routes>
            <Route path="/LibManage" element={<StudentForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
