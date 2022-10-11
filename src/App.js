import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./store/auth-context";

import LoginForm from "./components/Pages/Forms/LoginForm";
import SignUpForm from "./components/Pages/Forms/SignUpForm";
import ForgotPass from "./components/Pages/ForgotPass";
import Entries from "./components/Pages/Entries/Entries";
import AddEntry from "./components/Pages/Entries/AddEntry";
import ViewEntry from "./components/Pages/Entries/ViewEntry";
import EditEntry from "./components/Pages/Entries/EditEntry";
import ResetPass from "./components/Pages/Forms/ResetPass";
import ErrorPage from "./components/Pages/ErrorPage";
import Verify from "./components/Pages/Verify";
import { Fragment, useContext } from "react";
import Confirmation from "./components/Pages/Confirmation";
import Header from "./components/UI/Header";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {authCtx.isLoggedIn && <Header />}
      <div className="page">
        <Routes>
          <Route
            path="/"
            replace
            element={
              !authCtx.isLoggedIn ? (
                <Navigate replace to={"/login"} />
              ) : (
                <Navigate replace to={"/entries"} />
              )
            }
          />
          <Route
            path="/login"
            element={
              !authCtx.isLoggedIn ? (
                <LoginForm />
              ) : (
                <Navigate replace to={"/entries"} />
              )
            }
          />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/entries"
            element={
              authCtx.isLoggedIn ? (
                <Entries />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/entries/:entryId" element={<ViewEntry />} />
          <Route path="/entries/edit/:entryId" element={<EditEntry />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/verification" element={<Verify />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
