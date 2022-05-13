import gridReducers from "./reducers/gridReducers";
import { createStore } from "redux";
import treeReducers from "./reducers/treeReducers";
import { combineReducers } from "redux";

export default createStore(
  combineReducers({
    grid: gridReducers,
    tree: treeReducers,
  })
);
