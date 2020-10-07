import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WithoutReduxPage from "./WithoutReduxPage";
import WithReduxPage from "./WithReduxPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Without Redux Page</Link>
            </li>
            <li>
              <Link to="/redux">With Redux Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/redux">
            <WithReduxPage />
          </Route>
          <Route path="/">
            <WithoutReduxPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
