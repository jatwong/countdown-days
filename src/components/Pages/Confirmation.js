import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../UI/Logo";
import Spinner from "../UI/Spinner";

const Confirmation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // gets the unique token from URL
  const token = queryParams.get("token");

  // request to BE
  // timeout for spinner to load
  useEffect(() => {
    fetch(`http://localhost:9002/confirm?token=${token}`).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } else {
        setSuccess(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    });
  }, [token]);

  // message to be shown on screen
  let content;
  if (success) {
    content = (
      <>
        <h2>Your email has been confirmed!</h2>
        <div>
          <Link to="/login">Click here to login</Link>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h2>Unable to confirm your email.</h2>
        <div>
          <Link to="/signup">Click here to register again</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Logo />
      {isLoading ? <Spinner /> : content}
    </>
  );
};

export default Confirmation;
