import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};


function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="App">
      <div>
        <h1>UseReducer Hook</h1>
        <p>
          UseReducer is an alternative to the useState hook.
          <br />
          This hooks allows the users/developer to create variables <br />
          that when their values are changed, the page will rerender to show
          those new values
        </p>
        <p>Benefits</p>
        <h1>{state.count}</h1>
        <button onClick={() => {dispatch({type: 'INCREMENT'}); dispatch({type: 'toggleShowText'})}}>Click Here</button>
        {state.showText && <p>This is a text</p>}
      </div>
    </div>
  );
}

export default ReducerTutorial;
