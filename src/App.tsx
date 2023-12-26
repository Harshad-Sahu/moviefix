import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Dashboard } from "./pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
