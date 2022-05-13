const initialState = [];

const gridReducers = (users = initialState, action) => {
  if (action.type === "addGrid") {
    return [...users, action.payload];
  } else if (action.type === "removeGrid") {
    return users.filter((item) => item.id !== action.payload);
  } else if (action.type === "updateGrid") {
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
  } else return users;
};

export default gridReducers;
