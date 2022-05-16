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
  checked,
  setChecked,
}) => {
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
        modal={modalProp}
        updateUser={updateUser}
        useStyles={useStyles}
        checked={checked}
        setChecked={setChecked}
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
