import {GET_STARTED, SHOW_VIDEO, GET_STARTED_CLICKED} from '../actions/types';

const initialState = {
    visible: true,
    showVideo: false,
    clicked: false
}

export default function(state = initialState, action ) {
    switch (action.type) {
        case GET_STARTED:
            return {
                ...state,
                visible: false,
                clicked: false
            }
        case GET_STARTED_CLICKED:
            return {
                ...state,
                visible: true,
                clicked: true
            }
        case SHOW_VIDEO:
            return {
                ...state,
                showVideo: true,
                clicked: false
            }

        default: return state;
    }
} 