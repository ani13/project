
import { TreeItem } from "@mui/lab";
import { Fragment} from "react";
import React from 'react'


const TableHeadTree = ({useStyles}) => {

    const classes = useStyles();

    return (
        <TreeItem nodeId = '0' label = {
            <Fragment>
            <div className = {classes.Row} >
                <div clasName = {classes.RowItem} >ID</div>
                <div clasName = {classes.RowItem}>Full Name</div>
                <div clasName = {classes.RowItem}>Position</div>
                <div clasName = {classes.RowItem}>Salary</div>
                <div clasName = {classes.RowItem}>Date</div>
                <div clasName = {classes.RowItem}>Type</div>
                <div clasName = {classes.RowItem}>Delete</div>
                <div clasName = {classes.RowItem}>Update</div>
                <div clasName = {classes.RowItem}>Add a child</div>
            </div>
            </Fragment>
        }>

        </TreeItem>

    );

}

export default TableHeadTree;