import {HOME_PAGE, STARTER_PACK_PAGE, ETH_LOAN_PACK_PAGE} from '../actions/types';

const initialState = {
    homepage: true,
    starterPackPage: false,
    ethLoanPackPage: false
}

export default function(state= initialState, action) {
    switch (action.type) {
        case HOME_PAGE:
            return initialState;
        case STARTER_PACK_PAGE:
            return {
                ...state,
                homepage: false,
                starterPackPage: true,
                ethLoanPackPage: false
            }
        case ETH_LOAN_PACK_PAGE:
            return {
                ...state,
                homepage: false,
                starterPackPage: false,
                ethLoanPackPage: true
            }
        default: return state;
    }
}