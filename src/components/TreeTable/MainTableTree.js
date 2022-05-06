import TableHeadTree from "./TableHeadTree";
import { TreeItem } from "@mui/lab";
import { TreeView } from "@mui/lab";
import Button from '@mui/material/Button';
import { Fragment} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'


const MainTableTree = ({usersArray, modal, setModal, deleteUser,  updateUser, addChild, updateOpen, useStyles}) => {

    
    const classes = useStyles();

    function Row(props) {


        const item = props.user;
        const classes = useStyles();
      
        return (

            <TreeItem nodeId = {`${item.id}`} label = {
                <Fragment>
                <div className = {classes.Row}>
                    <div clasName = {classes.RowItem}> {item.id} </div>
                    <div clasName = {classes.RowItem}> {item.fullName} </div>
                    <div clasName = {classes.RowItem}> {item.position} </div>
                    <div clasName = {classes.RowItem}> {item.salary} </div>
                    <div clasName = {classes.RowItem}> {item.date} </div>
                    <div clasName = {classes.RowItem}> {item.type} </div>  
                    <div clasName = {classes.RowItem}> <Button variant="contained" className = {classes.button} type='button' onClick = {() => deleteUser(item.id)}> Delete </Button> </div>
                    <div clasName = {classes.RowItem}> <Button variant="contained" className = {classes.button} type='button' onClick = {() => updateUser(item.id)}> Update </Button> </div>
                    <div clasName = {classes.RowItem}> <Button variant="contained" className = {classes.button} type='button'  onClick = {() => addChild(item.id)}> Child </Button>  </div>
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
            className = {classes.Tree} style = {{ filter: modal ? 'blur(2px)' : 'none'}}
        >

            <TableHeadTree useStyles={ useStyles}/>

            { (usersArray.filter((item) => item.parentId === 0)).map((item) => (
                
            <Row user = {item} />
            ))}

        </TreeView>
    );
                     
}

export default MainTableTree;