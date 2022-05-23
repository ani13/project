import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Fragment } from "react";
const useStyles = makeStyles({
  box: {
    top: "50px",
    right: "24%",
    boxSizing: "border-box",
    position: "absolute",
    border: "1px solid grey",
    borderRadius: "2px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    background: "white",
    display: "none",
    flexDirection: "column",
    padding: "2px",
    zIndex: "1000",
    opacity: 1,
    width: "115px",
    marginLeft: "auto",
    marginRight: 0,
    maxHeight: "350px",
    overflow: "scroll",
  },
});

const ConfigBar = ({
  show,
  setShow,
  fieldName,
  setConfig,
  configuration,
  sortUsers,
  showColumns,
  setshowColumns,
}) => {
  const classes = useStyles();
  return (
    <Box
      component="span"
      className={classes.box}
      id="configBox"
      sx={{ display: show.name === fieldName ? "flex" : "none" }}
    >
      {showColumns ? (
        <FormGroup>
          {configuration.map((field) => (
            <FormControlLabel
              control={
                field.fieldName === "id" ? (
                  <Switch disabled defaultChecked />
                ) : (
                  <Switch
                    checked={field.showing === true}
                    onChange={() => {
                      setConfig(
                        configuration.map((fields) =>
                          fields.fieldName === field.fieldName
                            ? {
                                title: fields.title,
                                fieldName: field.fieldName,
                                showing: !fields.showing,
                              }
                            : fields
                        )
                      );
                    }}
                  />
                )
              }
              label={field.title}
            />
          ))}
        </FormGroup>
      ) : (
        <Fragment>
          <Button
            onClick={() => {
              sortUsers({ direction: "descend", fieldname: "id" });
              setShow({ show: false, name: "" });
            }}
          >
            {" "}
            Unsort{" "}
          </Button>
          {fieldName === "id" ? (
            <Button disabled> Hide </Button>
          ) : (
            <Button
              onClick={() => {
                setConfig(
                  configuration.map((fields) =>
                    fields.fieldName === fieldName
                      ? {
                          title: fields.title,
                          fieldName: fieldName,
                          showing: false,
                        }
                      : fields
                  )
                );
                setShow({ show: false, name: "" });
              }}
            >
              Hide
            </Button>
          )}
          <Button
            onClick={() => {
              setshowColumns(true);
            }}
          >
            {" "}
            Show Columns
          </Button>
        </Fragment>
      )}
    </Box>
  );
};

export default ConfigBar;
