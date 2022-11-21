import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm component", () => {
  const getEmail = () => {
    const email = screen.getByRole("textbox", {
      name: /email/i,
    });
  };

  const getPassword = () => {
    screen.getByLabelText(/password/i);
  };
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  describe("with valid inputs", () => {
    // render login form

    test("calls the formSubmitHandler", () => {
      userEvent.type(getEmail(), "jwong101197@gmail.com");
      userEvent.type(getPassword(), "hello123");
    });
    
  });
  describe("with invalid email", () => {
    test.todo("renders the email validation error");
  });
  describe("with invalid password", () => {
    test.todo("renders the password validation error");
  });
});
