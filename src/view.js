import { Button } from "@mui/material";
import MainTable from "./components/Table/MainTable";
import MyModal from "./components/Modal";
import React from 'react'




const ViewGrid = ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser, useStyles }) => {

    const classes = useStyles();
    return(

        <div className = 'container'>
            
            <Button variant="contained" className = {classes.Submitbutton} id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </Button>
            
            <MainTable usersArray = {usersArray}  modal = {modalProp} 
            deleteUser = {deleteUser}  updateUser = {updateUser}  useStyles = {useStyles} />

            <MyModal  singleUser = {singleUser} modal = {modalProp} setModal = {setModal}
             submit = {submit}  onChange = {onChange} useStyles = {useStyles} />
        </div>
    );

}


export default ViewGrid;