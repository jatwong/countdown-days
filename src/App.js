import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import Verify from "./components/Verify";
import ForgotPass from "./components/ForgotPass";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/verification" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
