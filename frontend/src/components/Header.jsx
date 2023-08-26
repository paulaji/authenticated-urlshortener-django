import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Link to="/">Home</Link>
      {user ? (
        <Link onClick={logoutUser}>Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {/* if we have a user (user &&), display the username */}
      {user && <h2>Namaskaaram, {user.username}</h2>}
      {user && (
        <span>
          <strong>JWT-details</strong> <br />
          Info given below is for
          <strong> demonstration purpose only!</strong>
        </span>
      )}
      {user && (
        <div>
          <h3>Token info:</h3>
          <p>Token Type: {user.token_type}</p>
          <p>Expiration: {user.exp}</p>
          <p>Issued At: {user.iat}</p>
          <p>JTI: {user.jti}</p>
          <p>User ID: {user.user_id}</p>
        </div>
      )}
    </>
  );
};

export default Header;
