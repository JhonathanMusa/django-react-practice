import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Insert from "../views/Insert";
import List from "../views/List";
import Delete from "../views/Delete";
import Update from "../views/Update";

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <Link className="nav-link " aria-current="page" to="/">
                  List
                </Link>
                <Link className="nav-link " aria-current="page" to="/insert">
                  Insert
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Route path="/" exact component={List} />
        <Route path="/insert" component={Insert} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/update/:id" component={Update} />
      </div>
    </Router>
  );
}
