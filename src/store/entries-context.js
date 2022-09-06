import React from "react";

const EntriesContext = React.createContext({
  entriesList: [],
  addNewEntry: (newEntry) => {},
  removeEntry: (id) => {},
//   editEntry: (id) => {},
});

export default EntriesContext;