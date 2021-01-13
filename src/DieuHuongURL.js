import React, { Component } from 'react';
import Content from './Components/Header/Content/Content';
import OrderComponent from './Components/Order/OrderComponent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
            <div>
                <Router exactact path='/' Component={Content}/>
                <Router  path='/oder' Component={OrderComponent}/>
            </div>
        </Router>
        );
    }
}

export default DieuHuongURL;