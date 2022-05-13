import React, { useState } from "react";
import ViewTree from "../viewTree";
import { connect } from "react-redux";
import { addTree } from "../actions/treeActions";
import { removeTree } from "../actions/treeActions";
import { updateTree } from "../actions/treeActions";

import { makeStyles } from "@mui/styles";

const TreeGridContainer = ({ tree, add, remove, update }) => {
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

    form: {
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: 24,
      backgroundColor: "white",
      padding: "20px",
      margin: "5px",
      borderWidth: "5px",
      borderStyle: "solid",
      width: "fit-content",
      height: "90%",
      overflow: "scroll",
    },

    formItem: {
      padding: "5px",
      width: "250px",
    },

    Tree: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "5px",
      overflow: "hidden",
    },

    Row: {
      display: "grid",
      gridTemplateColumns: "repeat(9, 1fr)",
      columnGap: "5px",
      rowGap: "5px",
      margin: "15px",
    },
  });
  //states
  const [user, setUser] = useState({
    fullName: "",
    position: "",
    salary: null,
    date: "",
    type: "",
    id: 0,
    parentId: 0,
  });
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setMessage] = useState("");
  //================================================//
  const users = tree;

  // submit function //
  const submit = () => {
    if (user.id === 0) {
      if (user.fullName === "") {
        setOpen(true);
        setMessage("The Full Name must not be EMPTY");
        return;
      }
      if (user.salary < 0) {
        setOpen(true);
        setMessage("The Salary can not be NEGATIVE");
        return;
      }
      let id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
      let u = {
        fullName: user.fullName,
        position: user.position,
        salary: user.salary,
        date: user.date,
        type: user.type,
        id: id,
        parentId: user.parentId,
      };

      add(u);
    } else update(user);

    setUser({
      fullName: "",
      position: "",
      salary: "",
      date: "",
      type: "",
      id: 0,
      parentId: 0,
    });
    setModal(false);
  };
  //==================================================================================================//

  // onchange function //
  const onChange = (event) => {
    let name = event.target.name;
    if (name === "radiobutton") setUser({ ...user, type: event.target.value });
    else setUser({ ...user, [name]: event.target.value });
  };

  const onSelect = (event) => {
    //find the user in the grid and update the submit fields

    let myUser = event.target.value;
    if (myUser === "") return;

    setUser({
      fullName: myUser.fullName,
      position: myUser.position,
      salary: myUser.salary,
      date: myUser.date,
      type: myUser.type,
      id: user.id,
      parentId: user.parentId,
    });
  };

  //==================================================================================================//

  // delete //
  const deleteUser = (id) => {
    remove(id);
    setUser({
      fullName: "",
      position: "",
      salary: "",
      date: "",
      type: "",
      id: 0,
      parentId: 0,
    });
  };

  // update function //
  const updateUser = (id) => {
    setModal(true);
    let newArray = users;
    let myUser = newArray.find((item) => item.id === id);

    setUser({
      fullName: myUser.fullName,
      position: myUser.position,
      salary: myUser.salary,
      date: myUser.date,
      type: myUser.type,
      id: myUser.id,
      parentId: myUser.parentId,
    });
  };

  // add a child //
  const addChild = (id) => {
    setModal(true);
    setUser({
      fullName: user.fullName,
      position: user.position,
      salary: user.salary,
      date: user.date,
      type: user.type,
      id: user.id,
      parentId: id,
    });
  };

  return (
    <ViewTree
      singleUser={user}
      modalProp={modal}
      setModal={setModal}
      submit={submit}
      onChange={onChange}
      deleteUser={deleteUser}
      updateUser={updateUser}
      addChild={addChild}
      useStyles={useStyles}
      open={open}
      setOpen={setOpen}
      alertMessage={alertMessage}
      onSelect={onSelect}
    />
  );
};

const mapStateToProps = function (state) {
  return {
    tree: state.tree,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    add: (user) => {
      dispatch(addTree(user));
    },
    remove: (user) => {
      dispatch(removeTree(user));
    },
    update: (user) => {
      dispatch(updateTree(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeGridContainer);
