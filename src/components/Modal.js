
import Radio from '@mui/material/Radio';
import { Stack, TextField} from '@mui/material';
import { Button } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const Modal = ({ 
    singleUser, modal,  submit,  onChange  }) => {

    return(
      
        <div className = "formContainer" style = {{ display: modal ? "block" : "none"}}>

                <Stack className = 'form' spacing={2}>
                    <TextField
                        id="outlined-password-input"
                        label="Full Name"
                        type = 'text'
                        name = 'fullName'
                        value = {singleUser.fullName}
                        onChange={(event) =>onChange(event) } 
                        autoComplete="current-password"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Position"
                        type = 'text'
                        name = 'position'
                        value = {singleUser.position}
                        onChange={(event) =>onChange(event) } 
                        autoComplete="current-password"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Salary"
                        type = 'number'
                        name = 'salary'
                        value = {singleUser.salary}
                        onChange={(event) =>onChange(event) } 
                        autoComplete="current-password"
                    />

                    <TextField
                        id="date"
                        name = 'date'
                        label="Date"
                        type="date"
                        value={singleUser.date}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={(event) => onChange(event) }
                    />


                
                    <FormLabel id="demo-controlled-radio-buttons-group">Type:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={singleUser.type}
                        onChange={(event) => onChange(event) }
                    >
                        <FormControlLabel value="Intern" control={<Radio name = 'radiobutton' checked = {singleUser.type == 'Intern'} value = 'Intern' onChange={(event) => onChange(event) } />} label="Intern" />
                        <FormControlLabel value="Junior" control={<Radio name ='radiobutton' checked = {singleUser.type == 'Junior'} value = 'Junior' onChange={(event) => onChange(event) } />} label="Junior" />
                        <FormControlLabel value="Senior" control={<Radio name ='radiobutton' checked = {singleUser.type == 'Senior'} value = 'Senior' onChange={(event) => onChange(event) }/>} label="Senior" />

                    </RadioGroup>

                    
                    <Button className = 'submit' variant="outlined"  onClick={ () => submit()}> Submit </Button>

                </Stack>
            </div>

        

    );

}

export default Modal;