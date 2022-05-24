import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import React from "react";
import ColumnsChecker from "./ColumnsChecker";
import ConfigBarMain from "./ConfigBarMain";
const useStyles = makeStyles({
  box: {
    boxSizing: "border-box",
    display: "none",
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
  handlePopover,
  anchorEl,
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
    <Popover
      open={show.name === fieldName}
      onClose={() => handlePopover(fieldName)}
      id="simple-popover"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      className={classes.box}
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
    </Popover>
  );
};

export default ConfigBar;
