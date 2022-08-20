import Button from "./Button";
import classes from "./ConfirmModal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ConfirmModal = (props) => {
  const removeEntryHandler = () => {
    // passing back the Id to list
    props.confirm(props.entryId);
  };


  return (
    <>
      <Backdrop />
      <div className={classes.modal}>
        <p>Are you sure you want to delete this entry?</p>
        <Button onClick={removeEntryHandler}>YES</Button>
        <Button onClick={props.cancel}>NO</Button>
      </div>
    </>
  );
};

export default ConfirmModal;
