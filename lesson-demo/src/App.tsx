import "./App.css";
import { router } from "./route/router";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  const element = useRoutes(router);
  return (
    <Provider store={store}>
      <div className="App">{element}</div>
    </Provider>
  );
}

export default App;
