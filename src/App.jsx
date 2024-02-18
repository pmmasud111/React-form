import { useState } from "react";
import "./App.css";
import ReusableComponent from "./ReusableComponent/ReusableComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Form /> */}
      <ReusableComponent></ReusableComponent>
    </>
  );
}

export default App;
