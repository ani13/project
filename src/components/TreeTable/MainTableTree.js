import TableHeadTree from "./TableHeadTree";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fragment, useState } from "react";

const MainTableTree = ({usersArray, modal, setModal, deleteUser,  updateUser, addChild}) => {

    const [showChildren, setshowChildren] = useState(true);

    function Row(props) {

        const item = props.user;
        const [open, setOpen] = useState(false);
      
        return (
          <Fragment>
            <TableRow >

              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>

              <TableCell> {item.id} </TableCell>
              <TableCell > {item.fullName} </TableCell>
              <TableCell >{item.position}</TableCell>
              <TableCell >{item.salary}</TableCell>
              <TableCell >{item.date}</TableCell>
              <TableCell >{item.type}</TableCell>
              <TableCell> <Button variant="contained" className = 'button' type='button' onClick = {() => deleteUser(item.id, 0)}> Delete </Button> </TableCell>
              <TableCell> <Button variant="contained" className = 'button' type='button' onClick = {() => updateUser(item.id, 0)}> Update </Button> </TableCell>
              <TableCell> <Button variant="contained" className = 'button' type='button'  onClick = {() => addChild(item.id)}> add a child </Button>  </TableCell>

            </TableRow>


            <TableRow>
              <TableCell style={{ padding: 0, paddingTop: 0 }} colSpan={10}>
                <Collapse in={open} timeout="auto" unmountOnExit>

                  <Box sx={{ margin: 1 }}>
                    <Table size="small" aria-label="purchases">
                    { item.Children.map((child) => (
                            <TableRow> 
                                
                                <TableCell style={{ width: '20px' }}> {item.id}.{child.id}</TableCell>
                                <TableCell>{child.fullName}</TableCell>
                                <TableCell>{child.position}</TableCell>
                                <TableCell>{child.salary}</TableCell>
                                <TableCell>{child.date}</TableCell>
                                <TableCell>{child.type}</TableCell>
                                <TableCell style={{ width: '100px' }}> <Button variant="contained" className = 'button' type='button' onClick = {() => deleteUser(item.id, child.id)}> Delete </Button></TableCell>
                                <TableCell style={{ width: '100px' }}> <Button variant="contained" className = 'button' type='button' onClick = {() => updateUser(item.id,child.id)}> Update </Button></TableCell>
                                

                            </TableRow>

                        ))}
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </Fragment>
        );
      }
    

    return (
        
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" className='table' style = {{ filter: modal ? 'blur(2px)' : 'none'}}>

                    <TableHeadTree />

                    <TableBody>
                        {usersArray.map((item) => (
                            <Row user = {item} />
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>);

}

export default MainTableTree;