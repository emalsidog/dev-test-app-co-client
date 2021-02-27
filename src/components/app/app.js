// Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Styles
import "./app.scss";

// Components
import Stats from "../stats/stats";
import Main from "../main/main";
import Charts from "../charts/charts";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/stats" component={Stats} />
      <Route path="/stats/:id" component={Charts} />
    </BrowserRouter>
  );
};

export default App;
