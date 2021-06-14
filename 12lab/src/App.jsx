import React, { Component } from "react";
import "./styles.css";
import PublicRepositories from "./PublicRepositories";
import UserRepositories from "./UserRepositories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRepos: false,
      isUser: true
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState(() => {
              return { isRepos: true, isUser: false };
            });
          }}
        >
          Public Repositories
        </button>
        <button
          onClick={() => {
            this.setState(() => {
              return { isRepos: false, isUser: true };
            });
          }}
        >
          User Repositories
        </button>

        {this.state.isRepos && <PublicRepositories />}

        {this.state.isUser && <UserRepositories />}
      </div>
    );
  }
}

export default App;
