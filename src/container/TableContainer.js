import React, {useState} from 'react';
import ViewGrid from '../view';

const TableContainer = ({useStyles}) => {

    //states 
    const [users, setNewUser] = useState([]);
    const [user, setUser] = useState({ fullName: '', position: '', salary: null , date: '',
    type: '', id: 0 });
    const [modal, setModal] = useState(false);
    //================================================//


    // submit function //
    const submit = () => {
        if(user.id === 0) {

            let id = users.length === 0 ? 1 : users[users.length-1].id + 1;
            let u = {fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
            type: user.type, id: id}
            setNewUser([...users, u]);
            
        } else {

            setNewUser(users.map((item) => item.id === user.id ? {fullName: user.fullName , position: user.position,
                salary: user.salary , date: user.date, type: user.type, id: item.id} : item));
        }

        setUser({fullName: '' , position: '', salary: '' , date: '',
        type: '', id: 0});

        setModal(false);
        
    }
    //==================================================================================================//



    // onchange function //
    const onChange = (event) => {
        let name = event.target.name; 
        if(name === 'radiobutton') setUser({...user, type: event.target.value});
        else setUser({...user, [name]: event.target.value});
    }

    //==================================================================================================//



    // delete //
    const deleteUser = (id) => {

        setNewUser(users.filter((item) => item.id !== id));
        setUser({fullName: '' , position: '', salary: '' , date: '',
        type: '', id: 0});

    }




    // update function //
    const updateUser = (id) => {

        setModal(true);
        let newArray = users;
        let myUser = newArray.find((item) => item.id === id);

        setUser({ fullName: myUser.fullName, position: myUser.position, salary: myUser.salary , date: myUser.date,
        type: myUser.type , id: id });


    }


    return (<ViewGrid usersArray = {users} 
         singleUser = {user} modalProp = {modal} setModal = {setModal} submit = {submit} onChange = {onChange}
          deleteUser = {deleteUser} updateUser = {updateUser} useStyles = {useStyles} />);

}

export default TableContainer;