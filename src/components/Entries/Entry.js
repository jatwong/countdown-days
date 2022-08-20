import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ConfirmModal from "../UI/ConfirmModal";
import classes from "./Entry.module.css";

import editIcon from "../../icons/pencilIcon.svg";
import deleteIcon from "../../icons/deleteIcon.svg";

const Entry = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onViewHandler = () => {
    // navigate to view entry with id
    navigate("/view-entry");
  };

  const onDeleteHandler = () => {
    setShowModal(true);
  };

  const onYesHandler = () => {
    // passing Id to Entries list
    props.onConfirm(props.id);
  };

  const onCancelHandler = () => {
    setShowModal(false);
  };

  const onEditHandler = () => {
    // navigate to edit entry page
    navigate("/edit-entry");
    console.log("Editing...");
  };

  return (
    <>
      {showModal && (
        <ConfirmModal entryId={props.id} confirm={onYesHandler} cancel={onCancelHandler} />
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
