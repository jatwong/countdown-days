import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../UI/Logo";
import Input from "./Input/Input";
import Spinner from "../UI/Spinner";
import useInput from "../hooks/use-input";

import classes from "../Forms/Forms.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import RegStatusContext from "../../store/regStatus-context";

const ResetPassForm = () => {
  const userServiceUrl = process.env.REACT_APP_USER_SERVICE;

  // state for form submission
  const [submitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unableReset, setUnableReset] = useState(false);
  const navigate = useNavigate();

  const statCtx = useContext(RegStatusContext);

  // query use -- email & token
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const email = queryParams.get("email");
  const token = queryParams.get("token");

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

    setIsLoading(true);

    fetch(
      `${userServiceUrl}/change-password?email=${email}&token=${token}`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email: email,
          password: enteredPassword,
          token: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("200");
          return res.json().then((data) => {
            console.log(data);
            if (data.ok) { // Status 200 and json ok == true
              setTimeout(() => {
                setIsLoading(false);
                setIsSubmitted(true);
              }, 500);
              setTimeout(() => {
                navigate("/login");
              }, 3000);
            } else { // Status 200 but json ok == false
              setTimeout(() => {
                console.log("this3")
                setIsLoading(false);
                setIsSubmitted(false);
                setUnableReset(true);
              }, 500);
            }
          });
        } else { // Status not 200 (so e.g. 400 or 500)
          console.log("this1")
          setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(false);
            statCtx.statusHandler(true, res.status, res.statusText);
            navigate("/error");
          }, 3000);
        }
      })
      .catch(() => { // Server unreachable
        console.log("this2")
        setTimeout(() => {
          setIsLoading(false);
          setIsSubmitted(false);
          statCtx.reset();
          navigate("/error");
        }, 500);
      });
  };

  return (
    <>
      <Logo />
      <h2>Reset your password</h2>
      {unableReset && <p className={classes.error}>Unable to reset password.</p>}
      {!submitted && (
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div>
            <Input
              for="email"
              label="Email"
              type="email"
              id="email"
              value={email}
              read={true}
            />
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

          {isLoading && (
            <div className="spin">
              <Spinner />
            </div>
          )}

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

export default ResetPassForm;
