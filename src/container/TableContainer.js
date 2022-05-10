import React, { useState } from "react";
import ViewGrid from "../view";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from "../reducers/gridSlice";

const TableContainer = ({ useStyles }) => {
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
  const dispatch = useDispatch();
  const users = useSelector((state) => state.grid.value);

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
      dispatch(add(u));
    } else {
      dispatch(update(user));
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
    dispatch(remove(id));
    console.log(users);
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

export default TableContainer;
