import { useState } from "react";
import React from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <button data-testid="add" onClick={increment}>
        +
      </button>
      <p data-test-id="display">{counter}</p>
      <button data-testid="minus" onClick={decrement}>
        -
      </button>
    </>
  );
}

export default Counter;
