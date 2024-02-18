import React, { useState } from "react";

const FormSubmite = () => {
  const handleSubmite = (e) => {
    const [name, setName] = useState("Masud");
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmite}>
        <input onChange={handleChange} value={name} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default FormSubmite;
