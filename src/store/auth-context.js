import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // retrieve and store token
  const [token, setToken] = useState(null);

  // login handler receives token from BE
  const loginHandler = () => {};

  // logout handler removes token etc.
  const logoutHandler = () => {};

  const authContext = {
    token: token,
    isLoggedIn: false,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
