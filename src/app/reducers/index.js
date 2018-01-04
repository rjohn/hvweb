import { combineReducers } from 'redux'
import { isBusy, hasErrored, listUsers, setUser, editUser } from './admin'
import { loginIsPending, loginHasErrored, userIsAdmin, sessionChange } from './session'
import { forecast } from './weather'


// This is what controls the state object shape
export default combineReducers({
    isBusy: isBusy,
    hasErrored: hasErrored,
    users: listUsers,
    //user: [setUser,editUser],
    user: setUser,
    editUser: editUser,
    session: sessionChange, 
    loginHasErrored: loginHasErrored, 
    loginIsPending: loginIsPending,
    userIsAdmin: userIsAdmin,
    forecast: forecast
});
