import React from "react";
import { Link } from "react-router-dom";

import Logo from "../UI/Logo";
import Input from "../Input/Input";

import classes from "./Forms.module.css";
import Button from "../UI/Button";

const LoginForm = () => {
  return (
    <>
      <Logo />
      <form className={classes.form}>
        <div>
          <Input
            for="email"
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
          <Input
            for="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
      </form>
      <Button>LOGIN</Button>

      <div className="div">
        <Link to="/forgot-password">Forgot password?</Link>
        <div>
          <Link to="/signup">Need an account? Sign up!</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
