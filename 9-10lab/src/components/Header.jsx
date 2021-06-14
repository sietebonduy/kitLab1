import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function registered() {
    if (localStorage.getItem("registered")) {
      return true;
    } else return false;
  }
  function logOut() {
    localStorage.removeItem("registered");
    window.location.reload();
  }
  return (
    <div className="header">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/sign-in">Sign in</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {registered() ? <button onClick={() => logOut()}>LogOut</button> : null}
    </div>
  );
};

export default Header;
