import Radio from "@mui/material/Radio";
import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { makeStyles } from "@mui/styles";

const MyModal = ({
  singleUser,
  modal,
  setModal,
  submit,
  onChange,
  GridConfig,
}) => {
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
  const classes = useStyles();

  return (
    <Modal open={modal} onClose={() => setModal(false)} className="modal">
      <Stack className={classes.form} spacing={2}>
        {GridConfig.filter((field) => field.destination === "form").map(
          (field) => (
            <TextField
              className={classes.formItem}
              label={field.title}
              type={field.type}
              name={field.fieldName}
              value={singleUser.fieldName}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => onChange(event)}
              autoComplete="current-password"
            />
          )
        )}

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
            value="junior"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "junior"}
                value="junior"
                onChange={(event) => onChange(event)}
              />
            }
            label="junior"
          />
          <FormControlLabel
            value="middle"
            control={
              <Radio
                name="radiobutton"
                checked={singleUser.type === "middle"}
                value="middle"
                onChange={(event) => onChange(event)}
              />
            }
            label="middle"
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
