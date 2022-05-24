import { TreeItem } from "@mui/lab";
import { Fragment } from "react";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  Row: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    columnGap: "5px",
    rowGap: "5px",
    margin: "15px",
  },
});

const TableHeadTree = ({ TreeConfig }) => {
  const classes = useStyles();

  return (
    <TreeItem
      nodeId="0"
      label={
        <Fragment>
          <div className={classes.Row}>
            {TreeConfig.map((field) => (
              <div key={field.fieldName}> {field.title} </div>
            ))}
            <div>Delete</div>
            <div>Update</div>
            <div>Add a child</div>
          </div>
        </Fragment>
      }
    ></TreeItem>
  );
};

export default TableHeadTree;
