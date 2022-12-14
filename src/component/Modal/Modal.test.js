import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Testing", () => {
  it("Open and Close the Modal when clicked", () => {
    render(<Modal />);

    const openButton = screen.getByText("Open Modal");
    const closeButton = screen.getByText("Close Modal");
    fireEvent.click(openButton);

    const content = screen.getByTestId("data");

    expect(content).toBeVisible();
    fireEvent.click(closeButton);
    expect(content).not.toBeVidible();
  });
});
