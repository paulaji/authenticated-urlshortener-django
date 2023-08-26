import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  // using the useContext hook to access the loginUser function from AuthContext
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      {/* form on submit will go to the login user function defined in the AuthContext which will submit the username and password from this form and validate this in the backend connection, port8000 and if credentials match, it will return access and refresh tokens */}
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
