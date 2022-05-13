import React, { useState } from "react";
import { removeGrid } from "../actions/gridActions";
import { addGrid } from "../actions/gridActions";
import { updateGrid } from "../actions/gridActions";
import ViewGrid from "../view";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";

const TableContainer = ({ add, remove, update, grid }) => {
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
  });
  //states
  const [user, setUser] = useState({
    fullName: "",
    position: "",
    salary: null,
    date: "",
    type: "",
    id: 0,
  });
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setMessage] = useState("");
  //================================================//
  const users = grid;

  // submit function //
  const submit = () => {
    if (user.id === 0) {
      if (user.fullName === "") {
        setOpen(true);
        setMessage("The Full Name must be nonempty");
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
      };

      add(u);
    } else {
      update(user);
    }

    setUser({
      fullName: "",
      position: "",
      salary: "",
      date: "",
      type: "",
      id: 0,
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
      id: id,
    });
  };

  return (
    <ViewGrid
      usersArray={users}
      singleUser={user}
      modalProp={modal}
      setModal={setModal}
      submit={submit}
      onChange={onChange}
      deleteUser={deleteUser}
      updateUser={updateUser}
      useStyles={useStyles}
      open={open}
      setOpen={setOpen}
      alertMessage={alertMessage}
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
