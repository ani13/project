const initialState = [];

const treeReducers = (users = initialState, action) => {
  if (action.type === "addTree") {
    return [...users, action.payload];
  } else if (action.type === "removeTree") {
    return users.filter((item) => item.id !== action.payload);
  } else if (action.type === "updateTree") {
    return users.map((item) =>
      item.id === action.payload.id
        ? {
            fullName: action.payload.fullName,
            position: action.payload.position,
            salary: action.payload.salary,
            date: action.payload.date,
            type: action.payload.type,
            id: action.payload.id,
            parentId: action.payload.parentId,
          }
        : item
    );
  } else return users;
};

export default treeReducers;
