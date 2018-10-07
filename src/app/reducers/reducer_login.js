import {OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, GET_USER_DATA, 
    USER_NOT_LOGGED} from '../actions/types';

const initialState = {
    showModal: false,
    user: '',
    loading: true,
    signout: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_LOGIN_MODAL:
            return {
                ...state,
                showModal: true
            }
        case CLOSE_LOGIN_MODAL:
            return {
                ...state,
                showModal: false
            }
        case GET_USER_DATA:
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        case USER_NOT_LOGGED:
            return {
                ...state,
                user: '',
                loading: false
            };
        

        default: return state;
    }
}