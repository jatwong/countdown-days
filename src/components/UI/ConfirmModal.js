import Button from "./Button";
import classes from "./ConfirmModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ConfirmModal = (props) => {
  const deleteCurrent = () => {
    props.confirm(props.entry);
  };

  return (
    <>
      <Backdrop onClick={props.cancel} />
      <div className={classes.modal}>
        <p>Are you sure you want to delete this entry?</p>
        <Button onClick={deleteCurrent}>YES</Button>
        <Button onClick={props.cancel}>NO</Button>
      </div>
    </>
  );
};

export default ConfirmModal;
