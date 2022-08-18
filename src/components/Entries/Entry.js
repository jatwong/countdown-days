import classes from "./Entry.module.css";

import editIcon from "../../icons/pencilIcon.svg";
import deleteIcon from "../../icons/deleteIcon.svg";

const Entry = (props) => {
  return (
    <>
      {/* card needs to be clickable */}
      <div className={classes.card}>
        <img
          className={classes.icon}
          src={editIcon}
          alt="Pencil edit icon"
          onClick={props.onClick}
        />
        <p className={classes.title}>{props.title}</p>
        <img
          className={classes.icon}
          src={deleteIcon}
          alt="Delete entry icon"
          onClick={props.onDelete}
        />
      </div>
    </>
  );
};

export default Entry;
