import {GET_STARTED, SHOW_VIDEO} from '../actions/types';

const initialState = {
    visible: true,
    showVideo: false
}

export default function(state = initialState, action ) {
    switch (action.type) {
        case GET_STARTED:
            return {
                ...state,
                visible: false
            }
        case SHOW_VIDEO:
            return {
                ...state,
                showVideo: true
            }

        default: return state;
    }
} 