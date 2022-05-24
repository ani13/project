import React, { useState } from "react";
import { removeGrid } from "../actions/gridActions";
import { addGrid } from "../actions/gridActions";
import { updateGrid } from "../actions/gridActions";
import { sortGrid } from "../actions/gridActions";
import ViewGrid from "../view";
import { connect } from "react-redux";

const TableContainer = ({ add, remove, update, sort, grid }) => {
  //states
  const emptyUser = {
    field1: "",
    field2: "",
    numericField: 0,
    date: "",
    type: "",
    id: 0,
  };

  const GridConfig = [
    {
      fieldName: "id",
      title: "ID",
      type: "number",
      destination: "",
      showing: true,
    },
    {
      fieldName: "field1",
      title: "Full Name",
      type: "text",
      destination: "form",
      showing: true,
    },
    {
      fieldName: "field2",
      title: "Position",
      type: "text",
      destination: "form",
      showing: true,
    },
    {
      fieldName: "numericField",
      title: "Salary",
      type: "number",
      destination: "form",
      showing: true,
    },
    {
      fieldName: "date",
      title: "Date",
      type: "date",
      destination: "form",
      showing: true,
    },
    {
      fieldName: "type",
      title: "Type",
      type: "text",
      destination: "",
      showing: true,
    },
  ];

  const [checked, setChecked] = useState([]);
  const [user, setUser] = useState(emptyUser);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setMessage] = useState("");
  //================================================//
  const users = grid;

  const idCalculate = () => {
    let ids = users.map((item) => item.id);
    let highest = Math.max.apply(null, ids);
    return highest + 1;
  };

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
      let id = users.length === 0 ? 1 : idCalculate();
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

    setUser(myUser);
  };

  const sortUsers = (params) => {
    let result = users;
    if (params.direction === "descend") {
      if (params.fieldname === "numericField" || params.fieldname === "id") {
        result = users.sort((x, y) => {
          return x[params.fieldname] - y[params.fieldname];
        });
      } else {
        result = users.sort((a, b) => {
          let x = a[params.fieldname];
          let y = b[params.fieldname];
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      }
    } else if (params.direction === "ascend") {
      if (params.fieldname === "numericField" || params.fieldname === "id") {
        result = users.sort((x, y) => {
          return y[params.fieldname] - x[params.fieldname];
        });
      } else {
        result = users.sort((a, b) => {
          let x = a[params.fieldname];
          let y = b[params.fieldname];
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
      }
    }
    sort(result);
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
      sortUsers={sortUsers}
    />
  );
};

const mapStateToProps = (state) => {
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
    sort: (params) => {
      dispatch(sortGrid(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
