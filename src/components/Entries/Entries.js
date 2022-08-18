import { useState } from "react";
import ConfirmModal from "../UI/ConfirmModal";
import classes from "./Entries.module.css";
import Entry from "./Entry";

const DUMMY_DATA = [
  { id: "e1", title: "Countdown" },
  { id: "e2", title: "anniversary" },
];

const Entries = () => {
  const [showModal, setShowModal] = useState(false);

  const onDeleteHandler = () => {
    setShowModal(true);
  };

  const onEditHandler = () => {
    // navigate to edit entry page
    setShowModal(false);
  };

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
        <Entry title={entry.title} onDelete={onDeleteHandler} onEdit={onEditHandler} />
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
        <ConfirmModal confirm={onConfirmHandler} cancel={onCancelHandler} />
      )}
      {content}
      <button className={`${classes.card} ${classes.add}`}>+ Entry</button>
    </>
  );
};

export default Entries;
