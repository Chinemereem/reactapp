import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function LoginUser() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ name: "Stephanie", age: 20, email: "stephanie@gmail.com" })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default LoginUser;
