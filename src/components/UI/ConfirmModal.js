import Button from "./Button";
import classes from "./ConfirmModal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ConfirmModal = (props) => {
  return (
    <>
      <Backdrop />
      <div className={classes.modal}>
        <p>Are you sure you want to delete this entry?</p>
        <Button onClick={props.confirm}>YES</Button>
        <Button onClick={props.cancel}>NO</Button>
      </div>
    </>
  );
};

export default ConfirmModal;