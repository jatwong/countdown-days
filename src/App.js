import { Route, Routes } from "react-router-dom";

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
