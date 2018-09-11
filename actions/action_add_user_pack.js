import {STARTER_PACK, ETH_LOAN_PACK, READ_USER} from './types';
import {database} from '../firebase';

export const readUserPack = (email) => dispatch => {
    return database.on('value', snapshot => {
         dispatch({
            type: READ_USER,
            payload: snapshot.val()
        })
    })
}

export const addStarterPack = (email) => dispatch => {
    database.push({
        user: email,
        blockchainStarterPack: true
    })
    return dispatch({type: STARTER_PACK});
}

export const addEthLoanPack = (email) => dispatch => {
    database.push({
        user: email,
        ethLoan: true
    })
    return dispatch({type: ETH_LOAN_PACK});
}