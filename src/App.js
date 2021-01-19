
import React, { Component } from 'react';
import Content from './Components/Header/Content/Content'
import Nav from './Components/nav/nav'
import OrderComponent from './Components/Order/OrderComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {

  
  render() {
    return (
      <div>
        <Nav></Nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/oder" component={OrderComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;