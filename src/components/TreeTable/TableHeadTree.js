
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const TableHeadTree = () => {


    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>ID</TableCell>
                <TableCell >Full Name</TableCell>
                <TableCell >Position</TableCell>
                <TableCell >Salary</TableCell>
                <TableCell >Date</TableCell>
                <TableCell >Type</TableCell>
                <TableCell >Delete</TableCell>
                <TableCell >Update</TableCell>
                <TableCell >Add a child</TableCell>

            </TableRow>
        </TableHead>

    );

}

export default TableHeadTree;