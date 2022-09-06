import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "./Forms/Input/Input";
import Button from "./UI/Button";
import Logo from "./UI/Logo";

import classes from "./Forms/Forms.module.css";
import useInput from "./hooks/use-input";

const ForgotPass = () => {
  // state for submission of form
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const emailClasses = emailHasError ? classes.invalid : "";

  // when submitting the form, sets the confirm state to true
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setConfirm(true);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <Logo />
      <h2>Forgot your password?</h2>

      {/* while confirm state is false, user still needs to input email */}
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

      {/* confirm state is true and shows confirmation to user */}
      {confirm && (
        <div className="div">
          <p className={classes.instruct}>
            We've sent you an email with the link to reset your password.
          </p>
          <p>
            You will be automatically redirected to the login page or click{" "}
            <Link to="/login">here</Link>.
          </p>
        </div>
      )}
    </>
  );
};

export default ForgotPass;
