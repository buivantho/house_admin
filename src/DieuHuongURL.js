import React, { Component } from 'react';
import Content from './Components/Header/Content/Content';
import OrderComponent from './Components/Order/OrderComponent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                
                <Router exactact path='/' children={HomeComponent}/>
                <Router path='/oder' children={OrderComponent}/>
                <Router path='/content' children={Content}/>
            </Router>
        );
    }
}

export default DieuHuongURL;