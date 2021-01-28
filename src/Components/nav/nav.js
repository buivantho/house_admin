import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
                <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/oder">oder</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/content">Store</Link>
                    </li>
                  
                    </ul>
                </div>
                </div>
            </nav>
        </Router>
        
    );
  }
}
