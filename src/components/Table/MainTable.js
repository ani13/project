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
import { makeStyles } from "@mui/styles";

const MainTable = ({
  users,
  modal,
  updateUser,
  checked,
  setChecked,
  GridConfig,
}) => {
  const useStyles = makeStyles({
    button: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      padding: "0 30px",
      margin: 8,
      height: "30px",
    },

    table: {
      alignSelf: "center",
      overflow: "hidden",
    },
  });

  const classes = useStyles();
  const gridUsers = users;

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
        <TableHeadComponent GridConfig={GridConfig} />
        <TableBody>
          {gridUsers.map((item) => (
            <TableRow>
              <TableCell> {item.id}</TableCell>
              <TableCell>{item.field1}</TableCell>
              <TableCell>{item.field2}</TableCell>
              <TableCell>{item.numericField}</TableCell>
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

export default MainTable;
