import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("Sign up form component ", () => {
  it("Allow users to enter name, email & password", () => {
    render(<SignUpForm />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const paswordInput = screen.getByLabelText("Password:");

    fireEvent.change(nameInput, { target: { value: "React" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    expect(nameInput.value).toBe("React");
    expect(emailInput.value).toBe("test@gmail.com");
  });
});
