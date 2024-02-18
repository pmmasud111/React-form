import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    password.length < 6 && setError(true);
    console.log(name, email, phone, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlenumberChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type="text" name="name" required />
      <br />
      <input onChange={handleemailChange} type="email" name="email" required />
      <br />
      <input
        onChange={handlenumberChange}
        type="number"
        name="number"
        required
      />
      <br />
      <input
        onChange={handlePasswordChange}
        type="password"
        name="password"
        required
      />
      <br />
      <button>
        <input type="submit" />
      </button>
      {error && <p className="color:red">Please input a valid password</p>}
    </form>
  );
}
