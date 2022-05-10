import { createSlice } from "@reduxjs/toolkit";

export const treeSlice = createSlice({
  name: "tree",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    update: (state, action) => {
      state.value = state.value.map((item) =>
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
    },
  },
});

export const { add, remove, update } = treeSlice.actions;

export default treeSlice.reducer;
