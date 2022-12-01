import { useNavigate, useParams } from "react-router-dom";

import classes from "./ViewEntry.module.css";

import Button from "../UI/Button";
import { useContext } from "react";
import EntriesContext from "../../store/entries-context";
import getDaysLeft from "../../utils/getDaysLeft"

const ViewEntry = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/entries");
  };
  const entriesCtx = useContext(EntriesContext);

  let entries = entriesCtx.entries;
  const { entryId } = useParams();

  let match;
  let stringDate;
  let daysLeftString;

  if (entries) {
    match = entriesCtx.entriesMap[parseInt(entryId)];
    if (match) {
      ({ stringDate, daysLeftString } = getDaysLeft(match.date));
    }
  }

  let content = (
    <>
      <h1> Nothing to see here </h1>
    </>
  );
  if (match) {
    content = (
      <>
        <div className={classes.center}>
          <h1 className={classes.h1}>{match.title}</h1>
          <h2 className={classes.h2}>{stringDate}</h2>
        </div>
        <div className={classes.center}>
          <h3>{daysLeftString}</h3>
        </div>
        <Button onClick={goBackHandler}>BACK</Button>
      </>
    );
  }
  return content;
};

export default ViewEntry;
