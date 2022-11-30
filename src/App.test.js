import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("should redirect to Login", () => {
  render(<App />, { wrapper: BrowserRouter });
  const emailInput = screen.getByLabelText("Email");
  expect(emailInput).toBeInTheDocument();
});
