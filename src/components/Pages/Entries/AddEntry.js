import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";

import Input from "../../hooks/use-input";
import Button from "../../UI/Button";
import classes from "./EntryOptions.module.css";

const AddEntry = (props) => {
  const navigate = useNavigate();

  const { value: enteredTitle, valueChangeHandler: titleChangeHandler } =
    useInput((value) => value.trim("") !== "");

  const { value: enteredDate, valueChangeHandler: dateChangeHandler } =
    useInput((value) => value.trim("") !== "");

  // async, fetch (to post)
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredTitle, enteredDate);

    fetch("https://react-http-b7eb3-default-rtdb.firebaseio.com/entries", {
      method: "POST",
      body: JSON.stringify({
        id: props.id,
        title: { enteredTitle },
        date: { enteredDate },
      }),
    });

    // entriesCtx.addNewEntry({
    //   id: props.id,
    //   title: {enteredTitle},
    //   date: {enteredDate},
    // })

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
