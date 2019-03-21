import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* HOME PAGE/ LANDING PAGE ROUTE COMPONENTS */}
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/" component={Footer} />

            {/* LOGIN ROUTE COMPONENTS */}
            <Route exact path="/login" component={Navbar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login" component={Footer} />

            {/* REGISTER ROUTE COMPONENTS */}
            <Route exact path="/register" component={Navbar} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register" component={Footer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
