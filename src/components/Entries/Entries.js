import classes from "./Entries.module.css;"

const Entries = () => {
    return (
        <>
        <ul>
            {/* map entries from Entry */}
            <button className={`${classes.card} ${classes.add}`} >+ Entry</button>
        </ul>
        </>
    )
};

export default Entries;