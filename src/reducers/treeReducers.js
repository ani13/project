const initialState = [];

const recDeleteChild = (id, users) => {
  //erase itself
  users = users.filter((item) => item.id !== id);
  if (users.length === 0) return users;

  //erase children if present
  for (let i = 0; i < users.length; i++) {
    if (users[i].parentId === id) {
      users = recDeleteChild(users[i].id, users);
    }
  }

  //return modified array
  return users;
};
const treeReducers = (users = initialState, action) => {
  switch (action.type) {
    case "addTree":
      return [...users, action.payload];
    case "removeTree":
      const newUsers = recDeleteChild(action.payload, users);
      return newUsers;
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
