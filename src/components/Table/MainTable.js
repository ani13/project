import TableHeadComponent from "./TableHead";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { connect } from "react-redux";

const MainTable = ({
  modal,
  updateUser,
  useStyles,
  grid,
  checked,
  setChecked,
}) => {
  const classes = useStyles();
  const gridUsers = grid;

  const handleChange = (event, user) => {
    if (event.target.checked === false) {
      setChecked(checked.filter((item) => item.id !== user.id));
    } else {
      setChecked([...checked, user]);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        style={{ filter: modal ? "blur(2px)" : "none" }}
      >
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
                <Checkbox onChange={(event) => handleChange(event, item)} />
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
