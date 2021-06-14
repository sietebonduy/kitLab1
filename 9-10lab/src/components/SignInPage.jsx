import React from "react";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("registered", true);
  }

  render() {
    return (
      <div className="form">
        <form action="">
          <input placeholder="login" type="text" name="" id="login" />
          <br />
          <input placeholder="password" type="text" name="" id="password" />
          <br />
          <button onClick={() => this.register()}>OK</button>
        </form>
      </div>
    );
  }
}

export default SignInPage;
