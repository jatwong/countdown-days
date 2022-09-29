import React, { useState } from "react";

const EntriesContext = React.createContext({
  entriesList: [],
  addNewEntry: (newEntry) => {},
  removeEntry: (id) => {},
//   editEntry: (id) => {},
});

const DUMMY_DATA = [
  { id: 0, title: "Justina B-day", date: new Date(2022, 10, 11, 10) },
  { id: 1, title: "Robin B-day", date: new Date(2022, 11, 26, 10) },
  { id: 2, title: "Anniversary", date: new Date(2023, 7, 3) },
];

export const EntriesProvider = (props) => {
  const [entriesList, setEntriesList] = useState(DUMMY_DATA);

  const addNewEntryHandler = (newEntry) => {
    // push to entries list
    setEntriesList((prevEntriesList) => {
      return [newEntry, ...prevEntriesList];
    });
    console.log(entriesList);
  };

  const removeEntryHandler = (entryId) => {
    // deletes the entry
    console.log(entryId);
    setEntriesList((prevEntriesList) => {
      const updatedEntries = prevEntriesList.filter(
        (entry) => entry.id !== entryId
      );
      return updatedEntries;
    });
  };

//   const editEntryHandler = () => {};

  const entriesContext = {
    entriesList,
    addNewEntry: addNewEntryHandler,
    removeEntry: removeEntryHandler,
    // editEntry: editEntryHandler,
  };

  return (
    <EntriesContext.Provider value={entriesContext}>
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesContext;