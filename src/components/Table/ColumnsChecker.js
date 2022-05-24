import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ColumnsChecker = ({ configuration, setConfiguration }) => {
  return (
    <FormGroup>
      {configuration.map((field) => (
        <FormControlLabel
          key={field.fieldName}
          control={
            field.fieldName === "id" ? (
              <Switch disabled defaultChecked />
            ) : (
              <Switch
                checked={field.showing === true}
                onChange={() => setConfiguration(field.fieldName)}
              />
            )
          }
          label={field.title}
        />
      ))}
    </FormGroup>
  );
};

export default ColumnsChecker;
