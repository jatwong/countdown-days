import { useContext } from "react";
import RegStatusContext from "../../store/regStatus-context";
import Logo from "../UI/Logo";

const ErrorPage = () => {
  const statCtx = useContext(RegStatusContext);

  // default error page
  let errPage = (
    <div className="div">
      <h1>Uh oh!</h1>
      <p>Something went wrong!</p>
    </div>
  );
  if (statCtx.hasStatus) {
    // error page with code
    errPage = (
      <h1>
        {statCtx.statusCode} {statCtx.statusText}
      </h1>
    );
  }

  return (
    <>
      <Logo />
      {errPage}
    </>
  );
};

export default ErrorPage;
