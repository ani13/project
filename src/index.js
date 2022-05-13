import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import TableContainer from "./container/TableContainer";
import TreeGridContainer from "./container/TreeGridContainer";
import { makeStyles } from "@mui/styles";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ol>
            <li>
              <Link className={useStyles().link} to="/">
                Table
              </Link>
            </li>
            <li>
              <Link className={useStyles().link} to="/tree">
                Tree grid
              </Link>
            </li>
          </ol>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route
            path="/tree"
            element={<TreeGridContainer useStyles={useStyles} />}
          >
            {" "}
          </Route>
          <Route path="/" element={<TableContainer useStyles={useStyles} />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
