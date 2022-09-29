import Logo from "../../UI/Logo";
import Input from "./Input/Input";
import Button from "../../UI/Button";

import classes from "./Forms.module.css";
import useInput from "../../hooks/use-input";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Verify from "../Verify";
import StatusContext from "../../../store/status-context";

const SignUpForm = () => {
  const statCtx = useContext(StatusContext);
  const navigate = useNavigate();

  // state for checkbox
  const [checked, setIsChecked] = useState(false);

  // state for submission of form
  const [submitted, setIsSubmitted] = useState(false);

  // toggles the status for checkbox
  const onCheckHandler = () => {
    setIsChecked(!checked);
  };

  // data with alias names from custom input hook
  // data for Name
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim("") !== "");

  const nameClasses = nameHasError ? classes.invalid : "";

  // data for Email
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const emailClasses = emailHasError ? classes.invalid : "";

  // data for Password
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 8);

  const passwordClasses = passwordHasError ? classes.invalid : "";

  // data for Confirm Password
  const {
    value: confirmedPassword,
    isValid: confirmedPassIsValid,
    hasError: confirmedPassHasError,
    valueChangeHandler: confirmedPassChangeHandler,
    inputBlurHandler: confirmedPassBlurHandler,
  } = useInput((value) => value.trim("") !== "" && value === enteredPassword);

  const confirmPassClasses = confirmedPassHasError ? classes.invalid : "";

  // conditionally set error messages
  let errorMsg = (
    <p className={classes.error}>Please re-enter your password.</p>
  );

  if (confirmedPassword !== enteredPassword) {
    errorMsg = <p className={classes.error}>Passwords do not match.</p>;
  }

  // checks that the form is valid
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

  // when submitting the form
  // post name, email, password to database
  // and catch any errors/show relevant error message/page
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitting form...");

    fetch("http://localhost:9002/register", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          statCtx.statusCode(res.status, res.statusText);
          setIsSubmitted(true);
          return res.json();
        } else {
          statCtx.errorPage();
          statCtx.statusCode(res.status, res.statusText);
          navigate("/error");
        }
      })
      .catch((err) => {
        navigate("/error");
      });

    // .then((res) => {
    //   if (res.status === 200) {
    //     return res.json();
    //   } else {
    //     // let message = "";
    //     // if res.status === 400 {
    //     //   message = "400 Bad Request"
    //     // }
    //     throw new Error(`${res.status} ${res.statusText}`);
    //   }
    // } else if (res.status === 404) {
    //   // TODO: Redirect 404 Not found page
    //   navigate("/error");
    // } else if (res.status === 400) {
    //   // TODO: 404 bad request, maybe show a notification at lower left?
    //   // Or to keep it simple, alert?
    //   // This is nice-to-have but not required.
    //   // DO NOTHING (for now)
    // } else {
    //   // E.g. 500, 503, 5XX, and other 4XX
    //   // It will be in the network tab
    //   // DO NOTHING (for now)
    // }
    // })
    // .then((resBody) => {
    //   // On a 200 OK, get back the JSON
    //   if (resBody.ok) {
    //     navigate("/verify?email=" + enteredEmail);
    //   } else {
    //     throw new Error(`${resBody.message}`);
    //   }
    // })
    // .catch((err) => {
    //   // Note: This means that it could not reach (any) server
    //   // to respond to the fetch (request)
    //   console.log(err);
    //   navigate("/error?message=" + err);
    // });

    // setIsSubmitted(true);
  };

  return (
    <>
      <Logo />

      {/* when the form is not submitted, inputs are rendered */}
      {!submitted && (
        <>
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
                minlength="8"
                placeholder="Enter your password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && (
                <p className={classes.error}>
                  Invalid password. Password must have a minimum of 8
                  characters.
                </p>
              )}
            </div>
            <div className={confirmPassClasses}>
              <Input
                for="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                minlength="8"
                placeholder="Enter your password again"
                value={confirmedPassword}
                onChange={confirmedPassChangeHandler}
                onBlur={confirmedPassBlurHandler}
              />
              {confirmedPassHasError && errorMsg}
            </div>

            <div className={classes["alt-div"]}>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                onChange={onCheckHandler}
              />
              <label htmlFor="agree">
                I agree to the{" "}
                <a href="http://localhost:3000/todo">terms &amp; conditions</a>{" "}
                and the <a href="http://localhost:3000/todo">privacy policy</a>
              </label>
            </div>

            <Button valid={!formIsValid}>SUBMIT</Button>
          </form>
          <div>
            <Link to="/login">Already a member? Login!</Link>
          </div>
        </>
      )}

      {/* when user submits form, show verification page */}
      {submitted && <Verify email={enteredEmail} />}
    </>
  );
};

export default SignUpForm;
