import { TreeItem } from "@mui/lab";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

const Row = ({ user, Users, updateUser, addChild, checked, setChecked }) => {
  const useStyles = makeStyles({
    button: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      padding: "0 30px",
      margin: 8,
      height: "30px",
    },

    Tree: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "5px",
      overflow: "hidden",
    },

    Row: {
      display: "grid",
      gridTemplateColumns: "repeat(9, 1fr)",
      columnGap: "5px",
      rowGap: "5px",
      margin: "15px",
    },
  });
  const item = user;
  const classes = useStyles();
  const handleChange = (event, user) => {
    if (event.target.checked === false) {
      setChecked(checked.filter((item) => item.id !== user.id));
    } else {
      setChecked([...checked, user]);
    }
  };

  return (
    <TreeItem
      nodeId={`${item.id}`}
      label={
        <Fragment>
          <div className={classes.Row}>
            <div> {item.id} </div>
            <div> {item.fullName} </div>
            <div> {item.position} </div>
            <div> {item.salary} </div>
            <div> {item.date} </div>
            <div> {item.type} </div>
            <div>
              <Checkbox onChange={(event) => handleChange(event, item)} />
            </div>
            <div>
              {" "}
              <Button
                variant="contained"
                className={classes.button}
                type="button"
                onClick={() => updateUser(item.id)}
              >
                {" "}
                Update{" "}
              </Button>{" "}
            </div>
            <div>
              {" "}
              <Button
                variant="contained"
                className={classes.button}
                type="button"
                onClick={() => addChild(item.id)}
              >
                {" "}
                Child{" "}
              </Button>{" "}
            </div>
          </div>
        </Fragment>
      }
    >
      {Users.filter((child) => child.parentId === item.id).map((child) => (
        <Row
          user={child}
          Users={Users}
          updateUser={updateUser}
          addChild={addChild}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </TreeItem>
  );
};

export default Row;
