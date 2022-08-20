import { useNavigate } from "react-router-dom";

import Input from "../Forms/Input/Input";
import Button from "../UI/Button";

import classes from "./EntryOptions.module.css";

const EditEntry = () => {
  const navigate = useNavigate();
  const onCancelHandler = () => {
    navigate("/entries");
  };

  return (
    <>
      <form className={classes["add-entry"]}>
        <Input
          className={classes.title}
          for="title"
          label="Title"
          type="text"
          id="title"
          placeholder="Name this countdown"
          // value={enteredTitle}
          // onChange={titleChangeHandler}
          // onBlur={titleBlurHandler}
        />
        <div className={classes["date-div"]}>
          <Input
            className={classes.date}
            for="date"
            label="Choose a date"
            type="date"
            id="date"
            // value={enteredTitle}
            // onChange={titleChangeHandler}
            // onBlur={titleBlurHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button>Save Entry</Button>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditEntry;
