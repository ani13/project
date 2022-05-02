
import MainTable from "./components/Table/MainTable";
import Modal from "./components/Modal";

const ViewGrid = ({ usersArray,
         singleUser, modalProp,  setModal , submit,  onChange ,
          deleteUser,  updateUser }) => {

    return(

        <div className = 'container'>
            
            <button type = 'button' id = 'formButton' onClick={() => setModal(true)} style = {{ filter: modalProp ? 'blur(2px)' : 'none'}}
            > Add new User </button>
            
            <MainTable usersArray = {usersArray}  modal = {modalProp} 
            deleteUser = {deleteUser}  updateUser = {updateUser} />

            <Modal  singleUser = {singleUser} modal = {modalProp}
             submit = {submit}  onChange = {onChange}/>
        </div>
    );

}


export default ViewGrid;