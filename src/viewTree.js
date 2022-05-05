import MainTableTree from "./components/TreeTable/MainTableTree";
import Modal from "./components/Modal";
import Button from '@mui/material/Button';

const ViewTree= ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser, addChild, updateOpen }) => {

    return(

        <div className = 'container'>
            
            <Button type = 'button' id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </Button>
            
            <MainTableTree usersArray = {usersArray}  modal = {modalProp} setModal = {setModal}
            deleteUser = {deleteUser}  updateUser = {updateUser} addChild = {addChild} updateOpen = {updateOpen}/>

            <Modal  singleUser = {singleUser} modal = {modalProp}
             submit = {submit}  onChange = {onChange}/>
        </div>
    );

}


export default ViewTree;