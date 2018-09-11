import {auth} from '../firebase';
import {LOGIN, LOGOUT, CLOSE_LOGIN_MODAL, GET_USER_LOGIN} from './types';

export const performLogin = () => dispatch => {
    return dispatch({type: LOGIN});
}

export const closeModal = () => dispatch => {
    return dispatch({type: CLOSE_LOGIN_MODAL});
}

export const performLogout = () => dispatch => {
    return dispatch({type: LOGOUT});
}

export const getUser = () => dispatch => {
    console.log("getUsr");
    return auth.onAuthStateChanged(user => {
        console.log('userAuth', user);
         dispatch({
            type: GET_USER_LOGIN,
            payload: user
        });
    })
}