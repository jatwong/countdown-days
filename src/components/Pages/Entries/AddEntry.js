import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/use-input";

import Input from "../Forms/Input/Input";
import Button from "../../UI/Button";
import classes from "./EntryOptions.module.css";

const AddEntry = (props) => {
  const todayDate = new Date();

  const navigate = useNavigate();
  const { entryId } = useParams();

  const { value: enteredTitle, valueChangeHandler: titleChangeHandler } =
    useInput((value) => value.trim("") !== "");

  const { value: enteredDate, valueChangeHandler: dateChangeHandler } =
    useInput((value) => value.trim("") !== "");


  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newDate = new Date(enteredDate);
    // apply correct timezone to date object
    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset())

    fetch("http://localhost:9003/create", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: enteredTitle,
        date: newDate.toJSON(),
      }),
    });

    navigate("/entries", { replace: true });
  };

  const onCancelHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <form className={classes["add-entry"]} onSubmit={onSubmitHandler}>
        <Input
          className={classes.title}
          for="title"
          max="16"
          min="1"
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
            // min=
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
