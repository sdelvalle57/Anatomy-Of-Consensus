
import {Router} from '../routes';

export const changePageName = (page) => dispatch => {
    return  dispatch({
        type: page
    })
} 

export const switchTo = (page) => dispatch => {
    Router.pushRoute(page);
    return;
}
