import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  box: {
    boxSizing: "border-box",
    p: 2,
    border: "1px solid grey",
    borderRadius: "2px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    display: "none",
    flexDirection: "column",
    width: "fit-content",
    height: "80px",
    padding: "2px",
  },
});

const ConfigBar = ({ show, setShow, fieldName, setConfig, configuration }) => {
  return (
    <Box
      component="span"
      className={useStyles().box}
      sx={{ display: show[fieldName] ? "flex" : "none" }}
    >
      <Button
        onClick={() => {
          setConfig(
            configuration.map((fields) =>
              fields.fieldName === fieldName
                ? { title: fields.title, fieldName: fieldName, showing: false }
                : fields
            )
          );
          setShow({
            ...show,
            [fieldName]: !show[fieldName],
          });
        }}
      >
        Hide
      </Button>
      <Button
        onClick={() => {
          setConfig(
            configuration.map((fields) =>
              fields.fieldName === fieldName
                ? { title: fields.title, fieldName: fieldName, showing: true }
                : fields
            )
          );
          setShow({
            ...show,
            [fieldName]: !show[fieldName],
          });
        }}
      >
        {" "}
        Show
      </Button>
    </Box>
  );
};

export default ConfigBar;
