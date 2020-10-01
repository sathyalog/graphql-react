import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Checkout from "./Checkout";
import {
  HomeIcon,
  ShareIcon,
  SignInIcon,
  RocketIcon,
} from "@primer/octicons-react";

function Navbar() {
  return (
      <nav className="navbar navbar-light">
        <h1 className="display-4">Learn GraphQL</h1>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <HomeIcon size={16} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              <SignInIcon size={16} /> Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              <ShareIcon size={16} /> Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">
              <RocketIcon size={16} /> Checkout
            </Link>
            {/* <a className="nav-link" href="#">Happy Hour</a> */}
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
