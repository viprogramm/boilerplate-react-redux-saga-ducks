import React from "react";
import { object } from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./views/layouts/main";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MainLayout />
    </Router>
  </Provider>
);

App.propTypes = {
  store: object.isRequired
};

export default App;
