import React from "react";
import "./styles.css";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import ProfilePage from "./components/ProfilePage";
import SignInPage from "./components/SignInPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
