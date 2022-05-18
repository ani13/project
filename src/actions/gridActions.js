export const addGrid = (myUser) => {
  return {
    type: "addGrid",
    payload: myUser,
  };
};

export const removeGrid = (myUser) => {
  return {
    type: "removeGrid",
    payload: myUser,
  };
};

export const updateGrid = (myUser) => {
  return {
    type: "updateGrid",
    payload: myUser,
  };
};

export const sortGrid = (params) => {
  return {
    type: "sortGrid",
    payload: params,
  };
};
