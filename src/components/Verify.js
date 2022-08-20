import Logo from "./UI/Logo";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <>
      <Logo />
      <h2>Almost there!</h2>
      <h3>Verify your email to finish your registration</h3>
      <div>
        <p>
          An email has been sent to name@email.com with a link to verify your
          account. If you have not received an email, please check your spam
          folder or click the button below.
        </p>
      </div>

      <Button>RESEND VERIFICATION</Button>
      <div>
        <Link to="/login">Back to Login</Link>
      </div>
    </>
  );
};

export default Verify;
