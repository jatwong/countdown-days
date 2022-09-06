import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import EntriesContext from "../../store/entries-context";
import Input from "../Forms/Input/Input";
import Button from "../UI/Button";

import classes from "./EntryOptions.module.css";

const EditEntry = (props) => {
  const navigate = useNavigate();
  const entriesCtx = useContext(EntriesContext);

  const onSaveHandler = (event) => {
    event.preventDefault();

    console.log(entriesCtx.entriesList.title);
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
          label="Title"
          type="text"
          id="title"
          defaultValue={props.title}
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
            defaultValue={props.date}
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
