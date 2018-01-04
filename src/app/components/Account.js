import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Info from './account/Info';
import Payment from './account/Payment';

class Account extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {

    return (
      
      <Router>
      <div>
      
        <div className="menu-centered">
          <ul className="menu">
            <li><Link to="/account/info">Info</Link></li>
            <li><Link to="/account/payment">Payment</Link></li>
          </ul>
        </div>

        <Switch>
          <Route path="/account/info" component={Info}/>
          <Route path="/account/payment" component={Payment}/>
        </Switch>

      </div>
    </Router>

    );
  }
}

export default Account;
