import React, { useState } from "react";
import { removeGrid } from "../actions/gridActions";
import { addGrid } from "../actions/gridActions";
import { updateGrid } from "../actions/gridActions";
import ViewGrid from "../view";
import { connect } from "react-redux";

const TableContainer = ({ add, remove, update, grid }) => {
  //states
  const emptyUser = {
    field1: "",
    field2: "",
    numericField: null,
    date: "",
    type: "",
    id: 0,
  };

  const GridConfig = [
    { fieldName: "ID", title: "ID", type: "number", destination: "" },
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
    { fieldName: "type", title: "Type", type: "text", destination: "form" },
  ];

  const [checked, setChecked] = useState([]);
  const [user, setUser] = useState(emptyUser);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setMessage] = useState("");
  //================================================//
  const users = grid;

  // submit function //
  const submit = () => {
    if (user.id === 0) {
      if (user.field1 === "") {
        setOpen(true);
        setMessage(`The identification field must be nonempty`);
        return;
      }
      if (user.numericField < 0) {
        setOpen(true);
        setMessage("The number can not be NEGATIVE");
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
      };

      add(u);
    } else {
      update(user);
    }

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
      id: id,
    });
  };

  return (
    <ViewGrid
      users={users}
      singleUser={user}
      modalProp={modal}
      setModal={setModal}
      submit={submit}
      onChange={onChange}
      deleteUser={deleteUser}
      updateUser={updateUser}
      open={open}
      setOpen={setOpen}
      alertMessage={alertMessage}
      checked={checked}
      setChecked={setChecked}
      GridConfig={GridConfig}
    />
  );
};

const mapStateToProps = function (state) {
  return {
    grid: state.grid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    add: (user) => {
      dispatch(addGrid(user));
    },
    remove: (user) => {
      dispatch(removeGrid(user));
    },
    update: (user) => {
      dispatch(updateGrid(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
