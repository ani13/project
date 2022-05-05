import React, {useEffect, useState} from 'react';
import ViewGrid from '../view';

const TableContainer = () => {

    //states 
    const [users, setNewUser] = useState([]);
    const [user, setUser] = useState({ fullName: '', position: '', salary: null , date: '',
    type: '', id: 0 });
    const [modal, setModal] = useState(false);
    //================================================//


    // submit function //
    const submit = () => {
        if(user.id == 0) {

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
        switch(name) {

            case 'fullName':

                setUser({fullName: event.target.value , position: user.position, salary: user.salary , date: user.date,
                type: user.type, id: user.id});
                break;

            case 'position':

                setUser({fullName: user.fullName , position: event.target.value, salary: user.salary , date: user.date,
                    type: user.type, id: user.id });
                    break;
                    
            case 'salary':

                setUser({fullName: user.fullName , position: user.position, salary: event.target.value , date: user.date,
                    type: user.type, id: user.id});
                break;
                    
            case 'date':

                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: event.target.value,
                    type: user.type, id: user.id});
                break;
            case 'radiobutton':
                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
                    type: event.target.value, id: user.id});
                break;

            
        }
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
          deleteUser = {deleteUser} updateUser = {updateUser} />);

}

export default TableContainer;