const initialState = [];

const gridReducers = (users = initialState, action) => {
  switch (action.type) {
    case "addGrid":
      return [...users, action.payload];
    case "removeGrid":
      let newUsers = users.filter((item) => item.id !== action.payload);
      return newUsers;
    case "updateGrid":
      return users.map((item) =>
        item.id === action.payload.id
          ? {
              field1: action.payload.field1,
              field2: action.payload.field2,
              numericField: action.payload.numericField,
              date: action.payload.date,
              type: action.payload.type,
              id: action.payload.id,
            }
          : item
      );
    case "sortGrid":
      return action.payload.map((user) => user);

    default:
      return users;
  }
};

export default gridReducers;
