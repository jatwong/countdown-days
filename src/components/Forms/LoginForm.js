import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import AuthContext from "../../store/auth-context";

import Logo from "../UI/Logo";
import Input from "./Input/Input";
import Button from "../UI/Button";

import classes from "./Forms.module.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(false);

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

    fetch("http://localhost:9002/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res
          .json()
          .then((data) => {
            if (data.ok) {
              authCtx.login();
              navigate("/entries", { replace: true });
            } else {
              setError(true);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <>
      <Logo />
      {error && (
        <p className={classes.error}>Username and/or password is incorrect.</p>
      )}

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
          {passwordHasError && (
            <p className={classes.error}>
              Invalid password. Password must have a minimum of 8 characters.
            </p>
          )}
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
