import TableHeadComponent from "./TableHead";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { connect } from "react-redux";

const MainTable = ({ modal, deleteUser, updateUser, useStyles, grid }) => {
  const classes = useStyles();
  const gridUsers = grid;
  return (
    <TableContainer component={Paper}>
      <Table className="table" style={{ filter: modal ? "blur(2px)" : "none" }}>
        <TableHeadComponent />
        <TableBody>
          {gridUsers.map((item, id) => (
            <TableRow>
              <TableCell> {item.id}</TableCell>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.position}</TableCell>
              <TableCell>{item.salary}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  type="button"
                  onClick={() => deleteUser(item.id)}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </TableCell>
              <TableCell>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  type="button"
                  onClick={() => updateUser(item.id)}
                >
                  {" "}
                  Update{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = function (state) {
  return {
    grid: state.grid,
  };
};

export default connect(mapStateToProps)(MainTable);
