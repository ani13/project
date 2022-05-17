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
              field1: action.payload.fullName,
              field2: action.payload.field2,
              numericField: action.payload.numericField,
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
