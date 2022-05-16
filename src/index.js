import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import TableContainer from "./container/TableContainer";
import TreeGridContainer from "./container/TreeGridContainer";
import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },

  offset: {
    boxSizing: "border-box",
    paddingTop: "200px",
  },
});

const App = () => {
  const [Open, setOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setOpen(true);
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters id="toolbar">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" open={Open} onClose={handleCloseNavMenu}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={useStyles().link} to="/">
                    Table
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={useStyles().link} to="/tree">
                    Tree grid
                  </Link>
                </MenuItem>
              </Menu>
            </Toolbar>
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
