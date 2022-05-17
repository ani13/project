import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

const TableHeadComponent = ({ GridConfig }) => {
  return (
    <TableHead>
      <TableRow>
        {GridConfig.map((field) => (
          <TableCell> {field.title} </TableCell>
        ))}
        <TableCell> Delete </TableCell>
        <TableCell> Update </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
