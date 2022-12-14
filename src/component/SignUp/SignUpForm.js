import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = () => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = () => {
    setPassword(event.target.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </form>
  );
};

export default SignUpForm;
