import React from "react";
import ChildComponent from "./ChildComponent";

const ReusableComponent = () => {
  const handleSingUpSubmite = (data) => {
    console.log(data);
  };

  const handleProfileUpdate = (data) => {
    console.log(data);
  };
  return (
    <div>
      <ChildComponent
        title="Sing Up"
        handleText="SingUp"
        handleSubmit={handleSingUpSubmite}
      >
        <div>
          <h1>SingUp</h1>
          <h2>Please singUp right now</h2>
        </div>
      </ChildComponent>
      <ChildComponent
        title="Profile Update"
        handleText="Update"
        handleSubmit={handleProfileUpdate}
      >
        <div>
          <h1>Update</h1>
          <h2>Alwyes keep your profile Update</h2>
        </div>
      </ChildComponent>
    </div>
  );
};

export default ReusableComponent;
