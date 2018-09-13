import {GET_STARTED, SHOW_VIDEO} from './types';

export const getStarted = () => dispatch => {
    return dispatch({type: GET_STARTED});
}

export const showVideo = () => dispatch => {
    return dispatch({type: SHOW_VIDEO});
}