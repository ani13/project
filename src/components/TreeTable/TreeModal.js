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
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  Submitbutton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "20px",
  },

  form: {
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    backgroundColor: "white",
    padding: "20px",
    margin: "5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "midnightblue",
    width: "fit-content",
    height: "90%",
    overflow: "scroll",
  },

  formItem: {
    padding: "5px",
    width: "250px",
  },
});

const MyModal = ({
  singleUser,
  modal,
  setModal,
  submit,
  onChange,
  onSelect,
  grid,
  TreeConfig,
}) => {
  const classes = useStyles();
  const gridUsers = grid;

  return (
    <Modal open={modal} onClose={() => setModal(false)} className="modal">
      <Stack className={classes.form} spacing={2}>
        {TreeConfig.filter((field) => field.destination === "form").map(
          (field) => (
            <TextField
              className={classes.formItem}
              label={field.title}
              type={field.type}
              name={field.fieldName}
              value={singleUser[field.fieldName]}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => onChange(event)}
              autoComplete="current-password"
            />
          )
        )}

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
              <MenuItem value={item}> {item.field1} </MenuItem>
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
            value="Middle"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "Middle"}
                value="Middle"
                onChange={(event) => onChange(event)}
              />
            }
            label="Intern"
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
