import { createContext, useState, useEffect } from "react";

// to decode the token object (access, refresh and username which we encoded)
import jwt_decode from "jwt-decode";
import { Navigate, json } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // previously useHistory

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  //  before authentication, setting user and token value as null
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  // sending data to backend hosted on port8000 to request authentication tokens
  // 8000/api/token/ contains provision to type in username and password, so we send those there
  // if authenticated, we can fetch the refresh and access token
  let loginUser = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    // storing access and refresh tokens in a variable response
    // retrieving this using the fetch method
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // passing in the username and password to the targeted url
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    // obtaining the tokens after username and password submission
    let data = await response.json();
    console.log("data:", data);
    console.log("response:", response);

    if (response.status === 200) {
      // using useState to store the values obtained, into the authTokens variable
      // data variable contains the access and refresh tokens
      setAuthTokens(data);
      // decode the access token
      setUser(jwt_decode(data.access));
      // storing token to local storage so that even if we refresh the page, we stay signed in
      localStorage.setItem("authTokens", JSON.stringify(data));
      // redirect the user to the home page
      navigate("/");
    } else {
      alert("We have encountered an error!");
    }
  };

  // logout
  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login/");
  };

  // update the token because we have set access token time as 5 minutes, token rotation and blacklisting
  let updateToken = async (e) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // passing in the username and password to the targeted url
      body: JSON.stringify({ refresh: authTokens.refresh }),
    });
  };

  // assigning username and password from loginUser() to a variable
  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
