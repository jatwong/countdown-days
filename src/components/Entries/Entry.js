import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import ConfirmModal from "../UI/ConfirmModal";
import getDaysLeft from "../../utils/getDaysLeft";
import RegStatusContext from "../../store/regStatus-context";

import classes from "./Entry.module.css";
import trash from "../../icons/trash-2.svg";

// how each entry should be rendered (mapped here)
const Entry = (props) => {
  const navigate = useNavigate();
  const statusCtx = useContext(RegStatusContext);

  const [showModal, setShowModal] = useState(false);

  const clickToEdit = () => {
    navigate(`/entries/edit/${props.id}`);
  };

  // get date as string; calculate days left
  let stringDate, daysLeftString;
  ({ stringDate, daysLeftString } = getDaysLeft(props.date));

  // deletes the entry
  const removeEntryHandler = (currentEntry) => {
    fetch("http://localhost:9003/delete", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        id: parseInt(currentEntry),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setShowModal(false);
        props.refresh();
        if (res.status !== 204) {
          statusCtx.statusHandler(true, res.status, res.statusText);
        }
      })
      .catch((err) => {
        statusCtx.reset();
        navigate("/error");
      });
  };

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const onCancelHandler = () => {
    setShowModal(false);
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

      <div className={classes.card} onClick={clickToEdit}>
        <div className={classes.content}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.date}>{stringDate}</p>
        </div>
        <p className={classes.days}>{daysLeftString}</p>
        <img
          className={classes.icon}
          src={trash}
          alt="Trash can icon to delete"
          onClick={onDeleteHandler}
        />
      </div>
    </>
  );
};

export default Entry;
