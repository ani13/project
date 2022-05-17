import MainTableTree from "./components/TreeTable/MainTableTree";
import MyModal from "./components/TreeTable/TreeModal";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "./components/Alert";
import { makeStyles } from "@mui/styles";

const ViewTree = ({
  users,
  singleUser,
  modalProp,
  setModal,
  submit,
  onChange,
  deleteUser,
  updateUser,
  addChild,
  open,
  setOpen,
  alertMessage,
  onSelect,
  checked,
  setChecked,
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

      <MainTableTree
        users={users}
        modal={modalProp}
        updateUser={updateUser}
        addChild={addChild}
        checked={checked}
        setChecked={setChecked}
      />

      <MyModal
        singleUser={singleUser}
        modal={modalProp}
        setModal={setModal}
        submit={submit}
        onChange={onChange}
        onSelect={onSelect}
      />

      <Alert alertMessage={alertMessage} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ViewTree;
