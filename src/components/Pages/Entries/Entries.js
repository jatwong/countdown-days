import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Entry from "./Entry";

import classes from "./Entries.module.css";
import EntriesContext from "../../store/entries-context";

const Entries = () => {
  const navigate = useNavigate();
  const entriesCtx = useContext(EntriesContext);

  const onAddHandler = () => {
    navigate("/add-entry");
  };

  let content;
  if (entriesCtx.entriesList.length === 0) {
    content = (
      <p>
        <i>You have no entries.</i>
      </p>
    );
  } else {
    content = (
      <ul>
        {entriesCtx.entriesList.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
          />
        ))}
      </ul>
    );
  }

  return (
    <>
      {content}
      <button
        className={`${classes.card} ${classes.add}`}
        onClick={onAddHandler}
      >
        + Entry
      </button>
    </>
  );
};

export default Entries;
