import {STARTER_PACK, ETH_LOAN_PACK, READ_USER} from '../actions/types';

const initalState = {
    blockchainStarerPack: false,
    ethLoan: false,
    users: {}
}

export default function(state = initalState, action) {
    switch(action.type) {
        case READ_USER:
            return {
                ...state,
                users: action.payload
            }
        case STARTER_PACK:
            return {
                ...state,
                blockchainStarerPack: true
            }
        case ETH_LOAN_PACK:
            return {
                ...state,
                ethLoan: true
            }
        default: return state;
    }
}