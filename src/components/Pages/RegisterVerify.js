import { Link } from "react-router-dom";

const RegisterVerify = (props) => {
  return (
    <>
      <h2>Almost there!</h2>
      <h3>Verify your email to finish your registration</h3>
      <div className="div">
        <p>
          An email has been sent to <span className="altText">{props.email}</span> with a link to verify your
          account.
        </p>
      </div>

      {/* include automatic redirect to login page */}
      <div>
        <Link to="/login">Back to Login</Link>
      </div>
    </>
  );
};

export default RegisterVerify;
