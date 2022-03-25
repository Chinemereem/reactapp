import React from "react";
import { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);
  const [Dcount, setDCount] = useState(0);
  const [inputName, setInputName] = useState("");
  return (
    <div className="App">
      <div>

        <h1>UseState Hook</h1>
        <p>useState is a Hook that allows you to have state variables in functional components.</p>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        <h1>{Dcount}</h1>
        <button
          onClick={() => {
            setDCount(Dcount - 1);
          }}
        >
         Decrement
        </button></div>
      <h1>{inputName}</h1>
      <input
        type="text"
        placeholder="Write here"
        onChange={(event) => {
          setInputName(event.target.value);
        }}
      />
    </div>
  );
}

export default UseState;
