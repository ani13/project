import React, { useEffect, useState, useRef } from 'react';
import ViewTree from '../viewTree';

const TreeGridContainer = () => {
         //states 
    const [users, setNewUser] = useState([]);
    const [user, setUser] = useState({ fullName: '', position: '', salary: null , date: '',
    type: '', id: 0 , Children: []});
    const [ child, setChild] = useState({parent: 0, bool: false});
    const [modal, setModal] = useState(false);
    //================================================//


    // submit function //
    const submit = () => {

        if(child.bool == true) {
            if(user.id == 0) {
                let myUser =  users.find((item) => item.id === child.parent);
                let myChildren = myUser.Children;
                let id = myChildren.length === 0 ? 1 : myChildren[myChildren.length-1].id + 1;
                myChildren.push({fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
                    type: user.type, id: id, Children: []});
                setNewUser(users.map((item) => item.id == user.id ? {fullName: myUser.fullName , position: myUser.position, salary: myUser.salary , date: myUser.date,
                    type: myUser.type, id: myUser.id, Children: myChildren} : item));
                
            } else {
    
                setNewUser(users.map((item) => item.id == child.parent ? {fullName: item.fullName , position: item.position,
                    salary: item.salary , date: item.date, type: item.type, id: item.id, Children: item.Children.push({
                        fullName: user.fullName , position: user.position,
                    salary: user.salary , date: user.date, type: user.type, id: item.id, Children: []

                    })} : item));
            }
            setChild({parent: 0, bool: false});


        } else {
        if(user.id == 0) {

            let id = users.length === 0 ? 1 : users[users.length-1].id + 1;
            let u = {fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
            type: user.type, id: id, Children: user.Children}
            setNewUser([...users, u]);
            
        } else {

            setNewUser(users.map((item) => item.id == user.id ? {fullName: user.fullName , position: user.position,
                salary: user.salary , date: user.date, type: user.type, id: item.id, Children: item.Children} : item));
        }
        }

        setUser({fullName: '' , position: '', salary: '' , date: '',
        type: '', id: 0, Children: [] });

        setModal(false);
        
    }
    //==================================================================================================//



    // onchange function //
    const onChange = (event) => {
        let name = event.target.name; 
        switch(name) {

            case 'fullName':

                setUser({fullName: event.target.value , position: user.position, salary: user.salary , date: user.date,
                type: user.type, id: user.id, Children: user.Children});
                break;

            case 'position':

                setUser({fullName: user.fullName , position: event.target.value, salary: user.salary , date: user.date,
                    type: user.type, id: user.id,Children: user.Children });
                    break;
                    
            case 'salary':

                setUser({fullName: user.fullName , position: user.position, salary: event.target.value , date: user.date,
                    type: user.type, id: user.id, Children: user.Children});
                break;
                    
            case 'date':

                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: event.target.value,
                    type: user.type, id: user.id, Children: user.Children});
                break;
            case 'radiobutton':
                setUser({fullName: user.fullName , position: user.position, salary: user.salary , date: user.date,
                    type: event.target.value, id: user.id, Children: user.Children});
                break;

            
        }
    }

    //==================================================================================================//



    // delete //
    const deleteUser = (id, childId) => {

        if(childId == 0) {
            setNewUser(users.filter((item) => item.id !== id));

        } else {
            let myUser = users.find((item) => item.id === id);
            let newChildren = myUser.Children.filter((item) => item.id !== childId);
           
            setNewUser(users.map((item) => item.id === id ? {fullName: myUser.fullName , position: myUser.position, salary: myUser.salary , date: myUser.date,
                type: myUser.type, id: myUser.id, Children: newChildren} : item));
        
        }

        setUser({fullName: '' , position: '', salary: '' , date: '',
            type: '', id: 0, Children: []});

        

    }




    // update function //
    const updateUser = (id, childId) => {

        setModal(true);
        let newArray = users;
        let myUser = newArray.find((item) => item.id === id);

        setUser({ fullName: myUser.fullName, position: myUser.position, salary: myUser.salary , date: myUser.date,
            type: myUser.type , id: id, Children: myUser.Children });

        if(childId != 0) setChild({parent: id, bool: true});
        

        


    }

    // add a child //
    const addChild = (id) => {
        setChild({parent: id, bool: true});
        setModal(true);

    }


    return (<ViewTree usersArray = {users} 
         singleUser = {user} modalProp = {modal} setModal = {setModal} submit = {submit} onChange = {onChange}
          deleteUser = {deleteUser} updateUser = {updateUser} addChild = {addChild} />);
}

export default TreeGridContainer;