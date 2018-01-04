import axios from 'axios'
import { BASE_URL , contentHeaders } from './config'

export function loginHasErrored(bool) {
  return {
    type: 'LOGIN_HAS_ERRORED',
    hasErrored: bool
  };
}

export function loginIsPending(bool) {
  return {
    type: 'LOGIN_IS_PENDING',
    isPending: bool
  };
}

export function sessionChange(session) {
  return {
    type: 'SESSION_CHANGE',
    session: session
  };
}

export function userIsAdmin(bool) {
  return {
    type: 'USER_IS_ADMIN',
    userIsAdmin: bool
  };
}

export function executeLoginRequest(username, password) {
    
  console.debug("executeLoginRequest: " + username + " / " +  password);
  const authUrl = `${BASE_URL}/auth`;

  const body = { username: username, password: password};
  var config = { headers: contentHeaders };

  return (dispatch) => {
    console.log("1");
    dispatch(loginIsPending(true));
    console.log("2");
    var session;
    axios.post(authUrl, body, config)
      .then((response) => {
        console.log("response: "+JSON.stringify(response));
        session = response.data;
        if (!session) {
          throw Error("No session object returned");
        }
        else {
          if (!session.success) {
            throw Error(session.message);
          }
          else {
            if (session.isAdmin) {
              dispatch(userIsAdmin(true));
            }
          }
        }
        dispatch(loginIsPending(false));
        return session;
      })
      //.then((response) => response.json())
      .then((session) => {
        console.log("session: "+JSON.stringify(session));
        dispatch(sessionChange(session));
      })
      .catch(() => dispatch(loginHasErrored(true)));
  };
}

export function executeSignOutRequest() {
  console.log("executeSignOutRequest called");
  return (dispatch) => {
    dispatch(loginIsPending(true))
    dispatch(userIsAdmin(false))
    dispatch(sessionChange(null))
  }
}
