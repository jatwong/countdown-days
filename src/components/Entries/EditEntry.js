import Input from "../Forms/Input/Input";
import Button from "../UI/Button";

import classes from "./EntryOptions.module.css";

const EditEntry = () => {
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
        <Button>Save Entry</Button>
      </form>
    </>
  );
};

export default EditEntry;
