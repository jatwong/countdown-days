import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import EntriesContext from "../../store/entries-context";
import Input from "../Forms/Input/Input";
import Button from "../UI/Button";

import classes from "./EntryOptions.module.css";

const EditEntry = (props) => {
  const navigate = useNavigate();

  const entriesCtx = useContext(EntriesContext);
  const { entryId } = useParams();

  const entryToUpdate = entriesCtx.entriesMap[parseInt(entryId)];
  const initialTitle = entryToUpdate.title;
  const date = new Date(entryToUpdate.date);

  // getting the 2-digit month & day
  const getMonth2Digits = (date) => {
    const month = date.getMonth() + 1;

    if (month < 10) {
      return "0" + month;
    }
    return month;
  };

  const getDay2Digits = (date) => {
    const day = date.getDate();

    if (day < 10) {
      return "0" + day;
    }
    return day;
  };

  // setting the initial date
  const initialDate = `${date.getFullYear()}-${getMonth2Digits(
    date
  )}-${getDay2Digits(date)}`;

  const [newTitle, setNewTitle] = useState(initialTitle);
  const [newDate, setNewDate] = useState(initialDate);

  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const newDateHandler = (event) => {
    setNewDate(event.target.value);
  };

  let formUpdated = false;
  if (newTitle !== initialTitle || newDate !== initialDate) {
    formUpdated = true;
  }

  const onSaveHandler = (event) => {
    event.preventDefault();

    // apply correct timezone to newDate
    const enteredDate = new Date(newDate);
    enteredDate.setMinutes(
      enteredDate.getMinutes() + enteredDate.getTimezoneOffset()
    );

    fetch("http://localhost:9003/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        id: parseInt(entryId),
        name: newTitle,
        date: enteredDate.toJSON(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        navigate("/entries");
      }
    });
  };

  const onCancelHandler = () => {
    navigate("/entries");
  };

  return (
    <>
      <form className={classes["add-entry"]} onSubmit={onSaveHandler}>
        <Input
          className={classes.title}
          for="title"
          max="25"
          min="1"
          label="Title"
          type="text"
          id="title"
          value={newTitle}
          onChange={newTitleHandler}
        />
        <div className={classes["date-div"]}>
          <Input
            className={classes.date}
            for="date"
            label="Choose a date"
            type="date"
            id="date"
            value={newDate}
            onChange={newDateHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button invalid={!formUpdated}>Save Entry</Button>
        </div>
        <div>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditEntry;
