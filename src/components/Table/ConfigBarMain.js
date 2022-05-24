import { Button } from "@mui/material";
import React from "react";
import { Fragment } from "react";

const ConfigBarMain = ({
  setShow,
  fieldName,
  setConfiguration,
  setshowColumns,
  sortUsers,
}) => {
  return (
    <Fragment>
      <Button
        onClick={() => {
          sortUsers({ direction: "descend", fieldname: "id" });
          setShow({ show: false, name: "" });
        }}
      >
        Unsort{" "}
      </Button>
      {fieldName === "id" ? (
        <Button disabled> Hide </Button>
      ) : (
        <Button
          onClick={() => {
            setConfiguration(fieldName);
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
  );
};

export default ConfigBarMain;
