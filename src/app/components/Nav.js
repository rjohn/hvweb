import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import LogoImg from '../assets/img/helvellyn-logo-dark-no-text.png'
import LogoImg from '../assets/img/helvellyn-logo-spring-no-text.png'
import { executeSignOutRequest } from '../actions/session'

class Nav extends Component {
  
  componentDidMount() {
    //this.props.fetchData(this.state.username, this.state.password);
  }
  
  constructor(props) {
    super(props);
    // this.state = {username: '', password: ''};

    this.signOutClicked = this.signOutClicked.bind(this);
    // this.handleUserChange = this.handleUserChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  signOutClicked(event) {
    console.log('Sign Out was clicked: ' + this.state);
    this.props.doSignOut();
    event.preventDefault();
  }

  render() {

    return (

      <div className="top-bar sticky" data-sticky data-margin-top="0">
                
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon light" type="button" data-toggle="true"></button>
          </span>
          <img className="logo-icon" src={LogoImg} alt="logo" />
          <a href="/" className="brand-text">Helvellyn</a>
        </div>
        
        <div id="responsive-menu">
          <div className="top-bar-right">
            <ul className="menu">
              <li><Link to="/"><i className="fi-home size-30"></i></Link></li>
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/consulting">Consulting</Link></li>
              <li><Link to="/development">Development</Link></li>
              
              {( (session) => { if (session) return ( <li><Link to="/account">Account</Link></li> ) })(this.props.session) }
              {( (isAdmin) => { if (isAdmin) return ( <li><Link to="/admin">Admin</Link></li> ) })(this.props.isAdmin) }
              {( (session) => { if (!session) return ( <li><Link to="/login">Login</Link></li> ) })(this.props.session) }
              {( (session) => { if (session) return ( <li><button type="button" className="top-bar-button" onClick={this.signOutClicked}>Sign Out</button></li> ) })(this.props.session) }
              
              
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/help"><i className="material-icons">help</i></Link></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Nav.mapStateToProps: "+JSON.stringify(state)); // state
  //console.log("ownProps: "+JSON.stringify(ownProps)); // ownProps
  return {
      session: state.session,
      isAdmin: state.userIsAdmin,
      isPending: state.loginIsPending
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps"); // state
  return {
      doSignOut: () => dispatch(executeSignOutRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);