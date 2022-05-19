import TableHeadComponent from "./TableHead";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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

const MainTable = ({
  users,
  modal,
  updateUser,
  checked,
  setChecked,
  GridConfig,
  sortUsers,
}) => {
  const classes = useStyles();
  let gridUsers = users;
  const [configuration, setConfig] = useState(GridConfig);

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
        <TableHeadComponent
          updateUser={updateUser}
          sortUsers={sortUsers}
          configuration={configuration}
          setConfig={setConfig}
        />
        <TableBody>
          {gridUsers.map((item) => (
            <TableRow>
              {configuration.map((field) =>
                field.showing === true ? (
                  <TableCell> {item[field.fieldName]}</TableCell>
                ) : (
                  <TableCell></TableCell>
                )
              )}

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
