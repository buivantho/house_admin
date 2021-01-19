import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Nav extends Component {
    handleClick() {
        this.props.history.push('/oder');
      }
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
                    <li className="nav-item">
                    <button type="button" onClick={() => this.handleClick()}>
        Hello
      </button>
                    </li>
                    <li className="nav-item">
                    <Link to="/oder"><a href='#' >sss</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Thống kê</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </Router>
        
    );
  }
}
