import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import AdminUsers from './admin/AdminUsers';
import EditUser from './admin/EditUser';
import AdminCustomers from './admin/AdminCustomers';
import AdminSettings from './admin/AdminSettings';

class Admin extends Component {
  render() {

    return (

      <Router>
        <div>
          <div className="menu-centered">
            <ul className="menu">
              <li><Link to="/admin/users">Users</Link></li>
              <li><Link to="/admin/customers">Customers</Link></li>
              <li><Link to="/admin/settings">AdminSettings</Link></li>
            </ul>
          </div>

          <Switch>
            <ProtectedRoute path="/admin/users/:id" component={EditUser}/>
            <ProtectedRoute path="/admin/users" component={AdminUsers}/>
            <ProtectedRoute path="/admin/customers" component={AdminCustomers}/>
            <ProtectedRoute path="/admin/settings" component={AdminSettings}/>
          </Switch>

        </div>
      </Router>   
      
    );
  }
}

export default Admin;