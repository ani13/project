const initialState = [];

const treeReducers = (users = initialState, action) => {
  switch (action.type) {
    case "addTree":
      return [...users, action.payload];
    case "removeTree":
      users = users.filter((item) => item.id !== action.payload);
      return users.filter((item) => item.parentId !== action.payload);
    case "updateTree":
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
    default:
      return users;
  }
};

export default treeReducers;
