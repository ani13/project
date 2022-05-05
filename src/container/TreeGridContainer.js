import React, { useEffect, useState, useRef } from 'react';
import ViewTree from '../viewTree';

const TreeGridContainer = () => {
         //states 
    const [users, setNewUser] = useState([]);
    const [user, setUser] = useState({ fullName: '', position: '', salary: null , date: '',
    type: '', id: 0 ,parentId: 0, open: true});
    const [modal, setModal] = useState(false);
    //================================================//


    // submit function //
    const submit = () => {

        if(user.id == 0) {

            let id = users.length === 0 ? 1 : users[users.length-1].id + 1;
            let u = {fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
            type: user.type, id: id, parentId: user.parentId, open: user.open}
            setNewUser([...users, u]);
            
        } else {

            setNewUser(users.map((item) => item.id === user.id ? {fullName: user.fullName , position: user.position,
                salary: user.salary , date: user.date, type: user.type, id: item.id, parentId: user.parentId, open: user.open} : item));
        }

        console.log(user);

        setUser({fullName: '' , position: '', salary: '' , date: '',
        type: '', id: 0, parentId: 0, open: true });
        setModal(false);
        
    }
    //==================================================================================================//



    // onchange function //
    const onChange = (event) => {

        let name = event.target.name;
        
        /* setUser([...user, name: event.target.value]) */

        switch(name) {

            case 'fullName':

                setUser({fullName: event.target.value , position: user.position, salary: user.salary , date: user.date,
                type: user.type, id: user.id, parentId: user.parentId, open: user.open});
                break;

            case 'position':

                setUser({fullName: user.fullName , position: event.target.value, salary: user.salary , date: user.date,
                    type: user.type, id: user.id, parentId: user.parentId,  open: user.open });
                    break;
                    
            case 'salary':

                setUser({fullName: user.fullName , position: user.position, salary: event.target.value , date: user.date,
                    type: user.type, id: user.id, parentId: user.parentId, open: user.open});
                break;
                    
            case 'date':

                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: event.target.value,
                    type: user.type, id: user.id, parentId: user.parentId, open: user.open});
                break;
            case 'radiobutton':
                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
                    type: event.target.value, id: user.id, parentId: user.parentId, open: user.open});
                break;

            
        }
    }

    //==================================================================================================//



    // delete //
    const deleteUser = (id) => {

        setNewUser(users.filter((item) => item.id !== id));
        
        setUser({fullName: '' , position: '', salary: '' , date: '',
            type: '', id: 0, parentId: 0, open: true});

    }

    // update function //
    const updateUser = (id) => {

        setModal(true);
        let newArray = users;
        let myUser = newArray.find((item) => item.id === id);

        setUser({ fullName: myUser.fullName, position: myUser.position, salary: myUser.salary , date: myUser.date,
                type: myUser.type , id: id, parentId: myUser.parentId, open: myUser.open });
       
    }



    const updateOpen = (id) => {
        
        setNewUser(users.map((item) => item.id === id ? {fullName: item.fullName , position: item.position,
            salary: item.salary , date: item.date, type: item.type, id: item.id, parentId: item.parentId, open: !item.open} : item));    
    }


    // add a child //
    const addChild = (id) => {

        setModal(true);
        // ამით მხოლოდ აიდის ვუცვლი უზერს მშობლის 
        setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
            type: user.type, id: user.id, parentId: id, open: user.open});

    }


    return (<ViewTree usersArray = {users} 
         singleUser = {user} modalProp = {modal} setModal = {setModal} submit = {submit} onChange = {onChange}
          deleteUser = {deleteUser} updateUser = {updateUser} addChild = {addChild} updateOpen = {updateOpen} />);
}

export default TreeGridContainer;