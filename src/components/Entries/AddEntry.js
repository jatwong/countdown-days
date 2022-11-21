import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";

import Input from "../Forms/Input/Input";
import Button from "../UI/Button";
import classes from "./EntryOptions.module.css";

const AddEntry = (props) => {
  const navigate = useNavigate();
  const todayDate = new Date();
  console.log(todayDate);

  const {
    value: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    isValid: titleIsValid,
  } = useInput((value) => value.trim("") !== "");

  const {
    value: enteredDate,
    valueChangeHandler: dateChangeHandler,
    isValid: dateIsValid,
  } = useInput((value) => value.trim("") !== "");

  let formIsValid = false;
  if (titleIsValid && dateIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newDate = new Date(enteredDate);
    // apply correct timezone to date object
    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());

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
          max="25"
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
            min={todayDate}
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" valid={!formIsValid}>Add Entry</Button>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddEntry;
