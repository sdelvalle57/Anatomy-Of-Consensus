import {GET_STARTED, SHOW_VIDEO, GET_STARTED_CLICKED} from './types';

export const getStarted = () => dispatch => {
    return dispatch({type: GET_STARTED});
}

export const getStarterClicked = () => dispatch => {
    return dispatch({type: GET_STARTED_CLICKED});
}

export const showVideo = () => dispatch => {
    return dispatch({type: SHOW_VIDEO});
}