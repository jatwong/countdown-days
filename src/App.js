import { Route, Routes } from "react-router-dom";

// import Home from "./components/Home";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import Verify from "./components/Verify";
import ForgotPass from "./components/ForgotPass";
import Entries from "./components/Entries/Entries";
import AddEntry from "./components/Entries/AddEntry";
import ViewEntry from "./components/Entries/ViewEntry";
import EditEntry from "./components/Entries/EditEntry";
import EntriesProvider from "./store/EntriesProvider";

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
        </Routes>
      </div>
    </EntriesProvider>
  );
}

export default App;
