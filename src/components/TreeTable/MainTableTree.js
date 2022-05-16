import TableHeadTree from "./TableHeadTree";
import { TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { connect } from "react-redux";
import Row from "./Row";

const MainTableTree = ({
  modal,
  updateUser,
  addChild,
  useStyles,
  tree,
  checked,
  setChecked,
}) => {
  const classes = useStyles();
  const Users = tree;

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      className={classes.Tree}
      style={{ filter: modal ? "blur(2px)" : "none" }}
    >
      <TableHeadTree useStyles={useStyles} />

      {Users.filter((item) => item.parentId === 0).map((item) => (
        <Row
          user={item}
          Users={Users}
          updateUser={updateUser}
          addChild={addChild}
          classes={classes}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </TreeView>
  );
};

const mapStateToProps = function (state) {
  return {
    tree: state.tree,
  };
};

export default connect(mapStateToProps)(MainTableTree);
