
const Modal = ({ 
    singleUser, modal,  submit,  onChange  }) => {

    return(

        <div className = "formContainer" style = {{ display: modal ? "block" : "none"}}>

                <div className = 'form' style = {{ display: modal ? "block" : "none"}}>
                    <label> Full Name <br></br>
                        <input type = "text" name = 'fullName' value = {singleUser.fullName} onChange={(event) =>onChange(event) } />
                    </label><br></br>
                

                    <label> Position <br></br>
                        <input type = "text" name = 'position' value = {singleUser.position} onChange={(event) => onChange(event) }/>
                    </label><br></br>
                
                
                    <label> Salary <br></br>
                        <input type = "number" name = 'salary' value = {singleUser.salary} onChange={(event) => onChange(event) }/>
                    </label><br></br>
                

                    <label> Date <br></br>
                        <input type = "date" name = 'date' value = {singleUser.date} onChange={(event) => onChange(event) }/> 
                    </label><br></br>


                    <label> Type: </label><br></br>
                    <input type = "radio" name = 'radiobutton' checked = {singleUser.type == 'Intern'} value = 'Intern' onChange={(event) => onChange(event) } />
                    <label > Intern </label><br></br>
                    <input type = "radio" name ='radiobutton' checked = {singleUser.type == 'Junior'} value = 'Junior' onChange={(event) => onChange(event) } />
                    <label > Junior </label><br></br>
                    <input type = "radio" name ='radiobutton' checked = {singleUser.type == 'Senior'} value = 'Senior' onChange={(event) => onChange(event) }/>
                    <label > Senior </label><br></br>
                

            
                    <input className = 'submit' type="submit" value="Submit" onClick={ () => submit()}/>

                </div>
            </div>

    );

}

export default Modal;