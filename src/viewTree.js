import MainTableTree from "./components/TreeTable/MainTableTree";
import Modal from "./components/Modal";
import Button from '@mui/material/Button';
import React from 'react'


  
 

const ViewTree= ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser, addChild, updateOpen, useStyles }) => {

    const classes = useStyles();

    return(

        <div className = 'container'>

            
            
            <Button  variant="contained" className = {classes.Submitbutton} id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </Button>
            
            <MainTableTree usersArray = {usersArray}  modal = {modalProp} setModal = {setModal}
            deleteUser = {deleteUser}  updateUser = {updateUser} addChild = {addChild} updateOpen = {updateOpen} useStyles = {useStyles} />

            <Modal  singleUser = {singleUser} modal = {modalProp}
             submit = {submit}  onChange = {onChange} useStyles = {useStyles} />
        </div>
    );

}


export default ViewTree;