import TableHeadTree from "./TableHeadTree";
import { TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import Row from "./Row";
import { makeStyles } from "@mui/styles";

const MainTableTree = ({
  users,
  modal,
  updateUser,
  addChild,
  checked,
  setChecked,
}) => {
  const useStyles = makeStyles({
    Tree: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "5px",
      overflow: "hidden",
    },
  });
  const classes = useStyles();
  const Users = users;

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      className={classes.Tree}
      style={{ filter: modal ? "blur(2px)" : "none" }}
    >
      <TableHeadTree />

      {Users.filter((item) => item.parentId === 0).map((item) => (
        <Row
          user={item}
          Users={Users}
          updateUser={updateUser}
          addChild={addChild}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </TreeView>
  );
};

export default MainTableTree;
