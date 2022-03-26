import React, { useEffect, useLayoutEffect, useRef } from "react";

function LayoutTutoria() {
  const inputRef = useRef(null);
  // UseLayoutEffect is fundamentally called in an earlier stage of the page rendering
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);
  return (
    <div>
      <h1>useLayoutEffect</h1>
      <input
        ref={inputRef}
        value="Stephanie"
        style={{ width: 400, height: 100 }}
      />
    </div>
  );
}

export default LayoutTutoria;
