import TableHeadTree from "./TableHeadTree";
import Button from '@mui/material/Button';

const MainTableTree = ({usersArray, modal, setModal, deleteUser,  updateUser, addChild}) => {

    let showChildren = true;

    return (
            <table className='table' style = {{ filter: modal ? 'blur(2px)' : 'none'}}>
                
                <TableHeadTree />
                { usersArray.map((item) => (
                    
                        <table>
                        <tr>
                            <td> {item.id}</td>
                            <td><span className="caret" onClick = {() => {showChildren = true}}>{item.fullName}</span></td>
                            <td>{item.position}</td>
                            <td>{item.salary}</td>
                            <td>{item.date}</td>
                            <td>{item.type}</td>

                            <td > <Button className = 'button' type='button' onClick = {() => deleteUser(item.id, 0)}> Delete </Button></td>
                            <td > <button className = 'button' type='button' onClick = {() => updateUser(item.id, 0)}> Update </button></td>
                            <td> <button className = 'button' type='button'  onClick = {() => addChild(item.id)}> add a child </button> </td>

                            
                        </tr> 

                                
                        { item.Children.map((child) => (
                            <tr> 
                                <td> {item.id}.{child.id}</td>
                                <td>{child.fullName}</td>
                                <td>{child.position}</td>
                                <td>{child.salary}</td>
                                <td>{child.date}</td>
                                <td>{child.type}</td>
                                <td > <button className = 'button' type='button' onClick = {() => deleteUser(item.id, child.id)}> Delete </button></td>
                                <td > <button className = 'button' type='button' onClick = {() => updateUser(item.id,child.id)}> Update </button></td>

                            </tr>

                        ))}
                        
                        </table>
                        
                        
                
                ))}

                 
            </table>);

}

export default MainTableTree;