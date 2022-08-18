import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ConfirmModal from "../UI/ConfirmModal";
import Entry from "./Entry";

import classes from "./Entries.module.css";

const DUMMY_DATA = [
  { id: "e1", title: "Countdown" },
  { id: "e2", title: "anniversary" },
];

const Entries = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    setShowModal(true);
  };

  const onEditHandler = () => {
    // navigate to edit entry page
    navigate("/edit-entry");
    console.log("Editing...");
  };

  const onViewHandler = () => {
    // navigate to view entry with id
    navigate("/view-entry");
  }

  let content;
if (DUMMY_DATA.length === 0) {
  content = (
    <p>
      <i>You have no entries.</i>
    </p>
  );
} else {
  content = (
    <ul>
      {DUMMY_DATA.map((entry) => (
        <Entry title={entry.title} onDelete={onDeleteHandler} onEdit={onEditHandler} onView={onViewHandler} />
      ))}
    </ul>
  );
}

  const onConfirmHandler = () => {
    // deletes the entry
    setShowModal(false);
  };

  const onCancelHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ConfirmModal confirm={onConfirmHandler} cancel={onCancelHandler}/>
      )}
      {content}
      <button className={`${classes.card} ${classes.add}`}>+ Entry</button>
    </>
  );
};

export default Entries;
