import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../UI/Logo";
import Input from "./Input/Input";
import useInput from "../../hooks/use-input";

import classes from "../Forms/Forms.module.css";
import Button from "../../UI/Button";

const ResetPass = () => {
  // state for form submission
  const [submitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // data with alias names from custom input hook
  // data for Password
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 8);

  const passwordClasses = passwordHasError ? classes.invalid : "";

  // checks that the form is valid
  let formIsValid = false;
  if (passwordIsValid) {
    formIsValid = true;
  }

  // when submitting the form, sets submit form state to true
  // and updates password for associated account
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <Logo />
      <h2>Reset your password</h2>
      {!submitted && (
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div>
            <Input for="email" label="Email" type="email" id="email" />
          </div>
          <div className={passwordClasses}>
            <Input
              for="password"
              label="Password"
              type="password"
              id="password"
              minlength="8"
              placeholder="Enter new password"
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

          <Button valid={!formIsValid}>RESET</Button>
        </form>
      )}

      {submitted && (
        <div className="div">
          <p className={classes.instruct}>Your password has been reset.</p>
          <p>
            You will be automatically redirected to the login page or click{" "}
            <Link to="/login">here</Link>.
          </p>
        </div>
      )}
    </>
  );
};

export default ResetPass;