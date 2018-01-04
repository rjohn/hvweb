import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Account from './components/Account'
import Login from './components/Login'
import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import Test from './Test'
import Home from './components/Home.js'
import Admin from './components/Admin'
import Contact from './components/Contact'
import Apps from './components/apps/Apps'
import Consulting from './components/consulting/Consulting'
import Dev from './components/development/Dev'
import './assets/css/app-style.css'
import $ from 'jquery';
import 'foundation-sites';

const store = configureStore(); // You can also pass in an initialState here

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log("Loading main App.js component");
  }

  componentDidMount() {
    //$(document).foundation();
    $(document).ready(function ($) {
      $(document).foundation();
    });
  }

  render() {

    return (
        
        <Provider store={store}>
          <Router>
            <div className="App">

              <div  data-sticky-container>
              
                <Nav/>

                <Switch>
                
                  <ProtectedRoute path="/protected" component={Test}/>
                  <ProtectedRoute path="/account" component={Account}/>
                  <ProtectedRoute path="/admin" component={Admin}/>
                  <Route path="/help" component={Test}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/apps" component={Apps}/>
                  <Route path="/consulting" component={Consulting}/>
                  <Route path="/development" component={Dev}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/" component={Home}/>
                  <Route path="/:user" component={Test}/>

                </Switch>
              </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;