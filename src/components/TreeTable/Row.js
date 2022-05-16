import { TreeItem } from "@mui/lab";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import Checkbox from "@mui/material/Checkbox";

const Row = ({
  user,
  Users,
  updateUser,
  addChild,
  classes,
  checked,
  setChecked,
}) => {
  const item = user;
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
          classes={classes}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </TreeItem>
  );
};

export default Row;
