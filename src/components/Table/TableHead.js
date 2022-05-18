import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HideSourceIcon from "@mui/icons-material/HideSource";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  button: {
    margin: "3px",
    "&:hover": {
      backgroundColor: "	rgb(135,206,250)",
      borderRadius: 12,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "blue",
    },
  },
});

const TableHeadComponent = ({
  updateUser,
  sortUsers,
  configuration,
  setConfig,
}) => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        {configuration.map((field) => (
          <TableCell>
            {field.title}
            <ArrowDownwardIcon
              className={classes.button}
              onClick={() =>
                sortUsers({ direction: "descend", fieldname: field.fieldName })
              }
            />{" "}
            <ArrowUpwardIcon
              className={classes.button}
              onClick={() =>
                sortUsers({ direction: "ascend", fieldname: field.fieldName })
              }
            />
            <HideSourceIcon
              fontSize="small"
              sx={{
                color: "white",
                "&:hover": {
                  color: "black",
                },
              }}
              onClick={() => {
                setConfig(
                  configuration.filter(
                    (fields) => fields.fieldName !== field.fieldName
                  )
                );
              }}
            />{" "}
          </TableCell>
        ))}
        <TableCell> Delete </TableCell>
        <TableCell> Update </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
