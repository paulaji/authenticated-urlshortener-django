import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user } = useContext(AuthContext);
  return (
    <>
      <Link to="/">Home</Link>
      {user ? <p>Logout</p> : <Link to="/login">Login</Link>}
      {/* if we have a user (user &&), display the username */}
      {user && <h2>Welcome, {user.username}</h2>}
      <span>
        NOTE: Below given <strong>token info</strong> is for demonstration
        purpose only and can be removed from the frontend!
      </span>
      {user && (
        <div>
          <h3>Access token info:</h3>
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
