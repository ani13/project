import Radio from "@mui/material/Radio";
import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const MyModal = ({
  singleUser,
  modal,
  setModal,
  submit,
  onChange,
  useStyles,
  onSelect,
}) => {
  const classes = useStyles();
  const gridUsers = useSelector((state) => state.grid.value);

  return (
    <Modal open={modal} onClose={() => setModal(false)} className="modal">
      <Stack className={classes.form} spacing={2}>
        <TextField
          className={classes.formItem}
          label="Full Name"
          type="text"
          name="fullName"
          value={singleUser.fullName}
          onChange={(event) => onChange(event)}
          autoComplete="current-password"
        />

        <TextField
          className={classes.formItem}
          label="Position"
          type="text"
          name="position"
          value={singleUser.position}
          onChange={(event) => onChange(event)}
          autoComplete="current-password"
        />

        <TextField
          className={classes.formItem}
          label="Salary"
          type="number"
          name="salary"
          value={singleUser.salary}
          onChange={(event) => onChange(event)}
          autoComplete="current-password"
        />

        <TextField
          className={classes.formItem}
          id="date"
          name="date"
          label="Date"
          type="date"
          value={singleUser.date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => onChange(event)}
        />

        <FormControl className={classes.formItem}>
          <InputLabel id="demo-simple-select-label">Grid User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grid User"
            value=""
            onChange={(event) => onSelect(event)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {gridUsers.map((item) => (
              <MenuItem value={item}> {item.fullName} </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormLabel
          id="demo-controlled-radio-buttons-group"
          className={classes.formItem}
        >
          Type:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={singleUser.type}
          onChange={(event) => onChange(event)}
        >
          <FormControlLabel
            value="Intern"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "Intern"}
                value="Intern"
                onChange={(event) => onChange(event)}
              />
            }
            label="Intern"
          />
          <FormControlLabel
            value="Junior"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "Junior"}
                value="Junior"
                onChange={(event) => onChange(event)}
              />
            }
            label="Junior"
          />
          <FormControlLabel
            value="Senior"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "Senior"}
                value="Senior"
                onChange={(event) => onChange(event)}
              />
            }
            label="Senior"
          />
        </RadioGroup>

        <Button
          className={classes.Submitbutton}
          variant="contained"
          id="submitButton"
          onClick={() => submit()}
        >
          {" "}
          Submit{" "}
        </Button>
      </Stack>
    </Modal>
  );
};

export default MyModal;
