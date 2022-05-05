
import { TreeItem } from "@mui/lab";
import { Fragment, useState } from "react";


const TableHeadTree = () => {

    return (
        <TreeItem label = {
            <Fragment>
            <div className = 'itemContainer' >
                <div>ID</div>
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