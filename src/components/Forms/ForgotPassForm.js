import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "./Input/Input";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import Spinner from "../UI/Spinner";

import classes from "./Forms.module.css";
import useInput from "../hooks/use-input";
import { useContext } from "react";
import RegStatusContext from "../../store/regStatus-context";

const ForgotPassForm = () => {
  const navigate = useNavigate();
  const statCtx = useContext(RegStatusContext);
  // state for submission of form
  const [confirm, setConfirm] = useState(false);
  const [loading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    fetch("http://localhost:9002/forgot-password", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            setIsLoading(false);
            setConfirm(true);
          }, 1000);
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        } else {
          // when status code is not 200 or error
          setTimeout(() => {
            setIsLoading(false);
            statCtx.statusHandler(true, res.status, res.statusText);
            setConfirm(false);
            navigate("/error");
          }, 500);
        }
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
          statCtx.reset();
          navigate("/error");
        }, 500);
      });
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
              Enter the email associated with your account. We will email you a
              link to reset your password.
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

            {loading && (
              <div className="spin">
                <Spinner />
              </div>
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
        </div>
      )}
    </>
  );
};

export default ForgotPassForm;
