import React, { useState } from "react";

const RegStatusContext = React.createContext({
  statusHandler: (hasStatus, statusCode, statusText) => {},
  reset: () => {},
  hasStatus: false,
  statusCode: 0,
  statusText: "",
});

export const RegStatusContextProvider = (props) => {
  // store status code
  const [status, setStatus] = useState({
    hasStatus: false,
    statusCode: 0,
    statusText: "",
  });

  const statusHandler = (hasStatus, statusCode, statusText) => {
    setStatus({ hasStatus, statusCode, statusText });
  };

  const statusReset = () => {
    setStatus({ hasStatus: false, statusCode: 0, statusText: "" });
  };

  const regStatusContext = {
    statusHandler: statusHandler,
    reset: statusReset,
    hasStatus: status.hasStatus,
    statusCode: status.statusCode,
    statusText: status.statusText,
  };

  return (
    <RegStatusContext.Provider value={regStatusContext}>
      {props.children}
    </RegStatusContext.Provider>
  );
};

export default RegStatusContext;
