import { Button } from "@mui/material";
import MainTable from "./components/Table/MainTable";
import MyModal from "./components/Table/Modal";
import React from "react";
import Alert from "./components/Alert";
import { makeStyles } from "@mui/styles";

const ViewGrid = ({
  users,
  singleUser,
  modalProp,
  setModal,
  submit,
  onChange,
  deleteUser,
  updateUser,
  open,
  setOpen,
  alertMessage,
  checked,
  setChecked,
  GridConfig,
}) => {
  const useStyles = makeStyles({
    Submitbutton: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "20px",
    },

    Deletebutton: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "20px",
    },
  });
  const classes = useStyles();
  return (
    <div className="container">
      <Button
        variant="contained"
        className={classes.Deletebutton}
        id="deleteButton"
        onClick={deleteUser}
        style={{ filter: modalProp ? "blur(2px)" : "none" }}
      >
        {" "}
        Delete Checked Users{" "}
      </Button>

      <Button
        variant="contained"
        className={classes.Submitbutton}
        id="formButton"
        onClick={() => setModal(true)}
        style={{ filter: modalProp ? "blur(2px)" : "none" }}
      >
        {" "}
        Add new User{" "}
      </Button>

      <MainTable
        users={users}
        modal={modalProp}
        updateUser={updateUser}
        checked={checked}
        setChecked={setChecked}
        GridConfig={GridConfig}
      />

      <MyModal
        singleUser={singleUser}
        modal={modalProp}
        setModal={setModal}
        submit={submit}
        onChange={onChange}
        GridConfig={GridConfig}
      />

      <Alert alertMessage={alertMessage} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ViewGrid;
