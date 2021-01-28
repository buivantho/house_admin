
import React, { Component } from 'react';
import Content from './Components/Header/Content/Content'
import Nav from './Components/nav/nav'
import OrderComponent from './Components/Order/OrderComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
class App extends Component {

  
  render() {
    return (
      <div>
        <Nav></Nav>
        <Router>
          <Switch>
          {/* <Router exact path='/' component={HomeComponent}/>
                <Router path='/oder' component={OrderComponent}/>
                <Router path='/content' component={Content}/> */}
            <Route exact path="/" component={HomeComponent} />
            <Route path="/oder" component={OrderComponent} />
            <Route path='/content' component={Content}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;