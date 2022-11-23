import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../UI/Logo";
import Spinner from "../UI/Spinner";

const EmailConfirm = () => {
  const userServiceUrl = process.env.REACT_APP_USER_SERVICE;

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // gets the unique token from URL
  const token = queryParams.get("token");

  // request to BE
  useEffect(() => {
    // redirect
    const redirect = (page) => {
      setTimeout(() => {
        navigate(page);
      }, 3000);
    };

    fetch(`${userServiceUrl}/confirm?token=${token}`).then((res) => {
      if (res.status === 200) {
        setSuccess(true);

        // timeout for spinner to load
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        redirect("/login");
      } else {
        setSuccess(false);

        // timeout for spinner to load
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        redirect("/signup");
      }
    });
  }, [token, navigate]);

  // message to be shown on screen
  let content;
  if (success) {
    content = (
      <>
        <h2>Your email has been confirmed!</h2>
        <div>
          <Link to="/login">
            You will be redirected in 3 seconds or click here to login
          </Link>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h2>Unable to confirm your email.</h2>
        <div>
          <Link to="/signup">
            You will be redirected in 3 seconds or click here to register again
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Logo />
      {isLoading ? (
        <div className="spin">
          <Spinner />
        </div>
      ) : (
        content
      )}
    </>
  );
};

export default EmailConfirm;
