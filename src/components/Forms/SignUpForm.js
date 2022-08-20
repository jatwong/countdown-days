import Logo from "../UI/Logo";
import Input from "./Input/Input";
import Button from "../UI/Button";

import classes from "./Forms.module.css";
import useInput from "../hooks/use-input";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [checked, setIsChecked] = useState(false);

  const onCheckHandler = () => {
    setIsChecked(!checked);
  };

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim("") !== "");

  const nameClasses = nameHasError ? classes.invalid : "";

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

  const {
    value: confirmedPassword,
    isValid: confirmedPassIsValid,
    hasError: confirmedPassHasError,
    valueChangeHandler: confirmedPassChangeHandler,
    inputBlurHandler: confirmedPassBlurHandler,
  } = useInput((value) => value.trim("") !== "" && value === enteredPassword);

  const confirmPassClasses = confirmedPassHasError ? classes.invalid : "";

  let errorMsg = (
    <p className={classes.error}>Please re-enter your password.</p>
  );

  if (confirmedPassword !== enteredPassword) {
    errorMsg = <p className={classes.error}>Passwords do not match.</p>;
  }

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmedPassIsValid &&
    checked
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitting form...");
  };

  return (
    <>
      <Logo />
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={nameClasses}>
          <Input
            for="name"
            label="Name"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className={classes.error}>Please enter your name.</p>
          )}
        </div>
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
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={classes.error}>
              Invalid password. Password must have a minimum of 8 characters.
            </p>
          )}
        </div>
        <div className={confirmPassClasses}>
          <Input
            for="confirm-password"
            label="Confirm Password"
            type="password"
            id="confirm-password"
            placeholder="Enter your password again"
            value={confirmedPassword}
            onChange={confirmedPassChangeHandler}
            onBlur={confirmedPassBlurHandler}
          />
          {confirmedPassHasError && errorMsg}
          {/* {confirmedPassHasError && <p className={classes.error}>Please enter your password again.</p>} */}
        </div>

        <div className={classes["alt-div"]}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={onCheckHandler}
          />
          <label htmlFor="agree">
            I agree to the <a href="">terms &amp; conditions</a> and the{" "}
            <a href="">privacy policy</a>
          </label>
        </div>

        <Button valid={!formIsValid}>SUBMIT</Button>
      </form>
      <div>
        <Link to="/login">Already a member? Login!</Link>
      </div>
    </>
  );
};

export default SignUpForm;
