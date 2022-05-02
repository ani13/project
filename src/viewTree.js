import MainTableTree from "./components/TreeTable/MainTableTree";
import Modal from "./components/Modal";

const ViewTree= ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser, addChild }) => {

    return(

        <div className = 'container'>
            
            <button type = 'button' id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </button>
            
            <MainTableTree usersArray = {usersArray}  modal = {modalProp} setModal = {setModal}
            deleteUser = {deleteUser}  updateUser = {updateUser} addChild = {addChild} />

            <Modal  singleUser = {singleUser} modal = {modalProp}
             submit = {submit}  onChange = {onChange}/>
        </div>
    );

}


export default ViewTree;