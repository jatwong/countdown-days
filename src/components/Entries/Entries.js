import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Entries.module.css";

import Entry from "./Entry";
import EntriesContext from "../../store/entries-context";
import Spinner from "../UI/Spinner";

const Entries = () => {
  const navigate = useNavigate();
  const entriesCtx = useContext(EntriesContext);

  // get entries from BE
  const getAllEntriesHandler = () => {
    fetch("http://localhost:9003/list", {
      method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          const transformedDates = [];

          for (const entry of data.dates) {
            const entryObj = {
              id: entry.id,
              title: entry.name,
              date: entry.date,
            };

            transformedDates.push(entryObj);
          }
          entriesCtx.setEntries(transformedDates);
        });
      } else {
        navigate("/login", { replace: true });
      }
    });
  };

  useEffect(() => {
    getAllEntriesHandler();
  }, []);

  const onAddHandler = () => {
    navigate("/add-entry");
  };

  let content;
  if (entriesCtx.entries && entriesCtx.entries.length === 0) {
    content = (
      <>
        <p>
          <i>You have no entries.</i>
        </p>
        <button
          className={`${classes.card} ${classes.add}`}
          onClick={onAddHandler}
        >
          + Entry
        </button>
      </>
    );
  } else if (entriesCtx.entries && entriesCtx.entries.length > 0) {
    content = (
      <>
        <ul>
          {entriesCtx.entries.map((entry) => (
            <Entry
              key={entry.id}
              id={entry.id}
              title={entry.title}
              date={entry.date}
            />
          ))}
        </ul>
        <button
          className={`${classes.card} ${classes.add}`}
          onClick={onAddHandler}
        >
          + Entry
        </button>
      </>
    );
  } else {
    content = <Spinner />;
  }

  return <>{content}</>;
};

export default Entries;
