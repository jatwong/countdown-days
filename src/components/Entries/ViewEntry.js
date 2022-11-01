import { useNavigate, useParams } from "react-router-dom";

import classes from "./ViewEntry.module.css";

import Button from "../UI/Button";
import { useContext } from "react";
import EntriesContext from "../../store/entries-context";

const ViewEntry = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/entries");
  };
  const entriesCtx = useContext(EntriesContext);

  let entries = entriesCtx.entries
  // let entries = [{
  //   id: 2,
  //   title: "Date 1",
  //   date: "2022-10-09T08:00:00.000Z" // PDT == 1AM on the 9th
  // }];
  // if (entriesCtx.entries) {
  //   entries = entriesCtx.entries
  // }

  const { entryId } = useParams();

  let match;
  let stringDate;
  let diffDays;
  let current = new Date();
  let stringTime = "00:00:00";

  if (entries) {
    match = entriesCtx.entriesMap[parseInt(entryId)];
    // for (const entry of entries) {
    //   if (entry.id === parseInt(entryId)) {
    //     match = entry;
    //     break;
    //   }
    // }
    if (match) {
      let date = new Date(match.date);
      stringDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
      
      const diffTime = date - current;
      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays >= 0) {
        // Subtract hours, minutes, seconds
        stringTime = `${23-current.getHours()}:${59-current.getMinutes()}:${59-current.getSeconds()}`;
      } else {
        diffDays = 0;
      }
    }
  }

  let daysLeftString = `${diffDays} days left`
  if (diffDays === 1) {
    daysLeftString = `${diffDays} day left`
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
          {/* <h3>{stringTime}</h3> */}
        </div>
        <Button onClick={goBackHandler}>BACK</Button>
      </>
    );
  }
  return content;
};

export default ViewEntry;
