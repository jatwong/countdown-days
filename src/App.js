import { Route, Routes } from "react-router-dom";

// import Home from "./components/Home";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import ForgotPass from "./components/ForgotPass";
import Entries from "./components/Entries/Entries";
import AddEntry from "./components/Entries/AddEntry";
import ViewEntry from "./components/Entries/ViewEntry";
import EditEntry from "./components/Entries/EditEntry";
import EntriesProvider from "./store/EntriesProvider";
import ResetPass from "./components/Forms/ResetPass";

function App() {
  return (
    <EntriesProvider>
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
        </Routes>
      </div>
    </EntriesProvider>
  );
}

export default App;
