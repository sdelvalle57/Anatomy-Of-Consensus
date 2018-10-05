import axios from 'axios';

import {auth} from '../credentials/client';
import {OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, GET_USER_DATA, 
    USER_NOT_LOGGED, SIGN_IN, REMOVE_PACKS, SAVE_SESSION} from './types';
import {readUserPack} from './action_add_user_pack';
import { switchTo } from './action_pager_admin';

export const openLoginModal = () => dispatch => {
    return dispatch({type: OPEN_LOGIN_MODAL});
}

export const closeLoginModal = () => dispatch => {
    return dispatch({type: CLOSE_LOGIN_MODAL});
}

export const socialSignin = (provider) => dispatch => {
    //open login pop up implemetation by firebase
    auth.signInWithPopup(provider).then(() => {
        dispatch({
            type: SIGN_IN,
            error: null
        })
    }, (error) => {
        dispatch({
            type: SIGN_IN,
            error: error
        })
    })
}

export const performLogout = () => async dispatch => {
    return auth.signOut().then(() => {
        dispatch({type: REMOVE_PACKS})
    })
     
}

export const getUser = () => (dispatch, getState) => {
    return auth.onAuthStateChanged(user => {
        if(user != null) {
            return user.getIdToken().then((token) => {
                user.sessionToken = token;
                dispatch(saveSession(token));
                dispatch({
                    type: GET_USER_DATA,
                    payload: user
                });
                dispatch(readUserPack(user.uid));       
            })
        } else {
            dispatch(logOutUser())
        }
    })
}

export const logOutUser = () => async (dispatch) => {
    await axios.post('/api/logout');
    dispatch({
        type: USER_NOT_LOGGED
    })
}

export const checkSession = (req, res) => (dispatch, getState) => {
    //we first check for the session saved in express server,
    // if null it goes back to index, if not we check if we are not
    // anymore in server side rendering to check redux state
    //if login state doesnt exist it goes back to index
    const user = req && req.session ? req.session.decodedToken : null;
    if(user == null && req) {
        res.redirect('/index');
        res.end();
        
    } else if(!req) {
        //this should never happen, bcause session should be handling it,
        //however session not always will be null if user has already
        //signed out
        const state = getState();
        if(!state.login || !state.login.user || !state.login.user.uid
            || !state.login.res || !state.login.res.data || 
            !state.login.res.data.decodedToken){
                dispatch(switchTo('/index'));
        }
    }
}

export const saveSession =  (token) => async dispatch => {
    //validates and saves login token in the express js server
    // server.js
    const res = await axios.post('/api/login', {
        userToken: token
    })
    dispatch({
        type: SAVE_SESSION,
        payload: res
    })

}
