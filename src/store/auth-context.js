import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// function to retrieve cookie (token) value only
const getCookie = (name) => {
  const cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return "";
};

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getCookie("jwt"));
  }, []);

  // loginHandler is called upon login
  // Token is set onto the React state
  const loginHandler = () => {
    setToken(getCookie("jwt"));
  };

  // logoutHandler is called upon logout
  // Token is removed from the React state
  const logoutHandler = () => {
    setToken("");
  };

  const authContext = {
    token: token,
    isLoggedIn: token.length > 0,
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
