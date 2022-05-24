import React, { useState } from "react";
import ViewTree from "../viewTree";
import { connect } from "react-redux";
import { addTree } from "../actions/treeActions";
import { removeTree } from "../actions/treeActions";
import { updateTree } from "../actions/treeActions";

const TreeGridContainer = ({ tree, add, remove, update, grid }) => {
  //states
  const emptyUser = {
    field1: "",
    field2: "",
    numericField: 0,
    date: "",
    type: "",
    id: 0,
    parentId: 0,
  };

  const TreeConfig = [
    { fieldName: "id", title: "ID", type: "number", destination: "" },
    {
      fieldName: "field1",
      title: "Full Name",
      type: "text",
      destination: "form",
    },
    {
      fieldName: "field2",
      title: "Position",
      type: "text",
      destination: "form",
    },
    {
      fieldName: "numericField",
      title: "Salary",
      type: "number",
      destination: "form",
    },
    { fieldName: "date", title: "Date", type: "date", destination: "form" },
    { fieldName: "type", title: "Type", type: "text", destination: "" },
  ];

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
      if (user.field1 === "") {
        setOpen(true);
        setMessage("The Full Name must not be EMPTY");
        return;
      }
      if (user.numericField < 0) {
        setOpen(true);
        setMessage("The numericField can not be NEGATIVE");
        return;
      }
      let id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
      let u = {
        field1: user.field1,
        field2: user.field2,
        numericField: user.numericField,
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
      field1: myUser.field1,
      field2: myUser.field2,
      numericField: myUser.numericField,
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
      field1: myUser.field1,
      field2: myUser.field2,
      numericField: myUser.numericField,
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
      field1: user.field1,
      field2: user.field2,
      numericField: user.numericField,
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
      TreeConfig={TreeConfig}
      grid={grid}
    />
  );
};

const mapStateToProps = function (state) {
  return {
    tree: state.tree,
    grid: state.grid,
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
