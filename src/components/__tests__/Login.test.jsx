import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../Login";

test("calls onLogin with email and password when submitted", () => {
  const mockLogin = jest.fn();

  const { getByTestId } = render(<Login onLogin={mockLogin} />);

  fireEvent.change(getByTestId("email-input"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(getByTestId("password-input"), {
    target: { value: "secret123" },
  });

  fireEvent.click(getByTestId("login-button"));

  expect(mockLogin).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "secret123",
  });
});
