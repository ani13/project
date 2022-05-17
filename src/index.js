import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import TableContainer from "./container/TableContainer";
import TreeGridContainer from "./container/TreeGridContainer";
import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
    margin: "20px",
    lineHeight: 3,
  },

  offset: {
    boxSizing: "border-box",
    paddingTop: "200px",
  },
  container: {
    height: "60px",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl" className={useStyles().container}>
            <Typography variant="h6" color="inherit" component="div">
              <Link className={useStyles().link} to="/">
                Table
              </Link>
              <Link className={useStyles().link} to="/tree">
                Tree grid
              </Link>
            </Typography>
          </Container>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route
            path="/tree"
            element={
              <TreeGridContainer
                useStyles={useStyles}
                className={useStyles().offset}
              />
            }
          >
            {" "}
          </Route>
          <Route
            path="/"
            element={
              <TableContainer
                useStyles={useStyles}
                className={useStyles().offset}
              />
            }
          >
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
