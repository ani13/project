import TableHeadTree from "./TableHeadTree";
import { TreeItem } from "@mui/lab";
import { TreeView } from "@mui/lab";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { connect } from "react-redux";

const MainTableTree = ({
  modal,
  deleteUser,
  updateUser,
  addChild,
  useStyles,
  tree,
}) => {
  const classes = useStyles();
  const Users = tree;

  function Row(props) {
    const item = props.user;
    const classes = useStyles();

    return (
      <TreeItem
        nodeId={`${item.id}`}
        label={
          <Fragment>
            <div className={classes.Row}>
              <div> {item.id} </div>
              <div> {item.fullName} </div>
              <div> {item.position} </div>
              <div> {item.salary} </div>
              <div> {item.date} </div>
              <div> {item.type} </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  type="button"
                  onClick={() => deleteUser(item.id)}
                >
                  {" "}
                  Delete{" "}
                </Button>{" "}
              </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  type="button"
                  onClick={() => updateUser(item.id)}
                >
                  {" "}
                  Update{" "}
                </Button>{" "}
              </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  type="button"
                  onClick={() => addChild(item.id)}
                >
                  {" "}
                  Child{" "}
                </Button>{" "}
              </div>
            </div>
          </Fragment>
        }
      >
        {Users.filter((child) => child.parentId === item.id).map((child) => (
          <Row user={child} />
        ))}
      </TreeItem>
    );
  }

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
        <Row user={item} />
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
