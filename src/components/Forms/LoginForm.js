import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";

import Logo from "../UI/Logo";
import Input from "../Input/Input";
import Button from "../UI/Button";

import classes from "./Forms.module.css";
// import { useState } from "react";

const LoginForm = () => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const emailClasses = emailHasError ? classes.invalid : "";

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 8);

  const passwordClasses = passwordHasError ? classes.invalid : "";

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Logging in...");
  };

  return (
    <>
      <Logo />
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={emailClasses}>
          <Input
            for="email"
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p className={classes.error}>Invalid email.</p>}
        </div>
        <div className={passwordClasses}>
          <Input
            for="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            minlength="8"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && <p className={classes.error}>Invalid password.</p>}
        </div>
        <Button valid={!formIsValid}>LOGIN</Button>
      </form>

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
