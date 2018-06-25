import React from "react";
import { Link, Route } from "react-router-dom";

import { HomePage, AboutPage } from "../pages";

const MainLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
};

export default MainLayout;
