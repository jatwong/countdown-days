import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ConfirmModal from "../../UI/ConfirmModal";
import classes from "./Entry.module.css";

import editIcon from "../../../icons/pencilIcon.svg";
import deleteIcon from "../../../icons/deleteIcon.svg";
import EntriesContext from "../../../store/entries-context";

const Entry = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const entriesCtx = useContext(EntriesContext);

  const onViewHandler = () => {
    // navigate to view entry with id
    navigate("/view-entry");
  };

  const onDeleteHandler = () => {
    setShowModal(true);
  };

  const onCancelHandler = () => {
    setShowModal(false);
  };

  const onEditHandler = () => {
    // navigate to edit entry page
    navigate("/edit-entry", { state: entriesCtx.entriesList.id });
    console.log("Editing...");
    console.log(entriesCtx.entriesList.id);
  };

  return (
    <>
      {showModal && (
        <ConfirmModal entryId={props.id} cancel={onCancelHandler} />
      )}
      <div className={classes.card}>
        <img
          className={classes.icon}
          src={editIcon}
          alt="Pencil edit icon"
          onClick={onEditHandler}
        />
        <p className={classes.title} onClick={onViewHandler}>
          {props.title}
        </p>
        <img
          className={classes.icon}
          src={deleteIcon}
          alt="Delete entry icon"
          onClick={onDeleteHandler}
        />
      </div>
    </>
  );
};

export default Entry;
