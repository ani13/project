import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./reducers/gridSlice";
import treeReducer from "./reducers/treeSlice";

export default configureStore({
  reducer: {
    grid: gridReducer,
    tree: treeReducer,
  },
});
