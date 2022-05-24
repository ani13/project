import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ColumnsChecker from "./ColumnsChecker";
import ConfigBarMain from "./ConfigBarMain";
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

  const setConfiguration = (fieldName) => {
    setConfig(
      configuration.map((fields) =>
        fields.fieldName === fieldName
          ? { ...fields, showing: !fields.showing }
          : fields
      )
    );
  };

  return (
    <Box
      component="span"
      className={classes.box}
      id="configBox"
      sx={{ display: show.name === fieldName ? "flex" : "none" }}
    >
      {showColumns ? (
        <ColumnsChecker
          configuration={configuration}
          setConfiguration={setConfiguration}
        />
      ) : (
        <ConfigBarMain
          setShow={setShow}
          fieldName={fieldName}
          setshowColumns={setshowColumns}
          sortUsers={sortUsers}
          setConfiguration={setConfiguration}
        />
      )}
    </Box>
  );
};

export default ConfigBar;
