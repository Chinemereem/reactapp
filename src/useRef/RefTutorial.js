import React, { useRef, useState } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    // when you have a reference, you need to access the current value of the reference
  };

  //another example
  const [inputName, setInputName] = useState("");
  const textRef = useRef(null);
  const buttonClick = () => {
    textRef.current.value = "";
  };
  return (
    <div>
      <h1>UseRef Hook</h1>
      <p>This hook is the easiest way to access and manipulate DOM elements</p>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      {/* his button focuses on the input whenever it gets clicked */}
      <button onClick={onClick}>T</button>
      <div>
        <p>{inputName}</p>
        <input
          type="text"
          placeholder="Ex..."
          ref={textRef}
          onChange={(event) => {
            setInputName(event.target.value);
          }}
        />
        <button onClick={buttonClick}>clicj</button>
      </div>
    </div>
  );
}

export default RefTutorial;
