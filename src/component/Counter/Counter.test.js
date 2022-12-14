import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// it() --> smallest unit for the testing
// test()
// describe() --> integration testing, more than one testing

// describe("Testing the counter component", () => {});

test("Incerase the counter by 1", () => {
  render(<Counter />);
  const counterDisplay = screen.getByTestId("display");
  const incrementButton = screen.getByTestId("add");
  fireEvent.click(incrementButton);
  expect(counterDisplay.textContent).toBe("1");
});

test("Decrease the counter by 1", () => {
  render(<Counter />);
  const counterDisplay = screen.getByTestId("display");
  const decrementButton = screen.getByTestId("minus");
  fireEvent.click(decrementButton);
  expect(counterDisplay.textContent).toBe("-1");
});

// utility function --> require us to do some action

// DDD --> Domain Driven Development
// TDD --> Test Driven Development
