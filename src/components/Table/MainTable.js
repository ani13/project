import TableHeadComponent from "./TableHead";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import { Fragment } from "react";
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
    boxSizing: "border-box",
    alignSelf: "center",
    opacity: 0.99,
    overflow: "visible",
  },

  tableCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    <TableContainer>
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
            <TableRow sx={{ maxHeight: "100px" }} key={item.id}>
              {configuration.map((field) =>
                field.showing === true ? (
                  <TableCell key={field.fieldName}>
                    <div className={classes.tableCell}>
                      {item[field.fieldName]}
                    </div>
                  </TableCell>
                ) : (
                  <Fragment key={field.fieldName}></Fragment>
                )
              )}

              <TableCell>
                <div className={classes.tableCell}>
                  <Checkbox
                    onChange={(event) => handleChange(event, item)}
                  ></Checkbox>
                </div>
              </TableCell>
              <TableCell>
                <div className={classes.tableCell}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    type="button"
                    onClick={() => updateUser(item.id)}
                  >
                    Update
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
