import React, { useState } from "react";

const StatusContext = React.createContext({
  statusCode: (code, msg) => {},
  errorPage: (hasStatus) => {},
  errorPageState: false,
  codeMsg: "",
  code: 0,
});

export const StatusContextProvider = (props) => {
  // set error page instead of default error page
  const [errorCode, setErrorCode] = useState(false);
  const errorPageHandler = (hasStatus) => {
    setErrorCode(hasStatus);
  };

  // store status code
  const [code, setCode] = useState(0);
  const [codeMsg, setCodeMsg] = useState("");
  const statusHandler = (code, msg) => {
    setCode(code);
    setCodeMsg(msg);
  };

  const statusContext = {
    statusCode: statusHandler,
    errorPage: errorPageHandler,
    errorPageState: errorCode,
    codeMsg: codeMsg,
    code: code,
  };

  return (
    <StatusContext.Provider value={statusContext}>
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
