import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react'

const TableHeadComponent = () => {


    return (
    <TableHead>
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Full Name</TableCell>
            <TableCell >Position</TableCell>
            <TableCell >Salary</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Delete</TableCell>
            <TableCell >Update</TableCell>

        </TableRow>
    </TableHead>
    
    );

}

export default TableHeadComponent;