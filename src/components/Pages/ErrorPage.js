import { useContext } from "react";
import StatusContext from "../../store/status-context";
import Logo from "../UI/Logo";

const ErrorPage = () => {
  const statCtx = useContext(StatusContext);

  return (
    <>
      <Logo />
    {/* default error page */}
      {!statCtx.errorPageState && (
        <div className="div">
          <h1>Uh oh!</h1>
          <p>Something went wrong!</p>
        </div>
      )}
      
      {/* error page with code */}
      {statCtx.errorPageState && (
        <h1>
          {statCtx.code} {statCtx.codeMsg}
        </h1>
      )}
    </>
  );
};

export default ErrorPage;
