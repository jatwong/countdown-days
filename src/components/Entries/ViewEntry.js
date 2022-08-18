import classes from "./ViewEntry.module.css";

const ViewEntry = () => {
  return (
    <>
      <div className={classes.center}>
        <h1 className={classes.h1}>Countdown</h1>
        <h2 className={classes.h2}>07-24-2021</h2>
      </div>
      <div className={classes.center}>
        <h3>0 days</h3>
        <h3>02 : 30 : 11</h3>
      </div>
    </>
  );
};

export default ViewEntry;
