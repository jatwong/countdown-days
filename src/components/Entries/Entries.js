import classes from "./Entries.module.css";
import Entry from "./Entry";

const DUMMY_DATA = [
  { id: "e1", title: "Countdown" },
  { id: "e2", title: "anniversary" },
];

let content;
if (DUMMY_DATA.length === 0) {
  content = <p><i>You have no entries.</i></p>;
} else {
  content = (
    <ul>
      {DUMMY_DATA.map((entry) => (
        <Entry title={entry.title} />
      ))}
    </ul>
  );
}

const Entries = () => {
  return (
    <>
      {content}
      <button className={`${classes.card} ${classes.add}`}>+ Entry</button>
    </>
  );
};

export default Entries;
