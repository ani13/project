import MainTableTree from "./components/TreeTable/MainTableTree";
import MyModal from "./components/Modal";
import Button from '@mui/material/Button';
import React from 'react'
import Alert from "./components/Alert";


  
 

const ViewTree= ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser, addChild,useStyles , open, setOpen, alertMessage}) => {

    const classes = useStyles();

    return(

        <div className = 'container'>

            
            <Button  variant="contained" className = {classes.Submitbutton} id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </Button>
            
            <MainTableTree usersArray = {usersArray}  modal = {modalProp} 
            deleteUser = {deleteUser}  updateUser = {updateUser} addChild = {addChild} useStyles = {useStyles} />

            <MyModal  singleUser = {singleUser} modal = {modalProp} setModal = {setModal}
             submit = {submit}  onChange = {onChange} useStyles = {useStyles} />

            <Alert alertMessage = {alertMessage} open= {open} setOpen={setOpen} />

        </div>
    );

}


export default ViewTree;