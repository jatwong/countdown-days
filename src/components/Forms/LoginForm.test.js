import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "./LoginForm";

describe("Login page", () => {
  let emailInput;
  let passwordInput;
  let submitBtn;

  // helper function to render component & get elements
  const setup = () => {
    render(<LoginForm/>, { wrapper: BrowserRouter });
    emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    passwordInput = screen.getByLabelText(/password/i);
    submitBtn = screen.getByRole("button"); 
  };

  it("renders email & password inputs", () => {
    setup();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders error message for invalid inputs", () => {
    setup();
  });

  it("renders submit button enabled only for correct inputs", async () => {
    setup();
    expect(submitBtn).toHaveAttribute("disabled");
    await userEvent.type(emailInput, "test@test.com");
    expect(submitBtn).toHaveAttribute("disabled");
    await userEvent.type(passwordInput, "hello123");
    expect(submitBtn).not.toHaveAttribute("disabled");
  });
});
