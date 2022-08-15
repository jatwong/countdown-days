import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "./Forms/Input/Input";
import Button from "./UI/Button";
import Logo from "./UI/Logo";

import classes from "./Forms/Forms.module.css";
import useInput from "./hooks/use-input";

const ForgotPass = () => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));
  const [confirm, setConfirm] = useState(false);

  const emailClasses = emailHasError ? classes.invalid : "";

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setConfirm(true);
  };

  return (
    <>
      <Logo />
      <h2>Forgot your password?</h2>
      {!confirm && (
        <>
          <div>
            <p className={classes.instruct}>
              Enter the email associated with your account. We will email you
              the link to reset your password.
            </p>
          </div>
          <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={emailClasses}>
              <Input
                for="email"
                label="Email"
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={enteredEmail}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
              />
            </div>
            {emailHasError && (
              <p className={classes.error}>Please enter a valid email.</p>
            )}
            <Button valid={!emailIsValid}>SEND</Button>
          </form>
        </>
      )}

      {confirm && (
        <div className="div">
          <p className={classes.instruct}>
            We've sent you an email with the link to reset your password.
          </p>
          <Link to="/login">Click here to go back to the login screen.</Link>{" "}
          {/* or redirect after submission with delay? */}
        </div>
      )}
    </>
  );
};

export default ForgotPass;
