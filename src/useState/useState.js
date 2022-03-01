import React from "react";
import { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);
  const [inputName, setInputName] = useState("");
  return (
    <div className="App">
      <div>
        {" "}
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
      </div>
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
