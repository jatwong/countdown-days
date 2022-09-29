import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import ForgotPass from "./components/ForgotPass";
import Entries from "./components/Entries/Entries";
import AddEntry from "./components/Entries/AddEntry";
import ViewEntry from "./components/Entries/ViewEntry";
import EditEntry from "./components/Entries/EditEntry";
import ResetPass from "./components/Forms/ResetPass";
import ErrorPage from "./components/ErrorPage";
import Verify from "./components/Verify";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="page">
        <Routes>
          <Route path="/" replace element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/view-entry" element={<ViewEntry />} />
          <Route path="/edit-entry" element={<EditEntry />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/verification" element={<Verify />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
