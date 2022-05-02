import TableHead from "./TableHead";

const MainTable = ({usersArray, modal, deleteUser,  updateUser}) => {

    return (
            <table className='table' style = {{ filter: modal ? 'blur(2px)' : 'none'}}>
                
                <TableHead />
                { usersArray.map((item, id) => (

                    <tr>
                        <td> {item.id}</td>
                        <td>{item.fullName}</td>
                        <td>{item.position}</td>
                        <td>{item.salary}</td>
                        <td>{item.date}</td>
                        <td>{item.type}</td>
                        <td > <button className = 'button' type='button' onClick = {() => deleteUser(item.id)}> Delete </button></td>
                        <td > <button className = 'button' type='button' onClick = {() => updateUser(item.id)}> Update </button></td>

                    </tr>

            ))}
                
            </table>);

}

export default MainTable;