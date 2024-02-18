import React from "react";

const ChildComponent = ({ title, handleSubmit, handleText, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <span>{children}</span>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" required />
        <br />
        <input type="email" name="email" required />
        <br />
        <input type="number" name="number" required />
        <br />
        <input type="password" name="password" required />
        <br />
        <input type="submit" value={handleText} />
        {/* {error && <p className="color:red">Please input a valid password</p>} */}
      </form>
    </div>
  );
};

export default ChildComponent;
