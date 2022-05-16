const initialState = [];

const gridReducers = (users = initialState, action) => {
  switch (action.type) {
    case "addGrid":
      return [...users, action.payload];
    case "removeGrid":
      return users.filter((item) => item.id !== action.payload);
    case "updateGrid":
      return users.map((item) =>
        item.id === action.payload.id
          ? {
              fullName: action.payload.fullName,
              position: action.payload.position,
              salary: action.payload.salary,
              date: action.payload.date,
              type: action.payload.type,
              id: action.payload.id,
            }
          : item
      );
    default:
      return users;
  }
};

export default gridReducers;
