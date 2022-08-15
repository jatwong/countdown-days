import classes from "./Entry.module.css";

import editIcon from "../../icons/pencilIcon.svg";
import deleteIcon from "../../icons/deleteIcon.svg";

const Entry = (props) => {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.icon} src={editIcon} alt="Pencil edit icon" />
        <p className={classes.title}>Countdown</p>
        <img className={classes.icon} src={deleteIcon} alt="Delete entry icon" />
      </div>
    </>
  );
};

export default Entry;