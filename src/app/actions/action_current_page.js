import {HOME_PAGE ,STARTER_PACK_PAGE, ETH_LOAN_PACK_PAGE} from './types';

export const swithToHomePage = () => dispatch => {
    return  dispatch({
        type: HOME_PAGE
    })
} 

export const swithToStarterPackPage = () => dispatch => {
    return  dispatch({
        type: STARTER_PACK_PAGE
    })
}

export const swithToETHLoanPackPage = () => dispatch => {
    return  dispatch({
        type: ETH_LOAN_PACK_PAGE
    })
}