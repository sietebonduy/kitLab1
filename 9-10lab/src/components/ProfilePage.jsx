import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
  function registered() {
    if (localStorage.getItem("registered")) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      {registered() ? <Redirect to="/" /> : null}
      <p>Login: {localStorage.getItem("login")}</p>
      <p>Password: {localStorage.getItem("password")}</p>
    </div>
  );
};

export default ProfilePage;
