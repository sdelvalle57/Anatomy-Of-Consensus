import {LOGIN, LOGOUT, CLOSE_LOGIN_MODAL, GET_USER_LOGIN} from '../actions/types';

const initialState = {
    showModal: false,
    loged: false,
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                showModal: true
            }
        case CLOSE_LOGIN_MODAL:
            return {
                ...state,
                showModal: false
            }
        case LOGOUT:
            return {
                ...state,
                loged: false
            }
        case GET_USER_LOGIN:
            return{
                ...state,
                user: action.payload,
                loged: true
            }

        default: return state;
    }
}