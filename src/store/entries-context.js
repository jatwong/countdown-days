import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const EntriesContext = React.createContext({
  entries: null,
  entriesMap: {},
  setEntries: (data) => {},
});

export const EntriesProvider = (props) => {
  const [entries, setEntries] = useState(null);
  const [entriesMap, setEntriesMap] = useState({});

  const setEntriesHandler = (data) => {
    setEntries(data);
    let map = {};
    for (const entry of data) {
      map[entry.id] = entry;
    }
    setEntriesMap(map);
  };

  const entriesContext = {
    entries: entries,
    entriesMap: entriesMap,
    setEntries: setEntriesHandler,
  };

  return (
    <EntriesContext.Provider value={entriesContext}>
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesContext;
