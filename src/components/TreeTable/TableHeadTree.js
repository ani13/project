
import { TreeItem } from "@mui/lab";
import { Fragment} from "react";
import React from 'react'


const TableHeadTree = ({useStyles}) => {

    const classes = useStyles();

    return (
        <TreeItem nodeId = '0' label = {
            <Fragment>
            <div className = {classes.Row} >
                <div  >ID</div>
                <div >Full Name</div>
                <div >Position</div>
                <div >Salary</div>
                <div >Date</div>
                <div >Type</div>
                <div >Delete</div>
                <div >Update</div>
                <div >Add a child</div>
            </div>
            </Fragment>
        }>

        </TreeItem>

    );

}

export default TableHeadTree;