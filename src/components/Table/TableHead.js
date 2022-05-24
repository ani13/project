import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ConfigBar from "./ConfigBar";
import { Fragment } from "react";
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  button: {
    boxSizing: "border-box",
    "&:hover": {
      backgroundColor: "	rgb(135,206,250)",
      borderRadius: 12,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "blue",
    },
  },
  header: { position: "relative" },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const TableHeadComponent = ({ sortUsers, configuration, setConfig }) => {
  const [sortConfig, setSortConfig] = useState({
    id: true,
    field1: true,
    field2: true,
    numericField: true,
    date: true,
    type: true,
  });
  const [show, setShow] = useState({ show: false, name: "" });
  const [showColumns, setshowColumns] = useState(false);
  const classes = useStyles();

  const downComponent = (field) => (
    <ArrowDownwardIcon
      className={classes.button}
      onClick={() => {
        setSortConfig({
          ...sortConfig,
          [field.fieldName]: !sortConfig[field.fieldName],
        });
        sortUsers({ direction: "descend", fieldname: field.fieldName });
      }}
    />
  );

  const upComponent = (field) => (
    <ArrowUpwardIcon
      className={classes.button}
      onClick={() => {
        setSortConfig({
          ...sortConfig,
          [field.fieldName]: !sortConfig[field.fieldName],
        });
        sortUsers({ direction: "ascend", fieldname: field.fieldName });
      }}
    />
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  //function
  const handlePopover = (event, fieldName) => {
    if (showColumns === true) setshowColumns(false);
    if (show.show === false) setShow({ show: !show.show, name: fieldName });
    else setShow({ show: !show.show, name: "" });
    setAnchorEl(event.target);
  };

  return (
    <TableHead>
      <TableRow>
        {configuration.map((field) =>
          field.showing === true ? (
            <TableCell
              className={classes.header}
              id={field.fieldName}
              key={field.fieldName}
            >
              <div className={classes.headerContainer}>
                {field.showing ? <Typography> {field.title} </Typography> : ""}
                {field.showing
                  ? sortConfig[field.fieldName]
                    ? upComponent(field)
                    : downComponent(field)
                  : ""}

                <MoreVertIcon
                  fontSize="small"
                  onClick={(event) => handlePopover(event, field.fieldName)}
                />
                <ConfigBar
                  show={show}
                  setShow={setShow}
                  fieldName={field.fieldName}
                  configuration={configuration}
                  setConfig={setConfig}
                  sortUsers={sortUsers}
                  showColumns={showColumns}
                  setshowColumns={setshowColumns}
                  handlePopover={handlePopover}
                  anchorEl={anchorEl}
                />
              </div>
            </TableCell>
          ) : (
            <Fragment key={field.fieldName}></Fragment>
          )
        )}
        <TableCell>
          <div className={classes.headerContainer}> Delete </div>
        </TableCell>
        <TableCell>
          <div className={classes.headerContainer}>Update</div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
