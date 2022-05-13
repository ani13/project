export const addTree = (myUser) => {
  return {
    type: "addTree",
    payload: myUser,
  };
};

export const removeTree = (myUser) => {
  return {
    type: "removeTree",
    payload: myUser,
  };
};

export const updateTree = (myUser) => {
  return {
    type: "updateTree",
    payload: myUser,
  };
};
