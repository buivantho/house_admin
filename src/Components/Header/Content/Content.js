import React, { Component } from 'react';
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCSRz9lrw6UhwdfkZLxDbgLijEYPFKFW7c",
    authDomain: "housecleaning-48afb.firebaseapp.com",
    databaseURL: "https://housecleaning-48afb.firebaseio.com",
    projectId: "housecleaning-48afb",
    storageBucket: "housecleaning-48afb.appspot.com",
    messagingSenderId: "896399952076",
    appId: "1:896399952076:web:a37e46afa0223098a89a69",
    measurementId: "G-WY1HQ1G0GK"
  };
  firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

class Content extends Component {
    handleClick = () => {
        console.log('this isss:');
      }
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};

      }
      
componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
    render() {
        return (
            <div>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
    <div className="container">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đã Bán</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đơn hàng</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Thống kê</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Page Content */}
  <div className="container">
  <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  <button onClick={this.handleClick}>
        Click me
      </button>
  </div>
</div>

        );
    }
}

export default Content;