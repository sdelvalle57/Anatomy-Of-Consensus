import axios from 'axios';

import {auth} from '../credentials/client';
//import * as admin from 'firebase-admin';
import {OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, GET_USER_LOGIN, 
    USER_NOT_LOGGED, SIGN_IN, REMOVE_PACKS, CHECK_TOKEN} from './types';
import {readUserPack} from './action_add_user_pack';

export const openLoginModal = () => dispatch => {
    return dispatch({type: OPEN_LOGIN_MODAL});
}

export const closeLoginModal = () => dispatch => {
    return dispatch({type: CLOSE_LOGIN_MODAL});
}

export const socialSignin = (provider) => dispatch => {
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
                dispatch(validateUser(token));
                dispatch({
                    type: GET_USER_LOGIN,
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

export const validateUser =  (token) => async dispatch => {
    const res = await axios.post('/api/login', {
        userToken: token
    })
    dispatch({
        type: CHECK_TOKEN,
        payload: res
    })

}
