import TableHeadTree from "./TableHeadTree";
import { TreeItem } from "@mui/lab";
import { TreeView } from "@mui/lab";
import Button from '@mui/material/Button';
import { Fragment, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const MainTableTree = ({usersArray, modal, setModal, deleteUser,  updateUser, addChild, updateOpen}) => {


    function Row(props) {


        const item = props.user;
      
        return (

            <TreeItem nodeId = {item.id} label = {
                <Fragment>
                <div className = "itemContainer">
                    <div> {item.id} </div>
                    <div> {item.fullName} </div>
                    <div>{item.position}</div>
                    <div>{item.salary}</div>
                    <div>{item.date}</div>
                    <div>{item.type}</div>
                    <div> <Button variant="contained" className = 'button' type='button' onClick = {() => deleteUser(item.id)}> Delete </Button> </div>
                    <div> <Button variant="contained" className = 'button' type='button' onClick = {() => updateUser(item.id)}> Update </Button> </div>
                    <div> <Button variant="contained" className = 'button' type='button'  onClick = {() => addChild(item.id)}> add a child </Button>  </div>
                </div>
              </Fragment>

            }>

                    { (usersArray.filter((child) => child.parentId === item.id)).map((child) => (
                        <Row user = {child} />
                    ))}


            </TreeItem>
        );
        
      }
    

    return (

        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            className = 'table' style = {{ filter: modal ? 'blur(2px)' : 'none'}}
        >

            <TableHeadTree />

            { (usersArray.filter((item) => item.parentId === 0)).map((item) => (
                
            <Row user = {item} />
            ))}

        </TreeView>
    );
                     
}

export default MainTableTree;