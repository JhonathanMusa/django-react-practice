import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../views/Home";
import Insert from "../views/Insert";
import List from "../views/List";

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <Link className="nav-link " aria-current="page" to="/list">
                  List
                </Link>
                <Link className="nav-link " aria-current="page" to="/insert">
                  Insert
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/insert" component={Insert} />
      </div>
    </Router>
  );
}
