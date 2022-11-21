import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ConfirmModal from "../UI/ConfirmModal";
import classes from "./Entry.module.css";

import editIcon from "../../icons/pencilIcon.svg"
import deleteIcon from "../../icons/deleteIcon.svg";
import RegStatusContext from "../../store/regStatus-context";

// how each entry should be rendered (mapped here)
const Entry = (props) => {
  const [showModal, setShowModal] = useState(false);
  const statusCtx = useContext(RegStatusContext);

  const navigate = useNavigate();

  // deletes the entry
  const removeEntryHandler = (currentEntry) => {
    fetch("http://localhost:9003/delete", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        id: currentEntry,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setShowModal(false);
        props.refresh();
        if (res.status !== 200) {
          statusCtx.statusHandler(true, res.status, res.statusText);
        }
      })
      .catch((err) => {
        statusCtx.reset();
        navigate("error");
      });
  };

  const onDeleteHandler = () => {
    setShowModal(true);
  };

  const onCancelHandler = () => {
    setShowModal(false);
  };

  const onEditHandler = () => {
    // navigate to edit entry page
    navigate(`/entries/edit/${props.id}`);
  };

  return (
    <>
      {showModal && (
        <ConfirmModal
          entry={props.id}
          cancel={onCancelHandler}
          confirm={removeEntryHandler}
        />
      )}
      <div className={classes.card} data-testid='entry-wrapper'>
        <img
          className={classes.icon}
          src={editIcon}
          alt="Pencil edit icon"
          onClick={onEditHandler}
        />
        <Link className={classes.title} to={`/entries/${props.id}`}>
          <p>{props.title}</p>
        </Link>

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
