import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Entry from "./Entry";

import classes from "./Entries.module.css";

const DUMMY_DATA = [
  { id: 0, title: "Justina B-day", date: new Date(2022, 10, 11, 10) },
  { id: 1, title: "Robin B-day", date: new Date(2022, 11, 26, 10) },
  { id: 2, title: "Anniversary", date: new Date(2023, 7, 3) },
];

const Entries = () => {
  const [entriesList, setEntriesList] = useState(DUMMY_DATA);
  const navigate = useNavigate();

  const onAddHandler = () => {
    navigate("/add-entry");
  };

  const onConfirmHandler = (entryId) => {
    // deletes the entry
    console.log(entryId);
    setEntriesList((prevEntriesList) => {
      const updatedEntries = prevEntriesList.filter(
        (entry) => entry.id !== entryId
      );
      return updatedEntries;
    });
  };

  let content;
  if (entriesList.length === 0) {
    content = (
      <p>
        <i>You have no entries.</i>
      </p>
    );
  } else {
    content = (
      <ul>
        {entriesList.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            onConfirm={onConfirmHandler}
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
