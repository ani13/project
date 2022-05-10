import MainTableTree from "./components/TreeTable/MainTableTree";
import MyModal from "./components/TreeTable/TreeModal";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "./components/Alert";

const ViewTree = ({
  singleUser,
  modalProp,
  setModal,
  submit,
  onChange,
  deleteUser,
  updateUser,
  addChild,
  useStyles,
  open,
  setOpen,
  alertMessage,
  onSelect,
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

      <MainTableTree
        modal={modalProp}
        deleteUser={deleteUser}
        updateUser={updateUser}
        addChild={addChild}
        useStyles={useStyles}
      />

      <MyModal
        singleUser={singleUser}
        modal={modalProp}
        setModal={setModal}
        submit={submit}
        onChange={onChange}
        useStyles={useStyles}
        onSelect={onSelect}
      />

      <Alert alertMessage={alertMessage} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ViewTree;
