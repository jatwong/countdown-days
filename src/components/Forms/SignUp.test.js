import React from 'react';
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from "./SignUpForm";

describe("SignUp component", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    
    render(<SignUpForm onSubmit={onSubmit} />, { wrapper: MemoryRouter });
  });

  // helper functions to get inputs
  const getName = () => {
    screen.getByRole("textbox", {
      name: /name/i,
    });
  };
  const getEmail = () => {
    screen.getByRole("textbox", {
      name: /email/i,
    });
  };
  const getPass = () => {
    screen.getByLabelText(/password/i);
  };
  const getPassAgain = () => {
    screen.getByLabelText(/confirm password/i);
  };

  describe("with valid inputs", () => {
    test("calls the submit handler", () => {
      userEvent.type(getName(), "Rob");
      userEvent.type(getEmail(), "jwong101197+2@gmail.com");
      userEvent.type(getPass(), "hello123");
      userEvent.type(getPassAgain(), "hello123");
      userEvent.click(getByRole("checkbox", { checked: true }));
    });
  });

  describe("with invalid name", () => {
    test.todo("renders name validation error");
  });
  describe("with invalid email", () => {
    test.todo("renders email validation error");
  });
  describe("with invalid password", () => {
    test.todo("renders password validation error");
    test.todo("renders password matching error");
  });
});
