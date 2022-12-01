import { useNavigate } from "react-router-dom";

import classes from "./Entry.module.css";
import getDaysLeft from "../../utils/getDaysLeft";
import EditEntry from "./EditEntry";

// how each entry should be rendered (mapped here)
const Entry = (props) => {
  const navigate = useNavigate();
  const clickToEdit = () => {
    navigate(`/entries/edit/${props.id}`);
  };

  // get date as string; calculate days left
  let stringDate, daysLeftString;
  ({ stringDate, daysLeftString } = getDaysLeft(props.date));

  return (
    <>
      <div className={classes.card} onClick={clickToEdit}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.date}>{stringDate}</p>
        <p className={classes.days}>{daysLeftString}</p>
      </div>
    </>
  );
};

export default Entry;
