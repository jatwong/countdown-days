import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../UI/Button";
import classes from "./EntryOptions.module.css";

const AddEntry = (props) => {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };
  
  const onSubmitHandler = (event) => {
    // pass values to Entries list
    event.preventDefault();

    const newEntry = {
      key: 3,
      id: 3,
      title: enteredTitle,
      date: new Date(enteredDate),
    };
    console.log(newEntry);
    props.addNewEntry(newEntry);
    navigate("/entries");
  };

  const onCancelHandler = () => {
    navigate("/entries");
  };

  return (
    <>
      <form className={classes["add-entry"]} onSubmit={onSubmitHandler}>
        <Input
          className={classes.title}
          for="title"
          label="Title"
          type="text"
          id="title"
          placeholder="Name this countdown"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <div className={classes["date-div"]}>
          <Input
            className={classes.date}
            for="date"
            label="Choose a date"
            type="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit">Add Entry</Button>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddEntry;
