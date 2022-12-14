import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setisOpen] = useState(false);

  console.log(isOpen);

  //   const setTrue = () => {
  //     setisOpen(true);
  //     console.log(isOpen);
  //   };

  return (
    <>
      <button onClick={() => setisOpen(true)}>Open Modal</button>

      {isOpen && <h1> Hello World! </h1>}
      <button onClick={() => setisOpen(false)}>Close Modal</button>
    </>
  );
};

export default Modal;
