import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ConfigBar from "./hideshowbar";
import { Fragment } from "react";
const useStyles = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "	rgb(135,206,250)",
      borderRadius: 12,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "blue",
    },
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
  const [show, setShow] = useState({
    id: false,
    field1: false,
    field2: false,
    numericField: false,
    date: false,
    type: false,
  });

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

  return (
    <TableHead>
      <TableRow>
        {configuration.map((field) => (
          <Fragment>
            <TableCell>
              {field.showing ? field.title : ""}
              {field.showing
                ? sortConfig[field.fieldName]
                  ? upComponent(field)
                  : downComponent(field)
                : ""}

              <MoreVertIcon
                fontSize="small"
                onClick={() => {
                  setShow({
                    ...show,
                    [field.fieldName]: !show[field.fieldName],
                  });
                }}
              />
              <ConfigBar
                show={show}
                setShow={setShow}
                fieldName={field.fieldName}
                configuration={configuration}
                setConfig={setConfig}
              />
            </TableCell>
          </Fragment>
        ))}
        <TableCell> Delete </TableCell>
        <TableCell> Update </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
