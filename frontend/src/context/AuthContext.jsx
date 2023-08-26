import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  //  before authentication, setting user and token value as null
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

  // sending data to backend hosted on port8000 to request authentication tokens
  // 8000/api/token/ contains provision to type in username and password, so we send those there
  // if authenticated, we can fetch the refresh and access token
  let loginUser = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    let response = fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: null, password: null }),
    });
  };

  // assigning username and password from loginUser() to a variable
  let contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
