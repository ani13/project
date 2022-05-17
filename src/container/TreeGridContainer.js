import React, { useState } from "react";
import ViewTree from "../viewTree";
import { connect } from "react-redux";
import { addTree } from "../actions/treeActions";
import { removeTree } from "../actions/treeActions";
import { updateTree } from "../actions/treeActions";

const TreeGridContainer = ({ tree, add, remove, update }) => {
  //states
  const emptyUser = {
    fullName: "",
    position: "",
    salary: null,
    date: "",
    type: "",
    id: 0,
    parentId: 0,
  };
  const [user, setUser] = useState(emptyUser);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setMessage] = useState("");
  const [checked, setChecked] = useState([]);
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

    setUser(emptyUser);
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
  const deleteUser = () => {
    checked.map((user) => remove(user.id));
    setChecked([]);
    setUser(emptyUser);
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
      users={users}
      singleUser={user}
      modalProp={modal}
      setModal={setModal}
      submit={submit}
      onChange={onChange}
      deleteUser={deleteUser}
      updateUser={updateUser}
      addChild={addChild}
      open={open}
      setOpen={setOpen}
      alertMessage={alertMessage}
      onSelect={onSelect}
      checked={checked}
      setChecked={setChecked}
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
