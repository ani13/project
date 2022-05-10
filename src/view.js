import { Button } from "@mui/material";
import MainTable from "./components/Table/MainTable";
import MyModal from "./components/Table/Modal";
import React from "react";
import Alert from "./components/Alert";

const ViewGrid = ({
  singleUser,
  modalProp,
  setModal,
  submit,
  onChange,
  deleteUser,
  updateUser,
  useStyles,
  open,
  setOpen,
  alertMessage,
}) => {
  const classes = useStyles();
  return (
    <div className="container">
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
        modal={modalProp}
        deleteUser={deleteUser}
        updateUser={updateUser}
        useStyles={useStyles}
      />

      <MyModal
        singleUser={singleUser}
        modal={modalProp}
        setModal={setModal}
        submit={submit}
        onChange={onChange}
        useStyles={useStyles}
      />

      <Alert alertMessage={alertMessage} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ViewGrid;
