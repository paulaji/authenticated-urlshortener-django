import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  // using the useContext hook to access the loginUser function from AuthContext
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
