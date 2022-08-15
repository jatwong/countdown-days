import Logo from "../UI/Logo";
import Input from "./Input/Input";
import Button from "../UI/Button";

import classes from "./Forms.module.css";

const SignUpForm = () => {
  return (
    <>
      <Logo />
      <form className={classes.form}>
        <div>
          <Input
            for="name"
            label="Name"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          <Input
            for="email"
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <Input
            for="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <Input
            for="confirm-password"
            label="Confirm Password"
            type="password"
            id="confirm-password"
            placeholder="Enter your password again"
          />
        </div>
        
        <div className={classes["alt-div"]}>
          <input type="checkbox" id="agree" name="agree" />
          <label htmlFor="agree">I agree to the <a href="/">terms &amp; conditions</a> and the <a href="/">privacy policy</a></label>
        </div>

        <Button>SUBMIT</Button>
      </form>
    </>
  );
};

export default SignUpForm;
