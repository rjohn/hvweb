import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { executeLoginRequest, executeSignOutRequest } from '../actions/session'

class Login extends Component {
  
  componentDidMount() {
    //this.props.fetchData(this.state.username, this.state.password);
  }
  
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.loginClicked = this.loginClicked.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  loginClicked(event) {
    console.log('1');
    console.log('Login was clicked: ' + this.state);
    this.props.doLogin(this.state.username, this.state.password);
    event.preventDefault();
  }

  handleUserChange(event) {
    console.log('setting username: '+event.target.value);
    this.setState({username : event.target.value});
    console.log('State: ' + JSON.stringify(this.state));
  }
  
  handlePasswordChange(event) {
    console.log('setting password: '+event.target.value);
    this.setState({password : event.target.value});
    console.log('State: ' + JSON.stringify(this.state));
  }

  render() {

    if (!this.props.session) {
      if (this.props.hasErrored) {
        return (<p> there was an error </p>);
      } else {
        return (
          <div>

            <div className="row">
              <div className="small-12 columns">
                <div className="sub-title">Login</div>
              </div>
            </div>

            <div className="row">

              <div className="columns small-offset-3 small-6 large-offset-3 large-6">
                <div className="">
                  
                  <br/><br/><br/>
                  
                  <div className="callout">

                    <div className="row">
                      <div className="small-12 column">
                        <h5 className="callout-title light">Enter Credentials</h5>
                      </div>
                    </div>

                    <div className="row">
                      <div className="small-3 columns">
                        <label htmlFor="username" className="text-right middle">Username</label>
                      </div>
                      <div className="small-9 columns">
                        <input type="text" className="form-control" id="username" value={this.state.username} placeholder="Username" onChange={this.handleUserChange}/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="small-3 columns">
                        <label htmlFor="password" className="text-right middle" >Password</label>
                      </div>
                      <div className="small-9 columns">
                          <input type="password" className="form-control" id="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange}/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="small-12 columns">
                        <button type="button" className="button" onClick={this.loginClicked}>Login</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="small-6 columns text-left">
                        <a href="/signup">Forgot username/password &#10095;</a>
                      </div>
                      <div className="small-6 columns text-right">
                        <a href="/signup">Not Enrolled? Signup &#10095;</a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div> 
          </div>
        )
      }
    } else {
      return (
        <div>
          <div className="menu-centered">
              <ul className="menu">
                <li><Link to="/"></Link></li>
            </ul>
          </div>

          <div className="row">

          
          </div>

        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps: "+JSON.stringify(state)); // state
  //console.log("ownProps: "+JSON.stringify(ownProps)); // ownProps
  return {
      session: state.session,
      //isAdmin: state.userIsAdmin,
      hasErrored: state.loginHasErrored,
      isPending: state.loginIsPending
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps"); // state
  return {
      doLogin: (username, password) => dispatch(executeLoginRequest(username, password)), 
      doSignOut: () => dispatch(executeSignOutRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);